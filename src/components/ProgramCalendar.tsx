import React, { useState } from 'react';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { UserProgress, User } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import Header from './Header';

interface ProgramCalendarProps {
  progress: UserProgress;
  onBack: () => void;
  onSelectDay: (day: number) => void;
  user: User;
  onProfileClick: () => void;
}

const ProgramCalendar: React.FC<ProgramCalendarProps> = ({ 
  progress, 
  onBack, 
  onSelectDay,
  user,
  onProfileClick
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Gerar os dias do programa de 21 dias
  const generateProgramDays = () => {
    const days = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - progress.completedDays);
    
    for (let i = 0; i < 21; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCompleted = i < progress.completedDays;
      const isToday = i === progress.completedDays;
      const isFuture = i > progress.completedDays;
      
      days.push({
        day: i + 1,
        date,
        isCompleted,
        isToday,
        isFuture,
        isLocked: isFuture && !isToday
      });
    }
    
    return days;
  };
  
  const programDays = generateProgramDays();
  
  const getMonthYearString = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-20">
      <Header 
        user={user}
        onProfileClick={onProfileClick}
        title="Programa 21 Dias"
        showBackButton
        onBackClick={onBack}
      />

      <div className="px-4 max-w-md mx-auto">
        <Card variant="gradient" size="md" className="mb-5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Sua Jornada</h2>
              <span className="px-3 py-1 bg-white/60 rounded-full text-sm font-medium text-purple-700">
                {progress.completedDays}/21 dias
              </span>
            </div>
            
            <div className="w-full bg-white/50 rounded-full h-3 mb-3">
              <div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full"
                style={{ width: `${(progress.completedDays / 21) * 100}%` }}
              />
            </div>
            
            <p className="text-sm text-gray-700">
              {progress.completedDays === 0 
                ? "Comece sua jornada hoje!" 
                : progress.completedDays < 21 
                  ? `Você já completou ${progress.completedDays} dias. Continue assim!` 
                  : "Parabéns! Você completou o programa completo!"}
            </p>
          </CardContent>
        </Card>

        {/* Calendar Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => {
              const prevMonth = new Date(currentMonth);
              prevMonth.setMonth(prevMonth.getMonth() - 1);
              setCurrentMonth(prevMonth);
            }}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          </button>
          
          <h3 className="text-lg font-medium text-gray-900 capitalize">
            {getMonthYearString(currentMonth)}
          </h3>
          
          <button 
            onClick={() => {
              const nextMonth = new Date(currentMonth);
              nextMonth.setMonth(nextMonth.getMonth() + 1);
              setCurrentMonth(nextMonth);
            }}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Program Days Grid */}
        <Card variant="default" size="md" className="mb-5">
          <CardHeader>
            <CardTitle>Dias do Programa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-6">
              {/* Days of week headers */}
              {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
                <div key={index} className="text-center text-xs font-medium text-gray-500 py-1">
                  {day}
                </div>
              ))}
              
              {/* Empty spaces for month alignment */}
              {Array.from({ length: programDays[0].date.getDay() }).map((_, index) => (
                <div key={`empty-${index}`} className="h-10"></div>
              ))}
              
              {/* Program days */}
              {programDays.map((day) => {
                let dayClasses = "flex items-center justify-center rounded-full h-10 w-10 text-sm font-medium";
                
                if (day.isCompleted) {
                  dayClasses += " bg-green-100 text-green-700 border-2 border-green-400";
                } else if (day.isToday) {
                  dayClasses += " bg-purple-600 text-white";
                } else if (day.isLocked) {
                  dayClasses += " bg-gray-100 text-gray-400 cursor-not-allowed";
                } else {
                  dayClasses += " bg-white border border-purple-200 text-purple-700 hover:bg-purple-50 cursor-pointer";
                }
                
                return (
                  <div key={day.day} className="flex justify-center">
                    <button
                      className={dayClasses}
                      onClick={() => {
                        if (!day.isLocked || day.isToday) {
                          onSelectDay(day.day);
                        }
                      }}
                      disabled={day.isLocked && !day.isToday}
                    >
                      {day.day}
                    </button>
                  </div>
                );
              })}
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-100 border border-green-400 rounded-full mr-1"></div>
                <span>Completado</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-600 rounded-full mr-1"></div>
                <span>Hoje</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 bg-white border border-purple-200 rounded-full mr-1"></div>
                <span>Disponível</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-100 rounded-full mr-1"></div>
                <span>Bloqueado</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card variant="outlined" size="md">
          <CardHeader>
            <CardTitle>Dicas para manter consistência</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Pratique no mesmo horário todos os dias para criar um hábito.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Use roupas confortáveis que permitam movimentos livres.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Respire profundamente durante os exercícios para maximizar benefícios.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Nunca force além do seu limite - yoga deve ser confortável.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Celebre cada dia completado como uma vitória pessoal!</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgramCalendar;
