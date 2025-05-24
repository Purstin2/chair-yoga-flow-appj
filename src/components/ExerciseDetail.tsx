import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeftIcon, 
  CheckIcon, 
  PlayIcon, 
  PauseIcon,
  ArrowRightIcon,
  ArrowPathIcon
} from '@heroicons/react/24/solid';
import { Exercise } from '@/types';
import { formatTime } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import Header from './Header';

interface ExerciseDetailProps {
  exercise: Exercise;
  isCompleted: boolean;
  onBack: () => void;
  onComplete: () => void;
  user: any;
  onProfileClick: () => void;
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({
  exercise,
  isCompleted,
  onBack,
  onComplete,
  user,
  onProfileClick
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [timer, setTimer] = useState(0);
  const [totalDuration] = useState(parseInt(exercise.duration || '5') * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(isCompleted);
  const [showConfetti, setShowConfetti] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  // Parar o timer ao desmontar o componente
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Scroll para o passo atual quando ele muda
  useEffect(() => {
    if (stepsRef.current) {
      const activeStep = stepsRef.current.querySelector(`.step-${currentStep}`);
      if (activeStep) {
        activeStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentStep]);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = window.setInterval(() => {
      setTimer(prev => {
        if (prev >= totalDuration) {
          clearInterval(intervalRef.current as number);
          setIsRunning(false);
          return totalDuration;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTimer(0);
  };

  const handleComplete = () => {
    setCompleted(true);
    setShowConfetti(true);
    onComplete();
    
    // Esconder confetti após 3 segundos
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  const getProgress = () => {
    return (timer / totalDuration) * 100;
  };

  const getStepProgress = () => {
    return ((currentStep + 1) / exercise.instructions.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-20">
      <Header 
        user={user}
        onProfileClick={onProfileClick}
        title={exercise.name}
        showBackButton
        onBackClick={onBack}
      />

      <div className="px-4 max-w-md mx-auto">
        {/* Exercise Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-4xl text-white">
            {exercise.icon}
          </div>
        </div>

        {/* Timer Section */}
        <Card variant="default" size="md" className="mb-5">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Tempo</CardTitle>
              <span className="text-gray-600 font-medium">
                {formatTime(timer)} / {formatTime(totalDuration)}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-4 bg-gray-100 rounded-full mb-4 overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                style={{ width: `${getProgress()}%` }}
              />
            </div>

            <div className="flex justify-center space-x-4">
              {!isRunning ? (
                <button
                  onClick={startTimer}
                  className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors shadow-md"
                >
                  <PlayIcon className="h-6 w-6" />
                </button>
              ) : (
                <button
                  onClick={pauseTimer}
                  className="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700 transition-colors shadow-md"
                >
                  <PauseIcon className="h-6 w-6" />
                </button>
              )}
              
              <button
                onClick={resetTimer}
                className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-gray-300 transition-colors"
              >
                <ArrowPathIcon className="h-6 w-6" />
              </button>
              
              {timer >= totalDuration && !completed && (
                <button
                  onClick={handleComplete}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center shadow-md"
                >
                  <CheckIcon className="h-5 w-5 mr-1" />
                  <span>Concluir Exercício</span>
                </button>
              )}
              
              {completed && (
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg flex items-center">
                  <CheckIcon className="h-5 w-5 mr-1" />
                  <span>Exercício concluído!</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Exercise Steps */}
        <Card variant="default" size="md" className="mb-5">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Passo a Passo</CardTitle>
              <span className="text-sm font-medium text-purple-600">
                {currentStep + 1} / {exercise.instructions.length}
              </span>
            </div>
            
            <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2">
              <div 
                className="h-full bg-purple-600 rounded-full transition-all duration-300"
                style={{ width: `${getStepProgress()}%` }}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div ref={stepsRef} className="space-y-4 max-h-60 overflow-y-auto pb-2 pr-1">
              {exercise.instructions.map((instruction, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 step-${index} ${
                    currentStep === index 
                      ? 'bg-purple-50 border-purple-200 shadow-sm' 
                      : index < currentStep
                        ? 'bg-gray-50 border-gray-200 opacity-70'
                        : 'bg-white border-gray-100'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                      index <= currentStep 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {index < currentStep ? (
                        <CheckIcon className="h-3.5 w-3.5" />
                      ) : (
                        <span className="text-xs font-medium">{index + 1}</span>
                      )}
                    </div>
                    <p className={`text-sm ${currentStep === index ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>
                      {instruction}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-5">
              <button
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentStep === 0 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white border border-purple-200 text-purple-700 hover:bg-purple-50'
                }`}
              >
                <span className="flex items-center">
                  <ArrowLeftIcon className="h-4 w-4 mr-1" />
                  Anterior
                </span>
              </button>
              <button
                onClick={() => setCurrentStep(prev => Math.min(exercise.instructions.length - 1, prev + 1))}
                disabled={currentStep === exercise.instructions.length - 1}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentStep === exercise.instructions.length - 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                <span className="flex items-center">
                  Próximo
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </span>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Exercise Info */}
        <Card variant="default" size="md">
          <CardHeader>
            <CardTitle>Sobre o exercício</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{exercise.description}</p>
            
            <h4 className="font-medium text-gray-900 mb-2">Benefícios:</h4>
            <p className="text-gray-700 mb-4">{exercise.benefits}</p>
            
            <div className="bg-purple-50 rounded-xl p-4">
              <h4 className="font-medium text-purple-900 mb-2">Instruções detalhadas:</h4>
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-purple-700 font-medium w-24">Posição:</span>
                  <span className="text-gray-700">{exercise.detailedInstructions.position}</span>
                </div>
                <div className="flex">
                  <span className="text-purple-700 font-medium w-24">Movimento:</span>
                  <span className="text-gray-700">{exercise.detailedInstructions.movement}</span>
                </div>
                <div className="flex">
                  <span className="text-purple-700 font-medium w-24">Respiração:</span>
                  <span className="text-gray-700">{exercise.detailedInstructions.breathing}</span>
                </div>
                <div className="flex">
                  <span className="text-purple-700 font-medium w-24">Benefício:</span>
                  <span className="text-gray-700">{exercise.detailedInstructions.benefit}</span>
                </div>
                <div className="flex">
                  <span className="text-purple-700 font-medium w-24">Cuidado:</span>
                  <span className="text-gray-700">{exercise.detailedInstructions.caution}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  borderRadius: '50%',
                  animation: `fall ${Math.random() * 3 + 2}s linear forwards`,
                }}
              />
            ))}
          </div>
          <style>{`
            @keyframes fall {
              0% {
                transform: translateY(-100px) rotate(0deg);
                opacity: 1;
              }
              100% {
                transform: translateY(calc(100vh + 100px)) rotate(720deg);
                opacity: 0;
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default ExerciseDetail;
