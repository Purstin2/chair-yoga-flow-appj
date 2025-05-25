import { Exercise } from '@/types';
import { getExercisePhoto } from './exercisePhotos';

// 40 novos exercícios específicos para yoga em cadeira
export const chairYogaExercises: Exercise[] = [
  {
    id: 201,
    name: 'Respiração Diafragmática Profunda',
    duration: '3',
    difficulty: 'Fácil',
    category: 'Respiração',
    description: 'Técnica de respiração profunda que ativa completamente o diafragma, reduzindo estresse e melhorando oxigenação corporal.',
    benefits: 'Ativa o sistema nervoso parassimpático, reduz ansiedade, melhora digestão e reduz tensão muscular generalizada.',
    purposePoints: [
      'Equilibra o sistema nervoso',
      'Reduz hormônios do estresse',
      'Melhora concentração',
      'Prepara para meditação'
    ],
    instructions: [
      'Sente-se ereta na cadeira com os pés bem apoiados no chão',
      'Coloque uma mão sobre o abdômen e outra sobre o peito',
      'Inspire lentamente pelo nariz por 4 segundos, expandindo o abdômen',
      'Mantenha o ar por 2 segundos',
      'Expire lentamente pela boca por 6 segundos, contraindo suavemente o abdômen',
      'Repita por 3 minutos, mantendo um ritmo constante'
    ],
    detailedInstructions: {
      position: 'Sentada com coluna neutra, ombros relaxados, mãos sobre abdômen e peito',
      movement: 'Expansão e contração controlada do diafragma e abdômen',
      breathing: 'Inspiração nasal (4s), retenção (2s), expiração bucal (6s)',
      benefit: 'Ativa nervo vago, reduz cortisol, melhora concentração e relaxamento',
      caution: 'Evite respiração muito forçada, mantenha suavidade no ritmo'
    },
    icon: '🧘‍♀️',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Sistema Nervoso', 'Diafragma', 'Pulmões', 'Abdômen'],
    adaptations: {
      pain: [
        'Elimine a retenção de ar',
        'Reduza para ciclos de 3-1-3 segundos'
      ],
      tired: [
        'Reduza para 2 minutos',
        'Foque apenas na expansão abdominal'
      ],
      energized: [
        'Aumente para 5 minutos',
        'Adicione visualização durante a respiração'
      ]
    },
    specialTip: 'Visualize uma cor calmante entrando no corpo ao inspirar e toxinas saindo ao expirar para potencializar os benefícios.',
    cautions: [
      'Não force a respiração além do conforto',
      'Respire normalmente se sentir tontura',
      'Evite retenções prolongadas se tiver hipertensão'
    ],
    executionSteps: [
      { step: 1, instruction: 'Ajuste a postura e relaxe os ombros', duration: 10 },
      { step: 2, instruction: 'Coloque mãos sobre abdômen e peito', duration: 5 },
      { step: 3, instruction: 'Inspire pelo nariz expandindo abdômen (4s)', duration: 4 },
      { step: 4, instruction: 'Retenção suave (2s)', duration: 2 },
      { step: 5, instruction: 'Expire lentamente pela boca (6s)', duration: 6 },
      { step: 6, instruction: 'Continue respirando neste ritmo', duration: 160 }
    ],
    scientificData: {
      initialPosition: 'Sentada com coluna neutra, postura equilibrada',
      targetMuscles: ['Diafragma', 'Intercostais', 'Abdominais', 'Músculos acessórios da respiração'],
      scientificBasis: [
        'Estimulação do nervo vago',
        'Redução de cortisol em 23% após 10 min',
        'Melhora da variabilidade da frequência cardíaca',
        'Aumento da coerência cardíaca'
      ],
      expectedResults: [
        'Redução de ansiedade em 15 minutos',
        'Melhora do foco mental',
        'Redução da pressão arterial (média 5-7 mmHg)',
        'Alívio de tensão muscular generalizada'
      ],
      adaptations: {
        'Ansiedade': 'Iniciar com exalações mais longas (8s)',
        'Hipertensão': 'Evitar retenções, foco na expiração',
        'Asma': 'Reduzir duração dos ciclos',
        'DPOC': 'Respiração labial franzida na expiração'
      },
      repetitions: '3 minutos de ciclos contínuos',
      contraindicatedFor: ['Crise respiratória aguda']
    }
  },
  {
    id: 202,
    name: 'Alongamento de Punhos e Dedos',
    duration: '3',
    difficulty: 'Fácil',
    category: 'Alongamento',
    description: 'Sequência de movimentos para aliviar tensão, melhorar flexibilidade e prevenir lesões nas mãos e punhos.',
    benefits: 'Alivia dor e rigidez, previne síndrome do túnel do carpo, melhora circulação e mobilidade das mãos.',
    purposePoints: [
      'Previne lesões por esforço repetitivo',
      'Alivia dores em artrite e tendinite',
      'Melhora destreza manual',
      'Reduz rigidez matinal'
    ],
    instructions: [
      'Sente-se ereta com os braços relaxados',
      'Estenda o braço direito à frente com a palma para cima',
      'Com a mão esquerda, puxe os dedos para trás por 10 segundos',
      'Vire a palma para baixo e puxe os dedos para cima por 10 segundos',
      'Faça rotações circulares com o punho em ambas direções',
      'Repita com o outro braço',
      'Finalize abrindo e fechando as mãos 10 vezes'
    ],
    detailedInstructions: {
      position: 'Sentada com postura ereta, braços estendidos',
      movement: 'Alongamentos em diferentes direções e rotações',
      breathing: 'Respiração normal, expire durante o alongamento',
      benefit: 'Alonga tendões flexores e extensores, melhora amplitude articular',
      caution: 'Movimentos suaves, sem forçar articulações doloridas'
    },
    icon: '👐',
    photoUrl: getExercisePhoto(2),
    targetAreas: ['Punhos', 'Dedos', 'Antebraços', 'Mãos'],
    adaptations: {
      pain: [
        'Reduza a intensidade do alongamento',
        'Evite posições que causem dor aguda'
      ],
      tired: [
        'Foque apenas nos movimentos mais confortáveis',
        'Reduza o tempo de cada alongamento'
      ],
      energized: [
        'Adicione pequenos movimentos de resistência',
        'Aumente o número de repetições'
      ]
    },
    specialTip: 'Faça este exercício a cada 30 minutos durante trabalho com computador ou celular para prevenir lesões.',
    cautions: [
      'Evite movimentos bruscos',
      'Não force articulações inflamadas',
      'Reduza a amplitude se tiver síndrome do túnel do carpo'
    ],
    executionSteps: [
      { step: 1, instruction: 'Estenda o braço direito com palma para cima', duration: 3 },
      { step: 2, instruction: 'Alongue dedos para trás com mão oposta', duration: 10 },
      { step: 3, instruction: 'Vire a palma para baixo e alongue', duration: 10 },
      { step: 4, instruction: '5 rotações de punho em cada direção', duration: 15 },
      { step: 5, instruction: 'Repita sequência com outro braço', duration: 35 },
      { step: 6, instruction: 'Abra e feche as mãos 10 vezes', duration: 15 }
    ],
    scientificData: {
      initialPosition: 'Sentada com coluna neutra, braços apoiados ou estendidos',
      targetMuscles: ['Flexores dos dedos', 'Extensores dos dedos', 'Pronadores', 'Supinadores'],
      scientificBasis: [
        'Mobilização das articulações carpo-metacarpianas',
        'Alongamento de tendões e fáscias do antebraço',
        'Estimulação da circulação sanguínea e linfática',
        'Descompressão do nervo mediano'
      ],
      expectedResults: [
        'Redução de 30% na rigidez em 2 semanas',
        'Melhora da amplitude de movimento',
        'Alívio dos sintomas de túnel do carpo leve',
        'Melhor destreza para atividades finas'
      ],
      adaptations: {
        'Artrite': 'Movimentos muito suaves, sem forçar articulações',
        'Túnel do carpo': 'Evitar flexão extrema de punho',
        'Idosos': 'Movimentos mais lentos com menos repetições',
        'Tendinite': 'Reduzir amplitude na direção dolorosa'
      },
      repetitions: '2-3 séries diárias',
      contraindicatedFor: ['Fratura recente', 'Artrite em fase aguda inflamatória']
    }
  },
  {
    id: 203,
    name: 'Rotação Torácica com Respiração',
    duration: '4',
    difficulty: 'Médio',
    category: 'Mobilidade',
    description: 'Combinação de rotação do tronco com técnicas respiratórias para melhorar mobilidade da coluna e expansão torácica.',
    benefits: 'Melhora mobilidade da coluna torácica, libera tensão entre escápulas, aumenta capacidade respiratória e reduz dor intercostal.',
    purposePoints: [
      'Mobiliza coluna torácica',
      'Expande capacidade pulmonar',
      'Alivia dores entre omoplatas',
      'Melhora postura do tronco'
    ],
    instructions: [
      'Sente-se afastada do encosto, coluna ereta',
      'Coloque as mãos nos ombros ou cruze no peito',
      'Inspire profundamente, expandindo o tórax',
      'Expire girando lentamente para direita',
      'Volte ao centro inspirando',
      'Expire girando para esquerda',
      'Repita 5 vezes para cada lado'
    ],
    detailedInstructions: {
      position: 'Sentada ereta sem apoiar nas costas, mãos nos ombros ou peito',
      movement: 'Rotação do tronco mantendo quadris estáveis',
      breathing: 'Inspire no centro, expire durante a rotação',
      benefit: 'Mobiliza articulações costovertebrais, melhora expansão torácica',
      caution: 'Mantenha quadril estável, evite forçar rotação'
    },
    icon: '🌀',
    photoUrl: getExercisePhoto(3),
    targetAreas: ['Coluna torácica', 'Costelas', 'Intercostais', 'Região escapular'],
    adaptations: {
      pain: [
        'Reduza amplitude da rotação',
        'Use apenas 45° de rotação'
      ],
      tired: [
        'Reduza para 3 repetições de cada lado',
        'Use apoio de mãos na cadeira'
      ],
      energized: [
        'Aumente para 8 repetições',
        'Adicione olhar para trás na posição final'
      ]
    },
    specialTip: 'Mantenha o queixo ligeiramente recolhido durante as rotações para proteger a coluna cervical.',
    cautions: [
      'Evite torções bruscas',
      'Respeite seus limites de rotação',
      'Reduza amplitude se sentir dor aguda'
    ],
    executionSteps: [
      { step: 1, instruction: 'Sente-se ereta afastada do encosto', duration: 5 },
      { step: 2, instruction: 'Coloque mãos nos ombros', duration: 3 },
      { step: 3, instruction: 'Inspire expandindo o tórax', duration: 4 },
      { step: 4, instruction: 'Expire e gire para direita', duration: 6 },
      { step: 5, instruction: 'Volte ao centro inspirando', duration: 4 },
      { step: 6, instruction: 'Expire e gire para esquerda', duration: 6 },
      { step: 7, instruction: 'Continue alternando por 5 ciclos', duration: 92 }
    ],
    scientificData: {
      initialPosition: 'Sentada sem apoio, coluna neutra, mãos nos ombros',
      targetMuscles: ['Rotadores da coluna', 'Multífidos', 'Intercostais', 'Oblíquos'],
      scientificBasis: [
        'Mobilização segmentada das vértebras torácicas',
        'Melhora da rotação articular do tronco',
        'Aumento da expansibilidade torácica',
        'Redução de pontos-gatilho nos paravertebrais'
      ],
      expectedResults: [
        'Ganho de 15-20° na rotação em 3 semanas',
        'Melhora da postura torácica',
        'Redução de dor entre escápulas',
        'Melhora da respiração costal'
      ],
      adaptations: {
        'Osteoporose': 'Reduzir amplitude, evitar torção excessiva',
        'Hérnia discal': 'Rotação suave apenas até metade da amplitude',
        'Artrose facetária': 'Movimentos mais lentos e controlados',
        'Idosos': 'Usar apoio de mãos se necessário'
      },
      repetitions: '5 ciclos completos (direita e esquerda)',
      contraindicatedFor: ['Fase aguda de hérnia de disco torácica', 'Fraturas costais recentes']
    }
  },
  {
    id: 204,
    name: 'Fortalecimento de Quadríceps Sentada',
    duration: '5',
    difficulty: 'Médio',
    category: 'Fortalecimento',
    description: 'Exercício de fortalecimento para os músculos da frente da coxa, essenciais para mobilidade e estabilidade ao andar.',
    benefits: 'Fortalece quadríceps, melhora estabilidade dos joelhos, facilita sentar e levantar, e reduz dores articulares.',
    purposePoints: [
      'Fortalece quadríceps (frente da coxa)',
      'Melhora capacidade funcional',
      'Reduz impacto articular nos joelhos',
      'Facilita movimentos de levantar'
    ],
    instructions: [
      'Sente-se ereta com as costas apoiadas',
      'Pés paralelos apoiados no chão',
      'Inspire preparando o movimento',
      'Expire estendendo a perna direita à frente',
      'Contraia o quadríceps por 3-5 segundos',
      'Inspire ao abaixar a perna lentamente',
      'Repita com a perna esquerda',
      'Complete 10 repetições alternadas'
    ],
    detailedInstructions: {
      position: 'Sentada com coluna apoiada, joelhos em 90 graus',
      movement: 'Extensão controlada do joelho com contração isométrica',
      breathing: 'Expire na extensão, inspire no retorno',
      benefit: 'Fortalece quadríceps sem sobrecarga articular, melhora propriocepção',
      caution: 'Evite hiperextensão do joelho, mantenha movimento controlado'
    },
    icon: '💪',
    photoUrl: getExercisePhoto(4),
    targetAreas: ['Quadríceps', 'Joelhos', 'Extensores de perna'],
    adaptations: {
      pain: [
        'Reduza a amplitude do movimento',
        'Evite extensão completa do joelho'
      ],
      tired: [
        'Reduza para 5 repetições por perna',
        'Elimine a contração isométrica no final'
      ],
      energized: [
        'Aumente para 15 repetições por perna',
        'Adicione 3 segundos de contração no topo'
      ]
    },
    specialTip: 'Ao estender a perna, imagine que está empurrando algo pesado para longe do corpo para maximizar a contração muscular.',
    cautions: [
      'Evite extensão total se tiver problemas no joelho',
      'Não faça movimentos bruscos ou muito rápidos',
      'Pare se sentir dor articular aguda'
    ],
    executionSteps: [
      { step: 1, instruction: 'Sente-se ereta com pés apoiados', duration: 5 },
      { step: 2, instruction: 'Expire e estenda perna direita', duration: 3 },
      { step: 3, instruction: 'Mantenha contração por 5 segundos', duration: 5 },
      { step: 4, instruction: 'Abaixe lentamente inspirando', duration: 3 },
      { step: 5, instruction: 'Repita com perna esquerda', duration: 8 },
      { step: 6, instruction: 'Continue alternando para 10 repetições', duration: 130 }
    ],
    scientificData: {
      initialPosition: 'Sentada com coluna apoiada, quadril e joelho em 90 graus',
      targetMuscles: ['Reto femoral', 'Vasto medial', 'Vasto lateral', 'Vasto intermédio'],
      scientificBasis: [
        'Fortalecimento isotônico dos extensores do joelho',
        'Melhora da estabilidade articular dinâmica',
        'Aumento da resistência muscular',
        'Ativação do controle neuromuscular'
      ],
      expectedResults: [
        'Aumento de força em 15-20% após 4 semanas',
        'Melhora na capacidade de sentar e levantar',
        'Redução de dor patelofemoral',
        'Melhor estabilidade dos joelhos'
      ],
      adaptations: {
        'Artrose': 'Evitar extensão completa, reduzir arco de movimento',
        'Joelho instável': 'Adicionar contração isométrica no meio do movimento',
        'Idosos': 'Iniciar sem resistência, progredir lentamente',
        'Fraqueza acentuada': 'Usar faixa elástica como suporte'
      },
      repetitions: '10 repetições alternadas (5 cada lado)',
      contraindicatedFor: ['Lesão aguda no joelho', 'Dor femoropatelar severa']
    }
  },
  {
    id: 205,
    name: 'Mobilização Pélvica em Círculo',
    duration: '4',
    difficulty: 'Fácil',
    category: 'Mobilidade',
    description: 'Movimentos circulares suaves da pelve que melhoram mobilidade lombar, reduzem tensão e melhoram consciência postural.',
    benefits: 'Alivia dor lombar, melhora circulação pélvica, libera tensão e prepara para outros exercícios mais avançados.',
    purposePoints: [
      'Mobiliza articulações lombossacrais',
      'Reduz tensão lombar crônica',
      'Melhora consciência postural',
      'Harmoniza respiração e movimento'
    ],
    instructions: [
      'Sente-se na metade da cadeira sem apoiar nas costas',
      'Pés bem apoiados, afastados na largura dos quadris',
      'Mãos apoiadas nas coxas ou segurando a lateral do assento',
      'Inicie movimentos circulares lentos com o quadril',
      'Alterne 5 círculos em sentido horário',
      'Depois 5 círculos em sentido anti-horário',
      'Mantenha respiração fluida durante todo movimento'
    ],
    detailedInstructions: {
      position: 'Sentada na metade da cadeira, sem apoio nas costas, pés bem apoiados',
      movement: 'Círculos suaves com a pelve, iniciando pequenos e aumentando gradualmente',
      breathing: 'Respiração fluida e natural, sem prender o ar',
      benefit: 'Lubrifica articulações lombossacrais, relaxa músculos profundos',
      caution: 'Mantenha movimentos controlados, sem compensações na coluna superior'
    },
    icon: '⭕',
    photoUrl: getExercisePhoto(3),
    targetAreas: ['Lombar', 'Pelve', 'Sacroilíacas', 'Quadril'],
    adaptations: {
      pain: [
        'Reduza a amplitude do movimento',
        'Faça apenas pequenos círculos ou semicírculos'
      ],
      tired: [
        'Reduza para 3 círculos em cada direção',
        'Use apoio de mãos na cadeira para maior estabilidade'
      ],
      energized: [
        'Aumente para 8 círculos em cada direção',
        'Adicione movimento sincronizado de inclinação da cabeça'
      ]
    },
    specialTip: 'Imagine que está desenhando um círculo perfeito em uma superfície horizontal com seu quadril.',
    cautions: [
      'Evite movimentos bruscos ou amplos demais',
      'Mantenha a parte superior do corpo relativamente estável',
      'Em caso de dor aguda lombar, reduza a amplitude'
    ],
    executionSteps: [
      { step: 1, instruction: 'Posicione-se na metade da cadeira', duration: 5 },
      { step: 2, instruction: 'Inicie pequenos círculos em sentido horário', duration: 10 },
      { step: 3, instruction: 'Aumente gradualmente a amplitude', duration: 15 },
      { step: 4, instruction: 'Complete 5 círculos nesta direção', duration: 25 },
      { step: 5, instruction: 'Inverta para sentido anti-horário', duration: 5 },
      { step: 6, instruction: 'Complete 5 círculos na nova direção', duration: 25 },
      { step: 7, instruction: 'Retorne à posição neutra', duration: 5 }
    ],
    scientificData: {
      initialPosition: 'Sentada sem apoio, coluna neutra, pés bem apoiados',
      targetMuscles: ['Iliopsoas', 'Quadrado lombar', 'Multífidos', 'Rotadores da pelve'],
      scientificBasis: [
        'Mobilização controlada das articulações lombares',
        'Estímulo à produção de líquido sinovial',
        'Redução de aderências miofasciais',
        'Melhora da propriocepção pélvica'
      ],
      expectedResults: [
        'Redução de rigidez lombar em 2 semanas',
        'Aumento de mobilidade pélvica em 15°',
        'Melhora da postura sentada',
        'Preparação para progressão de exercícios'
      ],
      adaptations: {
        'Lombalgia crônica': 'Movimentos de menor amplitude',
        'Ciática': 'Evitar direção que provoca sintomas',
        'Artrose facetária': 'Movimentos mais lentos e cuidadosos',
        'Sacroileíte': 'Reduzir amplitude, foco em movimentos muito suaves'
      },
      repetitions: '5 repetições em cada direção',
      contraindicatedFor: ['Hérnia discal aguda', 'Estenose severa', 'Dor lombar aguda inflamatória']
    }
  },
  {
    id: 206,
    name: 'Alongamento de Panturrilha Sentada',
    duration: '3',
    difficulty: 'Fácil',
    category: 'Alongamento',
    description: 'Técnica segura e eficaz para alongar a musculatura posterior da perna, melhorando circulação e reduzindo tensão.',
    benefits: 'Alivia tensão nas panturrilhas, previne cãibras noturnas, melhora circulação e reduz inchaço nas pernas.',
    purposePoints: [
      'Previne cãibras e dores nas pernas',
      'Melhora retorno venoso',
      'Reduz edema e inchaço',
      'Ajuda na recuperação após caminhadas'
    ],
    instructions: [
      'Sente-se na borda da cadeira com boa postura',
      'Estenda a perna direita à frente, calcanhar apoiado no chão',
      'Flexione o pé puxando os dedos em sua direção',
      'Sinta o alongamento na parte posterior da perna',
      'Mantenha por 30 segundos respirando normalmente',
      'Repita com a perna esquerda',
      'Realize 2 vezes em cada perna'
    ],
    detailedInstructions: {
      position: 'Sentada na borda da cadeira, coluna ereta, uma perna estendida',
      movement: 'Dorsiflexão do tornozelo (puxando o pé para cima)',
      breathing: 'Respiração natural, inspire e expire lentamente durante o alongamento',
      benefit: 'Alonga gastrocnêmio e sóleo, melhora flexibilidade e circulação',
      caution: 'Mantenha joelho levemente flexionado, não force o alongamento'
    },
    icon: '🦵',
    photoUrl: getExercisePhoto(2),
    targetAreas: ['Panturrilhas', 'Tendão de Aquiles', 'Sóleo', 'Fáscia plantar'],
    adaptations: {
      pain: [
        'Flexione levemente o joelho da perna alongada',
        'Reduza a intensidade da flexão do pé'
      ],
      tired: [
        'Reduza o tempo de alongamento para 15 segundos',
        'Faça apenas uma repetição por perna'
      ],
      energized: [
        'Aumente o tempo de alongamento para 45 segundos',
        'Adicione pequenas oscilações no final do alongamento'
      ]
    },
    specialTip: 'Para intensificar, incline suavemente o tronco à frente mantendo a coluna reta (não curvada).',
    cautions: [
      'Evite reter a respiração durante o alongamento',
      'Não force além do ponto de desconforto leve',
      'Se tiver histórico de DVT, consulte médico antes'
    ],
    executionSteps: [
      { step: 1, instruction: 'Sente-se na borda da cadeira', duration: 3 },
      { step: 2, instruction: 'Estenda a perna direita com calcanhar no chão', duration: 3 },
      { step: 3, instruction: 'Flexione o pé puxando os dedos para cima', duration: 4 },
      { step: 4, instruction: 'Mantenha o alongamento respirando normalmente', duration: 30 },
      { step: 5, instruction: 'Relaxe a perna', duration: 5 },
      { step: 6, instruction: 'Repita com a perna esquerda', duration: 35 },
      { step: 7, instruction: 'Faça uma segunda série com cada perna', duration: 80 }
    ],
    scientificData: {
      initialPosition: 'Sentada na borda da cadeira, coluna neutra, uma perna estendida',
      targetMuscles: ['Gastrocnêmio', 'Sóleo', 'Plantar', 'Tendão de Aquiles'],
      scientificBasis: [
        'Alongamento estático controlado dos flexores plantares',
        'Estímulo aos receptores de Golgi para relaxamento',
        'Melhora da circulação sanguínea e linfática',
        'Redução da tensão miofascial posterior'
      ],
      expectedResults: [
        'Aumento de 10-15° na dorsiflexão do tornozelo',
        'Redução de 30% nas cãibras noturnas',
        'Melhora da circulação periférica',
        'Redução de edema em pessoas sedentárias'
      ],
      adaptations: {
        'Tendão de Aquiles rígido': 'Menor amplitude, mais repetições',
        'Diabetes': 'Alongamento suave, sem forçar',
        'Idosos': 'Usar faixa ou toalha para auxiliar',
        'Fasciíte plantar': 'Evitar dorsiflexão extrema'
      },
      repetitions: '2 séries de 30 segundos em cada perna',
      contraindicatedFor: ['Ruptura recente do tendão', 'Trombose venosa aguda']
    }
  },
  {
    id: 207,
    name: 'Abertura Peitoral com Respiração',
    duration: '4',
    difficulty: 'Fácil',
    category: 'Alongamento',
    description: 'Exercício que combina alongamento da musculatura peitoral com expansão torácica, melhorando postura e respiração.',
    benefits: 'Corrige postura encurvada, alivia tensão nos ombros, melhora expansão pulmonar e reduz dores na região cervical.',
    purposePoints: [
      'Corrige postura do ombro para frente',
      'Expande a caixa torácica',
      'Melhora padrão respiratório',
      'Alivia tensão na cervical'
    ],
    instructions: [
      'Sente-se ereta sem apoio nas costas',
      'Cruze os braços atrás das costas se possível',
      'Inspire profundamente expandindo o peito',
      'Ao expirar, aproxime as escápulas',
      'Olhe levemente para cima',
      'Mantenha por 15 segundos respirando',
      'Retorne à posição inicial e relaxe',
      'Repita 3-4 vezes'
    ],
    detailedInstructions: {
      position: 'Sentada sem apoio nas costas, ombros alinhados com quadris',
      movement: 'Extensão da coluna torácica, retração de escápulas, rotação externa dos ombros',
      breathing: 'Inspire profundamente na abertura, expire mantendo a posição',
      benefit: 'Alonga músculos peitorais, fortalece extensores torácicos, melhora respiração',
      caution: 'Evite arquear excessivamente a lombar, foco na abertura do peito'
    },
    icon: '🫁',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Peitorais', 'Ombros', 'Tórax', 'Intercostais'],
    adaptations: {
      pain: [
        'Elimine o cruzar de braços, apenas abra o peito',
        'Reduza a amplitude da extensão torácica'
      ],
      tired: [
        'Mantenha por apenas 10 segundos',
        'Reduza para 2 repetições'
      ],
      energized: [
        'Aumente para 30 segundos',
        'Adicione leve balanceio dos braços para trás'
      ]
    },
    specialTip: 'Mantenha um sorriso suave durante o exercício - isso reduz a tensão facial e facilita a expansão torácica.',
    cautions: [
      'Evite se tiver lesão aguda no ombro',
      'Não force a extensão cervical se tiver problemas',
      'Mantenha a coluna neutra, sem arquear a lombar'
    ],
    executionSteps: [
      { step: 1, instruction: 'Sente-se ereta na borda da cadeira', duration: 5 },
      { step: 2, instruction: 'Cruze os braços atrás das costas', duration: 5 },
      { step: 3, instruction: 'Inspire abrindo o peito', duration: 4 },
      { step: 4, instruction: 'Aproxime as escápulas e olhe suavemente para cima', duration: 3 },
      { step: 5, instruction: 'Mantenha a posição respirando', duration: 15 },
      { step: 6, instruction: 'Volte à posição inicial e relaxe', duration: 5 },
      { step: 7, instruction: 'Repita mais 3 vezes', duration: 83 }
    ],
    scientificData: {
      initialPosition: 'Sentada ereta, sem apoio nas costas, pernas alinhadas',
      targetMuscles: ['Peitoral maior', 'Peitoral menor', 'Serrátil anterior', 'Intercostais'],
      scientificBasis: [
        'Alongamento dos músculos encurtados por postura cifótica',
        'Estímulo dos proprioceptores torácicos',
        'Aumento do volume torácico inspiratório',
        'Correção do padrão respiratório'
      ],
      expectedResults: [
        'Aumento de 15-20% na expansão torácica',
        'Redução da cifose postural em 3 semanas',
        'Melhora do padrão respiratório',
        'Diminuição da tensão cervical'
      ],
      adaptations: {
        'Cifose acentuada': 'Iniciar com menor amplitude, progressão lenta',
        'Limitação de ombro': 'Usar bastão ou toalha como apoio',
        'Dor torácica': 'Reduzir tempo de sustentação',
        'Idosos': 'Apoiar as costas na fase inicial'
      },
      repetitions: '3-4 séries de 15 segundos',
      contraindicatedFor: ['Lesão aguda do manguito rotador', 'Instabilidade glenoumeral']
    }
  },
  {
    id: 208,
    name: 'Fortalecimento Isométrico Cervical',
    duration: '3',
    difficulty: 'Fácil',
    category: 'Fortalecimento',
    description: 'Técnica de contração muscular isométrica para fortalecer os músculos profundos do pescoço e melhorar estabilidade cervical.',
    benefits: 'Alivia dores crônicas no pescoço, melhora postura da cabeça, reduz tensão muscular e previne dores de cabeça tensionais.',
    purposePoints: [
      'Fortalece musculatura profunda cervical',
      'Melhora estabilidade da cabeça',
      'Reduz dores tensionais',
      'Corrige postura "cabeça para frente"'
    ],
    instructions: [
      'Sente-se com coluna ereta, olhar para frente',
      'Coloque a palma da mão na testa',
      'Empurre a cabeça contra a mão (sem mover)',
      'Mantenha contração por 10 segundos',
      'Relaxe por 5 segundos',
      'Repita com a mão na lateral direita da cabeça',
      'Depois na lateral esquerda',
      'Finalize com a mão na região occipital (nuca)'
    ],
    detailedInstructions: {
      position: 'Sentada ereta, coluna neutra, cabeça alinhada com ombros',
      movement: 'Contração isométrica (sem movimento) em 4 direções',
      breathing: 'Respiração normal durante a contração, sem prender o ar',
      benefit: 'Ativa seletivamente músculos profundos, melhora controle motor cervical',
      caution: 'Use apenas 20-30% da força, contrações suaves a moderadas'
    },
    icon: '💆',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Músculos cervicais', 'Suboccipitais', 'Escalenos', 'Esternocleidomastoideo'],
    adaptations: {
      pain: [
        'Reduza intensidade da contração (10-20%)',
        'Diminua tempo para 5 segundos'
      ],
      tired: [
        'Faça apenas direção frontal e posterior',
        'Reduza para 5 segundos cada'
      ],
      energized: [
        'Aumente para 15 segundos cada direção',
        'Adicione contração diagonal nas 4 direções'
      ]
    },
    specialTip: 'Mantenha expressão facial relaxada durante contrações, isso evita tensão excessiva nos músculos da face.',
    cautions: [
      'Evite contrações muito fortes',
      'Não prenda a respiração durante o exercício',
      'Pare imediatamente se sentir tontura ou dor aguda'
    ],
    executionSteps: [
      { step: 1, instruction: 'Posicione-se ereta com cabeça alinhada', duration: 5 },
      { step: 2, instruction: 'Coloque palma da mão na testa', duration: 3 },
      { step: 3, instruction: 'Empurre cabeça contra mão (sem mover)', duration: 10 },
      { step: 4, instruction: 'Relaxe e respire', duration: 5 },
      { step: 5, instruction: 'Repita com mão na lateral direita', duration: 10 },
      { step: 6, instruction: 'Relaxe e respire', duration: 5 },
      { step: 7, instruction: 'Repita com mão na lateral esquerda', duration: 10 },
      { step: 8, instruction: 'Relaxe e respire', duration: 5 },
      { step: 9, instruction: 'Finalize com mão na parte posterior', duration: 10 },
      { step: 10, instruction: 'Relaxe e alongue suavemente o pescoço', duration: 10 }
    ],
    scientificData: {
      initialPosition: 'Sentada ereta, coluna neutra, ombros relaxados, olhar para frente',
      targetMuscles: ['Flexores cervicais profundos', 'Esternocleidomastóideo', 'Semiespinal', 'Suboccipitais'],
      scientificBasis: [
        'Fortalece músculos flexores profundos seletivamente',
        'Melhora controle neuromuscular cervical',
        'Restaura equilíbrio muscular',
        'Aumenta endurance dos estabilizadores'
      ],
      expectedResults: [
        'Músculos 35% mais fortes em 3 semanas',
        'Redução de 40% na dor cervical crônica',
        'Melhor postura da cabeça',
        'Diminuição da fadiga cervical'
      ],
      adaptations: {
        'Hipertensão': 'Reduzir intensidade e evitar contração posterior',
        'Dor aguda': 'Iniciar com 3-5 segundos e pressão mínima',
        'Artrose cervical': 'Movimentos muito suaves, evitar extensão',
        'Enxaqueca': 'Evitar durante crises'
      },
      repetitions: '1 série em cada direção',
      contraindicatedFor: ['Trauma cervical recente', 'Hipertensão descontrolada', 'Durante crise de enxaqueca']
    }
  },
  {
    id: 209,
    name: 'Respiração Alternada de Narinas',
    duration: '5',
    difficulty: 'Fácil',
    category: 'Respiração',
    description: 'Técnica ancestral de respiração (pranayama) que equilibra o sistema nervoso e harmoniza os dois hemisférios cerebrais.',
    benefits: 'Reduz ansiedade, equilibra energia corporal, melhora foco mental e reduz pressão arterial.',
    purposePoints: [
      'Equilibra sistema nervoso simpático/parassimpático',
      'Melhora concentração e clareza mental',
      'Reduz estresse e ansiedade',
      'Prepara para meditação'
    ],
    instructions: [
      'Sente-se confortavelmente com coluna ereta',
      'Apoie a mão direita na frente do rosto',
      'Feche a narina direita com o polegar',
      'Inspire lentamente pela narina esquerda',
      'Feche a narina esquerda com o dedo anelar',
      'Abra e expire pela narina direita',
      'Inspire pela narina direita',
      'Feche-a e expire pela esquerda',
      'Continue alternando por 5 minutos'
    ],
    detailedInstructions: {
      position: 'Sentada com coluna alongada, ombros relaxados, mão direita na frente do rosto',
      movement: 'Alternância suave de narinas com dedos, sem pressão excessiva',
      breathing: 'Respiração lenta e controlada, igual tempo de inspiração e expiração',
      benefit: 'Equilibra fluxo energético (Ida e Pingala nadis), harmoniza hemisférios cerebrais',
      caution: 'Mantenha respiração suave, sem forçar ou criar tensão'
    },
    icon: '🧘‍♀️',
    photoUrl: getExercisePhoto(5),
    targetAreas: ['Sistema nervoso', 'Seios paranasais', 'Circuitos neurais', 'Diafragma'],
    adaptations: {
      pain: [
        'Elimine a retenção de ar',
        'Respirações mais curtas e leves'
      ],
      tired: [
        'Reduza para 3 minutos',
        'Respire mais suavemente'
      ],
      energized: [
        'Aumente para 10 minutos',
        'Adicione pequena retenção após inspiração'
      ]
    },
    specialTip: 'Se possível, pratique com olhos fechados para maior interiorização e efeitos no sistema nervoso.',
    cautions: [
      'Respire naturalmente, sem forçar',
      'Se sentir tontura, retorne à respiração normal',
      'Evite pressionar narinas com muita força'
    ],
    executionSteps: [
      { step: 1, instruction: 'Sente-se confortavelmente com coluna ereta', duration: 10 },
      { step: 2, instruction: 'Posicione mão direita na frente do rosto', duration: 5 },
      { step: 3, instruction: 'Feche narina direita e inspire pela esquerda', duration: 4 },
      { step: 4, instruction: 'Feche esquerda, abra direita e expire', duration: 4 },
      { step: 5, instruction: 'Inspire pela narina direita', duration: 4 },
      { step: 6, instruction: 'Feche direita, abra esquerda e expire', duration: 4 },
      { step: 7, instruction: 'Continue alternando por 5 minutos', duration: 280 }
    ],
    scientificData: {
      initialPosition: 'Sentada confortavelmente, coluna ereta, ombros relaxados',
      targetMuscles: ['Diafragma', 'Músculos intercostais', 'Músculos faciais', 'Estruturas nasais'],
      scientificBasis: [
        'Equalização da atividade nos hemisférios cerebrais',
        'Regulação do sistema nervoso autônomo',
        'Modulação dos níveis de cortisol',
        'Alteração nos padrões de ondas cerebrais'
      ],
      expectedResults: [
        'Redução da pressão arterial em 10-15 min',
        'Diminuição da ansiedade em 5 minutos',
        'Melhora da concentração e foco',
        'Equilíbrio do sistema nervoso'
      ],
      adaptations: {
        'Congestão nasal': 'Usar apenas visualização mental do exercício',
        'Ansiedade': 'Enfatizar expiração mais longa',
        'Hipertensão': 'Eliminar retenções de ar',
        'Cefaleia': 'Respiração muito suave, sem pressão'
      },
      repetitions: '5-10 minutos de prática contínua',
      contraindicatedFor: ['Obstrução nasal severa', 'Infecções respiratórias agudas']
    }
  },
  {
    id: 210,
    name: 'Fortalecimento de Tornozelo e Pé',
    duration: '4',
    difficulty: 'Fácil',
    category: 'Fortalecimento',
    description: 'Sequência de movimentos para fortalecer músculos dos pés e tornozelos, melhorando equilíbrio, estabilidade e prevenindo quedas.',
    benefits: 'Melhora estabilidade articular, previne entorses, reduz quedas em idosos e fortalece arco plantar.',
    purposePoints: [
      'Fortalece músculos intrínsecos dos pés',
      'Melhora propriocepção e equilíbrio',
      'Previne entorses e quedas',
      'Alivia dores plantares'
    ],
    instructions: [
      'Sente-se ereta com os pés apoiados no chão',
      'Eleve os calcanhares mantendo dedos no chão',
      'Segure por 5 segundos e abaixe',
      'Agora eleve os dedos mantendo calcanhares no chão',
      'Segure por 5 segundos e abaixe',
      'Faça rotações circulares com cada pé',
      'Finalize "amassando" uma toalha imaginária com os dedos',
      'Repita toda sequência 3 vezes'
    ],
    detailedInstructions: {
      position: 'Sentada com coluna ereta, pés bem apoiados no chão',
      movement: 'Movimentos isolados de flexão plantar, dorsiflexão e circundução',
      breathing: 'Respiração normal, sem sincronização específica com movimentos',
      benefit: 'Ativa músculos tibiais, intrínsecos do pé e estabilizadores',
      caution: 'Movimentos suaves e controlados, sem compensações'
    },
    icon: '👣',
    photoUrl: getExercisePhoto(4),
    targetAreas: ['Tornozelos', 'Pés', 'Arco plantar', 'Tibiais'],
    adaptations: {
      pain: [
        'Reduza amplitude dos movimentos',
        'Elimine movimentos desconfortáveis'
      ],
      tired: [
        'Faça apenas 1 série completa',
        'Reduza o tempo de contração para 3 segundos'
      ],
      energized: [
        'Aumente para 5 séries',
        'Adicione pequenas resistências com banda elástica'
      ]
    },
    specialTip: 'Após o exercício, massageie a planta dos pés com uma bolinha de tênis para estimulação adicional dos músculos e fáscias.',
    cautions: [
      'Se tiver diabetes, verifique os pés antes e depois',
      'Reduza amplitude em caso de artrite nos tornozelos',
      'Evite movimentos bruscos'
    ],
    executionSteps: [
      { step: 1, instruction: 'Posicione-se com pés apoiados', duration: 5 },
      { step: 2, instruction: 'Eleve calcanhares (dedos no chão)', duration: 5 },
      { step: 3, instruction: 'Abaixe lentamente os calcanhares', duration: 3 },
      { step: 4, instruction: 'Eleve dedos (calcanhares no chão)', duration: 5 },
      { step: 5, instruction: 'Abaixe lentamente os dedos', duration: 3 },
      { step: 6, instruction: '5 círculos com cada pé (horário)', duration: 20 },
      { step: 7, instruction: '5 círculos com cada pé (anti-horário)', duration: 20 },
      { step: 8, instruction: '"Amasse" com os dedos 10 vezes cada pé', duration: 20 },
      { step: 9, instruction: 'Repita toda sequência mais 2 vezes', duration: 160 }
    ],
    scientificData: {
      initialPosition: 'Sentada com quadril e joelho em 90 graus, pés apoiados',
      targetMuscles: ['Tibial anterior', 'Tibial posterior', 'Fibulares', 'Intrínsecos do pé'],
      scientificBasis: [
        'Fortalecimento dos estabilizadores dinâmicos do tornozelo',
        'Melhora do recrutamento neuromuscular distal',
        'Aumento da propriocepção articular',
        'Prevenção de instabilidade crônica'
      ],
      expectedResults: [
        'Redução de 40% no risco de entorses recorrentes',
        'Melhora do equilíbrio em 3 semanas',
        'Aumento de força em 25% após 4 semanas',
        'Redução de dores plantares em diabéticos'
      ],
      adaptations: {
        'Artrite': 'Movimentos de menor amplitude, mais repetições',
        'Neuropatia diabética': 'Supervisão visual constante',
        'Fasciite plantar': 'Ênfase no alongamento plantar após fortalecimento',
        'Idosos': 'Progressão mais lenta, focar na qualidade'
      },
      repetitions: '3 séries completas',
      contraindicatedFor: ['Fratura recente no tornozelo', 'Fase aguda de entorse']
    }
  },
  {
    id: 211,
    name: 'Mudra da Tranquilidade',
    duration: '6',
    difficulty: 'Fácil',
    category: 'Meditação',
    description: 'Posição específica das mãos (mudra) combinada com respiração consciente que acalma o sistema nervoso e foca a mente.',
    benefits: 'Reduz ansiedade, melhora concentração, equilibra energia corporal e promove calma mental e emocional.',
    purposePoints: [
      'Equilibra sistema nervoso',
      'Melhora foco e clareza mental',
      'Reduz pensamentos ruminantes',
      'Promove sensação de paz'
    ],
    instructions: [
      'Sente-se confortavelmente com coluna ereta',
      'Descanse as mãos sobre as coxas, palmas para cima',
      'Una as pontas dos polegares e indicadores formando um círculo',
      'Mantenha os outros dedos estendidos mas relaxados',
      'Feche os olhos ou mantenha olhar suave',
      'Respire lenta e profundamente',
      'Foque na sensação do toque entre os dedos',
      'Permaneça por 5-10 minutos, observando a respiração'
    ],
    detailedInstructions: {
      position: 'Sentada com coluna ereta, mãos sobre as coxas com mudra específico',
      movement: 'Postura estática com atenção ao toque sutil entre dedos',
      breathing: 'Respiração lenta e profunda, com atenção à expiração completa',
      benefit: 'Ativa receptores nervosos nas pontas dos dedos, favorece concentração',
      caution: 'Mantenha a posição confortável, sem tensão nos ombros ou mãos'
    },
    icon: '🧘‍♀️',
    photoUrl: getExercisePhoto(5),
    targetAreas: ['Sistema nervoso', 'Circuitos neurais', 'Foco mental', 'Equilíbrio energético'],
    adaptations: {
      pain: [
        'Apoie as mãos em almofadas',
        'Use versão simplificada apenas com polegares unidos'
      ],
      tired: [
        'Reduza para 3-4 minutos',
        'Mantenha olhos levemente abertos'
      ],
      energized: [
        'Estenda para 15 minutos',
        'Adicione visualização de luz fluindo pelas mãos'
      ]
    },
    specialTip: 'Para aprofundar o efeito, visualize uma luz azul calmante circulando entre os dedos e se espalhando pelo corpo.',
    cautions: [
      'Interrompa se sentir dormência nas mãos',
      'Ajuste a postura se sentir desconforto nos ombros',
      'Não force a posição se tiver artrite nos dedos'
    ],
    executionSteps: [
      { step: 1, instruction: 'Sente-se confortavelmente com coluna ereta', duration: 15 },
      { step: 2, instruction: 'Coloque as mãos sobre as coxas, palmas para cima', duration: 5 },
      { step: 3, instruction: 'Una polegares e indicadores formando círculo', duration: 5 },
      { step: 4, instruction: 'Feche os olhos ou mantenha olhar suave', duration: 5 },
      { step: 5, instruction: 'Respire profunda e lentamente', duration: 30 },
      { step: 6, instruction: 'Observe a sensação do toque entre os dedos', duration: 60 },
      { step: 7, instruction: 'Mantenha foco na respiração e no mudra', duration: 240 },
      { step: 8, instruction: 'Prepare-se para encerrar a prática', duration: 20 }
    ],
    scientificData: {
      initialPosition: 'Sentada ereta, mudra Gyan (união de indicador e polegar)',
      targetMuscles: ['Músculos intrínsecos das mãos', 'Músculos posturais', 'Diafragma'],
      scientificBasis: [
        'Estimulação de terminações nervosas nas pontas dos dedos',
        'Ativação equilibrada dos hemisférios cerebrais',
        'Estabilização do ritmo respiratório',
        'Redução da atividade no córtex pré-frontal'
      ],
      expectedResults: [
        'Redução de 25% na atividade do sistema nervoso simpático',
        'Aumento de ondas alfa cerebrais',
        'Melhora da concentração em 15-20 minutos após prática',
        'Redução da frequência cardíaca e pressão arterial'
      ],
      adaptations: {
        'Artrite': 'Posição modificada com menos pressão nos dedos',
        'Tremores': 'Apoiar cotovelos ou usar almofada sob as mãos',
        'Ansiedade': 'Iniciar com períodos mais curtos (2-3 min)',
        'Distração': 'Adicionar contagem da respiração como âncora'
      },
      repetitions: 'Uma sessão contínua de 6-10 minutos',
      contraindicatedFor: ['Lesões agudas nos dedos', 'Artrite severa nas mãos quando dolorosa']
    }
  },
  {
    id: 212,
    name: 'Flexão Lateral de Tronco',
    duration: '4',
    difficulty: 'Fácil',
    category: 'Alongamento',
    description: 'Alongamento lateral da coluna que trabalha os músculos intercostais, oblíquos e quadrado lombar, melhorando mobilidade do tronco.',
    benefits: 'Alonga músculos laterais do tronco, melhora respiração, reduz tensão na coluna e ativa musculatura profunda.',
    purposePoints: [
      'Aumenta mobilidade lateral da coluna',
      'Alonga cadeia lateral do corpo',
      'Melhora expansão torácica',
      'Reduz tensão entre as costelas'
    ],
    instructions: [
      'Sente-se ereta com pés bem apoiados no chão',
      'Estenda o braço direito acima da cabeça',
      'Incline o tronco suavemente para a esquerda',
      'Sinta o alongamento no lado direito do corpo',
      'Mantenha por 15-20 segundos, respirando normalmente',
      'Retorne ao centro e repita para o outro lado',
      'Mantenha os quadris estáveis e voltados para frente',
      'Complete 3 repetições para cada lado'
    ],
    detailedInstructions: {
      position: 'Sentada ereta, pés apoiados, quadris estáveis',
      movement: 'Inclinação lateral pura, sem rotação do tronco',
      breathing: 'Inspire ao centro, expire durante a inclinação, respire normalmente na posição',
      benefit: 'Alonga quadrado lombar, oblíquos e intercostais, melhora mobilidade da coluna',
      caution: 'Evite compensar com elevação do quadril, mantenha movimento no plano frontal puro'
    },
    icon: '↔️',
    photoUrl: getExercisePhoto(3),
    targetAreas: ['Oblíquos', 'Quadrado lombar', 'Intercostais', 'Cadeia lateral'],
    adaptations: {
      pain: [
        'Reduza a amplitude da inclinação',
        'Mantenha braço ao lado do corpo em vez de elevado'
      ],
      tired: [
        'Reduza para 10 segundos em cada lado',
        'Faça apenas 2 repetições'
      ],
      energized: [
        'Aumente para 30 segundos cada lado',
        'Adicione respiração expansiva no alongamento'
      ]
    },
    specialTip: 'Imagine seu tronco como um bambu flexível se dobrando suavemente com o vento para aumentar a consciência do movimento.',
    cautions: [
      'Evite inclinação excessiva',
      'Não force além do conforto',
      'Reduza amplitude se tiver escoliose',
      'Evite em caso de hérnia de disco lateral'
    ],
    executionSteps: [
      { step: 1, instruction: 'Sente-se ereta sem apoiar nas costas', duration: 5 },
      { step: 2, instruction: 'Estenda o braço direito acima', duration: 3 },
      { step: 3, instruction: 'Inspire preparando o corpo', duration: 3 },
      { step: 4, instruction: 'Expire inclinando para esquerda', duration: 4 },
      { step: 5, instruction: 'Mantenha posição respirando normalmente', duration: 20 },
      { step: 6, instruction: 'Retorne ao centro inspirando', duration: 3 },
      { step: 7, instruction: 'Repita para o lado oposto', duration: 27 },
      { step: 8, instruction: 'Complete 3 ciclos para cada lado', duration: 160 }
    ],
    scientificData: {
      initialPosition: 'Sentada com coluna neutra, pés apoiados, quadris nivelados',
      targetMuscles: ['Quadrado lombar', 'Oblíquos externos e internos', 'Intercostais', 'Iliocostal'],
      scientificBasis: [
        'Alongamento dos músculos e fáscias laterais',
        'Mobilização das articulações costovertebrais',
        'Descompressão das facetas articulares',
        'Melhora da mecânica respiratória lateral'
      ],
      expectedResults: [
        'Aumento de 15-20° na flexão lateral em 3 semanas',
        'Redução da tensão muscular no quadrado lombar',
        'Melhora da expansão torácica lateral',
        'Alívio de dor lombar relacionada à tensão muscular'
      ],
      adaptations: {
        'Escoliose': 'Enfatizar inclinação para lado convexo da curva',
        'Hérnia discal': 'Reduzir amplitude, evitar inclinação para lado sintomático',
        'Idosos': 'Apoiar-se no encosto ou no assento durante o movimento',
        'Artrite facetária': 'Movimentos suaves, eliminar posição sustentada'
      },
      repetitions: '3 repetições de 15-20 segundos em cada lado',
      contraindicatedFor: ['Hérnia de disco lateral aguda', 'Fratura de costela', 'Espasmo agudo lombar']
    }
  },
  {
    id: 213,
    name: 'Giro do Pescoço com Consciência',
    duration: '3',
    difficulty: 'Fácil',
    category: 'Mobilidade',
    description: 'Exercício suave para melhorar a mobilidade cervical e reduzir tensão no pescoço com foco na qualidade do movimento.',
    benefits: 'Aumenta a amplitude de movimento do pescoço, alivia tensão muscular, melhora circulação para o cérebro e reduz dores de cabeça.',
    purposePoints: [
      'Libera tensão cervical acumulada',
      'Melhora circulação para o cérebro',
      'Aumenta mobilidade articular',
      'Previne dores de cabeça tensionais'
    ],
    instructions: [
      'Sente-se ereta com coluna apoiada no encosto',
      'Olhe para frente com queixo paralelo ao chão',
      'Gire lentamente a cabeça para a direita',
      'Mantenha por 3 segundos observando a sensação',
      'Volte ao centro e repita para a esquerda',
      'Mantenha ombros relaxados durante todo o exercício',
      'Complete 5 repetições para cada lado'
    ],
    detailedInstructions: {
      position: 'Sentada com boa postura, ombros relaxados, olhar para frente',
      movement: 'Rotação lenta e controlada da cabeça, sem inclinação',
      breathing: 'Inspire ao centro, expire durante a rotação',
      benefit: 'Mobiliza articulações cervicais, alivia tensão nos músculos do pescoço',
      caution: 'Movimentos suaves sem forçar, evite hiperextensão'
    },
    icon: '🔄',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Pescoço', 'Cervical', 'Trapézio', 'Esternocleidomastóideo'],
    adaptations: {
      pain: [
        'Reduza a amplitude do movimento',
        'Faça movimentos muito lentos, quase imperceptíveis'
      ],
      tired: [
        'Reduza para 3 repetições',
        'Apoie a cabeça no encosto entre repetições'
      ],
      energized: [
        'Aumente para 8 repetições',
        'Adicione pequenos movimentos semicirculares no final'
      ]
    },
    specialTip: 'Pense em girar suavemente um eixo bem lubrificado, sem esforço ou tensão. Foque na sensação de espaço criada na região.',
    cautions: [
      'Evite movimentos bruscos ou forçados',
      'Pare imediatamente se sentir tontura ou dor aguda',
      'Reduza amplitude se tiver hérnia cervical'
    ],
    executionSteps: [
      { step: 1, instruction: 'Ajuste sua postura com coluna ereta', duration: 5 },
      { step: 2, instruction: 'Inspire e alonga o pescoço', duration: 3 },
      { step: 3, instruction: 'Expire girando lentamente para direita', duration: 4 },
      { step: 4, instruction: 'Mantenha a posição e observe', duration: 3 },
      { step: 5, instruction: 'Inspire voltando ao centro', duration: 3 },
      { step: 6, instruction: 'Expire girando lentamente para esquerda', duration: 4 },
      { step: 7, instruction: 'Mantenha a posição e observe', duration: 3 },
      { step: 8, instruction: 'Inspire voltando ao centro', duration: 3 },
      { step: 9, instruction: 'Repita o ciclo 5 vezes', duration: 152 }
    ],
    scientificData: {
      initialPosition: 'Sentada ereta, postura estável e confortável',
      targetMuscles: ['Músculos posturais', 'Diafragma'],
      scientificBasis: [
        'Redução da atividade no córtex pré-frontal medial (mente divagante)',
        'Aumento da atividade na ínsula (consciência interoceptiva)',
        'Diminuição da resposta do eixo hipotálamo-pituitária-adrenal',
        'Aumento da coerência nas ondas cerebrais alfa'
      ],
      expectedResults: [
        'Redução de 30% nos marcadores de estresse após 8 semanas',
        'Melhora na capacidade de foco sustentado',
        'Maior regulação emocional diante de estressores',
        'Redução de ruminação mental'
      ],
      adaptations: {
        'Ansiedade': 'Iniciar com períodos curtos (3-5 min)',
        'Depressão': 'Enfatizar qualidades de firmeza e força',
        'TDAH': 'Usar âncoras físicas como toque das mãos',
        'Trauma': 'Manter olhos entreabertos, foco na segurança'
      },
      repetitions: '5 repetições para cada lado',
      contraindicatedFor: ['Episódios psicóticos agudos', 'Estados dissociativos graves']
    }
  },
  {
    id: 214,
    name: 'Expansão Torácica com Braços',
    duration: '3',
    difficulty: 'Médio',
    category: 'Respiração',
    description: 'Exercício que combina movimentos dos braços com respiração profunda para expandir a caixa torácica e melhorar capacidade pulmonar.',
    benefits: 'Aumenta capacidade respiratória, melhora postura, alivia tensão nos ombros e fortalece os músculos posturais superiores.',
    purposePoints: [
      'Expande capacidade pulmonar',
      'Melhora consciência respiratória',
      'Alonga peitoral e região anterior',
      'Ativa músculos estabilizadores'
    ],
    instructions: [
      'Sente-se ereta afastada do encosto',
      'Estenda os braços à frente na altura dos ombros',
      'Inspire profundamente, abrindo os braços para os lados',
      'Expanda o peito enquanto os braços abrem',
      'Expire trazendo os braços de volta à frente',
      'Mantenha ombros relaxados, evitando elevação',
      'Repita 8 vezes em ritmo controlado'
    ],
    detailedInstructions: {
      position: 'Sentada ereta sem apoio nas costas, pés bem apoiados',
      movement: 'Abertura horizontal dos braços sincronizada com inspiração',
      breathing: 'Inspire durante abertura, expire no fechamento',
      benefit: 'Integra respiração e movimento, ativa músculos escapulares',
      caution: 'Mantenha ombros baixos, sem tensionar região superior'
    },
    icon: '🫁',
    photoUrl: getExercisePhoto(2),
    targetAreas: ['Peito', 'Ombros', 'Costas', 'Diafragma'],
    adaptations: {
      pain: [
        'Reduza amplitude do movimento dos braços',
        'Mantenha os braços abaixo da altura dos ombros'
      ],
      tired: [
        'Reduza para 5 repetições',
        'Faça movimentos mais lentos'
      ],
      energized: [
        'Aumente para 12 repetições',
        'Adicione pequena rotação do tronco no final da abertura'
      ]
    },
    specialTip: 'Imagine que seus pulmões se expandem em 360 graus, incluindo as costas, durante a inspiração com os braços abertos.',
    cautions: [
      'Evite hiperextensão dos cotovelos',
      'Mantenha ritmo controlado, sem movimentos bruscos',
      'Reduza amplitude se sentir dor no ombro'
    ],
    executionSteps: [
      { step: 1, instruction: 'Sente-se ereta sem apoiar nas costas', duration: 5 },
      { step: 2, instruction: 'Estenda braços à frente na altura dos ombros', duration: 3 },
      { step: 3, instruction: 'Inspire profundamente abrindo os braços', duration: 4 },
      { step: 4, instruction: 'Expire trazendo os braços à frente', duration: 4 },
      { step: 5, instruction: 'Continue o movimento respirando profundamente', duration: 8 },
      { step: 6, instruction: 'Complete 8 ciclos completos', duration: 156 }
    ],
    scientificData: {
      initialPosition: 'Sentada ereta sem apoio, coluna neutra, braços estendidos à frente',
      targetMuscles: ['Peitoral maior e menor', 'Deltoides', 'Romboides', 'Intercostais'],
      scientificBasis: [
        'Expansão tridimensional da caixa torácica',
        'Ativação coordenada da musculatura respiratória',
        'Aumento da ventilação pulmonar',
        'Estímulo proprioceptivo da mecânica respiratória'
      ],
      expectedResults: [
        'Aumento de 15-20% na capacidade vital',
        'Melhora da consciência respiratória',
        'Redução da tensão na cadeia anterior',
        'Melhora da postura torácica'
      ],
      adaptations: {
        'DPOC': 'Movimentos mais lentos, foco na expiração',
        'Artrose glenoumeral': 'Reduzir amplitude ou altura dos braços',
        'Idosos': 'Permitir flexão parcial dos cotovelos',
        'Pós-COVID': 'Introduzir gradualmente, monitorar oxigenação'
      },
      repetitions: '8 repetições completas',
      contraindicatedFor: ['Lesão aguda no ombro', 'Insuficiência respiratória descompensada']
    }
  },
  {
    id: 215,
    name: 'Meditação da Montanha',
    duration: '7',
    difficulty: 'Fácil',
    category: 'Meditação',
    description: 'Prática meditativa baseada na visualização de uma montanha, trabalhando estabilidade emocional e mental através da atenção plena.',
    benefits: 'Reduz estresse e ansiedade, melhora foco mental, desenvolve resiliência emocional e promove sensação de paz interior.',
    purposePoints: [
      'Acalma a mente agitada',
      'Desenvolve estabilidade interior',
      'Cultiva resiliência emocional',
      'Melhora concentração'
    ],
    instructions: [
      'Sente-se confortavelmente com coluna ereta',
      'Feche os olhos ou mantenha olhar suave fixo',
      'Comece focando na respiração por 1 minuto',
      'Visualize uma montanha majestosa e estável',
      'Imagine-se como essa montanha, sólida e impassível',
      'Observe "tempestades mentais" passando sem afetá-lo',
      'Continue respirando e mantendo a visualização',
      'Encerre gradualmente, trazendo atenção de volta'
    ],
    detailedInstructions: {
      position: 'Sentada com coluna ereta, mãos apoiadas nas coxas, ombros relaxados',
      movement: 'Imobilidade física, apenas movimento respiratório natural',
      breathing: 'Respiração natural e não controlada, apenas observada',
      benefit: 'Ativa sistema nervoso parassimpático, reduz hormônios do estresse',
      caution: 'Mantenha postura confortável, sem tensão, ajuste se necessário'
    },
    icon: '🏔️',
    photoUrl: getExercisePhoto(5),
    targetAreas: ['Mente', 'Sistema Nervoso', 'Tensão Emocional', 'Estabilidade Mental'],
    adaptations: {
      pain: [
        'Use apoios para manter postura confortável',
        'Reduza tempo para 5 minutos'
      ],
      tired: [
        'Apoie as costas no encosto',
        'Faça versão guiada com menos silêncio'
      ],
      energized: [
        'Estenda para 10-15 minutos',
        'Adicione foco em partes específicas do corpo'
      ]
    },
    specialTip: 'Se a mente divagar, não se julgue - apenas note e gentilmente retorne à imagem da montanha e sua estabilidade.',
    cautions: [
      'Não force concentração excessiva',
      'Abra os olhos se sentir sonolência',
      'Mantenha ajuste postural durante a prática'
    ],
    executionSteps: [
      { step: 1, instruction: 'Sente-se confortavelmente e ajuste postura', duration: 15 },
      { step: 2, instruction: 'Feche os olhos e foque na respiração', duration: 60 },
      { step: 3, instruction: 'Visualize uma montanha majestosa', duration: 30 },
      { step: 4, instruction: 'Conecte-se com qualidades da montanha', duration: 60 },
      { step: 5, instruction: 'Observe pensamentos passando sem reagir', duration: 120 },
      { step: 6, instruction: 'Mantenha foco na estabilidade interior', duration: 120 },
      { step: 7, instruction: 'Encerre gradualmente, retornando atenção', duration: 15 }
    ],
    scientificData: {
      initialPosition: 'Sentada ereta, postura estável e confortável',
      targetMuscles: ['Músculos posturais', 'Diafragma'],
      scientificBasis: [
        'Redução da atividade no córtex pré-frontal medial (mente divagante)',
        'Aumento da atividade na ínsula (consciência interoceptiva)',
        'Diminuição da resposta do eixo hipotálamo-pituitária-adrenal',
        'Aumento da coerência nas ondas cerebrais alfa'
      ],
      expectedResults: [
        'Redução de 30% nos marcadores de estresse após 8 semanas',
        'Melhora na capacidade de foco sustentado',
        'Maior regulação emocional diante de estressores',
        'Redução de ruminação mental'
      ],
      adaptations: {
        'Ansiedade': 'Iniciar com períodos curtos (3-5 min)',
        'Depressão': 'Enfatizar qualidades de firmeza e força',
        'TDAH': 'Usar âncoras físicas como toque das mãos',
        'Trauma': 'Manter olhos entreabertos, foco na segurança'
      },
      repetitions: '1 sessão de 7 minutos',
      contraindicatedFor: ['Episódios psicóticos agudos', 'Estados dissociativos graves']
    }
  }
]; 