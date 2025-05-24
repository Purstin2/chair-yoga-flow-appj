
import React from 'react';
import { Calendar, Clock, Target, ArrowRight } from 'lucide-react';
import StatsCard from './StatsCard';

interface DashboardProps {
  userProgress: {
    streak: number;
    todayMinutes: number;
    weekProgress: number;
    completedDays: number;
  };
  onStartQuickWorkout: () => void;
  onViewProgram: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  userProgress, 
  onStartQuickWorkout, 
  onViewProgram 
}) => {
  const todayExercises = [
    { name: 'Respiração Cervical', duration: '3min', category: 'Respiração', completed: false },
    { name: 'Rotação de Ombros', duration: '2min', category: 'Mobilidade', completed: true },
    { name: 'Torção Suave', duration: '4min', category: 'Mobilidade', completed: false },
  ];

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-purple-900 mb-2">
          Olá, Ana! 👋
        </h1>
        <p className="text-purple-600">
          Pronta para cuidar de si hoje?
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatsCard
          icon={Target}
          title="Sequência"
          value={`${userProgress.streak} dias`}
          subtitle="Continue assim!"
          color="purple"
        />
        <StatsCard
          icon={Clock}
          title="Hoje"
          value={`${userProgress.todayMinutes}min`}
          subtitle="De exercícios"
          color="pink"
        />
      </div>

      {/* Progress Card */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-purple-900">Programa 21 Dias</h3>
          <span className="text-sm text-purple-600 font-medium">
            {userProgress.completedDays}/21 dias
          </span>
        </div>
        <div className="w-full bg-purple-100 rounded-full h-3 mb-4">
          <div 
            className="gradient-primary h-3 rounded-full transition-all duration-500"
            style={{ width: `${(userProgress.completedDays / 21) * 100}%` }}
          />
        </div>
        <button
          onClick={onViewProgram}
          className="w-full gradient-primary text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          Ver Programa Completo
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Today's Plan */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Programa de Hoje</h3>
        <div className="space-y-3">
          {todayExercises.map((exercise, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-xl ${
                exercise.completed 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-white border border-purple-100'
              }`}
            >
              <div className="flex-1">
                <h4 className={`font-medium ${exercise.completed ? 'text-green-700' : 'text-purple-900'}`}>
                  {exercise.name}
                </h4>
                <p className="text-sm text-gray-600">{exercise.category} • {exercise.duration}</p>
              </div>
              {exercise.completed ? (
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              ) : (
                <div className="w-6 h-6 border-2 border-purple-300 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onStartQuickWorkout}
          className="gradient-secondary text-white p-4 rounded-xl font-medium hover:scale-105 transition-transform"
        >
          Treino Rápido
          <span className="block text-sm opacity-90">5 minutos</span>
        </button>
        <button className="bg-white border border-purple-200 text-purple-700 p-4 rounded-xl font-medium hover:scale-105 transition-transform">
          Dica do Dia
          <span className="block text-sm opacity-70">Postura</span>
        </button>
      </div>

      {/* Daily Tip */}
      <div className="mt-6 gradient-card rounded-2xl p-4 shadow-lg">
        <h4 className="font-semibold text-purple-900 mb-2">💡 Dica de Hoje</h4>
        <p className="text-sm text-purple-700 leading-relaxed">
          Mantenha os pés apoiados no chão durante os exercícios. 
          Isso garante estabilidade e melhores resultados.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
