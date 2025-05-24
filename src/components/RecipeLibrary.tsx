
import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, Star } from 'lucide-react';

interface Recipe {
  id: number;
  name: string;
  time: string;
  servings: string;
  difficulty: string;
  category: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  benefits: string;
}

interface RecipeLibraryProps {
  onBack: () => void;
}

const RecipeLibrary: React.FC<RecipeLibraryProps> = ({ onBack }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const recipes: Recipe[] = [
    {
      id: 1,
      name: 'Suco Verde Detox',
      time: '5min',
      servings: '1 pessoa',
      difficulty: 'Fácil',
      category: 'Detox',
      image: '🥬',
      ingredients: ['1 folha couve', '1/2 maçã', '1/2 limão', '200ml água'],
      instructions: ['Lave bem a couve', 'Corte a maçã', 'Bata tudo no liquidificador', 'Coe e sirva'],
      benefits: 'Rico em vitaminas e minerais, ajuda na digestão'
    },
    {
      id: 2,
      name: 'Salada Anti-inflamatória',
      time: '10min',
      servings: '2 pessoas',
      difficulty: 'Fácil',
      category: 'Saladas',
      image: '🥗',
      ingredients: ['2 xíc rúcula', '1/2 abacate', '1 tomate', 'azeite', 'limão'],
      instructions: ['Lave a rúcula', 'Corte o abacate e tomate', 'Misture tudo', 'Tempere com azeite e limão'],
      benefits: 'Reduz inflamação, rica em ômega-3'
    },
    {
      id: 3,
      name: 'Chá de Gengibre',
      time: '8min',
      servings: '1 pessoa',
      difficulty: 'Fácil',
      category: 'Bebidas',
      image: '🫖',
      ingredients: ['1 pedaço gengibre', '1 xíc água', 'mel a gosto'],
      instructions: ['Ferva a água', 'Adicione o gengibre', 'Deixe em infusão 5min', 'Adoce com mel'],
      benefits: 'Anti-inflamatório natural, melhora digestão'
    },
    {
      id: 4,
      name: 'Smoothie Energético',
      time: '5min',
      servings: '1 pessoa',
      difficulty: 'Fácil',
      category: 'Bebidas',
      image: '🥤',
      ingredients: ['1 banana', '1/2 xíc aveia', '200ml leite vegetal', '1 col mel'],
      instructions: ['Adicione tudo no liquidificador', 'Bata bem', 'Sirva gelado'],
      benefits: 'Energia natural, rico em fibras'
    },
    {
      id: 5,
      name: 'Sopa Detox de Legumes',
      time: '25min',
      servings: '4 pessoas',
      difficulty: 'Médio',
      category: 'Sopas',
      image: '🍲',
      ingredients: ['2 cenouras', '1 abobrinha', '1 chuchu', 'temperos naturais'],
      instructions: ['Corte os legumes', 'Refogue com pouco óleo', 'Adicione água', 'Cozinhe até ficar macio'],
      benefits: 'Baixa caloria, rica em nutrientes'
    }
  ];

  // Gerar mais 25 receitas mockup
  const generateMockRecipes = () => {
    const mockRecipes = [];
    const categories = ['Detox', 'Saladas', 'Bebidas', 'Sopas', 'Lanches'];
    const names = [
      'Vitamina de Frutas Vermelhas', 'Salada de Quinoa', 'Água Saborizada', 'Creme de Abóbora',
      'Sanduíche Natural', 'Suco de Beterraba', 'Salada Mediterrânea', 'Chá de Camomila',
      'Sopa de Lentilha', 'Wrap Integral', 'Smoothie Verde', 'Salada de Grão de Bico',
      'Água com Limão', 'Canja Light', 'Tapioca Funcional', 'Suco de Cenoura',
      'Salada Caesar Light', 'Chá Verde', 'Gazpacho', 'Pão Integral', 'Vitamina Detox',
      'Salada Tropical', 'Kombucha', 'Caldo Verde', 'Granola Caseira'
    ];

    for (let i = 0; i < 25; i++) {
      mockRecipes.push({
        id: i + 6,
        name: names[i],
        time: `${Math.floor(Math.random() * 20) + 5}min`,
        servings: `${Math.floor(Math.random() * 4) + 1} pessoa${Math.floor(Math.random() * 4) + 1 > 1 ? 's' : ''}`,
        difficulty: Math.random() > 0.5 ? 'Fácil' : 'Médio',
        category: categories[Math.floor(Math.random() * categories.length)],
        image: '🥗',
        ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'],
        instructions: ['Passo 1', 'Passo 2', 'Passo 3'],
        benefits: 'Benefícios para a saúde'
      });
    }
    return mockRecipes;
  };

  const allRecipes = [...recipes, ...generateMockRecipes()];
  const categories = ['Todas', 'Detox', 'Saladas', 'Bebidas', 'Sopas', 'Lanches'];

  const filteredRecipes = selectedCategory === 'Todas' 
    ? allRecipes 
    : allRecipes.filter(recipe => recipe.category === selectedCategory);

  if (selectedRecipe) {
    return (
      <div className="p-4 pb-24 max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setSelectedRecipe(null)}
            className="mr-4 p-2 hover:bg-white/50 rounded-full transition-colors"
          >
            <ArrowLeft size={24} className="text-purple-700" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-purple-900">{selectedRecipe.name}</h1>
            <p className="text-purple-600">{selectedRecipe.category}</p>
          </div>
        </div>

        <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
          <div className="text-6xl text-center mb-4">{selectedRecipe.image}</div>
          
          <div className="flex justify-around mb-6">
            <div className="text-center">
              <Clock className="w-5 h-5 mx-auto mb-1 text-purple-600" />
              <p className="text-sm text-purple-900">{selectedRecipe.time}</p>
            </div>
            <div className="text-center">
              <Users className="w-5 h-5 mx-auto mb-1 text-purple-600" />
              <p className="text-sm text-purple-900">{selectedRecipe.servings}</p>
            </div>
            <div className="text-center">
              <Star className="w-5 h-5 mx-auto mb-1 text-purple-600" />
              <p className="text-sm text-purple-900">{selectedRecipe.difficulty}</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-purple-700">{selectedRecipe.benefits}</p>
          </div>
        </div>

        <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
          <h3 className="font-semibold text-purple-900 mb-3">🛒 Ingredientes</h3>
          <ul className="space-y-2">
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center text-purple-800">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="gradient-card rounded-2xl p-5 shadow-lg">
          <h3 className="font-semibold text-purple-900 mb-3">👩‍🍳 Modo de Preparo</h3>
          <ol className="space-y-3">
            {selectedRecipe.instructions.map((instruction, index) => (
              <li key={index} className="flex items-start text-purple-800">
                <span className="bg-purple-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 font-bold">
                  {index + 1}
                </span>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 hover:bg-white/50 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-purple-700" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-purple-900">Receitas Saudáveis</h1>
          <p className="text-purple-600">30 receitas nutritivas</p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-white text-purple-600 border border-purple-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            className="gradient-card rounded-xl p-4 shadow-lg cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="text-3xl text-center mb-2">{recipe.image}</div>
            <h3 className="font-semibold text-purple-900 text-sm mb-2 text-center line-clamp-2">
              {recipe.name}
            </h3>
            <div className="flex items-center justify-between text-xs text-purple-600">
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {recipe.time}
              </span>
              <span className="bg-purple-100 px-2 py-1 rounded-full">
                {recipe.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeLibrary;
