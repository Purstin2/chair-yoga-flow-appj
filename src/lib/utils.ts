import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina classes do Tailwind usando clsx e tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formata um tempo em segundos para o formato MM:SS
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Atrasa a execução por um tempo específico
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Gera uma string de ID única
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

/**
 * Extrai o ID de um vídeo do YouTube a partir de diferentes formatos de URL
 */
export function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  
  let videoId: string | null = null;
  
  try {
    // Formato watch?v=
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      videoId = urlParams.get('v');
    } 
    // Formato youtu.be/ID
    else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } 
    // Formato embed/ID
    else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('youtube.com/embed/')[1].split('?')[0];
    }
    
    return videoId;
  } catch (error) {
    console.error('Erro ao extrair ID do YouTube:', error);
    return null;
  }
}

/**
 * Obtém a URL da miniatura do YouTube
 */
export function getYouTubeThumbnail(url: string): string {
  const videoId = extractYouTubeId(url);
  
  if (!videoId) {
    return 'https://via.placeholder.com/480x360?text=Video+não+disponível';
  }
  
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

/**
 * Armazena um item no localStorage com tratamento de erros
 */
export function safeLocalStorage<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Erro ao salvar no localStorage (${key}):`, error);
    return false;
  }
}

/**
 * Recupera um item do localStorage com tratamento de erros
 */
export function safeGetLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Erro ao ler do localStorage (${key}):`, error);
    return defaultValue;
  }
}

/**
 * Limita uma string a um número máximo de caracteres
 */
export function truncateString(str: string, maxLength: number): string {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength) + '...';
}

/**
 * Formata uma data para o formato brasileiro
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

/**
 * Debounce uma função
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle uma função
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Função para gerar uma cor baseada no texto
export function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 70%, 60%)`;
}

// Função para verificar se um dia é hoje
export function isToday(date: Date): boolean {
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
}

// Função para calcular dias entre datas
export function daysBetween(date1: Date, date2: Date): number {
  const oneDay = 24 * 60 * 60 * 1000; // milissegundos em um dia
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.round(diffTime / oneDay);
}

// Função para truncar texto
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}
