
import React from 'react';
import { 
  HomeIcon, 
  CalendarIcon, 
  HeartIcon, 
  BookOpenIcon,
  UserIcon 
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  CalendarIcon as CalendarIconSolid,
  HeartIcon as HeartIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  UserIcon as UserIconSolid
} from '@heroicons/react/24/solid';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { 
      id: 'home', 
      icon: HomeIcon, 
      iconSolid: HomeIconSolid,
      label: 'Início' 
    },
    { 
      id: 'program', 
      icon: CalendarIcon, 
      iconSolid: CalendarIconSolid,
      label: 'Programa' 
    },
    { 
      id: 'exercises', 
      icon: HeartIcon, 
      iconSolid: HeartIconSolid,
      label: 'Exercícios' 
    },
    { 
      id: 'recipes', 
      icon: BookOpenIcon, 
      iconSolid: BookOpenIconSolid,
      label: 'Receitas' 
    },
    { 
      id: 'meditation', 
      icon: HeartIcon, 
      iconSolid: HeartIconSolid,
      label: 'Meditação' 
    },
    { 
      id: 'profile', 
      icon: UserIcon, 
      iconSolid: UserIconSolid,
      label: 'Perfil' 
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-6 py-2">
        {tabs.map(({ id, icon: Icon, iconSolid: IconSolid, label }) => {
          const isActive = activeTab === id;
          const ActiveIcon = isActive ? IconSolid : Icon;
          
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex flex-col items-center py-2 px-1 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-purple-600 bg-purple-50 transform scale-105'
                  : 'text-gray-500 hover:text-purple-500 hover:bg-gray-50'
              }`}
            >
              <ActiveIcon className="h-5 w-5" />
              <span className="text-xs mt-1 font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
