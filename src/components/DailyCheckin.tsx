
import React, { useState } from 'react';
import { Heart, Zap, Frown, Smile, User } from 'lucide-react';

interface DailyCheckinProps {
  onComplete: (data: any) => void;
  onSkip: () => void;
}

const DailyCheckin: React.FC<DailyCheckinProps> = ({ onComplete, onSkip }) => {
  const [mood, setMood] = useState<string>('');
  const [energy, setEnergy] = useState<string>('');
  const [painAreas, setPainAreas] = useState<string[]>([]);
  const [painLevel, setPainLevel] = useState<number>(5);

  const moods = [
    { id: 'tired', emoji: '😴', label: 'Cansada' },
    { id: 'stressed', emoji: '😣', label: 'Estressada' },
    { id: 'good', emoji: '😊', label: 'Bem' },
    { id: 'energized', emoji: '⚡', label: 'Energizada' }
  ];

  const energyLevels = [
    { id: 'low', emoji: '🔋', label: 'Baixa' },
    { id: 'medium', emoji: '🔋🔋', label: 'Média' },
    { id: 'high', emoji: '🔋🔋🔋', label: 'Alta' }
  ];

  const bodyAreas = [
    { id: 'neck', emoji: '🏠', label: 'Pescoço' },
    { id: 'shoulders', emoji: '🏠', label: 'Ombros' },
    { id: 'back', emoji: '🏠', label: 'Costas' },
    { id: 'hips', emoji: '🏠', label: 'Quadris' }
  ];

  const handleAreaToggle = (areaId: string) => {
    setPainAreas(prev => 
      prev.includes(areaId) 
        ? prev.filter(id => id !== areaId)
        : [...prev, areaId]
    );
  };

  const handleComplete = () => {
    const checkinData = {
      mood,
      energy,
      painAreas,
      painLevel,
      timestamp: new Date().toISOString()
    };
    onComplete(checkinData);
  };

  const canComplete = mood && energy;

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="text-white" size={32} />
        </div>
        <h1 className="text-2xl font-bold text-purple-900 mb-2">
          Como você está hoje?
        </h1>
        <p className="text-purple-600">
          Vamos personalizar seu treino para hoje
        </p>
      </div>

      {/* Mood Selection */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Como se sente?</h3>
        <div className="grid grid-cols-2 gap-3">
          {moods.map((moodOption) => (
            <button
              key={moodOption.id}
              onClick={() => setMood(moodOption.id)}
              className={`p-4 rounded-xl border-2 transition-all ${
                mood === moodOption.id
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 bg-white hover:border-purple-300'
              }`}
            >
              <div className="text-2xl mb-1">{moodOption.emoji}</div>
              <div className="text-sm font-medium text-purple-900">
                {moodOption.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Energy Level */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Nível de energia:</h3>
        <div className="grid grid-cols-3 gap-3">
          {energyLevels.map((energyOption) => (
            <button
              key={energyOption.id}
              onClick={() => setEnergy(energyOption.id)}
              className={`p-4 rounded-xl border-2 transition-all ${
                energy === energyOption.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-white hover:border-green-300'
              }`}
            >
              <div className="text-lg mb-1">{energyOption.emoji}</div>
              <div className="text-xs font-medium text-purple-900">
                {energyOption.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Pain Areas */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Onde sente tensão?</h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {bodyAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => handleAreaToggle(area.id)}
              className={`p-3 rounded-xl border-2 transition-all ${
                painAreas.includes(area.id)
                  ? 'border-red-400 bg-red-50'
                  : 'border-gray-200 bg-white hover:border-red-300'
              }`}
            >
              <div className="text-lg mb-1">🎯</div>
              <div className="text-sm font-medium text-purple-900">
                {area.label}
              </div>
            </button>
          ))}
        </div>

        {painAreas.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">
              Intensidade da tensão (1-10):
            </label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">1</span>
              <input
                type="range"
                min="1"
                max="10"
                value={painLevel}
                onChange={(e) => setPainLevel(parseInt(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm text-gray-600">10</span>
            </div>
            <div className="text-center mt-2">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                painLevel <= 3 ? 'bg-green-100 text-green-700' :
                painLevel <= 6 ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {painLevel}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleComplete}
          disabled={!canComplete}
          className={`w-full py-4 rounded-xl font-medium text-lg transition-all ${
            canComplete
              ? 'gradient-primary text-white hover:scale-105'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Personalizar Treino
        </button>
        
        <button
          onClick={onSkip}
          className="w-full py-3 rounded-xl font-medium text-purple-600 bg-white border border-purple-200 hover:bg-purple-50 transition-colors"
        >
          Pular por hoje
        </button>
      </div>

      {/* Motivational Message */}
      <div className="mt-6 text-center">
        <p className="text-sm text-purple-600 leading-relaxed">
          💡 Com base em como você se sente, vamos sugerir os exercícios 
          mais adequados para seu momento atual.
        </p>
      </div>
    </div>
  );
};

export default DailyCheckin;
