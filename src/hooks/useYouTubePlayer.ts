import { useState, useEffect, useRef, useCallback } from 'react';

interface YouTubePlayerState {
  isReady: boolean;
  isPlaying: boolean;
  isMuted: boolean;
  duration: number;
  currentTime: number;
  volume: number;
}

type YouTubeCommand = 
  | 'playVideo'
  | 'pauseVideo'
  | 'mute'
  | 'unMute'
  | 'setVolume'
  | 'seekTo';

interface YouTubeAPI {
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  mute: () => void;
  unmute: () => void;
  toggleMute: () => void;
  setVolume: (volume: number) => void;
  seekTo: (seconds: number) => void;
}

/**
 * Hook personalizado para controlar o player do YouTube
 * @param iframeRef Referência para o iframe do YouTube
 */
const useYouTubePlayer = (iframeRef: React.RefObject<HTMLIFrameElement>): [YouTubePlayerState, YouTubeAPI] => {
  const [state, setState] = useState<YouTubePlayerState>({
    isReady: false,
    isPlaying: false,
    isMuted: false,
    duration: 0,
    currentTime: 0,
    volume: 100
  });
  
  const messageListener = useRef<(event: MessageEvent) => void>();
  
  // Enviar comando para o iframe do YouTube
  const postCommand = useCallback((command: YouTubeCommand, args: any[] = []) => {
    if (!iframeRef.current || !state.isReady) return;
    
    try {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: command,
          args,
        }), 
        '*'
      );
    } catch (err) {
      console.error(`Erro ao enviar comando "${command}" para o YouTube:`, err);
    }
  }, [iframeRef, state.isReady]);
  
  // Configurar listener de mensagens do YouTube
  useEffect(() => {
    const setupYouTubeListener = () => {
      messageListener.current = (event: MessageEvent) => {
        try {
          if (typeof event.data === 'string') {
            const data = JSON.parse(event.data);
            
            // Processar eventos do YouTube
            if (data.event === 'onReady') {
              setState(prev => ({ ...prev, isReady: true }));
            } else if (data.event === 'onStateChange') {
              // -1 (não iniciado), 0 (finalizado), 1 (reproduzindo), 2 (pausado), 3 (buffer), 5 (vídeo indicado)
              const isPlaying = data.info === 1;
              setState(prev => ({ ...prev, isPlaying }));
            } else if (data.event === 'onPlaybackQualityChange') {
              // Qualidade mudou
            } else if (data.event === 'onDurationChange') {
              setState(prev => ({ ...prev, duration: data.info }));
            } else if (data.event === 'onTimeUpdate') {
              setState(prev => ({ ...prev, currentTime: data.info }));
            } else if (data.event === 'onVolumeChange') {
              setState(prev => ({ 
                ...prev, 
                volume: data.info.volume,
                isMuted: data.info.muted
              }));
            }
          }
        } catch (err) {
          // Ignorar erros de parsing (mensagens não relacionadas)
        }
      };
      
      window.addEventListener('message', messageListener.current);
    };
    
    setupYouTubeListener();
    
    return () => {
      if (messageListener.current) {
        window.removeEventListener('message', messageListener.current);
      }
    };
  }, []);
  
  // Redefinir estado ao desmontar
  useEffect(() => {
    return () => {
      setState({
        isReady: false,
        isPlaying: false,
        isMuted: false,
        duration: 0,
        currentTime: 0,
        volume: 100
      });
    };
  }, []);
  
  // API simplificada para controlar o player
  const api: YouTubeAPI = {
    play: () => {
      postCommand('playVideo');
      setState(prev => ({ ...prev, isPlaying: true }));
    },
    
    pause: () => {
      postCommand('pauseVideo');
      setState(prev => ({ ...prev, isPlaying: false }));
    },
    
    togglePlay: () => {
      if (state.isPlaying) {
        api.pause();
      } else {
        api.play();
      }
    },
    
    mute: () => {
      postCommand('mute');
      setState(prev => ({ ...prev, isMuted: true }));
    },
    
    unmute: () => {
      postCommand('unMute');
      setState(prev => ({ ...prev, isMuted: false }));
    },
    
    toggleMute: () => {
      if (state.isMuted) {
        api.unmute();
      } else {
        api.mute();
      }
    },
    
    setVolume: (volume: number) => {
      postCommand('setVolume', [volume]);
      setState(prev => ({ ...prev, volume }));
    },
    
    seekTo: (seconds: number) => {
      postCommand('seekTo', [seconds, true]);
    }
  };
  
  return [state, api];
};

export default useYouTubePlayer; 