
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Dashboard from '../components/Dashboard';
import ProgramCalendar from '../components/ProgramCalendar';
import ExerciseDetail from '../components/ExerciseDetail';
import ExerciseLibrary from '../components/ExerciseLibrary';
import RecipeLibrary from '../components/RecipeLibrary';
import MeditationLibrary from '../components/MeditationLibrary';
import ProfileScreen from '../components/ProfileScreen';
import LoginScreen from '../components/LoginScreen';
import { exercises } from '../data/exercises';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [selectedLibraryExercise, setSelectedLibraryExercise] = useState<any | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Sistema de progresso real que começa zerado para novos usuários
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('yogaChairProgress');
    if (saved && isLoggedIn) {
      return JSON.parse(saved);
    }
    return {
      completedDays: 0,
      totalMinutes: 0,
      completedExercises: [],
      currentDay: 1,
      startDate: null,
      dailyCheckins: {},
    };
  });

  // Verificar login ao carregar
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setCurrentUser(user);
      setIsLoggedIn(true);
      
      // Carregar progresso do usuário específico
      const userProgressKey = `yogaChairProgress_${user.email}`;
      const savedProgress = localStorage.getItem(userProgressKey);
      if (savedProgress) {
        setUserProgress(JSON.parse(savedProgress));
      }
    }
  }, []);

  // Salvar progresso específico do usuário
  useEffect(() => {
    if (isLoggedIn && currentUser) {
      const userProgressKey = `yogaChairProgress_${currentUser.email}`;
      localStorage.setItem(userProgressKey, JSON.stringify(userProgress));
    }
  }, [userProgress, isLoggedIn, currentUser]);

  // Calcular dia atual baseado na data de início
  useEffect(() => {
    if (userProgress.startDate && isLoggedIn) {
      const startDate = new Date(userProgress.startDate);
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays !== userProgress.currentDay && diffDays <= 21) {
        setUserProgress(prev => ({
          ...prev,
          currentDay: diffDays
        }));
      }
    }
  }, [userProgress.startDate, isLoggedIn]);

  const handleLogin = (userData: any) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    
    // Inicializar progresso se for novo usuário
    const userProgressKey = `yogaChairProgress_${userData.email}`;
    const existingProgress = localStorage.getItem(userProgressKey);
    
    if (!existingProgress) {
      const newProgress = {
        completedDays: 0,
        totalMinutes: 0,
        completedExercises: [],
        currentDay: 1,
        startDate: new Date().toISOString(),
        dailyCheckins: {},
      };
      setUserProgress(newProgress);
      localStorage.setItem(userProgressKey, JSON.stringify(newProgress));
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setActiveTab('home');
    setCurrentView('dashboard');
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setCurrentView('dashboard');
    } else if (tab === 'program') {
      setCurrentView('program');
    } else if (tab === 'exercises') {
      setCurrentView('exercise-library');
    } else if (tab === 'recipes') {
      setCurrentView('recipes');
    } else if (tab === 'meditation') {
      setCurrentView('meditation');
    } else if (tab === 'profile') {
      setCurrentView('profile');
    }
  };

  const handleExerciseComplete = () => {
    if (selectedExercise && !userProgress.completedExercises.includes(selectedExercise)) {
      const exercise = exercises.find(e => e.id === selectedExercise);
      const minutes = parseInt(exercise?.duration || '0');
      
      setUserProgress(prev => ({
        ...prev,
        completedExercises: [...prev.completedExercises, selectedExercise],
        totalMinutes: prev.totalMinutes + minutes,
        completedDays: Math.min(prev.completedDays + 1, 21),
      }));
    }
    setCurrentView('dashboard');
    setSelectedExercise(null);
  };

  const handleLibraryExerciseComplete = () => {
    if (selectedLibraryExercise) {
      const minutes = parseInt(selectedLibraryExercise.duration || '0');
      
      setUserProgress(prev => ({
        ...prev,
        totalMinutes: prev.totalMinutes + minutes,
      }));
    }
    setCurrentView('exercise-library');
    setSelectedLibraryExercise(null);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'program':
        return (
          <ProgramCalendar
            completedDays={userProgress.completedDays}
            currentDay={userProgress.currentDay}
            onDaySelect={(day) => {
              setSelectedExercise(day);
              setCurrentView('exercise');
            }}
            onBack={() => setCurrentView('dashboard')}
          />
        );
      case 'exercise':
        if (selectedExercise) {
          const exercise = exercises.find(e => e.id === selectedExercise);
          if (exercise) {
            const formattedExercise = {
              ...exercise,
              targetArea: exercise.targetAreas?.[0] || 'Corpo Todo',
              image: exercise.icon
            };
            return (
              <ExerciseDetail
                exercise={formattedExercise}
                isCompleted={userProgress.completedExercises.includes(selectedExercise)}
                onBack={() => setCurrentView('dashboard')}
                onComplete={handleExerciseComplete}
                userProgress={userProgress}
              />
            );
          }
        }
        return <div>Exercise not found</div>;
      case 'exercise-library':
        return (
          <ExerciseLibrary
            onBack={() => setCurrentView('dashboard')}
            onExerciseSelect={(exercise) => {
              setSelectedLibraryExercise(exercise);
              setCurrentView('library-exercise-detail');
            }}
          />
        );
      case 'library-exercise-detail':
        if (selectedLibraryExercise) {
          return (
            <ExerciseDetail
              exercise={selectedLibraryExercise}
              isCompleted={false}
              onBack={() => setCurrentView('exercise-library')}
              onComplete={handleLibraryExerciseComplete}
              userProgress={userProgress}
            />
          );
        }
        return <div>Exercise not found</div>;
      case 'recipes':
        return (
          <RecipeLibrary
            onBack={() => setCurrentView('dashboard')}
          />
        );
      case 'meditation':
        return (
          <MeditationLibrary
            onBack={() => setCurrentView('dashboard')}
          />
        );
      case 'profile':
        return (
          <ProfileScreen
            onBack={() => setCurrentView('dashboard')}
            onLogout={handleLogout}
            currentUser={currentUser}
            userProgress={userProgress}
          />
        );
      default:
        return (
          <Dashboard
            userProgress={userProgress}
            currentUser={currentUser}
            onStartQuickWorkout={() => {
              setSelectedExercise(1);
              setCurrentView('exercise');
            }}
            onViewProgram={() => setCurrentView('program')}
            onShowCheckin={() => {}}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header da Empresa */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-100 px-4 py-3 sticky top-0 z-50">
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-bold text-gray-900 text-center">Fenjes</h1>
        </div>
      </div>
      
      {renderCurrentView()}
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default Index;
