import { Exercise } from '@/types';

const videoExercises: Exercise[] = [
  {
    id: 1001,
    name: "Yoga para Alívio da Coluna Cervical",
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
    videoUrl: "https://www.youtube.com/embed/JUP_YdYyfQw?origin=http://localhost:8080&enablejsapi=1",
    videoSource: "YouTube",
    videoAuthor: "Pri Leite Yoga",
    videoDescription: "Sequência para aliviar tensões no pescoço e região cervical com a professora Pri Leite."
  },
  {
    id: 1002,
    name: "Yoga para Lombalgia",
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
    videoUrl: "https://www.youtube.com/embed/Wof8-Ntv-Q8?origin=http://localhost:8080&enablejsapi=1",
    videoSource: "YouTube",
    videoAuthor: "Rachel Yoga",
    videoDescription: "Aula de yoga para aliviar dores lombares e melhorar sua postura."
  },
  {
    id: 1003,
    name: "Exercícios para Túnel do Carpo",
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
    videoUrl: "https://www.youtube.com/embed/Qj9wK65MpH0?origin=http://localhost:8080&enablejsapi=1",
    videoSource: "YouTube",
    videoAuthor: "Fisioterapia Ilustrada",
    videoDescription: "Exercícios práticos para túnel do carpo: melhore sua condição com estas técnicas."
  },
  {
    id: 1004,
    name: "Yoga para Ciático",
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
    videoUrl: "https://www.youtube.com/embed/igAjVy2pNDE?origin=http://localhost:8080&enablejsapi=1",
    videoSource: "YouTube",
    videoAuthor: "Adriene Mishler (Legendado)",
    videoDescription: "Yoga para aliviar a dor ciática e relaxar a região lombar."
  },
  {
    id: 1005,
    name: "Exercícios para Ombros Tensos",
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
    videoUrl: "https://www.youtube.com/embed/RAfQcHmvELs?origin=http://localhost:8080&enablejsapi=1",
    videoSource: "YouTube",
    videoAuthor: "Anderson Fisioterapia",
    videoDescription: "Exercícios para aliviar tensão e dor nos ombros em apenas 10 minutos."
  }
];

export default videoExercises; 