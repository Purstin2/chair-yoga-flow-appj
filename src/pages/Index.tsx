import { useState, useEffect } from "react";
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

type View = 'dashboard' | 'program' | 'exercises' | 'exercise-detail' | 'recipes' | 'meditation' | 'profile' | 'quiz' | 'disclaimer' | 'tutorial' | 'feedback';

// Usuário padrão para todos
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

const Index = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [currentUser, setCurrentUser] = useState<User>(defaultUser);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedDays: 0,
    totalMinutes: 0,
    completedExercises: [],
    streak: 0,
    achievements: [],
    lastActive: new Date().toISOString(),
    painHistory: [],
    dailyCheckins: []
  });
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [showPostExerciseFeedback, setShowPostExerciseFeedback] = useState(false);

  // Load user data and progress from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('userData');
    const savedProgress = localStorage.getItem('userProgress');
    
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
    
    // Check if it's the first time opening the app
    if (!savedUser || !(JSON.parse(savedUser) as User).onboardingCompleted) {
      setCurrentView('quiz');
    }
  }, []);

  // Save user data and progress to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(currentUser));
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  }, [currentUser, userProgress]);

  // Check for new day and update streak
  useEffect(() => {
    const checkStreak = () => {
      if (!userProgress.lastActive) return;

      const lastActive = new Date(userProgress.lastActive);
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
  }, [userProgress.lastActive]);

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
    setUserProgress({
      completedDays: 0,
      totalMinutes: 0,
      completedExercises: [],
      streak: 0,
      achievements: [],
      lastActive: new Date().toISOString(),
      painHistory: [],
      dailyCheckins: []
    });
    
    setCurrentUser({
      ...defaultUser,
      onboardingCompleted: false,
      quizCompleted: false,
      disclaimerAccepted: false,
      tutorialCompleted: false
    });
    
    localStorage.removeItem('userProgress');
    localStorage.removeItem('userData');
    
    // Restart onboarding
    setCurrentView('quiz');
  };

  const handlePreExerciseFeedback = (feedbackData: PainFeedbackData) => {
    // Store pre-exercise feedback
    const today = new Date().toISOString().split('T')[0];
    
    setUserProgress(prev => ({
      ...prev,
      painHistory: [
        ...prev.painHistory || [],
        {
          date: today,
          painLevel: feedbackData.painLevel,
          painAreas: feedbackData.tensionAreas
        }
      ]
    }));
    
    setCurrentView('exercise-detail');
  };

  const handlePostExerciseFeedback = (feedbackData: PainFeedbackData) => {
    // Store post-exercise feedback and update daily checkins
    const today = new Date().toISOString().split('T')[0];
    const preExercisePain = userProgress.painHistory?.[userProgress.painHistory.length - 1]?.painLevel || 0;
    
    setUserProgress(prev => ({
      ...prev,
      dailyCheckins: [
        ...prev.dailyCheckins || [],
        {
          date: today,
          painBefore: preExercisePain,
          painAfter: feedbackData.painLevel,
          energy: feedbackData.energyLevel,
          mood: 'bem', // Default value
          exercises: selectedExercise ? [selectedExercise.id.toString()] : []
        }
      ]
    }));
    
    setShowPostExerciseFeedback(false);
    setCurrentView('exercises');
  };

  const handleExerciseComplete = (exerciseId: number) => {
    if (!userProgress.completedExercises.includes(exerciseId.toString())) {
      // Only increment completedDays when completing a new exercise
      const shouldIncrementDay = userProgress.completedExercises.length % 3 === 0;
      
      setUserProgress(prev => ({
        ...prev,
        completedExercises: [...prev.completedExercises, exerciseId.toString()],
        totalMinutes: prev.totalMinutes + parseInt(selectedExercise?.duration || '0'),
        completedDays: shouldIncrementDay ? prev.completedDays + 1 : prev.completedDays
      }));
      
      // Show post-exercise feedback after completing an exercise
      setShowPostExerciseFeedback(true);
    } else {
      setCurrentView('exercises');
    }
  };

  const handleTabChange = (tab: View) => {
    const allowedTabs = ['dashboard', 'program', 'exercises', 'meditation', 'recipes'];
    
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
      <PainFeedbackForm 
        isPreSession={false}
        onComplete={handlePostExerciseFeedback}
      />
    );
  }

  // Show onboarding flows if needed
  if (currentView === 'quiz') {
    return <MedicalQuiz onComplete={handleCompleteQuiz} userName={currentUser.name} />;
  }

  if (currentView === 'disclaimer') {
    return <MedicalDisclaimer onAccept={handleDisclaimerAccept} onSupport={handleDisclaimerSupport} />;
  }

  if (currentView === 'tutorial') {
    return <OnboardingTutorial onComplete={handleTutorialComplete} userName={currentUser.name} />;
  }

  if (currentView === 'feedback') {
    return (
      <PainFeedbackForm 
        isPreSession={true}
        onComplete={handlePreExerciseFeedback}
      />
    );
  }

  return (
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
  );
};

export default Index;
