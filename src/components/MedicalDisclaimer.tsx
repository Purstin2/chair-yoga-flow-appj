import React, { useState } from 'react';
import { ShieldCheckIcon, PhoneIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface MedicalDisclaimerProps {
  onAccept: () => void;
  onSupport: () => void;
}

const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({ onAccept, onSupport }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAccept = () => {
    if (isAccepted) {
      onAccept();
    }
  };

  // Medical conditions requiring approval
  const medicalConditions = [
    { name: 'Artrite severa', description: 'Inflamação articular ativa que cause dor intensa' },
    { name: 'Osteoporose', description: 'Especialmente se já houve fraturas por fragilidade óssea' },
    { name: 'Cirurgias recentes', description: 'Cirurgias nos últimos 3 meses, especialmente coluna e articulações' },
    { name: 'Lesões agudas', description: 'Lesões musculares ou articulares com menos de 6 semanas' },
    { name: 'Fibromialgia em crise', description: 'Durante períodos de dor generalizada intensa' },
    { name: 'Hipertensão não controlada', description: 'Pressão arterial acima de 160/100 mmHg' },
    { name: 'Hérnia de disco ativa', description: 'Com sintomas neurológicos como formigamento ou fraqueza' },
    { name: 'Tontura crônica', description: 'Labirintite ou outras causas de desequilíbrio frequente' },
    { name: 'Glaucoma avançado', description: 'Especialmente para exercícios com a cabeça abaixo do coração' },
    { name: 'Espondilolistese', description: 'Deslizamento de vértebra que causa instabilidade' }
  ];

  // Warning signs
  const warningSigns = [
    'Dor que aumenta durante ou após o exercício',
    'Formigamento ou dormência que piora durante o exercício',
    'Fraqueza súbita em algum membro',
    'Tontura, náusea ou visão embaçada durante os movimentos',
    'Dor no peito ou dificuldade respiratória',
    'Dor articular aguda e repentina',
    'Inchaço articular significativo após exercício',
    'Dor que impede o sono noturno'
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center pt-6 pb-8">
          <ShieldCheckIcon className="h-20 w-20 text-purple-600" aria-hidden="true" />
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-6">Aviso Médico Importante</h1>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
            <div className="ml-3">
              <h2 className="text-lg font-medium text-red-800">Atenção</h2>
              <p className="mt-2 text-sm text-red-700">
                Os exercícios e dicas fornecidos neste aplicativo não substituem o tratamento médico profissional. 
                Consulte seu médico antes de iniciar qualquer programa de exercícios, especialmente se você tiver alguma condição médica pré-existente.
              </p>
            </div>
          </div>
        </div>
        
        {/* Condições médicas que requerem aprovação médica */}
        <div className="mb-6 bg-white border border-gray-200 rounded-lg">
          <button 
            className="w-full p-4 flex justify-between items-center text-left"
            onClick={() => toggleSection('conditions')}
            aria-expanded={!!expandedSections['conditions']}
          >
            <h2 className="text-lg font-medium text-gray-900">Condições que requerem aprovação médica</h2>
            <span className="text-purple-600 transform transition-transform duration-200">
              {expandedSections['conditions'] ? '−' : '+'}
            </span>
          </button>
          
          {expandedSections['conditions'] && (
            <div className="p-4 pt-0 border-t border-gray-200">
              <p className="mb-3 text-gray-700 text-sm">
                As seguintes condições requerem aprovação médica antes de iniciar este programa:
              </p>
              <ul className="space-y-2">
                {medicalConditions.map((condition, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <div>
                      <span className="font-medium text-gray-900">{condition.name}</span>
                      <p className="text-sm text-gray-600">{condition.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-700 italic">
                Se você tem 65 anos ou mais, é recomendado consultar seu médico antes de iniciar este programa, 
                mesmo que não tenha nenhuma das condições acima.
              </p>
            </div>
          )}
        </div>
        
        {/* Sinais de alerta */}
        <div className="mb-6 bg-white border border-gray-200 rounded-lg">
          <button 
            className="w-full p-4 flex justify-between items-center text-left"
            onClick={() => toggleSection('warnings')}
            aria-expanded={!!expandedSections['warnings']}
          >
            <h2 className="text-lg font-medium text-gray-900">Sinais de alerta durante exercícios</h2>
            <span className="text-purple-600 transform transition-transform duration-200">
              {expandedSections['warnings'] ? '−' : '+'}
            </span>
          </button>
          
          {expandedSections['warnings'] && (
            <div className="p-4 pt-0 border-t border-gray-200">
              <p className="mb-3 text-gray-700 text-sm">
                Pare imediatamente e consulte um profissional de saúde se você sentir:
              </p>
              <ul className="space-y-2">
                {warningSigns.map((sign, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Instruções de segurança */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg">
          <button 
            className="w-full p-4 flex justify-between items-center text-left"
            onClick={() => toggleSection('safety')}
            aria-expanded={!!expandedSections['safety']}
          >
            <h2 className="text-lg font-medium text-gray-900">Instruções de segurança</h2>
            <span className="text-purple-600 transform transition-transform duration-200">
              {expandedSections['safety'] ? '−' : '+'}
            </span>
          </button>
          
          {expandedSections['safety'] && (
            <div className="p-4 pt-0 border-t border-gray-200">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Inicie devagar e progrida gradualmente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Respeite os limites do seu corpo. Dor não é ganho.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Realize os exercícios em um espaço seguro e livre de obstáculos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Use roupas confortáveis que permitam movimento livre.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Mantenha-se hidratado antes, durante e após os exercícios.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">Nunca force além do seu conforto, especialmente nas articulações.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Contato de emergência */}
        <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
            <PhoneIcon className="h-5 w-5 text-red-600 mr-2" />
            Emergência Médica
          </h2>
          <p className="text-gray-700 mb-2">
            Em caso de emergência, ligue imediatamente para:
          </p>
          <p className="text-xl font-bold text-red-600 mb-2">192 (SAMU)</p>
          <p className="text-sm text-gray-600">
            Procure atendimento médico imediato se sentir dor intensa súbita, tontura severa, 
            dormência que não passa rapidamente, ou qualquer outro sintoma preocupante durante ou após os exercícios.
          </p>
        </div>
        
        {/* Checkbox de aceitação */}
        <div className="mb-8">
          <label className="flex items-start cursor-pointer">
            <input 
              type="checkbox" 
              className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 mt-0.5"
              checked={isAccepted}
              onChange={() => setIsAccepted(!isAccepted)}
            />
            <span className="ml-3 text-gray-700">
              Li e compreendo que este aplicativo não substitui orientação médica. Assumo responsabilidade 
              por verificar com meu médico se os exercícios são adequados para mim. Concordo em interromper 
              imediatamente a atividade e buscar ajuda médica se sentir qualquer sintoma adverso.
            </span>
          </label>
        </div>
        
        <div className="flex flex-col space-y-3 mb-8">
          <button 
            className={`py-3 px-4 rounded-lg font-medium flex items-center justify-center ${
              isAccepted 
                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={handleAccept}
            disabled={!isAccepted}
          >
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            Concordo e quero continuar
          </button>
          
          <button 
            className="py-3 px-4 bg-white border border-purple-300 text-purple-700 rounded-lg font-medium hover:bg-purple-50 transition-colors flex items-center justify-center"
            onClick={onSupport}
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            Preciso de ajuda
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer; 