import { User, UserProgress, Exercise } from '@/types';
import { safeLocalStorage, safeGetLocalStorage } from './utils';

// Chaves de armazenamento
export const STORAGE_KEYS = {
  USER: 'yoga_app_user',
  PROGRESS: 'yoga_app_progress',
  SETTINGS: 'yoga_app_settings',
  FAVORITES: 'yoga_app_favorites',
  STATS: 'yoga_app_stats',
  CACHE_TIMESTAMP: 'yoga_app_cache_timestamp'
};

// Dados padrão
const defaultUser: User = {
  id: '1',
  name: 'Usuário',
  email: '',
  photo: '',
  onboardingCompleted: true,
  quizCompleted: true,
  disclaimerAccepted: true,
  tutorialCompleted: true
};

const defaultProgress: UserProgress = {
  completedDays: 0,
  totalMinutes: 0,
  completedExercises: [],
  streak: 0,
  achievements: [],
  lastActive: new Date().toISOString(),
  painHistory: [],
  dailyCheckins: []
};

// Cache em memória para melhorar performance
let userCache: User | null = null;
let progressCache: UserProgress | null = null;
let favoritesCache: string[] | null = null;
let statsCache: any | null = null;

/**
 * Verifica se o cache está atualizado
 */
function isCacheValid(): boolean {
  try {
    const timestamp = localStorage.getItem(STORAGE_KEYS.CACHE_TIMESTAMP);
    if (!timestamp) return false;
    
    const cacheTime = parseInt(timestamp, 10);
    const now = Date.now();
    
    // Cache válido por 5 minutos
    return now - cacheTime < 5 * 60 * 1000;
  } catch (e) {
    return false;
  }
}

/**
 * Atualiza o timestamp do cache
 */
function updateCacheTimestamp(): void {
  try {
    localStorage.setItem(STORAGE_KEYS.CACHE_TIMESTAMP, Date.now().toString());
  } catch (e) {
    console.error('Erro ao atualizar timestamp do cache:', e);
  }
}

/**
 * Limpa o cache em memória
 */
export function clearCache(): void {
  userCache = null;
  progressCache = null;
  favoritesCache = null;
  statsCache = null;
}

/**
 * Obtém os dados do usuário
 */
export function getUserData(): User {
  if (userCache && isCacheValid()) {
    return userCache;
  }
  
  const userData = safeGetLocalStorage<User>(STORAGE_KEYS.USER, defaultUser);
  userCache = userData;
  updateCacheTimestamp();
  return userData;
}

/**
 * Atualiza os dados do usuário
 */
export function updateUserData(userData: Partial<User>): boolean {
  const currentUser = getUserData();
  const updatedUser = { ...currentUser, ...userData };
  const result = safeLocalStorage(STORAGE_KEYS.USER, updatedUser);
  
  if (result) {
    userCache = updatedUser;
    updateCacheTimestamp();
  }
  
  return result;
}

/**
 * Obtém o progresso do usuário
 */
export function getUserProgress(): UserProgress {
  if (progressCache && isCacheValid()) {
    return progressCache;
  }
  
  const progress = safeGetLocalStorage<UserProgress>(STORAGE_KEYS.PROGRESS, defaultProgress);
  progressCache = progress;
  updateCacheTimestamp();
  return progress;
}

/**
 * Atualiza o progresso do usuário
 */
export function updateUserProgress(progress: Partial<UserProgress>): boolean {
  const currentProgress = getUserProgress();
  const updatedProgress = { ...currentProgress, ...progress };
  const result = safeLocalStorage(STORAGE_KEYS.PROGRESS, updatedProgress);
  
  if (result) {
    progressCache = updatedProgress;
    updateCacheTimestamp();
  }
  
  return result;
}

/**
 * Registra a conclusão de um exercício com estatísticas detalhadas
 */
export function completeExercise(exerciseId: string | number, exerciseData?: Partial<Exercise>): boolean {
  const currentProgress = getUserProgress();
  const exerciseIdStr = exerciseId.toString();
  
  // Evitar duplicações
  if (!currentProgress.completedExercises.includes(exerciseIdStr)) {
    // Estimar minutos com base nos dados do exercício ou usar valor padrão
    const minutesToAdd = exerciseData?.duration ? parseInt(exerciseData.duration, 10) : 10;
    
    // Atualizar estatísticas
    const timestamp = new Date().toISOString();
    const stats = getStats();
    
    // Adicionar entrada de exercício concluído
    stats.exerciseHistory = stats.exerciseHistory || [];
    stats.exerciseHistory.push({
      id: exerciseIdStr,
      category: exerciseData?.category || 'Outros',
      timestamp,
      duration: minutesToAdd
    });
    
    // Atualizar contadores por categoria
    if (exerciseData?.category) {
      stats.categoryCounts = stats.categoryCounts || {};
      stats.categoryCounts[exerciseData.category] = (stats.categoryCounts[exerciseData.category] || 0) + 1;
    }
    
    // Salvar estatísticas atualizadas
    safeLocalStorage(STORAGE_KEYS.STATS, stats);
    statsCache = stats;
    
    const updatedProgress = {
      ...currentProgress,
      completedExercises: [...currentProgress.completedExercises, exerciseIdStr],
      totalMinutes: currentProgress.totalMinutes + minutesToAdd,
      lastActive: timestamp,
      completedDays: updateCompletedDays(currentProgress.completedDays, currentProgress.lastActive)
    };
    
    progressCache = updatedProgress;
    return safeLocalStorage(STORAGE_KEYS.PROGRESS, updatedProgress);
  }
  
  return true;
}

/**
 * Verifica se um novo dia foi concluído e atualiza o contador
 */
function updateCompletedDays(currentDays: number, lastActiveIso: string): number {
  const lastActive = new Date(lastActiveIso);
  const today = new Date();
  
  // Verificar se o último acesso foi em um dia diferente
  if (lastActive.getDate() !== today.getDate() || 
      lastActive.getMonth() !== today.getMonth() || 
      lastActive.getFullYear() !== today.getFullYear()) {
    return currentDays + 1;
  }
  
  return currentDays;
}

/**
 * Verifica se um exercício foi completado
 */
export function isExerciseCompleted(exerciseId: string | number): boolean {
  const { completedExercises } = getUserProgress();
  return completedExercises.includes(exerciseId.toString());
}

/**
 * Reseta o progresso do usuário
 */
export function resetUserProgress(): boolean {
  // Criar um backup antes de resetar
  const currentProgress = getUserProgress();
  const backupKey = `${STORAGE_KEYS.PROGRESS}_backup_${new Date().toISOString()}`;
  safeLocalStorage(backupKey, currentProgress);
  
  progressCache = defaultProgress;
  updateCacheTimestamp();
  return safeLocalStorage(STORAGE_KEYS.PROGRESS, defaultProgress);
}

/**
 * Adiciona um exercício aos favoritos
 */
export function addToFavorites(exerciseId: string | number): boolean {
  const favorites = getFavorites();
  const exerciseIdStr = exerciseId.toString();
  
  if (!favorites.includes(exerciseIdStr)) {
    const updatedFavorites = [...favorites, exerciseIdStr];
    favoritesCache = updatedFavorites;
    return safeLocalStorage(STORAGE_KEYS.FAVORITES, updatedFavorites);
  }
  
  return true;
}

/**
 * Remove um exercício dos favoritos
 */
export function removeFromFavorites(exerciseId: string | number): boolean {
  const favorites = getFavorites();
  const exerciseIdStr = exerciseId.toString();
  const updatedFavorites = favorites.filter(id => id !== exerciseIdStr);
  
  favoritesCache = updatedFavorites;
  return safeLocalStorage(STORAGE_KEYS.FAVORITES, updatedFavorites);
}

/**
 * Obtém a lista de exercícios favoritos
 */
export function getFavorites(): string[] {
  if (favoritesCache && isCacheValid()) {
    return favoritesCache;
  }
  
  const favorites = safeGetLocalStorage<string[]>(STORAGE_KEYS.FAVORITES, []);
  favoritesCache = favorites;
  return favorites;
}

/**
 * Verifica se um exercício está nos favoritos
 */
export function isFavorite(exerciseId: string | number): boolean {
  const favorites = getFavorites();
  return favorites.includes(exerciseId.toString());
}

/**
 * Obtém estatísticas do usuário
 */
export function getStats(): any {
  if (statsCache && isCacheValid()) {
    return statsCache;
  }
  
  const stats = safeGetLocalStorage(STORAGE_KEYS.STATS, {
    exerciseHistory: [],
    categoryCounts: {},
    lastUpdated: new Date().toISOString()
  });
  
  statsCache = stats;
  return stats;
}

/**
 * Atualiza o último login do usuário e gerencia streak
 */
export function updateLastLogin(): void {
  const progress = getUserProgress();
  const now = new Date();
  const lastActive = new Date(progress.lastActive);
  
  // Calcular diferença em dias
  const diffTime = Math.abs(now.getTime() - lastActive.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  let updatedStreak = progress.streak;
  
  if (diffDays === 1) {
    // Dia consecutivo, incrementar streak
    updatedStreak += 1;
  } else if (diffDays > 1) {
    // Quebrou a sequência
    updatedStreak = 1;
  }
  
  // Se for o mesmo dia, manter o streak atual
  
  updateUserProgress({
    lastActive: now.toISOString(),
    streak: updatedStreak
  });
} 