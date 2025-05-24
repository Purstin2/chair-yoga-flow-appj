export interface User {
  id: string;
  name: string;
  email: string;
  photo: string;
  password?: string;
}

export interface UserProgress {
  completedDays: number;
  totalMinutes: number;
  completedExercises: string[];
  lastExerciseDate?: string;
  streak: number;
  achievements: string[];
  lastActive: string;
}

export interface Exercise {
  id: number;
  name: string;
  duration: string;
  difficulty: 'Fácil' | 'Médio';
  category: string;
  description: string;
  benefits: string;
  instructions: string[];
  detailedInstructions: {
    position: string;
    movement: string;
    breathing: string;
    benefit: string;
    caution: string;
  };
  icon: string;
  targetAreas: string[];
  adaptations: {
    pain: string[];
    tired: string[];
    energized: string[];
  };
}

export interface Recipe {
  id: number;
  name: string;
  time: string;
  servings: number;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  category: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  benefits: string;
}

export interface Meditation {
  id: number;
  name: string;
  duration: string;
  category: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  image: string;
  description: string;
  benefits: string;
  audioGuide: string;
}

export interface Day {
  date: Date;
  isActive: boolean;
  isCompleted: boolean;
  exercises: Exercise[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  isUnlocked: boolean;
} 