
import React, { useState } from 'react';
import { ArrowLeft, Clock, Target, Filter, Search } from 'lucide-react';

interface Exercise {
  id: number;
  name: string;
  duration: string;
  difficulty: string;
  category: string;
  targetArea: string;
  image: string;
  description: string;
  benefits: string;
  instructions: string[];
}

interface ExerciseLibraryProps {
  onBack: () => void;
  onExerciseSelect: (exercise: Exercise) => void;
}

const ExerciseLibrary: React.FC<ExerciseLibraryProps> = ({ onBack, onExerciseSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const exercises: Exercise[] = [
    {
      id: 1,
      name: 'Respiração Relaxante',
      duration: '5min',
      difficulty: 'Fácil',
      category: 'Respiração',
      targetArea: 'Mente',
      image: '🧘‍♀️',
      description: 'Técnica de respiração para acalmar a mente e reduzir o estresse',
      benefits: 'Reduz ansiedade, melhora concentração, diminui pressão arterial',
      instructions: [
        'Sente-se confortavelmente',
        'Feche os olhos suavemente',
        'Respire profundamente pelo nariz',
        'Segure por 4 segundos',
        'Expire lentamente pela boca'
      ]
    },
    {
      id: 2,
      name: 'Alongamento Cervical',
      duration: '3min',
      difficulty: 'Fácil',
      category: 'Mobilidade',
      targetArea: 'Pescoço',
      image: '💆‍♀️',
      description: 'Exercícios suaves para aliviar tensão no pescoço e ombros',
      benefits: 'Alivia dor de cabeça, reduz rigidez cervical, melhora postura',
      instructions: [
        'Incline a cabeça para direita',
        'Mantenha por 30 segundos',
        'Repita para o lado esquerdo',
        'Faça rotações suaves',
        'Termine com relaxamento'
      ]
    },
    {
      id: 3,
      name: 'Postura da Montanha',
      duration: '4min',
      difficulty: 'Fácil',
      category: 'Postura',
      targetArea: 'Corpo Todo',
      image: '🏔️',
      description: 'Fortalece a coluna e melhora o alinhamento corporal',
      benefits: 'Melhora postura, fortalece core, aumenta consciência corporal',
      instructions: [
        'Fique de pé com pés paralelos',
        'Distribua o peso igualmente',
        'Alonga a coluna para cima',
        'Relaxe os ombros',
        'Respire profundamente'
      ]
    },
    {
      id: 4,
      name: 'Torção Sentada',
      duration: '6min',
      difficulty: 'Médio',
      category: 'Mobilidade',
      targetArea: 'Coluna',
      image: '🌀',
      description: 'Melhora flexibilidade da coluna e massageia órgãos internos',
      benefits: 'Aumenta mobilidade espinhal, melhora digestão, alivia tensão',
      instructions: [
        'Sente-se com pernas estendidas',
        'Dobre o joelho direito',
        'Gire o tronco para direita',
        'Mantenha a posição',
        'Repita para o outro lado'
      ]
    },
    {
      id: 5,
      name: 'Relaxamento Progressivo',
      duration: '10min',
      difficulty: 'Fácil',
      category: 'Relaxamento',
      targetArea: 'Corpo Todo',
      image: '😴',
      description: 'Técnica para relaxar todos os músculos do corpo',
      benefits: 'Reduz estresse, melhora sono, diminui tensão muscular',
      instructions: [
        'Deite-se confortavelmente',
        'Comece pelos pés',
        'Tense e relaxe cada músculo',
        'Suba gradualmente pelo corpo',
        'Termine com respiração profunda'
      ]
    },
    {
      id: 6,
      name: 'Gato-Vaca na Cadeira',
      duration: '3min',
      difficulty: 'Fácil',
      category: 'Mobilidade',
      targetArea: 'Costas',
      image: '🐱',
      description: 'Mobiliza a coluna vertebral de forma suave',
      benefits: 'Alivia dor nas costas, melhora flexibilidade, reduz rigidez',
      instructions: [
        'Sente-se na borda da cadeira',
        'Arqueie as costas (posição vaca)',
        'Arredonde as costas (posição gato)',
        'Alterne os movimentos',
        'Coordene com a respiração'
      ]
    }
  ];

  // Adicionar mais exercícios mockup
  const generateMockExercises = () => {
    const mockExercises = [];
    const categories = ['Respiração', 'Mobilidade', 'Postura', 'Relaxamento', 'Fortalecimento'];
    const targetAreas = ['Pescoço', 'Ombros', 'Costas', 'Quadris', 'Corpo Todo', 'Mente'];
    const names = [
      'Flexão de Quadril', 'Rotação de Ombros', 'Postura do Guerreiro', 'Meditação Guiada',
      'Alongamento de Panturrilha', 'Fortalecimento Core', 'Respiração 4-7-8', 'Postura da Árvore',
      'Relaxamento Facial', 'Mobilidade de Pulsos', 'Postura do Bebê', 'Respiração Alternada',
      'Alongamento Lateral', 'Fortalecimento Glúteos', 'Meditação Caminhada', 'Postura da Cobra',
      'Relaxamento de Mandíbula', 'Mobilidade de Tornozelos', 'Postura da Ponte', 'Respiração Quadrada',
      'Alongamento de Isquiotibiais', 'Fortalecimento Lombar', 'Meditação do Sono', 'Postura do Triângulo'
    ];

    for (let i = 0; i < 24; i++) {
      mockExercises.push({
        id: i + 7,
        name: names[i],
        duration: `${Math.floor(Math.random() * 15) + 3}min`,
        difficulty: Math.random() > 0.7 ? 'Médio' : 'Fácil',
        category: categories[Math.floor(Math.random() * categories.length)],
        targetArea: targetAreas[Math.floor(Math.random() * targetAreas.length)],
        image: ['🧘‍♀️', '💆‍♀️', '🏔️', '🌀', '😴', '🐱'][Math.floor(Math.random() * 6)],
        description: `Exercício de ${categories[Math.floor(Math.random() * categories.length)].toLowerCase()} para melhorar seu bem-estar`,
        benefits: 'Melhora flexibilidade, reduz tensão, aumenta bem-estar',
        instructions: ['Posição inicial', 'Movimento principal', 'Respiração coordenada', 'Finalização']
      });
    }
    return mockExercises;
  };

  const allExercises = [...exercises, ...generateMockExercises()];
  const categories = ['Todos', 'Respiração', 'Mobilidade', 'Postura', 'Relaxamento', 'Fortalecimento'];

  const filteredExercises = allExercises.filter(exercise => {
    const matchesCategory = selectedCategory === 'Todos' || exercise.category === selectedCategory;
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.targetArea.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <h1 className="text-2xl font-bold text-purple-900">Exercícios de Yoga</h1>
          <p className="text-purple-600">30 exercícios para seu bem-estar</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={20} />
        <input
          type="text"
          placeholder="Buscar por exercício ou área do corpo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none"
        />
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

      {/* Exercises Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredExercises.map((exercise) => (
          <div
            key={exercise.id}
            onClick={() => onExerciseSelect(exercise)}
            className="gradient-card rounded-xl p-4 shadow-lg cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="text-3xl text-center mb-2">{exercise.image}</div>
            <h3 className="font-semibold text-purple-900 text-sm mb-2 text-center line-clamp-2">
              {exercise.name}
            </h3>
            <div className="flex items-center justify-between text-xs text-purple-600 mb-2">
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {exercise.duration}
              </span>
              <span className="bg-purple-100 px-2 py-1 rounded-full">
                {exercise.difficulty}
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {exercise.targetArea}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseLibrary;
