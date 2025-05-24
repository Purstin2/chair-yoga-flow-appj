
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Target, CheckCircle, Play, Pause, Square, RotateCcw } from 'lucide-react';

interface Exercise {
  id: number;
  name: string;
  duration: string;
  difficulty: string;
  category: string;
  targetArea: string;
  image: string;
  description: string;
  benefits: string;
  instructions: string[];
}

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
          {exercise.image}
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
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
            {exercise.targetArea}
          </span>
        </div>
        
        <p className="text-purple-700 mb-4 leading-relaxed">
          {exercise.description}
        </p>
        
        <div className="bg-purple-50 rounded-xl p-3">
          <h4 className="font-semibold text-purple-900 mb-2">🎯 Benefícios:</h4>
          <p className="text-sm text-purple-700">{exercise.benefits}</p>
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
              <p className="text-sm text-green-600 mt-1">Parabéns! Continue assim! 🎉</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ExerciseDetail;
