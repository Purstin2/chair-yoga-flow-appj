import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { ChevronRightIcon, CalendarDaysIcon, TrophyIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface OnboardingTutorialProps {
  onComplete: () => void;
  userName?: string;
}

const OnboardingTutorial: React.FC<OnboardingTutorialProps> = ({ 
  onComplete,
  userName = 'Usuária' 
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-1">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div 
                key={index} 
                className={`h-1.5 w-8 rounded-full ${
                  index + 1 <= currentStep ? 'bg-purple-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={onComplete}
            className="text-sm text-purple-600 font-medium"
          >
            Pular
          </button>
        </div>

        <Card className="mb-4">
          {currentStep === 1 && (
            <>
              <CardHeader>
                <CardTitle className="text-xl text-center">Bem-vinda ao seu momento sagrado</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🧘‍♀️</span>
                  </div>
                </div>

                <p className="text-gray-700 text-center">
                  Olá, {userName}! O Fenjes Yoga foi criado especialmente para mulheres como você que buscam:
                </p>

                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded-lg flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span>💪</span>
                    </div>
                    <p className="text-gray-700">Aliviar dores no dia a dia</p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded-lg flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span>🧠</span>
                    </div>
                    <p className="text-gray-700">Reduzir estresse e ansiedade</p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded-lg flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span>⚡</span>
                    </div>
                    <p className="text-gray-700">Aumentar energia e disposição</p>
                  </div>
                </div>

                <p className="text-gray-700 text-center">
                  Não é sobre ficar em forma, mas sim sobre cuidar do seu corpo e bem-estar.
                </p>

                <button
                  onClick={handleNextStep}
                  className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium flex items-center justify-center"
                >
                  <span>Vamos começar</span>
                  <ChevronRightIcon className="h-5 w-5 ml-1" />
                </button>
              </CardContent>
            </>
          )}

          {currentStep === 2 && (
            <>
              <CardHeader>
                <CardTitle className="text-xl text-center">Vamos fazer seu primeiro exercício juntas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                  <div className="text-center">
                    <span className="text-4xl block mb-2">🧘‍♀️</span>
                    <span className="text-gray-500">[Demonstração em vídeo]</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">Como usar o app:</h3>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full w-7 h-7 flex items-center justify-center text-purple-700 font-bold mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-gray-700 mb-1">Escolha um exercício baseado em como você se sente</p>
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <span className="text-sm text-gray-500">Seu programa é personalizado para suas necessidades</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full w-7 h-7 flex items-center justify-center text-purple-700 font-bold mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-gray-700 mb-1">Use o timer para controlar seu tempo</p>
                      <div className="flex space-x-2 bg-gray-50 p-2 rounded-lg">
                        <button className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                          ▶️
                        </button>
                        <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
                          ⏸️
                        </button>
                        <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
                          ⏹️
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full w-7 h-7 flex items-center justify-center text-purple-700 font-bold mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-gray-700 mb-1">Marque como concluído ao finalizar</p>
                      <div className="bg-green-100 p-2 rounded-lg flex items-center">
                        <span className="text-green-700">✓ Exercício concluído!</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNextStep}
                  className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium flex items-center justify-center"
                >
                  <span>Entendi</span>
                  <ChevronRightIcon className="h-5 w-5 ml-1" />
                </button>
              </CardContent>
            </>
          )}

          {currentStep === 3 && (
            <>
              <CardHeader>
                <CardTitle className="text-xl text-center">Seu programa personalizado está pronto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center mb-2">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                    <CalendarDaysIcon className="h-10 w-10 text-purple-600" />
                  </div>
                </div>

                <p className="text-gray-700 text-center">
                  Criamos um programa completo de 21 dias para melhorar seu bem-estar, 
                  com base nas suas necessidades específicas.
                </p>

                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-900">Programa 21 Dias</h3>
                    <span className="text-sm text-purple-600">14% completo</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '14%' }} />
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 21 }).map((_, index) => (
                      <div 
                        key={index}
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          index < 3 
                            ? 'bg-green-100 text-green-700 border border-green-300' 
                            : index === 3 
                              ? 'bg-purple-600 text-white' 
                              : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <TrophyIcon className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Conquistas</h4>
                      <p className="text-sm text-gray-600">
                        Desbloqueie emblemas especiais a cada marco alcançado
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <QuestionMarkCircleIcon className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Precisa de ajuda?</h4>
                      <p className="text-sm text-gray-600">
                        Acesse "Ajuda" no menu de perfil para obter suporte
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onComplete}
                  className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium"
                >
                  Começar minha jornada
                </button>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default OnboardingTutorial; 