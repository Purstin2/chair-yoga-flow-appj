import React from 'react';
import {
  HomeIcon,
  CalendarIcon,
  BookOpenIcon,
  MusicalNoteIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';

type View = 'dashboard' | 'program' | 'exercises' | 'exercise-detail' | 'recipes' | 'meditation' | 'profile';

interface NavigationProps {
  currentView: View;
  onTabChange: (tab: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onTabChange }) => {
  // Ícones e rótulos para cada guia
  const tabs = [
    { id: 'dashboard', label: 'Início', icon: HomeIcon },
    { id: 'program', label: 'Programa', icon: CalendarIcon },
    { id: 'exercises', label: 'Exercícios', icon: Squares2X2Icon },
    { id: 'meditation', label: 'Meditação', icon: MusicalNoteIcon },
    { id: 'recipes', label: 'Receitas', icon: BookOpenIcon },
  ] as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-100 px-4 py-2 z-50">
      <div className="max-w-md mx-auto flex justify-between">
        {tabs.map((tab) => {
          const isActive = currentView === tab.id;
          const Icon = tab.icon;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as View)}
              className={`flex flex-col items-center py-2 px-1 rounded-lg transition-colors ${
                isActive 
                  ? 'text-purple-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className={`relative ${isActive ? 'mb-0.5' : ''}`}>
                <Icon className={`h-6 w-6 ${isActive ? 'text-purple-600' : 'text-gray-500'}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-purple-600 rounded-full" />
                )}
              </div>
              <span className={`text-xs mt-1 ${isActive ? 'font-medium' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;