import React, { useState } from 'react';
import { ArrowLeftIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import Header from './Header';
import { formatTime } from '@/lib/utils';

interface MeditationLibraryProps {
  onBack: () => void;
  user: any;
  onProfileClick: () => void;
}

interface Meditation {
  id: number;
  title: string;
  description: string;
  duration: number;
  category: string;
  audioSrc?: string;
  imageSrc?: string;
  color: string;
  icon: string;
}

const meditations: Meditation[] = [
  {
    id: 1,
    title: 'Respiração Guiada',
    description: 'Uma meditação simples focada na respiração para acalmar a mente.',
    duration: 300, // 5 minutos em segundos
    category: 'Respiração',
    color: 'blue-600',
    icon: '🧘‍♀️'
  },
  {
    id: 2,
    title: 'Alívio de Tensão',
    description: 'Foco na liberação de tensão no pescoço, ombros e costas.',
    duration: 600, // 10 minutos em segundos
    category: 'Relaxamento',
    color: 'green-600',
    icon: '💆‍♀️'
  },
  {
    id: 3,
    title: 'Meditação para Dormir',
    description: 'Ajuda a relaxar e preparar o corpo para um sono tranquilo.',
    duration: 900, // 15 minutos em segundos
    category: 'Sono',
    color: 'indigo-600',
    icon: '🌙'
  },
  {
    id: 4,
    title: 'Concentração e Foco',
    description: 'Aumenta a concentração e o foco para atividades diárias.',
    duration: 480, // 8 minutos em segundos
    category: 'Foco',
    color: 'orange-600',
    icon: '🔍'
  },
  {
    id: 5,
    title: 'Redução de Ansiedade',
    description: 'Técnicas para acalmar a mente ansiosa e encontrar paz interior.',
    duration: 720, // 12 minutos em segundos
    category: 'Ansiedade',
    color: 'pink-600',
    icon: '🌈'
  },
  {
    id: 6,
    title: 'Gratidão',
    description: 'Cultive sentimentos de gratidão para melhorar o bem-estar geral.',
    duration: 420, // 7 minutos em segundos
    category: 'Bem-estar',
    color: 'yellow-600',
    icon: '🙏'
  }
];

const MeditationLibrary: React.FC<MeditationLibraryProps> = ({ onBack, user, onProfileClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeMeditation, setActiveMeditation] = useState<Meditation | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'all' | 'favorites'>('all');

  const allCategories = ['Todos', ...new Set(meditations.map(med => med.category))];
  
  const filteredMeditations = meditations.filter(meditation => 
    selectedCategory === 'Todos' || meditation.category === selectedCategory
  );

  const handleStartMeditation = (meditation: Meditation) => {
    setActiveMeditation(meditation);
    setCurrentTime(0);
    setIsPlaying(true);
    
    // Aqui você poderia adicionar lógica para tocar o áudio da meditação
    // como meditation.audioSrc se disponível
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleCloseMeditation = () => {
    setActiveMeditation(null);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header 
        user={user}
        onProfileClick={onProfileClick}
        title="Meditações"
        showBackButton
        onBackClick={onBack}
      />
      
      <div className="px-4 max-w-md mx-auto">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-5">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-3 text-sm font-medium relative ${
              activeTab === 'all'
                ? 'text-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Todas as Meditações
            {activeTab === 'all' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex-1 py-3 text-sm font-medium relative ${
              activeTab === 'favorites'
                ? 'text-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Favoritas
            {activeTab === 'favorites' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
            )}
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-5 no-scrollbar">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Meditation Cards */}
        <div className="space-y-4 mb-6">
          {filteredMeditations.map((meditation) => (
            <Card 
              key={meditation.id}
              variant="default"
              size="md"
              hover="scale"
              onClick={() => handleStartMeditation(meditation)}
            >
              <CardContent className="flex items-start p-4">
                <div className={`h-16 w-16 rounded-xl flex items-center justify-center text-3xl bg-${meditation.color}/10 text-${meditation.color} mr-4 flex-shrink-0`}>
                  {meditation.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{meditation.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{meditation.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      {formatTime(meditation.duration)}
                    </span>
                    <button 
                      className="px-4 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStartMeditation(meditation);
                      }}
                    >
                      Iniciar
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMeditations.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">Nenhuma meditação encontrada.</p>
            <button 
              onClick={() => setSelectedCategory('Todos')}
              className="mt-2 text-purple-600 font-medium"
            >
              Ver todas
            </button>
          </div>
        )}
      </div>

      {/* Active Meditation Overlay */}
      {activeMeditation && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 relative">
            <button 
              onClick={handleCloseMeditation}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col items-center">
              <div className={`h-28 w-28 rounded-full flex items-center justify-center text-5xl bg-${activeMeditation.color}/10 text-${activeMeditation.color} mb-5`}>
                {activeMeditation.icon}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
                {activeMeditation.title}
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                {activeMeditation.description}
              </p>
              
              <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
                <div 
                  className="bg-purple-600 h-2 rounded-full transition-all"
                  style={{ width: `${(currentTime / activeMeditation.duration) * 100}%` }}
                />
              </div>
              
              <div className="flex justify-between w-full text-sm text-gray-600 mb-8">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(activeMeditation.duration)}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-6">
                <button 
                  className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  onClick={() => setCurrentTime(Math.max(0, currentTime - 30))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  className="w-20 h-20 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white shadow-lg transition-colors"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? (
                    <PauseIcon className="h-10 w-10" />
                  ) : (
                    <PlayIcon className="h-10 w-10 ml-1" />
                  )}
                </button>
                
                <button 
                  className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  onClick={() => setCurrentTime(Math.min(activeMeditation.duration, currentTime + 30))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeditationLibrary;
