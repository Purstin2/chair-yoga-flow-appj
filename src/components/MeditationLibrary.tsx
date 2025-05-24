
import React, { useState } from 'react';
import { ArrowLeftIcon, ClockIcon, PlayIcon } from '@heroicons/react/24/outline';

interface Meditation {
  id: number;
  name: string;
  duration: string;
  category: string;
  difficulty: string;
  image: string;
  description: string;
  benefits: string;
  audioGuide: string;
}

interface MeditationLibraryProps {
  onBack: () => void;
}

const MeditationLibrary: React.FC<MeditationLibraryProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedMeditation, setSelectedMeditation] = useState<Meditation | null>(null);

  const meditations: Meditation[] = [
    {
      id: 1,
      name: 'Respiração 4-7-8',
      duration: '5min',
      category: 'Respiração',
      difficulty: 'Iniciante',
      image: '🫁',
      description: 'Técnica de respiração para reduzir ansiedade e promover relaxamento profundo.',
      benefits: 'Reduz ansiedade, melhora o sono, diminui o estresse',
      audioGuide: 'Inspire por 4 segundos, segure por 7, expire por 8...'
    },
    {
      id: 2,
      name: 'Meditação do Presente',
      duration: '10min',
      category: 'Mindfulness',
      difficulty: 'Iniciante',
      image: '🧘‍♀️',
      description: 'Prática de atenção plena para conectar-se com o momento presente.',
      benefits: 'Aumenta foco, reduz pensamentos ansiosos, promove clareza mental',
      audioGuide: 'Concentre-se na sua respiração, observe sem julgar...'
    },
    {
      id: 3,
      name: 'Relaxamento Muscular',
      duration: '15min',
      category: 'Relaxamento',
      difficulty: 'Fácil',
      image: '💆‍♀️',
      description: 'Relaxamento progressivo de todos os grupos musculares do corpo.',
      benefits: 'Alivia tensão muscular, reduz dores, promove relaxamento profundo',
      audioGuide: 'Comece pelos pés, tense e relaxe cada músculo...'
    },
    {
      id: 4,
      name: 'Visualização Curativa',
      duration: '8min',
      category: 'Cura',
      difficulty: 'Intermediário',
      image: '✨',
      description: 'Meditação com visualizações para promover cura e bem-estar.',
      benefits: 'Fortalece sistema imunológico, reduz dor, acelera recuperação',
      audioGuide: 'Imagine uma luz dourada envolvendo seu corpo...'
    },
    {
      id: 5,
      name: 'Gratidão Diária',
      duration: '7min',
      category: 'Bem-estar',
      difficulty: 'Fácil',
      image: '🙏',
      description: 'Prática diária de gratidão para cultivar sentimentos positivos.',
      benefits: 'Melhora humor, aumenta satisfação, reduz depressão',
      audioGuide: 'Pense em três coisas pelas quais você é grato hoje...'
    }
  ];

  // Adicionar mais meditações mockup
  const generateMockMeditations = () => {
    const mockMeditations = [];
    const categories = ['Respiração', 'Mindfulness', 'Relaxamento', 'Cura', 'Bem-estar', 'Sono'];
    const names = [
      'Respiração Oceânica', 'Atenção aos Sons', 'Corpo Scan', 'Luz Interior',
      'Amor Próprio', 'Preparação para Dormir', 'Energia Matinal', 'Pausa Consciente',
      'Libertação de Tensões', 'Concentração Total', 'Paz Interior', 'Autocura',
      'Momento Zen', 'Respiração Profunda', 'Equilíbrio Emocional', 'Força Interior',
      'Calma Mental', 'Renovação Energética', 'Serenidade', 'Despertar Consciente'
    ];

    for (let i = 0; i < 20; i++) {
      mockMeditations.push({
        id: i + 6,
        name: names[i],
        duration: `${Math.floor(Math.random() * 15) + 3}min`,
        category: categories[Math.floor(Math.random() * categories.length)],
        difficulty: ['Iniciante', 'Fácil', 'Intermediário'][Math.floor(Math.random() * 3)],
        image: ['🧘‍♀️', '🫁', '💆‍♀️', '✨', '🙏', '🌙'][Math.floor(Math.random() * 6)],
        description: 'Prática de meditação para promover bem-estar e equilíbrio.',
        benefits: 'Reduz estresse, melhora foco, promove relaxamento',
        audioGuide: 'Guia de áudio para esta meditação...'
      });
    }
    return mockMeditations;
  };

  const allMeditations = [...meditations, ...generateMockMeditations()];
  const categories = ['Todas', 'Respiração', 'Mindfulness', 'Relaxamento', 'Cura', 'Bem-estar', 'Sono'];

  const filteredMeditations = selectedCategory === 'Todas' 
    ? allMeditations 
    : allMeditations.filter(meditation => meditation.category === selectedCategory);

  if (selectedMeditation) {
    return (
      <div className="p-4 pb-24 max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setSelectedMeditation(null)}
            className="mr-4 p-2 hover:bg-white/50 rounded-full transition-colors"
          >
            <ArrowLeftIcon className="h-6 w-6 text-purple-700" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{selectedMeditation.name}</h1>
            <p className="text-gray-600">{selectedMeditation.category}</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 mb-6 shadow-lg border border-white/20">
          <div className="text-6xl text-center mb-4">{selectedMeditation.image}</div>
          
          <div className="flex justify-around mb-6">
            <div className="text-center">
              <ClockIcon className="w-5 h-5 mx-auto mb-1 text-purple-600" />
              <p className="text-sm text-gray-900">{selectedMeditation.duration}</p>
            </div>
            <div className="text-center">
              <span className="w-5 h-5 mx-auto mb-1 text-purple-600 block text-center">⭐</span>
              <p className="text-sm text-gray-900">{selectedMeditation.difficulty}</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-700">{selectedMeditation.description}</p>
          </div>

          <div className="bg-green-50 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">🎯 Benefícios:</h4>
            <p className="text-sm text-gray-700">{selectedMeditation.benefits}</p>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-medium text-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center justify-center gap-2">
            <PlayIcon className="h-5 w-5" />
            Iniciar Meditação
          </button>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20">
          <h3 className="font-semibold text-gray-900 mb-3">🎧 Guia de Áudio</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {selectedMeditation.audioGuide}
          </p>
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
          <ArrowLeftIcon className="h-6 w-6 text-purple-700" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Meditação e Respiração</h1>
          <p className="text-gray-600">25 práticas de mindfulness</p>
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
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Meditations Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredMeditations.map((meditation) => (
          <div
            key={meditation.id}
            onClick={() => setSelectedMeditation(meditation)}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="text-3xl text-center mb-2">{meditation.image}</div>
            <h3 className="font-semibold text-gray-900 text-sm mb-2 text-center line-clamp-2">
              {meditation.name}
            </h3>
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <ClockIcon className="h-3 w-3" />
                {meditation.duration}
              </span>
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                {meditation.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeditationLibrary;
