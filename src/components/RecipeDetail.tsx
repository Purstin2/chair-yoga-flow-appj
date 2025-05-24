import React from 'react';
import { Recipe } from '@/types';
import { ArrowLeftIcon, ClockIcon, UserIcon, BeakerIcon, ExclamationTriangleIcon, AdjustmentsHorizontalIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import Header from './Header';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
  user: any;
  onProfileClick: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({
  recipe,
  onBack,
  user,
  onProfileClick
}) => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header 
        user={user}
        onProfileClick={onProfileClick}
        title={recipe.name}
        showBackButton
        onBackClick={onBack}
      />

      <div className="px-4 max-w-md mx-auto">
        {/* Recipe Photo */}
        <div className="aspect-video overflow-hidden rounded-2xl mb-4 bg-gray-100 flex items-center justify-center relative">
          {recipe.image ? (
            <img 
              src={recipe.image} 
              alt={recipe.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-8xl mb-4">🍽️</span>
              <p className="text-gray-500 text-sm">Imagem ilustrativa</p>
            </div>
          )}
          
          {/* Badges overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center">
              <ClockIcon className="h-3 w-3 mr-1" />
              {recipe.time}
            </span>
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center">
              <UserIcon className="h-3 w-3 mr-1" />
              {recipe.servings} {recipe.servings > 1 ? 'porções' : 'porção'}
            </span>
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center">
              {recipe.difficulty === 'Fácil' ? '🟢' : recipe.difficulty === 'Médio' ? '🟠' : '🔴'} {recipe.difficulty}
            </span>
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm flex items-center">
              {getCategoryEmoji(recipe.category)} {recipe.category}
            </span>
          </div>
        </div>

        {/* Ingredients Card */}
        <Card variant="default" size="md" className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="mr-2">🛒</span>
              INGREDIENTES:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <p className="text-gray-700">{ingredient}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Instructions Card */}
        <Card variant="default" size="md" className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="mr-2">📋</span>
              MODO DE PREPARO:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 list-decimal list-inside">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700 pl-2">
                  {instruction}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Scientific Benefits Card */}
        <Card variant="default" size="md" className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BeakerIcon className="h-5 w-5 mr-2 text-purple-600" />
              BENEFÍCIOS CIENTÍFICOS:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recipe.scientificBenefits?.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <p className="text-gray-700">{benefit}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Contraindications Card */}
        <Card variant="default" size="md" className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ExclamationTriangleIcon className="h-5 w-5 mr-2 text-yellow-500" />
              CONTRAINDICAÇÕES:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recipe.contraindications?.map((contraindication, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <p className="text-gray-700">{contraindication}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Adaptations Card */}
        <Card variant="default" size="md" className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2 text-blue-500" />
              ADAPTAÇÕES PARA CONDIÇÕES ESPECÍFICAS:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(recipe.adaptations || {}).map(([condition, adaptation], index) => (
                <div key={index} className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                  <h4 className="font-medium text-gray-900 mb-1">{condition}:</h4>
                  <p className="text-gray-700 text-sm">{adaptation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Special Tip Card */}
        {recipe.specialTip && (
          <Card variant="default" size="md" className="mb-4 bg-blue-50 border-blue-100">
            <CardContent className="pt-4">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <LightBulbIcon className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-800 mb-1">DICA ESPECIAL:</h3>
                  <p className="text-gray-700">{recipe.specialTip}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Print Button */}
        <div className="mb-8">
          <button
            className="w-full py-3 bg-purple-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <span className="text-lg">🖨️</span>
            SALVAR RECEITA
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to get emoji based on category
function getCategoryEmoji(category: string): string {
  const emojiMap: Record<string, string> = {
    'Café da Manhã': '🌅',
    'Almoço': '🥗',
    'Jantar': '🍲',
    'Bebida': '🥤',
    'Lanche': '🥪',
    'Sobremesa': '🍰'
  };
  
  return emojiMap[category] || '🍽️';
}

export default RecipeDetail; 