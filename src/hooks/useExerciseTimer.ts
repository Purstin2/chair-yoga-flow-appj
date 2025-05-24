import { useState, useEffect, useCallback, useRef } from 'react';
import { Exercise } from '@/types';
import useAudioCues from './useAudioCues';

interface UseExerciseTimerProps {
  exercise: Exercise;
  onComplete: () => void;
}

/**
 * Hook to manage automatic exercise timing and step progression
 */
const useExerciseTimer = ({ exercise, onComplete }: UseExerciseTimerProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const initialStepDuration = useRef(0);
  const { playStartSound, playStepTransition, playCompletionSound } = useAudioCues();
  
  // Get duration for current step based on exercise data
  const getStepDuration = useCallback((stepIndex: number): number => {
    // If exercise has detailed execution steps with durations
    if (exercise.executionSteps && exercise.executionSteps.length > 0) {
      return exercise.executionSteps[stepIndex]?.duration || 45;
    }
    
    // Fallback: Try to parse duration from instructions text
    const instruction = exercise.instructions[stepIndex];
    if (instruction) {
      if (instruction.includes('30s')) return 30;
      if (instruction.includes('1min')) return 60;
      if (instruction.includes('2min')) return 120;
      if (instruction.includes('15 segundos')) return 15;
      if (instruction.includes('10 segundos')) return 10;
      if (instruction.includes('5 segundos')) return 5;
    }
    
    // Default duration if no specific time found
    return 45;
  }, [exercise]);
  
  // Calculate total exercise duration in seconds
  const calculateTotalDuration = useCallback((): number => {
    if (exercise.executionSteps && exercise.executionSteps.length > 0) {
      return exercise.executionSteps.reduce((total, step) => total + step.duration, 0);
    }
    
    // If no execution steps, use duration from exercise data (in minutes)
    return parseInt(exercise.duration || '3') * 60;
  }, [exercise]);
  
  // Start the exercise timer
  const startExercise = useCallback(() => {
    setIsActive(true);
    setTimeRemaining(getStepDuration(0));
    initialStepDuration.current = getStepDuration(0);
    playStartSound();
  }, [getStepDuration, playStartSound]);
  
  // Pause the exercise timer
  const pauseExercise = useCallback(() => {
    setIsActive(false);
  }, []);
  
  // Resume the exercise timer
  const resumeExercise = useCallback(() => {
    setIsActive(true);
  }, []);
  
  // Skip to next step
  const nextStep = useCallback(() => {
    if (currentStep < (exercise.executionSteps?.length || exercise.instructions.length) - 1) {
      setCurrentStep(currentStep + 1);
      const newDuration = getStepDuration(currentStep + 1);
      setTimeRemaining(newDuration);
      initialStepDuration.current = newDuration;
      playStepTransition();
    } else {
      // Last step completed
      setIsCompleted(true);
      setIsActive(false);
      playCompletionSound();
      onComplete();
    }
  }, [currentStep, exercise, getStepDuration, onComplete, playCompletionSound, playStepTransition]);
  
  // Go back to previous step
  const previousStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      const newDuration = getStepDuration(currentStep - 1);
      setTimeRemaining(newDuration);
      initialStepDuration.current = newDuration;
    }
  }, [currentStep, getStepDuration]);
  
  // Timer effect
  useEffect(() => {
    let timerId: number | null = null;
    
    if (isActive && timeRemaining > 0) {
      timerId = window.setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
        
        // Update progress percentage
        if (initialStepDuration.current > 0) {
          const percent = 100 - ((timeRemaining - 1) / initialStepDuration.current) * 100;
          setProgress(Math.min(percent, 100));
        }
      }, 1000);
    } else if (isActive && timeRemaining === 0) {
      // Auto-advance to next step
      nextStep();
    }
    
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [isActive, timeRemaining, nextStep, initialStepDuration]);
  
  return {
    currentStep,
    timeRemaining,
    isActive,
    progress,
    isCompleted,
    totalSteps: exercise.executionSteps?.length || exercise.instructions.length,
    totalDuration: calculateTotalDuration(),
    startExercise,
    pauseExercise,
    resumeExercise,
    nextStep,
    previousStep,
  };
};

export default useExerciseTimer; 