
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Dashboard from '../components/Dashboard';
import ProgramCalendar from '../components/ProgramCalendar';
import ExerciseDetail from '../components/ExerciseDetail';
import ProgressTracking from '../components/ProgressTracking';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, program, exercise, progress
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  // Mock data for user progress
  const [userProgress, setUserProgress] = useState({
    streak: 3,
    todayMinutes: 9,
    weekProgress: 65,
    completedDays: 5,
    totalMinutes: 127,
    badges: ['Primeira Semana', '100 Minutos'],
  });

  const [completedExercises, setCompletedExercises] = useState<number[]>([2]);

  const exercises = [
    {
      id: 1,
      name: 'Respiração Cervical',
      duration: '3min',
      difficulty: 'Fácil' as const,
      category: 'Respiração',
      description: 'Técnica suave de respiração para aliviar tensão na região cervical e pescoço.',
      benefits: 'Reduz dores de cabeça, diminui tensão no pescoço e melhora a concentração.',
      instructions: [
        'Sente-se confortavelmente na cadeira com os pés apoiados no chão',
        'Coloque uma mão no peito e outra na barriga',
        'Inspire lentamente pelo nariz, sentindo a barriga expandir',
        'Mantenha os ombros relaxados durante toda a respiração',
        'Expire suavemente pela boca, liberando toda a tensão',
        'Repita por 3 minutos, focando na área do pescoço'
      ],
      icon: '🫁'
    },
    {
      id: 2,
      name: 'Rotação de Ombros',
      duration: '2min',
      difficulty: 'Fácil' as const,
      category: 'Mobilidade',
      description: 'Movimentos circulares suaves para soltar a musculatura dos ombros.',
      benefits: 'Alivia rigidez dos ombros, melhora circulação e reduz tensão acumulada.',
      instructions: [
        'Mantenha a postura ereta na cadeira',
        'Eleve os ombros em direção às orelhas',
        'Rode os ombros para trás em movimentos circulares',
        'Mantenha o movimento lento e controlado',
        'Faça 5 rotações para trás, depois 5 para frente',
        'Termine com os ombros relaxados e soltos'
      ],
      icon: '🤸'
    },
    {
      id: 3,
      name: 'Torção Suave',
      duration: '4min',
      difficulty: 'Fácil' as const,
      category: 'Mobilidade',
      description: 'Rotação controlada da coluna vertebral para melhorar flexibilidade.',
      benefits: 'Aumenta mobilidade da coluna, massageia órgãos internos e reduz rigidez.',
      instructions: [
        'Sente-se no meio da cadeira com as costas retas',
        'Coloque a mão direita no joelho esquerdo',
        'Gire suavemente o tronco para a esquerda',
        'Mantenha a posição por 30 segundos respirando calmamente',
        'Volte ao centro lentamente',
        'Repita o movimento para o lado direito'
      ],
      icon: '🌀'
    },
    {
      id: 4,
      name: 'Alongamento Lombar',
      duration: '5min',
      difficulty: 'Médio' as const,
      category: 'Alívio de Dor',
      description: 'Série de movimentos para fortalecer e alongar a região lombar.',
      benefits: 'Fortalece músculos das costas, alivia dor lombar e melhora postura.',
      instructions: [
        'Incline-se levemente para frente mantendo as costas retas',
        'Coloque as mãos nos joelhos para apoio',
        'Arch suavemente as costas para cima como um gato',
        'Depois, arch para baixo criando uma curva lombar',
        'Mantenha cada posição por 10 segundos',
        'Repita o movimento 10 vezes lentamente'
      ],
      icon: '💆'
    },
    {
      id: 5,
      name: 'Mobilidade de Quadril',
      duration: '4min',
      difficulty: 'Médio' as const,
      category: 'Mobilidade',
      description: 'Exercícios para aumentar a flexibilidade e amplitude de movimento do quadril.',
      benefits: 'Melhora circulação nas pernas, reduz rigidez do quadril e alivia tensão lombar.',
      instructions: [
        'Sente-se na borda da cadeira',
        'Eleve o joelho direito em direção ao peito',
        'Segure com as duas mãos por 15 segundos',
        'Solte e faça pequenos círculos com o joelho',
        'Repita com a perna esquerda',
        'Termine com movimentos suaves de balanceio'
      ],
      icon: '🦵'
    },
    {
      id: 6,
      name: 'Meditação Postural',
      duration: '3min',
      difficulty: 'Fácil' as const,
      category: 'Relaxamento',
      description: 'Prática meditativa focada na consciência corporal e alinhamento postural.',
      benefits: 'Desenvolve consciência corporal, reduz estresse e melhora alinhamento natural.',
      instructions: [
        'Sente-se com a coluna ereta mas relaxada',
        'Feche os olhos suavemente',
        'Escaneie seu corpo da cabeça aos pés',
        'Notice qualquer tensão e respire para essas áreas',
        'Visualize uma linha dourada alinhando sua coluna',
        'Termine com três respirações profundas'
      ],
      icon: '🧘'
    }
  ];

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
    if (selectedExercise && !completedExercises.includes(selectedExercise)) {
      setCompletedExercises([...completedExercises, selectedExercise]);
      setUserProgress(prev => ({
        ...prev,
        todayMinutes: prev.todayMinutes + parseInt(exercises.find(e => e.id === selectedExercise)?.duration || '0'),
        completedDays: prev.completedDays < 21 ? prev.completedDays + 1 : prev.completedDays,
        totalMinutes: prev.totalMinutes + parseInt(exercises.find(e => e.id === selectedExercise)?.duration || '0')
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
            currentDay={userProgress.completedDays + 1}
            onDaySelect={(day) => {
              // For demo, just show the first exercise for any day
              setSelectedExercise(1);
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
                isCompleted={completedExercises.includes(selectedExercise)}
                onBack={() => setCurrentView('dashboard')}
                onComplete={handleExerciseComplete}
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
