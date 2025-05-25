import React, { useState } from 'react';
import { ArrowLeftIcon, MagnifyingGlassIcon, ChevronRightIcon, ClockIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import { Exercise, User } from '@/types';
import { Card, CardContent } from './ui/Card';
import Header from './Header';
import { 
  FiActivity, FiHeart, FiAward, FiRotateCcw, 
  FiRefreshCw, FiSmile, FiSun, FiMoon, FiMove, FiWind,
  FiYoutube
} from 'react-icons/fi';
import { getCategoryIcon, IconType } from '@/data/exerciseCategories';
import videoExercises from '@/data/videoExercises';

interface ExerciseLibraryProps {
  onBack: () => void;
  onSelectExercise: (exercise: Exercise) => void;
  user: User;
  onProfileClick: () => void;
  exercises?: Exercise[];
}

type ExerciseTab = 'standard' | 'videos';

// Função para extrair ID do YouTube e gerar URL da miniatura
const getYouTubeThumbnail = (url: string | undefined): string => {
  if (!url) return '';
  
  // Extrair o ID do vídeo da URL do YouTube
  let videoId = '';
  
  try {
    // Lidar com diferentes formatos de URL
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      videoId = urlParams.get('v') || '';
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('youtube.com/embed/')[1].split('?')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    
    // Se não conseguirmos obter o ID, usar uma imagem genérica
    if (!videoId) {
      return 'https://images.unsplash.com/photo-1522035508726-d50692a8f2ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHlvZ2F8ZW58MHx8MHx8fDA%3D';
    }
    
    // Retornar URL da miniatura em alta qualidade
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } catch (error) {
    console.error('Erro ao extrair thumbnail do YouTube:', error);
    return 'https://images.unsplash.com/photo-1522035508726-d50692a8f2ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHlvZ2F8ZW58MHx8MHx8fDA%3D';
  }
};

const ExerciseLibrary: React.FC<ExerciseLibraryProps> = ({ 
  onBack, 
  onSelectExercise,
  user,
  onProfileClick,
  exercises = []
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<ExerciseTab>('standard');

  // Exercícios a serem exibidos com base na aba selecionada
  const displayExercises = activeTab === 'standard' ? exercises : videoExercises;

  // Get unique categories from exercises
  const categories = Array.from(new Set(displayExercises.map(ex => ex.category)));

  // Filter exercises based on category and search term
  const filteredExercises = displayExercises.filter(exercise => {
    const matchesCategory = !selectedCategory || exercise.category === selectedCategory;
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Function to get category icon based on name
  const getCategoryIconComponent = (iconType: IconType) => {
    switch (iconType) {
      case 'activity':
        return <FiActivity className="h-5 w-5 text-purple-500" />;
      case 'move':
        return <FiMove className="h-5 w-5 text-blue-500" />;
      case 'rotate':
        return <FiRotateCcw className="h-5 w-5 text-blue-500" />;
      case 'refresh':
        return <FiRefreshCw className="h-5 w-5 text-green-500" />;
      case 'award':
        return <FiAward className="h-5 w-5 text-orange-500" />;
      case 'moon':
        return <FiMoon className="h-5 w-5 text-indigo-500" />;
      case 'smile':
        return <FiSmile className="h-5 w-5 text-teal-500" />;
      case 'heart':
        return <FiHeart className="h-5 w-5 text-red-500" />;
      case 'sun':
        return <FiSun className="h-5 w-5 text-yellow-500" />;
      case 'wind':
        return <FiWind className="h-5 w-5 text-green-500" />;
      default:
        return <FiActivity className="h-5 w-5 text-purple-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-20">
      <Header 
        user={user}
        onProfileClick={onProfileClick}
        title="Exercícios de Yoga"
        showBackButton
        onBackClick={onBack}
      />

      <div className="px-4 max-w-md mx-auto">
        {/* Abas de Exercícios */}
        <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => {
              setActiveTab('standard');
              setSelectedCategory(null);
            }}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center ${
              activeTab === 'standard'
                ? 'bg-white text-purple-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <FiActivity className="h-4 w-4 mr-1.5" />
            Exercícios Padrão
          </button>
          <button
            onClick={() => {
              setActiveTab('videos');
              setSelectedCategory(null);
            }}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center ${
              activeTab === 'videos'
                ? 'bg-white text-purple-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <FiYoutube className="h-4 w-4 mr-1.5" />
            Exercícios em Vídeo
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Buscar exercício..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-thin scrollbar-thumb-purple-200 gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
              !selectedCategory
                ? 'bg-purple-100 text-purple-700 border border-purple-300'
                : 'bg-white border border-gray-300 text-gray-700'
            }`}
          >
            Todos
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors flex items-center whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-purple-100 text-purple-700 border border-purple-300'
                  : 'bg-white border border-gray-300 text-gray-700'
              }`}
            >
              <span className="mr-1">
                {getCategoryIconComponent(getCategoryIcon(category))}
              </span>
              {category}
            </button>
          ))}
        </div>

        {/* Exercise List */}
        <div className="space-y-4">
          {filteredExercises.map(exercise => (
            <Card 
              key={exercise.id}
              className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.01] border border-gray-200"
              onClick={() => onSelectExercise(exercise)}
            >
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <div className="h-40 bg-purple-100 w-full relative overflow-hidden">
                    {exercise.photoUrl ? (
                      <img 
                        src={exercise.photoUrl} 
                        alt={exercise.name}
                        className="w-full h-full object-cover"
                      />
                    ) : exercise.isVideoExercise && exercise.videoUrl ? (
                      <img 
                        src={getYouTubeThumbnail(exercise.videoUrl)} 
                        alt={exercise.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
                        <img 
                          src={`https://source.unsplash.com/random/400x300/?yoga,${exercise.category.toLowerCase()},exercise`} 
                          alt={exercise.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {exercise.isVideoExercise && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-md flex items-center">
                        <VideoCameraIcon className="h-4 w-4 mr-1" />
                        <span className="text-xs font-medium">Vídeo</span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-medium">{exercise.category}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          exercise.difficulty === 'Fácil'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {exercise.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{exercise.name}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        <span>{exercise.duration} min</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{exercise.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex">
                        {exercise.targetAreas?.slice(0, 2).map((area, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full mr-1">
                            {area}
                          </span>
                        ))}
                        {exercise.targetAreas && exercise.targetAreas.length > 2 && (
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                            +{exercise.targetAreas.length - 2}
                          </span>
                        )}
                      </div>
                      {exercise.isVideoExercise && exercise.videoAuthor && (
                        <span className="text-xs text-gray-500">
                          por {exercise.videoAuthor}
                        </span>
                      )}
                      {!exercise.isVideoExercise && (
                        <ChevronRightIcon className="h-4 w-4 text-purple-500" />
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredExercises.length === 0 && (
            <div className="text-center py-8">
              <MagnifyingGlassIcon className="h-12 w-12 mx-auto text-gray-400 mb-3" />
              <h3 className="text-gray-900 font-medium mb-1">Nenhum exercício encontrado</h3>
              <p className="text-gray-600 text-sm">Tente mudar os filtros ou a busca</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseLibrary;
