import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  InformationCircleIcon,
  BeakerIcon,
  ShieldExclamationIcon,
  ArrowPathRoundedSquareIcon,
  AdjustmentsHorizontalIcon,
  BookmarkIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { 
  FiActivity, FiHeart, FiAward, FiRotateCcw, 
  FiRefreshCw, FiSmile, FiSun, FiMoon, FiMove, FiWind,
  FiTarget, FiList, FiAlertTriangle, FiBarChart2, FiCheckCircle
} from 'react-icons/fi';
import { Exercise } from '@/types';
import { formatTime } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import Header from './Header';
import ExerciseTimer from './ExerciseTimer';
import ConfettiEffect from './ConfettiEffect';
import ErrorBoundary from './ErrorBoundary';
import ExerciseScreen from './ExerciseScreen';
import { getCategoryColor, getCategoryIcon, IconType } from '@/data/exerciseCategories';

interface ExerciseDetailProps {
  exercise: Exercise;
  isCompleted: boolean;
  onBack: () => void;
  onComplete: () => void;
  user: any;
  onProfileClick: () => void;
}

// Componente para incorporar vídeos
const VideoEmbed = ({ videoUrl }: { videoUrl: string }) => {
  // Verificar se é um vídeo do Vimeo ou YouTube e ajustar parâmetros
  const isVimeo = videoUrl.includes('vimeo.com');
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  
  let embedUrl = videoUrl;
  
  if (isYouTube) {
    // Garantir que a URL já não tenha parâmetros
    if (embedUrl.includes('?')) {
      // Se já tiver parâmetros, apenas adicionar os que faltam
      if (!embedUrl.includes('rel=0')) embedUrl += '&rel=0';
      if (!embedUrl.includes('modestbranding=1')) embedUrl += '&modestbranding=1';
    } else {
      // Adicionar parâmetros para melhorar compatibilidade com YouTube
      embedUrl = `${videoUrl}?rel=0&modestbranding=1`;
    }
  } else if (isVimeo) {
    // Ajustar parâmetros para Vimeo
    if (videoUrl.includes('player.vimeo.com')) {
      embedUrl = `${videoUrl}?autoplay=0&title=0&byline=0&portrait=0`;
    } else {
      // Converter URL normal do Vimeo para URL de incorporação
      const vimeoId = videoUrl.split('/').pop();
      embedUrl = `https://player.vimeo.com/video/${vimeoId}?autoplay=0&title=0&byline=0&portrait=0`;
    }
  }
  
  return (
    <div className="aspect-video w-full rounded-2xl mb-4 overflow-hidden">
      <iframe 
        width="100%" 
        height="100%" 
        src={embedUrl}
        title="Video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Manter compatibilidade com código existente
const YouTubeEmbed = VideoEmbed;

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({
  exercise,
  isCompleted,
  onBack,
  onComplete,
  user,
  onProfileClick
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(isCompleted);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showTrainingMode, setShowTrainingMode] = useState(false);
  const [showStepByStepMode, setShowStepByStepMode] = useState(false);
  const [showAutoMode, setShowAutoMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // Diálogo de confirmação ao final do exercício
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);
  
  // Determine if the exercise has step-by-step execution info (mover para cima)
  const hasDetailedExecution = exercise.executionSteps && exercise.executionSteps.length > 0;
  
  // Mover os hooks do modo step-by-step para o nível superior
  const [stepProgress, setStepProgress] = useState(0);
  const [stepTimeLeft, setStepTimeLeft] = useState(
    hasDetailedExecution && exercise.executionSteps 
      ? exercise.executionSteps[currentStep]?.duration 
      : 15
  );
  const stepTimerRef = useRef<number | null>(null);
  const [isStepRunning, setIsStepRunning] = useState(false);
  const stepsRef = useRef<HTMLDivElement>(null);

  // Get category color and icon
  const categoryColor = getCategoryColor(exercise.category);
  const categoryIconType = getCategoryIcon(exercise.category);

  // Iniciar o timer para o passo atual
  const startStepTimer = useCallback(() => {
    if (!showStepByStepMode) return;
    
    if (stepTimerRef.current) {
      clearInterval(stepTimerRef.current);
    }

    const stepDuration = hasDetailedExecution && exercise.executionSteps 
      ? exercise.executionSteps[currentStep]?.duration 
      : 15;
    
    setStepTimeLeft(stepDuration);
    setStepProgress(0);
    setIsStepRunning(true);
    
    stepTimerRef.current = window.setInterval(() => {
      setStepTimeLeft(prev => {
        if (prev <= 1) {
          if (stepTimerRef.current) {
            clearInterval(stepTimerRef.current);
          }
          setIsStepRunning(false);
          
          // Avançar para o próximo passo quando o tempo acabar
          const totalSteps = hasDetailedExecution && exercise.executionSteps 
            ? exercise.executionSteps.length 
            : exercise.instructions.length;
            
          if (currentStep < totalSteps - 1) {
            setCurrentStep(prev => prev + 1);
          } else {
            // Exercício completo
            handleTimerComplete();
          }
          
          return 0;
        }
        
        // Atualizar o progresso
        const duration = hasDetailedExecution && exercise.executionSteps 
          ? exercise.executionSteps[currentStep]?.duration 
          : 15;
        
        setStepProgress(((duration - prev + 1) / duration) * 100);
        return prev - 1;
      });
    }, 1000);
  }, [currentStep, hasDetailedExecution, exercise.executionSteps, exercise.instructions?.length, showStepByStepMode]);

  // Function to get category icon based on type
  const getCategoryIconComponent = (iconType: IconType) => {
    switch (iconType) {
      case 'activity':
        return <FiActivity className="h-5 w-5" />;
      case 'move':
        return <FiMove className="h-5 w-5" />;
      case 'rotate':
        return <FiRotateCcw className="h-5 w-5" />;
      case 'refresh':
        return <FiRefreshCw className="h-5 w-5" />;
      case 'award':
        return <FiAward className="h-5 w-5" />;
      case 'moon':
        return <FiMoon className="h-5 w-5" />;
      case 'smile':
        return <FiSmile className="h-5 w-5" />;
      case 'heart':
        return <FiHeart className="h-5 w-5" />;
      case 'sun':
        return <FiSun className="h-5 w-5" />;
      case 'wind':
        return <FiWind className="h-5 w-5" />;
      default:
        return <FiActivity className="h-5 w-5" />;
    }
  };

  // Scroll to the current step when it changes
  useEffect(() => {
    if (stepsRef.current) {
      const activeStep = stepsRef.current.querySelector(`.step-${currentStep}`);
      if (activeStep) {
        activeStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentStep]);

  // Adicionar event listeners para eventos personalizados disparados pelo ExerciseTimer
  useEffect(() => {
    const handleAutoMode = () => toggleAutoMode();
    const handleTrainingMode = () => toggleTrainingMode();
    const handleStepByStepMode = () => toggleStepByStepMode();
    const handleAudioGuide = () => toggleAutoMode(); // Usa o modo automático para guia com áudio
    const handleStepByStep = () => toggleStepByStepMode(); // Usa o modo passo a passo
    
    window.addEventListener('toggleAutoMode', handleAutoMode);
    window.addEventListener('toggleTrainingMode', handleTrainingMode);
    window.addEventListener('toggleStepByStepMode', handleStepByStepMode);
    window.addEventListener('startAudioGuide', handleAudioGuide);
    window.addEventListener('startStepByStep', handleStepByStep);
    
    return () => {
      window.removeEventListener('toggleAutoMode', handleAutoMode);
      window.removeEventListener('toggleTrainingMode', handleTrainingMode);
      window.removeEventListener('toggleStepByStepMode', handleStepByStepMode);
      window.removeEventListener('startAudioGuide', handleAudioGuide);
      window.removeEventListener('startStepByStep', handleStepByStep);
    };
  }, []);

  // Iniciar timer quando o passo mudar no modo step-by-step
  useEffect(() => {
    if (!showStepByStepMode) return;
    
    if (hasDetailedExecution && exercise.executionSteps) {
      setStepTimeLeft(exercise.executionSteps[currentStep]?.duration || 15);
    } else {
      setStepTimeLeft(15); // Tempo padrão se não houver duração específica
    }
    
    setStepProgress(0);
    startStepTimer();
    
    // Limpar o timer quando desmontar
    return () => {
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
      }
    };
  }, [currentStep, hasDetailedExecution, exercise.executionSteps, startStepTimer, showStepByStepMode]);

  // Limpar timer quando o modo step-by-step for desativado
  useEffect(() => {
    if (!showStepByStepMode && stepTimerRef.current) {
      clearInterval(stepTimerRef.current);
      setIsStepRunning(false);
    }
  }, [showStepByStepMode]);

  const handleTimerComplete = () => {
    // Mostrar diálogo de confirmação em vez de completar automaticamente
    setShowCompletionDialog(true);
  };

  const handleConfirmCompletion = () => {
    // Usuário confirmou que concluiu o exercício
    setShowConfetti(true);
    setCompleted(true);
    setShowCompletionDialog(false);
    
    // Notify parent
    setTimeout(() => {
      onComplete();
      setShowConfetti(false);
    }, 3000);
  };

  const handleRejectCompletion = () => {
    // Usuário quer refazer o exercício
    setShowCompletionDialog(false);
    
    // Resetar para o primeiro passo
    setCurrentStep(0);
    
    // Reiniciar o timer se estiver no modo passo a passo
    if (showStepByStepMode) {
      startStepTimer();
    }
  };

  const handleComplete = () => {
    setCompleted(true);
    setShowConfetti(true);
    onComplete();
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  const toggleTrainingMode = () => {
    setShowTrainingMode(!showTrainingMode);
    setShowStepByStepMode(false);
    setShowAutoMode(false);
  };

  const toggleStepByStepMode = () => {
    setShowStepByStepMode(!showStepByStepMode);
    setShowTrainingMode(false);
    setShowAutoMode(false);
  };

  const toggleAutoMode = () => {
    setShowAutoMode(!showAutoMode);
    setShowTrainingMode(false);
    setShowStepByStepMode(false);
  };

  const speakInstruction = (text: string) => {
    if ('speechSynthesis' in window && soundEnabled) {
      // Cancelar qualquer fala em andamento
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.85; // Velocidade um pouco mais lenta para melhor compreensão
      utterance.pitch = 1.05; // Tom ligeiramente mais alto para voz feminina mais natural
      utterance.volume = 1.0;
      
      // Buscar as vozes disponíveis
      const voices = window.speechSynthesis.getVoices();

      // Tentar encontrar a melhor voz disponível
      // Prioridade: 1. Voz premium/aprimorada em português brasileiro
      //             2. Qualquer voz em português brasileiro
      //             3. Qualquer voz em português
      //             4. Voz padrão
      const premiumVoice = voices.find(voice => 
        (voice.name.includes('Premium') || 
         voice.name.includes('Neural') || 
         voice.name.includes('Enhanced') || 
         voice.name.includes('Natural')) && 
        voice.lang.includes('pt-BR')
      );
      
      if (premiumVoice) {
        utterance.voice = premiumVoice;
      } else {
        const brVoice = voices.find(voice => voice.lang.includes('pt-BR'));
        if (brVoice) {
          utterance.voice = brVoice;
        } else {
          const ptVoice = voices.find(voice => voice.lang.includes('pt'));
          if (ptVoice) {
            utterance.voice = ptVoice;
          }
        }
      }
      
      // Adicionar um pequeno atraso para uma entrega mais natural
      const shortPause = new SpeechSynthesisUtterance('.');
      shortPause.volume = 0;
      shortPause.rate = 0.1;
      
      window.speechSynthesis.speak(shortPause);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Calculate total exercise duration in seconds
  const calculateDuration = () => {
    // If using executionSteps, calculate from those
    if (hasDetailedExecution && exercise.executionSteps) {
      return exercise.executionSteps.reduce((total, step) => total + step.duration, 0);
    }
    // Otherwise use the specified duration in minutes
    return parseInt(exercise.duration || '3') * 60;
  };

  // Auto navigation mode (completely hands-free)
  if (showAutoMode) {
    return (
      <ExerciseScreen
        exercise={exercise}
        onComplete={handleTimerComplete}
        onBack={() => setShowAutoMode(false)}
      />
    );
  }
  
  // Training mode (simplified view)
  if (showTrainingMode) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col">
        <div className="bg-purple-600 p-4 flex items-center justify-between">
          <button 
            onClick={toggleTrainingMode}
            className="p-2 rounded-full bg-purple-500"
            aria-label="Sair do modo treino"
          >
            <ArrowLeftIcon className="h-5 w-5 text-white" />
          </button>
          <h2 className="text-lg font-bold text-white">{exercise.name}</h2>
          <div className="w-10" /> {/* Spacer to center the title */}
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          {exercise.photoUrl ? (
            <div className="w-64 h-64 rounded-full mb-8 overflow-hidden">
              <img 
                src={exercise.photoUrl} 
                alt={exercise.name} 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-64 h-64 rounded-full mb-8 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <img 
                src={`https://source.unsplash.com/random/400x400/?yoga,${exercise.category.toLowerCase()},exercise`} 
                alt={exercise.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <ExerciseTimer 
            initialDuration={calculateDuration()}
            onComplete={handleTimerComplete}
            currentInstruction={hasDetailedExecution && exercise.executionSteps 
              ? exercise.executionSteps[currentStep]?.instruction
              : exercise.instructions[currentStep]}
          />
          
          <div className="text-center mb-10 mt-8">
            <p className="text-xl text-gray-900 mb-3">
              {hasDetailedExecution && exercise.executionSteps 
                ? exercise.executionSteps[currentStep]?.instruction
                : exercise.instructions[currentStep]}
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow disabled:opacity-50"
              aria-label="Passo anterior"
            >
              <ArrowLeftIcon className="h-7 w-7" />
            </button>
            
            <button
              onClick={() => speakInstruction(hasDetailedExecution && exercise.executionSteps 
                ? exercise.executionSteps[currentStep]?.instruction
                : exercise.instructions[currentStep])}
              className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow"
              aria-label="Ouvir instrução"
            >
              <SpeakerWaveIcon className="h-7 w-7" />
            </button>
            
            <button
              onClick={() => setCurrentStep(prev => Math.min(
                (hasDetailedExecution && exercise.executionSteps 
                  ? exercise.executionSteps.length 
                  : exercise.instructions.length) - 1, 
                prev + 1
              ))}
              disabled={currentStep === (hasDetailedExecution && exercise.executionSteps 
                ? exercise.executionSteps.length 
                : exercise.instructions.length) - 1}
              className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 shadow disabled:opacity-50"
              aria-label="Próximo passo"
            >
              <ChevronRightIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
        
        <ConfettiEffect active={showConfetti} />
      </div>
    );
  }

  // Diálogo de confirmação de conclusão
  const CompletionDialog = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl maxw-sm w-full p-6 shadow-lg">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckIcon className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Exercício Finalizado!</h3>
          <p className="text-gray-600">Você concluiu com sucesso este exercício?</p>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          <button 
            onClick={handleConfirmCompletion}
            className="w-full py-3 bg-purple-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors hover:bg-purple-700"
          >
            <CheckIcon className="h-5 w-5" />
            Sim, concluí
          </button>
          
          <button 
            onClick={handleRejectCompletion}
            className="w-full py-3 bg-gray-200 text-gray-800 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors hover:bg-gray-300"
          >
            <ArrowPathIcon className="h-5 w-5" />
            Não, refazer
          </button>
        </div>
      </div>
    </div>
  );

  // Step-by-step mode
  if (showStepByStepMode) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        <div className="bg-purple-600 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">{exercise.name}</h2>
          <button 
            onClick={toggleStepByStepMode}
            className="p-2 rounded-full bg-purple-500"
            aria-label="Fechar modo passo a passo"
          >
            <ArrowLeftIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        
        <div className="flex-1 p-6 flex flex-col items-center justify-center">
          {exercise.photoUrl ? (
            <div className="w-48 h-48 rounded-lg mb-6 overflow-hidden">
              <img 
                src={exercise.photoUrl} 
                alt={exercise.name} 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-48 h-48 rounded-lg mb-6 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <img 
                src={`https://source.unsplash.com/random/300x300/?yoga,${exercise.category.toLowerCase()},exercise`} 
                alt={exercise.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Passo {currentStep + 1} de {hasDetailedExecution && exercise.executionSteps
              ? exercise.executionSteps.length
              : exercise.instructions.length}
          </h3>
          
          <p className="text-xl text-center text-gray-700 mb-8">
            {hasDetailedExecution && exercise.executionSteps
              ? exercise.executionSteps[currentStep]?.instruction
              : exercise.instructions[currentStep]}
          </p>
          
            <div className="mb-8 w-full max-w-sm">
              <p className="text-center text-gray-600 mb-2">
              Duração: {stepTimeLeft} segundos
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="h-4 rounded-full bg-purple-600 transition-all duration-500 ease-in-out"
                style={{ width: `${stepProgress}%` }}
                />
              </div>
            </div>
        </div>
            
        <div className="bg-gray-100 p-4 flex justify-around">
          <button
            onClick={() => {
              if (stepTimerRef.current) {
                clearInterval(stepTimerRef.current);
              }
              setCurrentStep(prev => Math.max(0, prev - 1));
            }}
            disabled={currentStep === 0}
            className="p-3 rounded-full bg-white shadow disabled:opacity-50"
            aria-label="Passo anterior"
          >
            <ArrowLeftIcon className="h-6 w-6 text-purple-700" />
          </button>
          
          <button
            onClick={() => {
              // Pausar/Retomar o timer
              if (isStepRunning) {
                if (stepTimerRef.current) {
                  clearInterval(stepTimerRef.current);
                }
                setIsStepRunning(false);
              } else {
                startStepTimer();
              }
            }}
            className="p-3 rounded-full bg-white shadow"
            aria-label={isStepRunning ? "Pausar" : "Iniciar"}
          >
            {isStepRunning ? (
              <PauseIcon className="h-6 w-6 text-purple-700" />
            ) : (
              <PlayIcon className="h-6 w-6 text-purple-700" />
            )}
          </button>
              
          <button
            onClick={() => {
              if (stepTimerRef.current) {
                clearInterval(stepTimerRef.current);
              }
              const totalSteps = hasDetailedExecution && exercise.executionSteps 
                ? exercise.executionSteps.length 
                : exercise.instructions.length;
              
              if (currentStep < totalSteps - 1) {
                setCurrentStep(prev => prev + 1);
              }
            }}
            disabled={currentStep === (hasDetailedExecution && exercise.executionSteps 
              ? exercise.executionSteps.length 
              : exercise.instructions.length) - 1}
            className="p-3 rounded-full bg-white shadow disabled:opacity-50"
            aria-label="Próximo passo"
          >
            <ChevronRightIcon className="h-6 w-6 text-purple-700" />
          </button>
        </div>
        
        {/* Adicionar o diálogo de conclusão */}
        {showCompletionDialog && <CompletionDialog />}
        
        {/* Confetti effect */}
        <ConfettiEffect active={showConfetti} />
      </div>
    );
  }

  // Main exercise detail view
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
        {/* Exercise Photo or Video */}
        {exercise.isVideoExercise && exercise.videoUrl ? (
          <YouTubeEmbed videoUrl={exercise.videoUrl} />
        ) : (
        <div className="aspect-video overflow-hidden rounded-2xl mb-4 bg-gray-100 flex items-center justify-center relative">
          {exercise.photoUrl ? (
            <img 
              src={exercise.photoUrl} 
              alt={`Demonstração de ${exercise.name}`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              src={`https://source.unsplash.com/random/800x600/?yoga,${exercise.category.toLowerCase()},exercise`} 
              alt={`Demonstração de ${exercise.name}`}
              className="w-full h-full object-cover"
            />
          )}

          {/* Badges overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center">
              <ClockIcon className="h-3 w-3 mr-1" />
              {exercise.duration} minutos
            </span>
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center">
              {exercise.difficulty === 'Fácil' ? 
                <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span> : 
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-1"></span>
              } 
              {exercise.difficulty}
            </span>
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center">
              <span className="mr-1 text-purple-500">
                {getCategoryIconComponent(categoryIconType)}
              </span>
              {exercise.category}
            </span>
          </div>
        </div>
        )}
          
        {/* Informação do vídeo, se aplicável */}
        {exercise.isVideoExercise && exercise.videoAuthor && (
          <div className="mb-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">Vídeo por: {exercise.videoAuthor}</h3>
                {exercise.videoDescription && (
                  <p className="text-sm text-gray-600 mt-1">{exercise.videoDescription}</p>
                )}
              </div>
            </div>
          </div>
        )}
          
        {/* Timer Card - Removendo shadow */}
        <Card 
          variant="default" 
          size="md" 
          className="mb-4 shadow-none" 
          style={{ boxShadow: 'none !important' }}
        >
          <CardContent className="pt-6">
            <ExerciseTimer 
              initialDuration={calculateDuration()}
              onComplete={handleTimerComplete}
              currentInstruction={hasDetailedExecution && exercise.executionSteps 
                ? exercise.executionSteps[currentStep]?.instruction
                : exercise.instructions[currentStep]}
            />
            
            {completed && (
              <div className="mt-4 bg-green-100 text-green-800 px-4 py-3 rounded-lg flex items-center justify-center">
                <CheckIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">Parabéns! Você investiu em si mesma!</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* For What Purpose section */}
        <Card variant="default" size="md" className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FiTarget className="h-5 w-5 mr-2 text-purple-600" />
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

        {/* Execution Steps */}
        {hasDetailedExecution && (
          <Card variant="default" size="md" className="mb-4">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FiList className="h-5 w-5 mr-2 text-purple-600" />
                EXECUÇÃO PASSO A PASSO:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div ref={stepsRef} className="space-y-4">
                {exercise.executionSteps?.map((step, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg border ${
                      currentStep === index 
                        ? 'border-purple-300 bg-purple-50' 
                        : 'border-gray-200'
                    } step-${index}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                        currentStep === index 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {index + 1}
                      </div>
                      <p className="font-medium text-gray-900">{step.instruction}</p>
                    </div>
                    <p className="text-sm text-gray-600 ml-8">
                      Duração: {step.duration} segundos
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Precautions section */}
        <Card variant="default" size="md" className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FiAlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
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
                  <LightBulbIcon className="h-5 w-5 mr-2" />
                  DICA ESPECIAL:
                </h4>
                <p className="text-gray-700 text-sm">{exercise.specialTip}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Scientific Data Section */}
        {exercise.scientificData && (
          <Card variant="default" size="md" className="mb-4">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BeakerIcon className="h-5 w-5 mr-2 text-purple-600" />
                BASE CIENTÍFICA:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Músculos Alvo:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exercise.scientificData.targetMuscles.map((muscle, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-full">
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Fundamentação Científica:</h4>
                  <ul className="space-y-1">
                    {exercise.scientificData.scientificBasis.map((basis, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <p className="text-gray-700 text-sm">{basis}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Resultados Esperados:</h4>
                  <ul className="space-y-1">
                    {exercise.scientificData.expectedResults.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <p className="text-gray-700 text-sm">{result}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {exercise.scientificData.contraindicatedFor && exercise.scientificData.contraindicatedFor.length > 0 && (
                  <div className="mt-2 p-3 bg-red-50 border border-red-100 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-1 flex items-center">
                      <ShieldExclamationIcon className="h-5 w-5 mr-2" />
                      CONTRAINDICADO PARA:
                    </h4>
                    <ul className="space-y-1 mt-2">
                      {exercise.scientificData.contraindicatedFor.map((condition, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <p className="text-gray-700 text-sm">{condition}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {exercise.scientificData.adaptations && Object.keys(exercise.scientificData.adaptations).length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <AdjustmentsHorizontalIcon className="h-5 w-5 mr-1 text-blue-600" />
                      Adaptações para condições específicas:
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(exercise.scientificData.adaptations).map(([condition, adaptation], idx) => (
                        <div key={idx} className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                          <h5 className="font-medium text-gray-800 mb-1">{condition}:</h5>
                          <p className="text-gray-600 text-sm">{adaptation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons - Remover botão de RESULTADOS */}
        <div className="flex mb-8">
          {!completed ? (
            <button
              onClick={handleComplete}
              className="w-full py-3 bg-purple-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
              aria-label="Marcar exercício como concluído"
            >
              <CheckIcon className="h-5 w-5" />
              CONCLUIR EXERCÍCIO
            </button>
          ) : (
            <button
              className="w-full py-3 bg-green-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 cursor-default"
              disabled
            >
              <FiCheckCircle className="h-5 w-5" />
              EXERCÍCIO CONCLUÍDO
            </button>
          )}
        </div>
      </div>

      {/* Adicionar o diálogo de conclusão */}
      {showCompletionDialog && <CompletionDialog />}

      {/* Confetti Effect */}
      <ConfettiEffect active={showConfetti} />
    </div>
  );
};

export default ExerciseDetail;
