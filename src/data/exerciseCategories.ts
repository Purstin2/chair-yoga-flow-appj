// Importação é movida para os componentes que usam os ícones
export type IconType = 
  | 'activity'
  | 'heart'
  | 'award'
  | 'rotate'
  | 'refresh'
  | 'smile'
  | 'sun'
  | 'moon'
  | 'move'
  | 'wind';

// Define os tipos para as categorias
export interface CategoryInfo {
  color: string;
  icon: IconType;
  description: string;
}

export const exerciseCategories: Record<string, CategoryInfo> = {
  'Cervical': {
    color: '#7432B4',
    icon: 'activity',
    description: 'Pescoço e base do crânio'
  },
  'Ombros': {
    color: '#9747FF',
    icon: 'move',
    description: 'Ombros e trapézio'
  },
  'Lombar': {
    color: '#EC4899', 
    icon: 'activity',
    description: 'Costas e postura'
  },
  'Quadril': {
    color: '#F59E0B',
    icon: 'move',
    description: 'Quadril e pélvis'
  },
  'Respiração': {
    color: '#22C55E',
    icon: 'wind',
    description: 'Sistema nervoso'
  },
  'Alívio Cervical': {
    color: '#7432B4',
    icon: 'heart',
    description: 'Pescoço e base do crânio'
  },
  'Liberação Lombar': {
    color: '#EC4899',
    icon: 'sun',
    description: 'Costas e postura'
  },
  'Fortalecimento': {
    color: '#9747FF',
    icon: 'award',
    description: 'Músculos e estabilidade'
  },
  'Alongamento': {
    color: '#22C55E',
    icon: 'refresh',
    description: 'Flexibilidade e mobilidade'
  },
  'Mobilidade Geral': {
    color: '#F59E0B',
    icon: 'rotate',
    description: 'Articulações e movimento'
  },
  'Respiração Terapêutica': {
    color: '#22C55E',
    icon: 'wind',
    description: 'Respiração consciente'
  },
  'Meditação': {
    color: '#8B5CF6',
    icon: 'moon',
    description: 'Foco e calma mental'
  },
  'Relaxamento': {
    color: '#06B6D4',
    icon: 'smile',
    description: 'Diminuição do estresse'
  }
};

export const getCategoryColor = (category: string): string => {
  return exerciseCategories[category]?.color || '#7432B4';
};

export const getCategoryIcon = (category: string): IconType => {
  return exerciseCategories[category]?.icon || 'activity';
};

export const getCategoryDescription = (category: string): string => {
  return exerciseCategories[category]?.description || 'Exercício de yoga';
}; 