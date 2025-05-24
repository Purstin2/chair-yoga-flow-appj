import React, { useState } from 'react';
import { 
  ClockIcon, 
  SparklesIcon, 
  ArrowRightIcon,
  BoltIcon,
  FireIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
import { User, UserProgress } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import Header from './Header';

interface DashboardProps {
  user: User;
  progress: UserProgress;
  onStartExercise: () => void;
  onViewProgram: () => void;
  onProfileClick: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  progress, 
  user,
  onStartExercise,
  onViewProgram,
  onProfileClick
}) => {
  const [activeTab, setActiveTab] = useState<'today' | 'program'>('today');

  const nextExercisesList = [
    { id: 1, name: 'Respiração Cervical', duration: '3', category: 'Respiração', icon: '🫁' },
    { id: 2, name: 'Rotação de Ombros', duration: '2', category: 'Mobilidade', icon: '🤸' },
    { id: 3, name: 'Torção Suave', duration: '4', category: 'Mobilidade', icon: '🌀' },
  ];

  // Gerar a mensagem de boas-vindas com base no horário
  const getGreetingMessage = () => {
    const hour = new Date().getHours();
    const name = user?.name || 'Usuário';
    
    if (hour < 12) {
      return `Bom dia, ${name}!`;
    } else if (hour < 18) {
      return `Boa tarde, ${name}!`;
    } else {
      return `Boa noite, ${name}!`;
    }
  };

  // Calcular dias restantes para a meta
  const daysLeft = 21 - progress.completedDays;
  const progressPercent = Math.round((progress.completedDays / 21) * 100);

  return (
    <div className="pb-20">
      <Header 
        user={user}
        onProfileClick={onProfileClick}
      />

      <div className="px-4 max-w-md mx-auto">
        {/* Boas-vindas e Progress Stats */}
        <Card variant="gradient" size="md" className="mb-5">
          <CardContent className="pt-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl text-white mr-3">
                {user?.photo}
              </div>
              <div>
                <h2 className="font-bold text-gray-900">{getGreetingMessage()}</h2>
                <p className="text-sm text-gray-600">Cuide do seu corpo hoje</p>
              </div>
            </div>

            {/* Progress Stats */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="bg-white/70 rounded-xl p-2 text-center">
                <p className="text-xs text-gray-500 mb-1">Dias</p>
                <p className="text-lg font-bold text-purple-600">{progress.completedDays}</p>
              </div>
              
              <div className="bg-white/70 rounded-xl p-2 text-center">
                <p className="text-xs text-gray-500 mb-1">Minutos</p>
                <p className="text-lg font-bold text-purple-600">{progress.totalMinutes}</p>
              </div>
              
              <div className="bg-white/70 rounded-xl p-2 text-center">
                <p className="text-xs text-gray-500 mb-1">Exercícios</p>
                <p className="text-lg font-bold text-purple-600">{progress.completedExercises.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs para Navegação */}
        <div className="flex border-b border-gray-200 mb-5">
          <button
            onClick={() => setActiveTab('today')}
            className={`flex-1 py-3 text-sm font-medium relative ${
              activeTab === 'today'
                ? 'text-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Para Hoje
            {activeTab === 'today' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('program')}
            className={`flex-1 py-3 text-sm font-medium relative ${
              activeTab === 'program'
                ? 'text-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Programa 21 Dias
            {activeTab === 'program' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
            )}
          </button>
        </div>

        {activeTab === 'today' && (
          <>
            {/* Exercícios Recomendados */}
            <Card variant="default" size="md" className="mb-5">
              <CardHeader>
                <CardTitle>Exercícios para hoje</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {nextExercisesList.map((exercise) => (
                    <div
                      key={exercise.id}
                      onClick={onStartExercise}
                      className="flex items-center p-3 bg-white rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-sm transition-all cursor-pointer"
                    >
                      <div className="h-10 w-10 bg-purple-50 rounded-lg flex items-center justify-center text-xl mr-3">
                        {exercise.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{exercise.name}</h4>
                        <p className="text-xs text-gray-500">{exercise.category} • {exercise.duration} min</p>
                      </div>
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <ArrowRightIcon className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onStartExercise}
                  className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <BoltIcon className="h-4 w-4" />
                  Iniciar Treino Rápido
                </button>
              </CardContent>
            </Card>

            {/* Dica do Dia */}
            <Card variant="outlined" size="md" className="mb-5">
              <CardHeader>
                <div className="flex items-center">
                  <span className="text-xl mr-2">💡</span>
                  <CardTitle>Dica do Dia</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Mantenha os pés apoiados no chão durante os exercícios. Isso garante 
                  estabilidade e melhores resultados para reduzir dores na coluna.
                </p>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === 'program' && (
          <>
            {/* Programa 21 Dias */}
            <Card variant="default" size="md" className="mb-5">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Programa 21 Dias</CardTitle>
                  <span className="text-sm font-medium text-purple-600">{progressPercent}%</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center">
                    <CalendarDaysIcon className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-700 font-medium">
                      {progress.completedDays} / 21 dias completados
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <FireIcon className="h-5 w-5 text-orange-500 mr-1" />
                    <span className="text-gray-700">{progress.streak} dias seguidos</span>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-3 mb-4">
                  <p className="text-sm text-gray-700">
                    {daysLeft > 0 
                      ? `Faltam ${daysLeft} dias para concluir seu programa. Continue assim!`
                      : "🎉 Parabéns! Você completou o programa de 21 dias!"
                    }
                  </p>
                </div>
                
                <button
                  onClick={onViewProgram}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Ver Calendário Completo
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            {/* Próximos exercícios do programa */}
            <Card variant="default" size="md" className="mb-5">
              <CardHeader>
                <CardTitle>Próximos Exercícios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {nextExercisesList.map((exercise) => (
                    <div
                      key={exercise.id}
                      onClick={onStartExercise}
                      className="flex items-center p-3 bg-white rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-sm transition-all cursor-pointer"
                    >
                      <div className="h-10 w-10 bg-purple-50 rounded-lg flex items-center justify-center text-xl mr-3">
                        {exercise.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{exercise.name}</h4>
                        <p className="text-xs text-gray-500">{exercise.category} • {exercise.duration} min</p>
                      </div>
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <ArrowRightIcon className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
