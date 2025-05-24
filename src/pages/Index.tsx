import { useState, useEffect, useCallback } from "react";
import { User, UserProgress, UserQuizData, Exercise } from "@/types";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";
import ProgramCalendar from "@/components/ProgramCalendar";
import ExerciseLibrary from "@/components/ExerciseLibrary";
import ExerciseDetail from "@/components/ExerciseDetail";
import RecipeLibrary from "@/components/RecipeLibrary";
import MeditationLibrary from "@/components/MeditationLibrary";
import ProfileScreen from "@/components/ProfileScreen";
import MedicalQuiz from "@/components/MedicalQuiz";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import OnboardingTutorial from "@/components/OnboardingTutorial";
import PainFeedbackForm, { PainFeedbackData } from "@/components/PainFeedbackForm";
import { exercises } from "@/data/exercises";
import { scientificExercises } from "@/data/scientificExercises";
import ErrorBoundary from "@/components/ErrorBoundary";

type View = 'dashboard' | 'program' | 'exercises' | 'exercise-detail' | 'recipes' | 'meditation' | 'profile' | 'quiz' | 'disclaimer' | 'tutorial' | 'feedback' | 'nutrition';

// Default user for all
const defaultUser: User = {
  id: '1',
  name: 'Ana',
  email: 'ana@exemplo.com',
  photo: '😊',
  onboardingCompleted: false,
  quizCompleted: false,
  disclaimerAccepted: false,
  tutorialCompleted: false
};

// Default progress for all
const defaultProgress: UserProgress = {
  completedDays: 0,
  totalMinutes: 0,
  completedExercises: [],
  streak: 0,
  achievements: [],
  lastActive: new Date().toISOString(),
  painHistory: [],
  dailyCheckins: []
};

// Storage keys
const STORAGE_KEYS = {
  USER: 'userData',
  PROGRESS: 'userProgress',
  BACKUP_USER: 'userData_backup',
  BACKUP_PROGRESS: 'userProgress_backup',
  LAST_BACKUP: 'lastBackupTime'
};

const Index = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [currentUser, setCurrentUser] = useState<User>(defaultUser);
  const [userProgress, setUserProgress] = useState<UserProgress>(defaultProgress);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [showPostExerciseFeedback, setShowPostExerciseFeedback] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  // Load data safely from localStorage
  const safelyLoadData = useCallback(<T,>(key: string, defaultValue: T): T => {
    try {
      const savedData = localStorage.getItem(key);
      if (!savedData) return defaultValue;
      
      const parsedData = JSON.parse(savedData) as T;
      return parsedData || defaultValue;
    } catch (error) {
      console.error(`Error loading data from ${key}:`, error);
      
      // Try to load from backup
      try {
        const backupKey = `${key}_backup`;
        const backupData = localStorage.getItem(backupKey);
        if (backupData) {
          console.log(`Restored from backup: ${backupKey}`);
          return JSON.parse(backupData) as T;
        }
      } catch (backupError) {
        console.error('Backup recovery failed:', backupError);
      }
      
      return defaultValue;
    }
  }, []);

  // Save data safely to localStorage
  const safelySaveData = useCallback((key: string, data: any) => {
    try {
      const dataString = JSON.stringify(data);
      localStorage.setItem(key, dataString);
      
      // Create backup on every save
      localStorage.setItem(`${key}_backup`, dataString);
      localStorage.setItem(STORAGE_KEYS.LAST_BACKUP, new Date().toISOString());
      
      return true;
    } catch (error) {
      console.error(`Error saving data to ${key}:`, error);
      return false;
    }
  }, []);

  // Load user data and progress from localStorage on mount
  useEffect(() => {
    const loadUserData = () => {
      const savedUser = safelyLoadData<User>(STORAGE_KEYS.USER, defaultUser);
      const savedProgress = safelyLoadData<UserProgress>(STORAGE_KEYS.PROGRESS, defaultProgress);
      
      setCurrentUser(savedUser);
      setUserProgress(savedProgress);
      
      // Check if it's the first time opening the app
      if (!savedUser.onboardingCompleted) {
        setCurrentView('quiz');
      }
      
      setDataLoaded(true);
    };

    loadUserData();
  }, [safelyLoadData]);

  // Save user data and progress to localStorage whenever they change
  useEffect(() => {
    if (dataLoaded) {
      safelySaveData(STORAGE_KEYS.USER, currentUser);
      safelySaveData(STORAGE_KEYS.PROGRESS, userProgress);
    }
  }, [currentUser, userProgress, dataLoaded, safelySaveData]);

  // Check for new day and update streak
  useEffect(() => {
    if (!dataLoaded || !userProgress.lastActive) return;

    const checkStreak = () => {
      const lastActive = new Date(userProgress.lastActive || '');
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - lastActive.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // User returned after exactly 1 day - increment streak
        setUserProgress(prev => ({
          ...prev,
          streak: prev.streak + 1,
          lastActive: today.toISOString()
        }));
      } else if (diffDays > 1) {
        // User missed days - reset streak
        setUserProgress(prev => ({
          ...prev,
          streak: 1,
          lastActive: today.toISOString()
        }));
      } else if (diffDays === 0 && today.getDate() !== lastActive.getDate()) {
        // Same day but different day of month (after midnight)
        setUserProgress(prev => ({
          ...prev,
          streak: prev.streak + 1,
          lastActive: today.toISOString()
        }));
      }
    };

    checkStreak();
  }, [userProgress.lastActive, dataLoaded]);

  const handleCompleteQuiz = (quizData: UserQuizData) => {
    // Update user data with quiz information
    setCurrentUser(prev => ({
      ...prev,
      age: quizData.age,
      medicalConditions: quizData.healthConditions,
      painAreas: quizData.painAreas,
      availableTime: quizData.availableTime,
      quizCompleted: true
    }));
    
    // Move to disclaimer step
    setCurrentView('disclaimer');
  };

  const handleDisclaimerAccept = () => {
    setCurrentUser(prev => ({
      ...prev,
      disclaimerAccepted: true
    }));
    
    setCurrentView('tutorial');
  };

  const handleDisclaimerSupport = () => {
    // In a real app, this would open a support chat or contact form
    alert('Suporte não disponível nesta versão de demonstração.');
  };

  const handleTutorialComplete = () => {
    setCurrentUser(prev => ({
      ...prev,
      tutorialCompleted: true,
      onboardingCompleted: true
    }));
    
    setCurrentView('dashboard');
  };

  const handleUpdateUser = (userData: User) => {
    setCurrentUser({...userData, onboardingCompleted: true});
  };

  const handleResetProgress = () => {
    // Backup current data before reset
    const backupTimestamp = new Date().toISOString();
    try {
      localStorage.setItem(`${STORAGE_KEYS.USER}_backup_${backupTimestamp}`, JSON.stringify(currentUser));
      localStorage.setItem(`${STORAGE_KEYS.PROGRESS}_backup_${backupTimestamp}`, JSON.stringify(userProgress));
    } catch (error) {
      console.error('Error creating backup before reset:', error);
    }
    
    setUserProgress(defaultProgress);
    setCurrentUser({
      ...defaultUser,
      onboardingCompleted: false,
      quizCompleted: false,
      disclaimerAccepted: false,
      tutorialCompleted: false
    });
    
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.PROGRESS);
    
    // Restart onboarding
    setCurrentView('quiz');
  };

  const handlePreExerciseFeedback = (feedbackData: PainFeedbackData) => {
    // Store pre-exercise feedback
    const today = new Date().toISOString().split('T')[0];
    
    setUserProgress(prev => {
      const updatedProgress = {
        ...prev,
        painHistory: [
          ...(prev.painHistory || []),
          {
            date: today,
            painLevel: feedbackData.painLevel,
            painAreas: feedbackData.tensionAreas
          }
        ]
      };
      
      // Create backup immediately after important changes
      safelySaveData(STORAGE_KEYS.PROGRESS, updatedProgress);
      
      return updatedProgress;
    });
    
    setCurrentView('exercise-detail');
  };

  const handlePostExerciseFeedback = (feedbackData: PainFeedbackData) => {
    // Store post-exercise feedback and update daily checkins
    const today = new Date().toISOString().split('T')[0];
    const preExercisePain = userProgress.painHistory?.[userProgress.painHistory.length - 1]?.painLevel || 0;
    
    setUserProgress(prev => {
      const updatedProgress = {
        ...prev,
        dailyCheckins: [
          ...(prev.dailyCheckins || []),
          {
            date: today,
            painBefore: preExercisePain,
            painAfter: feedbackData.painLevel,
            energy: feedbackData.energyLevel,
            mood: 'bem', // Default value
            exercises: selectedExercise ? [selectedExercise.id.toString()] : []
          }
        ]
      };
      
      // Create backup immediately
      safelySaveData(STORAGE_KEYS.PROGRESS, updatedProgress);
      
      return updatedProgress;
    });
    
    setShowPostExerciseFeedback(false);
    setCurrentView('exercises');
  };

  const handleExerciseComplete = (exerciseId: number) => {
    if (!userProgress.completedExercises.includes(exerciseId.toString())) {
      // Only increment completedDays when completing a new exercise
      const shouldIncrementDay = userProgress.completedExercises.length % 3 === 0;
      
      setUserProgress(prev => {
        const updatedProgress = {
          ...prev,
          completedExercises: [...prev.completedExercises, exerciseId.toString()],
          totalMinutes: prev.totalMinutes + parseInt(selectedExercise?.duration || '0'),
          completedDays: shouldIncrementDay ? prev.completedDays + 1 : prev.completedDays
        };
        
        // Create backup immediately
        safelySaveData(STORAGE_KEYS.PROGRESS, updatedProgress);
        
        return updatedProgress;
      });
      
      // Show post-exercise feedback after completing an exercise
      setShowPostExerciseFeedback(true);
    } else {
      setCurrentView('exercises');
    }
  };

  const handleTabChange = (tab: View) => {
    const allowedTabs = ['dashboard', 'program', 'exercises', 'meditation', 'recipes', 'nutrition'];
    
    if (allowedTabs.includes(tab)) {
      setCurrentView(tab);
    }
  };

  const handleExerciseSelect = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setCurrentView('exercise-detail');
  };

  const handleProfileClick = () => {
    setCurrentView('profile');
  };

  // If showing post-exercise feedback
  if (showPostExerciseFeedback) {
    return (
      <ErrorBoundary fallback={<div>Erro ao carregar formulário. Por favor reinicie o app.</div>}>
        <PainFeedbackForm 
          isPreSession={false}
          onComplete={handlePostExerciseFeedback}
        />
      </ErrorBoundary>
    );
  }

  // Show onboarding flows if needed
  if (currentView === 'quiz') {
    return (
      <ErrorBoundary fallback={<div>Erro ao carregar questionário. Por favor reinicie o app.</div>}>
        <MedicalQuiz onComplete={handleCompleteQuiz} userName={currentUser.name} />
      </ErrorBoundary>
    );
  }

  if (currentView === 'disclaimer') {
    return (
      <ErrorBoundary fallback={<div>Erro ao carregar disclaimer. Por favor reinicie o app.</div>}>
        <MedicalDisclaimer onAccept={handleDisclaimerAccept} onSupport={handleDisclaimerSupport} />
      </ErrorBoundary>
    );
  }

  if (currentView === 'tutorial') {
    return (
      <ErrorBoundary fallback={<div>Erro ao carregar tutorial. Por favor reinicie o app.</div>}>
        <OnboardingTutorial onComplete={handleTutorialComplete} userName={currentUser.name} />
      </ErrorBoundary>
    );
  }

  if (currentView === 'feedback') {
    return (
      <ErrorBoundary fallback={<div>Erro ao carregar formulário. Por favor reinicie o app.</div>}>
        <PainFeedbackForm 
          isPreSession={true}
          onComplete={handlePreExerciseFeedback}
        />
      </ErrorBoundary>
    );
  }

  if (!dataLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando seu programa...</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary fallback={<div>Ocorreu um erro. Por favor reinicie o aplicativo.</div>}>
      <div className="min-h-screen bg-white">
        <div className="max-w-md mx-auto min-h-screen flex flex-col">
          <div className="flex-1">
            {currentView === 'dashboard' && (
              <Dashboard
                user={currentUser}
                progress={userProgress}
                onStartExercise={() => setCurrentView('exercises')}
                onViewProgram={() => setCurrentView('program')}
                onProfileClick={handleProfileClick}
              />
            )}

            {currentView === 'program' && (
              <ProgramCalendar
                progress={userProgress}
                onBack={() => setCurrentView('dashboard')}
                user={currentUser}
                onProfileClick={handleProfileClick}
                onSelectDay={(day) => {
                  // Implement day selection logic
                  setCurrentView('exercises');
                }}
              />
            )}

            {currentView === 'exercises' && (
              <ExerciseLibrary
                onBack={() => setCurrentView('dashboard')}
                onSelectExercise={handleExerciseSelect}
                user={currentUser}
                onProfileClick={handleProfileClick}
                exercises={scientificExercises}
              />
            )}

            {currentView === 'exercise-detail' && selectedExercise && (
              <ExerciseDetail
                exercise={selectedExercise}
                isCompleted={userProgress.completedExercises.includes(selectedExercise.id.toString())}
                onBack={() => setCurrentView('exercises')}
                onComplete={() => handleExerciseComplete(selectedExercise.id)}
                user={currentUser}
                onProfileClick={handleProfileClick}
              />
            )}

            {currentView === 'recipes' && (
              <RecipeLibrary 
                onBack={() => setCurrentView('dashboard')} 
                user={currentUser}
                onProfileClick={handleProfileClick}
              />
            )}

            {currentView === 'meditation' && (
              <MeditationLibrary 
                onBack={() => setCurrentView('dashboard')} 
                user={currentUser}
                onProfileClick={handleProfileClick}
              />
            )}

            {currentView === 'nutrition' && (
              <RecipeLibrary
                onBack={() => setCurrentView('dashboard')}
                user={currentUser}
                onProfileClick={handleProfileClick}
              />
            )}

            {currentView === 'profile' && (
              <ProfileScreen
                onBack={() => setCurrentView('dashboard')}
                onResetProgress={handleResetProgress}
                onUpdateUser={handleUpdateUser}
                currentUser={currentUser}
                userProgress={userProgress}
              />
            )}
          </div>

          <Navigation
            currentView={currentView}
            onTabChange={handleTabChange}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
