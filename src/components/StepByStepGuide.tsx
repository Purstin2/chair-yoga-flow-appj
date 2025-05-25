import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ArrowLeftIcon, 
  ChevronRightIcon, 
  PlayIcon, 
  PauseIcon,
  CheckIcon 
} from '@heroicons/react/24/outline';
import { Exercise } from '@/types';

interface StepByStepGuideProps {
  exercise: Exercise;
  onExit: () => void;
  onComplete: () => void;
}

const StepByStepGuide: React.FC<StepByStepGuideProps> = ({ 
  exercise, 
  onExit, 
  onComplete 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const [stepTimeLeft, setStepTimeLeft] = useState(0);
  const [isStepRunning, setIsStepRunning] = useState(true); // Auto-start by default
  const [autoMode, setAutoMode] = useState(true); // Enable auto mode by default
  const stepTimerRef = useRef<number | null>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  // Determine if the exercise has step-by-step execution info
  const hasDetailedExecution = exercise.executionSteps && exercise.executionSteps.length > 0;
  
  // Set initial step time when component mounts or step changes
  useEffect(() => {
    const initialDuration = hasDetailedExecution && exercise.executionSteps 
      ? exercise.executionSteps[currentStep]?.duration 
      : 15;
      
    setStepTimeLeft(initialDuration || 15);
  }, [exercise, hasDetailedExecution, currentStep]);

  // Scroll to the current step when it changes
  useEffect(() => {
    if (stepsRef.current) {
      const activeStep = stepsRef.current.querySelector(`.step-${currentStep}`);
      if (activeStep) {
        activeStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentStep]);

  // Start timer automatically when component mounts
  useEffect(() => {
    // Small delay to make sure UI is rendered before starting
    const timer = setTimeout(() => {
      startStepTimer();
    }, 500);
    
    return () => {
      clearTimeout(timer);
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
      }
    };
  }, []);

  // Start timer for current step
  const startStepTimer = useCallback(() => {
    if (stepTimerRef.current) {
      clearInterval(stepTimerRef.current);
    }

    const stepDuration = hasDetailedExecution && exercise.executionSteps 
      ? exercise.executionSteps[currentStep]?.duration 
      : 15;
    
    setStepTimeLeft(stepDuration || 15);
    setStepProgress(0);
    setIsStepRunning(true);
    
    stepTimerRef.current = window.setInterval(() => {
      setStepTimeLeft(prev => {
        if (prev <= 1) {
          if (stepTimerRef.current) {
            clearInterval(stepTimerRef.current);
          }
          setIsStepRunning(false);
          
          // Move to next step when timer ends
          const totalSteps = hasDetailedExecution && exercise.executionSteps 
            ? exercise.executionSteps.length 
            : exercise.instructions.length;
            
          if (currentStep < totalSteps - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            
            // Start timer for next step after a short delay
            if (autoMode) {
              setTimeout(() => {
                startStepTimer();
              }, 300);
            }
          } else {
            // Exercise complete
            onComplete();
          }
          
          return 0;
        }
        
        // Update progress
        const duration = hasDetailedExecution && exercise.executionSteps 
          ? exercise.executionSteps[currentStep]?.duration 
          : 15;
        
        setStepProgress(((duration - prev + 1) / duration) * 100);
        return prev - 1;
      });
    }, 1000);
  }, [currentStep, hasDetailedExecution, exercise.executionSteps, exercise.instructions?.length, onComplete, autoMode]);

  // Get total steps count
  const totalSteps = hasDetailedExecution && exercise.executionSteps 
    ? exercise.executionSteps.length 
    : exercise.instructions.length;
    
  // Check if this is the last step
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="bg-purple-600 p-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">{exercise.name}</h2>
        <button 
          onClick={onExit}
          className="p-2 rounded-full bg-purple-500"
          aria-label="Fechar modo passo a passo"
        >
          <ArrowLeftIcon className="h-6 w-6 text-white" />
        </button>
      </div>
      
      <div className="flex-1 p-6 flex flex-col items-center justify-center" ref={stepsRef}>
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
          Passo {currentStep + 1} de {totalSteps}
        </h3>
        
        <p className={`text-xl text-center text-gray-700 mb-8 step-${currentStep}`}>
          {hasDetailedExecution && exercise.executionSteps
            ? exercise.executionSteps[currentStep]?.instruction
            : exercise.instructions[currentStep]}
        </p>
        
        <div className="mb-8 w-full max-w-sm">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-gray-600">Progresso</span>
            <span className="font-medium">{stepTimeLeft} segundos</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="h-4 rounded-full bg-purple-600 transition-all duration-1000 ease-in-out"
              style={{ width: `${stepProgress}%` }}
            />
          </div>
        </div>
        
        {/* Status para avançar automaticamente */}
        {autoMode && (
          <p className="text-center text-gray-500 text-sm mb-4">
            Avançando automaticamente em {stepTimeLeft} segundos...
          </p>
        )}
      </div>
        
      <div className="bg-gray-100 p-4 flex justify-around">
        <button
          onClick={() => {
            if (stepTimerRef.current) {
              clearInterval(stepTimerRef.current);
            }
            setCurrentStep(prev => Math.max(0, prev - 1));
            // Auto-restart timer for new step
            setTimeout(() => startStepTimer(), 100);
          }}
          disabled={currentStep === 0 || autoMode}
          className="p-3 rounded-full bg-white shadow disabled:opacity-50"
          aria-label="Passo anterior"
        >
          <ArrowLeftIcon className="h-6 w-6 text-purple-700" />
        </button>
        
        <button
          onClick={() => {
            // Toggle auto mode
            setAutoMode(prev => !prev);
            
            if (!isStepRunning) {
              startStepTimer();
            } else if (stepTimerRef.current) {
              clearInterval(stepTimerRef.current);
              setIsStepRunning(false);
            }
          }}
          className="p-3 rounded-full bg-white shadow"
          aria-label={autoMode ? "Desativar avanço automático" : "Ativar avanço automático"}
        >
          {autoMode ? (
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
            
            if (currentStep < totalSteps - 1) {
              setCurrentStep(prev => prev + 1);
              // Auto-restart timer for new step
              setTimeout(() => startStepTimer(), 100);
            } else if (isLastStep) {
              onComplete();
            }
          }}
          disabled={!isLastStep && autoMode}
          className={`p-3 rounded-full shadow ${isLastStep ? 'bg-green-600' : 'bg-white'}`}
          aria-label={isLastStep ? "Concluir exercício" : "Próximo passo"}
        >
          {isLastStep ? (
            <CheckIcon className="h-6 w-6 text-white" />
          ) : (
            <ChevronRightIcon className="h-6 w-6 text-purple-700" />
          )}
        </button>
      </div>
    </div>
  );
};

export default StepByStepGuide; 