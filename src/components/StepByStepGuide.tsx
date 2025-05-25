import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ArrowLeftIcon, 
  ChevronRightIcon, 
  PlayIcon, 
  PauseIcon 
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
  const [isStepRunning, setIsStepRunning] = useState(false);
  const stepTimerRef = useRef<number | null>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  // Determine if the exercise has step-by-step execution info
  const hasDetailedExecution = exercise.executionSteps && exercise.executionSteps.length > 0;
  
  // Set initial step time when component mounts
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

  // Clean up timer when component unmounts
  useEffect(() => {
    return () => {
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
            setCurrentStep(prev => prev + 1);
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
  }, [currentStep, hasDetailedExecution, exercise.executionSteps, exercise.instructions?.length, onComplete]);

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
            // Pause/Resume timer
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
    </div>
  );
};

export default StepByStepGuide; 