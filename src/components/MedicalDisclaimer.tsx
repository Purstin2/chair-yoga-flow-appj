import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

interface MedicalDisclaimerProps {
  onAccept: () => void;
  onSupport: () => void;
}

const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({ onAccept, onSupport }) => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-xl text-center flex items-center justify-center">
              <span className="text-yellow-500 text-2xl mr-2">⚠️</span>
              IMPORTANTE - LEIA ANTES DE COMEÇAR
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700">
              Este programa foi desenvolvido para exercícios de baixo impacto, mas:
            </p>

            <div className="space-y-4">
              <div className="flex">
                <span className="text-purple-600 mr-2">•</span>
                <p className="text-gray-700">
                  <strong>Consulte seu médico</strong> se tem condições de saúde ou toma medicamentos
                </p>
              </div>

              <div className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">
                    Pare IMEDIATAMENTE se sentir:
                  </p>
                  <ul className="text-gray-700 space-y-1 pl-4">
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">-</span>
                      Dor intensa ou súbita
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">-</span>
                      Tontura ou falta de ar
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">-</span>
                      Formigamento nos braços
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <span className="text-purple-600 mr-2">•</span>
                <p className="text-gray-700">
                  Este app <strong>NÃO substitui</strong> tratamento médico ou fisioterapia
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-medium text-yellow-800 mb-2">Quando procurar um médico:</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <p>Dor que piora ou não melhora após 1-2 semanas</p>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <p>Dor que irradia para pernas ou braços</p>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <p>Sintomas como dormência, formigamento ou fraqueza</p>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <p>Dor acompanhada de febre, perda de peso inexplicada</p>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex items-start space-x-3">
              <div className="flex-shrink-0 pt-0.5">
                <input
                  type="checkbox"
                  id="agree"
                  checked={isAgreed}
                  onChange={handleCheckboxChange}
                  className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
              </div>
              <label htmlFor="agree" className="text-gray-700">
                Eu li e compreendo que devo consultar um profissional de saúde antes de iniciar 
                este ou qualquer programa de exercícios, especialmente se tenho condições médicas 
                pré-existentes.
              </label>
            </div>

            <div className="flex space-x-3 mt-4">
              <button
                onClick={onAccept}
                disabled={!isAgreed}
                className="flex-1 py-3 bg-purple-600 text-white rounded-lg font-medium transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Li e concordo
              </button>
              <button
                onClick={onSupport}
                className="py-3 px-4 bg-white border border-purple-300 text-purple-700 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                Falar com suporte
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MedicalDisclaimer; 