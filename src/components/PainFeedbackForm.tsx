import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

interface PainFeedbackFormProps {
  isPreSession: boolean;
  onComplete: (feedbackData: PainFeedbackData) => void;
}

export interface PainFeedbackData {
  painLevel: number;
  tensionAreas: string[];
  energyLevel: string;
  mood?: string; // Added for more comprehensive assessment
  difficulty?: 'easy' | 'challenging' | 'hard'; // Added for post-exercise feedback
  notes?: string; // Optional notes
  experience?: number; // 1-5 stars, only for post-session
}

const PainFeedbackForm: React.FC<PainFeedbackFormProps> = ({ 
  isPreSession, 
  onComplete 
}) => {
  const [feedbackData, setFeedbackData] = useState<PainFeedbackData>({
    painLevel: 1,
    tensionAreas: [],
    energyLevel: '',
    mood: '',
    difficulty: isPreSession ? undefined : 'challenging',
    notes: '',
    experience: isPreSession ? undefined : 5
  });

  const handlePainLevelChange = (level: number) => {
    setFeedbackData(prev => ({ ...prev, painLevel: level }));
  };

  const handleTensionAreaToggle = (area: string) => {
    setFeedbackData(prev => {
      const updatedAreas = prev.tensionAreas.includes(area)
        ? prev.tensionAreas.filter(a => a !== area)
        : [...prev.tensionAreas, area];
      return { ...prev, tensionAreas: updatedAreas };
    });
  };

  const handleEnergyLevelChange = (level: string) => {
    setFeedbackData(prev => ({ ...prev, energyLevel: level }));
  };

  const handleMoodChange = (mood: string) => {
    setFeedbackData(prev => ({ ...prev, mood }));
  };

  const handleDifficultyChange = (difficulty: 'easy' | 'challenging' | 'hard') => {
    setFeedbackData(prev => ({ ...prev, difficulty }));
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedbackData(prev => ({ ...prev, notes: e.target.value }));
  };

  const handleExperienceChange = (stars: number) => {
    setFeedbackData(prev => ({ ...prev, experience: stars }));
  };

  const painFaces = [
    { level: 1, emoji: '😊', label: 'Sem dor' },
    { level: 3, emoji: '😐', label: 'Leve' },
    { level: 5, emoji: '😣', label: 'Moderada' },
    { level: 7, emoji: '😫', label: 'Intensa' },
    { level: 10, emoji: '😭', label: 'Severa' }
  ];

  const tensionAreas = ['Pescoço', 'Ombros', 'Costas (superior)', 'Costas (inferior)', 'Quadril', 'Joelhos', 'Punhos/Mãos', 'Tornozelos/Pés', 'Nenhuma área'];
  
  const energyLevels = [
    'Muito baixa', 'Baixa', 'Normal', 'Boa', 'Muito boa'
  ];

  const moodOptions = [
    { value: 'relaxed', label: '😌 Relaxada' },
    { value: 'energized', label: '⚡ Energizada' },
    { value: 'tired', label: '😴 Cansada' },
    { value: 'pain', label: '😣 Com dor' }
  ];

  const difficultyOptions = [
    { value: 'easy', label: '🟢 Fácil' },
    { value: 'challenging', label: '🟠 Desafiador' },
    { value: 'hard', label: '🔴 Difícil' }
  ];

  const isFormValid = () => {
    return (
      feedbackData.painLevel > 0 &&
      feedbackData.tensionAreas.length > 0 &&
      feedbackData.energyLevel !== '' &&
      feedbackData.mood !== '' &&
      (!isPreSession || (
        feedbackData.experience !== undefined &&
        feedbackData.difficulty !== undefined
      ))
    );
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              {isPreSession 
                ? "Como você está se sentindo agora?" 
                : "Como se sente depois dos exercícios?"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3 text-lg">
                Nível de dor/desconforto (1-10):
              </h3>
              <div className="flex justify-between items-end mb-1">
                {painFaces.map(face => (
                  <button
                    key={face.level}
                    onClick={() => handlePainLevelChange(face.level)}
                    className={`flex flex-col items-center transition-all ${
                      feedbackData.painLevel === face.level
                        ? 'transform scale-110'
                        : 'opacity-70'
                    }`}
                    aria-label={`Nível de dor ${face.level} - ${face.label}`}
                  >
                    <span className="text-3xl mb-1">{face.emoji}</span>
                    <span className="text-sm text-gray-700">{face.level}</span>
                  </button>
                ))}
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2 mb-2">
                <div
                  className="h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full"
                  style={{ width: `${(feedbackData.painLevel / 10) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3 text-lg">
                {isPreSession 
                  ? "Onde sente mais tensão hoje?" 
                  : "Onde ainda sente tensão?"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tensionAreas.map(area => (
                  <button
                    key={area}
                    onClick={() => handleTensionAreaToggle(area)}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      feedbackData.tensionAreas.includes(area)
                        ? 'bg-purple-100 text-purple-700 border border-purple-300'
                        : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                    aria-label={`Área de tensão: ${area}`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3 text-lg">Como está sua energia?</h3>
              <div className="space-y-2">
                {energyLevels.map(level => (
                  <button
                    key={level}
                    onClick={() => handleEnergyLevelChange(level)}
                    className={`w-full p-3 rounded-lg border text-left transition-colors text-base ${
                      feedbackData.energyLevel === level
                        ? 'bg-purple-100 border-purple-500 text-purple-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    aria-label={`Nível de energia: ${level}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3 text-lg">Como se sente?</h3>
              <div className="grid grid-cols-2 gap-2">
                {moodOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => handleMoodChange(option.value)}
                    className={`p-3 rounded-lg border text-center transition-colors text-base ${
                      feedbackData.mood === option.value
                        ? 'bg-purple-100 border-purple-500 text-purple-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    aria-label={`Humor: ${option.label}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {!isPreSession && (
              <>
                <div>
                  <h3 className="font-medium text-gray-900 mb-3 text-lg">Dificuldade do exercício</h3>
                  <div className="flex justify-between">
                    {difficultyOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => handleDifficultyChange(option.value as 'easy' | 'challenging' | 'hard')}
                        className={`flex-1 p-3 mx-1 rounded-lg border text-center transition-colors text-base ${
                          feedbackData.difficulty === option.value
                            ? 'bg-purple-100 border-purple-500 text-purple-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        aria-label={`Dificuldade: ${option.label}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3 text-lg">Como foi a experiência?</h3>
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        onClick={() => handleExperienceChange(star)}
                        className="text-3xl transition-transform focus:outline-none"
                        aria-label={`${star} estrelas`}
                      >
                        <span className={`${
                          (feedbackData.experience || 0) >= star 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                        }`}>
                          ★
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div>
              <h3 className="font-medium text-gray-900 mb-2 text-lg">Observações (opcional)</h3>
              <textarea
                value={feedbackData.notes || ''}
                onChange={handleNotesChange}
                placeholder="Adicione informações específicas sobre como está se sentindo..."
                className="w-full p-3 border rounded-lg text-base focus:outline-none focus:ring-1 focus:ring-purple-500"
                rows={3}
              />
            </div>

            <button
              onClick={() => onComplete(feedbackData)}
              disabled={!isFormValid()}
              className="w-full py-3 mt-4 bg-purple-600 text-white rounded-lg font-medium text-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isPreSession ? "Adaptar exercícios para hoje" : "Salvar e continuar jornada"}
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PainFeedbackForm; 