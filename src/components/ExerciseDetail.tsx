import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeftIcon, 
  CheckIcon, 
  PlayIcon, 
  PauseIcon,
  StopIcon,
  ArrowPathIcon,
  SpeakerWaveIcon,
  ClockIcon,
  SpeakerXMarkIcon,
  BoltIcon,
  ChevronRightIcon,
  ChartBarIcon,
  InformationCircleIcon
} from '@heroicons/react/24/solid';
import { Exercise } from '@/types';
import { formatTime } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import Header from './Header';
import PainFeedbackForm, { PainFeedbackData } from './PainFeedbackForm';

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
  const [timeLeft, setTimeLeft] = useState(parseInt(exercise.duration || '3') * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(isCompleted);
  const [showConfetti, setShowConfetti] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [stepDuration] = useState(30); // Cada passo dura 30 segundos por padrão
  const [stepTimeRemaining, setStepTimeRemaining] = useState(stepDuration);
  const [isBigViewMode, setIsBigViewMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showingFeedbackForm, setShowingFeedbackForm] = useState(true);
  const [exerciseReady, setExerciseReady] = useState(false);
  const [showTrainingMode, setShowTrainingMode] = useState(false);
  const timerRef = useRef<number | null>(null);
  const stepTimerRef = useRef<number | null>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const beepSoundRef = useRef<HTMLAudioElement | null>(null);
  const completeSoundRef = useRef<HTMLAudioElement | null>(null);

  // Criar referências para os sons
  useEffect(() => {
    beepSoundRef.current = new Audio('/beep.mp3'); // Assuma que você tenha esses arquivos
    completeSoundRef.current = new Audio('/complete.mp3');
    
    // Função para descarregar os sons quando o componente for desmontado
    return () => {
      if (beepSoundRef.current) {
        beepSoundRef.current.pause();
        beepSoundRef.current = null;
      }
      if (completeSoundRef.current) {
        completeSoundRef.current.pause();
        completeSoundRef.current = null;
      }
    };
  }, []);

  // Parar o timer ao desmontar o componente
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
      }
    };
  }, []);

  // Salvar estado do timer no localStorage para persistência
  useEffect(() => {
    const savedTimer = localStorage.getItem(`exercise_timer_${exercise.id}`);
    if (savedTimer) {
      const timerData = JSON.parse(savedTimer);
      setTimeLeft(timerData.timeLeft);
      setIsRunning(false); // Sempre começa pausado ao retornar
    }

    // Atualizar localStorage quando o timer mudar
    if (timeLeft > 0) {
      localStorage.setItem(`exercise_timer_${exercise.id}`, JSON.stringify({
        exerciseId: exercise.id,
        timeLeft,
        timestamp: new Date().getTime()
      }));
    }
  }, [timeLeft, exercise.id]);

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
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
      }
      
      stepTimerRef.current = window.setInterval(() => {
        setStepTimeRemaining(prev => {
          if (prev <= 1) {
            // Avançar para o próximo passo quando o tempo acabar
            if (currentStep < exercise.instructions.length - 1) {
              setCurrentStep(prev => prev + 1);
              return stepDuration;
            } else {
              // Último passo concluído
              clearInterval(stepTimerRef.current as number);
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else if (stepTimerRef.current) {
      clearInterval(stepTimerRef.current);
    }
    
    return () => {
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
      }
    };
  }, [autoAdvance, isRunning, currentStep, exercise.instructions.length, stepDuration]);

  // Timer principal
  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current as number);
            setIsRunning(false);
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  // Função para lidar com a conclusão do timer
  const handleTimerComplete = () => {
    if (soundEnabled && completeSoundRef.current) {
      completeSoundRef.current.play();
    }
    
    // Vibrar o dispositivo se suportado
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]);
    }
    
    // Mostra confetti e marca como concluído
    setShowConfetti(true);
    setCompleted(true);
    
    // Esconder confetti após 3 segundos
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  const startTimer = () => {
    if (soundEnabled && beepSoundRef.current) {
      beepSoundRef.current.play();
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const stopTimer = () => {
    pauseTimer();
    // Opção para não resetar para permitir continuar de onde parou
    // setTimeLeft(parseInt(exercise.duration || '3') * 60);
  };

  const resetTimer = () => {
    pauseTimer();
    setTimeLeft(parseInt(exercise.duration || '3') * 60);
    setStepTimeRemaining(stepDuration);
    setCurrentStep(0);
  };

  const toggleAutoAdvance = () => {
    setAutoAdvance(!autoAdvance);
    setStepTimeRemaining(stepDuration);
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
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

  const getTimerProgress = () => {
    const totalSeconds = parseInt(exercise.duration || '3') * 60;
    return (timeLeft / totalSeconds) * 100;
  };

  const getStepProgress = () => {
    return ((currentStep + 1) / exercise.instructions.length) * 100;
  };

  const getStepTimeProgress = () => {
    return (stepTimeRemaining / stepDuration) * 100;
  };

  const speakInstruction = (text: string) => {
    if ('speechSynthesis' in window && soundEnabled) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      speechSynthesis.speak(utterance);
    }
  };

  const handleFeedbackComplete = (feedbackData: PainFeedbackData) => {
    // Em produção, salvaríamos estes dados
    console.log('Pre-exercise feedback:', feedbackData);
    setShowingFeedbackForm(false);
    setExerciseReady(true);
  };

  const toggleTrainingMode = () => {
    setShowTrainingMode(!showTrainingMode);
  };

  // Se estiver mostrando o formulário de feedback pré-exercício
  if (showingFeedbackForm) {
    return (
      <PainFeedbackForm 
        isPreSession={true} 
        onComplete={handleFeedbackComplete}
      />
    );
  }

  // Se estiver no modo de treino simplificado
  if (showTrainingMode) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col">
        <div className="bg-purple-100 p-4 flex items-center justify-between">
          <button 
            onClick={toggleTrainingMode}
            className="p-2 rounded-full bg-white"
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
          <h2 className="text-lg font-bold text-purple-900">{exercise.name}</h2>
          <div className="w-10" /> {/* Espaçador para centralizar o título */}
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="text-7xl mb-8">{exercise.icon}</div>
          
          <div className="relative w-40 h-40 rounded-full border-8 border-purple-100 mb-8 flex items-center justify-center">
            <div 
              className="absolute inset-0 rounded-full border-8 border-purple-600"
              style={{ 
                clipPath: `polygon(0% 0%, ${getTimerProgress()}% 0%, ${getTimerProgress()}% 100%, 0% 100%)`,
                borderRadius: '50%'
              }}
            />
            <span className="text-3xl font-bold text-gray-900">
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </span>
          </div>
          
          <div className="text-center mb-10">
            <p className="text-xl text-gray-900 mb-3">
              {exercise.instructions[currentStep]}
            </p>
            {autoAdvance && (
              <p className="text-gray-600">{stepTimeRemaining}...</p>
            )}
          </div>
          
          <div className="flex justify-center space-x-6">
            {isRunning ? (
              <button
                onClick={pauseTimer}
                className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <PauseIcon className="h-7 w-7" />
              </button>
            ) : (
              <button
                onClick={startTimer}
                className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <PlayIcon className="h-7 w-7" />
              </button>
            )}
            
            <button
              onClick={stopTimer}
              className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow"
            >
              <StopIcon className="h-7 w-7" />
            </button>
            
            <button
              onClick={() => setCurrentStep(prev => Math.min(exercise.instructions.length - 1, prev + 1))}
              className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 shadow"
            >
              <ChevronRightIcon className="h-7 w-7" />
            </button>
            
            <button
              onClick={toggleSound}
              className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow"
            >
              {soundEnabled ? (
                <SpeakerWaveIcon className="h-7 w-7" />
              ) : (
                <SpeakerXMarkIcon className="h-7 w-7" />
              )}
            </button>
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center">
            <p className="text-sm text-gray-600">
              Exercício {currentStep + 1} de {exercise.instructions.length} • 
              Faltam {Math.ceil(timeLeft / 60)} minutos
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header 
        user={user}
        onProfileClick={onProfileClick}
        title={exercise.name}
        showBackButton
        onBackClick={onBack}
      />

      <div className="px-4 max-w-md mx-auto">
        {/* Exercise Photo */}
        <div className="aspect-square overflow-hidden rounded-2xl mb-4 bg-gray-100 flex items-center justify-center relative">
          {exercise.photoUrl ? (
            <img 
              src={exercise.photoUrl} 
              alt={`Mulher fazendo ${exercise.name}`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-8xl mb-4">{exercise.icon}</span>
              <p className="text-gray-500 text-sm">Imagem ilustrativa</p>
            </div>
          )}
          
          {/* Badges overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center">
              <ClockIcon className="h-3 w-3 mr-1" />
              {exercise.duration} minutos
            </span>
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center">
              {exercise.difficulty === 'Fácil' ? '🟢' : '🟠'} {exercise.difficulty}
            </span>
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center">
              {getCategoryEmoji(exercise.category)} {exercise.category}
            </span>
          </div>
        </div>

        {/* Timer Card */}
        <Card variant="default" size="md" className="mb-4">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Timer</CardTitle>
              <span className="text-gray-600 font-medium">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-4 bg-gray-100 rounded-full mb-4 overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                style={{ width: `${getTimerProgress()}%` }}
              />
            </div>

            <div className="flex justify-center space-x-3">
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
                onClick={stopTimer}
                className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-gray-300 transition-colors"
              >
                <StopIcon className="h-6 w-6" />
              </button>
              
              <button
                onClick={resetTimer}
                className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-gray-300 transition-colors"
              >
                <ArrowPathIcon className="h-6 w-6" />
              </button>
              
              <button
                onClick={toggleSound}
                className={`p-3 rounded-full transition-colors ${
                  soundEnabled 
                    ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                title={soundEnabled ? "Desativar som" : "Ativar som"}
              >
                {soundEnabled ? (
                  <SpeakerWaveIcon className="h-6 w-6" />
                ) : (
                  <SpeakerXMarkIcon className="h-6 w-6" />
                )}
              </button>
              
              {timeLeft === 0 && !completed && (
                <button
                  onClick={handleComplete}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center shadow-md"
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
            
            <button
              onClick={toggleTrainingMode}
              className="w-full mt-4 py-2.5 bg-purple-600 text-white rounded-lg font-medium flex items-center justify-center"
            >
              <BoltIcon className="h-5 w-5 mr-2" />
              Modo Treino Simplificado
            </button>
          </CardContent>
        </Card>

        {/* Para que serve section */}
        <Card variant="default" size="md" className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="mr-2">🎯</span>
              PARA QUE SERVE:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {exercise.purposePoints?.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              )) || (
                <>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <p className="text-gray-700">Reduz tensão na nuca e pescoço</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <p className="text-gray-700">Alivia dor de cabeça</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <p className="text-gray-700">Melhora circulação cerebral</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <p className="text-gray-700">Diminui ansiedade</p>
                  </li>
                </>
              )}
            </ul>
          </CardContent>
        </Card>

        {/* Como fazer section */}
        <Card variant="default" size="md" className="mb-4">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center">
                <span className="mr-2">📋</span>
                COMO FAZER:
              </CardTitle>
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
            <div className="flex space-x-2 mb-4">
              <button
                onClick={toggleAutoAdvance}
                className={`flex-1 py-2 rounded-lg transition-colors text-sm font-medium ${
                  autoAdvance 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Auto-avanço {autoAdvance ? 'Ativado' : 'Desativado'}
              </button>
              
              <button 
                onClick={() => setIsBigViewMode(true)}
                className="flex-1 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium"
              >
                Tela Cheia
              </button>
            </div>
            
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
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </span>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Cuidados section */}
        <Card variant="default" size="md" className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="mr-2">⚠️</span>
              CUIDADOS:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {exercise.cautions?.map((caution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <p className="text-gray-700">{caution}</p>
                </li>
              )) || (
                <>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <p className="text-gray-700">Não force a respiração</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <p className="text-gray-700">Se ficar tonta, respire normal</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <p className="text-gray-700">Pare se sentir desconforto</p>
                  </li>
                </>
              )}
            </ul>

            {exercise.hasWarning && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm font-medium flex items-start">
                  <InformationCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                  {exercise.warningText || "Este exercício requer atenção especial. Consulte seu médico se tiver dúvidas."}
                </p>
              </div>
            )}
            
            {exercise.specialTip && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-1 flex items-center">
                  <span className="mr-2">💡</span>
                  DICA ESPECIAL:
                </h4>
                <p className="text-gray-700 text-sm">{exercise.specialTip}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex space-x-3 mb-8">
          <button
            onClick={startTimer}
            className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <PlayIcon className="h-5 w-5" />
            INICIAR COM TIMER
          </button>
          
          <button
            className="py-3 px-4 bg-white border border-purple-300 text-purple-700 rounded-xl font-medium hover:bg-purple-50 transition-colors flex items-center"
          >
            <ChartBarIcon className="h-5 w-5 mr-2" />
            MEUS RESULTADOS
          </button>
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
              <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
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
              <ChevronRightIcon className="h-6 w-6 text-purple-700" />
            </button>
          </div>
        </div>
      )}

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

// Função para obter emoji baseado na categoria
function getCategoryEmoji(category: string): string {
  const emojiMap: Record<string, string> = {
    'Respiração': '🫁',
    'Mobilidade': '🤸',
    'Alongamento': '🧘‍♀️',
    'Fortalecimento': '💪',
    'Meditação': '🧠',
    'Relaxamento': '😌'
  };
  
  return emojiMap[category] || '🧘‍♀️';
}

export default ExerciseDetail;
