// Neste arquivo, definimos URLs para fotos reais de mulheres 40+ realizando os exercícios de yoga na cadeira
// Nota: Em um aplicativo real, essas imagens seriam hospedadas em um CDN e categorizadas apropriadamente
// Para este exemplo, usamos URLs públicas de imagens apropriadas

// Estrutura que mapeia o ID do exercício para a URL da foto
export const exercisePhotos: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Respiração Cervical
  2: "https://images.unsplash.com/photo-1617868186608-87ae5c6f422c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Rotação de Ombros
  3: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Torção Suave
  4: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Alongamento de Quadril
  5: "https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Flexão Lateral
  6: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Extensão de Pernas
  7: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Fortalecimento de Tornozelos
  8: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Relaxamento Guiado
};

// Tipos de corpos e idades variados para representar diversidade
export const womenPhotos = {
  // Mulheres na faixa dos 40 anos
  forties: [
    "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  ],
  
  // Mulheres na faixa dos 50 anos
  fifties: [
    "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  ],
  
  // Mulheres na faixa dos 60+ anos
  sixtyPlus: [
    "https://images.unsplash.com/photo-1581579438747-99b9d20bb900?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1566662084981-d440931036e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  ],
};

// Função para obter foto com base no ID do exercício
export function getExercisePhoto(exerciseId: number): string | undefined {
  return exercisePhotos[exerciseId];
}

// Função para obter foto aleatória de mulheres de determinada faixa etária
export function getRandomWomanPhoto(ageRange: 'forties' | 'fifties' | 'sixtyPlus'): string {
  const photos = womenPhotos[ageRange];
  const randomIndex = Math.floor(Math.random() * photos.length);
  return photos[randomIndex];
} 