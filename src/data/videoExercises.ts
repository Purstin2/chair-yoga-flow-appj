import { Exercise } from '@/types';

const videoExercises: Exercise[] = [
  {
    id: 1001,
    name: "Alívio para Pescoço e Cervical",
    duration: "10",
    difficulty: "Fácil",
    category: "Cervical",
    description: "Sequência de alongamentos para liberar tensão na região do pescoço e cervical, ideal para quem passa muito tempo sentado.",
    benefits: "Alivia dores na região cervical e melhora a postura.",
    purposePoints: [
      "Aliviar tensão no pescoço e ombros",
      "Aumentar a mobilidade da coluna cervical",
      "Reduzir dores de cabeça causadas por tensão",
      "Melhorar a circulação na região superior do corpo"
    ],
    instructions: [
      "Sente-se em postura confortável",
      "Relaxe os ombros",
      "Incline a cabeça suavemente para os lados",
      "Gire o pescoço em movimentos circulares lentos",
      "Finalize com respirações profundas"
    ],
    detailedInstructions: {
      position: "Sentada em uma cadeira com a coluna ereta",
      movement: "Movimentos lentos e controlados da cabeça e pescoço",
      breathing: "Respiração profunda e consciente",
      benefit: "Alívio de tensão na região cervical",
      caution: "Evite movimentos bruscos ou excessivos"
    },
    icon: "neck",
    targetAreas: ["Cervical", "Trapézio", "Ombros"],
    adaptations: {
      pain: ["Reduza a amplitude dos movimentos", "Mantenha os olhos abertos"],
      tired: ["Realize apenas metade da sequência", "Faça pausas entre os movimentos"],
      energized: ["Adicione respiração mais dinâmica", "Aumente o número de repetições"]
    },
    cautions: [
      "Evite movimentos bruscos",
      "Pare se sentir tontura",
      "Respeite seus limites de amplitude"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/u6LAW08hKZ4",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Yoga",
    videoDescription: "Sequência de yoga para aliviar tensão e dores na região cervical, pescoço e ombros."
  },
  {
    id: 1002,
    name: "Alívio para Lombar e Ciático",
    duration: "15",
    difficulty: "Fácil",
    category: "Lombar",
    description: "Exercícios de yoga terapêutico para alívio da dor lombar crônica ou aguda, com movimentos suaves e seguros.",
    benefits: "Reduz dor lombar, fortalece o core e melhora a flexibilidade da coluna.",
    purposePoints: [
      "Aliviar dores na região lombar",
      "Fortalecer a musculatura abdominal",
      "Melhorar a flexibilidade da coluna",
      "Corrigir desequilíbrios posturais"
    ],
    instructions: [
      "Deite-se de costas com as pernas dobradas",
      "Realize movimentos de báscula pélvica",
      "Leve os joelhos ao peito suavemente",
      "Faça a postura da criança",
      "Finalize com alongamento de costas"
    ],
    detailedInstructions: {
      position: "Deitada de costas em um tapete",
      movement: "Movimentos suaves de retroversão e anteversão pélvica",
      breathing: "Respiração abdominal profunda",
      benefit: "Alívio de tensão e dor na região lombar",
      caution: "Evite pressionar a coluna com movimentos bruscos"
    },
    icon: "spine",
    targetAreas: ["Lombar", "Abdômen", "Quadril"],
    adaptations: {
      pain: ["Use almofadas para suporte", "Diminua a intensidade dos movimentos"],
      tired: ["Faça apenas os movimentos mais confortáveis", "Reduza o tempo de permanência"],
      energized: ["Adicione mais repetições", "Aumente o tempo de permanência nas posturas"]
    },
    cautions: [
      "Não force a lombar",
      "Mantenha a respiração suave",
      "Evite se tiver hérnia de disco aguda"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/4PQudKmqWW8",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Yoga",
    videoDescription: "Sequência para aliviar dores na região lombar e no nervo ciático com posturas de yoga terapêutica."
  },
  {
    id: 1003,
    name: "Alívio para Túnel do Carpo",
    duration: "8",
    difficulty: "Fácil",
    category: "Membros Superiores",
    description: "Sequência específica para aliviar os sintomas da síndrome do túnel do carpo, reduzindo a inflamação e melhorando a mobilidade.",
    benefits: "Alívio da dor e formigamento nos punhos e mãos, melhora da circulação.",
    purposePoints: [
      "Aliviar a compressão do nervo mediano",
      "Reduzir a dor e o formigamento nas mãos",
      "Melhorar a mobilidade dos punhos",
      "Fortalecer a musculatura do antebraço"
    ],
    instructions: [
      "Estenda os braços à frente",
      "Flexione e estenda os punhos lentamente",
      "Faça círculos com os punhos",
      "Abra e feche as mãos",
      "Estique cada dedo individualmente"
    ],
    detailedInstructions: {
      position: "Sentada com os braços apoiados",
      movement: "Movimentos lentos e controlados dos punhos e dedos",
      breathing: "Respiração tranquila e regular",
      benefit: "Alívio dos sintomas do túnel do carpo",
      caution: "Evite exercícios que causem dor aguda"
    },
    icon: "hand",
    targetAreas: ["Punhos", "Mãos", "Antebraços"],
    adaptations: {
      pain: ["Reduza a amplitude", "Use compressas mornas antes do exercício"],
      tired: ["Faça menos repetições", "Divida a prática em momentos do dia"],
      energized: ["Aumente a duração", "Adicione resistência leve com elásticos"]
    },
    cautions: [
      "Pare se sentir dor aguda",
      "Não force os movimentos",
      "Consulte um médico para casos graves"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/u83PMJNERNw",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Fisioterapia",
    videoDescription: "Exercícios específicos para aliviar os sintomas do túnel do carpo e melhorar a mobilidade dos punhos."
  },
  {
    id: 1004,
    name: "Alívio para Dor Ciática",
    duration: "12",
    difficulty: "Fácil",
    category: "Ciático",
    description: "Sequência de posturas de yoga para aliviar a dor ciática, com foco no alongamento do nervo ciático e fortalecimento da região lombar.",
    benefits: "Alívio da dor ciática, maior mobilidade e flexibilidade na coluna e quadril.",
    purposePoints: [
      "Reduzir a compressão do nervo ciático",
      "Aliviar a dor na região lombar e pernas",
      "Melhorar a flexibilidade dos músculos piriformes e isquiotibiais",
      "Promover alinhamento da pelve"
    ],
    instructions: [
      "Deite-se e traga um joelho ao peito",
      "Realize o alongamento do piriforme",
      "Faça a postura do pombo adaptada",
      "Estenda a perna e flexione o tronco suavemente",
      "Finalize com a postura da criança"
    ],
    detailedInstructions: {
      position: "Deitada com as costas apoiadas no chão",
      movement: "Movimentos lentos de flexão e rotação do quadril",
      breathing: "Respiração profunda, exalando durante os alongamentos",
      benefit: "Alívio da dor ciática e maior flexibilidade",
      caution: "Evite rotações extremas ou forçadas do quadril"
    },
    icon: "leg",
    targetAreas: ["Nervo Ciático", "Glúteos", "Isquiotibiais", "Lombar"],
    adaptations: {
      pain: ["Use suportes e almofadas", "Diminua a amplitude dos movimentos"],
      tired: ["Faça menos repetições", "Mantenha as posturas por menos tempo"],
      energized: ["Permaneça mais tempo em cada postura", "Adicione mais repetições"]
    },
    cautions: [
      "Não force além da dor",
      "Evite posturas que aumentem a dor",
      "Consulte um médico em casos de dor intensa"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/FuEUwCAPPys",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Yoga",
    videoDescription: "Sequência de yoga para aliviar dores na região lombar e no nervo ciático através de posturas terapêuticas."
  },
  {
    id: 1005,
    name: "Alívio para Ombros Tensos",
    duration: "10",
    difficulty: "Fácil",
    category: "Ombros",
    description: "Rotina de movimentos para liberar a tensão dos ombros, ideal para quem trabalha no computador ou tem postura incorreta.",
    benefits: "Alívio da tensão nos ombros, melhora da postura e redução de dores de cabeça.",
    purposePoints: [
      "Relaxar a musculatura do trapézio",
      "Aumentar a mobilidade da articulação do ombro",
      "Reduzir dor e tensão na região escapular",
      "Melhorar a postura dos ombros"
    ],
    instructions: [
      "Eleve e abaixe os ombros lentamente",
      "Faça círculos com os ombros para frente e para trás",
      "Entrelaçe os dedos atrás das costas e levante os braços",
      "Cruze um braço na frente do corpo e puxe com o outro",
      "Finalize com alongamento dos braços acima da cabeça"
    ],
    detailedInstructions: {
      position: "Sentada ou em pé com a coluna ereta",
      movement: "Movimentos suaves de elevação, rotação e extensão dos ombros",
      breathing: "Respiração profunda, liberando a tensão na exalação",
      benefit: "Alívio da tensão muscular nos ombros e melhora da postura",
      caution: "Evite movimentos bruscos ou que causem desconforto"
    },
    icon: "shoulder",
    targetAreas: ["Ombros", "Trapézio", "Escápulas"],
    adaptations: {
      pain: ["Reduza a amplitude", "Use apoios para os braços se necessário"],
      tired: ["Reduza o número de repetições", "Faça pausas entre os movimentos"],
      energized: ["Aumente as repetições", "Mantenha os alongamentos por mais tempo"]
    },
    cautions: [
      "Evite forçar além da amplitude confortável",
      "Mantenha o pescoço relaxado",
      "Não faça em caso de lesão recente"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/kxfQD9Q56xE",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Yoga",
    videoDescription: "Sequência rápida para aliviar tensão e dor nos ombros e pescoço, ideal para quem trabalha no computador."
  },
  {
    id: 1016,
    name: "Alívio para Coluna Sacral",
    duration: "15",
    difficulty: "Médio",
    category: "Coluna",
    description: "Sequência para melhorar a mobilidade da coluna torácica e aliviar tensões entre as escápulas, ideal para quem passa muito tempo sentado.",
    benefits: "Melhora da postura, redução de dores entre as escápulas e maior mobilidade respiratória.",
    purposePoints: [
      "Aliviar tensão na região torácica",
      "Melhorar a mobilidade das costelas e coluna média",
      "Expandir a capacidade respiratória",
      "Reduzir dores entre as escápulas"
    ],
    instructions: [
      "Sente-se ereta com os pés apoiados no chão",
      "Cruze os braços em frente ao peito",
      "Realize rotações suaves do tronco para cada lado",
      "Faça extensões da coluna apoiando as mãos nas costas",
      "Finalize com respirações profundas expandindo as costelas"
    ],
    detailedInstructions: {
      position: "Sentada ereta, afastada do encosto da cadeira",
      movement: "Rotações suaves do tronco e extensões da coluna torácica",
      breathing: "Respiração profunda expandindo as costelas lateralmente",
      benefit: "Maior mobilidade da caixa torácica e alívio de tensões",
      caution: "Mantenha os movimentos dentro da zona de conforto"
    },
    icon: "spine",
    targetAreas: ["Coluna Torácica", "Escápulas", "Costelas", "Intercostais"],
    adaptations: {
      pain: ["Reduza a amplitude de rotação", "Use apoio para as mãos"],
      tired: ["Faça menos repetições", "Mantenha os movimentos mais lentos"],
      energized: ["Aumente as repetições", "Amplie a amplitude de movimento"]
    },
    cautions: [
      "Evite movimentos bruscos",
      "Não force extensões excessivas da coluna",
      "Tenha cuidado extra em caso de osteoporose"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/0lne2PMjKrY",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Yoga",
    videoDescription: "Exercícios focados na mobilidade da coluna sacral e alívio de tensões na região lombar."
  },
  {
    id: 1017,
    name: "Alívio para Tendinite no Ombro",
    duration: "12",
    difficulty: "Médio",
    category: "Ombros",
    description: "Exercícios para aliviar dores e fortalecer os músculos do ombro, ideal para quem sofre de tendinite no ombro.",
    benefits: "Redução da inflamação, alívio da dor e fortalecimento dos músculos do ombro.",
    purposePoints: [
      "Aliviar dor no ombro",
      "Melhorar a flexibilidade do ombro",
      "Fortalecer os músculos do ombro",
      "Reduzir tensão nos tendões"
    ],
    instructions: [
      "Sente-se com as costas apoiadas",
      "Estenda o braço afetado à frente",
      "Realize flexões e extensões suaves do ombro",
      "Faça rotações do ombro com o braço dobrado",
      "Termine com alongamentos dos flexores e extensores do ombro"
    ],
    detailedInstructions: {
      position: "Sentada com braços apoiados ou à frente do corpo",
      movement: "Movimentos lentos de flexão, extensão e rotação",
      breathing: "Respiração tranquila, exalando durante alongamentos",
      benefit: "Alívio da dor e tensão no ombro e braço",
      caution: "Interrompa qualquer movimento que aumente a dor"
    },
    icon: "arm",
    targetAreas: ["Ombro", "Braço", "Tendões do Braço"],
    adaptations: {
      pain: ["Reduza a amplitude", "Use compressas mornas antes dos exercícios"],
      tired: ["Diminua as repetições", "Faça apenas os movimentos mais confortáveis"],
      energized: ["Aumente o número de repetições", "Adicione alongamentos mais profundos"]
    },
    cautions: [
      "Evite carregar peso ou fazer esforço durante inflamação aguda",
      "Interrompa se a dor aumentar",
      "Consulte um fisioterapeuta se a dor persistir"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/c6-IbuL8OQE",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Fisioterapia",
    videoDescription: "Exercícios para aliviar dores e fortalecer os músculos do ombro."
  },
  {
    id: 1019,
    name: "Alívio para Síndrome do Piriforme",
    duration: "12",
    difficulty: "Médio",
    category: "Quadril",
    description: "Exercícios para aliviar dores e fortalecer os músculos do quadril, ideal para quem sofre de síndrome do piriforme.",
    benefits: "Redução da inflamação, alívio da dor e fortalecimento dos músculos do quadril.",
    purposePoints: [
      "Aliviar dor no quadril",
      "Melhorar a flexibilidade do quadril",
      "Fortalecer os músculos do quadril",
      "Reduzir tensão nos tendões"
    ],
    instructions: [
      "Sente-se com as costas apoiadas",
      "Estenda o braço afetado à frente",
      "Realize flexões e extensões suaves do quadril",
      "Faça rotações do quadril com o corpo dobrado",
      "Termine com alongamentos dos flexores e extensores do quadril"
    ],
    detailedInstructions: {
      position: "Sentada com braços apoiados ou à frente do corpo",
      movement: "Movimentos lentos de flexão, extensão e rotação",
      breathing: "Respiração tranquila, exalando durante alongamentos",
      benefit: "Alívio da dor e tensão no quadril",
      caution: "Interrompa qualquer movimento que aumente a dor"
    },
    icon: "hip",
    targetAreas: ["Quadril", "Pelve", "Rotadores Externos e Internos"],
    adaptations: {
      pain: ["Reduza a amplitude", "Use compressas mornas antes dos exercícios"],
      tired: ["Diminua as repetições", "Faça apenas os movimentos mais confortáveis"],
      energized: ["Aumente o número de repetições", "Adicione alongamentos mais profundos"]
    },
    cautions: [
      "Evite carregar peso ou fazer esforço durante inflamação aguda",
      "Interrompa se a dor aumentar",
      "Consulte um fisioterapeuta se a dor persistir"
    ],
    isVideoExercise: true,
    videoUrl: "https://www.youtube.com/embed/8LdaEaf3l1U",
    videoSource: "YouTube",
    videoAuthor: "Especialista em Fisioterapia",
    videoDescription: "Exercícios para aliviar dores e fortalecer os músculos do quadril."
  }
];

export default videoExercises; 