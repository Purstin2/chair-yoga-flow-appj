
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  color: 'purple' | 'pink' | 'green' | 'yellow';
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  icon: Icon, 
  title, 
  value, 
  subtitle, 
  color 
}) => {
  const colorClasses = {
    purple: 'from-purple-500 to-purple-600 text-purple-600',
    pink: 'from-pink-500 to-pink-600 text-pink-600',
    green: 'from-green-500 to-green-600 text-green-600',
    yellow: 'from-yellow-500 to-yellow-600 text-yellow-600',
  };

  return (
    <div className="gradient-card rounded-2xl p-4 shadow-lg">
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClasses[color].split(' ')[0]} ${colorClasses[color].split(' ')[1]} flex items-center justify-center mb-3`}>
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
      <p className={`text-2xl font-bold ${colorClasses[color].split(' ')[2]} mb-1`}>
        {value}
      </p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
};

export default StatsCard;
