import React, { useState, useEffect, useRef } from 'react';
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';
import useYouTubePlayer from '@/hooks/useYouTubePlayer';

interface VideoEmbedProps {
  videoUrl: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoUrl }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Usar o hook personalizado para controlar o player
  const [playerState, playerAPI] = useYouTubePlayer(iframeRef);
  const { isPlaying, isMuted } = playerState;
  
  // Verificar se é um vídeo do Vimeo ou YouTube e ajustar parâmetros
  const isVimeo = videoUrl.includes('vimeo.com');
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  
  let embedUrl = videoUrl;
  
  if (isYouTube) {
    // Extrair ID do vídeo se for do YouTube
    let videoId = '';
    
    if (videoUrl.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(videoUrl.split('?')[1]);
      videoId = urlParams.get('v') || '';
    } else if (videoUrl.includes('youtu.be/')) {
      videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
    } else if (videoUrl.includes('youtube.com/embed/')) {
      videoId = videoUrl.split('youtube.com/embed/')[1].split('?')[0];
    }
    
    // Construir URL com parâmetros para esconder controles e branding
    embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&origin=${window.location.origin}`;
  } else if (isVimeo) {
    // Ajustar parâmetros para Vimeo
    if (videoUrl.includes('player.vimeo.com')) {
      embedUrl = `${videoUrl}?autoplay=0&title=0&byline=0&portrait=0&controls=0`;
    } else {
      // Converter URL normal do Vimeo para URL de incorporação
      const vimeoId = videoUrl.split('/').pop() || '';
      embedUrl = `https://player.vimeo.com/video/${vimeoId}?autoplay=0&title=0&byline=0&portrait=0&controls=0`;
    }
  }

  const handleError = () => {
    console.error("Erro ao carregar vídeo:", videoUrl);
    setIsError(true);
  };
  
  const handleLoad = () => {
    setIsLoading(false);
    // Esconder o overlay após o carregamento inicial com um pequeno atraso
    setTimeout(() => {
      setShowOverlay(false);
    }, 1500);
  };
  
  // Mostrar controles ao passar o mouse e escondê-los após um tempo
  const handleMouseMove = () => {
    setShowControls(true);
    
    if (controlsTimeout) {
      clearTimeout(controlsTimeout);
    }
    
    const timeout = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
    
    setControlsTimeout(timeout);
  };
  
  // Controles para vídeos
  const handlePlayPause = () => {
    playerAPI.togglePlay();
  };
  
  const handleMuteUnmute = () => {
    playerAPI.toggleMute();
  };
  
  // Limpar timeout quando o componente for desmontado
  useEffect(() => {
    return () => {
      if (controlsTimeout) {
        clearTimeout(controlsTimeout);
      }
    };
  }, [controlsTimeout]);
  
  // Resetar estados quando a URL mudar
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setShowOverlay(true);
  }, [videoUrl]);
  
  if (isError) {
    return (
      <div className="aspect-video w-full rounded-2xl mb-4 bg-gray-100 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="text-red-500 text-2xl mb-2">⚠️</div>
          <h3 className="text-gray-700 font-medium mb-1">Não foi possível carregar o vídeo</h3>
          <p className="text-gray-500 text-sm">
            Verifique sua conexão com a internet ou tente novamente mais tarde.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className="aspect-video w-full rounded-2xl mb-4 overflow-hidden relative"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-30">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-sm text-gray-600">Carregando vídeo...</p>
          </div>
        </div>
      )}
      
      {/* Overlay preto para esconder a inicialização do player */}
      {showOverlay && !isLoading && (
        <div className="absolute inset-0 bg-black z-20 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Interface personalizada de controle */}
      <div 
        className={`absolute inset-0 bg-black/30 z-20 flex items-center justify-center transition-opacity duration-300 ${
          (showControls || !isPlaying) && !isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handlePlayPause}
      >
        <div 
          className="flex gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={handlePlayPause}
            className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-all transform hover:scale-105"
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            {isPlaying ? (
              <PauseIcon className="h-8 w-8 text-purple-600" />
            ) : (
              <PlayIcon className="h-8 w-8 text-purple-600" />
            )}
          </button>
          
          <button 
            onClick={handleMuteUnmute}
            className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-all self-end mb-1 transform hover:scale-105"
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? (
              <SpeakerXMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <SpeakerWaveIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      
      {/* Moldura para cobrir a borda do player e ocultar elementos */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-14 bg-black"></div>
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-black"></div>
        <div className="absolute top-0 bottom-0 left-0 w-2 bg-black"></div>
        <div className="absolute top-0 bottom-0 right-0 w-2 bg-black"></div>
      </div>
      
      <iframe 
        ref={iframeRef}
        width="100%" 
        height="100%" 
        src={embedUrl}
        title="Video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        onError={handleError}
        onLoad={handleLoad}
        aria-label="Vídeo de exercício de yoga"
        className="z-0"
      ></iframe>
    </div>
  );
};

export default VideoEmbed;

// Compatibilidade com código existente
export const YouTubeEmbed = VideoEmbed; 