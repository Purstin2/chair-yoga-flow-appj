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
    <div className="bg-white/95 backdrop-blur-lg sticky top-0 z-50 px-4 py-3 border-b border-purple-100 mb-4">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {showBackButton && onBackClick && (
            <button 
              onClick={onBackClick} 
              className="mr-3 p-1.5 -ml-1.5 rounded-full hover:bg-purple-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {title ? (
            <h1 className="text-lg font-bold text-gray-900">{title}</h1>
          ) : (
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Fenjes</span>
              <span className="text-xs ml-1.5 text-pink-600 font-medium">Yoga</span>
            </div>
          )}
        </div>
        
        <button 
          onClick={onProfileClick}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-purple-100 hover:bg-purple-200 transition-colors"
        >
          {user?.photo ? (
            <span className="text-lg">{user.photo}</span>
          ) : (
            <UserIcon className="h-5 w-5 text-purple-700" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header; 