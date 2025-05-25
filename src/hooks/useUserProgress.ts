import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { userProgressService, UserProgress } from '@/lib/userProgress';

export function useUserProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserProgress() {
      if (!user) {
        setProgress(null);
        setLoading(false);
        return;
      }

      try {
        const userProgress = await userProgressService.getUserProgress(user.id);
        setProgress(userProgress);
      } catch (error) {
        console.error('Error loading user progress:', error);
      } finally {
        setLoading(false);
      }
    }

    loadUserProgress();
  }, [user]);

  const updateProgress = async (newProgress: Partial<UserProgress>) => {
    if (!user || !progress) return false;

    const updatedProgress: UserProgress = {
      ...progress,
      ...newProgress,
      userId: user.id,
      lastAccessedAt: new Date().toISOString(),
    };

    const success = await userProgressService.saveUserProgress(updatedProgress);
    
    if (success) {
      setProgress(updatedProgress);
    }

    return success;
  };

  const completeLesson = async (lessonId: string) => {
    if (!user) return false;
    
    const success = await userProgressService.updateCompletedLesson(user.id, lessonId);
    
    if (success && progress) {
      // Update local state with new completed lesson
      const completedLessons = Array.from(
        new Set([...(progress.completedLessons || []), lessonId])
      );
      
      setProgress({
        ...progress,
        completedLessons,
        currentLesson: lessonId,
        lastAccessedAt: new Date().toISOString(),
      });
    }
    
    return success;
  };

  const updateSettings = async (settings: Record<string, any>) => {
    if (!user) return false;
    
    const success = await userProgressService.updateUserSettings(user.id, settings);
    
    if (success && progress) {
      setProgress({
        ...progress,
        settings: {
          ...(progress.settings || {}),
          ...settings,
        },
        lastAccessedAt: new Date().toISOString(),
      });
    }
    
    return success;
  };

  return {
    progress,
    loading,
    updateProgress,
    completeLesson,
    updateSettings,
    isLessonCompleted: (lessonId: string) => 
      progress?.completedLessons?.includes(lessonId) || false,
  };
} 