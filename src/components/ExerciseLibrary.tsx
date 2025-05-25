import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeftIcon, MagnifyingGlassIcon, ChevronRightIcon, ClockIcon, VideoCameraIcon, StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { Exercise, User } from '@/types';
import { Card, CardContent } from './ui/Card';
import Header from './Header';
import { 
  FiActivity, FiHeart, FiAward, FiRotateCcw, 
  FiRefreshCw, FiSmile, FiSun, FiMoon, FiMove, FiWind,
  FiYoutube, FiTarget, FiList, FiAlertTriangle, FiBarChart2, FiCheckCircle
} from 'react-icons/fi';
import { getCategoryIcon, IconType, getCategoryColor } from '@/data/exerciseCategories';
import { getAllNonVideoExercises, getVideoExercises } from '@/data/allExercises';
import { extractYouTubeId, getYouTubeThumbnail } from '@/lib/utils';
import { isExerciseCompleted, isFavorite, addToFavorites, removeFromFavorites, getFavorites } from '@/lib/userApi';
import useSounds from '@/hooks/useSounds';

interface ExerciseLibraryProps {
  onBack: () => void;
  onSelectExercise: (exercise: Exercise) => void;
  user: User;
  onProfileClick: () => void;
  exercises?: Exercise[];
}

type ExerciseTab = 'standard' | 'videos' | 'favorites';

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
  const [favoriteExercises, setFavoriteExercises] = useState<string[]>([]);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const { playTap, playSuccess } = useSounds();
  const [isLoading, setIsLoading] = useState(true);

  // Carregar exercícios favoritos e concluídos
  const refreshExerciseStatuses = useCallback(() => {
    setIsLoading(true);
    
    try {
      // Obter exercícios favoritos diretamente da API 
      const favorites = getFavorites();
      setFavoriteExercises(favorites);
      
      // Verificar exercícios concluídos
      const allExercises = [...exercises];
      const completed = allExercises
        .filter(ex => isExerciseCompleted(ex.id))
        .map(ex => ex.id.toString());
      
      setCompletedExercises(completed);
    } catch (error) {
      console.error('Erro ao carregar status dos exercícios:', error);
    } finally {
      setIsLoading(false);
    }
  }, [exercises]);
  
  useEffect(() => {
    refreshExerciseStatuses();
  }, [refreshExerciseStatuses]);

  // Determinar os exercícios a serem exibidos com base na aba selecionada
  const getDisplayExercises = useCallback(() => {
    switch (activeTab) {
      case 'standard':
        // Se nenhum exercício específico foi passado, mostramos todos os exercícios não-vídeo
        return exercises.length > 0 ? 
          exercises.filter(ex => !ex.isVideoExercise) : 
          getAllNonVideoExercises();
      case 'videos':
        // Se nenhum exercício específico foi passado, buscamos os vídeos da fonte centralizada
        return exercises.length > 0 ? 
          exercises.filter(ex => ex.isVideoExercise) : 
          getVideoExercises();
      case 'favorites':
        // Para favoritos, verificamos em todos os exercícios disponíveis
        const allAvailableExercises = exercises.length > 0 ? 
          exercises : 
          [...getAllNonVideoExercises(), ...getVideoExercises()];
        return allAvailableExercises.filter(ex => favoriteExercises.includes(ex.id.toString()));
      default:
        return exercises.length > 0 ? 
          exercises.filter(ex => !ex.isVideoExercise) : 
          getAllNonVideoExercises();
    }
  }, [activeTab, exercises, favoriteExercises]);

  const displayExercises = getDisplayExercises();

  // Obter categorias únicas dos exercícios exibidos
  const categories = Array.from(new Set(displayExercises.map(ex => ex.category)));

  // Filtrar exercícios com base na categoria e termo de busca
  const filteredExercises = displayExercises.filter(exercise => {
    const matchesCategory = !selectedCategory || exercise.category === selectedCategory;
    const matchesSearch = !searchTerm || 
                          exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          exercise.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (exercise.description && exercise.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Função para obter ícone da categoria com base no tipo
  const getCategoryIconComponent = (iconType: IconType) => {
    switch (iconType) {
      case 'activity':
        return <FiActivity className="h-5 w-5" />;
      case 'move':
        return <FiMove className="h-5 w-5" />;
      case 'rotate':
        return <FiRotateCcw className="h-5 w-5" />;
      case 'refresh':
        return <FiRefreshCw className="h-5 w-5" />;
      case 'award':
        return <FiAward className="h-5 w-5" />;
      case 'moon':
        return <FiMoon className="h-5 w-5" />;
      case 'smile':
        return <FiSmile className="h-5 w-5" />;
      case 'heart':
        return <FiHeart className="h-5 w-5" />;
      case 'sun':
        return <FiSun className="h-5 w-5" />;
      case 'wind':
        return <FiWind className="h-5 w-5" />;
      case 'target':
        return <FiTarget className="h-5 w-5" />;
      case 'list':
        return <FiList className="h-5 w-5" />;
      case 'alert':
        return <FiAlertTriangle className="h-5 w-5" />;
      case 'chart':
        return <FiBarChart2 className="h-5 w-5" />;
      case 'check':
        return <FiCheckCircle className="h-5 w-5" />;
      default:
        return <FiActivity className="h-5 w-5" />;
    }
  };

  // Função para alternar um exercício nos favoritos
  const toggleFavorite = (exerciseId: string | number, event: React.MouseEvent) => {
    event.stopPropagation();
    
    const exerciseIdStr = exerciseId.toString();
    
    if (favoriteExercises.includes(exerciseIdStr)) {
      removeFromFavorites(exerciseId);
      setFavoriteExercises(prev => prev.filter(id => id !== exerciseIdStr));
      playTap();
    } else {
      addToFavorites(exerciseId);
      setFavoriteExercises(prev => [...prev, exerciseIdStr]);
      playSuccess({ volume: 0.3 });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-20">
      <Header 
        title="Biblioteca de Exercícios"
        leftIcon={<ArrowLeftIcon className="h-6 w-6 text-white" />}
        onLeftIconClick={onBack}
        rightIcon={user?.photo ? (
          <img src={user.photo} alt={user.name} className="h-8 w-8 rounded-full object-cover" />
        ) : (
          <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
            {user?.name?.charAt(0) || 'U'}
          </div>
        )}
        onRightIconClick={onProfileClick}
      />

      <div className="px-4 max-w-md mx-auto">
        {/* Abas de Exercícios */}
        <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => {
              setActiveTab('standard');
              setSelectedCategory(null);
              playTap();
            }}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center ${
              activeTab === 'standard'
                ? 'bg-white text-purple-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <FiActivity className="h-4 w-4 mr-1.5" />
            Exercícios
          </button>
          <button
            onClick={() => {
              setActiveTab('videos');
              setSelectedCategory(null);
              playTap();
            }}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center ${
              activeTab === 'videos'
                ? 'bg-white text-purple-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <FiYoutube className="h-4 w-4 mr-1.5" />
            Vídeos
          </button>
          <button
            onClick={() => {
              setActiveTab('favorites');
              setSelectedCategory(null);
              playTap();
            }}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center ${
              activeTab === 'favorites'
                ? 'bg-white text-purple-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <StarIconOutline className="h-4 w-4 mr-1.5" />
            Favoritos
          </button>
        </div>

        {/* Barra de Pesquisa */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Buscar exercício..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                playTap();
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Limpar pesquisa"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Filtros de Categorias */}
        {categories.length > 0 && (
          <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-thin scrollbar-thumb-purple-200 gap-2">
            <button
              onClick={() => {
                setSelectedCategory(null);
                playTap();
              }}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
                !selectedCategory
                  ? 'bg-purple-100 text-purple-700 border border-purple-300'
                  : 'bg-white border border-gray-300 text-gray-700'
              }`}
            >
              Todos
            </button>
            
            {categories.map(category => {
              const categoryColor = getCategoryColor(category);
              const colorStyle = { 
                color: categoryColor,
                backgroundColor: !selectedCategory || selectedCategory !== category 
                  ? 'white' 
                  : `${categoryColor}20`,
                borderColor: !selectedCategory || selectedCategory !== category 
                  ? '#e5e7eb' 
                  : categoryColor
              };
              
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    playTap();
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors flex items-center whitespace-nowrap ${
                    selectedCategory === category
                      ? 'font-medium' 
                      : 'text-gray-700'
                  }`}
                  style={colorStyle}
                >
                  <span className="mr-1.5" style={{ color: categoryColor }}>
                    {getCategoryIconComponent(getCategoryIcon(category))}
                  </span>
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* Resumo dos exercícios */}
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <span>
            {filteredExercises.length} {filteredExercises.length === 1 ? 'exercício' : 'exercícios'} 
            {selectedCategory ? ` em ${selectedCategory}` : ''}
            {searchTerm ? ` para "${searchTerm}"` : ''}
          </span>
          
          {activeTab === 'favorites' && favoriteExercises.length > 0 && (
            <span className="flex items-center">
              <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
              {favoriteExercises.length} {favoriteExercises.length === 1 ? 'favorito' : 'favoritos'}
            </span>
          )}
        </div>

        {/* Estado de carregamento */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-sm text-gray-600">Carregando exercícios...</p>
            </div>
          </div>
        ) : (
          /* Lista de Exercícios */
          <div className="space-y-4">
            {filteredExercises.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center">
                  <MagnifyingGlassIcon className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-1">Nenhum exercício encontrado</h3>
                <p className="text-gray-500">
                  Tente ajustar seus filtros ou buscar outro termo.
                </p>
                {activeTab === 'favorites' && favoriteExercises.length === 0 && (
                  <button 
                    onClick={() => {
                      setActiveTab('standard');
                      playTap();
                    }}
                    className="mt-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium text-sm hover:bg-purple-200 transition-colors"
                  >
                    Ver todos os exercícios
                  </button>
                )}
              </div>
            ) : (
              filteredExercises.map(exercise => (
                <Card 
                  key={exercise.id}
                  className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.01] border border-gray-200"
                  onClick={() => {
                    playTap();
                    onSelectExercise(exercise);
                  }}
                >
                  <div className="relative">
                    {exercise.isVideoExercise ? (
                      <div className="aspect-video w-full bg-gray-100">
                        <img 
                          src={getYouTubeThumbnail(exercise.videoUrl || '')}
                          alt={exercise.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 pointer-events-none" />
                        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md flex items-center">
                          <VideoCameraIcon className="h-3 w-3 mr-1" />
                          Vídeo
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video w-full bg-gray-100">
                        {exercise.photoUrl ? (
                          <img 
                            src={exercise.photoUrl}
                            alt={exercise.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <img 
                            src={`https://source.unsplash.com/random/800x600/?yoga,${exercise.category.toLowerCase()},exercise`}
                            alt={exercise.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
                      </div>
                    )}
                    
                    {/* Botão de Favorito */}
                    <button
                      onClick={(e) => toggleFavorite(exercise.id, e)}
                      className="absolute top-2 left-2 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                      aria-label={favoriteExercises.includes(exercise.id.toString()) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                    >
                      {favoriteExercises.includes(exercise.id.toString()) ? (
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <StarIconOutline className="h-5 w-5 text-gray-600" />
                      )}
                    </button>
                    
                    {/* Indicador de exercício concluído */}
                    {completedExercises.includes(exercise.id.toString()) && (
                      <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md flex items-center">
                        <FiCheckCircle className="h-3 w-3 mr-1" />
                        Concluído
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{exercise.name}</h3>
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <span className="flex items-center">
                            <ClockIcon className="h-3 w-3 mr-1" />
                            {exercise.duration} min
                          </span>
                          <span className="flex items-center">
                            <FiActivity className="h-3 w-3 mr-1" />
                            {exercise.difficulty}
                          </span>
                          <span className="flex items-center" style={{ color: getCategoryColor(exercise.category) }}>
                            {getCategoryIconComponent(getCategoryIcon(exercise.category))}
                            <span className="ml-1 text-gray-500">{exercise.category}</span>
                          </span>
                        </div>
                      </div>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseLibrary;
