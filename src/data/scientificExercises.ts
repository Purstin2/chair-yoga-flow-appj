import { Exercise } from '@/types';
import { getExercisePhoto } from './exercisePhotos';

export const scientificExercises: Exercise[] = [
  {
    id: 101,
    name: 'Liberação Miofascial Cervical',
    duration: '3',
    difficulty: 'Fácil',
    category: 'Alívio Cervical',
    description: 'Técnica de liberação miofascial para a região cervical que alivia tensão, dores de cabeça e melhora a mobilidade do pescoço.',
    benefits: 'Alivia tensão no pescoço, melhora a mobilidade cervical, reduz dores de cabeça e melhora a postura.',
    purposePoints: [
      'Reduz tensão no pescoço e trapézio',
      'Alivia dores de cabeça tensionais',
      'Melhora mobilidade cervical',
      'Diminui compressão nervosa'
    ],
    instructions: [
      'Sente-se ereta na cadeira com os pés apoiados no chão',
      'Incline a cabeça para a direita (30°)',
      'Mantenha 15 segundos respirando profundamente',
      'Retorne ao centro devagar',
      'Repita para o lado esquerdo',
      'Faça rotação suave para trás (5x)',
      'Movimentos SEMPRE lentos e controlados',
      'Complete 8-10 repetições para cada lado'
    ],
    detailedInstructions: {
      position: 'Sentada ereta, pés apoiados no chão, ombros relaxados e coluna neutra',
      movement: 'Inclinação lateral do pescoço, seguida de rotação suave',
      breathing: 'Respiração profunda e lenta durante o alongamento',
      benefit: 'Libera tensão do músculo esternocleidomastóideo e trapézio superior',
      caution: 'Não force além do conforto, pare se sentir tontura ou dor aguda'
    },
    icon: '🧘‍♀️',
    photoUrl: getExercisePhoto(1),
    targetAreas: ['Pescoço', 'Trapézio', 'Base do crânio'],
    adaptations: {
      pain: [
        'Reduza o ângulo de inclinação para 15°',
        'Mantenha por apenas 5-7 segundos'
      ],
      tired: [
        'Faça apenas 4-5 repetições para cada lado',
        'Apoie a cabeça com a mão durante o exercício'
      ],
      energized: [
        'Aumente para 12 repetições',
        'Adicione uma pequena resistência com a mão durante a inclinação'
      ]
    },
    specialTip: 'Aplique uma compressa morna na região do pescoço por 5 minutos antes de iniciar o exercício para relaxar a musculatura.',
    cautions: [
      'Não force além do conforto',
      'Pare se sentir tontura',
      'Movimento SEMPRE lento',
      'Contraindicado: hérnia cervical ativa'
    ],
    hasWarning: true,
    warningText: 'Se você tem hérnia cervical ativa, consulte seu médico antes de realizar este exercício.',
    scientificData: {
      initialPosition: 'Sentada na cadeira, costas retas, pés apoiados no chão, mãos relaxadas no colo',
      targetMuscles: ['Esternocleidomastóideo', 'Trapézio superior', 'Escalenos', 'Suboccipitais'],
      scientificBasis: [
        'Alonga músculo esternocleidomastóideo',
        'Reduz tensão em trapézio superior',
        'Melhora circulação sanguínea cervical',
        'Diminui compressão nervosa'
      ],
      expectedResults: [
        'Redução de 40% da tensão cervical',
        'Melhora da amplitude de movimento',
        'Alívio de dor de cabeça tensional',
        'Melhor postura da cabeça e pescoço'
      ],
      adaptations: {
        'Dor intensa': 'Amplitude menor (15°)',
        'Artrite': 'Usar calor antes (5 min)',
        'Ansiedade': 'Focar na respiração',
        'Idosos': 'Reduzir tempo de sustentação'
      },
      repetitions: '8-10 para cada lado',
      contraindicatedFor: ['Hérnia cervical ativa', 'Trauma cervical recente', 'Vertigem severa']
    },
    executionSteps: [
      { step: 1, instruction: 'Incline a cabeça para direita (30°)', duration: 15 },
      { step: 2, instruction: 'Mantenha 15 segundos respirando', duration: 15 },
      { step: 3, instruction: 'Retorne ao centro devagar', duration: 5 },
      { step: 4, instruction: 'Incline para esquerda (30°)', duration: 15 },
      { step: 5, instruction: 'Mantenha 15 segundos respirando', duration: 15 },
      { step: 6, instruction: 'Faça rotação suave para trás', duration: 10 }
    ]
  },
  {
    id: 102,
    name: 'Fortalecimento Cervical Isométrico',
    duration: '4',
    difficulty: 'Médio',
    category: 'Alívio Cervical',
    description: 'Exercício de fortalecimento isométrico para os músculos profundos do pescoço, fundamental para melhorar a postura e prevenir dores cervicais crônicas.',
    benefits: 'Fortalece músculos estabilizadores do pescoço, melhora a postura da cabeça, reduz dores cervicais crônicas e previne lesões.',
    purposePoints: [
      'Fortalece músculos flexores profundos',
      'Melhora estabilidade cervical',
      'Reduz recidivas de dor no pescoço',
      'Corrige postura da cabeça anteriorizada'
    ],
    instructions: [
      'Sente-se ereta na cadeira, olhar para frente',
      'Coloque a palma da mão na testa',
      'Empurre a cabeça contra a mão (sem movimento)',
      'Mantenha força moderada por 10 segundos',
      'Relaxe 5 segundos',
      'Repita nas laterais e atrás da cabeça',
      'Complete 3 séries de 10 segundos para cada direção',
      'Mantenha respiração contínua durante o exercício'
    ],
    detailedInstructions: {
      position: 'Sentada ereta, coluna neutra, ombros relaxados, olhar para frente',
      movement: 'Contração isométrica dos músculos cervicais contra resistência manual',
      breathing: 'Respiração normal e contínua durante a contração',
      benefit: 'Fortalece musculatura profunda do pescoço, melhorando estabilidade e postura',
      caution: 'Usar força moderada, não máxima. Parar imediatamente se sentir dor aguda'
    },
    icon: '💪',
    photoUrl: getExercisePhoto(2),
    targetAreas: ['Pescoço', 'Músculos profundos cervicais', 'Suboccipitais'],
    adaptations: {
      pain: [
        'Reduza a intensidade da força para 30-40%',
        'Diminua o tempo para 5 segundos'
      ],
      tired: [
        'Faça apenas 2 séries',
        'Aumente o tempo de descanso para 10 segundos'
      ],
      energized: [
        'Aumente para 15 segundos de contração',
        'Complete 4 séries em cada direção'
      ]
    },
    specialTip: 'Para maximizar resultados, mantenha uma leve contração desses músculos durante o dia, especialmente ao usar celular ou computador.',
    cautions: [
      'Força moderada (não máxima)',
      'Respiração contínua durante',
      'Parar se aumentar dor',
      'Evite em caso de hipertensão severa'
    ],
    hasWarning: false,
    scientificData: {
      initialPosition: 'Sentada ereta na cadeira, coluna neutra, ombros relaxados, olhar para frente',
      targetMuscles: ['Flexores cervicais profundos', 'Esternocleidomastóideo', 'Semiespinal', 'Suboccipitais'],
      scientificBasis: [
        'Fortalece músculos flexores profundos',
        'Estabiliza coluna cervical',
        'Melhora propriocepção',
        'Previne lesões futuras'
      ],
      expectedResults: [
        'Músculos 35% mais fortes em 3 semanas',
        'Redução de recidiva de dor',
        'Melhor postura da cabeça',
        'Diminuição da fadiga cervical em atividades prolongadas'
      ],
      adaptations: {
        'Hipertensão': 'Reduzir intensidade e evitar contração posterior',
        'Dor aguda': 'Iniciar com 3-5 segundos e pressão mínima',
        'Artrose cervical': 'Movimentos muito suaves, evitar extensão',
        'Enxaqueca': 'Evitar durante crises'
      },
      repetitions: '3 séries de 10 segundos em cada direção',
      sets: '3 séries',
      contraindicatedFor: ['Trauma cervical recente', 'Hipertensão descontrolada', 'Durante crise de enxaqueca']
    },
    executionSteps: [
      { step: 1, instruction: 'Coloque palma da mão na testa', duration: 3 },
      { step: 2, instruction: 'Empurre cabeça contra mão (sem mover)', duration: 10 },
      { step: 3, instruction: 'Relaxe e respire', duration: 5 },
      { step: 4, instruction: 'Repita com mão na lateral direita', duration: 10 },
      { step: 5, instruction: 'Relaxe e respire', duration: 5 },
      { step: 6, instruction: 'Repita com mão na lateral esquerda', duration: 10 },
      { step: 7, instruction: 'Relaxe e respire', duration: 5 },
      { step: 8, instruction: 'Finalize com mão na parte posterior', duration: 10 }
    ]
  },
  {
    id: 103,
    name: 'Rotação Lombar Segmentada',
    duration: '5',
    difficulty: 'Fácil',
    category: 'Liberação Lombar',
    description: 'Exercício de mobilização segmentar para a coluna lombar que alivia dor, melhora a mobilidade articular e promove relaxamento da musculatura das costas.',
    benefits: 'Alivia dor lombar, melhora a mobilidade da coluna, reduz rigidez matinal e promove melhor nutrição dos discos vertebrais.',
    purposePoints: [
      'Mobiliza articulações facetárias',
      'Alonga músculos rotadores profundos',
      'Reduz rigidez matinal em 45%',
      'Alivia dor lombar crônica'
    ],
    instructions: [
      'Sente-se com pés afastados na largura dos quadris',
      'Mãos cruzadas no peito ou nos ombros',
      'Costas levemente afastadas do encosto',
      'Inspire profundamente',
      'Expire girando o tronco para a direita',
      'Movimento vértebra por vértebra (segmentado)',
      'Mantenha 5 segundos no final da rotação',
      'Retorne lentamente ao centro e repita para esquerda'
    ],
    detailedInstructions: {
      position: 'Sentada com pés afastados, mãos cruzadas no peito, coluna ereta',
      movement: 'Rotação do tronco de forma segmentada, iniciando pelo abdômen',
      breathing: 'Inspire no centro, expire durante a rotação',
      benefit: 'Mobiliza cada segmento vertebral, melhora circulação dos discos',
      caution: 'Movimento suave e controlado, não girar além de 45°, manter quadris estáveis'
    },
    icon: '🌀',
    photoUrl: getExercisePhoto(3),
    targetAreas: ['Lombar', 'Região torácica', 'Rotadores da coluna'],
    adaptations: {
      pain: [
        'Diminua a amplitude da rotação (20° máximo)',
        'Faça o movimento mais lentamente'
      ],
      tired: [
        'Reduza para 5 repetições de cada lado',
        'Use apoio das mãos na cadeira'
      ],
      energized: [
        'Aumente para 10 repetições de cada lado',
        'Sustente por 8-10 segundos no ponto máximo'
      ]
    },
    specialTip: 'Visualize cada vértebra girando individualmente, como se estivesse "desparafusando" a coluna, para maximizar o efeito terapêutico.',
    cautions: [
      'Movimento suave e controlado',
      'Não girar além de 45°',
      'Parar se dor irradiar para perna',
      'Contraindicado: hérnia aguda'
    ],
    hasWarning: true,
    warningText: 'Evite este exercício se tiver hérnia de disco lombar aguda ou dor que irradia para as pernas. Consulte um médico primeiro.',
    scientificData: {
      initialPosition: 'Sentada com pés afastados, mãos cruzadas no peito, costas levemente afastadas do encosto',
      targetMuscles: ['Rotadores profundos da coluna', 'Multífidos', 'Quadrado lombar', 'Oblíquos internos e externos'],
      scientificBasis: [
        'Mobiliza articulações facetárias',
        'Alonga músculos rotadores profundos',
        'Melhora nutrição dos discos vertebrais',
        'Reduz rigidez matinal em 45%'
      ],
      expectedResults: [
        '+30% amplitude de rotação',
        'Redução de rigidez matinal',
        'Melhora da função diária',
        'Diminuição de dor lombar em 4-6 semanas'
      ],
      adaptations: {
        'Dor aguda': 'Amplitude menor (20°)',
        'Idosas': 'Usar apoio das mãos',
        'Artrose': 'Movimento mais lento',
        'Escoliose': 'Enfatizar rotação para lado convexo'
      },
      repetitions: '8 repetições para cada lado',
      contraindicatedFor: ['Hérnia de disco aguda', 'Ciática em crise', 'Espondilolistese instável']
    },
    executionSteps: [
      { step: 1, instruction: 'Inspire profundamente preparando o corpo', duration: 3 },
      { step: 2, instruction: 'Expire girando tronco para direita', duration: 4 },
      { step: 3, instruction: 'Vértebra por vértebra (movimento segmentado)', duration: 3 },
      { step: 4, instruction: 'Mantenha 5 segundos no final', duration: 5 },
      { step: 5, instruction: 'Retorne lentamente ao centro', duration: 3 },
      { step: 6, instruction: 'Inspire no centro', duration: 3 },
      { step: 7, instruction: 'Repita para esquerda', duration: 15 }
    ]
  },
  {
    id: 104,
    name: 'Respiração 4-7-8 Anti-ansiedade',
    duration: '6',
    difficulty: 'Fácil',
    category: 'Respiração Terapêutica',
    description: 'Técnica respiratória baseada em princípios do pranayama para ativar o sistema nervoso parassimpático, reduzir o cortisol e aliviar ansiedade e tensão muscular.',
    benefits: 'Reduz ansiedade, baixa a pressão arterial, alivia tensão muscular, melhora a qualidade do sono e diminui a percepção de dor.',
    purposePoints: [
      'Ativa sistema nervoso parassimpático',
      'Reduz cortisol em 23%',
      'Diminui frequência cardíaca',
      'Relaxa musculatura periférica'
    ],
    instructions: [
      'Sente-se confortavelmente na cadeira',
      'Pés no chão, mãos no colo',
      'Posicione a língua atrás dos dentes superiores',
      'Expire completamente pela boca',
      'Inspire pelo nariz contando 4 segundos',
      'Segure a respiração contando 7 segundos',
      'Expire pela boca contando 8 segundos',
      'Repita o ciclo 8 vezes'
    ],
    detailedInstructions: {
      position: 'Sentada confortavelmente, coluna ereta mas relaxada, ombros soltos',
      movement: 'Controle respiratório com contagem específica 4-7-8',
      breathing: 'Inspiração nasal, retenção, expiração bucal prolongada',
      benefit: 'Ativa parassimpático, reduz cortisol, acalma mente e corpo',
      caution: 'Não forçar retenção, retornar à respiração normal se tonturas'
    },
    icon: '🫁',
    photoUrl: getExercisePhoto(8),
    targetAreas: ['Sistema nervoso', 'Diafragma', 'Músculos intercostais'],
    adaptations: {
      pain: [
        'Reduzir para ciclo 3-5-7',
        'Permanecer na posição mais confortável possível'
      ],
      tired: [
        'Reduzir para 4-5 ciclos completos',
        'Usar contagem 3-5-6 se difícil segurar'
      ],
      energized: [
        'Aumentar para 10-12 ciclos',
        'Fazer 3x ao dia para efeito cumulativo'
      ]
    },
    specialTip: 'Praticar 2x ao dia (manhã e noite) para resultados mais expressivos na redução da ansiedade e melhora do sono. Particularmente eficaz antes de dormir.',
    cautions: [
      'Se ficar tonta, respire normal',
      'Não force a contagem',
      'Praticar longe de refeições',
      'Iniciar gradualmente com menos ciclos'
    ],
    hasWarning: false,
    scientificData: {
      initialPosition: 'Sentada confortavelmente, pés no chão, mãos no colo, língua atrás dos dentes superiores',
      targetMuscles: ['Diafragma', 'Intercostais', 'Músculos acessórios da respiração'],
      scientificBasis: [
        'Ativa sistema nervoso parassimpático',
        'Reduz cortisol em 23% (estudos)',
        'Diminui frequência cardíaca',
        'Relaxa musculatura periférica'
      ],
      expectedResults: [
        'Redução de ansiedade em 40%',
        'Melhora da qualidade do sono',
        'Relaxamento muscular reflexo',
        'Diminuição da percepção de dor'
      ],
      adaptations: {
        'Iniciantes': 'Começar com 3-5-6',
        'Ansiedade alta': 'Iniciar com 2-3-4',
        'Problemas respiratórios': 'Supervisão médica',
        'Idosos': 'Reduzir tempos e número de ciclos'
      },
      repetitions: '8 ciclos completos',
      contraindicatedFor: ['Asma em crise', 'DPOC severa', 'Insuficiência cardíaca descompensada']
    },
    executionSteps: [
      { step: 1, instruction: 'Expire completamente pela boca', duration: 4 },
      { step: 2, instruction: 'Inspire pelo nariz contando 4', duration: 4 },
      { step: 3, instruction: 'Segure a respiração contando 7', duration: 7 },
      { step: 4, instruction: 'Expire pela boca contando 8', duration: 8 },
      { step: 5, instruction: 'Repita o ciclo mais 7 vezes', duration: 133 }
    ]
  },
  {
    id: 105,
    name: 'Mobilização Articular em Cadeia',
    duration: '7',
    difficulty: 'Médio',
    category: 'Mobilidade Geral',
    description: 'Sequência de movimentos articulares progressivos que melhoram a mobilidade global do corpo, reduzem rigidez e preparam para atividades diárias.',
    benefits: 'Melhora amplitude de movimento, reduz dores articulares, prepara o corpo para atividades e estimula produção de líquido sinovial.',
    purposePoints: [
      'Melhora mobilidade de múltiplas articulações',
      'Reduz rigidez matinal em 52%',
      'Previne lesões nas atividades diárias',
      'Estimula produção de líquido sinovial'
    ],
    instructions: [
      'Sente-se na borda da cadeira com pés apoiados',
      'Inicie rotação suave dos tornozelos (5x cada)',
      'Siga para rotação dos pulsos (5x cada direção)',
      'Faça rotação dos ombros para trás (5x)',
      'Execute círculos suaves com o pescoço (3x cada lado)',
      'Adicione inclinação lateral do tronco (3x cada)',
      'Combine movimentos em sequência fluida',
      'Respire profundamente durante todo exercício'
    ],
    detailedInstructions: {
      position: 'Sentada na borda da cadeira, coluna ereta, pés bem apoiados',
      movement: 'Rotações e mobilizações articulares progressivas, de baixo para cima',
      breathing: 'Respiração profunda e consciente, sincronizada com movimentos',
      benefit: 'Ativa todas articulações principais, estimula produção de líquido sinovial',
      caution: 'Movimentos controlados, sem forçar amplitude, respeitar limites individuais'
    },
    icon: '🤸‍♀️',
    photoUrl: getExercisePhoto(4),
    targetAreas: ['Tornozelos', 'Joelhos', 'Quadris', 'Coluna', 'Ombros', 'Pescoço'],
    adaptations: {
      pain: [
        'Reduzir amplitude dos movimentos',
        'Focar apenas nas articulações sem dor'
      ],
      tired: [
        'Executar apenas 3 repetições de cada movimento',
        'Descansar 10 segundos entre movimentos'
      ],
      energized: [
        'Aumentar para 7-10 repetições',
        'Adicionar pequenas resistências com faixas'
      ]
    },
    specialTip: 'Ideal para ser feito logo ao acordar para reduzir rigidez matinal e preparar o corpo para o dia. Repita brevemente a cada 2-3 horas se trabalha sentada.',
    cautions: [
      'Movimentos suaves e controlados',
      'Evite articulações inflamadas',
      'Reduzir amplitude se sentir dor',
      'Não substitui tratamento médico'
    ],
    hasWarning: false,
    scientificData: {
      initialPosition: 'Sentada na borda da cadeira com pés bem apoiados, coluna ereta mas não tensa',
      targetMuscles: ['Músculos periarticulares', 'Cápsulas articulares', 'Tendões e ligamentos'],
      scientificBasis: [
        'Melhora circulação do líquido sinovial',
        'Aumenta amplitude de movimento sem sobrecarga',
        'Reduz rigidez articular',
        'Ativa proprioceptores periarticulares'
      ],
      expectedResults: [
        'Redução de 52% na rigidez matinal',
        'Melhora de mobilidade em 3-4 semanas',
        'Diminuição da dor em atividades diárias',
        'Melhor postura durante o dia'
      ],
      adaptations: {
        'Artrose': 'Reduzir amplitude e aumentar repetições',
        'Artrite reumatoide': 'Evitar articulações inflamadas',
        'Fibromialgia': 'Movimentos muito suaves, progressão gradual',
        'Idosos': 'Apoio na cadeira para equilíbrio'
      },
      repetitions: 'Sequência completa 2-3 vezes',
      sets: '1 série contínua',
      contraindicatedFor: ['Artrite em fase aguda', 'Pós-cirurgia recente', 'Inflamação articular severa']
    },
    executionSteps: [
      { step: 1, instruction: 'Rotação suave dos tornozelos (5x cada)', duration: 20 },
      { step: 2, instruction: 'Rotação dos pulsos (5x cada direção)', duration: 20 },
      { step: 3, instruction: 'Rotação dos ombros para trás (5x)', duration: 20 },
      { step: 4, instruction: 'Círculos suaves com o pescoço (3x cada)', duration: 30 },
      { step: 5, instruction: 'Inclinação lateral do tronco (3x cada)', duration: 20 },
      { step: 6, instruction: 'Combine movimentos em sequência fluida', duration: 30 }
    ]
  }
];

export default scientificExercises; 