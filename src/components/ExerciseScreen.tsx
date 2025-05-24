import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon, CheckIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';
import { Exercise } from '@/types';
import useExerciseTimer from '@/hooks/useExerciseTimer';
import useAudioCues from '@/hooks/useAudioCues';
import ConfettiEffect from './ConfettiEffect';
import { getCategoryIcon, getCategoryColor } from '@/data/exerciseCategories';

interface ExerciseScreenProps {
  exercise: Exercise;
  onComplete: () => void;
  onBack: () => void;
}

const ExerciseScreen: React.FC<ExerciseScreenProps> = ({
  exercise,
  onComplete,
  onBack
}) => {
  const [isActive, setIsActive] = useState(false);
  const [exerciseCompleted, setExerciseCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  const { playStartSound, playCompletionSound } = useAudioCues();
  
  // Get category color
  const categoryColor = getCategoryColor(exercise.category);
  const categoryIcon = getCategoryIcon(exercise.category);

  // Use our custom exercise timer hook
  const { 
    currentStep, 
    timeRemaining, 
    isActive: timerActive, 
    progress, 
    isCompleted,
    totalSteps,
    startExercise,
    pauseExercise
  } = useExerciseTimer({
    exercise,
    onComplete: () => {
      setExerciseCompleted(true);
      setShowConfetti(true);
      playCompletionSound();
      
      // Keep confetti visible for 3 seconds then notify parent
      setTimeout(() => {
        setShowConfetti(false);
        onComplete();
      }, 3000);
    }
  });

  // Text-to-speech for current instruction
  const speakInstruction = () => {
    if ('speechSynthesis' in window && soundEnabled) {
      // Get the current instruction
      const instruction = exercise.executionSteps 
        ? exercise.executionSteps[currentStep]?.instruction 
        : exercise.instructions[currentStep];
        
      if (instruction) {
        const utterance = new SpeechSynthesisUtterance(instruction);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.9; // Slightly slower for better comprehension
        speechSynthesis.speak(utterance);
      }
    }
  };

  // When step changes, speak the instruction
  useEffect(() => {
    if (isActive && soundEnabled) {
      speakInstruction();
    }
  }, [currentStep, isActive]);

  // Start exercise function - includes animation and delay
  const handleStartExercise = () => {
    setIsActive(true);
    playStartSound();
    
    // Give user time to get ready
    setTimeout(() => {
      startExercise();
      speakInstruction();
    }, 1000);
  };

  // Handle exercise completion
  const handleCompleteExercise = () => {
    onComplete();
  };

  // Toggle sound on/off
  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  // Restart the exercise
  const restartExercise = () => {
    setExerciseCompleted(false);
    setIsActive(false);
    // Timer will be reset when startExercise is called again
  };

  // Get current instruction text
  const getCurrentInstruction = () => {
    if (exercise.executionSteps && exercise.executionSteps.length > 0) {
      return exercise.executionSteps[currentStep]?.instruction || '';
    }
    return exercise.instructions[currentStep] || '';
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col">
      {/* Header */}
      <div 
        className="p-4 flex items-center justify-between" 
        style={{ backgroundColor: `${categoryColor}10` }} // 10% opacity of category color
      >
        {!isActive ? (
          <button
            onClick={onBack}
            className="p-2 rounded-full bg-white"
            aria-label="Voltar"
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
        ) : (
          <div className="w-9"></div> // Spacer when in active mode
        )}
        
        <h2 className="text-xl font-bold" style={{ color: categoryColor }}>
          {categoryIcon} {exercise.name}
        </h2>
        
        <button
          onClick={toggleSound}
          className="p-2 rounded-full bg-white"
          aria-label={soundEnabled ? "Desativar som" : "Ativar som"}
        >
          {soundEnabled ? (
            <SpeakerWaveIcon className="h-5 w-5" style={{ color: categoryColor }} />
          ) : (
            <SpeakerXMarkIcon className="h-5 w-5 text-gray-400" />
          )}
        </button>
      </div>
      
      {/* Exercise content */}
      <div className="flex-1 flex flex-col items-center justify-between p-6">
        {/* Timer circle in the middle */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {isActive && !exerciseCompleted && (
            <div className="timer-circle">
              <div className="relative w-48 h-48">
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
                    stroke={categoryColor}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 45}
                    strokeDashoffset={(2 * Math.PI * 45) * (1 - progress / 100)}
                    transform="rotate(-90 50 50)"
                    className="transition-all duration-300"
                  />
                  
                  {/* Time text */}
                  <text
                    x="50"
                    y="45"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="18"
                    fontWeight="bold"
                    fill="#1a202c"
                  >
                    {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                  </text>
                  
                  {/* Step counter */}
                  <text
                    x="50"
                    y="65"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="14"
                    fill="#4B5563"
                  >
                    Passo {currentStep + 1} de {totalSteps}
                  </text>
                </svg>
              </div>
            </div>
          )}
          
          {/* Current instruction */}
          <div className="current-instruction mt-8">
            <h2 className="step-counter text-center text-base text-gray-600 mb-3">
              {isActive && !exerciseCompleted ? `Passo ${currentStep + 1} de ${totalSteps}` : ''}
            </h2>
            <p className="large-text text-center text-xl font-medium mb-8" style={{ color: '#2D1441' }}>
              {isActive && !exerciseCompleted ? getCurrentInstruction() : ''}
            </p>
          </div>
        </div>
        
        {/* Exercise icon/image */}
        {!isActive && !exerciseCompleted && (
          <div className="text-8xl mb-8 text-center" aria-label={`Ícone de ${exercise.name}`}>
            {exercise.icon}
          </div>
        )}
        
        {/* Progress bar - only visible during exercise */}
        {isActive && !exerciseCompleted && (
          <div className="progress-bar w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-6">
            <div 
              className="h-full transition-all duration-300 ease-linear"
              style={{ 
                width: `${progress}%`, 
                backgroundColor: categoryColor 
              }}
            />
          </div>
        )}
        
        {/* Controls */}
        <div className="w-full">
          {/* Pre-exercise controls */}
          {!isActive && !exerciseCompleted && (
            <div className="pre-exercise-controls flex flex-col">
              <button 
                className="start-btn-large py-4 text-lg font-medium rounded-xl text-white mb-3"
                style={{ backgroundColor: categoryColor }}
                onClick={handleStartExercise}
              >
                INICIAR EXERCÍCIO
              </button>
              <button 
                className="back-btn py-3 border border-gray-300 rounded-xl text-gray-700"
                onClick={onBack}
              >
                Voltar
              </button>
            </div>
          )}
          
          {/* Post-exercise controls */}
          {exerciseCompleted && (
            <div className="post-exercise flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-2" style={{ color: categoryColor }}>
                Exercício Concluído! 🎉
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                Parabéns! Você completou este exercício.
              </p>
              <button 
                className="complete-btn-large py-4 text-lg font-medium rounded-xl text-white w-full mb-3 flex items-center justify-center"
                style={{ backgroundColor: categoryColor }}
                onClick={handleCompleteExercise}
              >
                <CheckIcon className="h-5 w-5 mr-2" />
                CONCLUÍDO
              </button>
              <button 
                className="repeat-btn py-3 border border-gray-300 rounded-xl text-gray-700 w-full"
                onClick={restartExercise}
              >
                Repetir Exercício
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Confetti effect */}
      <ConfettiEffect active={showConfetti} />
    </div>
  );
};

export default ExerciseScreen; 