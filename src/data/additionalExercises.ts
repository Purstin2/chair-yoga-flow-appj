import { Exercise } from '@/types';

const additionalExercises: Exercise[] = [
  {
    id: 2001,
    name: "Mobilidade das Mãos e Punhos",
    duration: "8",
    difficulty: "Fácil",
    category: "Punhos e Mãos",
    description: "Sequência de movimentos para melhorar a flexibilidade e reduzir a rigidez nas articulações das mãos e punhos, ideal para artrite e uso excessivo de teclado.",
    benefits: "Alivia dores nas mãos, melhora a circulação e aumenta a mobilidade dos dedos e punhos.",
    purposePoints: [
      "Reduzir rigidez nas articulações dos dedos e punhos",
      "Melhorar a circulação sanguínea nas extremidades",
      "Aumentar a amplitude de movimento nas mãos",
      "Prevenir dores relacionadas à digitação e artrite"
    ],
    instructions: [
      "Sente-se confortavelmente com os braços apoiados",
      "Estenda os dedos e depois feche-os em punho suavemente",
      "Gire os punhos em movimentos circulares nas duas direções",
      "Alterne flexão e extensão dos punhos",
      "Finalize com alongamento suave de cada dedo"
    ],
    detailedInstructions: {
      position: "Sentada com os braços apoiados confortavelmente",
      movement: "Movimentos lentos e controlados de cada articulação da mão",
      breathing: "Respiração natural, sem retenção",
      benefit: "Alívio de tensão e maior mobilidade nas mãos",
      caution: "Evite forçar articulações inflamadas ou doloridas"
    },
    icon: "hand",
    targetAreas: ["Punhos", "Dedos", "Articulações das mãos"],
    adaptations: {
      pain: ["Reduza a amplitude dos movimentos", "Use água morna antes do exercício"],
      tired: ["Faça menos repetições", "Concentre-se apenas nas articulações mais rígidas"],
      energized: ["Aumente o número de repetições", "Adicione pequenas resistências com elásticos"]
    },
    cautions: [
      "Movimentos devem ser suaves, sem causar dor",
      "Não force articulações inflamadas",
      "Em caso de artrite aguda, consulte um médico antes"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/RtH-r01Mtf0",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Terapia Ocupacional",
    videoDescription: "Exercícios para mãos e punhos que ajudam a aliviar dores e melhorar a mobilidade das articulações."
  },
  {
    id: 2002,
    name: "Alongamento Cervical com Respiração Consciente",
    duration: "10",
    difficulty: "Fácil",
    category: "Cervical",
    description: "Combinação de técnicas de respiração profunda com alongamentos suaves da região cervical para aliviar tensão e dores no pescoço.",
    benefits: "Reduz tensão cervical, melhora postura, diminui dores de cabeça tensionais e promove relaxamento mental.",
    purposePoints: [
      "Aliviar dores e tensão na região do pescoço",
      "Melhorar a mobilidade da coluna cervical",
      "Reduzir sintomas de estresse na região dos ombros",
      "Promover relaxamento mental através da respiração consciente"
    ],
    instructions: [
      "Sente-se em posição ereta, com os pés apoiados no chão",
      "Realize respirações abdominais profundas por 1 minuto",
      "Incline a cabeça suavemente para os lados durante a exalação",
      "Realize rotações lentas e controladas do pescoço",
      "Finalize com alongamentos suaves dos músculos escalenos"
    ],
    detailedInstructions: {
      position: "Sentada com a coluna ereta, ombros relaxados",
      movement: "Movimentos lentos e suaves da cabeça e pescoço sincronizados com a respiração",
      breathing: "Respiração diafragmática profunda, exalando durante os alongamentos",
      benefit: "Alívio de tensão cervical e mental",
      caution: "Evite movimentos bruscos ou forçados do pescoço"
    },
    icon: "neck",
    targetAreas: ["Pescoço", "Trapézio", "Escalenos", "Esternocleidomastoideo"],
    adaptations: {
      pain: ["Reduza a amplitude dos movimentos", "Mantenha o olhar para frente se sentir tontura"],
      tired: ["Foque mais na respiração que nos movimentos", "Reduza o número de repetições"],
      energized: ["Adicione mais repetições", "Combine com alongamentos dos ombros"]
    },
    cautions: [
      "Evite movimentos bruscos do pescoço",
      "Não force além do limite confortável",
      "Consulte um médico em caso de hérnia cervical"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/iQMZQkmF4mM",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Coluna",
    videoDescription: "Sequência de alongamentos cervicais combinados com técnicas de respiração consciente para alívio de tensão."
  },
  {
    id: 2003,
    name: "Mobilização da Coluna Torácica",
    duration: "12",
    difficulty: "Médio",
    category: "Coluna",
    description: "Sequência de exercícios para melhorar a mobilidade da coluna torácica (região média das costas), reduzindo rigidez e melhorando a postura.",
    benefits: "Melhora a postura, aumenta a capacidade respiratória e reduz dores entre as escápulas e na região do tórax.",
    purposePoints: [
      "Aumentar a mobilidade da coluna torácica",
      "Melhorar a expansão torácica na respiração",
      "Reduzir tensão entre as escápulas",
      "Prevenir dores posturais relacionadas ao trabalho sentado"
    ],
    instructions: [
      "Sente-se na borda da cadeira com os pés bem apoiados",
      "Cruze os braços à frente do peito",
      "Realize rotações do tronco para ambos os lados",
      "Faça inclinações laterais com respiração profunda",
      "Termine com extensões suaves da coluna torácica"
    ],
    detailedInstructions: {
      position: "Sentada na borda da cadeira com coluna ereta",
      movement: "Movimentos rotacionais e de flexão lateral da coluna torácica",
      breathing: "Respiração profunda, expandindo as costelas durante a inspiração",
      benefit: "Maior mobilidade da caixa torácica e alívio de tensões",
      caution: "Mantenha os movimentos dentro de limites confortáveis"
    },
    icon: "spine",
    targetAreas: ["Coluna Torácica", "Músculos Intercostais", "Escápulas"],
    adaptations: {
      pain: ["Diminua a amplitude do movimento", "Use uma cadeira com apoio de braços"],
      tired: ["Reduza o número de repetições", "Descanse entre os movimentos"],
      energized: ["Aumente o número de repetições", "Adicione respiração mais vigorosa"]
    },
    cautions: [
      "Evite movimentos bruscos",
      "Pessoas com osteoporose devem realizar com menor amplitude",
      "Interrompa se sentir dor aguda"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/5dX6OKGNDvQ",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Coluna",
    videoDescription: "Exercícios para melhorar a mobilidade da coluna torácica e reduzir dores nas costas."
  },
  {
    id: 2004,
    name: "Fortalecimento de Quadril e Core",
    duration: "15",
    difficulty: "Médio",
    category: "Quadril",
    description: "Exercícios específicos para fortalecer os músculos do quadril e do core, melhorando a estabilidade pélvica e a postura geral.",
    benefits: "Fortalece os músculos estabilizadores do quadril, melhora o equilíbrio e reduz dores lombares relacionadas à fraqueza muscular.",
    purposePoints: [
      "Fortalecer os músculos do quadril e abdômen",
      "Melhorar a estabilidade pélvica",
      "Reduzir dores lombares associadas à fraqueza muscular",
      "Prevenir desequilíbrios musculares"
    ],
    instructions: [
      "Sente-se ereta na borda da cadeira",
      "Ative o core contraindo suavemente o abdômen",
      "Realize elevações alternadas dos joelhos",
      "Faça abdução do quadril pressionando os joelhos para fora",
      "Finalize com a ponte de glúteos adaptada"
    ],
    detailedInstructions: {
      position: "Sentada na borda da cadeira ou em pé apoiando na cadeira",
      movement: "Movimentos controlados de ativação muscular e pequena amplitude",
      breathing: "Exale durante o esforço, inspirando na fase de relaxamento",
      benefit: "Fortalecimento dos músculos estabilizadores e menor dor lombar",
      caution: "Mantenha a coluna neutra, sem forçar a região lombar"
    },
    icon: "hip",
    targetAreas: ["Quadril", "Glúteos", "Abdômen", "Lombar"],
    adaptations: {
      pain: ["Reduza a amplitude dos movimentos", "Faça menos repetições"],
      tired: ["Realize apenas os exercícios mais simples", "Descanse entre as séries"],
      energized: ["Aumente o número de repetições", "Adicione pequenas resistências"]
    },
    cautions: [
      "Evite prender a respiração durante os exercícios",
      "Não force a região lombar",
      "Em caso de dor no quadril, reduza a amplitude"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/L_xrDAtykMI",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Reabilitação",
    videoDescription: "Sequência de exercícios para fortalecer os músculos do quadril e core, melhorando a estabilidade e postura."
  },
  {
    id: 2005,
    name: "Equilíbrio e Coordenação Sentado",
    duration: "10",
    difficulty: "Fácil",
    category: "Equilíbrio",
    description: "Exercícios para melhorar o equilíbrio e a coordenação motora, realizados na posição sentada, ideais para idosos e pessoas com mobilidade reduzida.",
    benefits: "Melhora o equilíbrio, a coordenação motora e a consciência corporal, reduzindo o risco de quedas.",
    purposePoints: [
      "Melhorar o equilíbrio estático e dinâmico",
      "Desenvolver a coordenação motora",
      "Aumentar a consciência corporal",
      "Prevenir quedas em idosos"
    ],
    instructions: [
      "Sente-se na borda da cadeira com postura ereta",
      "Realize transferências de peso para os lados",
      "Levante um pé do chão alternadamente",
      "Faça movimentos coordenados de braços e pernas",
      "Finalize com respiração profunda e centralização"
    ],
    detailedInstructions: {
      position: "Sentada na borda da cadeira sem apoiar nas costas",
      movement: "Transferências de peso suaves e movimentos coordenados",
      breathing: "Respiração regular, mantendo o foco na consciência corporal",
      benefit: "Melhor equilíbrio e coordenação motora",
      caution: "Tenha uma superfície de apoio próxima se necessário"
    },
    icon: "target",
    targetAreas: ["Sistema Vestibular", "Core", "Membros Inferiores"],
    adaptations: {
      pain: ["Mantenha-se mais próximo ao encosto", "Reduza a amplitude dos movimentos"],
      tired: ["Faça pausas frequentes", "Reduza o tempo do exercício"],
      energized: ["Aumente a dificuldade fechando os olhos brevemente", "Adicione mais desafios"]
    },
    cautions: [
      "Mantenha uma cadeira estável ou superfície de apoio próxima",
      "Evite movimentos bruscos",
      "Em caso de tontura, pare imediatamente"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/GjRzKehGYH4",
    videoSource: "YouTube",
    videoAuthor: "Terapeuta Ocupacional",
    videoDescription: "Exercícios seguros para melhorar equilíbrio e coordenação na posição sentada, ideais para idosos e reabilitação."
  },
  {
    id: 2006,
    name: "Respiração Diafragmática para Ansiedade",
    duration: "8",
    difficulty: "Fácil",
    category: "Respiração Terapêutica",
    description: "Técnica de respiração diafragmática profunda para reduzir sintomas de ansiedade e estresse, promovendo relaxamento imediato.",
    benefits: "Reduz sintomas de ansiedade, acalma o sistema nervoso, melhora a oxigenação e promove relaxamento mental.",
    purposePoints: [
      "Reduzir sintomas físicos de ansiedade",
      "Ativar o sistema nervoso parassimpático",
      "Melhorar a qualidade da respiração",
      "Promover sensação de calma e controle"
    ],
    instructions: [
      "Sente-se confortavelmente com a coluna apoiada",
      "Coloque uma mão sobre o abdômen e outra sobre o peito",
      "Inspire lentamente pelo nariz, expandindo o abdômen",
      "Expire prolongadamente pela boca, contraindo suavemente o abdômen",
      "Repita com ritmo regular, focando nas sensações físicas"
    ],
    detailedInstructions: {
      position: "Sentada confortavelmente com apoio para as costas",
      movement: "Expansão e contração controlada do diafragma",
      breathing: "Inspiração nasal lenta e expiração bucal prolongada",
      benefit: "Ativação do sistema nervoso parassimpático e redução da ansiedade",
      caution: "Evite hiperventilação mantendo o ritmo lento"
    },
    icon: "wind",
    targetAreas: ["Diafragma", "Sistema Nervoso", "Músculos Respiratórios"],
    adaptations: {
      pain: ["Ajuste a postura para maior conforto", "Reduza a profundidade da respiração"],
      tired: ["Reduza o tempo da prática", "Foque apenas na expiração lenta"],
      energized: ["Aumente o tempo da prática", "Adicione visualizações relaxantes"]
    },
    cautions: [
      "Evite forçar a respiração além do confortável",
      "Mantenha um ritmo lento para evitar tontura",
      "Pare se sentir ansiedade aumentar"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/tcHcQVF0ydQ",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Terapias Integrativas",
    videoDescription: "Técnica de respiração diafragmática para reduzir ansiedade e promover relaxamento imediato."
  },
  {
    id: 2007,
    name: "Alongamento para Túnel do Carpo",
    duration: "6",
    difficulty: "Fácil",
    category: "Punhos e Mãos",
    description: "Sequência específica para aliviar os sintomas da síndrome do túnel do carpo e prevenir desconfortos nas mãos e punhos.",
    benefits: "Alivia a pressão no nervo mediano, reduz a dor e o formigamento nas mãos e aumenta a flexibilidade dos punhos.",
    purposePoints: [
      "Reduzir a compressão do nervo mediano",
      "Aliviar dor e formigamento nas mãos",
      "Melhorar a flexibilidade dos tendões flexores",
      "Prevenir o agravamento da síndrome do túnel do carpo"
    ],
    instructions: [
      "Sente-se com os braços apoiados na mesa",
      "Estenda um braço com a palma para cima",
      "Com a outra mão, puxe suavemente os dedos para trás",
      "Alterne para a palma para baixo e repita",
      "Faça rotações suaves dos punhos para finalizar"
    ],
    detailedInstructions: {
      position: "Sentada com os braços apoiados em uma superfície",
      movement: "Alongamentos suaves e progressivos dos punhos e dedos",
      breathing: "Respiração tranquila, expirando durante os alongamentos",
      benefit: "Alívio dos sintomas do túnel do carpo e maior flexibilidade",
      caution: "Evite alongamentos que causem dor aguda ou formigamento intenso"
    },
    icon: "hand",
    targetAreas: ["Nervo Mediano", "Flexores do Carpo", "Tendões das Mãos"],
    adaptations: {
      pain: ["Reduza a intensidade do alongamento", "Use compressa morna antes de iniciar"],
      tired: ["Reduza o tempo de sustentação", "Foque nos movimentos mais confortáveis"],
      energized: ["Aumente o tempo de sustentação", "Adicione mais repetições"]
    },
    cautions: [
      "Interrompa se sentir aumento de formigamento ou dor",
      "Evite movimentos bruscos ou repetitivos",
      "Consulte um médico para sintomas persistentes"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/J9MgMPL4Zx0",
    videoSource: "YouTube",
    videoAuthor: "Terapeuta Ocupacional",
    videoDescription: "Exercícios específicos para aliviar os sintomas da síndrome do túnel do carpo e prevenir desconfortos."
  },
  {
    id: 2008,
    name: "Mobilidade Articular para Joelhos",
    duration: "10",
    difficulty: "Fácil",
    category: "Joelhos",
    description: "Exercícios suaves para melhorar a mobilidade das articulações dos joelhos, reduzir a rigidez e promover o alívio de dores leves.",
    benefits: "Aumenta a flexibilidade da articulação do joelho, melhora a lubrificação articular e reduz dores associadas à rigidez.",
    purposePoints: [
      "Melhorar a mobilidade da articulação do joelho",
      "Reduzir a rigidez articular matinal",
      "Fortalecer suavemente os músculos estabilizadores",
      "Melhorar a circulação na região"
    ],
    instructions: [
      "Sente-se confortavelmente com as costas apoiadas",
      "Estenda e flexione lentamente os joelhos",
      "Realize pequenos círculos com os joelhos",
      "Faça elevações alternadas das pernas",
      "Finalize com alongamento dos isquiotibiais sentado"
    ],
    detailedInstructions: {
      position: "Sentada com as costas bem apoiadas",
      movement: "Movimentos suaves de flexão, extensão e rotação dos joelhos",
      breathing: "Respiração natural, sem prender o ar",
      benefit: "Maior mobilidade articular e menor rigidez nos joelhos",
      caution: "Evite movimentos que causem dor ou pressão excessiva"
    },
    icon: "move",
    targetAreas: ["Joelhos", "Quadríceps", "Isquiotibiais"],
    adaptations: {
      pain: ["Reduza a amplitude dos movimentos", "Use uma almofada sob os joelhos se necessário"],
      tired: ["Diminua o número de repetições", "Faça apenas os movimentos mais confortáveis"],
      energized: ["Aumente as repetições", "Adicione pequenas resistências"]
    },
    cautions: [
      "Não force a articulação do joelho",
      "Evite estalar as articulações",
      "Em caso de artrose avançada, consulte um profissional antes"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/l3JjPHieMf0",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Articulações",
    videoDescription: "Sequência de exercícios suaves para melhorar a mobilidade dos joelhos e reduzir dores e rigidez."
  },
  {
    id: 2009,
    name: "Fortalecimento de Tornozelos e Pés",
    duration: "8",
    difficulty: "Fácil",
    category: "Tornozelos e Pés",
    description: "Exercícios específicos para fortalecer os músculos dos pés e tornozelos, melhorando a estabilidade e reduzindo o risco de quedas.",
    benefits: "Fortalece os músculos dos pés, melhora o equilíbrio e a propriocepção, e previne entorses de tornozelo.",
    purposePoints: [
      "Fortalecer os músculos intrínsecos dos pés",
      "Melhorar a estabilidade dos tornozelos",
      "Aumentar a propriocepção da região plantar",
      "Prevenir quedas e entorses"
    ],
    instructions: [
      "Sente-se com os pés apoiados no chão",
      "Eleve os calcanhares mantendo os dedos no chão",
      "Eleve os dedos mantendo os calcanhares no chão",
      "Faça rotações dos tornozelos em ambas direções",
      "Tente pegar um lenço do chão com os dedos dos pés"
    ],
    detailedInstructions: {
      position: "Sentada com os pés bem apoiados no chão",
      movement: "Movimentos controlados de flexão, extensão e rotação dos tornozelos",
      breathing: "Respiração regular, sem retenção",
      benefit: "Maior estabilidade nos tornozelos e pés, melhor equilíbrio",
      caution: "Mantenha os movimentos lentos e controlados"
    },
    icon: "move",
    targetAreas: ["Tornozelos", "Arco Plantar", "Dedos dos Pés"],
    adaptations: {
      pain: ["Reduza a amplitude dos movimentos", "Evite exercícios em pé se houver dor"],
      tired: ["Reduza o número de repetições", "Foque nos exercícios mais simples"],
      energized: ["Aumente as repetições", "Adicione exercícios em pé apoiando na cadeira"]
    },
    cautions: [
      "Em caso de artrose no tornozelo, reduza a amplitude",
      "Se tiver diabetes, verifique os pés antes e depois",
      "Evite exercícios que causem dor aguda"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/fQtUdHLwgww",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Reabilitação",
    videoDescription: "Exercícios específicos para fortalecer os tornozelos e pés, melhorando a estabilidade e prevenindo quedas."
  },
  {
    id: 2010,
    name: "Alongamento para Alívio de Ciática",
    duration: "12",
    difficulty: "Fácil",
    category: "Ciático",
    description: "Sequência de alongamentos suaves para aliviar a dor ciática, reduzindo a tensão nos músculos que comprimem o nervo ciático.",
    benefits: "Alivia a dor ciática, relaxa os músculos da região glútea e aumenta a flexibilidade dos músculos piriformes e isquiotibiais.",
    purposePoints: [
      "Reduzir a compressão do nervo ciático",
      "Alongar o músculo piriforme",
      "Relaxar a musculatura glútea",
      "Melhorar a flexibilidade dos isquiotibiais"
    ],
    instructions: [
      "Sente-se na borda da cadeira com postura ereta",
      "Coloque o tornozelo de uma perna sobre o joelho oposto",
      "Incline-se levemente para frente mantendo a coluna reta",
      "Alterne para o outro lado",
      "Finalize com alongamento dos isquiotibiais"
    ],
    detailedInstructions: {
      position: "Sentada na borda da cadeira com um bom apoio",
      movement: "Alongamentos suaves com inclinação controlada do tronco",
      breathing: "Respiração profunda, exalando durante o alongamento",
      benefit: "Alívio da compressão do nervo ciático e redução da dor",
      caution: "Evite forçar além do limite confortável"
    },
    icon: "heart",
    targetAreas: ["Nervo Ciático", "Músculo Piriforme", "Glúteos", "Isquiotibiais"],
    adaptations: {
      pain: ["Reduza a amplitude do alongamento", "Use almofadas para apoio"],
      tired: ["Mantenha os alongamentos por menos tempo", "Foque apenas nos mais eficazes"],
      energized: ["Aumente o tempo de sustentação", "Adicione mais variações"]
    },
    cautions: [
      "Interrompa se a dor irradiar ou aumentar",
      "Evite torções da coluna",
      "Em caso de hérnia de disco aguda, consulte um médico antes"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/_YbyZX0imDE",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Coluna",
    videoDescription: "Alongamentos específicos para aliviar a dor ciática de forma segura, realizados na posição sentada."
  },
  {
    id: 2011,
    name: "Postura e Alinhamento Sentado",
    duration: "10",
    difficulty: "Fácil",
    category: "Postura",
    description: "Exercícios para melhorar a postura na posição sentada, fortalecendo os músculos posturais e reduzindo dores relacionadas à má postura.",
    benefits: "Melhora o alinhamento da coluna, reduz dores nas costas, pescoço e ombros, e previne problemas posturais crônicos.",
    purposePoints: [
      "Corrigir o alinhamento da coluna na posição sentada",
      "Fortalecer os músculos estabilizadores da coluna",
      "Reduzir dores associadas à má postura",
      "Criar consciência corporal para manutenção da postura"
    ],
    instructions: [
      "Sente-se na borda da cadeira com os pés bem apoiados",
      "Ative o core e alinhe a coluna verticalmente",
      "Realize elevações e depressões controladas dos ombros",
      "Mantenha a posição neutra da cabeça (queixo paralelo ao chão)",
      "Pratique a respiração diafragmática mantendo o alinhamento"
    ],
    detailedInstructions: {
      position: "Sentada sem apoiar nas costas da cadeira inicialmente",
      movement: "Ajustes posturais sutis e ativação dos músculos estabilizadores",
      breathing: "Respiração diafragmática sem comprometer a postura",
      benefit: "Melhor alinhamento postural e menos dor",
      caution: "Evite tensionar o pescoço ou forçar excessivamente a lombar"
    },
    icon: "activity",
    targetAreas: ["Coluna Vertebral", "Core", "Ombros", "Pescoço"],
    adaptations: {
      pain: ["Use apoio lombar se necessário", "Faça pausas frequentes"],
      tired: ["Reduza o tempo de manutenção postural", "Alterne com momentos de relaxamento"],
      energized: ["Aumente o tempo de manutenção", "Adicione pequenos movimentos de fortalecimento"]
    },
    cautions: [
      "Não force a coluna para uma posição desconfortável",
      "Faça pausas se sentir fadiga muscular",
      "Adapte conforme suas necessidades individuais"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/S5iJ4TUFt50",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Postural",
    videoDescription: "Exercícios e técnicas para melhorar a postura na posição sentada e prevenir dores relacionadas ao trabalho sedentário."
  },
  {
    id: 2012,
    name: "Liberação Miofascial para Ombros",
    duration: "8",
    difficulty: "Fácil",
    category: "Ombros",
    description: "Técnicas de automassagem e liberação miofascial para aliviar tensões profundas nos ombros e região superior das costas.",
    benefits: "Alivia dores crônicas nos ombros, melhora a circulação local e aumenta a amplitude de movimento na articulação do ombro.",
    purposePoints: [
      "Liberar pontos de tensão miofascial nos ombros",
      "Melhorar a circulação sanguínea na região",
      "Reduzir dores crônicas na cintura escapular",
      "Preparar os músculos para alongamentos mais efetivos"
    ],
    instructions: [
      "Sente-se confortavelmente com uma bola de tênis ou massagem",
      "Posicione a bola entre as costas e a cadeira na região do ombro",
      "Realize movimentos suaves para massagear pontos de tensão",
      "Alterne entre pressão estática e movimentos circulares",
      "Repita do outro lado e finalize com alongamentos suaves"
    ],
    detailedInstructions: {
      position: "Sentada com as costas afastadas do encosto para posicionar a bola",
      movement: "Pressão controlada e movimentos pequenos sobre pontos de tensão",
      breathing: "Respiração profunda, especialmente ao pressionar pontos sensíveis",
      benefit: "Alívio de tensões profundas e maior mobilidade",
      caution: "Evite pressão excessiva sobre a coluna ou áreas muito doloridas"
    },
    icon: "move",
    targetAreas: ["Trapézio", "Romboides", "Levantador da Escápula"],
    adaptations: {
      pain: ["Use uma bola mais macia", "Aplique menos pressão"],
      tired: ["Reduza o tempo em cada ponto", "Foque apenas nas áreas mais tensas"],
      energized: ["Aumente o tempo de trabalho", "Explore mais áreas de tensão"]
    },
    cautions: [
      "Evite pressão direta sobre a coluna vertebral",
      "Não aplique em áreas inflamadas ou lesionadas",
      "Interrompa se a dor aumentar significativamente"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/LT_FOzbDrOE",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Terapia Manual",
    videoDescription: "Técnicas de automassagem e liberação miofascial para aliviar tensões profundas nos ombros."
  },
  {
    id: 2013,
    name: "Meditação Guiada para Dor Crônica",
    duration: "15",
    difficulty: "Fácil",
    category: "Meditação",
    description: "Prática de meditação guiada especificamente desenvolvida para ajudar no manejo da dor crônica através de técnicas de atenção plena.",
    benefits: "Reduz a percepção da dor, diminui a ansiedade associada à dor crônica e melhora a qualidade de vida global.",
    purposePoints: [
      "Reduzir a percepção da intensidade da dor",
      "Diminuir a ansiedade relacionada à dor crônica",
      "Desenvolver estratégias mentais para lidar com a dor",
      "Melhorar a qualidade do sono e bem-estar geral"
    ],
    instructions: [
      "Sente-se em posição confortável com suporte adequado",
      "Feche os olhos e estabilize a respiração",
      "Dirija sua atenção para as sensações do corpo sem julgamento",
      "Observe a dor com curiosidade, sem resistência",
      "Conclua com um momento de gratidão e intenção positiva"
    ],
    detailedInstructions: {
      position: "Sentada confortavelmente com bom suporte para as costas",
      movement: "Imobilidade física com atenção às sensações internas",
      breathing: "Respiração natural, observada sem controle",
      benefit: "Redução da percepção da dor e maior controle sobre a experiência",
      caution: "Aceite que emoções difíceis podem surgir durante a prática"
    },
    icon: "moon",
    targetAreas: ["Sistema Nervoso Central", "Percepção da Dor", "Estado Mental"],
    adaptations: {
      pain: ["Use mais suportes para conforto", "Reduza o tempo da prática"],
      tired: ["Pratique por menos tempo", "Considere uma posição reclinada"],
      energized: ["Aumente o tempo da prática", "Adicione visualizações mais elaboradas"]
    },
    cautions: [
      "Não substitua tratamentos médicos convencionais",
      "Aceite que os resultados vêm com a prática regular",
      "Se sentir ansiedade aumentar, retorne ao foco na respiração"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/Vfc84S1wM_E",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Meditação e Manejo da Dor",
    videoDescription: "Meditação guiada específica para pessoas com dor crônica, usando técnicas de atenção plena para reduzir o sofrimento."
  },
  {
    id: 2014,
    name: "Exercícios Oculares para Fadiga Visual",
    duration: "5",
    difficulty: "Fácil",
    category: "Relaxamento",
    description: "Série de exercícios específicos para aliviar a fadiga visual causada pelo uso prolongado de telas e computadores.",
    benefits: "Reduz a tensão ocular, alivia o cansaço dos olhos, melhora a lubrificação ocular e previne dores de cabeça relacionadas à visão.",
    purposePoints: [
      "Relaxar os músculos oculares sobrecarregados",
      "Melhorar a lubrificação dos olhos",
      "Reduzir o cansaço visual",
      "Prevenir dores de cabeça associadas à fadiga ocular"
    ],
    instructions: [
      "Sente-se confortavelmente e esfregue as mãos para aquecê-las",
      "Cubra os olhos com as palmas das mãos por 30 segundos",
      "Alterne o foco entre objetos próximos e distantes",
      "Realize movimentos oculares em todas as direções",
      "Finalize com suaves massagens ao redor dos olhos"
    ],
    detailedInstructions: {
      position: "Sentada com a coluna ereta e ombros relaxados",
      movement: "Movimentos suaves dos olhos sem forçar",
      breathing: "Respiração tranquila, sem tensão",
      benefit: "Alívio da fadiga visual e maior conforto ocular",
      caution: "Evite pressão direta sobre os olhos"
    },
    icon: "smile",
    targetAreas: ["Músculos Oculares", "Glândulas Lacrimais", "Nervo Óptico"],
    adaptations: {
      pain: ["Reduza a amplitude dos movimentos oculares", "Aumente o tempo de descanso com os olhos fechados"],
      tired: ["Faça apenas os exercícios de palming (cobrir os olhos)", "Reduza o número de repetições"],
      energized: ["Aumente o número de repetições", "Adicione técnicas de visualização"]
    },
    cautions: [
      "Não esfregue os olhos diretamente",
      "Remova lentes de contato antes dos exercícios",
      "Consulte um oftalmologista em caso de problemas oculares crônicos"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/LUlV1cUNMZ0",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Saúde Visual",
    videoDescription: "Exercícios oculares para aliviar a fadiga visual causada pelo uso prolongado de telas e computadores."
  },
  {
    id: 2015,
    name: "Yoga Facial para Tensão Mandibular",
    duration: "6",
    difficulty: "Fácil",
    category: "Relaxamento",
    description: "Sequência de exercícios faciais e massagens para aliviar a tensão na mandíbula, comum em pessoas com bruxismo ou estresse.",
    benefits: "Alivia dores na articulação temporomandibular (ATM), reduz tensão facial e melhora a circulação no rosto.",
    purposePoints: [
      "Relaxar os músculos da mandíbula",
      "Aliviar dores na articulação temporomandibular",
      "Reduzir os efeitos do bruxismo",
      "Melhorar a circulação facial"
    ],
    instructions: [
      "Sente-se confortavelmente e aqueça as mãos esfregando-as",
      "Realize massagens circulares nas têmporas e bochechas",
      "Abra e feche a boca lentamente, sem tensão",
      "Faça movimentos conscientes da mandíbula para os lados",
      "Finalize com respiração profunda e relaxamento facial"
    ],
    detailedInstructions: {
      position: "Sentada com a coluna ereta e ombros relaxados",
      movement: "Movimentos suaves e massagens na região facial",
      breathing: "Respiração profunda, exalando tensão",
      benefit: "Alívio da tensão mandibular e facial",
      caution: "Evite movimentos bruscos da mandíbula"
    },
    icon: "smile",
    targetAreas: ["Articulação Temporomandibular", "Masseter", "Músculos Faciais"],
    adaptations: {
      pain: ["Aplique calor úmido antes dos exercícios", "Reduza a amplitude dos movimentos"],
      tired: ["Foque apenas nas massagens", "Reduza o tempo da prática"],
      energized: ["Adicione mais técnicas de massagem", "Aumente o tempo em cada área"]
    },
    cautions: [
      "Evite movimentos que causem estalos na mandíbula",
      "Interrompa se a dor aumentar",
      "Consulte um dentista para casos de bruxismo severo"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/gsTnoBXhB_g",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Yoga Facial",
    videoDescription: "Exercícios e massagens para aliviar a tensão na mandíbula e articulação temporomandibular (ATM)."
  },
  {
    id: 2016,
    name: "Técnicas de Grounding para Ansiedade",
    duration: "8",
    difficulty: "Fácil",
    category: "Anti-stress",
    description: "Práticas de aterramento (grounding) que ajudam a ancorar a mente no momento presente, reduzindo ansiedade e estresse.",
    benefits: "Reduz sintomas de ansiedade, melhora o foco no presente, interrompe ciclos de pensamentos negativos e promove sensação de calma.",
    purposePoints: [
      "Trazer a mente para o momento presente",
      "Interromper padrões de pensamento ansioso",
      "Criar conexão consciente com o corpo",
      "Desenvolver ferramentas para lidar com crises de ansiedade"
    ],
    instructions: [
      "Sente-se confortavelmente com os pés bem apoiados no chão",
      "Observe 5 coisas que você pode ver ao seu redor",
      "Perceba 4 sensações físicas que você sente no corpo",
      "Identifique 3 sons que você pode ouvir",
      "Finalize com respiração profunda e sensação de enraizamento"
    ],
    detailedInstructions: {
      position: "Sentada com pés firmemente apoiados no chão",
      movement: "Consciência sensorial com mínimo movimento físico",
      breathing: "Respiração consciente e profunda",
      benefit: "Redução da ansiedade e maior presença mental",
      caution: "Aceite qualquer emoção que surgir durante a prática"
    },
    icon: "target",
    targetAreas: ["Sistema Nervoso", "Atenção Mental", "Sensação Corporal"],
    adaptations: {
      pain: ["Foque mais na respiração que nas sensações físicas", "Adapte a posição para conforto máximo"],
      tired: ["Reduza o número de elementos a observar", "Diminua o tempo da prática"],
      energized: ["Adicione mais categorias sensoriais", "Combine com movimentos suaves"]
    },
    cautions: [
      "Não force a respiração profunda se causar ansiedade",
      "Adapte a técnica conforme suas necessidades",
      "Busque ajuda profissional para ansiedade severa"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/nFVGLqUB-vY",
    videoSource: "YouTube",
    videoAuthor: "Psicóloga Especialista em Ansiedade",
    videoDescription: "Técnicas de grounding (aterramento) para reduzir ansiedade e trazer a mente para o momento presente."
  },
  {
    id: 2017,
    name: "Fortalecimento para Artrose de Joelho",
    duration: "12",
    difficulty: "Fácil",
    category: "Joelhos",
    description: "Exercícios específicos para fortalecer os músculos ao redor do joelho, proporcionando maior estabilidade e reduzindo dores causadas pela artrose.",
    benefits: "Fortalece os músculos estabilizadores do joelho, reduz dores articulares, melhora a funcionalidade e previne a progressão da artrose.",
    purposePoints: [
      "Fortalecer os músculos que sustentam o joelho",
      "Reduzir a carga sobre a articulação",
      "Melhorar a estabilidade durante a marcha",
      "Diminuir a dor e a rigidez articular"
    ],
    instructions: [
      "Sente-se com as costas apoiadas e joelhos flexionados",
      "Estenda um joelho sem travar a articulação",
      "Mantenha por alguns segundos e retorne lentamente",
      "Faça mini-agachamentos apoiando-se na cadeira",
      "Finalize com alongamentos suaves para os quadríceps"
    ],
    detailedInstructions: {
      position: "Sentada com boa postura e apoio para as costas",
      movement: "Movimentos controlados de extensão e flexão do joelho",
      breathing: "Expirar durante o esforço, inspirar ao relaxar",
      benefit: "Fortalecimento muscular sem sobrecarga articular",
      caution: "Evite movimentos que causem dor aguda"
    },
    icon: "move",
    targetAreas: ["Quadríceps", "Isquiotibiais", "Joelhos"],
    adaptations: {
      pain: ["Reduza a amplitude do movimento", "Use almofada sob o joelho se necessário"],
      tired: ["Diminua o número de repetições", "Aumente o tempo de descanso entre séries"],
      energized: ["Aumente as repetições", "Adicione pequenas resistências"]
    },
    cautions: [
      "Evite impacto e movimentos bruscos",
      "Não force além da dor",
      "Interrompa se houver aumento significativo da dor"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/6JHQk_yy4IA",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Gerontologia",
    videoDescription: "Exercícios específicos para fortalecer os músculos ao redor do joelho e reduzir dores causadas pela artrose."
  },
  {
    id: 2018,
    name: "Exercícios Energizantes para Manhã",
    duration: "10",
    difficulty: "Fácil",
    category: "Energia",
    description: "Sequência de movimentos suaves mas energizantes para despertar o corpo pela manhã, melhorando a disposição e o fluxo sanguíneo.",
    benefits: "Aumenta a energia, melhora a circulação, desperta a mente e prepara o corpo para as atividades do dia.",
    purposePoints: [
      "Ativar a circulação sanguínea logo ao acordar",
      "Despertar a mente e aumentar o estado de alerta",
      "Melhorar a disposição para o dia",
      "Reduzir a rigidez matinal"
    ],
    instructions: [
      "Sente-se na borda da cadeira com postura ereta",
      "Realize alongamentos de braços acima da cabeça",
      "Faça rotações suaves do tronco para ambos os lados",
      "Pratique respiração vigorosa com movimentos dos braços",
      "Finalize com tapotagem leve nos braços e pernas"
    ],
    detailedInstructions: {
      position: "Sentada na borda da cadeira, sem apoiar nas costas",
      movement: "Movimentos progressivamente mais dinâmicos",
      breathing: "Respiração profunda e vigorosa, coordenada com os movimentos",
      benefit: "Aumento da energia e disposição física e mental",
      caution: "Aumente a intensidade progressivamente"
    },
    icon: "sun",
    targetAreas: ["Circulação Geral", "Coluna", "Ombros", "Sistema Respiratório"],
    adaptations: {
      pain: ["Reduza a amplitude dos movimentos", "Foque na respiração energizante"],
      tired: ["Comece com movimentos muito suaves", "Aumente gradualmente a intensidade"],
      energized: ["Adicione mais movimentos dinâmicos", "Aumente o ritmo dos exercícios"]
    },
    cautions: [
      "Pessoas com pressão baixa devem levantar-se com cuidado após a prática",
      "Evite movimentos bruscos logo ao acordar",
      "Adapte a intensidade às suas condições físicas"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/pJ8-YKsqjZE",
    videoSource: "YouTube",
    videoAuthor: "Instrutor de Yoga Matinal",
    videoDescription: "Sequência de movimentos energizantes para despertar o corpo pela manhã e começar o dia com mais disposição."
  },
  {
    id: 2019,
    name: "Yoga para Artrite nas Mãos",
    duration: "8",
    difficulty: "Fácil",
    category: "Punhos e Mãos",
    description: "Práticas suaves de yoga terapêutico específicas para pessoas com artrite nas mãos, com foco em mobilidade e alívio da dor.",
    benefits: "Reduz a dor nas articulações das mãos, melhora a amplitude de movimento, diminui a rigidez e melhora a funcionalidade.",
    purposePoints: [
      "Melhorar a mobilidade das articulações das mãos",
      "Reduzir a dor relacionada à artrite",
      "Diminuir a rigidez matinal nos dedos",
      "Melhorar a capacidade funcional para atividades diárias"
    ],
    instructions: [
      "Inicie com imersão das mãos em água morna (opcional)",
      "Realize movimentos suaves de flexão e extensão dos dedos",
      "Faça rotações delicadas de cada articulação",
      "Pratique posições de yoga para as mãos (mudras)",
      "Finalize com automassagem suave"
    ],
    detailedInstructions: {
      position: "Sentada com os braços confortavelmente apoiados",
      movement: "Movimentos muito suaves e controlados de cada articulação",
      breathing: "Respiração consciente, direcionando o ar mentalmente para as mãos",
      benefit: "Alívio da dor e maior mobilidade nas articulações das mãos",
      caution: "Respeite sempre os limites de dor e amplitude"
    },
    icon: "hand",
    targetAreas: ["Articulações das Mãos", "Dedos", "Punhos"],
    adaptations: {
      pain: ["Use calor úmido antes dos exercícios", "Reduza ainda mais a amplitude"],
      tired: ["Faça apenas os movimentos mais importantes", "Reduza o número de repetições"],
      energized: ["Adicione automassagem mais vigorosa", "Inclua mais variações de movimentos"]
    },
    cautions: [
      "Nunca force articulações inflamadas",
      "Durante crises agudas, reduza ou evite os exercícios",
      "Priorize movimentos sem dor"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/tQXDNPjnUw0",
    videoSource: "YouTube",
    videoAuthor: "Terapeuta Especializada em Artrite",
    videoDescription: "Yoga terapêutico específico para pessoas com artrite nas mãos, com foco em mobilidade e alívio da dor."
  },
  {
    id: 2020,
    name: "Relaxamento Profundo para Insônia",
    duration: "15",
    difficulty: "Fácil",
    category: "Relaxamento",
    description: "Técnicas de relaxamento profundo especialmente desenvolvidas para quem sofre com insônia, preparando o corpo e a mente para o sono.",
    benefits: "Induz o relaxamento necessário para o sono, reduz a ansiedade noturna, acalma a mente e prepara o corpo para descansar.",
    purposePoints: [
      "Induzir o estado de relaxamento pré-sono",
      "Reduzir pensamentos acelerados noturnos",
      "Relaxar progressivamente todos os músculos do corpo",
      "Preparar o sistema nervoso para o descanso"
    ],
    instructions: [
      "Sente-se confortavelmente ou deite-se se possível",
      "Inicie com respiração profunda e lenta",
      "Realize o relaxamento progressivo dos músculos, dos pés à cabeça",
      "Pratique visualização de cenas tranquilas",
      "Finalize mantendo a respiração suave e regular"
    ],
    detailedInstructions: {
      position: "Sentada confortavelmente ou deitada",
      movement: "Mínimo movimento físico, foco no relaxamento muscular",
      breathing: "Respiração lenta, profunda e ritmada",
      benefit: "Preparação ideal para o sono reparador",
      caution: "Permita-se adormecer durante a prática se estiver na cama"
    },
    icon: "moon",
    targetAreas: ["Sistema Nervoso", "Tensão Muscular", "Atividade Mental"],
    adaptations: {
      pain: ["Use suportes adicionais para conforto", "Foque mais na respiração que no relaxamento muscular"],
      tired: ["Permita-se adormecer durante a prática", "Reduza o tempo se sentir sono durante o dia"],
      energized: ["Aumente o tempo da prática", "Adicione mais técnicas de visualização"]
    },
    cautions: [
      "Evite fazer antes de dirigir ou operar máquinas",
      "Se a ansiedade aumentar, retorne ao foco na respiração",
      "Não substitui tratamento médico para insônia crônica"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/NiMGNRQwbj8",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Terapias do Sono",
    videoDescription: "Técnicas de relaxamento profundo para quem sofre com insônia, preparando o corpo e a mente para o sono reparador."
  },
  {
    id: 2021,
    name: "Alongamento da Cadeia Posterior",
    duration: "12",
    difficulty: "Médio",
    category: "Alongamento",
    description: "Sequência de alongamentos para a cadeia muscular posterior (costas, glúteos e pernas), realizados na posição sentada para maior segurança e acessibilidade.",
    benefits: "Melhora a flexibilidade dos músculos das costas e pernas, alivia tensões na coluna e reduz a rigidez muscular geral.",
    purposePoints: [
      "Alongar os músculos da cadeia posterior",
      "Reduzir encurtamentos musculares",
      "Melhorar a postura",
      "Aliviar tensões na coluna e pernas"
    ],
    instructions: [
      "Sente-se na borda da cadeira com as costas eretas",
      "Estenda uma perna à frente e incline o tronco mantendo a coluna reta",
      "Realize o alongamento dos isquiotibiais com assistência de uma faixa",
      "Faça rotações suaves da coluna com respiração profunda",
      "Finalize com alongamentos para os músculos paravertebrais"
    ],
    detailedInstructions: {
      position: "Sentada na borda da cadeira com pés bem apoiados",
      movement: "Inclinações controladas do tronco e extensões das pernas",
      breathing: "Respiração profunda, exalando durante o aprofundamento do alongamento",
      benefit: "Maior flexibilidade e menos tensão na cadeia posterior",
      caution: "Mantenha a coluna neutra, sem curvar excessivamente"
    },
    icon: "refresh",
    targetAreas: ["Isquiotibiais", "Glúteos", "Coluna", "Paravertebrais"],
    adaptations: {
      pain: ["Reduza a amplitude do alongamento", "Use faixas para assistência"],
      tired: ["Mantenha os alongamentos por menos tempo", "Faça menos repetições"],
      energized: ["Aumente o tempo de permanência", "Adicione mais variações"]
    },
    cautions: [
      "Evite inclinações excessivas se tiver hérnia de disco",
      "Não force a amplitude do movimento",
      "Mantenha a respiração fluida durante os alongamentos"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/qqnZ3ZhSmXk",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Alongamento",
    videoDescription: "Sequência de alongamentos para a cadeia posterior do corpo, adaptados para a posição sentada, ideal para todos os níveis."
  },
  {
    id: 2022,
    name: "Exercícios para Fibromialgia",
    duration: "15",
    difficulty: "Fácil",
    category: "Dor Crônica",
    description: "Rotina de exercícios suaves especificamente desenvolvidos para pessoas com fibromialgia, focando no movimento consciente e progressivo.",
    benefits: "Reduz a rigidez muscular, melhora a circulação, diminui a dor generalizada e aumenta progressivamente a tolerância ao exercício.",
    purposePoints: [
      "Reduzir a intensidade da dor crônica",
      "Melhorar a função muscular sem causar fadiga",
      "Aumentar a circulação sanguínea",
      "Promover melhor qualidade de vida"
    ],
    instructions: [
      "Sente-se confortavelmente com apoio adequado",
      "Inicie com movimentos muito suaves de todas as articulações",
      "Realize alongamentos muito leves, respeitando os limites",
      "Progrida para movimentos rítmicos e suaves dos braços",
      "Finalize com relaxamento e respiração consciente"
    ],
    detailedInstructions: {
      position: "Sentada com apoio completo e conforto máximo",
      movement: "Movimentos muito gentis, progressivos e adaptados individualmente",
      breathing: "Respiração suave e consciente, sem gerar esforço",
      benefit: "Redução da dor e melhor tolerância ao movimento",
      caution: "Respeite absolutamente os limites de dor e fadiga"
    },
    icon: "heart",
    targetAreas: ["Sistema Muscular", "Articulações", "Sistema Nervoso"],
    adaptations: {
      pain: ["Reduza ainda mais a intensidade", "Divida a prática em sessões muito curtas"],
      tired: ["Pratique apenas 2-3 minutos", "Foque apenas na respiração se necessário"],
      energized: ["Aumente ligeiramente a duração", "Adicione mais repetições, mas mantenha a suavidade"]
    },
    cautions: [
      "Pare imediatamente se a dor aumentar significativamente",
      "Evite praticar durante crises agudas",
      "Adapte conforme sua condição diária"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/MbFh086NJrY",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Fibromialgia",
    videoDescription: "Exercícios suaves e progressivos específicos para pessoas com fibromialgia, focando no movimento sem aumentar a dor."
  },
  {
    id: 2023,
    name: "Exercícios Respiratórios para Asma",
    duration: "10",
    difficulty: "Fácil",
    category: "Respiração Terapêutica",
    description: "Técnicas respiratórias específicas para melhorar a capacidade pulmonar e gerenciar sintomas de asma, aumentando o controle sobre a respiração.",
    benefits: "Melhora o controle respiratório, fortalece o diafragma, reduz a ansiedade relacionada à asma e auxilia no manejo de crises leves.",
    purposePoints: [
      "Fortalecer os músculos respiratórios",
      "Melhorar a eficiência da respiração",
      "Reduzir a ansiedade durante crises leves",
      "Aumentar a consciência respiratória"
    ],
    instructions: [
      "Sente-se com a coluna ereta e ombros relaxados",
      "Pratique a respiração diafragmática com mãos no abdômen",
      "Realize exalações prolongadas com lábios semicerrados",
      "Faça respirações em tempos específicos (inspiração:expiração 1:2)",
      "Finalize com respiração normal consciente"
    ],
    detailedInstructions: {
      position: "Sentada confortavelmente com apoio nas costas",
      movement: "Foco no movimento do diafragma, mínimo movimento torácico",
      breathing: "Ênfase na exalação prolongada e controlada",
      benefit: "Maior controle respiratório e redução da ansiedade",
      caution: "Nunca force a respiração causando desconforto"
    },
    icon: "wind",
    targetAreas: ["Diafragma", "Músculos Intercostais", "Sistema Respiratório"],
    adaptations: {
      pain: ["Reduza a profundidade da respiração", "Foque apenas na exalação"],
      tired: ["Reduza o tempo da prática", "Diminua o ritmo respiratório"],
      energized: ["Aumente a duração", "Adicione mais variações de técnicas"]
    },
    cautions: [
      "Não substitui medicação prescrita para asma",
      "Em caso de crise severa, use o medicamento indicado",
      "Interrompa se sentir qualquer desconforto respiratório"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/EUxnGKzFZfs",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Respiratório",
    videoDescription: "Técnicas respiratórias específicas para melhorar a capacidade pulmonar e gerenciar sintomas de asma de forma segura."
  },
  {
    id: 2024,
    name: "Yoga para Artrite Reumatoide",
    duration: "15",
    difficulty: "Fácil",
    category: "Articulações",
    description: "Prática de yoga terapêutico desenvolvida especificamente para pessoas com artrite reumatoide, com movimentos muito suaves para todas as articulações.",
    benefits: "Reduz a rigidez articular, diminui a dor inflamatória, melhora a amplitude de movimento e ajuda no gerenciamento da condição.",
    purposePoints: [
      "Manter a mobilidade das articulações afetadas",
      "Reduzir a rigidez matinal",
      "Melhorar a circulação nas articulações",
      "Promover relaxamento e redução da dor"
    ],
    instructions: [
      "Sente-se confortavelmente com bom suporte",
      "Inicie com movimentos muito suaves de todas as articulações",
      "Realize rotações delicadas de pulsos, tornozelos e pescoço",
      "Pratique movimentos das grandes articulações com respiração consciente",
      "Finalize com meditação para gerenciamento da dor"
    ],
    detailedInstructions: {
      position: "Sentada com apoio completo e conforto nas articulações",
      movement: "Movimentos muito suaves, dentro do limite de conforto",
      breathing: "Respiração profunda direcionada mentalmente às articulações",
      benefit: "Menos rigidez e dor nas articulações afetadas",
      caution: "Nunca force articulações inflamadas ou doloridas"
    },
    icon: "rotate",
    targetAreas: ["Articulações", "Sistema Imunológico", "Tensão Muscular"],
    adaptations: {
      pain: ["Reduza ainda mais a amplitude", "Use apoios adicionais"],
      tired: ["Diminua o tempo da prática", "Foque apenas nas articulações principais"],
      energized: ["Aumente ligeiramente a amplitude", "Adicione mais repetições sem aumentar a intensidade"]
    },
    cautions: [
      "Evite completamente durante crises agudas",
      "Não force articulações inchadas ou muito doloridas",
      "Pratique preferencialmente após medicação, quando a dor estiver controlada"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/5VF8xIK9u18",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Yoga Terapêutico",
    videoDescription: "Yoga terapêutico especialmente adaptado para pessoas com artrite reumatoide, com foco na mobilidade e alívio da dor."
  },
  {
    id: 2025,
    name: "Fortalecimento do Assoalho Pélvico",
    duration: "8",
    difficulty: "Fácil",
    category: "Fortalecimento",
    description: "Exercícios específicos para fortalecer os músculos do assoalho pélvico, importantes para a saúde urinária, intestinal e sexual.",
    benefits: "Melhora o controle urinário, fortalece os músculos pélvicos, previne prolapsos e melhora a saúde sexual.",
    purposePoints: [
      "Fortalecer os músculos do assoalho pélvico",
      "Melhorar o controle urinário",
      "Prevenir prolapsos de órgãos pélvicos",
      "Promover maior consciência corporal"
    ],
    instructions: [
      "Sente-se confortavelmente com postura ereta",
      "Identifique os músculos do assoalho pélvico (como interromper o fluxo urinário)",
      "Contraia esses músculos por 3-5 segundos e relaxe",
      "Realize contrações rápidas e contrações lentas sustentadas",
      "Termine com respiração profunda e relaxamento consciente"
    ],
    detailedInstructions: {
      position: "Sentada com boa postura, pés apoiados",
      movement: "Contrações invisíveis dos músculos internos do assoalho pélvico",
      breathing: "Respiração regular, sem prender durante as contrações",
      benefit: "Fortalecimento dos músculos pélvicos e melhor controle",
      caution: "Não contraia outros músculos como abdominais ou glúteos"
    },
    icon: "award",
    targetAreas: ["Assoalho Pélvico", "Diafragma Pélvico", "Músculos Perineais"],
    adaptations: {
      pain: ["Reduza a intensidade das contrações", "Foque em contrações muito suaves"],
      tired: ["Reduza o número de repetições", "Faça apenas uma série"],
      energized: ["Aumente o tempo de contração", "Adicione mais séries"]
    },
    cautions: [
      "Consulte um fisioterapeuta pélvico em caso de dor",
      "Evite prender a respiração durante as contrações",
      "Não substitui tratamento médico para incontinência severa"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/AXHJUZxelMk",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Pélvico",
    videoDescription: "Exercícios seguros e eficazes para fortalecer os músculos do assoalho pélvico, importantes para a saúde urinária e sexual."
  },
  {
    id: 2026,
    name: "Exercícios para Osteoporose",
    duration: "12",
    difficulty: "Fácil",
    category: "Fortalecimento",
    description: "Programa de exercícios de fortalecimento e equilíbrio especialmente desenvolvido para pessoas com osteoporose ou baixa densidade óssea.",
    benefits: "Fortalece os ossos, melhora o equilíbrio, reduz o risco de quedas e fraturas, e aumenta a força muscular geral.",
    purposePoints: [
      "Fortalecer os ossos através de exercícios de carga",
      "Melhorar o equilíbrio e coordenação",
      "Reduzir o risco de quedas e fraturas",
      "Aumentar a força muscular geral"
    ],
    instructions: [
      "Sente-se ereta e realize pressão com as mãos contra a cadeira",
      "Faça movimentos de ponte sentada, pressionando os pés no chão",
      "Realize extensões controladas dos braços com pequenos pesos",
      "Pratique transferências de peso para os lados com apoio",
      "Termine com exercícios de equilíbrio estático"
    ],
    detailedInstructions: {
      position: "Sentada com postura ereta e bom apoio",
      movement: "Movimentos controlados com resistência leve",
      breathing: "Respiração fluida, exalando durante o esforço",
      benefit: "Fortalecimento muscular e ósseo com segurança",
      caution: "Evite movimentos de flexão da coluna ou impacto"
    },
    icon: "award",
    targetAreas: ["Sistema Ósseo", "Quadril", "Coluna", "Músculos Posturais"],
    adaptations: {
      pain: ["Reduza a resistência", "Use mais apoios para estabilidade"],
      tired: ["Reduza o número de repetições", "Faça pausas frequentes"],
      energized: ["Aumente ligeiramente a resistência", "Adicione mais séries"]
    },
    cautions: [
      "Evite flexões excessivas da coluna",
      "Não realize torções vigorosas do tronco",
      "Consulte um médico antes de iniciar se tiver osteoporose severa"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/LRSZRG8uKfI",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Geriatria",
    videoDescription: "Exercícios seguros para fortalecer os ossos e músculos em pessoas com osteoporose, reduzindo o risco de fraturas."
  },
  {
    id: 2027,
    name: "Exercícios para Esclerose Múltipla",
    duration: "12",
    difficulty: "Fácil",
    category: "Mobilidade Geral",
    description: "Rotina de exercícios adaptados para pessoas com esclerose múltipla, focando na mobilidade, coordenação e preservação da energia.",
    benefits: "Mantém a mobilidade articular, melhora a coordenação, reduz a fadiga e ajuda a gerenciar sintomas da esclerose múltipla.",
    purposePoints: [
      "Preservar a mobilidade das articulações",
      "Melhorar a coordenação motora",
      "Gerenciar a fadiga relacionada à doença",
      "Manter a independência nas atividades diárias"
    ],
    instructions: [
      "Sente-se em posição confortável com bom suporte",
      "Realize movimentos de todas as articulações em sequência",
      "Pratique exercícios de coordenação simples com as mãos",
      "Faça movimentos alternados de pernas com resistência mínima",
      "Finalize com relaxamento e respiração consciente"
    ],
    detailedInstructions: {
      position: "Sentada com apoio completo e temperatura ambiente controlada",
      movement: "Movimentos de amplitude moderada, preservando energia",
      breathing: "Respiração natural, sem causar fadiga",
      benefit: "Manutenção da mobilidade com gasto energético otimizado",
      caution: "Monitore constantemente o nível de fadiga"
    },
    icon: "move",
    targetAreas: ["Articulações", "Coordenação Neuromuscular", "Sistema Nervoso"],
    adaptations: {
      pain: ["Reduza a amplitude e intensidade", "Use mais apoios"],
      tired: ["Divida em sessões muito curtas ao longo do dia", "Priorize apenas os exercícios essenciais"],
      energized: ["Aumente ligeiramente o tempo", "Adicione mais exercícios de coordenação"]
    },
    cautions: [
      "Evite superaquecimento durante a prática",
      "Pare imediatamente se sentir fadiga significativa",
      "Adapte a rotina conforme suas flutuações diárias de energia"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/H_fvNhqN394",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Neurologia",
    videoDescription: "Exercícios adaptados para pessoas com esclerose múltipla, com foco na preservação da energia e mobilidade funcional."
  },
  {
    id: 2028,
    name: "Mobilidade para Artroplastia de Quadril",
    duration: "10",
    difficulty: "Fácil",
    category: "Quadril",
    description: "Exercícios específicos para pessoas que realizaram artroplastia (prótese) de quadril, focando na recuperação segura da mobilidade e função.",
    benefits: "Recupera a mobilidade do quadril, fortalece os músculos ao redor da prótese, melhora a marcha e previne complicações.",
    purposePoints: [
      "Recuperar a mobilidade segura do quadril operado",
      "Fortalecer a musculatura estabilizadora",
      "Melhorar o padrão de marcha",
      "Prevenir complicações pós-cirúrgicas"
    ],
    instructions: [
      "Sente-se em cadeira alta e firme com bom apoio",
      "Realize deslizamentos do calcanhar para frente e para trás",
      "Pratique contrações isométricas dos glúteos",
      "Faça abdução do quadril com resistência mínima",
      "Finalize com exercícios proprioceptivos suaves"
    ],
    detailedInstructions: {
      position: "Sentada em cadeira firme, altura adequada para quadril",
      movement: "Movimentos controlados evitando posições contraindicadas",
      breathing: "Respiração regular, sem retenção durante esforço",
      benefit: "Recuperação segura da função do quadril operado",
      caution: "Respeite as limitações de movimento indicadas pelo cirurgião"
    },
    icon: "move",
    targetAreas: ["Articulação do Quadril", "Glúteos", "Flexores do Quadril"],
    adaptations: {
      pain: ["Reduza a amplitude", "Use mais apoios e suportes"],
      tired: ["Diminua o número de repetições", "Divida a prática em sessões curtas"],
      energized: ["Aumente ligeiramente as repetições", "Adicione resistência mínima se permitido"]
    },
    cautions: [
      "Evite flexão do quadril além de 90 graus",
      "Não realize adução além da linha média",
      "Evite rotação interna excessiva do quadril operado"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/qyb07fY12oA",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Ortopédico",
    videoDescription: "Exercícios seguros para recuperação da mobilidade após cirurgia de prótese de quadril, respeitando as restrições pós-operatórias."
  },
  {
    id: 2029,
    name: "Exercícios para Parkinson",
    duration: "15",
    difficulty: "Fácil",
    category: "Mobilidade Geral",
    description: "Rotina de exercícios especificamente desenvolvida para pessoas com doença de Parkinson, focando em movimentos amplos, ritmo e coordenação.",
    benefits: "Melhora a amplitude de movimentos, reduz a rigidez muscular, trabalha o equilíbrio e ajuda a manter a independência funcional.",
    purposePoints: [
      "Combater a rigidez muscular característica da doença",
      "Melhorar a amplitude dos movimentos",
      "Trabalhar a coordenação e o ritmo",
      "Manter a independência nas atividades diárias"
    ],
    instructions: [
      "Sente-se confortavelmente com bom suporte nas costas",
      "Realize movimentos amplos e exagerados dos braços",
      "Pratique batidas rítmicas das mãos e pés",
      "Faça exercícios de expressão facial e voz",
      "Termine com alongamentos suaves e respiração profunda"
    ],
    detailedInstructions: {
      position: "Sentada com bom apoio, postura ereta",
      movement: "Movimentos amplos, exagerados e rítmicos",
      breathing: "Respiração profunda, coordenada com vocalizações ocasionais",
      benefit: "Redução da rigidez e melhora da mobilidade funcional",
      caution: "Tenha apoios próximos para maior segurança"
    },
    icon: "move",
    targetAreas: ["Sistema Motor", "Coordenação", "Expressão Facial", "Voz"],
    adaptations: {
      pain: ["Reduza a amplitude se necessário", "Use mais apoios"],
      tired: ["Diminua o tempo da prática", "Foque nos exercícios mais importantes"],
      energized: ["Aumente o tempo da prática", "Adicione mais variações rítmicas"]
    },
    cautions: [
      "Tenha sempre um apoio próximo para segurança",
      "Pratique preferencialmente quando a medicação estiver no efeito ideal",
      "Evite movimentos rápidos que possam comprometer o equilíbrio"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/Md3JLhQBdJ8",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Neurologia",
    videoDescription: "Exercícios específicos para pessoas com Parkinson, com foco em movimentos amplos, ritmo e coordenação."
  },
  {
    id: 2030,
    name: "Técnicas de Auto-Massagem Terapêutica",
    duration: "10",
    difficulty: "Fácil",
    category: "Relaxamento",
    description: "Sequência de técnicas de automassagem para aliviar pontos de tensão, melhorar a circulação e promover relaxamento profundo dos músculos.",
    benefits: "Alivia dores musculares, melhora a circulação sanguínea, reduz o estresse e aumenta a consciência corporal.",
    purposePoints: [
      "Aliviar pontos de tensão muscular",
      "Melhorar a circulação sanguínea local",
      "Reduzir dores associadas à tensão",
      "Promover relaxamento físico e mental"
    ],
    instructions: [
      "Sente-se confortavelmente e aqueça as mãos",
      "Inicie com massagem no couro cabeludo e têmporas",
      "Realize pressão circular nos músculos do pescoço e ombros",
      "Massageie as palmas das mãos e espaços entre os dedos",
      "Finalize com toques suaves no rosto e respiração profunda"
    ],
    detailedInstructions: {
      position: "Sentada confortavelmente, postura relaxada",
      movement: "Toques firmes mas gentis, pressões circulares",
      breathing: "Respiração profunda, exalando durante pressões mais intensas",
      benefit: "Alívio de tensões e maior consciência corporal",
      caution: "Ajuste a pressão conforme sua sensibilidade"
    },
    icon: "smile",
    targetAreas: ["Músculos Tensionados", "Pontos de Gatilho", "Circulação"],
    adaptations: {
      pain: ["Reduza a pressão", "Evite áreas muito sensíveis"],
      tired: ["Foque apenas nas áreas principais de tensão", "Reduza o tempo"],
      energized: ["Explore mais áreas do corpo", "Aumente o tempo em cada região"]
    },
    cautions: [
      "Evite pressão excessiva sobre ferimentos ou inflamações",
      "Não massageie varizes ou áreas com trombose",
      "Reduza a pressão em caso de hematomas ou uso de anticoagulantes"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/Joggi0t5zVc",
    videoSource: "YouTube",
    videoAuthor: "Massoterapeuta",
    videoDescription: "Técnicas de automassagem para aliviar tensões e promover relaxamento profundo, com foco nas áreas mais afetadas pelo estresse."
  },
  {
    id: 2031,
    name: "Exercícios para Síndrome do Impacto no Ombro",
    duration: "12",
    difficulty: "Médio",
    category: "Ombros",
    description: "Sequência de exercícios terapêuticos específicos para a síndrome do impacto no ombro, visando aliviar a dor e melhorar a função articular.",
    benefits: "Reduz a dor no ombro, melhora a amplitude de movimento, fortalece os músculos estabilizadores e previne a progressão da condição.",
    purposePoints: [
      "Aliviar a dor no ombro causada pelo impacto",
      "Fortalecer os músculos do manguito rotador",
      "Melhorar a mecânica da articulação do ombro",
      "Prevenir o agravamento da condição"
    ],
    instructions: [
      "Sente-se confortavelmente com postura ereta",
      "Realize rotações externas suaves do ombro com o cotovelo dobrado",
      "Pratique elevações controladas do braço dentro do limite sem dor",
      "Faça fortalecimento dos músculos escapulares",
      "Finalize com mobilização suave da articulação"
    ],
    detailedInstructions: {
      position: "Sentada com apoio para as costas, postura neutra",
      movement: "Movimentos controlados, sem ultrapassar o limite de dor",
      breathing: "Respiração fluida, sem retenção durante os exercícios",
      benefit: "Melhor função do ombro e redução da dor",
      caution: "Evite posições que causem dor aguda ou impacto"
    },
    icon: "move",
    targetAreas: ["Manguito Rotador", "Ombro", "Escápula"],
    adaptations: {
      pain: ["Reduza a amplitude dos movimentos", "Use apoios para o braço"],
      tired: ["Diminua o número de repetições", "Foque nos exercícios mais importantes"],
      energized: ["Aumente as repetições", "Adicione leve resistência se não houver dor"]
    },
    cautions: [
      "Evite elevar o braço acima da altura do ombro se causar dor",
      "Não use pesos se estiver com dor aguda",
      "Interrompa qualquer movimento que cause dor significativa"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/KZ_jfaXqrDY",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Ombro",
    videoDescription: "Exercícios terapêuticos específicos para a síndrome do impacto no ombro, com foco no alívio da dor e reabilitação."
  },
  {
    id: 2032,
    name: "Exercícios para Escoliose",
    duration: "15",
    difficulty: "Médio",
    category: "Coluna",
    description: "Exercícios específicos para pessoas com escoliose, visando fortalecer os músculos assimétricos, melhorar a postura e reduzir o desconforto.",
    benefits: "Melhora o alinhamento da coluna, fortalece a musculatura assimétrica, reduz a dor e melhora a consciência postural.",
    purposePoints: [
      "Fortalecer a musculatura assimétrica da coluna",
      "Melhorar o alinhamento postural",
      "Reduzir dores associadas à escoliose",
      "Prevenir a progressão da curvatura"
    ],
    instructions: [
      "Sente-se ereta com os pés bem apoiados no chão",
      "Realize exercícios de alongamento lateral direcionados",
      "Pratique respiração assimétrica para expansão específica",
      "Faça exercícios de fortalecimento do core enfatizando o lado mais fraco",
      "Finalize com autocorreção postural consciente"
    ],
    detailedInstructions: {
      position: "Sentada com postura ereta mas sem tensão excessiva",
      movement: "Movimentos assimétricos específicos para o padrão da escoliose",
      breathing: "Respiração direcionada para a expansão do lado côncavo da curva",
      benefit: "Melhor alinhamento da coluna e redução da dor",
      caution: "Adapte os exercícios ao seu padrão específico de curvatura"
    },
    icon: "activity",
    targetAreas: ["Coluna Vertebral", "Músculos Paravertebrais", "Core"],
    adaptations: {
      pain: ["Reduza a intensidade dos exercícios", "Aumente o suporte postural"],
      tired: ["Reduza o número de repetições", "Priorize apenas os exercícios mais importantes"],
      energized: ["Aumente o tempo de prática", "Adicione mais exercícios específicos"]
    },
    cautions: [
      "Consulte um especialista para exercícios específicos para seu tipo de curvatura",
      "Evite exercícios que aumentem a dor",
      "Em casos de escoliose severa, siga apenas orientações profissionais"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/mfZGRwYJMAM",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Especialista em Coluna",
    videoDescription: "Exercícios específicos para pessoas com escoliose, adaptados para a posição sentada, com foco na correção postural."
  },
  {
    id: 2033,
    name: "Exercícios para Controle do Diabetes",
    duration: "15",
    difficulty: "Fácil",
    category: "Fortalecimento",
    description: "Programa de exercícios projetado para ajudar no controle glicêmico, melhorar a sensibilidade à insulina e promover a saúde metabólica em pessoas com diabetes.",
    benefits: "Ajuda no controle da glicemia, melhora a sensibilidade à insulina, fortalece os músculos e melhora a saúde cardiovascular.",
    purposePoints: [
      "Melhorar o controle glicêmico",
      "Aumentar a sensibilidade à insulina",
      "Fortalecer os grandes grupos musculares",
      "Promover a saúde cardiovascular"
    ],
    instructions: [
      "Sente-se ereta com boa postura e pés apoiados",
      "Realize movimentos de resistência para grandes grupos musculares",
      "Pratique contrações alternadas de pernas e braços",
      "Faça pausas para verificação da glicemia se necessário",
      "Finalize com alongamentos suaves e respiração consciente"
    ],
    detailedInstructions: {
      position: "Sentada com postura confortável e apoio se necessário",
      movement: "Contrações musculares rítmicas de intensidade moderada",
      breathing: "Respiração regular, sem prender o ar durante o esforço",
      benefit: "Melhor controle glicêmico e maior força muscular",
      caution: "Monitore seus níveis de glicose antes e depois do exercício"
    },
    icon: "award",
    targetAreas: ["Grandes Grupos Musculares", "Sistema Metabólico", "Sistema Cardiovascular"],
    adaptations: {
      pain: ["Reduza a intensidade", "Modifique os exercícios conforme necessário"],
      tired: ["Diminua o tempo da sessão", "Realize apenas os movimentos principais"],
      energized: ["Aumente a duração", "Adicione mais repetições ou leve resistência"]
    },
    cautions: [
      "Tenha um lanche rápido disponível em caso de hipoglicemia",
      "Evite exercícios de alta intensidade se não estiver habituado",
      "Consulte seu médico antes de iniciar, especialmente se usar insulina"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/fGDGZ4izWkI",
    videoSource: "YouTube",
    videoAuthor: "Educador em Diabetes e Exercício Físico",
    videoDescription: "Exercícios específicos para pessoas com diabetes, com foco no controle glicêmico e na saúde metabólica geral."
  },
  {
    id: 2034,
    name: "Yoga para Melhorar o Sono",
    duration: "12",
    difficulty: "Fácil",
    category: "Relaxamento",
    description: "Sequência de yoga suave com foco em movimentos relaxantes e técnicas respiratórias que preparam o corpo e a mente para um sono de qualidade.",
    benefits: "Reduz a insônia, acalma o sistema nervoso, alivia a tensão física e mental, e melhora a qualidade geral do sono.",
    purposePoints: [
      "Induzir o relaxamento físico e mental antes de dormir",
      "Reduzir a ativação do sistema nervoso simpático",
      "Aliviar tensões acumuladas durante o dia",
      "Preparar o corpo para um sono reparador"
    ],
    instructions: [
      "Sente-se confortavelmente em um ambiente calmo e escurecido",
      "Realize movimentos suaves de rotação do pescoço e ombros",
      "Pratique a respiração 4-7-8 (inspire 4, segure 7, expire 8)",
      "Faça alongamentos suaves para liberar tensão das costas",
      "Finalize com um breve período de meditação guiada"
    ],
    detailedInstructions: {
      position: "Sentada confortavelmente com suporte completo",
      movement: "Movimentos muito lentos e gentis, quase meditativos",
      breathing: "Respiração progressivamente mais lenta e profunda",
      benefit: "Indução do estado de relaxamento propício ao sono",
      caution: "Mantenha o ambiente calmo, com luz reduzida"
    },
    icon: "moon",
    targetAreas: ["Sistema Nervoso", "Tensão Muscular", "Estado Mental"],
    adaptations: {
      pain: ["Use mais suportes para conforto total", "Reduza a amplitude dos movimentos"],
      tired: ["Reduza o tempo da prática", "Foque principalmente na respiração"],
      energized: ["Aumente o tempo de prática", "Adicione mais técnicas de respiração calmante"]
    },
    cautions: [
      "Pratique pelo menos 1 hora antes de dormir",
      "Evite estimulantes (café, telas) após a prática",
      "Mantenha o ambiente fresco e confortável"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/bLzR8v9bvUE",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Yoga para Insônia",
    videoDescription: "Sequência relaxante de yoga para preparar o corpo e a mente para um sono profundo e reparador."
  },
  {
    id: 2035,
    name: "Exercícios para Labirintite",
    duration: "10",
    difficulty: "Fácil",
    category: "Equilíbrio",
    description: "Exercícios vestibulares suaves para pessoas com labirintite ou vertigem, focando na reabilitação do equilíbrio e redução dos sintomas de tontura.",
    benefits: "Reduz a tontura, melhora o equilíbrio, fortalece o sistema vestibular e diminui o desconforto causado pela labirintite.",
    purposePoints: [
      "Reabilitar o sistema vestibular",
      "Reduzir sintomas de tontura e vertigem",
      "Melhorar o equilíbrio estático e dinâmico",
      "Aumentar a confiança nas atividades diárias"
    ],
    instructions: [
      "Sente-se em uma cadeira estável com bom suporte",
      "Realize movimentos muito lentos da cabeça, horizontais e verticais",
      "Pratique fixação do olhar em um ponto durante os movimentos",
      "Faça transferências de peso suaves para os lados",
      "Progrida gradualmente para movimentos mais desafiadores"
    ],
    detailedInstructions: {
      position: "Sentada com total estabilidade e suporte",
      movement: "Movimentos muito lentos e controlados, progressivos",
      breathing: "Respiração calma e regular",
      benefit: "Redução gradual da tontura e melhora do equilíbrio",
      caution: "Pare e descanse se a tontura piorar significativamente"
    },
    icon: "target",
    targetAreas: ["Sistema Vestibular", "Equilíbrio", "Coordenação Olho-Cabeça"],
    adaptations: {
      pain: ["Reduza ainda mais a velocidade dos movimentos", "Aumente o suporte"],
      tired: ["Faça menos repetições", "Reduza o tempo de prática"],
      energized: ["Aumente gradualmente o desafio", "Adicione mais variações"]
    },
    cautions: [
      "Sempre tenha um apoio firme ao alcance",
      "Progredida muito gradualmente na intensidade",
      "Pare imediatamente se sentir náusea ou tontura severa"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/Xvp9M6FW2tY",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Vestibular",
    videoDescription: "Exercícios vestibulares suaves para pessoas com labirintite ou vertigem, com progressão gradual e segura."
  },
  {
    id: 2036,
    name: "Exercícios para Artrose de Mãos",
    duration: "8",
    difficulty: "Fácil",
    category: "Punhos e Mãos",
    description: "Exercícios específicos para pessoas com artrose nas mãos, visando manter a mobilidade, reduzir a dor e melhorar a função das articulações afetadas.",
    benefits: "Preserva a mobilidade das articulações das mãos, reduz a dor, melhora a força de preensão e mantém a independência nas atividades diárias.",
    purposePoints: [
      "Manter a mobilidade das articulações afetadas pela artrose",
      "Reduzir a dor nas mãos e dedos",
      "Melhorar a força de preensão",
      "Preservar a função para atividades diárias"
    ],
    instructions: [
      "Comece com imersão das mãos em água morna (opcional)",
      "Realize movimentos suaves de flexão e extensão de cada dedo",
      "Pratique movimentos circulares dos polegares",
      "Faça exercícios leves de pinça com diferentes dedos",
      "Finalize com alongamentos muito suaves"
    ],
    detailedInstructions: {
      position: "Sentada com os antebraços apoiados confortavelmente",
      movement: "Movimentos muito suaves e lentos, respeitando limites de dor",
      breathing: "Respiração tranquila, sem retenção",
      benefit: "Manutenção da mobilidade das mãos com redução da dor",
      caution: "Nunca force articulações inflamadas ou muito doloridas"
    },
    icon: "hand",
    targetAreas: ["Articulações das Mãos", "Dedos", "Polegar"],
    adaptations: {
      pain: ["Use calor úmido antes dos exercícios", "Diminua a amplitude"],
      tired: ["Reduza o número de repetições", "Foque apenas nos dedos mais afetados"],
      energized: ["Aumente suavemente as repetições", "Adicione mais variações"]
    },
    cautions: [
      "Evite completamente durante crises agudas de dor",
      "Não force articulações visivelmente deformadas",
      "Use calor antes e possivelmente gelo depois se houver inflamação"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/RZfH-dSw2Ic",
    videoSource: "YouTube",
    videoAuthor: "Terapeuta Ocupacional",
    videoDescription: "Exercícios gentis e eficazes para manter a mobilidade e reduzir a dor em mãos afetadas pela artrose."
  },
  {
    id: 2037,
    name: "Fortalecimento Cognitivo para Idosos",
    duration: "12",
    difficulty: "Fácil",
    category: "Estimulação Cognitiva",
    description: "Exercícios que combinam movimento físico com desafios cognitivos, ideal para manter a saúde cerebral e prevenir o declínio cognitivo em idosos.",
    benefits: "Estimula as funções cognitivas, melhora a coordenação motora, aumenta a concentração e ajuda a preservar a memória e funções executivas.",
    purposePoints: [
      "Estimular diferentes funções cognitivas (memória, atenção, etc.)",
      "Combinar movimento físico com desafio mental",
      "Prevenir o declínio cognitivo relacionado à idade",
      "Melhorar a coordenação motora-cognitiva"
    ],
    instructions: [
      "Sente-se confortavelmente com boa postura",
      "Realize movimentos das mãos seguindo sequências numéricas",
      "Pratique exercícios de associação de palavras com movimentos",
      "Faça atividades de categorização enquanto executa movimentos alternados",
      "Finalize com exercício de relaxamento e consolidação mental"
    ],
    detailedInstructions: {
      position: "Sentada com postura confortável e atenta",
      movement: "Coordenação de movimentos físicos com tarefas mentais",
      breathing: "Respiração natural, mantendo o foco mental",
      benefit: "Manutenção das funções cognitivas e melhor coordenação",
      caution: "Ajuste o nível de dificuldade para evitar frustração"
    },
    icon: "target",
    targetAreas: ["Funções Cognitivas", "Coordenação Motora", "Atenção", "Memória"],
    adaptations: {
      pain: ["Simplifique os movimentos físicos", "Mantenha o foco no desafio cognitivo"],
      tired: ["Reduza a complexidade das tarefas", "Faça sessões mais curtas"],
      energized: ["Aumente a complexidade das tarefas", "Adicione mais desafios sequenciais"]
    },
    cautions: [
      "Evite tarefas muito complexas que causem frustração",
      "Mantenha o ambiente livre de distrações",
      "Adapte o nível de dificuldade conforme a capacidade individual"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/QBLQrpgQDj8",
    videoSource: "YouTube",
    videoAuthor: "Neuropsicólogo Especialista em Envelhecimento",
    videoDescription: "Exercícios que combinam movimento físico com desafios mentais, ideais para manter a saúde cerebral e prevenir o declínio cognitivo."
  },
  {
    id: 2038,
    name: "Yoga para Hipertensão",
    duration: "15",
    difficulty: "Fácil",
    category: "Respiração Terapêutica",
    description: "Sequência de yoga terapêutico com ênfase em técnicas respiratórias e posturas relaxantes, especialmente desenvolvida para pessoas com hipertensão.",
    benefits: "Ajuda a reduzir a pressão arterial, diminui o estresse, melhora a saúde cardiovascular e promove relaxamento profundo.",
    purposePoints: [
      "Auxiliar no controle da pressão arterial",
      "Reduzir o estresse e a ansiedade",
      "Melhorar a oxigenação e circulação",
      "Promover relaxamento do sistema nervoso simpático"
    ],
    instructions: [
      "Sente-se confortavelmente com a coluna ereta",
      "Pratique a respiração diafragmática profunda por alguns minutos",
      "Realize a respiração alternada pelas narinas (sem retenção)",
      "Faça movimentos suaves e lentos de alongamento",
      "Finalize com meditação guiada para redução do estresse"
    ],
    detailedInstructions: {
      position: "Sentada com bom suporte e coluna alinhada sem tensão",
      movement: "Movimentos muito suaves coordenados com a respiração",
      breathing: "Respiração profunda, lenta e controlada, sem retenção",
      benefit: "Efeito calmante sobre o sistema cardiovascular",
      caution: "Evite retenção da respiração e posições invertidas"
    },
    icon: "wind",
    targetAreas: ["Sistema Cardiovascular", "Sistema Nervoso", "Respiração"],
    adaptations: {
      pain: ["Adapte para posição mais confortável", "Foque mais na respiração que nos movimentos"],
      tired: ["Reduza o tempo da prática", "Enfatize apenas a respiração"],
      energized: ["Aumente o tempo da respiração alternada", "Adicione mais alongamentos suaves"]
    },
    cautions: [
      "Evite completamente retenção da respiração",
      "Não faça posições invertidas da cabeça",
      "Continue tomando medicação prescrita, essa prática é complementar"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/IHOyPT0fI7U",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Yoga Terapêutico",
    videoDescription: "Yoga terapêutico com ênfase em técnicas respiratórias e posturas relaxantes para auxiliar no controle da pressão arterial."
  },
  {
    id: 2039,
    name: "Exercícios para Após AVC",
    duration: "15",
    difficulty: "Fácil",
    category: "Reabilitação Neurológica",
    description: "Programa de exercícios adaptados para pessoas em recuperação de AVC (Acidente Vascular Cerebral), com foco na reabilitação motora e funcional.",
    benefits: "Auxilia na recuperação motora, melhora a coordenação, aumenta a força muscular e ajuda a recuperar independência nas atividades diárias.",
    purposePoints: [
      "Reabilitar a função motora após AVC",
      "Melhorar a coordenação e equilíbrio",
      "Fortalecer os músculos afetados",
      "Promover independência funcional"
    ],
    instructions: [
      "Sente-se com apoio adequado para manter a estabilidade",
      "Realize movimentos ativos ou assistidos do lado afetado",
      "Pratique exercícios de cruzamento da linha média do corpo",
      "Faça movimentos de coordenação olho-mão simples",
      "Progrida gradualmente conforme a recuperação"
    ],
    detailedInstructions: {
      position: "Sentada com suporte completo para estabilidade",
      movement: "Movimentos suaves, com assistência se necessário",
      breathing: "Respiração natural, sem esforço",
      benefit: "Recuperação gradual da função motora",
      caution: "Sempre respeite os limites atuais de mobilidade"
    },
    icon: "activity",
    targetAreas: ["Função Motora", "Coordenação", "Equilíbrio", "Força Muscular"],
    adaptations: {
      pain: ["Use mais assistência nos movimentos", "Reduza a amplitude"],
      tired: ["Faça sessões mais curtas e frequentes", "Inclua mais pausas"],
      energized: ["Aumente gradualmente a dificuldade", "Adicione mais repetições"]
    },
    cautions: [
      "Sempre tenha supervisão nas fases iniciais",
      "Evite movimentos que causem dor ou desconforto significativo",
      "Progrida lentamente e de forma consistente"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/z4hLfWU8Z9Y",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapeuta Neurológico",
    videoDescription: "Exercícios adaptados para pessoas em recuperação de AVC, com progressão gradual para recuperação da função motora."
  },
  {
    id: 2040,
    name: "Meditação Mindfulness para Dor Crônica",
    duration: "15",
    difficulty: "Fácil",
    category: "Meditação",
    description: "Prática de meditação mindfulness (atenção plena) específica para pessoas com dor crônica, com foco na mudança da relação com a experiência da dor.",
    benefits: "Reduz o sofrimento associado à dor crônica, diminui a ansiedade, melhora a qualidade de vida e desenvolve estratégias mentais para lidar com a dor.",
    purposePoints: [
      "Transformar a relação com a experiência da dor",
      "Reduzir o sofrimento emocional associado à dor física",
      "Desenvolver consciência corporal não-reativa",
      "Melhorar a qualidade de vida apesar da dor persistente"
    ],
    instructions: [
      "Sente-se em posição confortável com suporte adequado",
      "Estabeleça consciência da respiração e das sensações corporais",
      "Observe as sensações de dor com curiosidade, sem julgamento",
      "Pratique a expansão da consciência para além da dor",
      "Finalize com intenção positiva para o autocuidado"
    ],
    detailedInstructions: {
      position: "Sentada com máximo conforto e suporte para áreas doloridas",
      movement: "Praticamente imóvel, com foco na experiência interna",
      breathing: "Respiração natural, usada como âncora para a atenção",
      benefit: "Mudança na percepção e relação com a dor crônica",
      caution: "Aceite que emoções difíceis podem surgir durante a prática"
    },
    icon: "moon",
    targetAreas: ["Percepção da Dor", "Sistema Nervoso", "Estado Mental"],
    adaptations: {
      pain: ["Use mais suportes físicos", "Pratique por períodos mais curtos"],
      tired: ["Reduza o tempo da meditação", "Considere praticar deitado"],
      energized: ["Aumente gradualmente o tempo", "Aprofunde a investigação da experiência"]
    },
    cautions: [
      "Não é substituto para tratamento médico adequado",
      "Pode trazer emoções difíceis à tona inicialmente",
      "Benefícios vêm com prática regular a longo prazo"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/KFYDSteEe3w",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Mindfulness para Dor Crônica",
    videoDescription: "Meditação mindfulness específica para pessoas com dor crônica, focando na transformação da relação com a experiência da dor."
  }
];

export default additionalExercises; 