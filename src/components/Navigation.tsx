
import React from 'react';
import { Home, Calendar, ChefHat, User } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Início' },
    { id: 'program', icon: Calendar, label: 'Programa' },
    { id: 'recipes', icon: ChefHat, label: 'Receitas' },
    { id: 'profile', icon: User, label: 'Perfil' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 gradient-card border-t border-white/20">
      <div className="max-w-md mx-auto flex justify-around py-2">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
              activeTab === id
                ? 'text-purple-600 transform scale-105'
                : 'text-gray-500 hover:text-purple-500'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1 font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
