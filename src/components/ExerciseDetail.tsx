
import React, { useState } from 'react';
import { ArrowLeft, Clock, Target, CheckCircle } from 'lucide-react';

interface Exercise {
  id: number;
  name: string;
  duration: string;
  difficulty: 'Fácil' | 'Médio';
  category: string;
  description: string;
  benefits: string;
  instructions: string[];
  icon: string;
}

interface ExerciseDetailProps {
  exercise: Exercise;
  isCompleted: boolean;
  onBack: () => void;
  onComplete: () => void;
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({
  exercise,
  isCompleted,
  onBack,
  onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    if (currentStep < exercise.instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const difficultyColor = exercise.difficulty === 'Fácil' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
  const categoryColors = {
    'Respiração': 'bg-blue-100 text-blue-700',
    'Mobilidade': 'bg-purple-100 text-purple-700',
    'Alívio de Dor': 'bg-red-100 text-red-700',
    'Relaxamento': 'bg-green-100 text-green-700',
    'Fortalecimento': 'bg-orange-100 text-orange-700',
  };

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 hover:bg-white/50 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-purple-700" />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-purple-900">
            {exercise.name}
          </h1>
        </div>
        {isCompleted && (
          <CheckCircle className="text-green-500 ml-2" size={24} />
        )}
      </div>

      {/* Exercise Icon */}
      <div className="text-center mb-6">
        <div className="w-24 h-24 gradient-primary rounded-3xl flex items-center justify-center text-4xl text-white mx-auto mb-4">
          {exercise.icon}
        </div>
      </div>

      {/* Exercise Info */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-600">{exercise.duration}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColor}`}>
            {exercise.difficulty}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[exercise.category as keyof typeof categoryColors]}`}>
            {exercise.category}
          </span>
        </div>
        
        <p className="text-purple-700 mb-4 leading-relaxed">
          {exercise.description}
        </p>
        
        <div className="bg-purple-50 rounded-xl p-3">
          <h4 className="font-semibold text-purple-900 mb-2">Benefícios:</h4>
          <p className="text-sm text-purple-700">{exercise.benefits}</p>
        </div>
      </div>

      {/* Exercise Instructions */}
      {isStarted ? (
        <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-purple-900">Passo a Passo</h3>
            <span className="text-sm text-purple-600">
              {currentStep + 1} de {exercise.instructions.length}
            </span>
          </div>
          
          <div className="w-full bg-purple-100 rounded-full h-2 mb-4">
            <div 
              className="gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / exercise.instructions.length) * 100}%` }}
            />
          </div>
          
          <div className="bg-white rounded-xl p-4 mb-4 border border-purple-100">
            <p className="text-purple-900 leading-relaxed">
              {exercise.instructions[currentStep]}
            </p>
          </div>
          
          <button
            onClick={handleNextStep}
            className="w-full gradient-primary text-white py-3 rounded-xl font-medium hover:scale-105 transition-transform"
          >
            {currentStep < exercise.instructions.length - 1 ? 'Próximo Passo' : 'Finalizar Exercício'}
          </button>
        </div>
      ) : (
        <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
          <h3 className="font-semibold text-purple-900 mb-4">Instruções</h3>
          <div className="space-y-3 mb-6">
            {exercise.instructions.map((instruction, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <p className="text-purple-700 text-sm leading-relaxed">{instruction}</p>
              </div>
            ))}
          </div>
          
          {!isCompleted ? (
            <button
              onClick={handleStart}
              className="w-full gradient-primary text-white py-4 rounded-xl font-medium text-lg hover:scale-105 transition-transform"
            >
              Iniciar Exercício
            </button>
          ) : (
            <div className="text-center py-4">
              <CheckCircle className="text-green-500 mx-auto mb-2" size={32} />
              <p className="text-green-700 font-medium">Exercício Concluído!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExerciseDetail;
