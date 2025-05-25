import React, { ReactNode } from 'react';
import { User } from '@/types';

interface HeaderProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  user?: User;
  onProfileClick?: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  leftIcon,
  rightIcon,
  onLeftIconClick,
  onRightIconClick,
  user, 
  onProfileClick, 
  showBackButton = false,
  onBackClick
}) => {
  const isUsingLegacyApi = user !== undefined || showBackButton;
  
  const renderLeftIcon = () => {
    if (leftIcon && onLeftIconClick) {
      return (
        <button 
          onClick={onLeftIconClick} 
          className="mr-3 p-1.5 -ml-1.5 rounded-full hover:bg-purple-700"
        >
          {leftIcon}
        </button>
      );
    }
    
    if (isUsingLegacyApi && showBackButton && onBackClick) {
      return (
        <button 
          onClick={onBackClick} 
          className="mr-3 p-1.5 -ml-1.5 rounded-full hover:bg-purple-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      );
    }
    
    return null;
  };
  
  const renderRightIcon = () => {
    if (rightIcon && onRightIconClick) {
      return (
        <button 
          onClick={onRightIconClick}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-purple-500 hover:bg-purple-700 transition-colors"
        >
          {rightIcon}
        </button>
      );
    }
    
    if (isUsingLegacyApi && onProfileClick) {
      return (
        <button 
          onClick={onProfileClick}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-purple-500 hover:bg-purple-700 transition-colors"
        >
          {user?.photo ? (
            <img src={user.photo} alt={user.name} className="h-5 w-5 rounded-full" />
          ) : (
            <div className="h-5 w-5 text-white flex items-center justify-center font-bold">
              {user?.name?.charAt(0) || 'U'}
            </div>
          )}
        </button>
      );
    }
    
    return null;
  };

  return (
    <div className="bg-purple-600 sticky top-0 z-50 px-4 py-3 border-b border-purple-700 mb-4 shadow-md">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {renderLeftIcon()}
          
          {title ? (
            <h1 className="text-lg font-bold text-white">{title}</h1>
          ) : (
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Fenjes</span>
              <span className="text-xs ml-1.5 text-white font-medium">Yoga</span>
            </div>
          )}
        </div>
        
        {renderRightIcon()}
      </div>
    </div>
  );
};

export default Header; 