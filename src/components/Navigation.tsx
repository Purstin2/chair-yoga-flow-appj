import React from 'react';
import {
  HomeIcon,
  CalendarIcon,
  BookOpenIcon,
  MusicalNoteIcon,
  Squares2X2Icon,
  BeakerIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  CalendarIcon as CalendarIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  BeakerIcon as BeakerIconSolid,
  HeartIcon as HeartIconSolid,
  Squares2X2Icon as Squares2X2IconSolid
} from '@heroicons/react/24/solid';

type Tab = 'dashboard' | 'program' | 'exercises' | 'exercise-detail' | 'recipes' | 'meditation' | 'profile' | 'nutrition';

interface NavigationProps {
  currentView: string;
  onTabChange: (tab: Tab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onTabChange }) => {
  // Ícones e rótulos para cada guia
  const tabs: { id: Tab; label: string; icon: JSX.Element; activeIcon: JSX.Element }[] = [
    {
      id: 'dashboard' as Tab,
      label: 'Início',
      icon: <HomeIcon className="h-6 w-6" />,
      activeIcon: <HomeIconSolid className="h-6 w-6" />
    },
    {
      id: 'program' as Tab,
      label: 'Programa',
      icon: <CalendarIcon className="h-6 w-6" />,
      activeIcon: <CalendarIconSolid className="h-6 w-6" />
    },
    {
      id: 'exercises' as Tab,
      label: 'Exercícios',
      icon: <BookOpenIcon className="h-6 w-6" />,
      activeIcon: <BookOpenIconSolid className="h-6 w-6" />
    },
    {
      id: 'nutrition' as Tab,
      label: 'Nutrição',
      icon: <BeakerIcon className="h-6 w-6" />,
      activeIcon: <BeakerIconSolid className="h-6 w-6" />
    },
    {
      id: 'meditation' as Tab,
      label: 'Meditação',
      icon: <HeartIcon className="h-6 w-6" />,
      activeIcon: <HeartIconSolid className="h-6 w-6" />
    },
    {
      id: 'recipes' as Tab,
      label: 'Receitas',
      icon: <Squares2X2Icon className="h-6 w-6" />,
      activeIcon: <Squares2X2IconSolid className="h-6 w-6" />
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-100 px-4 py-2 z-50">
      <div className="max-w-md mx-auto flex justify-between">
        {tabs.map((tab) => {
          const isActive = currentView === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-1 rounded-lg transition-colors ${
                isActive 
                  ? 'text-purple-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className={`relative ${isActive ? 'mb-0.5' : ''}`}>
                {isActive ? tab.activeIcon : tab.icon}
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