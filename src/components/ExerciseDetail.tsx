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
  InformationCircleIcon,
  ShieldExclamationIcon,
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
import { Card, CardContent } from './ui/Card';
import Header from './Header';
import ConfettiEffect from './ConfettiEffect';
import ErrorBoundary from './ErrorBoundary';
import { getCategoryColor, getCategoryIcon, IconType } from '@/data/exerciseCategories';
import VideoEmbed from './VideoEmbed';
import CompletionDialog from './CompletionDialog';
import StepByStepGuide from './StepByStepGuide';
import useSounds from '@/hooks/useSounds';
import { completeExercise, isExerciseCompleted } from '@/lib/userApi';

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
  const [completed, setCompleted] = useState(isCompleted);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showTrainingMode, setShowTrainingMode] = useState(false);
  const [showStepByStepMode, setShowStepByStepMode] = useState(false);
  const [showAutoMode, setShowAutoMode] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [highlightedStep, setHighlightedStep] = useState<number | null>(null);
  
  // Diálogo de confirmação ao final do exercício
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);
  
  // Referência para a lista de passos
  const stepsRef = useRef<HTMLDivElement>(null);
  
  // Use o hook de sons personalizado
  const { 
    enabled: soundEnabled, 
    setEnabled: setSoundEnabled, 
    playSuccess,
    playNotification,
    playTap 
  } = useSounds();
  
  // Determine if the exercise has step-by-step execution info
  const hasDetailedExecution = exercise.executionSteps && exercise.executionSteps.length > 0;
  
  // Get category color and icon
  const categoryColor = getCategoryColor(exercise.category);
  const categoryIconType = getCategoryIcon(exercise.category);

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
      case 'target':
        return <FiTarget className="h-5 w-5" />;
      case 'list':
        return <FiList className="h-5 w-5" />;
      case 'alert':
        return <FiAlertTriangle className="h-5 w-5" />;
      case 'chart':
        return <FiBarChart2 className="h-5 w-5" />;
      case 'check':
        return <FiCheckCircle className="h-5 w-5" />;
      default:
        return <FiActivity className="h-5 w-5" />;
    }
  };
  
  const handleAutoMode = () => toggleAutoMode();
  const handleTrainingMode = () => toggleTrainingMode();
  const handleStepByStepMode = () => toggleStepByStepMode();
  const handleAudioGuide = () => toggleAutoMode(); // Usa o modo automático para guia com áudio
  const handleStepByStep = () => toggleStepByStepMode(); // Usa o modo passo a passo

  // Setup intersection observer for step highlighting
  useEffect(() => {
    if (!stepsRef.current || showStepByStepMode) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;
        
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const stepId = entry.target.id;
            const stepIndex = parseInt(stepId.split('-')[1], 10);
            if (!isNaN(stepIndex)) {
              setCurrentStep(stepIndex);
              setHighlightedStep(stepIndex);
            }
          }
        });
      },
      { 
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.7
      }
    );
    
    // Observe each step element
    const stepElements = stepsRef.current.querySelectorAll('[id^="step-"]');
    stepElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      stepElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [showStepByStepMode, isScrolling]);

  // Handle manual scrolling detection
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Scroll to the selected step when manually changing step
  useEffect(() => {
    if (showStepByStepMode || isScrolling || highlightedStep === currentStep) return;
    
    const scrollToSelectedStep = () => {
      const element = document.getElementById(`step-${currentStep}`);
      if (element) {
        setIsScrolling(true);
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        
        // Reset scrolling flag after animation completes
        setTimeout(() => {
          setIsScrolling(false);
          setHighlightedStep(currentStep);
        }, 500);
      }
    };
    
    scrollToSelectedStep();
  }, [currentStep, showStepByStepMode, isScrolling, highlightedStep]);

  useEffect(() => {
    // Limpar confetti após 3 segundos
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleTimerComplete = () => {
    setShowCompletionDialog(true);
    setShowStepByStepMode(false);
    setShowAutoMode(false);
  };

  const handleConfirmCompletion = () => {
    setCompleted(true);
    setShowCompletionDialog(false);
    setShowConfetti(true);
    
    // Registrar conclusão com dados do exercício para estatísticas
    completeExercise(exercise.id, {
      category: exercise.category,
      duration: exercise.duration
    });
    
    onComplete();
    
    // Tocar som de conclusão
    playSuccess({ enableFeedback: true });
    
    // Fornecer feedback tátil
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }
  };

  const handleRejectCompletion = () => {
    setShowCompletionDialog(false);
    playNotification({ enableFeedback: true });
  };

  const handleComplete = () => {
    playTap();
    setShowCompletionDialog(true);
  };

  const toggleTrainingMode = () => {
    playTap();
    setShowTrainingMode(prev => !prev);
    setShowStepByStepMode(false);
    setShowAutoMode(false);
  };

  const toggleStepByStepMode = () => {
    playTap();
    setShowStepByStepMode(prev => !prev);
    setShowTrainingMode(false);
    setShowAutoMode(false);
  };

  const toggleAutoMode = () => {
    playTap();
    setShowAutoMode(prev => !prev);
    setShowTrainingMode(false);
    setShowStepByStepMode(false);
  };

  const speakInstruction = (text: string) => {
    if (!soundEnabled) return;
    
    if ('speechSynthesis' in window) {
      // Cancelar qualquer fala anterior
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Definir o idioma para português do Brasil
      utterance.lang = 'pt-BR';
      
      // Ajustar a velocidade para falar mais devagar
      utterance.rate = 0.9;
      
      // Escolher uma voz feminina se disponível
      const voices = window.speechSynthesis.getVoices();
      const portugueseVoices = voices.filter(voice => voice.lang.includes('pt'));
      
      if (portugueseVoices.length > 0) {
        // Preferir voz feminina
        const femaleVoice = portugueseVoices.find(voice => voice.name.includes('female') || voice.name.includes('Maria'));
        utterance.voice = femaleVoice || portugueseVoices[0];
      }
      
      window.speechSynthesis.speak(utterance);
    } else {
      console.log('Text-to-speech não suportado neste navegador.');
    }
  };

  // Calcular a duração total do exercício
  const calculateDuration = () => {
    if (hasDetailedExecution && exercise.executionSteps) {
      return exercise.executionSteps.reduce((total, step) => total + (step.duration || 0), 0);
    }
    
    // Se não tiver passos detalhados, usar a duração geral do exercício
    return parseInt(exercise.duration) * 60 || 300; // 5 minutos padrão
  };

  // Componente principal de tela
  return (
    <ErrorBoundary>
      <div className="bg-white flex flex-col min-h-screen">
        <Header 
          title="Detalhes do Exercício" 
          leftIcon={<ArrowLeftIcon className="h-6 w-6" />} 
          onLeftIconClick={onBack}
          rightIcon={user?.photo ? (
            <img src={user.photo} alt={user.name} className="h-8 w-8 rounded-full object-cover" />
          ) : (
            <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
              {user?.name?.charAt(0) || 'U'}
            </div>
          )}
          onRightIconClick={onProfileClick}
        />
        
        <div className="flex-1 overflow-auto p-4 pb-20">
          <div className="flex items-start mb-4 gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">{exercise.name}</h1>
              <div className="flex items-center mb-3">
                <div 
                  className="px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 mr-2"
                  style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}
                >
                  {getCategoryIconComponent(categoryIconType)}
                  {exercise.category}
                </div>
                <div className="flex items-center text-gray-500 text-xs gap-3">
                  <span className="flex items-center gap-1">
                    <ClockIcon className="h-3 w-3" />
                    {exercise.duration} min
                  </span>
                  <span className="flex items-center gap-1">
                    <BoltIcon className="h-3 w-3" />
                    {exercise.difficulty}
                  </span>
                </div>
              </div>
            </div>
            
            {completed && (
              <div className="bg-green-100 text-green-800 rounded-full p-2 flex-shrink-0">
                <CheckIcon className="h-6 w-6" />
              </div>
            )}
          </div>
          
          {/* Vídeo do exercício (se disponível) */}
          {exercise.isVideoExercise && exercise.videoUrl && (
            <div className="relative rounded-2xl overflow-hidden">
              <VideoEmbed videoUrl={exercise.videoUrl} />
              
              {/* Badge informativa */}
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1 z-30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                Demonstração em vídeo
              </div>
            </div>
          )}
          
          {/* Imagem do exercício (se disponível e não for vídeo) */}
          {!exercise.isVideoExercise && exercise.photoUrl && (
            <div className="aspect-video w-full rounded-2xl mb-4 overflow-hidden bg-gray-100 flex items-center justify-center">
              <img 
                src={exercise.photoUrl} 
                alt={exercise.name} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
          
          {/* Modo Passo a Passo (exibido como uma tela flutuante) */}
          {showStepByStepMode && (
            <StepByStepGuide 
              exercise={exercise}
              onExit={() => setShowStepByStepMode(false)}
              onComplete={handleTimerComplete}
            />
          )}
          
          {/* Descrição do exercício */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Descrição</h2>
            <p className="text-gray-700">{exercise.description}</p>
          </div>
          
          {/* Benefícios */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FiAward className="h-5 w-5 text-purple-600" />
              Benefícios
            </h2>
            <p className="text-gray-700 mb-3">{exercise.benefits}</p>
            
            {exercise.purposePoints && exercise.purposePoints.length > 0 && (
              <div className="bg-purple-50 rounded-lg p-4">
                <ul className="space-y-2">
                  {exercise.purposePoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Instruções passo a passo */}
          <div className="mb-6" ref={stepsRef}>
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FiList className="h-5 w-5 text-purple-600" />
              Instruções Passo a Passo
            </h2>
            
            <div className="space-y-4">
              {hasDetailedExecution && exercise.executionSteps ? (
                exercise.executionSteps.map((step, index) => (
                  <div 
                    key={index} 
                    id={`step-${index}`}
                    className={`p-4 rounded-lg border-l-4 transition-all duration-300 ${
                      currentStep === index ? 'border-purple-600 bg-purple-50 shadow-sm' : 'border-gray-200 bg-gray-50'
                    }`}
                    onClick={() => {
                      playTap();
                      setCurrentStep(index);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        currentStep === index ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{step.title || `Passo ${index + 1}`}</h3>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />
                            {step.duration || 15}s
                          </span>
                        </div>
                        <p className="text-gray-700">{step.instruction}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                exercise.instructions.map((instruction, index) => (
                  <div 
                    key={index} 
                    id={`step-${index}`}
                    className={`p-4 rounded-lg border-l-4 transition-all duration-300 ${
                      currentStep === index ? 'border-purple-600 bg-purple-50 shadow-sm' : 'border-gray-200 bg-gray-50'
                    }`}
                    onClick={() => {
                      playTap();
                      setCurrentStep(index);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        currentStep === index ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{instruction}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Dicas e Informações Adicionais */}
          {exercise.tips && exercise.tips.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <LightBulbIcon className="h-5 w-5 text-purple-600" />
                Dicas
              </h2>
              <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="space-y-2">
                  {exercise.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-5 w-5 text-yellow-600 flex-shrink-0 flex items-center justify-center font-bold">
                        {index + 1}.
                      </div>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Precauções */}
          {exercise.precautions && exercise.precautions.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <ShieldExclamationIcon className="h-5 w-5 text-purple-600" />
                Precauções
              </h2>
              <div className="bg-red-50 rounded-lg p-4">
                <ul className="space-y-2">
                  {exercise.precautions.map((precaution, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FiAlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{precaution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Informações sobre o vídeo */}
          {exercise.isVideoExercise && exercise.videoAuthor && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <InformationCircleIcon className="h-5 w-5 text-purple-600" />
                Informações do Vídeo
              </h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="mb-2"><strong>Autor:</strong> {exercise.videoAuthor}</p>
                {exercise.videoSource && (
                  <p className="mb-2"><strong>Fonte:</strong> {exercise.videoSource}</p>
                )}
                {exercise.videoDescription && (
                  <p><strong>Descrição:</strong> {exercise.videoDescription}</p>
                )}
                <div className="mt-3 text-xs text-gray-500">
                  <p>Este vídeo foi adaptado para melhor experiência educacional, sem fins comerciais.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Barra de ações fixa no rodapé */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between backdrop-blur-sm bg-white/90">
          <div className="flex gap-2">
            <button 
              onClick={() => {
                playTap();
                setSoundEnabled(prev => !prev);
              }}
              className="p-2 rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
              aria-label={soundEnabled ? "Desativar som" : "Ativar som"}
            >
              {soundEnabled ? (
                <SpeakerWaveIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <SpeakerXMarkIcon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleStepByStepMode}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                showStepByStepMode 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Iniciar modo passo a passo"
            >
              <ChevronRightIcon className="h-4 w-4" />
              Passo a Passo
            </button>
            
            <button
              onClick={completed ? () => {
                playTap();
                setCompleted(false);
              } : handleComplete}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                completed
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
              aria-label={completed ? "Refazer exercício" : "Concluir exercício"}
            >
              {completed ? (
                <>
                  <ArrowPathIcon className="h-4 w-4" />
                  Refazer
                </>
              ) : (
                <>
                  <CheckIcon className="h-4 w-4" />
                  Concluir
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* Diálogo de confirmação de conclusão */}
        {showCompletionDialog && (
          <CompletionDialog
            onConfirm={handleConfirmCompletion}
            onReject={handleRejectCompletion}
          />
        )}
        
        {/* Efeito de confetti para celebrar a conclusão */}
        {showConfetti && <ConfettiEffect />}
      </div>
    </ErrorBoundary>
  );
};

export default ExerciseDetail;
