import { useCallback } from 'react';

/**
 * Hook for managing audio cues during exercise execution
 * Provides functions for different sound events during yoga practice
 */
const useAudioCues = () => {
  /**
   * Plays a gentle sound when starting an exercise
   */
  const playStartSound = useCallback(() => {
    try {
      // Som suave de início
      const audio = new Audio('/sounds/gentle-start.mp3');
      audio.volume = 0.3;
      audio.play().catch(error => {
        console.error('Error playing start sound:', error);
      });
    } catch (error) {
      console.error('Error creating audio element:', error);
    }
  }, []);
  
  /**
   * Plays a soft chime sound when transitioning between exercise steps
   */
  const playStepTransition = useCallback(() => {
    try {
      // Som discreto de transição
      const audio = new Audio('/sounds/soft-chime.mp3');
      audio.volume = 0.2;
      audio.play().catch(error => {
        console.error('Error playing transition sound:', error);
      });
    } catch (error) {
      console.error('Error creating audio element:', error);
    }
  }, []);
  
  /**
   * Plays a gentle completion sound when exercise is finished
   */
  const playCompletionSound = useCallback(() => {
    try {
      // Som de conquista suave
      const audio = new Audio('/sounds/gentle-complete.mp3');
      audio.volume = 0.4;
      audio.play().catch(error => {
        console.error('Error playing completion sound:', error);
      });
    } catch (error) {
      console.error('Error creating audio element:', error);
    }
  }, []);

  // Fallback to beep sound if custom sounds are not available
  const playFallbackBeep = useCallback((frequency = 440, duration = 500, volume = 0.3) => {
    try {
      if (typeof AudioContext !== 'undefined') {
        const audioCtx = new AudioContext();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        gainNode.gain.value = volume;
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();
        setTimeout(() => {
          oscillator.stop();
        }, duration);
      }
    } catch (error) {
      console.error('Error playing fallback beep:', error);
    }
  }, []);

  return { 
    playStartSound, 
    playStepTransition, 
    playCompletionSound,
    playFallbackBeep
  };
};

export default useAudioCues; 