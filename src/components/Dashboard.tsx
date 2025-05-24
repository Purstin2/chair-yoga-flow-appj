
import React from 'react';
import { Calendar, Clock, Target, ArrowRight, Heart, Zap } from 'lucide-react';
import StatsCard from './StatsCard';

interface DashboardProps {
  userProgress: {
    streak: number;
    todayMinutes: number;
    weekProgress: number;
    completedDays: number;
    badges: string[];
    dailyCheckins: any;
  };
  onStartQuickWorkout: () => void;
  onViewProgram: () => void;
  onShowCheckin: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  userProgress, 
  onStartQuickWorkout, 
  onViewProgram,
  onShowCheckin
}) => {
  const todayExercises = [
    { name: 'Respiração Cervical', duration: '3min', category: 'Respiração', completed: false },
    { name: 'Rotação de Ombros', duration: '2min', category: 'Mobilidade', completed: true },
    { name: 'Torção Suave', duration: '4min', category: 'Mobilidade', completed: false },
  ];

  // Get today's checkin
  const today = new Date().toISOString().split('T')[0];
  const todayCheckin = userProgress.dailyCheckins[today];

  const getGreetingMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Bom dia, Ana! ☀️";
    } else if (hour < 18) {
      return "Boa tarde, Ana! 🌤️";
    } else {
      return "Boa noite, Ana! 🌙";
    }
  };

  const getMotivationalMessage = () => {
    if (todayCheckin?.mood === 'tired') {
      return "Hoje pode ser um dia mais suave. Que tal começar com uma respiração?";
    } else if (todayCheckin?.mood === 'stressed') {
      return "Vamos liberar essa tensão? Você merece esse momento de cuidado!";
    } else if (todayCheckin?.mood === 'energized') {
      return "Que energia maravilhosa! Vamos aproveitar para um treino completo!";
    } else if (userProgress.streak >= 3) {
      return `${userProgress.streak} dias seguidos! Você é uma verdadeira guerreira! 💪`;
    }
    return "Pronta para cuidar de si hoje?";
  };

  const badgeNames: { [key: string]: string } = {
    'primeira_semana': 'Primeira Semana',
    '100_minutos': '100 Minutos',
    'primeira_sequencia': 'Primeira Sequência',
    'guerreira': 'Guerreira',
    'zen_master': 'Zen Master',
    'dedicada': 'Dedicada',
    'flash': 'Flash'
  };

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-purple-900 mb-2">
          {getGreetingMessage()}
        </h1>
        <p className="text-purple-600">
          {getMotivationalMessage()}
        </p>
      </div>

      {/* Quick Check-in Button */}
      {!todayCheckin && (
        <div className="gradient-secondary rounded-2xl p-4 mb-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="text-white" size={24} />
              <div>
                <h3 className="text-white font-semibold">Check-in Diário</h3>
                <p className="text-white/90 text-sm">Como você está hoje?</p>
              </div>
            </div>
            <button
              onClick={onShowCheckin}
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              Começar
            </button>
          </div>
        </div>
      )}

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

      {/* Recent Badges */}
      {userProgress.badges.length > 0 && (
        <div className="gradient-card rounded-2xl p-4 mb-6 shadow-lg">
          <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
            🏆 Conquistas Recentes
          </h3>
          <div className="flex gap-2 overflow-x-auto">
            {userProgress.badges.slice(-3).map((badge, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-yellow-100 border border-yellow-300 rounded-lg p-3 text-center min-w-[80px]"
              >
                <div className="text-lg mb-1">🏅</div>
                <p className="text-xs font-medium text-yellow-700">
                  {badgeNames[badge] || badge}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

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
        
        {/* Progress Message */}
        <div className="bg-purple-50 rounded-xl p-3 mb-4">
          <p className="text-sm text-purple-700">
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
              className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                exercise.completed 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-white border border-purple-100 hover:bg-purple-50'
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
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={onStartQuickWorkout}
          className="gradient-secondary text-white p-4 rounded-xl font-medium hover:scale-105 transition-transform"
        >
          <Zap className="w-5 h-5 mx-auto mb-1" />
          Treino Rápido
          <span className="block text-sm opacity-90">5 minutos</span>
        </button>
        <button className="bg-white border border-purple-200 text-purple-700 p-4 rounded-xl font-medium hover:scale-105 transition-transform">
          <Target className="w-5 h-5 mx-auto mb-1" />
          Dica do Dia
          <span className="block text-sm opacity-70">Postura</span>
        </button>
      </div>

      {/* Daily Tip */}
      <div className="gradient-card rounded-2xl p-4 shadow-lg">
        <h4 className="font-semibold text-purple-900 mb-2">💡 Dica de Hoje</h4>
        <p className="text-sm text-purple-700 leading-relaxed">
          {todayCheckin?.painAreas?.includes('neck')
            ? "Para aliviar a tensão no pescoço, mantenha a tela do computador na altura dos olhos e faça pausas a cada hora."
            : todayCheckin?.painAreas?.includes('back')
            ? "Lembre-se: pés apoiados no chão, costas retas e ombros relaxados. Sua coluna agradece!"
            : "Mantenha os pés apoiados no chão durante os exercícios. Isso garante estabilidade e melhores resultados."
          }
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
