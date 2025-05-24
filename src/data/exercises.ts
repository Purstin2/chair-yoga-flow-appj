
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

export const exercises: Exercise[] = [
  {
    id: 1,
    name: 'Respiração Cervical',
    duration: '3',
    difficulty: 'Fácil',
    category: 'Respiração',
    description: 'Técnica suave de respiração para aliviar tensão na região cervical e pescoço.',
    benefits: 'Reduz dores de cabeça, diminui tensão no pescoço e melhora a concentração.',
    instructions: [
      'Sente-se confortavelmente na cadeira com os pés apoiados no chão',
      'Coloque uma mão no peito e outra na barriga',
      'Inspire lentamente pelo nariz, sentindo a barriga expandir',
      'Mantenha os ombros relaxados durante toda a respiração',
      'Expire suavemente pela boca, liberando toda a tensão',
      'Repita por 3 minutos, focando na área do pescoço'
    ],
    detailedInstructions: {
      position: 'Sentada, costas retas, pés no chão',
      movement: 'Rotação suave da cabeça com respiração',
      breathing: '4 tempos para inspirar, 6 para expirar',
      benefit: 'Alívio imediato da tensão cervical',
      caution: 'Não force movimentos, mantenha suavidade'
    },
    icon: '🫁',
    targetAreas: ['Pescoço', 'Cervical', 'Cabeça'],
    adaptations: {
      pain: ['Movimentos ainda mais lentos', 'Respiração mais profunda'],
      tired: ['Foco na respiração relaxante', 'Menos repetições'],
      energized: ['Respiração mais dinâmica', 'Pequenas rotações cervicais']
    }
  },
  {
    id: 2,
    name: 'Rotação de Ombros',
    duration: '2',
    difficulty: 'Fácil',
    category: 'Mobilidade',
    description: 'Movimentos circulares suaves para soltar a musculatura dos ombros.',
    benefits: 'Alivia rigidez dos ombros, melhora circulação e reduz tensão acumulada.',
    instructions: [
      'Mantenha a postura ereta na cadeira',
      'Eleve os ombros em direção às orelhas',
      'Rode os ombros para trás em movimentos circulares',
      'Mantenha o movimento lento e controlado',
      'Faça 5 rotações para trás, depois 5 para frente',
      'Termine com os ombros relaxados e soltos'
    ],
    detailedInstructions: {
      position: 'Braços relaxados ao lado do corpo',
      movement: 'Círculos amplos para trás e frente',
      breathing: 'Natural e constante durante movimento',
      benefit: 'Reduz rigidez e melhora mobilidade',
      caution: 'Movimentos lentos, sem pressa'
    },
    icon: '🤸',
    targetAreas: ['Ombros', 'Trapézio', 'Deltóides'],
    adaptations: {
      pain: ['Círculos menores', 'Movimento mais lento'],
      tired: ['Apenas rotações para trás', 'Menos repetições'],
      energized: ['Círculos maiores', 'Incluir elevação dos braços']
    }
  },
  {
    id: 3,
    name: 'Torção Suave',
    duration: '4',
    difficulty: 'Fácil',
    category: 'Mobilidade',
    description: 'Rotação controlada da coluna vertebral para melhorar flexibilidade.',
    benefits: 'Aumenta mobilidade da coluna, massageia órgãos internos e reduz rigidez.',
    instructions: [
      'Sente-se no meio da cadeira com as costas retas',
      'Coloque a mão direita no joelho esquerdo',
      'Gire suavemente o tronco para a esquerda',
      'Mantenha a posição por 30 segundos respirando calmamente',
      'Volte ao centro lentamente',
      'Repita o movimento para o lado direito'
    ],
    detailedInstructions: {
      position: 'Sentada, pés no chão, coluna ereta',
      movement: 'Giro suave do tronco direita/esquerda',
      breathing: 'Expire ao girar, inspire ao voltar',
      benefit: 'Flexibilidade da coluna vertebral',
      caution: 'Não gire além do conforto natural'
    },
    icon: '🌀',
    targetAreas: ['Coluna', 'Oblíquos', 'Quadris'],
    adaptations: {
      pain: ['Torção mais suave', 'Menor amplitude'],
      tired: ['Apenas pequenas torções', 'Foco na respiração'],
      energized: ['Maior amplitude', 'Adicionar elevação dos braços']
    }
  },
  {
    id: 4,
    name: 'Alongamento Lombar',
    duration: '5',
    difficulty: 'Médio',
    category: 'Alívio de Dor',
    description: 'Série de movimentos para fortalecer e alongar a região lombar.',
    benefits: 'Fortalece músculos das costas, alivia dor lombar e melhora postura.',
    instructions: [
      'Incline-se levemente para frente mantendo as costas retas',
      'Coloque as mãos nos joelhos para apoio',
      'Arqueie suavemente as costas para cima como um gato',
      'Depois, arqueie para baixo criando uma curva lombar',
      'Mantenha cada posição por 10 segundos',
      'Repita o movimento 10 vezes lentamente'
    ],
    detailedInstructions: {
      position: 'Sentada na borda da cadeira',
      movement: 'Flexão e extensão da coluna lombar',
      breathing: 'Inspire ao estender, expire ao flexionar',
      benefit: 'Fortalecimento e alívio lombar',
      caution: 'Movimentos controlados, sem força excessiva'
    },
    icon: '💆',
    targetAreas: ['Lombar', 'Músculos paravertebrais', 'Core'],
    adaptations: {
      pain: ['Amplitude reduzida', 'Movimentos mais lentos'],
      tired: ['Apenas movimento suave', 'Menos repetições'],
      energized: ['Maior amplitude', 'Adicionar rotação pélvica']
    }
  },
  {
    id: 5,
    name: 'Mobilidade de Quadril',
    duration: '4',
    difficulty: 'Médio',
    category: 'Mobilidade',
    description: 'Exercícios para aumentar a flexibilidade e amplitude de movimento do quadril.',
    benefits: 'Melhora circulação nas pernas, reduz rigidez do quadril e alivia tensão lombar.',
    instructions: [
      'Sente-se na borda da cadeira',
      'Eleve o joelho direito em direção ao peito',
      'Segure com as duas mãos por 15 segundos',
      'Solte e faça pequenos círculos com o joelho',
      'Repita com a perna esquerda',
      'Termine com movimentos suaves de balanceio'
    ],
    detailedInstructions: {
      position: 'Borda da cadeira, um pé no chão',
      movement: 'Elevação e círculos com joelhos',
      breathing: 'Profunda durante alongamento',
      benefit: 'Amplitude de movimento do quadril',
      caution: 'Não force além do confortável'
    },
    icon: '🦵',
    targetAreas: ['Quadris', 'Flexores', 'Glúteos'],
    adaptations: {
      pain: ['Elevação menor do joelho', 'Sem círculos'],
      tired: ['Apenas elevação simples', 'Apoio com as mãos'],
      energized: ['Círculos maiores', 'Alternar pernas rapidamente']
    }
  },
  {
    id: 6,
    name: 'Meditação Postural',
    duration: '3',
    difficulty: 'Fácil',
    category: 'Relaxamento',
    description: 'Prática meditativa focada na consciência corporal e alinhamento postural.',
    benefits: 'Desenvolve consciência corporal, reduz estresse e melhora alinhamento natural.',
    instructions: [
      'Sente-se com a coluna ereta mas relaxada',
      'Feche os olhos suavemente',
      'Escaneie seu corpo da cabeça aos pés',
      'Notice qualquer tensão e respire para essas áreas',
      'Visualize uma linha dourada alinhando sua coluna',
      'Termine com três respirações profundas'
    ],
    detailedInstructions: {
      position: 'Postura meditativa na cadeira',
      movement: 'Apenas respiração e consciência',
      breathing: 'Lenta, profunda e consciente',
      benefit: 'Relaxamento profundo e postura',
      caution: 'Não force postura, mantenha natural'
    },
    icon: '🧘',
    targetAreas: ['Mente', 'Postura', 'Sistema nervoso'],
    adaptations: {
      pain: ['Foco no relaxamento das áreas tensas'],
      tired: ['Ênfase no relaxamento profundo'],
      energized: ['Foco na consciência postural ativa']
    }
  }
];
