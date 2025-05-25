import { supabase } from './supabase';

export type UserProgress = {
  userId: string;
  completedLessons: string[];
  currentLesson: string;
  lastAccessedAt: string;
  settings?: Record<string, any>;
}

export const userProgressService = {
  async getUserProgress(userId: string): Promise<UserProgress | null> {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('userId', userId)
      .single();
    
    if (error) {
      console.error('Error fetching user progress:', error);
      return null;
    }
    
    return data as UserProgress;
  },
  
  async saveUserProgress(progress: UserProgress): Promise<boolean> {
    const { error } = await supabase
      .from('user_progress')
      .upsert(progress, { onConflict: 'userId' });
      
    if (error) {
      console.error('Error saving user progress:', error);
      return false;
    }
    
    return true;
  },
  
  async updateCompletedLesson(userId: string, lessonId: string): Promise<boolean> {
    // First, get the current progress
    const currentProgress = await this.getUserProgress(userId);
    
    if (!currentProgress) {
      // Create new progress record
      const newProgress: UserProgress = {
        userId,
        completedLessons: [lessonId],
        currentLesson: lessonId,
        lastAccessedAt: new Date().toISOString(),
      };
      
      return this.saveUserProgress(newProgress);
    }
    
    // Update existing progress
    const completedLessons = Array.from(
      new Set([...currentProgress.completedLessons, lessonId])
    );
    
    const updatedProgress: UserProgress = {
      ...currentProgress,
      completedLessons,
      currentLesson: lessonId,
      lastAccessedAt: new Date().toISOString(),
    };
    
    return this.saveUserProgress(updatedProgress);
  },
  
  async updateUserSettings(userId: string, settings: Record<string, any>): Promise<boolean> {
    const currentProgress = await this.getUserProgress(userId);
    
    if (!currentProgress) {
      const newProgress: UserProgress = {
        userId,
        completedLessons: [],
        currentLesson: '',
        lastAccessedAt: new Date().toISOString(),
        settings,
      };
      
      return this.saveUserProgress(newProgress);
    }
    
    const updatedProgress: UserProgress = {
      ...currentProgress,
      settings: {
        ...currentProgress.settings,
        ...settings,
      },
      lastAccessedAt: new Date().toISOString(),
    };
    
    return this.saveUserProgress(updatedProgress);
  },
} 