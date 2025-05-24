import React, { useState } from 'react';
import { ArrowLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Exercise, User } from '@/types';
import { Card, CardContent } from './ui/Card';
import Header from './Header';

interface ExerciseLibraryProps {
  onBack: () => void;
  onSelectExercise: (exercise: Exercise) => void;
  user: User;
  onProfileClick: () => void;
  exercises?: Exercise[];
}

const ExerciseLibrary: React.FC<ExerciseLibraryProps> = ({ 
  onBack, 
  onSelectExercise,
  user,
  onProfileClick,
  exercises = []
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories from exercises
  const categories = Array.from(new Set(exercises.map(ex => ex.category)));

  // Filter exercises based on category and search term
  const filteredExercises = exercises.filter(exercise => {
    const matchesCategory = !selectedCategory || exercise.category === selectedCategory;
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
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
          <input
            type="text"
            placeholder="Buscar exercício..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
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
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-purple-100 text-purple-700 border border-purple-300'
                  : 'bg-white border border-gray-300 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Exercise List */}
        <div className="space-y-4">
          {filteredExercises.map(exercise => (
            <Card 
              key={exercise.id}
              className="overflow-hidden cursor-pointer transition-shadow hover:shadow-md"
              onClick={() => onSelectExercise(exercise)}
            >
              <CardContent className="p-0">
                <div className="flex">
                  <div className="w-24 h-24 bg-purple-100 flex items-center justify-center text-4xl flex-shrink-0">
                    {exercise.icon}
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{exercise.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{exercise.description.substring(0, 70)}...</p>
                    <div className="flex items-center text-xs">
                      <span className={`px-2 py-0.5 rounded-full mr-2 ${
                        exercise.difficulty === 'Fácil'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {exercise.difficulty}
                      </span>
                      <span className="text-gray-500">{exercise.duration} min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredExercises.length === 0 && (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">🔍</div>
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
