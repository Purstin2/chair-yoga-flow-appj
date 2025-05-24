
import React from 'react';
import { ArrowLeftIcon, CheckCircleIcon, CircleIcon, LockClosedIcon } from '@heroicons/react/24/outline';

interface ProgramCalendarProps {
  completedDays: number;
  currentDay: number;
  onDaySelect: (day: number) => void;
  onBack: () => void;
}

const ProgramCalendar: React.FC<ProgramCalendarProps> = ({
  completedDays,
  currentDay,
  onDaySelect,
  onBack
}) => {
  const weeks = [
    { title: 'Semana 1: Conhecendo seu Corpo', days: [1, 2, 3, 4, 5, 6, 7] },
    { title: 'Semana 2: Fortalecendo a Base', days: [8, 9, 10, 11, 12, 13, 14] },
    { title: 'Semana 3: Transformação Completa', days: [15, 16, 17, 18, 19, 20, 21] },
  ];

  const getDayStatus = (day: number) => {
    if (day <= completedDays) return 'completed';
    if (day === currentDay) return 'current';
    if (day <= currentDay) return 'available';
    return 'locked';
  };

  const getDayIcon = (day: number) => {
    const status = getDayStatus(day);
    if (status === 'completed') return CheckCircleIcon;
    if (status === 'current') return CircleIcon;
    return LockClosedIcon;
  };

  const getDayClasses = (day: number) => {
    const status = getDayStatus(day);
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'current':
        return 'bg-gradient-to-r from-purple-600 to-pink-600 text-white ring-4 ring-purple-200';
      case 'available':
        return 'bg-white border-2 border-purple-300 text-purple-600 hover:bg-purple-50';
      default:
        return 'bg-gray-100 text-gray-400 cursor-not-allowed';
    }
  };

  // Conquistas baseadas no progresso real
  const achievements = [
    {
      id: 'first-day',
      title: 'Primeiro Dia',
      emoji: '🏆',
      unlocked: completedDays >= 1,
      description: 'Completou seu primeiro dia'
    },
    {
      id: 'first-week',
      title: '1 Semana',
      emoji: '🔥',
      unlocked: completedDays >= 7,
      description: 'Uma semana de dedicação'
    },
    {
      id: 'halfway',
      title: 'Meio Caminho',
      emoji: '⭐',
      unlocked: completedDays >= 11,
      description: 'Mais da metade concluída'
    },
    {
      id: 'complete',
      title: 'Completo',
      emoji: '💎',
      unlocked: completedDays >= 21,
      description: 'Transformação de 21 dias'
    }
  ];

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 hover:bg-white/50 rounded-full transition-colors"
        >
          <ArrowLeftIcon className="h-6 w-6 text-purple-700" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Programa 21 Dias
          </h1>
          <p className="text-gray-600">
            {completedDays} de 21 dias concluídos
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 mb-6 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-gray-900">Progresso Geral</span>
          <span className="text-gray-600 font-medium">
            {Math.round((completedDays / 21) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(completedDays / 21) * 100}%` }}
          />
        </div>
      </div>

      {/* Weeks */}
      <div className="space-y-6">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20">
            <h3 className="font-semibold text-gray-900 mb-4">{week.title}</h3>
            <div className="grid grid-cols-7 gap-2">
              {week.days.map((day) => {
                const Icon = getDayIcon(day);
                const canClick = getDayStatus(day) !== 'locked';
                
                return (
                  <button
                    key={day}
                    onClick={() => canClick && onDaySelect(day)}
                    disabled={!canClick}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-200 ${getDayClasses(day)} ${
                      canClick ? 'hover:scale-105' : ''
                    }`}
                  >
                    <Icon className="h-4 w-4 mb-1" />
                    <span className="text-xs font-medium">{day}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Badges */}
      <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20">
        <h3 className="font-semibold text-gray-900 mb-4">Conquistas</h3>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className={`p-3 rounded-xl text-center transition-all ${
                achievement.unlocked 
                  ? 'bg-yellow-100 border border-yellow-300 transform scale-105' 
                  : 'bg-gray-100 opacity-50'
              }`}
            >
              <div className="text-2xl mb-1">{achievement.emoji}</div>
              <p className={`text-xs font-medium ${achievement.unlocked ? 'text-yellow-800' : 'text-gray-500'}`}>
                {achievement.title}
              </p>
              {achievement.unlocked && (
                <p className="text-xs text-yellow-600 mt-1">{achievement.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramCalendar;
