import React, { useState } from 'react';
import { UserQuizData } from '@/types';
import { ClipboardIcon, ChevronRightIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { Card, CardContent } from './ui/Card';

interface MedicalQuizProps {
  onComplete: (data: UserQuizData) => void;
  userName: string;
}

const MedicalQuiz: React.FC<MedicalQuizProps> = ({ onComplete, userName }) => {
  const [step, setStep] = useState(1);
  const [quizData, setQuizData] = useState<UserQuizData>({
    age: '',
    activityLevel: '',
    painAreas: [],
    availableTime: '',
    healthConditions: [],
    medication: false,
    previousInjury: false
  });
  
  const [currentPainLevel, setCurrentPainLevel] = useState<number>(0);
  const [medications, setMedications] = useState<string[]>([]);
  const [newMedication, setNewMedication] = useState('');
  const [recentSurgeries, setRecentSurgeries] = useState<boolean>(false);
  const [surgeryDetails, setSurgeryDetails] = useState('');
  const [sleepQuality, setSleepQuality] = useState('');

  const handleNext = () => {
    // Validate current step
    if ((step === 1 && !quizData.age) || 
        (step === 2 && quizData.painAreas.length === 0) ||
        (step === 3 && !quizData.availableTime) ||
        (step === 4 && quizData.healthConditions.length === 0)) {
      // Show an error or alert that a selection is required
      alert('Por favor, responda a pergunta antes de continuar.');
      return;
    }

    if (step < 7) {
      setStep(step + 1);
    } else {
      // Complete the quiz
      onComplete({
        ...quizData,
        // Add additional fields from our extended quiz
        currentPainLevel,
        medications,
        recentSurgeries,
        surgeryDetails,
        sleepQuality
      } as UserQuizData);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleAgeChange = (age: string) => {
    setQuizData(prev => ({ ...prev, age }));
  };

  const handleActivityLevelChange = (level: string) => {
    setQuizData(prev => ({ ...prev, activityLevel: level }));
  };

  const handlePainAreaToggle = (area: string) => {
    setQuizData(prev => {
      const painAreas = prev.painAreas || [];
      if (painAreas.includes(area)) {
        return { ...prev, painAreas: painAreas.filter(a => a !== area) };
      } else {
        return { ...prev, painAreas: [...painAreas, area] };
      }
    });
  };

  const handleAvailableTimeChange = (time: string) => {
    setQuizData(prev => ({ ...prev, availableTime: time }));
  };

  const handleHealthConditionToggle = (condition: string) => {
    setQuizData(prev => {
      const healthConditions = prev.healthConditions || [];
      if (healthConditions.includes(condition)) {
        return { ...prev, healthConditions: healthConditions.filter(c => c !== condition) };
      } else {
        return { ...prev, healthConditions: [...healthConditions, condition] };
      }
    });
  };

  const handleMedicationToggle = () => {
    setQuizData(prev => ({ ...prev, medication: !prev.medication }));
  };

  const handleAddMedication = () => {
    if (newMedication.trim()) {
      setMedications([...medications, newMedication.trim()]);
      setNewMedication('');
    }
  };

  const handleRemoveMedication = (med: string) => {
    setMedications(medications.filter(m => m !== med));
  };

  const handlePreviousInjuryToggle = () => {
    setQuizData(prev => ({ ...prev, previousInjury: !prev.previousInjury }));
  };

  const handleRecentSurgeriesToggle = () => {
    setRecentSurgeries(!recentSurgeries);
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center py-6">
          <ClipboardIcon className="h-16 w-16 text-purple-600" />
        </div>

        <h1 className="text-2xl font-bold text-center mb-4">
          Vamos personalizar seu programa, {userName}!
        </h1>
        
        <p className="text-gray-600 text-center mb-8">
          Suas respostas nos ajudarão a adaptar os exercícios para suas necessidades específicas.
        </p>

        <div className="mb-4 bg-purple-50 p-3 rounded-lg">
          <div className="flex">
            <div className="mr-3 flex-shrink-0">
              <InformationCircleIcon className="h-5 w-5 text-purple-600" />
            </div>
            <p className="text-sm text-gray-700">
              Suas informações de saúde são confidenciais e usadas apenas para personalizar seu programa de exercícios com segurança.
            </p>
          </div>
        </div>

        <div className="mb-4 bg-white rounded-lg shadow-sm">
          <div className="h-2 bg-gray-200 rounded-t-lg overflow-hidden">
            <div 
              className="h-full bg-purple-600 transition-all duration-300"
              style={{ width: `${(step / 7) * 100}%` }}
            />
          </div>
          
          <div className="p-6">
            {step === 1 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Qual é a sua faixa etária?</h2>
                {['40-45', '46-50', '51-55', '56-60', '61-65', '66-70', '70+'].map((age) => (
                  <div key={age} className="mb-2">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                      <input
                        type="radio"
                        name="age"
                        checked={quizData.age === age}
                        onChange={() => handleAgeChange(age)}
                        className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                      />
                      <span className="ml-3 text-gray-700">{age} anos</span>
                    </label>
                  </div>
                ))}
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Onde você sente mais desconforto ou dor?</h2>
                <p className="text-gray-600 text-sm mb-4">Selecione todas as áreas aplicáveis.</p>
                
                {['Pescoço', 'Ombros', 'Costas (parte superior)', 'Costas (parte inferior)', 'Quadril', 'Joelhos', 'Punhos/Mãos', 'Tornozelos/Pés', 'Não sinto dor'].map((area) => (
                  <div key={area} className="mb-2">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={(quizData.painAreas || []).includes(area)}
                        onChange={() => handlePainAreaToggle(area)}
                        className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      />
                      <span className="ml-3 text-gray-700">{area}</span>
                    </label>
                  </div>
                ))}
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Quanto tempo você tem disponível para se exercitar diariamente?</h2>
                
                {['5-10 minutos', '11-15 minutos', '16-20 minutos', '21-30 minutos', 'Mais de 30 minutos'].map((time) => (
                  <div key={time} className="mb-2">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                      <input
                        type="radio"
                        name="availableTime"
                        checked={quizData.availableTime === time}
                        onChange={() => handleAvailableTimeChange(time)}
                        className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                      />
                      <span className="ml-3 text-gray-700">{time}</span>
                    </label>
                  </div>
                ))}
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Você tem alguma destas condições de saúde?</h2>
                <p className="text-gray-600 text-sm mb-4">Selecione todas as que se aplicam a você.</p>
                
                {['Hipertensão (Pressão Alta)', 'Diabetes', 'Artrite ou Artrose', 'Osteoporose', 'Problemas Cardíacos', 'Fibromialgia', 'Hérnia de Disco', 'Labirintite', 'Ansiedade/Depressão', 'Nenhuma das opções acima'].map((condition) => (
                  <div key={condition} className="mb-2">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={(quizData.healthConditions || []).includes(condition)}
                        onChange={() => handleHealthConditionToggle(condition)}
                        className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      />
                      <span className="ml-3 text-gray-700">{condition}</span>
                    </label>
                  </div>
                ))}
              </div>
            )}

            {step === 5 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Qual seu nível atual de dor?</h2>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-500">Sem dor</span>
                    <span className="text-xs text-gray-500">Dor severa</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="1"
                      value={currentPainLevel}
                      onChange={(e) => setCurrentPainLevel(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="absolute -top-8 transform -translate-x-1/2 text-purple-700 font-medium"
                      style={{ left: `${(currentPainLevel / 10) * 100}%` }}
                    >
                      {currentPainLevel}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Você está tomando algum medicamento regularmente?</h2>
                  
                  <div className="mb-4">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={quizData.medication}
                        onChange={handleMedicationToggle}
                        className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      />
                      <span className="ml-3 text-gray-700">Sim, tomo medicamentos regularmente</span>
                    </label>
                  </div>
                  
                  {quizData.medication && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">Quais medicamentos você toma?</h3>
                      <p className="text-xs text-gray-600 mb-3">Estes dados nos ajudam a adaptar seus exercícios para maior segurança.</p>
                      
                      <div className="flex mb-2">
                        <input
                          type="text"
                          value={newMedication}
                          onChange={(e) => setNewMedication(e.target.value)}
                          placeholder="Digite o nome do medicamento"
                          className="flex-1 p-2 border rounded-l-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />
                        <button
                          onClick={handleAddMedication}
                          className="bg-purple-600 text-white px-3 rounded-r-lg text-sm"
                        >
                          Adicionar
                        </button>
                      </div>
                      
                      {medications.length > 0 && (
                        <div className="mt-3">
                          <p className="text-xs text-gray-600 mb-2">Medicamentos adicionados:</p>
                          <div className="flex flex-wrap gap-2">
                            {medications.map((med, idx) => (
                              <div key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs flex items-center">
                                {med}
                                <button
                                  onClick={() => handleRemoveMedication(med)}
                                  className="ml-1 text-purple-600 hover:text-purple-800"
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 6 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Você teve alguma lesão ou cirurgia nos últimos 6 meses?</h2>
                
                <div className="mb-4">
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={quizData.previousInjury}
                      onChange={handlePreviousInjuryToggle}
                      className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                    />
                    <span className="ml-3 text-gray-700">Sim, tive uma lesão recente</span>
                  </label>
                </div>
                
                <div className="mb-4">
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={recentSurgeries}
                      onChange={handleRecentSurgeriesToggle}
                      className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                    />
                    <span className="ml-3 text-gray-700">Sim, passei por cirurgia</span>
                  </label>
                </div>
                
                {(quizData.previousInjury || recentSurgeries) && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Por favor, forneça mais detalhes:</h3>
                    <textarea
                      value={surgeryDetails}
                      onChange={(e) => setSurgeryDetails(e.target.value)}
                      placeholder="Descreva sua lesão ou cirurgia, onde foi e quando aconteceu..."
                      className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                      rows={4}
                    ></textarea>
                  </div>
                )}
                
                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Qual seu nível atual de atividade física?</h2>
                  
                  {['Sedentário (quase não me exercito)', 'Leve (caminhadas ocasionais)', 'Moderado (exercício 1-2x semana)', 'Ativo (exercício 3-5x semana)', 'Muito ativo (exercício diário)'].map((level) => (
                    <div key={level} className="mb-2">
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                        <input
                          type="radio"
                          name="activityLevel"
                          checked={quizData.activityLevel === level}
                          onChange={() => handleActivityLevelChange(level)}
                          className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                        />
                        <span className="ml-3 text-gray-700">{level}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {step === 7 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Como você descreveria a qualidade do seu sono?</h2>
                
                {['Muito ruim', 'Ruim', 'Regular', 'Boa', 'Muito boa'].map((quality) => (
                  <div key={quality} className="mb-2">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                      <input
                        type="radio"
                        name="sleepQuality"
                        checked={sleepQuality === quality}
                        onChange={() => setSleepQuality(quality)}
                        className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                      />
                      <span className="ml-3 text-gray-700">{quality}</span>
                    </label>
                  </div>
                ))}
                
                <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                  <h3 className="text-base font-medium text-purple-900 mb-2 flex items-center">
                    <InformationCircleIcon className="h-5 w-5 mr-2 text-purple-700" />
                    Estamos quase lá!
                  </h3>
                  <p className="text-sm text-gray-700">
                    Suas respostas nos permitirão criar um programa personalizado considerando suas condições 
                    específicas, nível de dor e restrições médicas. Isso ajudará a garantir resultados mais eficazes 
                    e seguros para você.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Voltar
                </button>
              ) : (
                <div></div> // Empty div to maintain layout
              )}
              
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center"
              >
                {step === 7 ? 'Concluir' : 'Avançar'}
                {step !== 7 && <ChevronRightIcon className="h-5 w-5 ml-1" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalQuiz; 