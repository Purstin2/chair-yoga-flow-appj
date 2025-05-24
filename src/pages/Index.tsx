
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Dashboard from '../components/Dashboard';
import ProgramCalendar from '../components/ProgramCalendar';
import ExerciseDetail from '../components/ExerciseDetail';
import ProgressTracking from '../components/ProgressTracking';
import DailyCheckin from '../components/DailyCheckin';
import { exercises } from '../data/exercises';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showCheckin, setShowCheckin] = useState(false);

  // Enhanced user progress with new metrics
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('yogaChairProgress');
    return saved ? JSON.parse(saved) : {
      streak: 3,
      todayMinutes: 9,
      weekProgress: 65,
      completedDays: 5,
      totalMinutes: 127,
      badges: ['primeira_semana', '100_minutos'],
      dailyCheckins: {},
      completedExercises: [2],
      currentDay: 6,
      favoriteExercise: null,
      weeklyStats: {
        totalMinutes: 45,
        avgEnergy: 7,
        avgMood: 8,
        avgPain: 4
      }
    };
  });

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('yogaChairProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  // Check if user needs daily check-in
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (!userProgress.dailyCheckins[today]) {
      setShowCheckin(true);
    }
  }, [userProgress]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setCurrentView('dashboard');
    } else if (tab === 'program') {
      setCurrentView('program');
    } else if (tab === 'progress') {
      setCurrentView('progress');
    }
  };

  const handleExerciseComplete = () => {
    if (selectedExercise && !userProgress.completedExercises.includes(selectedExercise)) {
      const exercise = exercises.find(e => e.id === selectedExercise);
      const minutes = parseInt(exercise?.duration || '0');
      
      setUserProgress(prev => ({
        ...prev,
        completedExercises: [...prev.completedExercises, selectedExercise],
        todayMinutes: prev.todayMinutes + minutes,
        totalMinutes: prev.totalMinutes + minutes,
        completedDays: Math.min(prev.completedDays + 1, 21),
        streak: prev.streak + 1,
        badges: updateBadges(prev, minutes)
      }));
    }
    setCurrentView('dashboard');
    setSelectedExercise(null);
  };

  const updateBadges = (progress: any, addedMinutes: number) => {
    const newBadges = [...progress.badges];
    
    // Check for new badges
    if (progress.streak >= 3 && !newBadges.includes('primeira_sequencia')) {
      newBadges.push('primeira_sequencia');
    }
    if (progress.streak >= 7 && !newBadges.includes('guerreira')) {
      newBadges.push('guerreira');
    }
    if (progress.completedDays >= 21 && !newBadges.includes('zen_master')) {
      newBadges.push('zen_master');
    }
    if (progress.totalMinutes + addedMinutes >= 200 && !newBadges.includes('dedicada')) {
      newBadges.push('dedicada');
    }
    if (addedMinutes <= 5 && !newBadges.includes('flash')) {
      newBadges.push('flash');
    }
    
    return newBadges;
  };

  const handleDailyCheckin = (checkinData: any) => {
    const today = new Date().toISOString().split('T')[0];
    setUserProgress(prev => ({
      ...prev,
      dailyCheckins: {
        ...prev.dailyCheckins,
        [today]: checkinData
      }
    }));
    setShowCheckin(false);
  };

  const renderCurrentView = () => {
    if (showCheckin) {
      return (
        <DailyCheckin 
          onComplete={handleDailyCheckin}
          onSkip={() => setShowCheckin(false)}
        />
      );
    }

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
      case 'progress':
        return (
          <ProgressTracking
            userProgress={userProgress}
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
            onShowCheckin={() => setShowCheckin(true)}
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
