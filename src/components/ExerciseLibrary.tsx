import React, { useState } from 'react';
import { ArrowLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Exercise, User } from '@/types';
import { exercises } from '@/data/exercises';
import { Card, CardContent } from './ui/Card';
import Header from './Header';

interface ExerciseLibraryProps {
  onBack: () => void;
  onSelectExercise: (exercise: Exercise) => void;
  user: User;
  onProfileClick: () => void;
}

const ExerciseLibrary: React.FC<ExerciseLibraryProps> = ({ 
  onBack, 
  onSelectExercise,
  user,
  onProfileClick
}) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Todas as categorias disponíveis
  const allCategories = ['Todos', ...new Set(exercises.map(ex => ex.category))];

  const filteredExercises = exercises.filter(exercise => {
    const matchesCategory = selectedCategory === 'Todos' || exercise.category === selectedCategory;
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.targetAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
        {/* Search Bar */}
        <div className="relative mb-4">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar por exercício ou área do corpo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 text-gray-700"
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/80 border border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Exercise List - Agora como cards retangulares */}
        <div className="space-y-4">
          {filteredExercises.map((exercise) => (
            <Card
              key={exercise.id}
              onClick={() => onSelectExercise(exercise)}
              variant="default"
              size="md"
              hover="scale"
              className="overflow-hidden"
            >
              <CardContent className="flex items-start p-4">
                <div className="h-16 w-16 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                  {exercise.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{exercise.name}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {exercise.targetAreas.join(', ')}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      {exercise.duration} min
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                      {exercise.difficulty}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center p-8">
            <p className="text-gray-500">Nenhum exercício encontrado.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todos');
              }}
              className="mt-2 text-purple-600 font-medium"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseLibrary;
