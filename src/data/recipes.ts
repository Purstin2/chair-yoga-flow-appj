import { Recipe } from '@/types';

export const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Smoothie Dourado Articulações',
    time: '5 min',
    prepTime: 5,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1638280346622-57bead284eea?q=80&w=1000',
    ingredients: [
      '1 banana madura',
      '200ml leite de coco integral',
      '1 col. chá cúrcuma em pó',
      '1 col. chá gengibre fresco ralado',
      '1 col. sopa aveia em flocos',
      '1 col. chá mel (opcional)',
      'Pitada pimenta-do-reino'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador',
      'Adicione gelo se preferir gelado',
      'Beba imediatamente'
    ],
    benefits: 'Rico em compostos anti-inflamatórios, antioxidantes e fibras para energia sustentada.',
    scientificBenefits: [
      'Cúrcuma: reduz inflamação em 40% (estudos clínicos)',
      'Gengibre: alivia dores articulares',
      'Aveia: energia sustentada, controla açúcar',
      'Coco: ácidos graxos anti-inflamatórios'
    ],
    contraindications: [
      'Evitar se tem gastrite ativa',
      'Diabéticos: usar sem mel'
    ],
    adaptations: {
      'Diabetes': 'Preparar sem mel, usar apenas meia banana',
      'Gastrite': 'Reduzir ou eliminar o gengibre',
      'Colesterol alto': 'Usar leite vegetal mais leve como o de amêndoas'
    },
    specialTip: 'Beba 30 min antes do exercício para potencializar efeitos anti-inflamatórios.'
  },
  {
    id: 2,
    name: 'Mingau Termogênico Energia',
    time: '8 min',
    prepTime: 8,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=1000',
    ingredients: [
      '3 col. sopa aveia em flocos',
      '200ml leite de amêndoas',
      '1 col. chá canela em pó',
      '1 col. sopa chia',
      '1 maçã pequena picada',
      '1 col. chá óleo de coco'
    ],
    instructions: [
      'Aqueça o leite com canela',
      'Adicione aveia, cozinhe 5 min',
      'Junte chia, maçã e óleo de coco',
      'Sirva morno'
    ],
    benefits: 'Combinação de carboidratos complexos e gorduras saudáveis para energia sustentada.',
    scientificBenefits: [
      'Canela: acelera metabolismo em 10%',
      'Chia: ômega-3 reduz inflamação',
      'Óleo de coco: energia rápida para cérebro',
      'Maçã: fibras regulam intestino'
    ],
    contraindications: [
      'Pessoas com alergia a nozes (leite de amêndoas)',
      'Intolerância a frutose (substituir maçã)'
    ],
    adaptations: {
      'Diabetes': 'Use maçã verde e reduzir óleo de coco',
      'Pressão alta': 'Sem sal adicional',
      'Intestino irritável': 'Reduzir chia para 1 colher de chá'
    },
    specialTip: 'Prepare na noite anterior e deixe na geladeira para um café da manhã rápido.'
  },
  {
    id: 3,
    name: 'Salada Poder Verde Articulações',
    time: '10 min',
    prepTime: 10,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000',
    ingredients: [
      '2 xíc. folhas verdes variadas (rúcula, espinafre)',
      '1 abacate médio em fatias',
      '1 col. sopa nozes picadas',
      '1 cenoura ralada',
      '1 beterraba pequena ralada',
      '2 col. sopa azeite extra virgem',
      '1 col. sopa vinagre de maçã',
      '1 col. chá alho picado',
      'Sal rosa q.b.',
      'Limão a gosto',
      'Proteína a escolher: 100g frango grelhado, 2 ovos cozidos ou 3 col. sopa grão-de-bico'
    ],
    instructions: [
      'Lave e seque bem as folhas',
      'Misture todos os vegetais em uma tigela',
      'Adicione a proteína escolhida',
      'Prepare o molho misturando azeite, vinagre, alho, sal e limão',
      'Regue a salada com o molho antes de servir'
    ],
    benefits: 'Combinação de nutrientes essenciais, antioxidantes e gorduras saudáveis para combater inflamação.',
    scientificBenefits: [
      'Folhas escuras: magnésio relaxa músculos',
      'Abacate: ômega-9 reduz inflamação',
      'Nozes: ômega-3 para articulações',
      'Azeite: polifenóis antioxidantes'
    ],
    contraindications: [
      'Pessoas com alergia a nozes',
      'Problemas de vesícula (reduzir gorduras)'
    ],
    adaptations: {
      'Dieta baixa em FODMAP': 'Usar menos abacate e evitar alho',
      'Problemas renais': 'Reduzir quantidade de nozes e usar menos sal',
      'Colesterol alto': 'Usar apenas claras de ovo como proteína'
    },
    specialTip: 'Mastigar devagar aumenta absorção de nutrientes em 30%. Invista pelo menos 20 minutos para comer.'
  },
  {
    id: 4,
    name: 'Sopa Dourada Recuperação',
    time: '15 min',
    prepTime: 15,
    servings: 2,
    difficulty: 'Médio',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000',
    ingredients: [
      '1 batata-doce média em cubos',
      '1 cenoura em rodelas',
      '200g abóbora em cubos',
      '1 col. chá cúrcuma',
      '1 col. chá gengibre fresco',
      '500ml caldo de legumes',
      '200ml leite de coco',
      'Sal rosa e pimenta'
    ],
    instructions: [
      'Refogue todos os legumes por 5 min',
      'Adicione caldo, cozinhe até amolecer',
      'Bata no liquidificador com leite de coco',
      'Tempere com cúrcuma, gengibre, sal'
    ],
    benefits: 'Rica em antioxidantes e compostos anti-inflamatórios para recuperação muscular e articular.',
    scientificBenefits: [
      'Batata-doce: carboidrato complexo, energia gradual',
      'Abóbora: betacaroteno antioxidante',
      'Cúrcuma: curcumina reduz dor em 58%',
      'Gengibre: melhora circulação'
    ],
    contraindications: [
      'Pessoas com refluxo intenso (reduzir gengibre)',
      'Alergia a leite de coco'
    ],
    adaptations: {
      'Diabetes': 'Reduzir batata-doce pela metade',
      'Pressão alta': 'Não adicionar sal',
      'Refluxo': 'Omitir gengibre e pimenta'
    },
    specialTip: 'Ideal para jantar: promove sono reparador e regeneração muscular. Consumir 2 horas antes de dormir.'
  },
  {
    id: 5,
    name: 'Água Sassy Detox Articulações',
    time: '5 min + 2h',
    prepTime: 5,
    servings: 4,
    difficulty: 'Fácil',
    category: 'Bebida',
    image: 'https://images.unsplash.com/photo-1571950006418-f226dc106482?q=80&w=1000',
    ingredients: [
      '1 litro água filtrada',
      '1 limão em fatias',
      '10 folhas hortelã',
      '1 pepino em fatias',
      '1 col. chá gengibre laminado',
      'Sal rosa (pitada)'
    ],
    instructions: [
      'Misture todos os ingredientes',
      'Deixe na geladeira por 2 horas',
      'Beba ao longo do dia'
    ],
    benefits: 'Bebida desintoxicante e hidratante que ajuda a reduzir inflamação e eliminar toxinas.',
    scientificBenefits: [
      'Limão: vitamina C para colágeno',
      'Pepino: hidratação + silício para articulações',
      'Hortelã: efeito calmante e digestivo',
      'Gengibre: anti-inflamatório potente'
    ],
    contraindications: [
      'Pessoas com gastrite (reduzir limão)',
      'Refluxo severo (evitar hortelã)'
    ],
    adaptations: {
      'Diabetes': 'Sem problemas, baixo índice glicêmico',
      'Hipertensão': 'Omitir o sal rosa',
      'Gastrite': 'Reduzir quantidade de limão e gengibre'
    },
    specialTip: 'Beba um copo em jejum para estimular o metabolismo e melhorar a digestão. O restante ao longo do dia.'
  }
];

export const recipeCategories = [
  {
    id: 'cafe-manha',
    name: 'Café da Manhã',
    description: 'Receitas anti-inflamatórias para começar o dia com energia e sem dores.',
    icon: '🌅'
  },
  {
    id: 'almoco',
    name: 'Almoço',
    description: 'Opções nutritivas e leves que não causam sono à tarde.',
    icon: '🥗'
  },
  {
    id: 'jantar',
    name: 'Jantar',
    description: 'Refeições que ajudam na recuperação noturna e no sono reparador.',
    icon: '🍲'
  },
  {
    id: 'bebida',
    name: 'Bebidas',
    description: 'Sucos e águas com propriedades terapêuticas para hidratar e desintoxicar.',
    icon: '🥤'
  }
];

export default recipes; 