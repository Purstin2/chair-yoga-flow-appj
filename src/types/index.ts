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
  difficulty?: 'easy' | 'challenging' | 'hard';
  notes?: string;
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
  scientificData?: ExerciseScientificData; // Scientific data
  executionSteps?: { step: number; instruction: string; duration: number }[]; // Detailed step-by-step with timing
  targetArea?: string; // Primary target area (e.g., "C1-C7, Suboccipitais")
  contraindications?: string[]; // Specific contraindications
  scientificBasis?: string[]; // Scientific research basis
  modifications?: {
    pain: string;
    tired: string;
    energized: string;
  };
  evidenceLevel?: 'A' | 'B' | 'C'; // Evidence level (A: strongest, C: limited)
  videoUrl?: string; // URL do vídeo do YouTube
  isVideoExercise?: boolean; // Indica se é um exercício baseado em vídeo
  videoSource?: string; // Fonte do vídeo (ex: "YouTube")
  videoAuthor?: string; // Autor/canal do vídeo
  videoDescription?: string; // Descrição específica do vídeo
}

export interface ExerciseProgress {
  exerciseId: number;
  completedAt: string;
  painBefore: number; // 1-10
  painAfter: number;  // 1-10
  difficulty: 'easy' | 'challenging' | 'hard';
  notes?: string;
  skippedSteps?: number[];
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
  scientificBenefits: string[]; // Scientific evidence-based benefits
  contraindications: string[]; // Who should avoid this recipe
  adaptations: Record<string, string>; // Adaptations for specific conditions
  prepTime: number; // in minutes
  specialTip?: string; // Special preparation or consumption tip
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

export interface ExerciseScientificData {
  initialPosition: string;
  targetMuscles: string[];
  scientificBasis: string[];
  expectedResults: string[];
  adaptations: Record<string, string>;
  repetitions?: string;
  sets?: string;
  contraindicatedFor?: string[];
}

export interface RecipeCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
} 