import { useState, useEffect } from "react";
import { User, UserProgress } from "@/types";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";
import ProgramCalendar from "@/components/ProgramCalendar";
import ExerciseLibrary from "@/components/ExerciseLibrary";
import ExerciseDetail from "@/components/ExerciseDetail";
import RecipeLibrary from "@/components/RecipeLibrary";
import MeditationLibrary from "@/components/MeditationLibrary";
import ProfileScreen from "@/components/ProfileScreen";
import { exercises } from "@/data/exercises";

type View = 'dashboard' | 'program' | 'exercises' | 'exercise-detail' | 'recipes' | 'meditation' | 'profile';

// Usuário padrão para todos
const defaultUser: User = {
  id: '1',
  name: 'Usuário',
  email: 'usuario@exemplo.com',
  photo: '😊'
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
    lastActive: new Date().toISOString()
  });
  const [selectedExercise, setSelectedExercise] = useState<typeof exercises[0] | null>(null);

  // Load progress data from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('userProgress');
    
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

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

    // Save progress to localStorage whenever it changes
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  const handleUpdateUser = (userData: User) => {
    setCurrentUser(userData);
  };

  const handleResetProgress = () => {
    setUserProgress({
      completedDays: 0,
      totalMinutes: 0,
      completedExercises: [],
      streak: 0,
      achievements: [],
      lastActive: new Date().toISOString()
    });
    localStorage.removeItem('userProgress');
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
    }
    
    setCurrentView('exercises');
  };

  const handleTabChange = (tab: View) => {
    setCurrentView(tab);
  };

  const handleExerciseSelect = (exercise: typeof exercises[0]) => {
    setSelectedExercise(exercise);
    setCurrentView('exercise-detail');
  };

  const handleProfileClick = () => {
    setCurrentView('profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
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
