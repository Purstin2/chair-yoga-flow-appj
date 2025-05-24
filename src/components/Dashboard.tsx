
import React from 'react';
import { 
  CalendarIcon, 
  ClockIcon, 
  SparklesIcon, 
  ArrowRightIcon,
  BoltIcon,
  BookOpenIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import StatsCard from './StatsCard';

interface DashboardProps {
  userProgress: {
    completedDays: number;
    totalMinutes: number;
    completedExercises: number[];
    currentDay: number;
  };
  currentUser: any;
  onStartQuickWorkout: () => void;
  onViewProgram: () => void;
  onShowCheckin: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  userProgress, 
  currentUser,
  onStartQuickWorkout, 
  onViewProgram
}) => {
  const getGreetingMessage = () => {
    const hour = new Date().getHours();
    const name = currentUser?.name || 'Usuário';
    
    if (hour < 12) {
      return `Bom dia, ${name}! ☀️`;
    } else if (hour < 18) {
      return `Boa tarde, ${name}! 🌤️`;
    } else {
      return `Boa noite, ${name}! 🌙`;
    }
  };

  const todayExercises = [
    { name: 'Respiração Cervical', duration: '3min', category: 'Respiração', completed: false },
    { name: 'Rotação de Ombros', duration: '2min', category: 'Mobilidade', completed: userProgress.completedDays > 0 },
    { name: 'Torção Suave', duration: '4min', category: 'Mobilidade', completed: false },
  ];

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-4">
          {currentUser?.photo || '🧘‍♀️'}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {getGreetingMessage()}
        </h1>
        <p className="text-gray-600">
          Pronta para cuidar de si hoje?
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatsCard
          icon={SparklesIcon}
          title="Dias Ativos"
          value={`${userProgress.completedDays}`}
          subtitle="No programa"
          color="purple"
        />
        <StatsCard
          icon={ClockIcon}
          title="Total"
          value={`${userProgress.totalMinutes}min`}
          subtitle="Exercitados"
          color="pink"
        />
      </div>

      {/* Program Progress */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 mb-6 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Programa 21 Dias</h3>
          <span className="text-sm text-gray-600 font-medium">
            {userProgress.completedDays}/21 dias
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(userProgress.completedDays / 21) * 100}%` }}
          />
        </div>
        
        <div className="bg-purple-50 rounded-xl p-3 mb-4">
          <p className="text-sm text-gray-700">
            {userProgress.completedDays < 7 
              ? `Faltam ${7 - userProgress.completedDays} dias para completar sua primeira semana!`
              : userProgress.completedDays < 21
              ? `Incrível! Você já completou ${userProgress.completedDays} dias. Faltam ${21 - userProgress.completedDays} para a transformação completa!`
              : "🎉 Parabéns! Você completou sua transformação de 21 dias!"
            }
          </p>
        </div>
        
        <button
          onClick={onViewProgram}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105"
        >
          Ver Programa Completo
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>

      {/* Today's Plan */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 mb-6 shadow-lg border border-white/20">
        <h3 className="font-semibold text-gray-900 mb-4">Programa de Hoje</h3>
        <div className="space-y-3">
          {todayExercises.map((exercise, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                exercise.completed 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-white border border-gray-100 hover:bg-gray-50'
              }`}
            >
              <div className="flex-1">
                <h4 className={`font-medium ${exercise.completed ? 'text-green-700' : 'text-gray-900'}`}>
                  {exercise.name}
                </h4>
                <p className="text-sm text-gray-600">{exercise.category} • {exercise.duration}</p>
              </div>
              {exercise.completed ? (
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              ) : (
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <button
          onClick={onStartQuickWorkout}
          className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-4 rounded-xl font-medium hover:scale-105 transition-transform shadow-lg"
        >
          <BoltIcon className="h-5 w-5 mx-auto mb-1" />
          <span className="text-sm">Treino Rápido</span>
        </button>
        <button className="bg-white border border-gray-200 text-gray-700 p-4 rounded-xl font-medium hover:scale-105 transition-transform shadow-lg">
          <HeartIcon className="h-5 w-5 mx-auto mb-1" />
          <span className="text-sm">Exercícios</span>
        </button>
        <button className="bg-white border border-gray-200 text-gray-700 p-4 rounded-xl font-medium hover:scale-105 transition-transform shadow-lg">
          <BookOpenIcon className="h-5 w-5 mx-auto mb-1" />
          <span className="text-sm">Receitas</span>
        </button>
      </div>

      {/* Daily Tip */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
        <h4 className="font-semibold text-gray-900 mb-2">💡 Dica de Hoje</h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          Mantenha os pés apoiados no chão durante os exercícios. Isso garante estabilidade e melhores resultados.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
