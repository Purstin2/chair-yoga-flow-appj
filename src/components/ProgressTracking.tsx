
import React from 'react';
import { ArrowLeft, TrendingUp, Calendar, Target, Clock } from 'lucide-react';

interface ProgressTrackingProps {
  onBack: () => void;
  userProgress: any;
}

const ProgressTracking: React.FC<ProgressTrackingProps> = ({ onBack, userProgress }) => {
  // Calculate analytics
  const weeklyMinutes = [45, 32, 28, 51, 38, 42, 35];
  const dailyCheckins = userProgress?.dailyCheckins || {};
  
  // Safe calculation for average pain level
  const painLevels = Object.values(dailyCheckins)
    .map((checkin: any) => checkin?.pain || 0)
    .filter((pain: any) => typeof pain === 'number' && pain > 0);
  
  const avgPain = painLevels.length > 0 
    ? Math.round(painLevels.reduce((a: number, b: number) => a + b, 0) / painLevels.length)
    : 0;

  const energyLevels = Object.values(dailyCheckins)
    .map((checkin: any) => checkin?.energy)
    .filter(Boolean);

  const mostCommonEnergy = energyLevels.length > 0 
    ? energyLevels.sort((a, b) =>
        energyLevels.filter(v => v === a).length - energyLevels.filter(v => v === b).length
      ).pop()
    : 'média';

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
          <h1 className="text-2xl font-bold text-purple-900">Seu Progresso</h1>
          <p className="text-purple-600">Acompanhe sua jornada</p>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
          <TrendingUp size={20} />
          Minutos por Dia (Última Semana)
        </h3>
        <div className="flex items-end justify-between h-32 mb-4">
          {weeklyMinutes.map((minutes, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-8 gradient-primary rounded-t-lg mb-2"
                style={{ height: `${(minutes / 60) * 100}%` }}
              />
              <span className="text-xs text-purple-600">{minutes}min</span>
              <span className="text-xs text-gray-500">
                {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][index]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Health Metrics */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Bem-estar</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-purple-50 rounded-xl">
            <div className="text-2xl mb-1">😌</div>
            <div className="text-sm text-purple-700">Dor Média</div>
            <div className="text-lg font-bold text-purple-900">{avgPain}/10</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-xl">
            <div className="text-2xl mb-1">⚡</div>
            <div className="text-sm text-purple-700">Energia</div>
            <div className="text-lg font-bold text-purple-900 capitalize">{mostCommonEnergy}</div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="gradient-card rounded-2xl p-5 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
          <Target size={20} />
          Conquistas Recentes
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
            <div className="text-2xl">🏆</div>
            <div>
              <div className="font-medium text-green-800">Primeira Semana!</div>
              <div className="text-sm text-green-600">7 dias de dedicação</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
            <div className="text-2xl">💪</div>
            <div>
              <div className="font-medium text-blue-800">100 Minutos</div>
              <div className="text-sm text-blue-600">Meta de tempo alcançada</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
