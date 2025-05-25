import React, { useState, useEffect, useRef } from 'react';
import { 
  PlayIcon, 
  SpeakerWaveIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/solid';
import useAudioCues from '@/hooks/useAudioCues';

interface ExerciseTimerProps {
  initialDuration: number; // in seconds
  onComplete: () => void;
  showConfetti?: boolean;
  autoStart?: boolean;
  currentStep?: number;
  totalSteps?: number;
  progress?: number;
  isAutoMode?: boolean;
  currentInstruction?: string;
}

const ExerciseTimer: React.FC<ExerciseTimerProps> = ({
  initialDuration,
  onComplete,
  showConfetti = false,
  autoStart = false,
  currentStep = 0,
  totalSteps = 1,
  progress = 0,
  isAutoMode = false,
  currentInstruction = ""
}) => {
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);
  
  const timerRef = useRef<number | null>(null);
  const { playStartSound, playStepTransition, playCompletionSound, playFallbackBeep } = useAudioCues();

  // Initialize sound effects
  useEffect(() => {
    if (autoStart && soundEnabled) {
      playStartSound();
    }
  }, [autoStart, soundEnabled, playStartSound]);

  // Save timer state to localStorage
  useEffect(() => {
    const timerKey = `exercise_timer_${Date.now()}`;
    if (timeLeft > 0) {
      try {
        localStorage.setItem(timerKey, JSON.stringify({
          timeLeft,
          timestamp: new Date().getTime()
        }));
      } catch (error) {
        console.error('Error saving timer state:', error);
      }
    }
  }, [timeLeft]);

  // Timer logic
  useEffect(() => {
    if (isRunning) {
      // Clear any existing interval first to prevent duplicates
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
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

    // Cleanup timer on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const handleTimerComplete = () => {
    // Play completion sound
    if (soundEnabled) {
      playCompletionSound();
    }
    
    // Vibrate device if supported
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]);
    }
    
    // Show completion dialog
    setShowCompletionDialog(true);
  };

  const confirmCompletion = () => {
    setShowCompletionDialog(false);
    onComplete();
  };

  const restartExercise = () => {
    setShowCompletionDialog(false);
    setTimeLeft(initialDuration);
    setIsRunning(false);
  };

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // If showing completion dialog
  if (showCompletionDialog) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-center">
          <h3 className="text-lg font-medium text-green-800 mb-2">Terminou o exercício?</h3>
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={confirmCompletion}
              className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium flex items-center"
            >
              <CheckIcon className="h-5 w-5 mr-2" />
              Sim, concluí
            </button>
            <button
              onClick={restartExercise}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium flex items-center"
            >
              <XMarkIcon className="h-5 w-5 mr-2" />
              Não, refazer
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Simplified auto mode version (minimal controls)
  if (isAutoMode) {
    return (
      <div className="flex flex-col items-center">
        {/* Current instruction */}
        {currentInstruction && (
          <p className="text-lg text-center text-gray-800 mb-4">
            {currentInstruction}
          </p>
        )}
        
        {/* Step counter text */}
        <p className="text-sm text-gray-600 mb-4">
          Passo {currentStep + 1}/{totalSteps} - {formatTime(timeLeft)}
        </p>
      </div>
    );
  }

  // Regular version - Removido timer circular e botões de controle, mantendo apenas os novos botões
  return (
    <div className="flex flex-col items-center">
      {/* Removido o texto que mostra o tempo restante */}
      
      {/* Novos botões - garantir que estes sejam os únicos botões */}
      <div className="grid grid-cols-2 gap-3 mt-2 w-full">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('startAudioGuide'))}
          className="py-3 bg-purple-600 text-white rounded-lg font-medium flex items-center justify-center"
          aria-label="Iniciar guia com áudio"
        >
          <SpeakerWaveIcon className="h-5 w-5 mr-2" />
          Guia com Áudio
        </button>
    
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('startStepByStep'))}
          className="py-3 bg-white border border-purple-300 text-purple-700 rounded-lg font-medium flex items-center justify-center"
          aria-label="Ver passo a passo em texto"
        >
          <PlayIcon className="h-5 w-5 mr-2" />
          Passo a Passo
        </button>
      </div>
    </div>
  );
};

export default ExerciseTimer; 