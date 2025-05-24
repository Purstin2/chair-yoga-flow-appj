import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeftIcon, 
  CheckIcon, 
  PlayIcon, 
  PauseIcon,
  ArrowRightIcon,
  ArrowPathIcon,
  SpeakerWaveIcon,
  ClockIcon,
  XMarkIcon
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
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [stepDuration] = useState(30); // Cada passo dura 30 segundos por padrão
  const [stepTimeRemaining, setStepTimeRemaining] = useState(stepDuration);
  const [isBigViewMode, setIsBigViewMode] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const stepIntervalRef = useRef<number | null>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  // Parar o timer ao desmontar o componente
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (stepIntervalRef.current) {
        clearInterval(stepIntervalRef.current);
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
    // Resetar o tempo do passo quando mudar de passo
    if (autoAdvance) {
      setStepTimeRemaining(stepDuration);
    }
  }, [currentStep, stepDuration, autoAdvance]);

  // Avançar automaticamente os passos quando autoAdvance estiver ativo
  useEffect(() => {
    if (autoAdvance && isRunning) {
      if (stepIntervalRef.current) {
        clearInterval(stepIntervalRef.current);
      }
      
      stepIntervalRef.current = window.setInterval(() => {
        setStepTimeRemaining(prev => {
          if (prev <= 1) {
            // Avançar para o próximo passo quando o tempo acabar
            if (currentStep < exercise.instructions.length - 1) {
              setCurrentStep(prev => prev + 1);
              return stepDuration;
            } else {
              // Último passo concluído
              clearInterval(stepIntervalRef.current as number);
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else if (stepIntervalRef.current) {
      clearInterval(stepIntervalRef.current);
    }
    
    return () => {
      if (stepIntervalRef.current) {
        clearInterval(stepIntervalRef.current);
      }
    };
  }, [autoAdvance, isRunning, currentStep, exercise.instructions.length, stepDuration]);

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
    setStepTimeRemaining(stepDuration);
    setCurrentStep(0);
  };

  const toggleAutoAdvance = () => {
    setAutoAdvance(!autoAdvance);
    setStepTimeRemaining(stepDuration);
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

  const getStepTimeProgress = () => {
    return (stepTimeRemaining / stepDuration) * 100;
  };

  const speakInstruction = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      speechSynthesis.speak(utterance);
    }
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
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-4xl text-white">
            {exercise.icon}
          </div>
        </div>

        {/* Big View Mode para instruções */}
        {isBigViewMode && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="bg-purple-100 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-purple-900">{exercise.name}</h2>
              <button 
                onClick={() => setIsBigViewMode(false)}
                className="p-2 rounded-full bg-white"
              >
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <div className="flex-1 p-6 flex flex-col items-center justify-center">
              <div className="text-5xl mb-6">{exercise.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Passo {currentStep + 1} de {exercise.instructions.length}
              </h3>
              <p className="text-xl text-center text-gray-700 mb-8">
                {exercise.instructions[currentStep]}
              </p>
              
              {autoAdvance && (
                <div className="w-full max-w-sm">
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                    <div 
                      className="h-4 rounded-full bg-purple-600"
                      style={{ width: `${getStepTimeProgress()}%` }}
                    />
                  </div>
                  <p className="text-center text-gray-600">{stepTimeRemaining}s restantes</p>
                </div>
              )}
            </div>
            <div className="bg-gray-100 p-4 flex justify-around">
              <button
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="p-3 rounded-full bg-white shadow disabled:opacity-50"
              >
                <ArrowLeftIcon className="h-6 w-6 text-purple-700" />
              </button>
              
              <button
                onClick={() => speakInstruction(exercise.instructions[currentStep])}
                className="p-3 rounded-full bg-white shadow"
              >
                <SpeakerWaveIcon className="h-6 w-6 text-purple-700" />
              </button>
              
              <button
                onClick={() => setCurrentStep(prev => Math.min(exercise.instructions.length - 1, prev + 1))}
                disabled={currentStep === exercise.instructions.length - 1}
                className="p-3 rounded-full bg-white shadow disabled:opacity-50"
              >
                <ArrowRightIcon className="h-6 w-6 text-purple-700" />
              </button>
            </div>
          </div>
        )}

        {/* Timer Section */}
        <Card variant="default" size="md" className="mb-4">
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
              
              <button
                onClick={toggleAutoAdvance}
                className={`p-3 rounded-full transition-colors ${
                  autoAdvance 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                title={autoAdvance ? "Desativar avanço automático" : "Ativar avanço automático"}
              >
                <ClockIcon className="h-6 w-6" />
              </button>
              
              {timer >= totalDuration && !completed && (
                <button
                  onClick={handleComplete}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center shadow-md"
                >
                  <CheckIcon className="h-5 w-5 mr-1" />
                  <span>Concluir</span>
                </button>
              )}
              
              {completed && (
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg flex items-center">
                  <CheckIcon className="h-5 w-5 mr-1" />
                  <span>Concluído!</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Exercise Steps */}
        <Card variant="default" size="md" className="mb-4">
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
            
            {autoAdvance && (
              <div className="w-full mt-2 flex items-center justify-between text-xs">
                <div className="h-1 bg-green-100 rounded-full flex-1 mr-2">
                  <div 
                    className="h-1 bg-green-600 rounded-full transition-all duration-1000"
                    style={{ width: `${getStepTimeProgress()}%` }}
                  />
                </div>
                <span className="text-gray-500">{stepTimeRemaining}s</span>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <button 
              onClick={() => setIsBigViewMode(true)}
              className="w-full py-2 mb-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium"
            >
              Abrir modo de visualização ampliada
            </button>
            
            <div ref={stepsRef} className="space-y-3 max-h-60 overflow-y-auto pb-2 pr-1">
              {exercise.instructions.map((instruction, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-xl border transition-all duration-300 step-${index} ${
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
                    <div className="flex-1">
                      <p className={`text-sm ${currentStep === index ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>
                        {instruction}
                      </p>
                      {currentStep === index && (
                        <button 
                          onClick={() => speakInstruction(instruction)}
                          className="mt-2 text-xs flex items-center text-purple-600"
                        >
                          <SpeakerWaveIcon className="h-3 w-3 mr-1" />
                          Ouvir instrução
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4">
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
        <Card variant="default" size="md" className="mb-4">
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
