import React, { useState } from 'react';
import { ArrowLeftIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  youtubeUrl: string;
  imageSrc: string;
}

const meditations: Meditation[] = [
  {
    id: 1,
    title: 'Respiração Guiada',
    description: 'Uma meditação simples focada na respiração para acalmar a mente.',
    duration: 300, // 5 minutos em segundos
    category: 'Respiração',
    youtubeUrl: 'https://www.youtube.com/watch?v=he-tQOnDCWw',
    imageSrc: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRhdGlvbiUyMGJyZWF0aGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    title: 'Alívio de Tensão',
    description: 'Foco na liberação de tensão no pescoço, ombros e costas.',
    duration: 600, // 10 minutos em segundos
    category: 'Relaxamento',
    youtubeUrl: 'https://www.youtube.com/watch?v=i8y4156WLe0',
    imageSrc: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaXRhdGlvbiUyMHJlbGF4YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    title: 'Meditação para Dormir',
    description: 'Ajuda a relaxar e preparar o corpo para um sono tranquilo.',
    duration: 900, // 15 minutos em segundos
    category: 'Sono',
    youtubeUrl: 'https://www.youtube.com/watch?v=a1j2Uhzc08s',
    imageSrc: 'https://images.unsplash.com/photo-1543802169-33ca5a7060e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2xlZXAlMjBtZWRpdGF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    title: 'Concentração e Foco',
    description: 'Aumenta a concentração e o foco para atividades diárias.',
    duration: 480, // 8 minutos em segundos
    category: 'Foco',
    youtubeUrl: 'https://www.youtube.com/watch?v=krBvzDlL0mM',
    imageSrc: 'https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9jdXMlMjBtZWRpdGF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    title: 'Redução de Ansiedade',
    description: 'Técnicas para acalmar a mente ansiosa e encontrar paz interior.',
    duration: 720, // 12 minutos em segundos
    category: 'Ansiedade',
    youtubeUrl: 'https://www.youtube.com/watch?v=xO9q0ioUwGc',
    imageSrc: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsbSUyMG1lZGl0YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    title: 'Gratidão',
    description: 'Cultive sentimentos de gratidão para melhorar o bem-estar geral.',
    duration: 420, // 7 minutos em segundos
    category: 'Bem-estar',
    youtubeUrl: 'https://www.youtube.com/watch?v=jTJSJckA-oY',
    imageSrc: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhdGl0dWRlJTIwbWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  }
];

const MeditationLibrary: React.FC<MeditationLibraryProps> = ({ onBack, user, onProfileClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeMeditation, setActiveMeditation] = useState<Meditation | null>(null);

  const allCategories = ['Todos', ...new Set(meditations.map(med => med.category))];
  
  const filteredMeditations = meditations.filter(meditation => 
    selectedCategory === 'Todos' || meditation.category === selectedCategory
  );

  const handleStartMeditation = (meditation: Meditation) => {
    setActiveMeditation(meditation);
  };

  const handleCloseMeditation = () => {
    setActiveMeditation(null);
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
              className="border border-gray-200"
            >
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <div className="h-40 bg-purple-100 w-full relative overflow-hidden rounded-t-lg">
                    <img 
                      src={meditation.imageSrc} 
                      alt={meditation.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-medium">{meditation.category}</span>
                        <span className="px-2 py-0.5 rounded-full text-xs bg-purple-100 text-purple-800">
                          {formatTime(meditation.duration)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{meditation.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{meditation.description}</p>
                    <div className="flex items-center justify-end">
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

      {/* Active Meditation Overlay - YouTube Video */}
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
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
                {activeMeditation.title}
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                {activeMeditation.description}
              </p>
              
              <div className="w-full aspect-video rounded-lg overflow-hidden mb-4">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`${activeMeditation.youtubeUrl.replace('watch?v=', 'embed/')}?autoplay=1`} 
                  title={activeMeditation.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg w-full">
                <h3 className="font-medium text-purple-800 mb-2">Instruções:</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Encontre um local tranquilo e sente-se confortavelmente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Respire profundamente e relaxe seu corpo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Siga as instruções do áudio e mantenha o foco na respiração</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeditationLibrary;