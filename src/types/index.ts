export interface User {
  id: string;
  name: string;
  email: string;
  photo: string;
  password?: string;
  age?: string;
  medicalConditions?: string[];
  painAreas?: string[];
  availableTime?: string;
  onboardingCompleted?: boolean;
  quizCompleted?: boolean;
  disclaimerAccepted?: boolean;
  tutorialCompleted?: boolean;
}

export interface UserProgress {
  completedDays: number;
  totalMinutes: number;
  completedExercises: string[];
  lastExerciseDate?: string;
  streak: number;
  achievements: string[];
  lastActive: string;
  painHistory?: PainHistoryEntry[];
  dailyCheckins?: DailyCheckin[];
}

export interface PainHistoryEntry {
  date: string;
  painLevel: number;
  painAreas: string[];
}

export interface DailyCheckin {
  date: string;
  painBefore: number;
  painAfter: number;
  energy: string;
  mood: string;
  exercises: string[];
}

export interface UserQuizData {
  age: string;
  activityLevel: string;
  painAreas: string[];
  availableTime: string;
  healthConditions: string[];
  medication: boolean;
  previousInjury: boolean;
}

export interface Exercise {
  id: number;
  name: string;
  duration: string; // in minutes
  difficulty: 'Fácil' | 'Médio';
  category: string;
  description: string;
  benefits: string;
  purposePoints: string[]; // "PARA QUE SERVE" bullets
  instructions: string[];
  detailedInstructions: {
    position: string;
    movement: string;
    breathing: string;
    benefit: string;
    caution: string;
  };
  icon: string;
  photoUrl?: string; // URL to real photo of woman doing exercise
  targetAreas: string[];
  adaptations: {
    pain: string[];
    tired: string[];
    energized: string[];
  };
  specialTip?: string; // Dica especial for the exercise
  cautions: string[]; // List of caution points
  audioInstructions?: string[]; // Audio instructions for each step
  hasWarning?: boolean; // If exercise needs special medical warning
  warningText?: string; // Specific warning text
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