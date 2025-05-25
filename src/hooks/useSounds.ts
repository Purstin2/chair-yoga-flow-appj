import { useState, useCallback, useEffect, useRef } from 'react';

interface SoundOptions {
  volume?: number;
  onEnd?: () => void;
  enableFeedback?: boolean;
}

type SoundType = 'success' | 'notification' | 'timer' | 'complete' | 'tap';

const soundPaths: Record<SoundType, string> = {
  success: '/sounds/success.mp3',
  notification: '/sounds/notification.mp3',
  timer: '/sounds/timer.mp3',
  complete: '/sounds/complete.mp3',
  tap: '/sounds/tap.mp3'
};

const useSounds = (initialEnabled: boolean = true) => {
  const [enabled, setEnabled] = useState<boolean>(() => {
    // Verificar se há preferência salva no localStorage
    try {
      const savedPreference = localStorage.getItem('yoga_app_sound_preference');
      return savedPreference !== null ? savedPreference === 'true' : initialEnabled;
    } catch (e) {
      return initialEnabled;
    }
  });
  
  const [audioCache, setAudioCache] = useState<Record<SoundType, HTMLAudioElement | null>>({
    success: null,
    notification: null,
    timer: null,
    complete: null,
    tap: null
  });
  
  const [loadedSounds, setLoadedSounds] = useState<Record<SoundType, boolean>>({
    success: false,
    notification: false,
    timer: false,
    complete: false,
    tap: false
  });
  
  const pendingPlays = useRef<{type: SoundType, options?: SoundOptions}[]>([]);

  // Carregamento de sons sob demanda para economizar recursos
  const loadSound = useCallback(async (type: SoundType): Promise<HTMLAudioElement | null> => {
    if (audioCache[type]) {
      return audioCache[type];
    }
    
    try {
      const audio = new Audio(soundPaths[type]);
      
      return new Promise((resolve) => {
        audio.addEventListener('canplaythrough', () => {
          setAudioCache(prev => ({ ...prev, [type]: audio }));
          setLoadedSounds(prev => ({ ...prev, [type]: true }));
          resolve(audio);
        }, { once: true });
        
        audio.addEventListener('error', () => {
          console.error(`Erro ao carregar som ${type}`);
          resolve(null);
        }, { once: true });
        
        audio.load();
      });
    } catch (err) {
      console.error(`Erro ao inicializar som ${type}:`, err);
      return null;
    }
  }, [audioCache]);

  const play = useCallback(
    async (type: SoundType, options: SoundOptions = {}) => {
      if (!enabled) return null;
      
      try {
        // Se o som ainda não foi carregado, armazená-lo para reprodução posterior
        if (!audioCache[type] && !loadedSounds[type]) {
          pendingPlays.current.push({type, options});
          await loadSound(type);
          return null;
        }
        
        // Usar som em cache se disponível, ou criar novo
        const audio = audioCache[type] 
          ? audioCache[type]!.cloneNode() as HTMLAudioElement
          : new Audio(soundPaths[type]);

        // Configurar volume
        if (options.volume !== undefined) {
          audio.volume = options.volume;
        } else {
          audio.volume = 0.7; // Volume padrão mais baixo
        }

        // Configurar callback de finalização
        if (options.onEnd) {
          audio.addEventListener('ended', options.onEnd, { once: true });
        }

        // Tocar o som
        await audio.play().catch(err => {
          console.error(`Erro ao tocar som ${type}:`, err);
          
          // Feedback visual alternativo se o som falhar e a opção estiver habilitada
          if (options.enableFeedback) {
            // Usando vibração como feedback alternativo quando disponível
            if ('vibrate' in navigator) {
              navigator.vibrate(200);
            }
          }
        });

        return audio;
      } catch (err) {
        console.error(`Erro ao iniciar som ${type}:`, err);
        return null;
      }
    },
    [enabled, audioCache, loadedSounds, loadSound]
  );

  // Reproduzir sons pendentes após o carregamento
  useEffect(() => {
    const playPendingSounds = async () => {
      if (pendingPlays.current.length > 0) {
        const pendingSound = pendingPlays.current.shift();
        if (pendingSound) {
          await play(pendingSound.type, pendingSound.options);
          playPendingSounds();
        }
      }
    };
    
    playPendingSounds();
  }, [loadedSounds, play]);

  const toggle = useCallback(() => {
    setEnabled(prev => {
      const newValue = !prev;
      try {
        localStorage.setItem('yoga_app_sound_preference', String(newValue));
      } catch (e) {
        console.error('Erro ao salvar preferência de som:', e);
      }
      return newValue;
    });
  }, []);

  return {
    enabled,
    setEnabled,
    play,
    toggle,
    playSuccess: (options?: SoundOptions) => play('success', options),
    playNotification: (options?: SoundOptions) => play('notification', options),
    playTimer: (options?: SoundOptions) => play('timer', options),
    playComplete: (options?: SoundOptions) => play('complete', options),
    playTap: (options?: SoundOptions) => play('tap', { volume: 0.4, ...options })
  };
};

export default useSounds; 