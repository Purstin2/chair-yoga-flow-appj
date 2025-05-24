
import React from 'react';
import { ArrowLeft, TrendingUp, Award, Calendar, Clock, Heart, Zap, Brain } from 'lucide-react';
import StatsCard from './StatsCard';

interface ProgressTrackingProps {
  userProgress: {
    streak: number;
    todayMinutes: number;
    weekProgress: number;
    completedDays: number;
    totalMinutes: number;
    badges: string[];
    dailyCheckins: any;
    weeklyStats: {
      totalMinutes: number;
      avgEnergy: number;
      avgMood: number;
      avgPain: number;
    };
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
    { name: 'Primeira Semana', icon: '🏆', key: 'primeira_semana', earned: userProgress.badges.includes('primeira_semana') },
    { name: '100 Minutos', icon: '⏱️', key: '100_minutos', earned: userProgress.badges.includes('100_minutos') },
    { name: 'Primeira Sequência', icon: '🔥', key: 'primeira_sequencia', earned: userProgress.badges.includes('primeira_sequencia') },
    { name: 'Guerreira', icon: '💪', key: 'guerreira', earned: userProgress.badges.includes('guerreira') },
    { name: 'Zen Master', icon: '🧘', key: 'zen_master', earned: userProgress.badges.includes('zen_master') },
    { name: 'Dedicada', icon: '💎', key: 'dedicada', earned: userProgress.badges.includes('dedicada') },
    { name: 'Flash', icon: '⚡', key: 'flash', earned: userProgress.badges.includes('flash') },
    { name: 'Matinal', icon: '🌅', key: 'matinal', earned: false },
    { name: 'Noturna', icon: '🌙', key: 'noturna', earned: false },
  ];

  // Calculate wellness metrics from daily checkins
  const checkinData = Object.values(userProgress.dailyCheckins);
  const avgPain = checkinData.length > 0 
    ? checkinData.reduce((sum: number, checkin: any) => sum + (checkin.painLevel || 5), 0) / checkinData.length 
    : 5;

  const moodTrend = checkinData.slice(-7).map((checkin: any, index) => ({
    day: weekDays[index],
    mood: checkin.mood === 'energized' ? 4 : checkin.mood === 'good' ? 3 : checkin.mood === 'tired' ? 2 : 1
  }));

  const energyTrend = checkinData.slice(-7).map((checkin: any, index) => ({
    day: weekDays[index],
    energy: checkin.energy === 'high' ? 3 : checkin.energy === 'medium' ? 2 : 1
  }));

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
            Veja sua evolução completa
          </p>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
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

      {/* Wellness Metrics */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">📊 Métricas de Bem-estar</h3>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Heart className="text-red-600" size={20} />
            </div>
            <div className="text-lg font-bold text-purple-900">{avgPain.toFixed(1)}/10</div>
            <div className="text-xs text-gray-600">Tensão Média</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Zap className="text-yellow-600" size={20} />
            </div>
            <div className="text-lg font-bold text-purple-900">{userProgress.weeklyStats.avgEnergy}/10</div>
            <div className="text-xs text-gray-600">Energia Média</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Brain className="text-green-600" size={20} />
            </div>
            <div className="text-lg font-bold text-purple-900">{userProgress.weeklyStats.avgMood}/10</div>
            <div className="text-xs text-gray-600">Humor Médio</div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-xl p-3">
          <p className="text-sm text-purple-700">
            {avgPain < 4 
              ? "🎉 Sua tensão diminuiu! Os exercícios estão funcionando!"
              : avgPain > 7
              ? "💪 Continue firme! Seu corpo está se adaptando aos exercícios."
              : "📈 Você está progredindo bem! Mantenha a consistência."
            }
          </p>
        </div>
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
        
        {/* Best Day */}
        <div className="bg-purple-50 rounded-xl p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-purple-900">Melhor dia:</span>
            <span className="text-sm text-purple-700">Sexta-feira (25min)</span>
          </div>
        </div>
      </div>

      {/* Mood & Energy Trends */}
      {checkinData.length > 0 && (
        <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
          <h3 className="font-semibold text-purple-900 mb-4">Tendências da Semana</h3>
          
          <div className="space-y-4">
            {/* Mood Trend */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-900">Humor</span>
                <span className="text-xs text-purple-600">
                  {moodTrend.length > 0 && moodTrend[moodTrend.length - 1]?.mood > 2 ? '📈 Melhorando' : '📊 Estável'}
                </span>
              </div>
              <div className="flex items-end space-x-1 h-8">
                {moodTrend.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-green-400 rounded-t"
                      style={{ height: `${data.mood * 8}px` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Energy Trend */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-900">Energia</span>
                <span className="text-xs text-purple-600">
                  {energyTrend.length > 0 && energyTrend[energyTrend.length - 1]?.energy > 1 ? '⚡ Crescendo' : '🔋 Estável'}
                </span>
              </div>
              <div className="flex items-end space-x-1 h-8">
                {energyTrend.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-yellow-400 rounded-t"
                      style={{ height: `${data.energy * 10}px` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
          {userProgress.completedDays >= 21 
            ? "🎉 Parabéns! Você completou sua transformação de 21 dias!"
            : `Faltam ${21 - userProgress.completedDays} dias para completar sua transformação!`
          }
        </p>
      </div>

      {/* Enhanced Badges */}
      <div className="gradient-card rounded-2xl p-5 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">🏆 Todas as Conquistas</h3>
        <div className="grid grid-cols-2 gap-3">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                badge.earned
                  ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-300 shadow-md'
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
                <div className="flex justify-center mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Next Badge Preview */}
        <div className="mt-4 p-3 bg-purple-50 rounded-xl">
          <p className="text-sm text-purple-700 text-center">
            {userProgress.streak < 7 
              ? `💪 Faltam ${7 - userProgress.streak} dias para conquistar "Guerreira"!`
              : userProgress.totalMinutes < 200
              ? `⏱️ Faltam ${200 - userProgress.totalMinutes} minutos para "Dedicada"!`
              : "🌟 Você está arrasando! Continue assim!"
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
