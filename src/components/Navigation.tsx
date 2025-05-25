import React from 'react';
import {
  HomeIcon,
  CalendarIcon,
  BookOpenIcon,
  MusicalNoteIcon,
  BeakerIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  CalendarIcon as CalendarIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  BeakerIcon as BeakerIconSolid,
  HeartIcon as HeartIconSolid
} from '@heroicons/react/24/solid';

type Tab = 'dashboard' | 'program' | 'exercises' | 'exercise-detail' | 'meditation' | 'profile' | 'nutrition';

interface NavigationProps {
  currentView: Tab;
  onTabChange: (tab: Tab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onTabChange }) => {
  // Ícones e rótulos para cada guia
  const tabs: { id: Tab; label: string; icon: JSX.Element; activeIcon: JSX.Element }[] = [
    {
      id: 'dashboard' as Tab,
      label: 'Início',
      icon: <HomeIcon className="h-6 w-6 text-white" />,
      activeIcon: <HomeIconSolid className="h-6 w-6 text-white" />
    },
    {
      id: 'program' as Tab,
      label: 'Programa',
      icon: <CalendarIcon className="h-6 w-6 text-white" />,
      activeIcon: <CalendarIconSolid className="h-6 w-6 text-white" />
    },
    {
      id: 'exercises' as Tab,
      label: 'Exercícios',
      icon: <BookOpenIcon className="h-6 w-6 text-white" />,
      activeIcon: <BookOpenIconSolid className="h-6 w-6 text-white" />
    },
    {
      id: 'nutrition' as Tab,
      label: 'Nutrição',
      icon: <BeakerIcon className="h-6 w-6 text-white" />,
      activeIcon: <BeakerIconSolid className="h-6 w-6 text-white" />
    },
    {
      id: 'meditation' as Tab,
      label: 'Meditação',
      icon: <HeartIcon className="h-6 w-6 text-white" />,
      activeIcon: <HeartIconSolid className="h-6 w-6 text-white" />
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-purple-600 border-t border-purple-700 px-2 py-1 z-50 shadow-lg" style={{ height: '70px' }}>
      <div className="h-full flex justify-around items-center">
        {tabs.map((tab) => {
          const isActive = currentView === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center h-full py-1 px-2 ${
                isActive 
                  ? 'text-white' 
                  : 'text-white/80 hover:text-white'
              }`}
              style={{ minWidth: '64px' }}
            >
              {(tab.id === 'nutrition' || tab.id === 'meditation') && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm whitespace-nowrap">
                  DESBLOQUEADO
                </div>
              )}
              <div className="mb-1">
                {isActive ? tab.activeIcon : tab.icon}
              </div>
              <span className={`text-xs text-center text-white ${isActive ? 'font-medium' : ''}`}>
                {tab.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 w-10 h-1 bg-white rounded-t-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;