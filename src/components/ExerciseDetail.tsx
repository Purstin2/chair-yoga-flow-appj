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
  InformationCircleIcon,
  BeakerIcon,
  ShieldExclamationIcon,
  ArrowPathRoundedSquareIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/solid';
import { Exercise } from '@/types';
import { formatTime } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import Header from './Header';
import ExerciseTimer from './ExerciseTimer';
import ConfettiEffect from './ConfettiEffect';
import PainFeedbackForm, { PainFeedbackData } from './PainFeedbackForm';
import ErrorBoundary from './ErrorBoundary';

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
  const [showingFeedbackForm, setShowingFeedbackForm] = useState(true);
  const [exerciseReady, setExerciseReady] = useState(false);
  const [showStepByStepMode, setShowStepByStepMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const stepsRef = useRef<HTMLDivElement>(null);

  // Scroll to the current step when it changes
  useEffect(() => {
    if (stepsRef.current) {
      const activeStep = stepsRef.current.querySelector(`.step-${currentStep}`);
      if (activeStep) {
        activeStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentStep]);

  const handleTimerComplete = () => {
    // Show confetti and mark as completed
    setShowConfetti(true);
    setCompleted(true);
    
    // Notify parent
    setTimeout(() => {
      onComplete();
      setShowConfetti(false);
    }, 3000);
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
  };

  const toggleStepByStepMode = () => {
    setShowStepByStepMode(!showStepByStepMode);
  };

  const handleFeedbackComplete = (feedbackData: PainFeedbackData) => {
    // In production, we would save this data
    console.log('Pre-exercise feedback:', feedbackData);
    setShowingFeedbackForm(false);
    setExerciseReady(true);
  };

  const speakInstruction = (text: string) => {
    if ('speechSynthesis' in window && soundEnabled) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      speechSynthesis.speak(utterance);
    }
  };

  // Determine if the exercise has step-by-step execution info
  const hasDetailedExecution = exercise.executionSteps && exercise.executionSteps.length > 0;

  // Calculate total exercise duration in seconds
  const calculateDuration = () => {
    // If using executionSteps, calculate from those
    if (hasDetailedExecution && exercise.executionSteps) {
      return exercise.executionSteps.reduce((total, step) => total + step.duration, 0);
    }
    // Otherwise use the specified duration in minutes
    return parseInt(exercise.duration || '3') * 60;
  };
  
  // If showing the pre-exercise feedback form
  if (showingFeedbackForm) {
    return (
      <ErrorBoundary fallback={<div>Erro ao carregar formulário. Por favor reinicie o app.</div>}>
        <PainFeedbackForm 
          isPreSession={true} 
          onComplete={handleFeedbackComplete}
        />
      </ErrorBoundary>
    );
  }

  // Training mode (simplified view)
  if (showTrainingMode) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col">
        <div className="bg-purple-100 p-4 flex items-center justify-between">
          <button 
            onClick={toggleTrainingMode}
            className="p-2 rounded-full bg-white"
            aria-label="Sair do modo treino"
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
          <h2 className="text-lg font-bold text-purple-900">{exercise.name}</h2>
          <div className="w-10" /> {/* Spacer to center the title */}
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="text-7xl mb-8" aria-label={`Ícone de ${exercise.name}`}>
            {exercise.icon}
          </div>
          
          <ExerciseTimer 
            initialDuration={calculateDuration()}
            onComplete={handleTimerComplete}
            autoStart={false}
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

  // Step-by-step mode
  if (showStepByStepMode) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        <div className="bg-purple-100 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-purple-900">{exercise.name}</h2>
          <button 
            onClick={toggleStepByStepMode}
            className="p-2 rounded-full bg-white"
            aria-label="Fechar modo passo a passo"
          >
            <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        
        <div className="flex-1 p-6 flex flex-col items-center justify-center">
          <div className="text-5xl mb-6" aria-label={`Ícone de ${exercise.name}`}>
            {exercise.icon}
          </div>
          
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
          
          {hasDetailedExecution && exercise.executionSteps && (
            <div className="mb-8 w-full max-w-sm">
              <p className="text-center text-gray-600 mb-2">
                Duração: {exercise.executionSteps[currentStep]?.duration} segundos
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="h-4 rounded-full bg-purple-600 transition-all duration-500 ease-in-out"
                  style={{ width: '0%' }}
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-gray-100 p-4 flex justify-around">
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="p-3 rounded-full bg-white shadow disabled:opacity-50"
            aria-label="Passo anterior"
          >
            <ArrowLeftIcon className="h-6 w-6 text-purple-700" />
          </button>
          
          <button
            onClick={() => speakInstruction(hasDetailedExecution && exercise.executionSteps
              ? exercise.executionSteps[currentStep]?.instruction
              : exercise.instructions[currentStep])}
            className="p-3 rounded-full bg-white shadow"
            aria-label="Ouvir instrução"
          >
            <SpeakerWaveIcon className="h-6 w-6 text-purple-700" />
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
            className="p-3 rounded-full bg-white shadow disabled:opacity-50"
            aria-label="Próximo passo"
          >
            <ChevronRightIcon className="h-6 w-6 text-purple-700" />
          </button>
        </div>
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
              <span className="text-8xl mb-4" aria-label={`Ícone de ${exercise.name}`}>
                {exercise.icon}
              </span>
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
            <CardTitle>Seu momento de autocuidado</CardTitle>
          </CardHeader>
          <CardContent>
            <ExerciseTimer 
              initialDuration={calculateDuration()}
              onComplete={handleTimerComplete}
            />
            
            {completed && (
              <div className="mt-4 bg-green-100 text-green-800 px-4 py-3 rounded-lg flex items-center justify-center">
                <CheckIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">Parabéns! Você investiu em si mesma!</span>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                onClick={toggleTrainingMode}
                className="py-2.5 bg-purple-600 text-white rounded-lg font-medium flex items-center justify-center"
                aria-label="Ativar modo treino simplificado"
              >
                <BoltIcon className="h-5 w-5 mr-2" />
                Modo Treino
              </button>
              
              <button
                onClick={toggleStepByStepMode}
                className="py-2.5 bg-white border border-purple-300 text-purple-700 rounded-lg font-medium flex items-center justify-center"
                aria-label="Ver instruções passo a passo"
              >
                <ArrowPathRoundedSquareIcon className="h-5 w-5 mr-2" />
                Passo a Passo
              </button>
            </div>
          </CardContent>
        </Card>

        {/* For What Purpose section */}
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

        {/* Execution Steps */}
        {hasDetailedExecution && (
          <Card variant="default" size="md" className="mb-4">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2">📋</span>
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

        {/* Action Buttons */}
        <div className="flex space-x-3 mb-8">
          {!completed ? (
            <button
              onClick={handleComplete}
              className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
              aria-label="Marcar exercício como concluído"
            >
              <CheckIcon className="h-5 w-5" />
              CONCLUIR EXERCÍCIO
            </button>
          ) : (
            <button
              className="flex-1 py-3 bg-green-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 cursor-default"
              disabled
            >
              <CheckIcon className="h-5 w-5" />
              EXERCÍCIO CONCLUÍDO
            </button>
          )}
          
          <button
            className="py-3 px-4 bg-white border border-purple-300 text-purple-700 rounded-xl font-medium hover:bg-purple-50 transition-colors flex items-center"
            aria-label="Ver resultados"
          >
            <ChartBarIcon className="h-5 w-5 mr-2" />
            RESULTADOS
          </button>
        </div>
      </div>

      {/* Confetti Effect */}
      <ConfettiEffect active={showConfetti} />
    </div>
  );
};

// Function to get emoji based on category
function getCategoryEmoji(category: string): string {
  const emojiMap: Record<string, string> = {
    'Respiração': '🫁',
    'Respiração Terapêutica': '🫁',
    'Mobilidade': '🤸',
    'Mobilidade Geral': '🤸',
    'Alongamento': '🧘‍♀️',
    'Fortalecimento': '💪',
    'Meditação': '🧠',
    'Relaxamento': '😌',
    'Alívio Cervical': '💆‍♀️',
    'Liberação Lombar': '🔄'
  };
  
  return emojiMap[category] || '🧘‍♀️';
}

export default ExerciseDetail;
