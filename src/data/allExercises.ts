import { Exercise } from '@/types';
import { exercises } from './exercises'; // Exercícios originais
import { chairYogaExercises } from './chairYogaExercises'; // Novos exercícios de yoga em cadeira
import { scientificExercises } from './scientificExercises'; // Exercícios científicos existentes
import videoExercises from './videoExercises'; // Exercícios em formato de vídeo

// Verifica se um exercício é baseado em vídeo (para fins de separação na interface)
export const isVideoExercise = (exercise: Exercise): boolean => {
  return Boolean(exercise.isVideoExercise);
};

// Unifica todos os exercícios não-vídeo
export const getAllNonVideoExercises = (): Exercise[] => {
  const allExercises = [...exercises, ...scientificExercises, ...chairYogaExercises];
  return allExercises.filter(exercise => !isVideoExercise(exercise));
};

// Obtém apenas exercícios de vídeo
export const getVideoExercises = (): Exercise[] => {
  const allExercises = [...exercises, ...scientificExercises, ...videoExercises];
  return allExercises.filter(isVideoExercise);
};

// Exporta todos os exercícios unificados
export const allExercises = [
  ...exercises,
  ...scientificExercises,
  ...chairYogaExercises,
  ...videoExercises
]; 