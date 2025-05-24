import React, { useState, useEffect, useRef } from 'react';
import { 
  PlayIcon, 
  PauseIcon, 
  StopIcon, 
  ArrowPathIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon
} from '@heroicons/react/24/solid';

interface ExerciseTimerProps {
  initialDuration: number; // in seconds
  onComplete: () => void;
  showConfetti?: boolean;
  autoStart?: boolean;
}

const ExerciseTimer: React.FC<ExerciseTimerProps> = ({
  initialDuration,
  onComplete,
  showConfetti = false,
  autoStart = false
}) => {
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  const timerRef = useRef<number | null>(null);
  const beepSoundRef = useRef<HTMLAudioElement | null>(null);
  const completeSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize sound effects
  useEffect(() => {
    // Creating audio elements for sounds
    beepSoundRef.current = new Audio('/beep.mp3');
    completeSoundRef.current = new Audio('/complete.mp3');
    
    // Cleanup sounds on unmount
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
    if (soundEnabled && completeSoundRef.current) {
      completeSoundRef.current.play();
    }
    
    // Vibrate device if supported
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]);
    }
    
    // Notify parent component
    onComplete();
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
  };

  const resetTimer = () => {
    pauseTimer();
    setTimeLeft(initialDuration);
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  // Calculate timer progress percentage
  const getTimerProgress = () => {
    return (timeLeft / initialDuration) * 100;
  };

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Calculate stroke-dasharray and stroke-dashoffset for circle animation
  const calculateCircleValues = () => {
    const radius = 45; // Circle radius
    const circumference = 2 * Math.PI * radius;
    const dashoffset = circumference * (1 - getTimerProgress() / 100);
    
    return {
      circumference,
      dashoffset
    };
  };

  const { circumference, dashoffset } = calculateCircleValues();

  return (
    <div className="flex flex-col items-center">
      {/* Circular Timer */}
      <div className="relative w-40 h-40 mb-6">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle 
            cx="50" 
            cy="50" 
            r="45"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="5"
          />
          
          {/* Progress circle */}
          <circle 
            cx="50" 
            cy="50" 
            r="45"
            fill="none"
            stroke="#7432B4"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashoffset}
            transform="rotate(-90 50 50)"
            className="transition-all duration-300"
          />
          
          {/* Time text */}
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#1a202c"
          >
            {formatTime(timeLeft)}
          </text>
        </svg>
      </div>
      
      {/* Control buttons */}
      <div className="flex justify-center space-x-4">
        {!isRunning ? (
          <button
            onClick={startTimer}
            className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors hover:bg-purple-700"
            aria-label="Iniciar"
          >
            <PlayIcon className="h-7 w-7" />
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors hover:bg-gray-700"
            aria-label="Pausar"
          >
            <PauseIcon className="h-7 w-7" />
          </button>
        )}
        
        <button
          onClick={stopTimer}
          className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow transition-colors hover:bg-gray-300"
          aria-label="Parar"
        >
          <StopIcon className="h-7 w-7" />
        </button>
        
        <button
          onClick={resetTimer}
          className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow transition-colors hover:bg-gray-300"
          aria-label="Reiniciar"
        >
          <ArrowPathIcon className="h-7 w-7" />
        </button>
        
        <button
          onClick={toggleSound}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow transition-colors ${
            soundEnabled 
              ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label={soundEnabled ? "Desativar som" : "Ativar som"}
        >
          {soundEnabled ? (
            <SpeakerWaveIcon className="h-7 w-7" />
          ) : (
            <SpeakerXMarkIcon className="h-7 w-7" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ExerciseTimer; 