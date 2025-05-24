import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import { User } from '@/types';

interface HeaderProps {
  user: User;
  onProfileClick: () => void;
  title?: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  user, 
  onProfileClick, 
  title, 
  showBackButton = false,
  onBackClick
}) => {
  return (
    <div className="bg-purple-600 sticky top-0 z-50 px-4 py-3 border-b border-purple-700 mb-4 shadow-md">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {showBackButton && onBackClick && (
            <button 
              onClick={onBackClick} 
              className="mr-3 p-1.5 -ml-1.5 rounded-full hover:bg-purple-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {title ? (
            <h1 className="text-lg font-bold text-white">{title}</h1>
          ) : (
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Fenjes</span>
              <span className="text-xs ml-1.5 text-white font-medium">Yoga</span>
            </div>
          )}
        </div>
        
        <button 
          onClick={onProfileClick}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-purple-500 hover:bg-purple-700 transition-colors"
        >
          {user?.photo ? (
            <UserIcon className="h-5 w-5 text-white" />
          ) : (
            <UserIcon className="h-5 w-5 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header; 