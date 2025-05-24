import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

interface MedicalQuizProps {
  onComplete: (userData: UserQuizData) => void;
  userName?: string;
}

export interface UserQuizData {
  age: string;
  activityLevel: string;
  painAreas: string[];
  availableTime: string;
  healthConditions: string[];
  medication: boolean;
  previousInjury: boolean;
}

const MedicalQuiz: React.FC<MedicalQuizProps> = ({ onComplete, userName = 'Usuária' }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<UserQuizData>({
    age: '',
    activityLevel: '',
    painAreas: [],
    availableTime: '',
    healthConditions: [],
    medication: false,
    previousInjury: false
  });

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleCompleteQuiz = () => {
    onComplete(userData);
  };

  const handleAgeChange = (age: string) => {
    setUserData(prev => ({ ...prev, age }));
  };

  const handleActivityChange = (activityLevel: string) => {
    setUserData(prev => ({ ...prev, activityLevel }));
  };

  const handlePainAreaToggle = (area: string) => {
    setUserData(prev => {
      const updatedAreas = prev.painAreas.includes(area)
        ? prev.painAreas.filter(a => a !== area)
        : [...prev.painAreas, area];
      return { ...prev, painAreas: updatedAreas };
    });
  };

  const handleAvailableTimeChange = (time: string) => {
    setUserData(prev => ({ ...prev, availableTime: time }));
  };

  const handleHealthConditionToggle = (condition: string) => {
    setUserData(prev => {
      const updatedConditions = prev.healthConditions.includes(condition)
        ? prev.healthConditions.filter(c => c !== condition)
        : [...prev.healthConditions, condition];
      
      // If "Nenhuma das acima" is selected, clear all others
      if (condition === 'Nenhuma das acima') {
        return { 
          ...prev, 
          healthConditions: updatedConditions.includes('Nenhuma das acima') 
            ? ['Nenhuma das acima'] 
            : updatedConditions
        };
      }
      
      // If any other is selected, remove "Nenhuma das acima"
      return { 
        ...prev, 
        healthConditions: updatedConditions.filter(c => 
          c === condition || c !== 'Nenhuma das acima'
        )
      };
    });
  };

  const handleMedicationChange = (value: boolean) => {
    setUserData(prev => ({ ...prev, medication: value }));
  };

  const handlePreviousInjuryChange = (value: boolean) => {
    setUserData(prev => ({ ...prev, previousInjury: value }));
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        {currentStep === 1 && (
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-xl text-center">Vamos conhecer você melhor, {userName}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Qual sua idade?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['35-45', '46-55', '56-65', '65+'].map(age => (
                    <button
                      key={age}
                      onClick={() => handleAgeChange(age)}
                      className={`p-3 rounded-lg border text-center transition ${
                        userData.age === age
                          ? 'bg-purple-100 border-purple-500 text-purple-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Como está seu nível de atividade?</h3>
                <div className="space-y-2">
                  {[
                    'Sedentária há anos',
                    'Caminho às vezes',
                    'Faço exercícios esporadicamente',
                    'Exercício regularmente'
                  ].map(activity => (
                    <button
                      key={activity}
                      onClick={() => handleActivityChange(activity)}
                      className={`w-full p-3 rounded-lg border text-left transition ${
                        userData.activityLevel === activity
                          ? 'bg-purple-100 border-purple-500 text-purple-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {activity}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Onde sente mais dor/desconforto?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Pescoço/Cervical',
                    'Ombros',
                    'Costas/Lombar',
                    'Quadris',
                    'Joelhos',
                    'Sem dores significativas'
                  ].map(area => (
                    <button
                      key={area}
                      onClick={() => handlePainAreaToggle(area)}
                      className={`p-3 rounded-lg border text-center transition flex items-center justify-between ${
                        userData.painAreas.includes(area)
                          ? 'bg-purple-100 border-purple-500 text-purple-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <span>{area}</span>
                      {userData.painAreas.includes(area) && (
                        <span className="text-purple-700">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Quanto tempo você tem disponível por dia?</h3>
                <div className="grid grid-cols-3 gap-3">
                  {['5-10 min', '10-15 min', '15+ min'].map(time => (
                    <button
                      key={time}
                      onClick={() => handleAvailableTimeChange(time)}
                      className={`p-3 rounded-lg border text-center transition ${
                        userData.availableTime === time
                          ? 'bg-purple-100 border-purple-500 text-purple-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleNextStep}
                disabled={!userData.age || !userData.activityLevel || userData.painAreas.length === 0 || !userData.availableTime}
                className="w-full py-3 mt-4 bg-purple-600 text-white rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continuar
              </button>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-xl text-center">Histórico de Saúde</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Você tem alguma dessas condições?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Pressão alta',
                    'Diabetes',
                    'Problemas cardíacos',
                    'Artrite/Artrose',
                    'Hérnia de disco',
                    'Osteoporose',
                    'Ansiedade/Depressão',
                    'Nenhuma das acima'
                  ].map(condition => (
                    <button
                      key={condition}
                      onClick={() => handleHealthConditionToggle(condition)}
                      className={`p-3 rounded-lg border text-center transition flex items-center justify-between ${
                        userData.healthConditions.includes(condition)
                          ? 'bg-purple-100 border-purple-500 text-purple-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <span>{condition}</span>
                      {userData.healthConditions.includes(condition) && (
                        <span className="text-purple-700">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Toma algum medicamento regularmente?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Sim', value: true },
                    { label: 'Não', value: false }
                  ].map(option => (
                    <button
                      key={option.label}
                      onClick={() => handleMedicationChange(option.value)}
                      className={`p-3 rounded-lg border text-center transition ${
                        userData.medication === option.value
                          ? 'bg-purple-100 border-purple-500 text-purple-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Já se lesionou fazendo exercícios?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Sim', value: true },
                    { label: 'Não', value: false }
                  ].map(option => (
                    <button
                      key={option.label}
                      onClick={() => handlePreviousInjuryChange(option.value)}
                      className={`p-3 rounded-lg border text-center transition ${
                        userData.previousInjury === option.value
                          ? 'bg-purple-100 border-purple-500 text-purple-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handlePreviousStep}
                  className="flex-1 py-3 mt-4 bg-gray-200 text-gray-700 rounded-lg font-medium"
                >
                  Voltar
                </button>
                <button
                  onClick={handleCompleteQuiz}
                  disabled={userData.healthConditions.length === 0}
                  className="flex-1 py-3 mt-4 bg-purple-600 text-white rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Finalizar
                </button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MedicalQuiz; 