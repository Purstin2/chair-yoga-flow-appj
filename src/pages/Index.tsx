
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Dashboard from '../components/Dashboard';
import ProgramCalendar from '../components/ProgramCalendar';
import ExerciseDetail from '../components/ExerciseDetail';
import RecipeLibrary from '../components/RecipeLibrary';
import ProfileScreen from '../components/ProfileScreen';
import { exercises } from '../data/exercises';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  // Simplified user progress without gamification
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('yogaChairProgress');
    return saved ? JSON.parse(saved) : {
      completedDays: 5,
      totalMinutes: 127,
      completedExercises: [2],
      currentDay: 6,
    };
  });

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('yogaChairProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setCurrentView('dashboard');
    } else if (tab === 'program') {
      setCurrentView('program');
    } else if (tab === 'recipes') {
      setCurrentView('recipes');
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
            return (
              <ExerciseDetail
                exercise={exercise}
                isCompleted={userProgress.completedExercises.includes(selectedExercise)}
                onBack={() => setCurrentView('dashboard')}
                onComplete={handleExerciseComplete}
                userProgress={userProgress}
              />
            );
          }
        }
        return <div>Exercise not found</div>;
      case 'recipes':
        return (
          <RecipeLibrary
            onBack={() => setCurrentView('dashboard')}
          />
        );
      case 'profile':
        return (
          <ProfileScreen
            onBack={() => setCurrentView('dashboard')}
          />
        );
      default:
        return (
          <Dashboard
            userProgress={userProgress}
            onStartQuickWorkout={() => {
              setSelectedExercise(1);
              setCurrentView('exercise');
            }}
            onViewProgram={() => setCurrentView('program')}
            onShowCheckin={() => {}} // Removed checkin functionality
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {renderCurrentView()}
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default Index;
