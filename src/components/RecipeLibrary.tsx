import React, { useState } from 'react';
import { ArrowLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { User } from '@/types';
import { Card, CardContent } from './ui/Card';
import Header from './Header';

interface RecipeLibraryProps {
  onBack: () => void;
  user: User;
  onProfileClick: () => void;
}

interface Recipe {
  id: number;
  name: string;
  category: string;
  prepTime: string;
  image: string;
  ingredients: string[];
  description: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Salada de Quinoa',
    category: 'Almoço',
    prepTime: '15 min',
    image: '🥗',
    ingredients: ['Quinoa', 'Tomate', 'Pepino', 'Azeite', 'Limão'],
    description: 'Salada nutritiva rica em proteínas e vegetais frescos.'
  },
  {
    id: 2,
    name: 'Smoothie Verde',
    category: 'Bebidas',
    prepTime: '5 min',
    image: '🥤',
    ingredients: ['Espinafre', 'Banana', 'Maçã', 'Água de Coco'],
    description: 'Bebida refrescante cheia de vitaminas e minerais.'
  },
  {
    id: 3,
    name: 'Pasta de Grão-de-bico',
    category: 'Lanches',
    prepTime: '10 min',
    image: '🧆',
    ingredients: ['Grão-de-bico', 'Tahine', 'Alho', 'Azeite', 'Limão'],
    description: 'Ótima opção para lanches saudáveis com vegetais.'
  },
  {
    id: 4,
    name: 'Aveia com Frutas',
    category: 'Café da Manhã',
    prepTime: '5 min',
    image: '🥣',
    ingredients: ['Aveia', 'Banana', 'Mel', 'Canela', 'Nozes'],
    description: 'Café da manhã rápido e energético para começar o dia.'
  },
  {
    id: 5,
    name: 'Sopa de Legumes',
    category: 'Jantar',
    prepTime: '30 min',
    image: '🍲',
    ingredients: ['Cenoura', 'Abobrinha', 'Cebola', 'Batata', 'Temperos'],
    description: 'Sopa leve e nutritiva, perfeita para o jantar.'
  },
  {
    id: 6,
    name: 'Tofu Grelhado',
    category: 'Almoço',
    prepTime: '20 min',
    image: '🍛',
    ingredients: ['Tofu', 'Molho de Soja', 'Gengibre', 'Alho', 'Legumes'],
    description: 'Prato proteico e saboroso para almoço ou jantar.'
  }
];

const RecipeLibrary: React.FC<RecipeLibraryProps> = ({ onBack, user, onProfileClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const categories = ['Todas', 'Café da Manhã', 'Almoço', 'Jantar', 'Lanches', 'Bebidas'];
  
  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'Todas' || recipe.category === selectedCategory;
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (selectedRecipe) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-20">
        <Header 
          user={user}
          onProfileClick={onProfileClick}
          title={selectedRecipe.name}
          showBackButton
          onBackClick={() => setSelectedRecipe(null)}
        />
        
        <div className="px-4 max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center text-4xl text-white">
              {selectedRecipe.image}
            </div>
          </div>
          
          <Card variant="default" size="md" className="mb-5">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {selectedRecipe.category}
                </span>
                <span className="text-sm text-gray-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {selectedRecipe.prepTime}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedRecipe.description}</p>
              
              <h3 className="font-medium text-gray-900 mb-3">Ingredientes</h3>
              <ul className="space-y-2 mb-6">
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-green-600">•</span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
                <h4 className="font-medium text-yellow-800 mb-2">Dica de Preparo</h4>
                <p className="text-sm text-gray-700">
                  Para obter o melhor sabor, use ingredientes frescos e orgânicos sempre que possível. Ajuste os temperos de acordo com sua preferência.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card variant="default" size="md">
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 mb-3">Informação Nutricional</h3>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-sm text-gray-500">Calorias</p>
                  <p className="font-medium text-gray-900">250</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-sm text-gray-500">Proteínas</p>
                  <p className="font-medium text-gray-900">12g</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-sm text-gray-500">Carbs</p>
                  <p className="font-medium text-gray-900">30g</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-sm text-gray-500">Gorduras</p>
                  <p className="font-medium text-gray-900">8g</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-20">
      <Header 
        user={user}
        onProfileClick={onProfileClick}
        title="Receitas Saudáveis"
        showBackButton
        onBackClick={onBack}
      />
      
      <div className="px-4 max-w-md mx-auto">
        {/* Search Bar */}
        <div className="relative mb-4">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar por receita ou ingrediente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 focus:outline-none focus:border-green-400 text-gray-700"
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white/80 border border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recipe Cards */}
        <div className="space-y-4">
          {filteredRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              variant="default"
              size="md"
              hover="scale"
              className="overflow-hidden"
            >
              <CardContent className="flex items-start p-4">
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-r from-green-400 to-teal-500 text-white mr-4 flex-shrink-0`}>
                  {recipe.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{recipe.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{recipe.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {recipe.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {recipe.prepTime}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredRecipes.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">Nenhuma receita encontrada.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todas');
                }}
                className="mt-2 text-green-600 font-medium"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeLibrary;
