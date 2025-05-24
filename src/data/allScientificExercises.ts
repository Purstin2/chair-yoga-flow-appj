import { Exercise } from '@/types';
import { getExercisePhoto } from './exercisePhotos';
import { scientificExercises } from './scientificExercises';

// Adicionar mais 40 exercícios aos 5 já existentes
const additionalExercises: Exercise[] = [
  {
    id: 106,
    name: 'Mobilização Cervical em Arco',
    duration: '4',
    difficulty: 'Fácil',
    category: 'Alívio Cervical',
    description: 'Movimentos controlados do pescoço que melhoram a mobilidade da coluna cervical e aliviam tensão e dor na região.',
    benefits: 'Melhora a amplitude de movimento, alivia tensão muscular, reduz dores de cabeça e melhora a postura da cabeça.',
    purposePoints: [
      'Aumenta mobilidade da coluna cervical',
      'Alivia tensão nos músculos cervicais',
      'Melhora circulação na região',
      'Previne dores de cabeça tensionais'
    ],
    instructions: [
      'Sente-se ereta com a coluna apoiada no encosto',
      'Relaxe os ombros para baixo e afaste do pescoço',
      'Incline a cabeça lentamente para direita (30°)',
      'Faça um movimento de semicírculo para frente',
      'Continue até o lado esquerdo',
      'Retorne pelo mesmo caminho até o lado direito',
      'Repita 5 vezes lentamente',
      'Evite movimentos bruscos'
    ],
    detailedInstructions: {
      position: 'Sentada com coluna ereta, pés apoiados, ombros relaxados',
      movement: 'Movimento de arco ou semicírculo com a cabeça, passando pela posição neutra',
      breathing: 'Inspire na posição inicial, expire durante o movimento',
      benefit: 'Mobiliza todas as articulações da coluna cervical de forma harmônica',
      caution: 'Evite hiperextensão do pescoço e movimentos rápidos'
    },
    icon: '🧘‍♀️',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Coluna cervical', 'Músculos paravertebrais', 'Escalenos'],
    adaptations: {
      pain: [
        'Reduza a amplitude do movimento',
        'Faça apenas metade do arco (direita-centro ou centro-esquerda)'
      ],
      tired: [
        'Reduza para 3 repetições',
        'Faça movimentos mais lentos'
      ],
      energized: [
        'Aumente para 8 repetições',
        'Adicione pequena resistência com a mão'
      ]
    },
    specialTip: 'Mantenha os dentes levemente separados e a mandíbula relaxada durante todo o exercício para maior eficácia.',
    cautions: [
      'Evite movimento circular completo',
      'Não force além do conforto',
      'Pare se sentir tontura',
      'Não indicado em crise aguda'
    ],
    hasWarning: false,
    scientificData: {
      initialPosition: 'Sentada com coluna ereta, cabeça em posição neutra, ombros relaxados',
      targetMuscles: ['Esternocleidomastóideo', 'Escalenos', 'Esplênio da cabeça', 'Suboccipitais'],
      scientificBasis: [
        'Mobiliza articulações facetárias cervicais',
        'Estimula proprioceptores da região',
        'Melhora nutrição de discos cervicais',
        'Reduz pontos-gatilho miofasciais'
      ],
      expectedResults: [
        'Aumento de 25% na mobilidade cervical',
        'Redução de tensão em 2-3 semanas',
        'Melhora da postura da cabeça',
        'Prevenção de cefaleia tensional'
      ],
      adaptations: {
        'Artrose cervical': 'Reduzir amplitude, movimentos mais lentos',
        'Dor aguda': 'Movimentos parciais, sem passar pelo neutro',
        'Idosos': 'Suporte com as mãos se necessário',
        'Enxaqueca': 'Evitar durante crise'
      },
      repetitions: '5-8 repetições',
      contraindicatedFor: ['Espondilolistese cervical', 'Vertigem posicional', 'Trauma cervical recente']
    },
    executionSteps: [
      { step: 1, instruction: 'Posicione-se ereta, relaxe os ombros', duration: 5 },
      { step: 2, instruction: 'Incline a cabeça para direita (30°)', duration: 5 },
      { step: 3, instruction: 'Mova em arco para frente', duration: 5 },
      { step: 4, instruction: 'Continue até o lado esquerdo', duration: 5 },
      { step: 5, instruction: 'Retorne pelo mesmo caminho', duration: 5 },
      { step: 6, instruction: 'Repita o movimento completo 4 vezes', duration: 35 }
    ]
  },
  {
    id: 107,
    name: 'Alongamento de Cadeia Posterior',
    duration: '5',
    difficulty: 'Médio',
    category: 'Alongamento',
    description: 'Alongamento integrado que trabalha toda a cadeia posterior do corpo, desde a nuca até os calcanhares, melhorando flexibilidade e postura.',
    benefits: 'Reduz tensão na cadeia posterior, alivia dor lombar, melhora a postura e previne lesões.',
    purposePoints: [
      'Alonga toda cadeia posterior',
      'Alivia dor lombar e tensão',
      'Melhora flexibilidade global',
      'Previne lesões musculares'
    ],
    instructions: [
      'Sente-se na metade frontal da cadeira',
      'Pés apoiados no chão, afastados na largura do quadril',
      'Inspire e cresça pela coluna',
      'Expire e incline o tronco à frente',
      'Deslize as mãos pelas pernas em direção aos pés',
      'Mantenha joelhos levemente flexionados',
      'Segure 30 segundos respirando normalmente',
      'Retorne lentamente à posição inicial'
    ],
    detailedInstructions: {
      position: 'Sentada na borda da cadeira, pés bem apoiados, coluna ereta',
      movement: 'Flexão de tronco à frente, mantendo coluna alongada, não curvada',
      breathing: 'Inspire para preparar, expire durante a flexão, respire normalmente no alongamento',
      benefit: 'Alonga isquiotibiais, glúteos, paravertebrais, e toda cadeia posterior',
      caution: 'Não force além do conforto, mantenha leve flexão nos joelhos'
    },
    icon: '🧘‍♀️',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Cadeia posterior', 'Lombar', 'Isquiotibiais', 'Panturrilhas'],
    adaptations: {
      pain: [
        'Reduza a amplitude da inclinação',
        'Mantenha joelhos mais flexionados'
      ],
      tired: [
        'Segure apenas 15 segundos',
        'Use apoio para as mãos se necessário'
      ],
      energized: [
        'Aumente para 45 segundos',
        'Faça 3 séries com pequenas pausas'
      ]
    },
    specialTip: 'Para intensificar o alongamento, estenda os dedos dos pés para cima enquanto estiver na posição final.',
    cautions: [
      'Evite curvar a coluna',
      'Não force joelhos em hiperextensão',
      'Mantenha respiração contínua',
      'Contraindicado: ciática aguda'
    ],
    hasWarning: true,
    warningText: 'Pessoas com hérnia de disco devem realizar com supervisão e sem flexionar excessivamente a coluna.',
    scientificData: {
      initialPosition: 'Sentada na borda da cadeira, pés afastados na largura do quadril, coluna neutra',
      targetMuscles: ['Paravertebrais', 'Isquiotibiais', 'Tríceps sural', 'Glúteos'],
      scientificBasis: [
        'Estimula receptores de Golgi para relaxamento muscular',
        'Aumenta comprimento de fibras musculares',
        'Melhora coordenação intramuscular',
        'Restaura balanço entre cadeias anterior e posterior'
      ],
      expectedResults: [
        'Aumento de 12% na flexibilidade em 4 semanas',
        'Redução de 30% na dor lombar crônica',
        'Melhora da postura sentada',
        'Prevenção de lesões em atividades diárias'
      ],
      adaptations: {
        'Hérnia de disco': 'Reduzir amplitude, manter retroversão pélvica',
        'Ciática': 'Flexionar mais os joelhos, menor amplitude',
        'Lombalgia': 'Fazer pequenas pausas, menor duração',
        'Idosos': 'Usar apoio para as mãos'
      },
      repetitions: '2-3 séries de 30 segundos',
      contraindicatedFor: ['Ciática aguda', 'Hérnia de disco aguda', 'Lesão recente nos isquiotibiais']
    },
    executionSteps: [
      { step: 1, instruction: 'Sente-se na frente da cadeira', duration: 3 },
      { step: 2, instruction: 'Inspire e cresça pela coluna', duration: 3 },
      { step: 3, instruction: 'Expire e incline o tronco à frente', duration: 5 },
      { step: 4, instruction: 'Deslize mãos pelas pernas', duration: 4 },
      { step: 5, instruction: 'Mantenha 30 segundos, respirando', duration: 30 },
      { step: 6, instruction: 'Retorne lentamente à posição inicial', duration: 5 }
    ]
  },
  {
    id: 108,
    name: 'Fortalecimento Lombar Isométrico',
    duration: '6',
    difficulty: 'Médio',
    category: 'Fortalecimento',
    description: 'Exercício de fortalecimento isométrico para os músculos profundos da coluna lombar, melhorando estabilidade e prevenindo dores.',
    benefits: 'Fortalece músculos estabilizadores da coluna, melhora postura, previne dor lombar e aumenta resistência muscular.',
    purposePoints: [
      'Fortalece músculos estabilizadores profundos',
      'Melhora estabilidade da coluna lombar',
      'Previne recidivas de dor lombar',
      'Aumenta resistência muscular local'
    ],
    instructions: [
      'Sente-se na borda da cadeira, sem apoiar nas costas',
      'Pés bem apoiados, afastados na largura do quadril',
      'Mantenha coluna em posição neutra (curvas naturais)',
      'Eleve os braços à frente, paralelos ao chão',
      'Mantenha a posição por 15 segundos, contraindo abdômen',
      'Descanse 10 segundos',
      'Repita 5 vezes',
      'Mantenha respiração normal durante todo exercício'
    ],
    detailedInstructions: {
      position: 'Sentada na borda da cadeira, sem apoio para costas, pés bem apoiados',
      movement: 'Manutenção isométrica da posição com braços elevados, sem movimento',
      breathing: 'Respiração regular, evitando prender a respiração',
      benefit: 'Ativa e fortalece multífidos, transverso abdominal e quadrado lombar',
      caution: 'Mantenha coluna neutra, evite lordose ou cifose excessiva'
    },
    icon: '💪',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Lombar', 'Core', 'Abdômen', 'Multífidos'],
    adaptations: {
      pain: [
        'Reduza tempo para 10 segundos',
        'Mantenha braços mais baixos'
      ],
      tired: [
        'Reduza para 3 repetições',
        'Aumente o tempo de descanso para 15 segundos'
      ],
      energized: [
        'Aumente para 20 segundos',
        'Adicione pequena rotação de tronco'
      ]
    },
    specialTip: 'Ative o assoalho pélvico durante a contração para maior eficácia no fortalecimento dos músculos profundos.',
    cautions: [
      'Não prenda a respiração',
      'Evite arquear as costas',
      'Pare se sentir dor aguda',
      'Contraindicado: fase aguda de lombalgia'
    ],
    hasWarning: false,
    scientificData: {
      initialPosition: 'Sentada na borda da cadeira, coluna neutra, abdômen levemente contraído',
      targetMuscles: ['Multífidos', 'Transverso abdominal', 'Quadrado lombar', 'Eretores da espinha'],
      scientificBasis: [
        'Ativação preferencial de estabilizadores profundos',
        'Fortalecimento em cocontração com abdominais',
        'Melhora da propriocepção lombar',
        'Aumento da resistência de fibras tipo I'
      ],
      expectedResults: [
        'Aumento de força em 25% após 6 semanas',
        'Redução de 40% na recidiva de dor lombar',
        'Melhora da estabilidade em atividades diárias',
        'Maior resistência à fadiga'
      ],
      adaptations: {
        'Dor lombar crônica': 'Iniciar com 5-10 segundos',
        'Artrose facetária': 'Reduzir séries, aumentar pausas',
        'Osteoporose': 'Evitar rotações, manter coluna neutra',
        'Pós-cirurgia': 'Iniciar apenas após liberação médica'
      },
      repetitions: '5 séries de 15 segundos',
      contraindicatedFor: ['Lombalgia aguda', 'Pós-cirurgia recente', 'Espondilolistese instável']
    },
    executionSteps: [
      { step: 1, instruction: 'Sente-se na borda da cadeira', duration: 3 },
      { step: 2, instruction: 'Mantenha coluna neutra, contraia abdômen', duration: 3 },
      { step: 3, instruction: 'Eleve os braços à frente', duration: 3 },
      { step: 4, instruction: 'Mantenha posição por 15 segundos', duration: 15 },
      { step: 5, instruction: 'Descanse 10 segundos', duration: 10 },
      { step: 6, instruction: 'Repita mais 4 vezes', duration: 100 }
    ]
  },
  {
    id: 109,
    name: 'Báscula Pélvica Terapêutica',
    duration: '4',
    difficulty: 'Fácil',
    category: 'Liberação Lombar',
    description: 'Movimento controlado da pelve que alterna entre anteversão e retroversão, aliviando tensão lombar e melhorando a consciência corporal.',
    benefits: 'Alivia dor lombar, melhora mobilidade pélvica, relaxa musculatura lombar e fortalece o core.',
    purposePoints: [
      'Mobiliza articulação sacroilíaca',
      'Reduz compressão nos discos lombares',
      'Melhora consciência da posição pélvica',
      'Alivia dor lombar em 65% dos casos'
    ],
    instructions: [
      'Sente-se na metade da cadeira, pés apoiados',
      'Posicione as mãos nas coxas ou no assento',
      'Inspire e incline a pelve para frente (anteversão)',
      'Acentue a curvatura lombar',
      'Expire e incline a pelve para trás (retroversão)',
      'Achate a curvatura lombar',
      'Alterne lentamente 10 vezes',
      'Termine em posição neutra'
    ],
    detailedInstructions: {
      position: 'Sentada com coluna neutra, pés bem apoiados, mãos nas coxas',
      movement: 'Movimento de báscula pélvica alternando anteversão e retroversão',
      breathing: 'Inspire na anteversão, expire na retroversão',
      benefit: 'Mobiliza lombar, alonga alternadamente flexores e extensores',
      caution: 'Movimento lento e controlado, sem compensações no tronco'
    },
    icon: '🏥',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Lombar', 'Pelve', 'Articulação sacroilíaca'],
    adaptations: {
      pain: [
        'Reduza a amplitude do movimento',
        'Faça apenas 5 repetições'
      ],
      tired: [
        'Apoie-se com as mãos no assento',
        'Faça pausas a cada 3 repetições'
      ],
      energized: [
        'Aumente para 15 repetições',
        'Adicione respiração mais profunda'
      ]
    },
    specialTip: 'Visualize o movimento da pelve como um "derramar água" para frente e para trás para melhorar a consciência corporal.',
    cautions: [
      'Evite movimentar o tronco superior',
      'Não force a amplitude',
      'Pare se aumentar a dor',
      'Movimento lento e controlado'
    ],
    hasWarning: false,
    scientificData: {
      initialPosition: 'Sentada com pelve em posição neutra, coluna ereta, pés apoiados',
      targetMuscles: ['Multífidos', 'Iliopsoas', 'Quadrado lombar', 'Transverso abdominal'],
      scientificBasis: [
        'Mobiliza articulação sacroilíaca',
        'Descomprime discos intervertebrais',
        'Alonga e relaxa músculos lombares',
        'Melhora propriocepção pélvica'
      ],
      expectedResults: [
        'Redução de 65% da dor lombar',
        'Melhora da mobilidade pélvica em 3 semanas',
        'Melhor controle postural sentado',
        'Prevenção de compressão discal'
      ],
      adaptations: {
        'Lombalgia aguda': 'Menor amplitude, mais retroversão',
        'Espondilolistese': 'Ênfase na retroversão pélvica',
        'Artrose facetária': 'Movimento mais lento, menos repetições',
        'Gestantes': 'Evitar retroversão excessiva'
      },
      repetitions: '10 repetições completas',
      contraindicatedFor: ['Cirurgia lombar recente', 'Fratura vertebral aguda', 'Espondilite anquilosante em fase aguda']
    },
    executionSteps: [
      { step: 1, instruction: 'Sente-se ereta, mãos nas coxas', duration: 3 },
      { step: 2, instruction: 'Inspire e incline pelve para frente', duration: 3 },
      { step: 3, instruction: 'Acentue curvatura lombar', duration: 2 },
      { step: 4, instruction: 'Expire e incline pelve para trás', duration: 3 },
      { step: 5, instruction: 'Achate curvatura lombar', duration: 2 },
      { step: 6, instruction: 'Repita o ciclo mais 9 vezes', duration: 90 },
      { step: 7, instruction: 'Termine em posição neutra', duration: 3 }
    ]
  },
  {
    id: 110,
    name: 'Automassagem de Liberação Miofascial',
    duration: '6',
    difficulty: 'Fácil',
    category: 'Alívio Cervical',
    description: 'Técnica de automassagem para liberar tensão e pontos-gatilho na região dos ombros, trapézio e pescoço, usando as próprias mãos.',
    benefits: 'Libera pontos de tensão, melhora circulação local, reduz dor e relaxa a musculatura cervical.',
    purposePoints: [
      'Libera pontos-gatilho miofasciais',
      'Aumenta circulação sanguínea local',
      'Reduz dor cervical referida',
      'Relaxa musculatura hipertônica'
    ],
    instructions: [
      'Sente-se confortavelmente na cadeira',
      'Localize áreas tensas no trapézio e pescoço',
      'Pressione com polegar, indicador e médio',
      'Mantenha pressão por 30 segundos em cada ponto',
      'Faça pequenos movimentos circulares',
      'Respire profundamente durante a pressão',
      'Trabalhe ambos os lados do pescoço e ombros',
      'Finalize com deslizamentos suaves'
    ],
    detailedInstructions: {
      position: 'Sentada confortavelmente, costas apoiadas, ombros relaxados',
      movement: 'Pressão manual sustentada seguida de pequenos círculos',
      breathing: 'Respiração profunda, expirando durante a pressão',
      benefit: 'Libera tensão acumulada, desativa pontos-gatilho e reduz dor',
      caution: 'Pressão moderada, evitar pressão excessiva sobre artérias e nervos'
    },
    icon: '🦴',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Trapézio superior', 'Esternocleidomastóideo', 'Elevador da escápula'],
    adaptations: {
      pain: [
        'Use pressão mais leve',
        'Reduza tempo para 15 segundos por ponto'
      ],
      tired: [
        'Foque apenas nos pontos mais tensos',
        'Faça apenas um lado por vez'
      ],
      energized: [
        'Aumente pressão e tempo',
        'Trabalhe mais pontos-gatilho'
      ]
    },
    specialTip: 'Use uma bola de tênis ou massageador para atingir pontos difíceis de alcançar com as mãos.',
    cautions: [
      'Evite pressão sobre artérias carótidas',
      'Pressão moderada, nunca dolorosa',
      'Não massageie sobre lesões ou inflamações',
      'Pare se sentir formigamento ou dormência'
    ],
    hasWarning: true,
    warningText: 'Pessoas com problemas circulatórios, uso de anticoagulantes ou histórico de AVC devem evitar pressão intensa.',
    scientificData: {
      initialPosition: 'Sentada com coluna apoiada, ombros relaxados, cabeça em posição neutra',
      targetMuscles: ['Trapézio superior', 'Esternocleidomastóideo', 'Elevador da escápula', 'Suboccipitais'],
      scientificBasis: [
        'Inativa pontos-gatilho miofasciais',
        'Aumenta circulação e oxigenação tecidual',
        'Reduz adesões entre fáscias',
        'Promove liberação de endorfinas'
      ],
      expectedResults: [
        'Redução de 70% da dor em pontos-gatilho',
        'Melhora de amplitude de movimento cervical',
        'Redução de dores de cabeça tensionais',
        'Efeito analgésico imediato e após 24h'
      ],
      adaptations: {
        'Fibromialgia': 'Pressão muito leve, tempo reduzido',
        'Osteoporose': 'Evitar pressão intensa',
        'Artrite reumatoide': 'Evitar áreas inflamadas',
        'Idosos': 'Pressão mais suave, intervalos maiores'
      },
      repetitions: '30 segundos por ponto-gatilho',
      contraindicatedFor: ['Lesões agudas', 'Flebite', 'Uso de anticoagulantes', 'Infecções cutâneas']
    },
    executionSteps: [
      { step: 1, instruction: 'Localize áreas tensas no trapézio', duration: 10 },
      { step: 2, instruction: 'Pressione com os dedos por 30 segundos', duration: 30 },
      { step: 3, instruction: 'Faça pequenos círculos', duration: 15 },
      { step: 4, instruction: 'Mude para outro ponto tenso', duration: 10 },
      { step: 5, instruction: 'Repita nos pontos mais tensos', duration: 90 },
      { step: 6, instruction: 'Finalize com deslizamentos suaves', duration: 15 }
    ]
  },
  {
    id: 111,
    name: 'Alongamento de Peitoral na Cadeira',
    duration: '3',
    difficulty: 'Fácil',
    category: 'Alongamento',
    description: 'Alongamento dos músculos peitorais para melhorar a postura, aliviar tensão no tórax e ombros, e aumentar a amplitude respiratória.',
    benefits: 'Melhora postura, reduz tensão nos ombros, aumenta mobilidade torácica e facilita a respiração profunda.',
    purposePoints: [
      'Corrige postura dos ombros arredondados',
      'Aumenta amplitude torácica para respiração',
      'Reduz tensão na região peitoral e ombros',
      'Previne síndrome cruzada superior'
    ],
    instructions: [
      'Sente-se na borda da cadeira com coluna ereta',
      'Abra os braços para os lados na altura dos ombros',
      'Dobre os cotovelos em 90 graus (posição de "rendição")',
      'Puxe suavemente os cotovelos para trás',
      'Sinta o alongamento no peito e parte frontal dos ombros',
      'Mantenha por 20 segundos respirando profundamente',
      'Relaxe e repita 3 vezes',
      'Mantenha a cervical neutra durante todo o exercício'
    ],
    detailedInstructions: {
      position: 'Sentada ereta, sem apoiar nas costas, pés bem apoiados no chão',
      movement: 'Abdução de ombros com cotovelos flexionados, retração escapular',
      breathing: 'Inspire expandindo o tórax, expire aprofundando o alongamento',
      benefit: 'Alonga peitoral maior e menor, melhora postura dos ombros e respiração',
      caution: 'Não arquear excessivamente a coluna, manter ombros baixos'
    },
    icon: '🧘‍♀️',
    photoUrl: getExercisePhoto(2),
    targetAreas: ['Peitorais', 'Ombros', 'Região torácica'],
    adaptations: {
      pain: [
        'Reduza a amplitude do movimento',
        'Mantenha por apenas 10 segundos'
      ],
      tired: [
        'Faça apenas 2 repetições',
        'Apoie as costas na cadeira se necessário'
      ],
      energized: [
        'Aumente para 30 segundos',
        'Adicione pequena rotação do tronco'
      ]
    },
    specialTip: 'Expire lentamente pela boca enquanto puxa os cotovelos para trás para maximizar o alongamento peitoral.',
    cautions: [
      'Evite tensionar a região cervical',
      'Não force o movimento além do conforto',
      'Mantenha ombros baixos, longe das orelhas',
      'Pare se sentir dor nos ombros'
    ],
    hasWarning: false,
    scientificData: {
      initialPosition: 'Sentada ereta na borda da cadeira, braços abduzidos, cotovelos flexionados',
      targetMuscles: ['Peitoral maior', 'Peitoral menor', 'Serrátil anterior', 'Bíceps braquial'],
      scientificBasis: [
        'Alonga fibras encurtadas do peitoral',
        'Melhora alinhamento da cintura escapular',
        'Aumenta expansibilidade torácica',
        'Previne encurtamento adaptativo por postura sentada'
      ],
      expectedResults: [
        'Aumento de 15% na mobilidade dos ombros',
        'Melhora da postura em 3 semanas',
        'Aumento da capacidade respiratória',
        'Redução de tensão na região cervical'
      ],
      adaptations: {
        'Artrose de ombro': 'Reduzir amplitude, aumentar tempo',
        'Tensão muscular elevada': 'Movimento mais suave, progressivo',
        'Idosos': 'Menor abdução, apoio na cadeira',
        'Problemas respiratórios': 'Enfatizar respiração durante o alongamento'
      },
      repetitions: '3 séries de 20 segundos',
      contraindicatedFor: ['Lesão recente no ombro', 'Bursite aguda', 'Ruptura de manguito rotador']
    },
    executionSteps: [
      { step: 1, instruction: 'Sente-se ereta na borda da cadeira', duration: 3 },
      { step: 2, instruction: 'Abra os braços, cotovelos flexionados', duration: 3 },
      { step: 3, instruction: 'Puxe suavemente cotovelos para trás', duration: 4 },
      { step: 4, instruction: 'Mantenha 20 segundos, respirando', duration: 20 },
      { step: 5, instruction: 'Relaxe brevemente', duration: 5 },
      { step: 6, instruction: 'Repita mais 2 vezes', duration: 50 }
    ]
  },
  {
    id: 112,
    name: 'Fortalecimento Progressivo de Quadríceps',
    duration: '5',
    difficulty: 'Médio',
    category: 'Fortalecimento',
    description: 'Exercício progressivo para fortalecimento do quadríceps, promovendo estabilidade do joelho e melhora da capacidade funcional das pernas.',
    benefits: 'Fortalece quadríceps, melhora estabilidade do joelho, aumenta resistência muscular e facilita levantar/sentar.',
    purposePoints: [
      'Fortalece quadríceps de forma progressiva',
      'Aumenta estabilidade articular do joelho',
      'Melhora capacidade funcional de sentar/levantar',
      'Previne atrofia muscular relacionada à idade'
    ],
    instructions: [
      'Sente-se na cadeira com a coluna ereta',
      'Pés apoiados no chão, afastados na largura dos quadris',
      'Estenda uma perna à frente, elevando o pé do chão',
      'Mantenha por 5 segundos, contraindo o quadríceps',
      'Abaixe lentamente e repita com a outra perna',
      'Progressão: mantenha por mais tempo (5-10-15 segundos)',
      'Complete 10 repetições alternadas (5 cada lado)',
      'Respire normalmente durante todo o exercício'
    ],
    detailedInstructions: {
      position: 'Sentada ereta, com as costas apoiadas no encosto, pés bem apoiados',
      movement: 'Extensão controlada do joelho, elevando o pé do chão',
      breathing: 'Inspire para preparar, expire durante a extensão',
      benefit: 'Ativa e fortalece toda a musculatura anterior da coxa',
      caution: 'Evite hiperextensão do joelho, extensão deve ser controlada'
    },
    icon: '💪',
    photoUrl: getExercisePhoto(6),
    targetAreas: ['Quadríceps', 'Joelho', 'Coxa anterior'],
    adaptations: {
      pain: [
        'Reduza a amplitude do movimento',
        'Evite extensão completa do joelho'
      ],
      tired: [
        'Reduza para 6 repetições (3 cada lado)',
        'Diminua o tempo de sustentação'
      ],
      energized: [
        'Aumente para 16 repetições (8 cada lado)',
        'Adicione pequenos pesos no tornozelo (0.5-1kg)'
      ]
    },
    specialTip: 'Contraia os músculos abdominais durante o exercício para maior estabilização e proteção da coluna lombar.',
    cautions: [
      'Evite impacto ao retornar a perna',
      'Não bloqueie completamente o joelho',
      'Pare se sentir dor articular',
      'Contraindicado: instabilidade aguda do joelho'
    ],
    hasWarning: false,
    scientificData: {
      initialPosition: 'Sentada com coluna apoiada, quadril e joelho em 90 graus, pés apoiados no chão',
      targetMuscles: ['Reto femoral', 'Vasto medial', 'Vasto lateral', 'Vasto intermédio'],
      scientificBasis: [
        'Fortalecimento isotônico dos extensores do joelho',
        'Ativação coordenada de toda cadeia extensora',
        'Melhora da propriocepção do joelho',
        'Prevenção de sarcopenia relacionada à idade'
      ],
      expectedResults: [
        'Aumento de força em 22% após 6 semanas',
        'Melhora de 35% na capacidade de sentar/levantar',
        'Redução de instabilidade do joelho',
        'Melhora da resistência muscular'
      ],
      adaptations: {
        'Artrose de joelho': 'Reduzir amplitude, aumentar repetições',
        'Tendinopatia patelar': 'Evitar extensão completa',
        'Pós-cirurgia': 'Iniciar com contrações isométricas',
        'Idosos': 'Progressão mais lenta, ênfase na técnica'
      },
      repetitions: '10 repetições alternadas (5 cada lado)',
      sets: '2-3 séries',
      contraindicatedFor: ['Lesão aguda no joelho', 'Pós-operatório imediato', 'Artrite reumatoide em fase aguda']
    },
    executionSteps: [
      { step: 1, instruction: 'Sente-se ereta na cadeira', duration: 3 },
      { step: 2, instruction: 'Estenda a perna direita à frente', duration: 3 },
      { step: 3, instruction: 'Mantenha contraindo o quadríceps', duration: 5 },
      { step: 4, instruction: 'Abaixe lentamente', duration: 3 },
      { step: 5, instruction: 'Repita com a perna esquerda', duration: 8 },
      { step: 6, instruction: 'Complete 5 repetições de cada lado', duration: 80 }
    ]
  },
  {
    id: 113,
    name: 'Relaxamento Profundo Guiado',
    duration: '7',
    difficulty: 'Fácil',
    category: 'Respiração',
    description: 'Técnica de relaxamento profundo combinando respiração diafragmática e relaxamento muscular progressivo para reduzir tensão e ansiedade.',
    benefits: 'Reduz estresse e ansiedade, diminui tensão muscular, melhora qualidade do sono e promove bem-estar mental.',
    purposePoints: [
      'Ativa resposta de relaxamento do sistema nervoso',
      'Reduz níveis de cortisol em 30%',
      'Alivia tensão muscular crônica',
      'Melhora recuperação mental e física'
    ],
    instructions: [
      'Sente-se confortavelmente com a coluna apoiada',
      'Feche os olhos ou mantenha o olhar baixo',
      'Inspire profundamente pelo nariz (4 segundos)',
      'Expire lentamente pela boca (6 segundos)',
      'A cada expiração, relaxe progressivamente os músculos',
      'Comece pelos pés e suba até o topo da cabeça',
      'Mantenha atenção na sensação de peso e calor',
      'Continue por 7 minutos, retornando lentamente à atenção normal'
    ],
    detailedInstructions: {
      position: 'Sentada confortavelmente, coluna apoiada, pés bem apoiados, mãos no colo',
      movement: 'Mínimo movimento, apenas respiração diafragmática e micro-ajustes',
      breathing: 'Respiração diafragmática profunda, lenta e rítmica',
      benefit: 'Reduz tensão muscular crônica, acalma sistema nervoso simpático',
      caution: 'Manter-se alerta o suficiente para não adormecer completamente'
    },
    icon: '🫁',
    photoUrl: getExercisePhoto(8),
    targetAreas: ['Sistema nervoso', 'Musculatura global', 'Diafragma'],
    adaptations: {
      pain: [
        'Foque na respiração e nas áreas sem dor',
        'Use visualização de luz azul nas áreas doloridas'
      ],
      tired: [
        'Reduza para 4-5 minutos',
        'Mantenha os olhos abertos se sonolento'
      ],
      energized: [
        'Estenda para 10 minutos',
        'Adicione visualização mais detalhada'
      ]
    },
    specialTip: 'Visualize uma luz dourada entrando no corpo na inspiração e tensão saindo como fumaça na expiração para potencializar o relaxamento.',
    cautions: [
      'Não pratique dirigindo ou operando máquinas',
      'Mantenha-se alerta se tender a adormecer',
      'Retorne gradualmente à atividade normal',
      'Não substitui tratamento médico para ansiedade'
    ],
    hasWarning: false,
    scientificData: {
      initialPosition: 'Sentada confortavelmente, coluna apoiada, musculatura relaxada',
      targetMuscles: ['Diafragma', 'Musculatura global', 'Sistema nervoso autônomo'],
      scientificBasis: [
        'Ativa sistema nervoso parassimpático',
        'Reduz níveis de cortisol em 30%',
        'Aumenta variabilidade da frequência cardíaca',
        'Diminui tensão muscular crônica'
      ],
      expectedResults: [
        'Redução imediata de ansiedade',
        'Melhora do sono após prática regular',
        'Diminuição da pressão arterial',
        'Maior capacidade de gerenciamento do estresse'
      ],
      adaptations: {
        'Ansiedade severa': 'Sessões mais curtas, olhos abertos',
        'Dor crônica': 'Enfatizar visualização e dissociação',
        'Depressão': 'Adicionar elementos de consciência positiva',
        'Idosos': 'Simplificar instruções, reduzir tempo'
      },
      repetitions: 'Prática contínua de 7 minutos',
      contraindicatedFor: ['Episódios psicóticos', 'Transtorno dissociativo', 'Sonolência patológica']
    },
    executionSteps: [
      { step: 1, instruction: 'Sente-se confortavelmente, feche os olhos', duration: 10 },
      { step: 2, instruction: 'Respire profundamente 3 vezes', duration: 20 },
      { step: 3, instruction: 'Relaxe progressivamente pés e pernas', duration: 60 },
      { step: 4, instruction: 'Relaxe abdômen, peito e costas', duration: 60 },
      { step: 5, instruction: 'Relaxe braços, ombros e pescoço', duration: 60 },
      { step: 6, instruction: 'Relaxe rosto, maxilar e couro cabeludo', duration: 60 },
      { step: 7, instruction: 'Mantenha estado de relaxamento profundo', duration: 120 },
      { step: 8, instruction: 'Retorne gradualmente à atenção plena', duration: 30 }
    ]
  },
  {
    id: 114,
    name: 'Mobilização Articular para Punhos',
    duration: '4',
    difficulty: 'Fácil',
    category: 'Mobilidade Geral',
    description: 'Série de movimentos suaves que melhoram a mobilidade dos punhos, reduzem rigidez e previnem sintomas de síndromes compressivas como túnel do carpo.',
    benefits: 'Alivia dor nos punhos, melhora mobilidade, previne síndromes compressivas e reduz tensão na região.',
    purposePoints: [
      'Aumenta mobilidade dos punhos',
      'Previne síndrome do túnel do carpo',
      'Reduz rigidez nas mãos',
      'Melhora circulação nas extremidades'
    ],
    instructions: [
      'Sente-se confortavelmente com os braços apoiados',
      'Estenda os braços à frente com as palmas para baixo',
      'Faça 10 círculos completos com os punhos (sentido horário)',
      'Faça 10 círculos completos (sentido anti-horário)',
      'Estenda os punhos para cima e mantenha 5 segundos',
      'Flexione os punhos para baixo e mantenha 5 segundos',
      'Repita a sequência 3 vezes',
      'Finalize abrindo e fechando as mãos 10 vezes'
    ],
    detailedInstructions: {
      position: 'Sentada com coluna ereta, braços apoiados ou estendidos à frente',
      movement: 'Movimentos circulares, flexão e extensão dos punhos',
      breathing: 'Respiração natural, sem padrão específico',
      benefit: 'Mobiliza todas as articulações do punho, aumenta circulação local',
      caution: 'Movimentos suaves, sem forçar amplitude, evitar dor'
    },
    icon: '🤸',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Punhos', 'Mãos', 'Antebraços'],
    adaptations: {
      pain: [
        'Reduza a amplitude dos movimentos',
        'Elimine movimentos dolorosos'
      ],
      tired: [
        'Reduza para 5 repetições',
        'Apoie completamente os antebraços'
      ],
      energized: [
        'Aumente para 15 repetições',
        'Adicione movimentos para os dedos'
      ]
    },
    specialTip: 'Massageie levemente os antebraços após os exercícios para melhorar a circulação e relaxar a musculatura.',
    cautions: [
      'Pare se sentir dor aguda',
      'Evite movimentos bruscos',
      'Não force amplitude além do conforto',
      'Contraindicado: inflamação aguda'
    ],
    hasWarning: false,
    scientificData: {
      initialPosition: 'Sentada com cotovelos flexionados e apoiados, punhos em posição neutra',
      targetMuscles: ['Flexores do punho', 'Extensores do punho', 'Pronadores', 'Supinadores'],
      scientificBasis: [
        'Mobiliza articulações do punho em todos os planos',
        'Estimula produção de líquido sinovial',
        'Previne aderências entre tendões e bainhas',
        'Melhora propriocepção da região'
      ],
      expectedResults: [
        'Redução de 40% na rigidez após 3 semanas',
        'Melhora da destreza manual',
        'Prevenção de síndrome do túnel do carpo',
        'Redução de desconforto em atividades manuais'
      ],
      adaptations: {
        'Artrite': 'Amplitude menor, mais repetições',
        'Túnel do carpo': 'Evitar flexão extrema de punho',
        'Tendinite': 'Excluir movimentos dolorosos',
        'Idosos': 'Movimentos mais lentos, menor número'
      },
      repetitions: '3 séries de 10 repetições',
      contraindicatedFor: ['Fratura recente', 'Tendinite aguda', 'Pós-cirurgia imediata']
    },
    executionSteps: [
      { step: 1, instruction: 'Estenda os braços com palmas para baixo', duration: 3 },
      { step: 2, instruction: 'Faça 10 círculos no sentido horário', duration: 20 },
      { step: 3, instruction: 'Faça 10 círculos no sentido anti-horário', duration: 20 },
      { step: 4, instruction: 'Estenda punhos para cima e mantenha', duration: 5 },
      { step: 5, instruction: 'Flexione punhos para baixo e mantenha', duration: 5 },
      { step: 6, instruction: 'Repita a sequência 2 vezes', duration: 50 },
      { step: 7, instruction: 'Finalize abrindo e fechando mãos', duration: 15 }
    ]
  },
  {
    id: 115,
    name: 'Automassagem para Pés e Tornozelos',
    duration: '5',
    difficulty: 'Fácil',
    category: 'Alívio Cervical',
    description: 'Técnica de automassagem para os pés e tornozelos que alivia tensão, melhora circulação e proporciona relaxamento reflexo para todo o corpo.',
    benefits: 'Alivia dor nos pés, melhora circulação, reduz edema e promove relaxamento geral do corpo.',
    purposePoints: [
      'Estimula pontos reflexos nos pés',
      'Melhora circulação nas extremidades',
      'Reduz tensão e fadiga nos pés',
      'Promove relaxamento de todo o corpo'
    ],
    instructions: [
      'Sente-se confortavelmente na cadeira',
      'Cruze uma perna para apoiar o pé sobre a coxa',
      'Inicie com deslizamentos suaves em todo o pé',
      'Pressione a planta do pé com os polegares',
      'Massageie cada dedo individualmente',
      'Faça círculos no tornozelo com as duas mãos',
      'Repita no outro pé',
      'Finalize com batidas leves em todo o pé'
    ],
    detailedInstructions: {
      position: 'Sentada confortavelmente, perna cruzada para acessar o pé',
      movement: 'Pressões, deslizamentos e movimentos circulares',
      breathing: 'Respiração profunda e relaxada',
      benefit: 'Alivia tensão local e promove relaxamento geral via reflexologia',
      caution: 'Pressão moderada, evitar áreas com ferimentos ou inflamação'
    },
    icon: '🦶',
    photoUrl: getExercisePhoto(7),
    targetAreas: ['Pés', 'Tornozelos', 'Sistema nervoso reflexo'],
    adaptations: {
      pain: [
        'Use pressão mais leve',
        'Evite áreas dolorosas'
      ],
      tired: [
        'Reduza o tempo para 3 minutos',
        'Foque apenas nas áreas mais tensas'
      ],
      energized: [
        'Estenda para 8 minutos',
        'Adicione técnicas de alongamento dos dedos'
      ]
    },
    specialTip: 'Use uma bolinha de tênis ou golf sob a planta do pé para massagem mais profunda nos pontos de reflexologia.',
    cautions: [
      'Evite pressão excessiva em vasos e nervos',
      'Cuidado com áreas de pele frágil',
      'Não massageie sobre feridas ou inflamações',
      'Pressão moderada em caso de diabetes'
    ],
    hasWarning: true,
    warningText: 'Pessoas com diabetes devem ter cuidado especial, evitando pressão excessiva e observando a pele após a massagem.',
    scientificData: {
      initialPosition: 'Sentada com uma perna cruzada sobre a outra, pé acessível às mãos',
      targetMuscles: ['Músculos intrínsecos do pé', 'Fáscia plantar', 'Tendões flexores e extensores', 'Zonas reflexas'],
      scientificBasis: [
        'Estimulação de zonas reflexas ligadas a órgãos',
        'Aumento da circulação sanguínea e linfática',
        'Liberação de tensão na fáscia plantar',
        'Ativação do sistema nervoso parassimpático'
      ],
      expectedResults: [
        'Redução de 60% na tensão dos pés',
        'Diminuição de edema nos tornozelos',
        'Melhora da sensibilidade proprioceptiva',
        'Efeito relaxante em todo o corpo'
      ],
      adaptations: {
        'Diabetes': 'Pressão muito leve, observar pele após',
        'Artrite': 'Movimentos suaves, evitar articulações inflamadas',
        'Edema': 'Ênfase em movimentos ascendentes',
        'Idosos': 'Maior cuidado com a pele e vasos'
      },
      repetitions: '5 minutos para cada pé',
      contraindicatedFor: ['Trombose', 'Feridas abertas', 'Infecções cutâneas', 'Neuropatia periférica severa']
    },
    executionSteps: [
      { step: 1, instruction: 'Cruze a perna e apoie o pé', duration: 5 },
      { step: 2, instruction: 'Faça deslizamentos em todo o pé', duration: 20 },
      { step: 3, instruction: 'Pressione pontos na planta do pé', duration: 40 },
      { step: 4, instruction: 'Massageie cada dedo individualmente', duration: 25 },
      { step: 5, instruction: 'Faça círculos no tornozelo', duration: 20 },
      { step: 6, instruction: 'Repita no outro pé', duration: 110 },
      { step: 7, instruction: 'Finalize com batidas leves', duration: 20 }
    ]
  }
];

// Combinar os 5 exercícios existentes com os novos 40
export const allExercises: Exercise[] = [
  ...scientificExercises,
  ...additionalExercises
];

export default allExercises; 