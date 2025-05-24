import { Exercise } from '@/types';
import { getExercisePhoto } from './exercisePhotos';

export const exercises: Exercise[] = [
  {
    id: 1,
    name: 'Respiração Cervical',
    duration: '3',
    difficulty: 'Fácil',
    category: 'Respiração',
    description: 'Exercício de respiração profunda combinado com movimentos suaves do pescoço para aliviar tensão na região cervical.',
    benefits: 'Reduz tensão no pescoço e ombros, alivia dores de cabeça tensionais, melhora a postura e promove relaxamento.',
    purposePoints: [
      'Reduz tensão na nuca e pescoço',
      'Alivia dor de cabeça',
      'Melhora circulação cerebral',
      'Diminui ansiedade'
    ],
    instructions: [
      'Sente-se ereta na cadeira com os pés apoiados no chão',
      'Relaxe completamente os ombros',
      'Inspire profundamente pelo nariz por 4 segundos',
      'Segure a respiração por 2 segundos',
      'Expire lentamente pela boca por 6 segundos',
      'Ao inspirar, levante suavemente o queixo',
      'Ao expirar, abaixe o queixo em direção ao peito',
      'Continue por 3 minutos com movimentos lentos e controlados'
    ],
    detailedInstructions: {
      position: 'Sentada na cadeira, coluna ereta, pés apoiados no chão, ombros relaxados',
      movement: 'Movimentos suaves do pescoço sincronizados com a respiração',
      breathing: 'Respiração profunda, lenta e controlada (4-2-6)',
      benefit: 'Alivia tensão cervical, reduz dores de cabeça, diminui ansiedade',
      caution: 'Não force o pescoço, evite movimentos bruscos'
    },
    icon: '🧘‍♀️',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Pescoço', 'Ombros', 'Cabeça'],
    adaptations: {
      pain: [
        'Reduza a amplitude do movimento',
        'Mantenha o olhar para frente se sentir tontura'
      ],
      tired: [
        'Reduza para 1-2 minutos',
        'Elimine o movimento do pescoço, foque apenas na respiração'
      ],
      energized: [
        'Aumente para 5 minutos',
        'Adicione movimentos suaves de rotação do pescoço'
      ]
    },
    specialTip: 'Feche os olhos e imagine o ar limpando toda tensão do seu pescoço e ombros, visualizando uma luz azul calmante nesta área.',
    cautions: [
      'Não force a respiração',
      'Se ficar tonta, respire normal',
      'Pare se sentir desconforto'
    ],
    audioInstructions: [
      'Sente-se confortavelmente na cadeira',
      'Respire fundo pelo nariz, enchendo o peito',
      'Agora solte o ar pela boca, relaxando completamente',
      'Continue assim, no seu ritmo'
    ],
    hasWarning: false
  },
  {
    id: 2,
    name: 'Rotação de Ombros',
    duration: '2',
    difficulty: 'Fácil',
    category: 'Mobilidade',
    description: 'Movimentos circulares dos ombros para aliviar tensão na parte superior do corpo e melhorar a circulação.',
    benefits: 'Alivia dores nos ombros, melhora a mobilidade da cintura escapular, reduz tensão na região do trapézio.',
    purposePoints: [
      'Libera tensão nos ombros e pescoço',
      'Melhora a mobilidade da cintura escapular',
      'Alivia dores causadas pela má postura',
      'Prepara para outros exercícios'
    ],
    instructions: [
      'Sente-se ereta com os pés apoiados no chão',
      'Deixe os braços relaxados ao lado do corpo',
      'Inspire e eleve os ombros em direção às orelhas',
      'Expire e mova os ombros para trás',
      'Continue o movimento circular, levando os ombros para baixo',
      'Complete o círculo trazendo os ombros para frente',
      'Repita 10 vezes nesta direção',
      'Inverta o sentido e faça mais 10 rotações'
    ],
    detailedInstructions: {
      position: 'Sentada na cadeira, coluna ereta, pés bem apoiados, braços relaxados',
      movement: 'Movimentos circulares completos dos ombros, em ambas direções',
      breathing: 'Inspire ao elevar os ombros, expire ao abaixá-los',
      benefit: 'Descomprime a coluna cervical, alivia tensão acumulada no dia',
      caution: 'Mantenha os movimentos lentos e controlados, sem forçar'
    },
    icon: '🤸',
    photoUrl: getExercisePhoto(2),
    targetAreas: ['Ombros', 'Trapézio', 'Pescoço'],
    adaptations: {
      pain: [
        'Reduza a amplitude do movimento',
        'Faça apenas 5 repetições em cada direção'
      ],
      tired: [
        'Faça apenas uma direção por vez',
        'Reduza para 5 repetições'
      ],
      energized: [
        'Aumente para 15 repetições em cada direção',
        'Adicione movimentos de braços sincronizados'
      ]
    },
    specialTip: 'Concentre-se em fazer círculos completos e lentos. Quanto mais devagar, maior o benefício para liberar tensão acumulada.',
    cautions: [
      'Evite elevar demais os ombros se tiver pressão alta',
      'Mantenha o movimento suave e controlado',
      'Pare se sentir dor aguda'
    ],
    audioInstructions: [
      'Sente-se confortavelmente',
      'Relaxe os braços ao lado do corpo',
      'Eleve lentamente os ombros em direção às orelhas',
      'Agora, role-os para trás em um movimento circular',
      'Continue o círculo, trazendo-os para baixo e para frente'
    ],
    hasWarning: false
  },
  {
    id: 3,
    name: 'Torção Suave',
    duration: '4',
    difficulty: 'Médio',
    category: 'Alongamento',
    description: 'Torção suave da coluna que ajuda a liberar tensão nas costas e melhora a mobilidade da coluna vertebral.',
    benefits: 'Alivia dores nas costas, melhora a digestão, aumenta a flexibilidade da coluna e fortalece os músculos abdominais.',
    purposePoints: [
      'Alivia dores na lombar e região média das costas',
      'Melhora a digestão e função intestinal',
      'Aumenta a mobilidade da coluna',
      'Reduz tensão acumulada ao longo do dia'
    ],
    instructions: [
      'Sente-se ereta na borda da cadeira',
      'Pés firmemente apoiados no chão, na largura dos quadris',
      'Inspire profundamente preparando o corpo',
      'Ao expirar, gire suavemente o tronco para a direita',
      'Coloque a mão esquerda no joelho direito para apoio',
      'Posicione a mão direita no encosto da cadeira ou atrás de você',
      'Mantenha a posição por 3-5 respirações profundas',
      'Volte ao centro e repita para o lado esquerdo'
    ],
    detailedInstructions: {
      position: 'Sentada na borda da cadeira, coluna alongada, pés bem apoiados',
      movement: 'Torção suave do tronco para cada lado, mantendo quadris estáveis',
      breathing: 'Respire naturalmente, expirando durante a torção',
      benefit: 'Descomprime a coluna, massageia órgãos internos, melhora postura',
      caution: 'Evite torcer demais, mantenha os quadris estáveis e alinhados'
    },
    icon: '🌀',
    photoUrl: getExercisePhoto(3),
    targetAreas: ['Coluna', 'Abdômen', 'Ombros'],
    adaptations: {
      pain: [
        'Reduza a amplitude da torção',
        'Torça apenas o suficiente para sentir um alongamento suave'
      ],
      tired: [
        'Faça apenas 2-3 respirações em cada lado',
        'Use as duas mãos para apoiar a torção'
      ],
      energized: [
        'Mantenha a torção por até 8 respirações de cada lado',
        'Adicione um pequeno alongamento diagonal para cima'
      ]
    },
    specialTip: 'Imagine que sua coluna é uma esponja e que a cada torção você está espremendo as toxinas para fora do corpo.',
    cautions: [
      'Não force a torção além do confortável',
      'Mantenha os quadris estáveis e voltados para frente',
      'Evite se tiver hérnia de disco aguda ou ciática em crise'
    ],
    audioInstructions: [
      'Sente-se ereta na borda da cadeira',
      'Inspire profundamente preparando seu corpo',
      'Ao expirar, gire suavemente para a direita',
      'Sinta o alongamento na sua coluna',
      'Respire naturalmente mantendo a posição'
    ],
    hasWarning: true,
    warningText: 'Evite este exercício se tiver hérnia de disco aguda ou problema grave na coluna. Consulte seu médico primeiro.'
  },
  {
    id: 4,
    name: 'Alongamento de Braços',
    duration: '3',
    difficulty: 'Fácil',
    category: 'Alongamento',
    description: 'Série de alongamentos para os braços que ajudam a aliviar a tensão causada por longos períodos sentado ou trabalhando no computador.',
    benefits: 'Melhora a circulação nos braços, alivia tensão muscular, previne lesões por esforço repetitivo e aumenta a amplitude de movimento.',
    purposePoints: [
      'Alivia tensão nos braços e ombros',
      'Previne lesões por movimentos repetitivos',
      'Melhora a circulação sanguínea',
      'Reduz desconforto de digitação prolongada'
    ],
    instructions: [
      'Sente-se ereta com os pés apoiados no chão',
      'Estenda o braço direito à frente do corpo, palma para cima',
      'Com a mão esquerda, puxe suavemente os dedos da mão direita para trás',
      'Mantenha por 15-20 segundos, sentindo o alongamento no punho e antebraço',
      'Gire a palma para baixo e puxe os dedos em sua direção',
      'Mantenha por mais 15-20 segundos',
      'Estenda os braços acima da cabeça e entrelace os dedos',
      'Alongue para cima por 15-20 segundos e repita tudo com o outro braço'
    ],
    detailedInstructions: {
      position: 'Sentada com postura ereta, ombros relaxados, respiração natural',
      movement: 'Movimentos lentos de extensão e flexão dos pulsos, alongamento dos braços',
      breathing: 'Respire normalmente, concentrando-se em relaxar durante o alongamento',
      benefit: 'Alivia tensão dos músculos dos braços, melhora mobilidade dos punhos',
      caution: 'Alongue até sentir uma tensão confortável, sem causar dor'
    },
    icon: '💪',
    photoUrl: getExercisePhoto(4),
    targetAreas: ['Braços', 'Punhos', 'Ombros', 'Mãos'],
    adaptations: {
      pain: [
        'Reduza o tempo de cada alongamento para 10 segundos',
        'Diminua a intensidade do alongamento'
      ],
      tired: [
        'Foque apenas nos alongamentos de punho',
        'Elimine o alongamento acima da cabeça'
      ],
      energized: [
        'Aumente o tempo de cada alongamento para 30 segundos',
        'Adicione pequenas rotações de punho entre os alongamentos'
      ]
    },
    specialTip: 'Este é um excelente exercício para fazer a cada hora se você trabalha muito no computador ou celular.',
    cautions: [
      'Evite alongar excessivamente os pulsos se tiver síndrome do túnel do carpo',
      'Não force se sentir dor nas articulações',
      'Reduza a intensidade se tiver artrite nas mãos'
    ],
    audioInstructions: [
      'Estenda seu braço direito à frente',
      'Puxe suavemente os dedos para trás com a outra mão',
      'Respire profundamente enquanto mantém o alongamento',
      'Sinta a tensão sendo liberada do seu antebraço',
      'Agora gire a palma para baixo e repita'
    ],
    hasWarning: false
  },
  {
    id: 5,
    name: 'Fortalecimento de Core',
    duration: '5',
    difficulty: 'Médio',
    category: 'Fortalecimento',
    description: 'Exercício de fortalecimento dos músculos abdominais e das costas, realizados na cadeira de forma segura e eficaz.',
    benefits: 'Fortalece a musculatura do core, melhora a postura, reduz dores na região lombar e aumenta a estabilidade corporal.',
    purposePoints: [
      'Fortalece abdômen e lombar sem impacto',
      'Melhora a postura e o equilíbrio',
      'Reduz dores nas costas',
      'Aumenta a estabilidade do tronco'
    ],
    instructions: [
      'Sente-se na metade da cadeira com os pés apoiados no chão',
      'Mantenha a coluna ereta e o abdômen levemente contraído',
      'Segure nas laterais da cadeira para estabilidade',
      'Inspire e prepare o corpo',
      'Ao expirar, eleve levemente o pé direito do chão',
      'Mantenha por 5 segundos, controlando com o abdômen',
      'Abaixe o pé e repita com o pé esquerdo',
      'Alterne os pés por 10 repetições em cada lado'
    ],
    detailedInstructions: {
      position: 'Sentada na metade da cadeira, coluna neutra, abdômen engajado',
      movement: 'Elevação controlada de uma perna de cada vez, estabilizando com o core',
      breathing: 'Expire ao elevar a perna, inspire ao abaixar',
      benefit: 'Ativa músculos profundos do abdômen e estabilizadores da coluna',
      caution: 'Mantenha a coluna neutra, evite arquear as costas'
    },
    icon: '🏋️‍♀️',
    photoUrl: getExercisePhoto(5),
    targetAreas: ['Abdômen', 'Lombar', 'Quadris'],
    adaptations: {
      pain: [
        'Reduza a altura da elevação da perna',
        'Mantenha a perna elevada por apenas 2 segundos'
      ],
      tired: [
        'Reduza para 5 repetições de cada lado',
        'Apoie as mãos firmemente na cadeira'
      ],
      energized: [
        'Eleve ambas as pernas simultaneamente (se tiver boa estabilidade)',
        'Aumente para 15 repetições de cada lado'
      ]
    },
    specialTip: 'Concentre-se em manter o umbigo levemente puxado em direção à coluna durante todo o exercício para maior ativação do core.',
    cautions: [
      'Evite prender a respiração',
      'Não arquee as costas ao elevar as pernas',
      'Se sentir dor na lombar, diminua a amplitude do movimento'
    ],
    audioInstructions: [
      'Sente-se na metade da cadeira com postura ereta',
      'Contraia suavemente seu abdômen',
      'Agora eleve lentamente um pé do chão enquanto expira',
      'Mantenha o controle com seus músculos abdominais',
      'Baixe a perna e alterne para o outro lado'
    ],
    hasWarning: true,
    warningText: 'Procure assistência médica antes de realizar este exercício se tiver problemas lombares crônicos ou hérnia abdominal.'
  }
];

export default exercises;
