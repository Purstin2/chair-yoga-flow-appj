import React from 'react';
import { CheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface CompletionDialogProps {
  onConfirm: () => void;
  onReject: () => void;
}

const CompletionDialog: React.FC<CompletionDialogProps> = ({ onConfirm, onReject }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-sm w-full p-6 shadow-lg">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckIcon className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Exercício Finalizado!</h3>
          <p className="text-gray-600">Você concluiu com sucesso este exercício?</p>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          <button 
            onClick={onConfirm}
            className="w-full py-3 bg-purple-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors hover:bg-purple-700"
          >
            <CheckIcon className="h-5 w-5" />
            Sim, concluí
          </button>
          
          <button 
            onClick={onReject}
            className="w-full py-3 bg-gray-200 text-gray-800 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors hover:bg-gray-300"
          >
            <ArrowPathIcon className="h-5 w-5" />
            Não, refazer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionDialog; 