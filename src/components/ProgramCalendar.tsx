
import React from 'react';
import { ArrowLeft, CheckCircle, Circle, Lock } from 'lucide-react';

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
    if (status === 'completed') return CheckCircle;
    if (status === 'current') return Circle;
    return Lock;
  };

  const getDayClasses = (day: number) => {
    const status = getDayStatus(day);
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'current':
        return 'gradient-primary text-white ring-4 ring-purple-200';
      case 'available':
        return 'bg-white border-2 border-purple-300 text-purple-600 hover:bg-purple-50';
      default:
        return 'bg-gray-100 text-gray-400 cursor-not-allowed';
    }
  };

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
            Programa 21 Dias
          </h1>
          <p className="text-purple-600">
            {completedDays} de 21 dias concluídos
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-purple-900">Progresso Geral</span>
          <span className="text-purple-600 font-medium">
            {Math.round((completedDays / 21) * 100)}%
          </span>
        </div>
        <div className="w-full bg-purple-100 rounded-full h-3">
          <div 
            className="gradient-primary h-3 rounded-full transition-all duration-500"
            style={{ width: `${(completedDays / 21) * 100}%` }}
          />
        </div>
      </div>

      {/* Weeks */}
      <div className="space-y-6">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="gradient-card rounded-2xl p-5 shadow-lg">
            <h3 className="font-semibold text-purple-900 mb-4">{week.title}</h3>
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
                    <Icon size={16} className="mb-1" />
                    <span className="text-xs font-medium">{day}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Badges */}
      <div className="mt-6 gradient-card rounded-2xl p-5 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Conquistas</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className={`p-3 rounded-xl text-center ${completedDays >= 1 ? 'bg-yellow-100 border border-yellow-300' : 'bg-gray-100'}`}>
            <div className="text-2xl mb-1">🏆</div>
            <p className="text-xs font-medium">Primeiro Dia</p>
          </div>
          <div className={`p-3 rounded-xl text-center ${completedDays >= 7 ? 'bg-yellow-100 border border-yellow-300' : 'bg-gray-100'}`}>
            <div className="text-2xl mb-1">🔥</div>
            <p className="text-xs font-medium">1 Semana</p>
          </div>
          <div className={`p-3 rounded-xl text-center ${completedDays >= 21 ? 'bg-yellow-100 border border-yellow-300' : 'bg-gray-100'}`}>
            <div className="text-2xl mb-1">💎</div>
            <p className="text-xs font-medium">Completo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCalendar;
