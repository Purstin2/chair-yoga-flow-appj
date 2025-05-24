
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, CheckCircle, Play, Pause, Square, RotateCcw } from 'lucide-react';
import { Exercise } from '../data/exercises';

interface ExerciseDetailProps {
  exercise: Exercise;
  isCompleted: boolean;
  onBack: () => void;
  onComplete: () => void;
  userProgress: any;
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({
  exercise,
  isCompleted,
  onBack,
  onComplete,
  userProgress
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(parseInt(exercise.duration) * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeRemaining, onComplete]);

  const handleStart = () => {
    setIsStarted(true);
    setCurrentStep(0);
  };

  const handleStartTimer = () => {
    setShowTimer(true);
    setIsTimerRunning(true);
  };

  const handlePauseTimer = () => {
    setIsTimerRunning(false);
  };

  const handleResetTimer = () => {
    setTimeRemaining(parseInt(exercise.duration) * 60);
    setIsTimerRunning(false);
  };

  const handleNextStep = () => {
    if (currentStep < exercise.instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleStartTimer();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((parseInt(exercise.duration) * 60 - timeRemaining) / (parseInt(exercise.duration) * 60)) * 100;

  const difficultyColor = exercise.difficulty === 'Fácil' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
  const categoryColors = {
    'Respiração': 'bg-blue-100 text-blue-700',
    'Mobilidade': 'bg-purple-100 text-purple-700',
    'Alívio de Dor': 'bg-red-100 text-red-700',
    'Relaxamento': 'bg-green-100 text-green-700',
    'Fortalecimento': 'bg-orange-100 text-orange-700',
  };

  // Get today's checkin for adaptation
  const today = new Date().toISOString().split('T')[0];
  const todayCheckin = userProgress?.dailyCheckins?.[today];

  const getMotivationalMessage = () => {
    if (todayCheckin?.mood === 'tired') {
      return "Hoje pode ser só alguns minutos. O importante é cuidar de você! 💜";
    } else if (todayCheckin?.mood === 'stressed') {
      return "Vamos liberar essa tensão juntas. Você merece esse momento! 🌸";
    } else if (todayCheckin?.mood === 'energized') {
      return "Que energia linda! Vamos aproveitar para um treino completo! ⚡";
    }
    return "Respirando bem? Você está indo ótimo! Continue assim! 🌟";
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
        <div className="flex-1">
          <h1 className="text-xl font-bold text-purple-900">
            {exercise.name}
          </h1>
        </div>
        {isCompleted && (
          <CheckCircle className="text-green-500 ml-2" size={24} />
        )}
      </div>

      {/* Exercise Icon */}
      <div className="text-center mb-6">
        <div className="w-24 h-24 gradient-primary rounded-3xl flex items-center justify-center text-4xl text-white mx-auto mb-4">
          {exercise.icon}
        </div>
      </div>

      {/* Exercise Info */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-600">{exercise.duration} minutos</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColor}`}>
            {exercise.difficulty}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[exercise.category as keyof typeof categoryColors]}`}>
            {exercise.category}
          </span>
        </div>
        
        <p className="text-purple-700 mb-4 leading-relaxed">
          {exercise.description}
        </p>
        
        <div className="bg-purple-50 rounded-xl p-3 mb-4">
          <h4 className="font-semibold text-purple-900 mb-2">🎯 Benefícios:</h4>
          <p className="text-sm text-purple-700">{exercise.benefits}</p>
        </div>

        {/* Detailed Instructions */}
        <div className="bg-white rounded-xl p-3 border border-purple-100">
          <h4 className="font-semibold text-purple-900 mb-3">📋 Guia Rápido:</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="font-medium text-purple-800">Posição:</span>
              <p className="text-purple-600">{exercise.detailedInstructions.position}</p>
            </div>
            <div>
              <span className="font-medium text-purple-800">Respiração:</span>
              <p className="text-purple-600">{exercise.detailedInstructions.breathing}</p>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-purple-100">
            <span className="font-medium text-purple-800">⚠️ Cuidado:</span>
            <p className="text-xs text-purple-600">{exercise.detailedInstructions.caution}</p>
          </div>
        </div>
      </div>

      {/* Timer Section */}
      {showTimer && (
        <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
          <div className="text-center mb-4">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${progress * 2.827} 282.7`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7432B4" />
                    <stop offset="100%" stopColor="#9747FF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-purple-900">
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
            
            <div className="flex justify-center gap-3">
              {!isTimerRunning ? (
                <button
                  onClick={() => setIsTimerRunning(true)}
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Play size={16} />
                  Continuar
                </button>
              ) : (
                <button
                  onClick={handlePauseTimer}
                  className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  <Pause size={16} />
                  Pausar
                </button>
              )}
              
              <button
                onClick={handleResetTimer}
                className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw size={16} />
                Reiniciar
              </button>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <p className="text-sm text-purple-700 font-medium">
              {getMotivationalMessage()}
            </p>
          </div>
        </div>
      )}

      {/* Exercise Instructions */}
      {isStarted && !showTimer ? (
        <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-purple-900">Passo a Passo</h3>
            <span className="text-sm text-purple-600">
              {currentStep + 1} de {exercise.instructions.length}
            </span>
          </div>
          
          <div className="w-full bg-purple-100 rounded-full h-2 mb-4">
            <div 
              className="gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / exercise.instructions.length) * 100}%` }}
            />
          </div>
          
          <div className="bg-white rounded-xl p-4 mb-4 border border-purple-100">
            <p className="text-purple-900 leading-relaxed">
              {exercise.instructions[currentStep]}
            </p>
          </div>
          
          <button
            onClick={handleNextStep}
            className="w-full gradient-primary text-white py-3 rounded-xl font-medium hover:scale-105 transition-transform"
          >
            {currentStep < exercise.instructions.length - 1 ? 'Próximo Passo' : 'Iniciar Timer'}
          </button>
        </div>
      ) : !isStarted ? (
        <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
          <h3 className="font-semibold text-purple-900 mb-4">Instruções Completas</h3>
          <div className="space-y-3 mb-6">
            {exercise.instructions.map((instruction, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <p className="text-purple-700 text-sm leading-relaxed">{instruction}</p>
              </div>
            ))}
          </div>

          {/* Adaptation based on daily checkin */}
          {todayCheckin && (
            <div className="bg-blue-50 rounded-xl p-3 mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">
                💡 Adaptado para como você se sente hoje:
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                {exercise.adaptations[todayCheckin.mood as keyof typeof exercise.adaptations]?.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
          )}
          
          {!isCompleted ? (
            <button
              onClick={handleStart}
              className="w-full gradient-primary text-white py-4 rounded-xl font-medium text-lg hover:scale-105 transition-transform"
            >
              ▶️ Iniciar Exercício
            </button>
          ) : (
            <div className="text-center py-4">
              <CheckCircle className="text-green-500 mx-auto mb-2" size={32} />
              <p className="text-green-700 font-medium">Exercício Concluído!</p>
              <p className="text-sm text-green-600 mt-1">Parabéns! Mais um passo na sua transformação! 🎉</p>
            </div>
          )}
        </div>
      ) : null}

      {/* Target Areas */}
      <div className="gradient-card rounded-2xl p-4 shadow-lg">
        <h4 className="font-semibold text-purple-900 mb-3">🎯 Áreas Trabalhadas:</h4>
        <div className="flex flex-wrap gap-2">
          {exercise.targetAreas.map((area, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
