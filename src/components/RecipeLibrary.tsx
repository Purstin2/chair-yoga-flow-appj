import React, { useState } from 'react';
import { Recipe } from '@/types';
import { recipes } from '@/data/recipes';
import { recipeCategories } from '@/data/recipeCategories';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Clock, Filter } from 'lucide-react';
import Header from './Header';
import RecipeDetail from './RecipeDetail';

interface RecipeLibraryProps {
  onBack: () => void;
  user: any;
  onProfileClick: () => void;
}

const RecipeLibrary: React.FC<RecipeLibraryProps> = ({
  onBack,
  user,
  onProfileClick
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([]);
  const [timeFilter, setTimeFilter] = useState<number | null>(null);

  const dietaryOptions = [
    { id: 'diabetes', label: 'Diabetes' },
    { id: 'hipertensao', label: 'Hipertensão' },
    { id: 'colesterol', label: 'Colesterol Alto' },
    { id: 'gastrite', label: 'Gastrite' },
    { id: 'intestino', label: 'Intestino Irritável' },
    { id: 'refluxo', label: 'Refluxo' },
    { id: 'lactose', label: 'Intolerância à Lactose' },
    { id: 'gluten', label: 'Sensibilidade ao Glúten' },
    { id: 'hipotireoidismo', label: 'Hipotireoidismo' },
    { id: 'alergia-nozes', label: 'Alergia a Nozes' },
    { id: 'alergia-ovos', label: 'Alergia a Ovos' },
    { id: 'vegetariano', label: 'Vegetariano/Vegano' }
  ];

  const timeOptions = [
    { id: 5, label: 'Até 5 minutos' },
    { id: 10, label: 'Até 10 minutos' },
    { id: 15, label: 'Até 15 minutos' },
    { id: 30, label: 'Até 30 minutos' }
  ];

  const toggleDietaryFilter = (id: string) => {
    setDietaryFilters(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id) 
        : [...prev, id]
    );
  };

  const toggleTimeFilter = (time: number) => {
    setTimeFilter(prev => prev === time ? null : time);
  };

  const filteredRecipes = recipes.filter(recipe => {
    // Text search
    if (searchQuery && !recipe.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (selectedCategory && recipe.category !== selectedCategory) {
      return false;
    }
    
    // Time filter
    if (timeFilter && recipe.prepTime > timeFilter) {
      return false;
    }
    
    // Dietary filters - check if recipe has adaptations for all selected conditions
    if (dietaryFilters.length > 0) {
      return dietaryFilters.every(filter => {
        const condition = dietaryOptions.find(opt => opt.id === filter)?.label;
        return condition && recipe.adaptations && recipe.adaptations[condition];
      });
    }
    
    return true;
  });

  if (selectedRecipe) {
    return (
      <RecipeDetail
        recipe={selectedRecipe}
        onBack={() => setSelectedRecipe(null)}
        user={user}
        onProfileClick={onProfileClick}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header 
        user={user} 
        onProfileClick={onProfileClick}
        title="Nutrição Terapêutica" 
        showBackButton 
        onBackClick={onBack}
      />

      <div className="px-4 max-w-md mx-auto">
        {/* Search and Filter Bar */}
        <div className="mb-4 flex space-x-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar receita..."
              className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            onClick={() => setFilterMenuOpen(!filterMenuOpen)}
            className={`p-2 rounded-lg ${filterMenuOpen || dietaryFilters.length > 0 || timeFilter ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}`}
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>

        {/* Filter Menu */}
        {filterMenuOpen && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium text-gray-900 mb-3">Filtre por condição específica:</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {dietaryOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => toggleDietaryFilter(option.id)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    dietaryFilters.includes(option.id)
                      ? 'bg-purple-100 text-purple-700 border border-purple-300'
                      : 'bg-white border border-gray-300 text-gray-700'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            
            <h3 className="font-medium text-gray-900 mb-3">Tempo de preparo:</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {timeOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => toggleTimeFilter(option.id)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors flex items-center ${
                    timeFilter === option.id
                      ? 'bg-purple-100 text-purple-700 border border-purple-300'
                      : 'bg-white border border-gray-300 text-gray-700'
                  }`}
                >
                  <Clock className="h-3 w-3 mr-1" />
                  {option.label}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => {
                setDietaryFilters([]);
                setTimeFilter(null);
                setFilterMenuOpen(false);
              }}
              className="mt-3 text-sm text-purple-600 font-medium"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Category Chips */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === null
                  ? 'bg-purple-100 text-purple-700 border border-purple-300'
                  : 'bg-white border border-gray-300 text-gray-700'
              }`}
            >
              Todas
            </button>
            
            {recipeCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-3 py-2 rounded-full whitespace-nowrap transition-colors flex items-center ${
                  selectedCategory === category.name
                    ? 'bg-purple-100 text-purple-700 border border-purple-300'
                    : 'bg-white border border-gray-300 text-gray-700'
                }`}
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Recipes List */}
        {filteredRecipes.length > 0 ? (
          <div className="space-y-4">
            {filteredRecipes.map(recipe => (
              <Card
                key={recipe.id}
                className="overflow-hidden transition-shadow hover:shadow-md cursor-pointer border border-gray-200"
                onClick={() => setSelectedRecipe(recipe)}
              >
                <div className="aspect-video relative">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-xs font-medium px-2 py-1 bg-black/40 rounded-full flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {recipe.time}
                      </span>
                      <span className="text-white text-xs font-medium px-2 py-1 bg-black/40 rounded-full">
                        {getCategoryEmoji(recipe.category)} {recipe.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{recipe.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">{recipe.benefits}</p>
                  
                  {dietaryFilters.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {dietaryFilters.map(filter => {
                        const condition = dietaryOptions.find(opt => opt.id === filter)?.label;
                        return condition && recipe.adaptations && recipe.adaptations[condition] ? (
                          <span key={filter} className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                            Adaptado para {condition}
                          </span>
                        ) : null;
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-gray-900 font-medium mb-1">Nenhuma receita encontrada</h3>
            <p className="text-gray-600 text-sm">Tente mudar os filtros ou a busca</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function to get emoji based on category
function getCategoryEmoji(category: string): string {
  const categoryObj = recipeCategories.find(cat => cat.name === category);
  return categoryObj?.icon || '🍽️';
}

export default RecipeLibrary;