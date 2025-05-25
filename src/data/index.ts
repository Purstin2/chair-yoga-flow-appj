import videoExercises from './videoExercises';
import additionalExercises from './additionalExercises';
import { Exercise } from '@/types';

// Combinar todos os exercícios em uma única coleção
const allExercises: Exercise[] = [
  ...videoExercises,
  ...additionalExercises
];

export {
  videoExercises,
  additionalExercises,
  allExercises
}; 