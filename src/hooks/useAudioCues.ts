import { useCallback, useState, useEffect } from 'react';

/**
 * Hook for managing audio cues during exercise execution
 * Provides functions for different sound events during yoga practice
 */
const useAudioCues = () => {
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [customVoice, setCustomVoice] = useState<boolean>(false);
  
  // Preload audio files for better performance
  useEffect(() => {
    const preloadAudio = async () => {
      try {
        const audioFiles = [
          '/sounds/gentle-start.mp3',
          '/sounds/soft-chime.mp3',
          '/sounds/gentle-complete.mp3',
          // Add custom voice recordings paths here
          '/sounds/voice/start-exercise.mp3',
          '/sounds/voice/next-step.mp3',
          '/sounds/voice/complete.mp3'
        ];
        
        // Check if custom voice files exist
        const hasCustomVoice = await Promise.all(
          audioFiles.slice(3).map(file => 
            fetch(file)
              .then(response => response.ok)
              .catch(() => false)
          )
        ).then(results => results.every(result => result));
        
        setCustomVoice(hasCustomVoice);
        setAudioLoaded(true);
      } catch (error) {
        console.error('Error preloading audio:', error);
        setAudioLoaded(true); // Still mark as loaded to avoid blocking the app
      }
    };
    
    preloadAudio();
  }, []);

  /**
   * Plays a gentle sound when starting an exercise
   */
  const playStartSound = useCallback(() => {
    try {
      // Use custom voice recording if available
      const audioFile = customVoice 
        ? '/sounds/voice/start-exercise.mp3' 
        : '/sounds/gentle-start.mp3';
        
      const audio = new Audio(audioFile);
      audio.volume = 0.4;
      
      // Promise-based play with fallback
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error playing start sound:', error);
          // Fallback to synthetic beep if audio fails
          playFallbackBeep(440, 500, 0.3);
        });
      }
    } catch (error) {
      console.error('Error creating audio element:', error);
      playFallbackBeep(440, 500, 0.3);
    }
  }, [customVoice]);
  
  /**
   * Plays a soft chime sound when transitioning between exercise steps
   */
  const playStepTransition = useCallback(() => {
    try {
      // Use custom voice recording if available
      const audioFile = customVoice 
        ? '/sounds/voice/next-step.mp3' 
        : '/sounds/soft-chime.mp3';
        
      const audio = new Audio(audioFile);
      audio.volume = 0.3;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error playing transition sound:', error);
          playFallbackBeep(660, 300, 0.2);
        });
      }
    } catch (error) {
      console.error('Error creating audio element:', error);
      playFallbackBeep(660, 300, 0.2);
    }
  }, [customVoice]);
  
  /**
   * Plays a gentle completion sound when exercise is finished
   */
  const playCompletionSound = useCallback(() => {
    try {
      // Use custom voice recording if available
      const audioFile = customVoice 
        ? '/sounds/voice/complete.mp3' 
        : '/sounds/gentle-complete.mp3';
        
      const audio = new Audio(audioFile);
      audio.volume = 0.5;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error playing completion sound:', error);
          playFallbackBeep(880, 700, 0.4);
        });
      }
    } catch (error) {
      console.error('Error creating audio element:', error);
      playFallbackBeep(880, 700, 0.4);
    }
  }, [customVoice]);

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
    playFallbackBeep,
    audioLoaded,
    customVoice
  };
};

export default useAudioCues; 