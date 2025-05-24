
import React from 'react';
import { ArrowLeft, TrendingUp, Award, Calendar, Clock } from 'lucide-react';
import StatsCard from './StatsCard';

interface ProgressTrackingProps {
  userProgress: {
    streak: number;
    todayMinutes: number;
    weekProgress: number;
    completedDays: number;
    totalMinutes: number;
    badges: string[];
  };
  onBack: () => void;
}

const ProgressTracking: React.FC<ProgressTrackingProps> = ({
  userProgress,
  onBack
}) => {
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const weeklyActivity = [0, 15, 10, 20, 0, 25, 12]; // Minutes per day

  const badges = [
    { name: 'Primeira Semana', icon: '🏆', earned: userProgress.completedDays >= 7 },
    { name: '100 Minutos', icon: '⏱️', earned: userProgress.totalMinutes >= 100 },
    { name: 'Cuidando de Si', icon: '💝', earned: userProgress.streak >= 3 },
    { name: 'Persistente', icon: '🔥', earned: userProgress.streak >= 7 },
    { name: 'Dedicada', icon: '💪', earned: userProgress.completedDays >= 14 },
    { name: 'Transformação', icon: '💎', earned: userProgress.completedDays >= 21 },
  ];

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 hover:bg-white/50 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-purple-700" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-purple-900">
            Seu Progresso
          </h1>
          <p className="text-purple-600">
            Veja sua evolução
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatsCard
          icon={Calendar}
          title="Dias Ativos"
          value={`${userProgress.completedDays}`}
          subtitle="No programa"
          color="purple"
        />
        <StatsCard
          icon={Clock}
          title="Total"
          value={`${userProgress.totalMinutes}min`}
          subtitle="Exercitados"
          color="pink"
        />
        <StatsCard
          icon={TrendingUp}
          title="Sequência"
          value={`${userProgress.streak}`}
          subtitle="Dias seguidos"
          color="green"
        />
        <StatsCard
          icon={Award}
          title="Badges"
          value={`${badges.filter(b => b.earned).length}`}
          subtitle="Conquistadas"
          color="yellow"
        />
      </div>

      {/* Weekly Activity */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Atividade da Semana</h3>
        <div className="flex items-end justify-between h-24 mb-2">
          {weeklyActivity.map((minutes, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`w-6 rounded-t-lg transition-all duration-500 ${
                  minutes > 0 ? 'gradient-primary' : 'bg-gray-200'
                }`}
                style={{ height: `${Math.max(8, (minutes / 25) * 80)}px` }}
              />
              <span className="text-xs text-gray-600 mt-2">{weekDays[index]}</span>
              <span className="text-xs text-purple-600 font-medium">{minutes}min</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Progress */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-purple-900">Programa 21 Dias</h3>
          <span className="text-purple-600 font-medium">
            {Math.round((userProgress.completedDays / 21) * 100)}%
          </span>
        </div>
        <div className="w-full bg-purple-100 rounded-full h-4 mb-4">
          <div 
            className="gradient-primary h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
            style={{ width: `${(userProgress.completedDays / 21) * 100}%` }}
          >
            {userProgress.completedDays > 3 && (
              <span className="text-white text-xs font-bold">
                {userProgress.completedDays}/21
              </span>
            )}
          </div>
        </div>
        <p className="text-sm text-purple-700">
          Faltam {21 - userProgress.completedDays} dias para completar sua transformação!
        </p>
      </div>

      {/* Badges */}
      <div className="gradient-card rounded-2xl p-5 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Conquistas</h3>
        <div className="grid grid-cols-2 gap-3">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                badge.earned
                  ? 'bg-yellow-50 border-yellow-300 shadow-md'
                  : 'bg-gray-50 border-gray-200 opacity-50'
              }`}
            >
              <div className="text-2xl mb-2 text-center">{badge.icon}</div>
              <p className={`text-sm font-medium text-center ${
                badge.earned ? 'text-yellow-700' : 'text-gray-500'
              }`}>
                {badge.name}
              </p>
              {badge.earned && (
                <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
