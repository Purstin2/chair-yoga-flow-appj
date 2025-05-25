import { Recipe } from '@/types';
import { recipeCategories } from './recipeCategories';

export const recipes: Recipe[] = [
  // ANTI-ESTRESSE
  {
    id: 1,
    name: 'Smoothie Calmante de Banana e Espinafre',
    time: '5 min',
    prepTime: 5,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Anti-Estresse',
    image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=1000',
    ingredients: [
      '1 banana madura',
      '1 xícara de espinafre fresco',
      '1 colher de sopa de sementes de chia',
      '1 colher de chá de mel (opcional)',
      '200ml de leite de amêndoas',
      '1/4 abacate pequeno',
      'Gelo a gosto'
    ],
    instructions: [
      'Lave bem o espinafre',
      'Coloque todos os ingredientes no liquidificador',
      'Bata até obter uma mistura homogênea',
      'Sirva imediatamente'
    ],
    benefits: 'Rico em magnésio e triptofano que ajudam a reduzir o estresse e promover sensação de calma e bem-estar.',
    scientificBenefits: [
      'Banana: fonte de triptofano que o corpo converte em serotonina, hormônio relacionado ao bem-estar',
      'Espinafre: rico em magnésio, mineral relacionado ao relaxamento muscular e redução do estresse',
      'Sementes de chia: contêm ômega-3 que ajuda a diminuir a inflamação e o estresse oxidativo',
      'Abacate: fonte de gorduras saudáveis que ajudam a estabilizar o humor'
    ],
    contraindications: [
      'Pessoas com alergia a algum dos ingredientes',
      'Diabéticos devem consultar médico sobre o uso de mel'
    ],
    adaptations: {
      'Diabetes': 'Não adicionar mel ou utilizar adoçante natural sem calorias',
      'Intolerância à lactose': 'Já utiliza leite vegetal, sem necessidade de adaptação',
      'Pressão alta': 'Reduzir ou eliminar o mel'
    },
    specialTip: 'Consuma este smoothie pela manhã para iniciar o dia com calma ou antes de situações estressantes para ajudar a manter a tranquilidade.'
  },
  
  {
    id: 2,
    name: 'Chá Golden Milk Anti-Ansiedade',
    time: '10 min',
    prepTime: 10,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Anti-Estresse',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000',
    ingredients: [
      '1 xícara de leite vegetal (amêndoas, coco ou aveia)',
      '1 colher de chá de cúrcuma em pó',
      '1/2 colher de chá de canela em pó',
      '1/4 colher de chá de gengibre em pó',
      '1 pitada de pimenta-do-reino (aumenta absorção da curcumina)',
      '1 colher de chá de mel ou xarope de bordo (opcional)',
      '1/2 colher de chá de extrato de baunilha (opcional)'
    ],
    instructions: [
      'Aqueça o leite vegetal em uma panela pequena em fogo médio (não deixe ferver)',
      'Adicione a cúrcuma, canela, gengibre e pimenta-do-reino',
      'Mexa constantemente por 3-5 minutos até todos os ingredientes estarem bem incorporados',
      'Retire do fogo, adicione o mel e a baunilha se desejar',
      'Coe a mistura se preferir uma textura mais lisa',
      'Sirva quente'
    ],
    benefits: 'A combinação de cúrcuma e especiarias possui propriedades anti-inflamatórias e antioxidantes que ajudam a reduzir o estresse e a ansiedade.',
    scientificBenefits: [
      'Cúrcuma: contém curcumina, composto com efeitos ansiolíticos comprovados em estudos',
      'Canela: ajuda a estabilizar o açúcar no sangue, evitando picos que podem desencadear ansiedade',
      'Gengibre: possui gingeróis que reduzem inflamação associada ao estresse crônico',
      'Leite vegetal: fornece triptofano que favorece a produção de serotonina'
    ],
    contraindications: [
      'Pessoas com problemas de coagulação sanguínea devem evitar cúrcuma em grandes quantidades',
      'Indivíduos com cálculos biliares devem consultar médico antes de consumir cúrcuma regularmente'
    ],
    adaptations: {
      'Diabetes': 'Omitir o adoçante ou usar estévia',
      'Alergia a nozes': 'Utilizar leite de coco ou aveia em vez de amêndoas',
      'Sensibilidade ao gengibre': 'Reduzir a quantidade de gengibre pela metade'
    },
    specialTip: 'Beba este chá 30 minutos antes de dormir para ajudar a relaxar e preparar o corpo para um sono reparador.'
  },
  
  // PERDA DE PESO
  {
    id: 3,
    name: 'Salada Proteica de Quinoa',
    time: '25 min',
    prepTime: 25,
    servings: 2,
    difficulty: 'Médio',
    category: 'Perda de Peso',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1000',
    ingredients: [
      '1 xícara de quinoa',
      '2 xícaras de água',
      '1 pepino médio picado',
      '1 tomate médio picado',
      '1/4 de cebola roxa picada',
      '1/2 xícara de grão-de-bico cozido',
      '1/4 xícara de salsinha picada',
      '1/4 xícara de hortelã picada',
      '1 limão (suco)',
      '2 colheres de sopa de azeite de oliva extra-virgem',
      'Sal e pimenta a gosto'
    ],
    instructions: [
      'Lave bem a quinoa em água corrente',
      'Cozinhe a quinoa nas 2 xícaras de água por cerca de 15 minutos ou até que a água seja absorvida',
      'Deixe a quinoa esfriar completamente',
      'Em uma tigela grande, misture a quinoa cozida com o pepino, tomate, cebola, grão-de-bico, salsinha e hortelã',
      'Em um potinho separado, misture o suco de limão, azeite, sal e pimenta para fazer o molho',
      'Regue a salada com o molho e misture bem antes de servir'
    ],
    benefits: 'Rica em proteínas e fibras, esta salada promove saciedade prolongada, controle do apetite e ajuda na perda de peso saudável.',
    scientificBenefits: [
      'Quinoa: proteína completa que contém todos os aminoácidos essenciais, promovendo saciedade e preservação muscular',
      'Grão-de-bico: as fibras solúveis e insolúveis ajudam a controlar o apetite e a glicemia',
      'Azeite: gorduras saudáveis que ajudam na absorção de nutrientes e promovem saciedade',
      'Fibras vegetais: aumentam o volume do alimento sem adicionar calorias, favorecendo a saciedade'
    ],
    contraindications: [
      'Pessoas com sensibilidade ao glúten devem verificar contaminação cruzada na quinoa',
      'Indivíduos com síndrome do intestino irritável podem ter dificuldade para digerir grão-de-bico'
    ],
    adaptations: {
      'Intolerância ao FODMAP': 'Substituir o grão-de-bico por ovo cozido picado e reduzir a quantidade de cebola',
      'Hipertensão': 'Preparar sem adicionar sal, utilizando ervas aromáticas',
      'Refluxo': 'Reduzir a quantidade de cebola e limão'
    },
    specialTip: 'Prepare uma quantidade maior e armazene porções individuais para refeições rápidas durante a semana.'
  },
  
  {
    id: 4,
    name: 'Wraps de Alface com Frango e Abacate',
    time: '20 min',
    prepTime: 20,
    servings: 2,
    difficulty: 'Fácil',
    category: 'Perda de Peso',
    image: 'https://images.unsplash.com/photo-1621634892819-26b35f56d5bf?q=80&w=1000',
    ingredients: [
      '8 folhas grandes de alface romana ou americana',
      '300g de peito de frango cozido e desfiado',
      '1 abacate médio, em fatias',
      '1 cenoura média ralada',
      '1 pepino pequeno em tiras finas',
      '1/4 xícara de coentro picado',
      '1 colher de sopa de azeite de oliva',
      '1 colher de sopa de suco de limão',
      '1 dente de alho picado',
      'Sal e pimenta a gosto'
    ],
    instructions: [
      'Tempere o frango desfiado com alho, azeite, suco de limão, sal e pimenta',
      'Lave e seque bem as folhas de alface',
      'Coloque uma porção de frango temperado no centro de cada folha de alface',
      'Adicione algumas fatias de abacate, cenoura ralada e tiras de pepino',
      'Finalize com coentro picado',
      'Dobre as folhas como um wrap e sirva imediatamente'
    ],
    benefits: 'Este prato low-carb é rico em proteínas e gorduras saudáveis, mantendo o controle glicêmico e promovendo saciedade prolongada.',
    scientificBenefits: [
      'Frango: proteína magra que ajuda a preservar a massa muscular durante a perda de peso',
      'Abacate: gorduras monoinsaturadas que aumentam a saciedade e melhoram o perfil lipídico',
      'Vegetais: fibras e água que aumentam o volume da refeição sem adicionar muitas calorias',
      'Alface: baixíssimo teor calórico e alto teor de água, contribuindo para hidratação e saciedade'
    ],
    contraindications: [
      'Pessoas com alergia a abacate',
      'Indivíduos com dificuldade para digerir alimentos crus'
    ],
    adaptations: {
      'Vegetarianos': 'Substituir o frango por tofu firme temperado ou grão-de-bico amassado',
      'Intolerância ao abacate': 'Usar homus como substituto para gordura saudável',
      'Gastrite': 'Evitar o uso de alho e limão, substituindo por ervas suaves'
    },
    specialTip: 'Mantenha os ingredientes separados e monte os wraps apenas na hora de consumir para evitar que as folhas de alface murchem.'
  },
  
  // GANHO DE PESO
  {
    id: 5,
    name: 'Smoothie Hipercalórico de Banana e Pasta de Amendoim',
    time: '5 min',
    prepTime: 5,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Ganho de Peso',
    image: 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?q=80&w=1000',
    ingredients: [
      '1 banana madura congelada',
      '2 colheres de sopa de pasta de amendoim natural',
      '1 colher de sopa de mel',
      '1 colher de sopa de aveia em flocos',
      '1 colher de sopa de sementes de chia',
      '1 scoop de proteína em pó de baunilha (opcional)',
      '200ml de leite integral ou leite de amêndoas',
      '3 cubos de gelo'
    ],
    instructions: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até obter uma mistura homogênea e cremosa',
      'Se necessário, ajuste a consistência adicionando mais leite',
      'Sirva imediatamente'
    ],
    benefits: 'Rico em calorias, proteínas e gorduras saudáveis, este smoothie ajuda a aumentar a ingestão calórica para ganho de peso e massa muscular.',
    scientificBenefits: [
      'Banana: fonte de carboidratos de absorção rápida e moderada, ideal para energia',
      'Pasta de amendoim: rica em gorduras saudáveis e proteínas que favorecem o ganho de peso',
      'Aveia e chia: fibras que ajudam a aumentar o valor calórico sem sobrecarregar a digestão',
      'Proteína em pó: suplemento que auxilia na síntese proteica e ganho de massa muscular'
    ],
    contraindications: [
      'Pessoas com alergia a amendoim',
      'Indivíduos com intolerância à lactose (se usar leite de vaca)',
      'Diabéticos devem consultar médico sobre o uso de mel'
    ],
    adaptations: {
      'Intolerância à lactose': 'Utilizar leite vegetal enriquecido com cálcio',
      'Alergia a amendoim': 'Substituir por pasta de amêndoas ou pasta de girassol',
      'Diabetes': 'Omitir o mel e utilizar banana menos madura'
    },
    specialTip: 'Consuma este smoothie entre as refeições principais ou antes de dormir para aumentar a ingestão calórica diária.'
  },
  
  {
    id: 6,
    name: 'Bowl de Aveia Overnight com Frutas Secas',
    time: '10 min + 8h',
    prepTime: 10,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Ganho de Peso',
    image: 'https://images.unsplash.com/photo-1622542086073-28c6c0645072?q=80&w=1000',
    ingredients: [
      '1/2 xícara de aveia em flocos',
      '1/2 xícara de iogurte grego integral',
      '1/2 xícara de leite integral',
      '2 colheres de sopa de mel',
      '1 colher de sopa de sementes de chia',
      '2 colheres de sopa de mix de frutas secas picadas (damasco, ameixa, uva passa)',
      '2 colheres de sopa de mix de castanhas picadas (nozes, amêndoas, castanha do Pará)',
      '1/2 colher de chá de canela em pó',
      '1 colher de sopa de óleo de coco (opcional)'
    ],
    instructions: [
      'Em um pote com tampa, misture a aveia, iogurte, leite, mel, chia e canela',
      'Adicione o óleo de coco e misture bem',
      'Acrescente as frutas secas e castanhas, reserve algumas para decoração',
      'Tampe o pote e deixe na geladeira por pelo menos 8 horas ou durante a noite',
      'Na hora de servir, decore com as frutas secas e castanhas reservadas'
    ],
    benefits: 'Este bowl é rico em calorias, fibras, proteínas e gorduras saudáveis, ideal para aumentar o peso de forma nutritiva e saudável.',
    scientificBenefits: [
      'Aveia: carboidrato complexo que fornece energia sustentada',
      'Iogurte grego: alto teor de proteínas e gorduras para ganho de massa muscular',
      'Frutas secas: concentrado de calorias e micronutrientes em pequeno volume',
      'Castanhas: fontes de gorduras saudáveis e proteínas vegetais'
    ],
    contraindications: [
      'Pessoas com alergia a nozes ou amêndoas',
      'Indivíduos com intolerância à lactose (devido ao iogurte e leite)'
    ],
    adaptations: {
      'Intolerância à lactose': 'Usar iogurte e leite vegetal',
      'Alergia a nozes': 'Substituir por sementes de girassol e abóbora',
      'Diabetes': 'Reduzir a quantidade de mel e frutas secas'
    },
    specialTip: 'Prepare múltiplas porções para ter um café da manhã rápido e nutritivo durante toda a semana.'
  },
  
  // SONO MELHOR
  {
    id: 7,
    name: 'Chá de Camomila com Lavanda e Mel',
    time: '10 min',
    prepTime: 10,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Sono Melhor',
    image: 'https://images.unsplash.com/photo-1542809608-5fca4426cacf?q=80&w=1000',
    ingredients: [
      '1 colher de sopa de flores de camomila secas',
      '1/2 colher de chá de flores de lavanda culinárias',
      '1 colher de chá de mel',
      '1 rodela de limão (opcional)',
      '1 xícara de água quente'
    ],
    instructions: [
      'Ferva a água e deixe esfriar por 1 minuto (a água não deve estar fervendo)',
      'Coloque as flores de camomila e lavanda em um infusor ou diretamente na xícara',
      'Despeje a água quente sobre as ervas',
      'Cubra e deixe em infusão por 5 minutos',
      'Coe o chá e adicione mel a gosto',
      'Adicione a rodela de limão se desejar'
    ],
    benefits: 'A camomila e lavanda contêm compostos que ajudam a acalmar o sistema nervoso, reduzir a ansiedade e melhorar a qualidade do sono.',
    scientificBenefits: [
      'Camomila: contém apigenina, flavonoide que se liga aos receptores de benzodiazepínicos no cérebro, induzindo efeito calmante',
      'Lavanda: estudos mostram que seu aroma tem efeito ansiolítico e melhora a qualidade do sono',
      'Mel: libera pequenas quantidades de serotonina, que o corpo converte em melatonina, hormônio do sono',
      'Ritual relaxante: o próprio ato de preparar e consumir um chá quente antes de dormir sinaliza ao corpo para relaxar'
    ],
    contraindications: [
      'Pessoas alérgicas a plantas da família Asteraceae (que inclui a camomila)',
      'Grávidas e lactantes devem consultar médico antes de consumir lavanda regularmente'
    ],
    adaptations: {
      'Diabetes': 'Omitir o mel ou usar adoçante natural sem calorias',
      'Alergia a camomila': 'Substituir por folhas de melissa (erva-cidreira)',
      'Sensibilidade a aromas fortes': 'Reduzir a quantidade de lavanda'
    },
    specialTip: 'Beba este chá 30-60 minutos antes de dormir como parte de uma rotina relaxante noturna.'
  },
  
  {
    id: 8,
    name: 'Banana com Canela e Nozes',
    time: '5 min',
    prepTime: 5,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Sono Melhor',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1000',
    ingredients: [
      '1 banana madura',
      '1 colher de chá de canela em pó',
      '1 colher de sopa de nozes picadas',
      '1 colher de chá de mel (opcional)'
    ],
    instructions: [
      'Corte a banana em rodelas',
      'Coloque em uma tigela pequena',
      'Polvilhe canela por cima',
      'Adicione as nozes picadas',
      'Regue com mel se desejar'
    ],
    benefits: 'A combinação de banana, canela e nozes fornece triptofano, magnésio e melatonina natural, que favorecem um sono tranquilo e reparador.',
    scientificBenefits: [
      'Banana: rica em triptofano, precursor da serotonina e melatonina, além de magnésio e potássio que relaxam os músculos',
      'Canela: ajuda a estabilizar o açúcar no sangue durante a noite, evitando despertares',
      'Nozes: fonte natural de melatonina, o hormônio do sono',
      'Combinação de carboidratos (banana) e proteínas (nozes): facilita a entrada de triptofano no cérebro'
    ],
    contraindications: [
      'Pessoas com alergia a nozes',
      'Indivíduos com sensibilidade a açúcares antes de dormir'
    ],
    adaptations: {
      'Alergia a nozes': 'Substituir por sementes de abóbora',
      'Diabetes': 'Reduzir a quantidade de banana e não adicionar mel',
      'Problemas digestivos noturnos': 'Consumir pelo menos 2 horas antes de dormir'
    },
    specialTip: 'Consuma este lanche 1 hora antes de dormir para dar tempo ao corpo de metabolizar os nutrientes que favorecem o sono.'
  },
  
  // PELE SAUDÁVEL
  {
    id: 9,
    name: 'Smoothie Verde para Pele Radiante',
    time: '10 min',
    prepTime: 10,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Pele Saudável',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=1000',
    ingredients: [
      '1 xícara de espinafre fresco',
      '1/2 pepino médio',
      '1/2 abacate pequeno',
      '1/2 maçã verde',
      'Suco de 1/2 limão',
      '1 colher de sopa de sementes de abóbora',
      '1 colher de chá de spirulina em pó (opcional)',
      '1 colher de chá de mel (opcional)',
      '1/2 xícara de água de coco ou água filtrada',
      'Cubos de gelo a gosto'
    ],
    instructions: [
      'Lave bem todos os vegetais e frutas',
      'Corte o pepino, abacate e maçã em pedaços',
      'Coloque todos os ingredientes no liquidificador',
      'Bata até obter uma mistura homogênea',
      'Ajuste a consistência adicionando mais água se necessário',
      'Sirva imediatamente'
    ],
    benefits: 'Rico em antioxidantes, vitaminas A, C, E e ácidos graxos essenciais que combatem os radicais livres e promovem a renovação celular da pele.',
    scientificBenefits: [
      'Espinafre: rico em vitaminas A e C, que estimulam a produção de colágeno',
      'Abacate: fonte de vitamina E e ácidos graxos que mantêm a hidratação da pele',
      'Pepino: alto teor de água e silício que fortalecem o tecido conjuntivo',
      'Spirulina: contém clorofila que auxilia na desintoxicação e reduz inflamação cutânea'
    ],
    contraindications: [
      'Pessoas com hipotireoidismo não tratado devem consumir espinafre com moderação',
      'Indivíduos com alergia a algas devem evitar a spirulina'
    ],
    adaptations: {
      'Diabetes': 'Omitir o mel e usar apenas metade da maçã',
      'Intolerância a abacate': 'Substituir por 1 colher de sopa de azeite de oliva extra-virgem',
      'Alergia a sementes': 'Omitir as sementes de abóbora'
    },
    specialTip: 'Para melhores resultados, consuma este smoothie regularmente por pelo menos 3 semanas para notar melhorias na aparência da pele.'
  },
  
  {
    id: 10,
    name: 'Salada de Salmão com Vegetais Coloridos',
    time: '15 min',
    prepTime: 15,
    servings: 1,
    difficulty: 'Médio',
    category: 'Pele Saudável',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000',
    ingredients: [
      '150g de salmão grelhado ou defumado',
      '2 xícaras de mix de folhas verdes (rúcula, espinafre, alface)',
      '1/2 xícara de cenoura ralada',
      '1/2 pepino em fatias finas',
      '1/4 de abacate em fatias',
      '1/4 xícara de tomate cereja cortados ao meio',
      '1 colher de sopa de sementes de abóbora',
      '1 colher de sopa de azeite de oliva extra-virgem',
      '1 colher de sopa de suco de limão',
      'Sal e pimenta a gosto'
    ],
    instructions: [
      'Lave e seque bem as folhas verdes e disponha-as em um prato',
      'Adicione a cenoura ralada, pepino, abacate e tomate cereja',
      'Coloque o salmão por cima dos vegetais',
      'Polvilhe as sementes de abóbora',
      'Em um recipiente pequeno, misture o azeite, suco de limão, sal e pimenta',
      'Regue a salada com o molho antes de servir'
    ],
    benefits: 'Rica em ômega-3, antioxidantes, vitaminas e minerais que nutrem a pele, reduzem a inflamação e protegem contra os danos dos raios UV.',
    scientificBenefits: [
      'Salmão: rico em ômega-3 que fortalece a barreira cutânea e reduz a inflamação da pele',
      'Vegetais coloridos: fornecem vitaminas A, C e E que combatem os radicais livres e estimulam a produção de colágeno',
      'Abacate: contém gorduras saudáveis que hidratam a pele de dentro para fora',
      'Azeite: rico em antioxidantes que protegem a pele contra danos ambientais'
    ],
    contraindications: [
      'Pessoas com alergia a peixes ou frutos do mar',
      'Grávidas devem assegurar que o salmão esteja bem cozido'
    ],
    adaptations: {
      'Vegetarianos/Veganos': 'Substituir salmão por tofu firme marinado em molho de soja e algas',
      'Intolerância a abacate': 'Substituir por azeitonas',
      'Hipotireoidismo': 'Consumir com moderação devido ao teor de iodo do salmão'
    },
    specialTip: 'Para maximizar os benefícios para a pele, consuma esta salada 2-3 vezes por semana.'
  },
  
  // IMUNIDADE
  {
    id: 11,
    name: 'Sopa de Cúrcuma e Gengibre',
    time: '30 min',
    prepTime: 30,
    servings: 4,
    difficulty: 'Médio',
    category: 'Imunidade',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000',
    ingredients: [
      '1 cebola picada',
      '2 dentes de alho picados',
      '1 colher de sopa de gengibre fresco ralado',
      '1 colher de sopa de cúrcuma em pó',
      '1 cenoura média cortada em cubos',
      '1 batata-doce média cortada em cubos',
      '1 xícara de lentilhas vermelhas lavadas',
      '1 litro de caldo de legumes',
      '400ml de leite de coco',
      'Sal e pimenta a gosto',
      '1 colher de chá de cominho em pó',
      '1 limão (suco)',
      'Coentro fresco picado para finalizar'
    ],
    instructions: [
      'Em uma panela grande, refogue a cebola e o alho até ficarem transparentes',
      'Adicione o gengibre e a cúrcuma, refogue por mais 1 minuto',
      'Acrescente a cenoura e batata-doce, refogue por 2-3 minutos',
      'Adicione as lentilhas e o caldo de legumes',
      'Cozinhe em fogo médio por cerca de 20 minutos ou até os legumes e lentilhas estarem macios',
      'Adicione o leite de coco e o cominho, aqueça sem ferver',
      'Tempere com sal, pimenta e suco de limão',
      'Sirva quente com coentro picado por cima'
    ],
    benefits: 'Esta sopa combina poderosos anti-inflamatórios e antioxidantes que fortalecem o sistema imunológico e combatem infecções.',
    scientificBenefits: [
      'Cúrcuma: a curcumina tem ação antimicrobiana e estimula células do sistema imune',
      'Gengibre: gingeróis e shogaóis têm propriedades antivirais e antibacterianas',
      'Lentilhas: fonte de zinco e ferro, minerais essenciais para o funcionamento adequado do sistema imunológico',
      'Leite de coco: contém ácido láurico com propriedades antimicrobianas'
    ],
    contraindications: [
      'Pessoas com cálculos biliares devem consultar médico antes de consumir cúrcuma regularmente',
      'Indivíduos em uso de anticoagulantes devem limitar o consumo de gengibre'
    ],
    adaptations: {
      'Diabetes': 'Reduzir a quantidade de batata-doce',
      'Intolerância a FODMAP': 'Omitir cebola e alho, usar óleo infusionado com alho',
      'Alergia a coco': 'Substituir leite de coco por creme de amêndoas ou castanha de caju'
    },
    specialTip: 'Prepare esta sopa ao primeiro sinal de gripe ou resfriado, ou preventivamente durante a temporada de doenças respiratórias.'
  },
  
  // ENERGIA
  {
    id: 12,
    name: 'Bowl de Açaí Energizante',
    time: '10 min',
    prepTime: 10,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Energia',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1000',
    ingredients: [
      '200g de polpa de açaí congelada',
      '1 banana madura',
      '1 colher de sopa de guaraná em pó',
      '1 colher de sopa de manteiga de amêndoas',
      '1 colher de sopa de sementes de chia',
      '1/2 xícara de leite vegetal',
      'Para decorar: granola, banana fatiada, morangos, mel'
    ],
    instructions: [
      'No liquidificador, bata a polpa de açaí, banana, guaraná em pó, manteiga de amêndoas, chia e leite vegetal',
      'A mistura deve ficar cremosa mas firme. Se necessário, adicione mais leite',
      'Transfira para uma tigela',
      'Decore com granola, frutas frescas e um fio de mel'
    ],
    benefits: 'Rico em antioxidantes, cafeína natural e carboidratos complexos que proporcionam energia sustentada por horas sem picos de açúcar no sangue.',
    scientificBenefits: [
      'Açaí: rico em antocianinas que combatem o estresse oxidativo e melhoram a circulação',
      'Guaraná: fonte natural de cafeína que aumenta o estado de alerta e concentração',
      'Sementes de chia: fornecem ômega-3 que favorece a função cerebral',
      'Granola: carboidratos complexos que liberam energia gradualmente'
    ],
    contraindications: [
      'Pessoas sensíveis à cafeína devem reduzir ou omitir o guaraná',
      'Indivíduos com alergia a nozes (devido à manteiga de amêndoas)'
    ],
    adaptations: {
      'Diabetes': 'Omitir o mel e usar menos banana',
      'Alergia a nozes': 'Substituir manteiga de amêndoas por pasta de girassol',
      'Sensibilidade à cafeína': 'Reduzir ou omitir o guaraná em pó'
    },
    specialTip: 'Consuma este bowl antes de atividades físicas ou mentais que exigem foco e energia prolongada.'
  },
  
  // DIGESTÃO
  {
    id: 13,
    name: 'Chá de Ervas Digestivas',
    time: '8 min',
    prepTime: 8,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Digestão',
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=1000',
    ingredients: [
      '1 colher de chá de sementes de erva-doce',
      '1 colher de chá de folhas secas de hortelã',
      '1/2 colher de chá de gengibre fresco ralado',
      '1/4 colher de chá de sementes de cardamomo (opcional)',
      '1 rodela de limão',
      '1 xícara de água filtrada'
    ],
    instructions: [
      'Ferva a água em uma chaleira',
      'Em uma xícara, coloque as sementes de erva-doce, hortelã, gengibre e cardamomo',
      'Despeje a água quente sobre as ervas',
      'Cubra e deixe em infusão por 5-7 minutos',
      'Coe e adicione a rodela de limão antes de servir'
    ],
    benefits: 'Esta infusão de ervas combate gases, inchaço e desconforto digestivo, além de estimular a produção de enzimas digestivas.',
    scientificBenefits: [
      'Erva-doce: contém anetol que reduz espasmos intestinais e gases',
      'Hortelã: o mentol relaxa os músculos do trato digestivo e alivia a síndrome do intestino irritável',
      'Gengibre: estimula a produção de saliva e sucos gástricos, melhorando a digestão',
      'Cardamomo: carminativo que ajuda a expelir gases e alivia a má digestão'
    ],
    contraindications: [
      'Pessoas com refluxo gastroesofágico devem evitar hortelã',
      'Indivíduos com cálculos biliares devem consultar médico antes de consumir gengibre regularmente'
    ],
    adaptations: {
      'Refluxo': 'Omitir a hortelã e usar erva-cidreira em seu lugar',
      'Gastrite': 'Reduzir a quantidade de gengibre',
      'Alergia a algum componente': 'Usar apenas as ervas toleradas'
    },
    specialTip: 'Beba este chá 15-20 minutos após as refeições para ajudar na digestão e prevenir desconfortos abdominais.'
  },
  
  // FOCO E CONCENTRAÇÃO
  {
    id: 14,
    name: 'Smoothie de Mirtilo e Nozes para Concentração',
    time: '5 min',
    prepTime: 5,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Foco e Concentração',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=1000',
    ingredients: [
      '1 xícara de mirtilos frescos ou congelados',
      '1/4 de abacate',
      '1 colher de sopa de nozes cruas',
      '1 colher de sopa de sementes de linhaça moída',
      '1 colher de chá de cacau em pó sem açúcar',
      '1 xícara de leite vegetal (amêndoas ou castanha do Pará)',
      '1/2 colher de chá de canela',
      'Gelo a gosto'
    ],
    instructions: [
      'Coloque todos os ingredientes no liquidificador',
      'Bata até obter uma mistura homogênea',
      'Se estiver muito espesso, adicione um pouco mais de leite ou água',
      'Sirva imediatamente'
    ],
    benefits: 'Rico em antioxidantes, ácidos graxos ômega-3 e flavonoides que melhoram a circulação cerebral, a memória e a concentração.',
    scientificBenefits: [
      'Mirtilos: as antocianinas melhoram o fluxo sanguíneo para o cérebro e protegem os neurônios contra danos oxidativos',
      'Nozes: ricas em ômega-3 DHA, essencial para a função cerebral',
      'Linhaça: contém ácido alfa-linolênico que reduz a inflamação no cérebro',
      'Cacau: os flavanóis aumentam o fluxo sanguíneo cerebral e a produção de neurotransmissores'
    ],
    contraindications: [
      'Pessoas com alergia a nozes',
      'Indivíduos sensíveis à teobromina (encontrada no cacau)'
    ],
    adaptations: {
      'Alergia a nozes': 'Substituir por sementes de girassol e usar leite de coco',
      'Diabetes': 'Usar mirtilos frescos e reduzir a quantidade',
      'Intolerância à lactose': 'Já utiliza leite vegetal, sem necessidade de adaptação'
    },
    specialTip: 'Consuma este smoothie antes de atividades que exigem alta concentração como estudos, trabalho criativo ou reuniões importantes.'
  },
  
  // COLESTEROL
  {
    id: 15,
    name: 'Aveia com Maçã e Canela para Colesterol',
    time: '10 min',
    prepTime: 10,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Colesterol',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=1000',
    ingredients: [
      '1/2 xícara de aveia em flocos',
      '1 xícara de leite vegetal (aveia, amêndoas ou soja)',
      '1 maçã média ralada com casca',
      '1 colher de chá de canela em pó',
      '1 colher de sopa de sementes de linhaça moída',
      '1 colher de sopa de sementes de chia',
      '1/2 colher de chá de extrato de baunilha',
      '1 colher de chá de mel (opcional)'
    ],
    instructions: [
      'Em uma panela pequena, misture a aveia e o leite vegetal',
      'Leve ao fogo médio, mexendo ocasionalmente',
      'Quando começar a ferver, reduza o fogo e cozinhe por 3-5 minutos até engrossar',
      'Adicione a maçã ralada, canela, linhaça, chia e baunilha',
      'Misture bem e cozinhe por mais 1-2 minutos',
      'Sirva quente, adoçando com mel se desejar'
    ],
    benefits: 'Rica em fibras solúveis e compostos que reduzem ativamente a absorção do colesterol LDL e promovem a saúde cardiovascular.',
    scientificBenefits: [
      'Aveia: o betaglucano, fibra solúvel, forma um gel que se liga ao colesterol no intestino e impede sua absorção',
      'Maçã: contém pectina que também se liga ao colesterol e favorece sua eliminação',
      'Canela: melhora a sensibilidade à insulina e ajuda a regular os níveis de açúcar no sangue',
      'Linhaça: rica em lignanas e ômega-3 que reduzem o colesterol LDL e a inflamação'
    ],
    contraindications: [
      'Pessoas celíacas devem usar aveia certificada sem glúten',
      'Indivíduos com alergia a maçã (síndrome da alergia oral)'
    ],
    adaptations: {
      'Diabetes': 'Omitir o mel e usar maçã verde que tem menor índice glicêmico',
      'Doença celíaca': 'Usar aveia certificada sem glúten',
      'Alergia a sementes': 'Substituir linhaça e chia por nozes picadas'
    },
    specialTip: 'Para melhores resultados na redução do colesterol, consuma diariamente por pelo menos 6 semanas como parte de uma dieta equilibrada.'
  },
  
  // PRESSÃO ARTERIAL
  {
    id: 16,
    name: 'Smoothie de Beterraba e Berries para Pressão Arterial',
    time: '10 min',
    prepTime: 10,
    servings: 2,
    difficulty: 'Fácil',
    category: 'Pressão Arterial',
    image: 'https://images.unsplash.com/photo-1557701430-2eb73fdd2786?q=80&w=1000',
    ingredients: [
      '1 beterraba pequena cozida ou crua, descascada e cortada em pedaços',
      '1 xícara de frutas vermelhas mistas (morango, framboesa, amora)',
      '1 banana pequena',
      '1 colher de sopa de sementes de linhaça moída',
      '1 colher de chá de cacau em pó sem açúcar',
      '1 xícara de leite vegetal',
      '1/2 colher de chá de canela',
      'Gelo a gosto'
    ],
    instructions: [
      'Coloque todos os ingredientes no liquidificador',
      'Bata até obter uma mistura homogênea',
      'Se estiver muito espesso, adicione mais leite vegetal',
      'Sirva imediatamente'
    ],
    benefits: 'Rico em nitratos, antioxidantes e potássio que ajudam a relaxar os vasos sanguíneos e reduzir naturalmente a pressão arterial.',
    scientificBenefits: [
      'Beterraba: contém nitratos que o corpo converte em óxido nítrico, substância que dilata os vasos sanguíneos',
      'Frutas vermelhas: ricas em antocianinas que protegem os vasos sanguíneos e melhoram sua elasticidade',
      'Linhaça: fonte de ômega-3 que ajuda a reduzir a inflamação e tem efeito hipotensor',
      'Cacau: os flavanóis promovem a produção de óxido nítrico, melhorando a função endotelial'
    ],
    contraindications: [
      'Pessoas com cálculos renais de oxalato devem limitar o consumo de beterraba',
      'Indivíduos com pressão muito baixa devem consultar médico antes de consumir regularmente'
    ],
    adaptations: {
      'Diabetes': 'Reduzir a quantidade de banana ou substituir por maçã verde',
      'Refluxo': 'Omitir o cacau',
      'Alergia a frutas vermelhas': 'Substituir por uvas roxas ou mirtilo'
    },
    specialTip: 'Para maximizar os benefícios na pressão arterial, consuma este smoothie regularmente pela manhã em jejum ou como lanche da tarde.'
  },
  
  // HORMÔNIOS
  {
    id: 17,
    name: 'Sopa de Brócolis e Sementes para Equilíbrio Hormonal',
    time: '25 min',
    prepTime: 25,
    servings: 4,
    difficulty: 'Médio',
    category: 'Hormônios',
    image: 'https://images.unsplash.com/photo-1614961909813-3a5226c28f56?q=80&w=1000',
    ingredients: [
      '2 xícaras de brócolis em floretes',
      '1 abobrinha média picada',
      '1 cenoura média picada',
      '1 cebola pequena picada',
      '2 dentes de alho picados',
      '2 colheres de sopa de azeite de oliva',
      '4 xícaras de caldo de legumes',
      '1/4 xícara de sementes de abóbora',
      '2 colheres de sopa de sementes de linhaça moída',
      '1/2 xícara de leite de coco',
      '1 colher de chá de cúrcuma',
      'Sal marinho e pimenta a gosto',
      'Suco de 1/2 limão',
      'Coentro fresco picado para finalizar'
    ],
    instructions: [
      'Em uma panela grande, aqueça o azeite e refogue a cebola e o alho até ficarem transparentes',
      'Adicione a cenoura e a abobrinha, refogue por 3 minutos',
      'Acrescente o brócolis e refogue por mais 2 minutos',
      'Adicione o caldo de legumes e a cúrcuma, deixe ferver',
      'Reduza o fogo, tampe e cozinhe por 10-15 minutos até os vegetais ficarem macios',
      'Transfira 3/4 da sopa para o liquidificador, adicione o leite de coco e bata até ficar cremosa',
      'Devolva à panela e misture com o restante da sopa para manter textura',
      'Tempere com sal, pimenta e suco de limão',
      'Sirva com sementes de abóbora, linhaça e coentro por cima'
    ],
    benefits: 'Rica em fitoquímicos, antioxidantes e gorduras saudáveis que ajudam a equilibrar os hormônios e reduzir sintomas da TPM e menopausa.',
    scientificBenefits: [
      'Brócolis: contém indol-3-carbinol e sulforafano que ajudam a metabolizar o estrogênio de forma saudável',
      'Sementes de abóbora: ricas em zinco que apoia a produção de progesterona e reduz os sintomas da TPM',
      'Linhaça: os lignanos têm efeito modulador dos estrogênios, ajudando a regular os ciclos menstruais',
      'Cúrcuma: propriedades anti-inflamatórias que reduzem cólicas menstruais e desconforto'
    ],
    contraindications: [
      'Pessoas com hipotireoidismo não tratado devem consumir brócolis com moderação',
      'Indivíduos tomando medicamentos para coagulação sanguínea devem consultar médico antes de aumentar o consumo de vegetais verde-escuros'
    ],
    adaptations: {
      'Intolerância ao FODMAP': 'Reduzir a quantidade de brócolis e cebola',
      'Alergia a coco': 'Substituir leite de coco por creme de castanha de caju',
      'Hipotireoidismo': 'Cozinhar bem o brócolis e não consumir em excesso'
    },
    specialTip: 'Para mulheres, é especialmente benéfico consumir esta sopa durante a semana anterior à menstruação para reduzir sintomas de TPM.'
  },
  
  // ANTI-INFLAMATÓRIA
  {
    id: 18,
    name: 'Salada de Abacate com Cúrcuma Anti-inflamatória',
    time: '15 min',
    prepTime: 15,
    servings: 2,
    difficulty: 'Fácil',
    category: 'Anti-inflamatória',
    image: 'https://images.unsplash.com/photo-1551295465-6c18e908f6d3?q=80&w=1000',
    ingredients: [
      '2 abacates maduros',
      '1 pepino médio cortado em cubos pequenos',
      '1/2 cebola roxa pequena picada finamente',
      '1 pimentão vermelho pequeno picado',
      '1/4 xícara de folhas de hortelã picadas',
      '1/4 xícara de folhas de coentro picadas',
      '1 colher de chá de cúrcuma em pó',
      '1 pitada de pimenta-do-reino preta',
      '2 colheres de sopa de azeite de oliva extra-virgem',
      '1 colher de sopa de vinagre de maçã',
      'Suco de 1 limão',
      'Sal marinho a gosto',
      '2 colheres de sopa de sementes de abóbora torradas'
    ],
    instructions: [
      'Corte os abacates ao meio, retire o caroço e corte a polpa em cubos',
      'Em uma tigela grande, misture com cuidado o abacate, pepino, cebola e pimentão',
      'Adicione as ervas frescas',
      'Em um recipiente separado, prepare o molho misturando azeite, vinagre, suco de limão, cúrcuma, pimenta-do-reino e sal',
      'Regue a salada com o molho e misture delicadamente',
      'Finalize com as sementes de abóbora torradas'
    ],
    benefits: 'Combina alimentos com poderosas propriedades anti-inflamatórias que ajudam a reduzir dores crônicas, inchaço e inflamação celular.',
    scientificBenefits: [
      'Abacate: rico em gorduras monoinsaturadas e carotenoides que reduzem marcadores inflamatórios',
      'Cúrcuma + pimenta preta: a curcumina tem potente efeito anti-inflamatório, e a piperina aumenta sua absorção em até 2000%',
      'Azeite: contém oleocantal, composto com efeito similar ao ibuprofeno',
      'Vinagre de maçã: ajuda a alcalinizar o corpo, reduzindo o ambiente inflamatório'
    ],
    contraindications: [
      'Pessoas com distúrbios de vesícula biliar devem limitar o consumo de abacate',
      'Indivíduos tomando anticoagulantes devem consultar médico antes de aumentar o consumo de cúrcuma'
    ],
    adaptations: {
      'Intolerância ao FODMAP': 'Reduzir quantidade de abacate e cebola, ou omitir cebola',
      'Refluxo': 'Reduzir ou omitir cebola, pimentão e limão',
      'Alergia a abacate': 'Substituir por quinoa cozida'
    },
    specialTip: 'Para potencializar os efeitos anti-inflamatórios, consuma esta salada regularmente junto com uma fonte de proteína magra como frango grelhado ou tofu.'
  },
  
  // DESINTOXICAÇÃO
  {
    id: 19,
    name: 'Água Detox de Pepino, Limão e Gengibre',
    time: '5 min + 2h',
    prepTime: 5,
    servings: 4,
    difficulty: 'Fácil',
    category: 'Desintoxicação',
    image: 'https://images.unsplash.com/photo-1562599938-e6fe02d3a595?q=80&w=1000',
    ingredients: [
      '1 litro de água filtrada',
      '1/2 pepino médio fatiado',
      '1 limão fatiado',
      '1 pedaço de gengibre fresco (3cm) fatiado',
      '10 folhas de hortelã fresca',
      '1/2 colher de chá de cúrcuma em pó (opcional)',
      'Gelo a gosto'
    ],
    instructions: [
      'Lave bem todos os ingredientes',
      'Corte o pepino, limão e gengibre em fatias finas',
      'Em uma jarra grande, coloque todos os ingredientes',
      'Adicione a água filtrada',
      'Deixe infusionar na geladeira por pelo menos 2 horas ou durante a noite',
      'Sirva gelada, com ou sem gelo'
    ],
    benefits: 'Hidratante e desintoxicante, estimula o sistema linfático, apoia as funções hepáticas e renais na eliminação de toxinas do organismo.',
    scientificBenefits: [
      'Pepino: alto teor de água e antioxidantes que ajudam na hidratação e eliminação de toxinas pelos rins',
      'Limão: rico em vitamina C e compostos que estimulam a produção de bile pelo fígado, facilitando a eliminação de toxinas',
      'Gengibre: aumenta a circulação e estimula o sistema linfático, além de ter ação anti-náusea',
      'Hortelã: acalma o sistema digestivo e facilita a digestão, permitindo melhor absorção de nutrientes'
    ],
    contraindications: [
      'Pessoas com gastrite ou úlceras podem ser sensíveis ao limão e gengibre',
      'Indivíduos com refluxo gastroesofágico devem evitar a hortelã'
    ],
    adaptations: {
      'Gastrite': 'Reduzir a quantidade de limão e gengibre',
      'Refluxo': 'Omitir a hortelã e substituir por manjericão',
      'Sensibilidade ao limão': 'Substituir por rodelas de laranja'
    },
    specialTip: 'Beba um copo em jejum e continue consumindo ao longo do dia para manter o corpo hidratado e apoiar a desintoxicação natural.'
  },
  
  // ARTICULAÇÕES
  {
    id: 20,
    name: 'Smoothie de Abacaxi e Cúrcuma para Articulações',
    time: '5 min',
    prepTime: 5,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Articulações',
    image: 'https://images.unsplash.com/photo-1589734575451-8dca0cfd6702?q=80&w=1000',
    ingredients: [
      '1 xícara de abacaxi fresco em pedaços',
      '1/2 banana',
      '1 colher de chá de cúrcuma em pó',
      '1 colher de chá de gengibre fresco ralado',
      '1 colher de sopa de sementes de chia',
      '1 colher de chá de mel (opcional)',
      '1 pitada de pimenta-do-reino preta',
      '1/2 xícara de água de coco',
      'Gelo a gosto'
    ],
    instructions: [
      'Coloque todos os ingredientes no liquidificador',
      'Bata até obter uma mistura homogênea',
      'Se estiver muito espesso, adicione mais água de coco',
      'Sirva imediatamente'
    ],
    benefits: 'Combina alimentos com propriedades anti-inflamatórias e enzimas naturais que ajudam a reduzir a dor articular e a melhorar a mobilidade.',
    scientificBenefits: [
      'Abacaxi: contém bromelina, enzima com potente ação anti-inflamatória que ajuda a reduzir o inchaço e a dor articular',
      'Cúrcuma + pimenta preta: a curcumina tem efeito anti-inflamatório comparável a alguns medicamentos, e a piperina aumenta sua absorção',
      'Gengibre: contém gingeróis que inibem as vias inflamatórias e reduzem a dor',
      'Água de coco: rica em eletrólitos que ajudam na hidratação das articulações'
    ],
    contraindications: [
      'Pessoas com úlceras estomacais devem evitar o abacaxi devido à acidez',
      'Indivíduos tomando anticoagulantes devem consultar médico antes de consumir cúrcuma e gengibre regularmente'
    ],
    adaptations: {
      'Diabetes': 'Omitir o mel e usar menos abacaxi',
      'Refluxo': 'Reduzir a quantidade de gengibre',
      'Alergia ao abacaxi': 'Substituir por manga'
    },
    specialTip: 'Para melhores resultados, consuma este smoothie diariamente por pelo menos 2-3 semanas, preferencialmente em jejum ou entre as refeições.'
  },
  
  // ENERGIA MENTAL
  {
    id: 21,
    name: 'Café Adaptogênico para Foco Mental',
    time: '5 min',
    prepTime: 5,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Foco e Concentração',
    image: 'https://images.unsplash.com/photo-1621304824223-ae404c5a8a03?q=80&w=1000',
    ingredients: [
      '1 xícara de café preparado (pode ser descafeinado)',
      '1 colher de chá de óleo MCT (óleo de coco fracionado)',
      '1/2 colher de chá de canela em pó',
      '1 colher de café de cacau em pó sem açúcar',
      '1 colher de café de maca peruana em pó (opcional)',
      '1 pitada de sal marinho',
      'Adoçante natural a gosto (opcional: stévia, xilitol ou eritritol)'
    ],
    instructions: [
      'Prepare seu café como de costume',
      'Adicione todos os ingredientes no liquidificador',
      'Bata por 15-30 segundos até ficar homogêneo e com uma leve espuma',
      'Sirva imediatamente'
    ],
    benefits: 'Melhora a cognição, o foco mental e a energia sustentada sem os picos e quedas de açúcar no sangue.',
    scientificBenefits: [
      'Óleo MCT: triglicerídeos de cadeia média que são convertidos em cetonas, fonte alternativa de energia para o cérebro',
      'Canela: ajuda a regular o açúcar no sangue, permitindo energia mais estável',
      'Cacau: contém teobromina que melhora o fluxo sanguíneo cerebral e a concentração',
      'Maca: adaptógeno que ajuda o corpo a lidar com o estresse e aumenta a resistência mental'
    ],
    contraindications: [
      'Pessoas com sensibilidade à cafeína (usar versão descafeinada)',
      'Indivíduos com problemas cardíacos devem evitar estimulantes'
    ],
    adaptations: {
      'Sensibilidade à cafeína': 'Usar café descafeinado ou substituir por chá de erva-mate',
      'Intolerância à lactose': 'Já não contém leite',
      'Diabetes': 'Omitir qualquer adoçante ou usar apenas stévia pura'
    },
    specialTip: 'Consuma pela manhã ou no início da tarde quando precisar de foco prolongado. Evite consumir após as 14h se for sensível à cafeína.'
  },
  
  // DIABETES
  {
    id: 22,
    name: 'Curry de Lentilha e Vegetais para Diabetes',
    time: '30 min',
    prepTime: 30,
    servings: 4,
    difficulty: 'Médio',
    category: 'Diabetes',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356cf4?q=80&w=1000',
    ingredients: [
      '1 xícara de lentilhas secas, lavadas e escorridas',
      '1 cebola média picada',
      '2 dentes de alho picados',
      '1 pedaço de gengibre fresco (2cm) ralado',
      '1 cenoura média cortada em cubos',
      '1 abobrinha média cortada em cubos',
      '1 pimentão vermelho cortado em cubos',
      '1 colher de sopa de pasta de curry',
      '1 colher de chá de cúrcuma em pó',
      '1 colher de chá de cominho em pó',
      '1/2 colher de chá de canela em pó',
      '1 lata (400ml) de tomate pelado ou fresco picado',
      '2 xícaras de caldo de legumes',
      '1/2 xícara de leite de coco light',
      'Sal e pimenta a gosto',
      'Coentro fresco picado para finalizar'
    ],
    instructions: [
      'Em uma panela grande, refogue a cebola, alho e gengibre até ficarem macios',
      'Adicione a cenoura e a abobrinha, refogue por 3 minutos',
      'Acrescente o brócolis e refogue por mais 2 minutos',
      'Adicione o caldo de legumes e a cúrcuma, deixe ferver',
      'Reduza o fogo, tampe e cozinhe por 10-15 minutos até os vegetais ficarem macios',
      'Adicione o leite de coco, tempere com sal e pimenta',
      'Cozinhe por mais 5 minutos para incorporar os sabores',
      'Sirva polvilhado com coentro fresco'
    ],
    benefits: 'Rico em fibras, proteínas vegetais e especiarias que ajudam a estabilizar o açúcar no sangue e melhorar a sensibilidade à insulina.',
    scientificBenefits: [
      'Lentilhas: índice glicêmico baixo com alto teor de fibras solúveis que retardam a absorção de açúcar',
      'Canela: contém compostos que imitam a insulina e ajudam as células a absorver glicose',
      'Cúrcuma: o composto curcumina melhora a função das células beta pancreáticas',
      'Combinação de proteínas e fibras: proporciona saciedade prolongada e estabiliza a glicemia'
    ],
    contraindications: [
      'Pessoas com síndrome do intestino irritável podem ter dificuldade para digerir lentilhas',
      'Indivíduos com cálculos renais de oxalato devem consumir com moderação'
    ],
    adaptations: {
      'Intolerância ao FODMAP': 'Substituir lentilhas por quinoa e reduzir a quantidade de cebola e alho',
      'Alergia a coco': 'Substituir leite de coco por creme de castanha de caju',
      'Hipertensão': 'Reduzir ou omitir o sal, usar ervas e especiarias para realçar o sabor'
    },
    specialTip: 'Para um controle glicêmico ainda melhor, sirva com uma porção pequena de arroz integral ou quinoa em vez de pão ou arroz branco.'
  },
  
  // IMUNIDADE
  {
    id: 23,
    name: 'Caldo de Ossos Imunidade',
    time: '12h',
    prepTime: 30,
    servings: 8,
    difficulty: 'Médio',
    category: 'Imunidade',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000',
    ingredients: [
      '1,5kg de ossos de animais (frango, boi ou mistos)',
      '2 colheres de sopa de vinagre de maçã',
      '2 cenouras médias cortadas em pedaços grandes',
      '2 talos de aipo cortados em pedaços grandes',
      '1 cebola grande cortada ao meio',
      '1 cabeça de alho cortada ao meio horizontalmente',
      '2 folhas de louro',
      '1 colher de sopa de pimenta em grãos',
      '1 maço de salsinha',
      '1 colher de sopa de cúrcuma em pó',
      '1 colher de chá de gengibre fresco ralado',
      'Água filtrada suficiente para cobrir os ingredientes',
      'Sal marinho a gosto'
    ],
    instructions: [
      'Pré-aqueça o forno a 200°C',
      'Coloque os ossos em uma assadeira e asse por 20-30 minutos até ficarem dourados (etapa opcional para sabor mais profundo)',
      'Transfira os ossos para uma panela grande ou panela de pressão elétrica',
      'Adicione o vinagre de maçã e deixe descansar por 20-30 minutos (isso ajuda a extrair os minerais dos ossos)',
      'Adicione todos os outros ingredientes e cubra com água',
      'Para preparo tradicional: leve à fervura, reduza o fogo e cozinhe em fogo baixíssimo por 8-24 horas',
      'Para panela de pressão elétrica: programe para 120-180 minutos em alta pressão',
      'Coe o caldo e descarte os sólidos',
      'Ajuste o sal a gosto',
      'Depois de esfriar, remova a camada de gordura da superfície, se desejar'
    ],
    benefits: 'Rico em minerais, aminoácidos e colágeno que fortalecem o sistema imunológico, a saúde intestinal e reduzem a inflamação.',
    scientificBenefits: [
      'Caldo de ossos: contém glicina e prolina, aminoácidos que ajudam a reparar as células intestinais e fortalecer a barreira da mucosa',
      'Cúrcuma e gengibre: possuem potentes propriedades anti-inflamatórias e antimicrobianas',
      'Alho: contém alicina, composto com propriedades antibacterianas e antivirais',
      'Vinagre de maçã: ajuda a extrair minerais dos ossos, incluindo cálcio, magnésio e zinco, essenciais para a função imunológica'
    ],
    contraindications: [
      'Pessoas com histamina elevada podem reagir ao caldo longo',
      'Vegetarianos e veganos (substituir por caldo de cogumelos e algas)'
    ],
    adaptations: {
      'Vegetarianos/Veganos': 'Preparar versão com cogumelos shiitake, algas kombu e miso para umami',
      'Intolerância ao FODMAP': 'Omitir cebola e alho, usar apenas a parte verde do aipo',
      'Histamina elevada': 'Reduzir o tempo de cozimento para 3-4 horas'
    },
    specialTip: 'Congele em formas de cubos de gelo para ter porções individuais. Consuma diariamente uma xícara, especialmente durante a temporada de gripes e resfriados.'
  },
  
  // PELE
  {
    id: 24,
    name: 'Salada de Salmão e Abacate para Pele Radiante',
    time: '15 min',
    prepTime: 15,
    servings: 2,
    difficulty: 'Fácil',
    category: 'Pele Saudável',
    image: 'https://images.unsplash.com/photo-1580013759032-c96505e24c1f?q=80&w=1000',
    ingredients: [
      '200g de salmão selvagem grelhado ou defumado',
      '1 abacate maduro em fatias',
      '4 xícaras de mix de folhas verdes (espinafre, rúcula, alface)',
      '1/2 pepino em fatias finas',
      '1/4 xícara de sementes de abóbora torradas',
      '1/4 xícara de mirtilos frescos',
      '1/4 cebola roxa fatiada finamente',
      '2 colheres de sopa de azeite de oliva extra-virgem',
      '1 colher de sopa de suco de limão fresco',
      '1 colher de chá de mel (opcional)',
      '1 colher de chá de mostarda Dijon',
      'Sal marinho e pimenta-do-reino a gosto'
    ],
    instructions: [
      'Lave e seque bem as folhas verdes e coloque-as em uma tigela grande',
      'Adicione o pepino, cebola roxa, mirtilos e sementes de abóbora',
      'Em um recipiente pequeno, prepare o molho misturando azeite, suco de limão, mel e mostarda Dijon',
      'Tempere o molho com sal e pimenta a gosto',
      'Regue as folhas com o molho e misture delicadamente',
      'Divida a salada em dois pratos',
      'Distribua o salmão e o abacate por cima',
      'Sirva imediatamente'
    ],
    benefits: 'Combinação de ácidos graxos essenciais, antioxidantes e vitaminas que nutrem a pele, combatem os radicais livres e promovem colágeno.',
    scientificBenefits: [
      'Salmão: rico em ômega-3 que reduz inflamação e fortalece a barreira cutânea, além de proteger contra danos solares',
      'Abacate: fonte de vitamina E e gorduras monoinsaturadas que hidratam a pele de dentro para fora',
      'Mirtilos: contêm antocianinas que protegem contra danos oxidativos e melhoram a circulação cutânea',
      'Folhas verdes: fontes de vitaminas A, C e K que estimulam a produção de colágeno e a renovação celular'
    ],
    contraindications: [
      'Pessoas com alergia a peixes ou frutos do mar',
      'Indivíduos com problemas de coagulação sanguínea devem consumir folhas verdes com moderação'
    ],
    adaptations: {
      'Vegetarianos/Veganos': 'Substituir salmão por tofu marinado em algas ou grão-de-bico',
      'Alergia a abacate': 'Substituir por azeite extra e azeitonas',
      'Refluxo': 'Reduzir ou omitir cebola e limão'
    },
    specialTip: 'Para melhores resultados na pele, consuma esta salada 2-3 vezes por semana como parte de uma dieta rica em antioxidantes e baixa em açúcares refinados.'
  },
  
  // SONO
  {
    id: 25,
    name: 'Leite Dourado Noturno para Dormir Bem',
    time: '8 min',
    prepTime: 8,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Sono Melhor',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000',
    ingredients: [
      '1 xícara de leite vegetal (amêndoas, aveia ou coco)',
      '1/2 colher de chá de cúrcuma em pó',
      '1/4 colher de chá de canela em pó',
      '1/4 colher de chá de cardamomo em pó',
      '1/4 colher de chá de gengibre em pó',
      '1 pitada de pimenta-do-reino preta',
      '1/2 colher de chá de extrato de baunilha',
      '1 colher de chá de óleo de coco (opcional)',
      '1 colher de chá de mel ou xarope de bordo (opcional)',
      '1 colher de chá de ashwagandha em pó (opcional)'
    ],
    instructions: [
      'Em uma panela pequena, aqueça o leite em fogo médio (não deixe ferver)',
      'Adicione todos os ingredientes, exceto o mel e a baunilha',
      'Mexa constantemente por cerca de 5 minutos para que as especiarias liberem seu sabor',
      'Retire do fogo e adicione a baunilha e o mel, se desejar',
      'Passe para uma caneca e desfrute 30-60 minutos antes de dormir'
    ],
    benefits: 'Combina especiarias e ervas com propriedades calmantes que promovem relaxamento, reduzem a ansiedade e preparam o corpo para um sono restaurador.',
    scientificBenefits: [
      'Cúrcuma: contém curcumina que reduz inflamação e estresse oxidativo associados a distúrbios do sono',
      'Ashwagandha: adaptógeno que reduz o cortisol (hormônio do estresse) e promove relaxamento',
      'Canela e cardamomo: ajudam a estabilizar o açúcar no sangue durante a noite, evitando despertares',
      'Leite morno: o ritual de consumir bebidas mornas sinaliza ao corpo que é hora de relaxar'
    ],
    contraindications: [
      'Pessoas com alergia a algum dos ingredientes',
      'Indivíduos com cálculos biliares devem evitar cúrcuma em grandes quantidades'
    ],
    adaptations: {
      'Diabetes': 'Omitir o adoçante ou usar estévia',
      'Alergia a nozes': 'Usar leite de coco ou aveia',
      'Refluxo': 'Reduzir ou omitir gengibre e pimenta'
    },
    specialTip: 'Beba este leite dourado como parte de uma rotina noturna consistente que inclua redução de luzes azuis e atividades relaxantes para maximizar os benefícios para o sono.'
  },
  
  // PERDA DE PESO
  {
    id: 26,
    name: 'Sopa Detox de Couve e Gengibre para Perda de Peso',
    time: '25 min',
    prepTime: 25,
    servings: 4,
    difficulty: 'Fácil',
    category: 'Perda de Peso',
    image: 'https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?q=80&w=1000',
    ingredients: [
      '1 maço de couve manteiga fatiada finamente',
      '2 talos de aipo picados',
      '1 cebola média picada',
      '2 dentes de alho picados',
      '1 colher de sopa de gengibre fresco ralado',
      '1 cenoura média em cubos pequenos',
      '1 abobrinha média em cubos pequenos',
      '1 pimentão vermelho em cubos pequenos',
      '1 litro de caldo de legumes baixo em sódio',
      '1 colher de chá de cúrcuma em pó',
      '1/2 colher de chá de pimenta caiena (opcional)',
      '2 colheres de sopa de suco de limão fresco',
      'Sal marinho e pimenta-do-reino a gosto',
      'Coentro fresco picado para finalizar'
    ],
    instructions: [
      'Em uma panela grande, refogue a cebola e o alho em um fio de azeite (ou água para versão sem óleo) até ficarem transparentes',
      'Adicione o gengibre, aipo, cenoura e pimentão, refogue por 3-4 minutos',
      'Acrescente a abobrinha e cozinhe por mais 2 minutos',
      'Adicione o caldo de legumes, a cúrcuma e a pimenta caiena',
      'Deixe ferver, reduza o fogo e cozinhe por 10 minutos',
      'Adicione a couve fatiada e cozinhe por mais 5 minutos',
      'Finalize com suco de limão, sal e pimenta a gosto',
      'Sirva quente, polvilhada com coentro fresco'
    ],
    benefits: 'Rica em nutrientes, baixa em calorias e com ingredientes que estimulam o metabolismo, ajudando na queima de gordura e desintoxicação do organismo.',
    scientificBenefits: [
      'Couve: rica em fibras e baixa em calorias, promove saciedade prolongada e fornece nutrientes essenciais',
      'Gengibre: contém gingeróis que aumentam a temperatura corporal e aceleram o metabolismo em até 5%',
      'Pimenta caiena: a capsaicina estimula a queima de calorias e reduz o apetite',
      'Cúrcuma: melhora a digestão e reduz a inflamação associada à obesidade'
    ],
    contraindications: [
      'Pessoas com problemas de tireoide devem consumir vegetais crucíferos como a couve com moderação',
      'Indivíduos com gastrite ou úlceras podem ter sensibilidade ao gengibre e pimenta'
    ],
    adaptations: {
      'Gastrite': 'Omitir pimenta caiena e reduzir gengibre',
      'Refluxo': 'Reduzir ou omitir cebola, alho e limão',
      'Hipotireoidismo': 'Cozinhar bem a couve e consumir com moderação'
    },
    specialTip: 'Consuma esta sopa como refeição leve no jantar para maximizar os benefícios de perda de peso. Pode ser preparada em quantidade maior e consumida ao longo de 3 dias.'
  },
  
  // GANHO DE PESO
  {
    id: 27,
    name: 'Panquecas Proteicas de Banana para Ganho de Massa',
    time: '15 min',
    prepTime: 15,
    servings: 2,
    difficulty: 'Fácil',
    category: 'Ganho de Peso',
    image: 'https://images.unsplash.com/photo-1589019648027-af2e31b276a7?q=80&w=1000',
    ingredients: [
      '2 bananas maduras',
      '3 ovos grandes',
      '1/2 xícara de aveia em flocos',
      '2 colheres de sopa de whey protein (sabor baunilha ou natural)',
      '1 colher de chá de canela em pó',
      '1 colher de chá de extrato de baunilha',
      '1 colher de sopa de manteiga de amêndoas',
      '1 colher de sopa de óleo de coco para fritar',
      'Para servir: iogurte grego, frutas vermelhas, mel, manteiga de amendoim extra'
    ],
    instructions: [
      'Em um liquidificador, bata as bananas, ovos, aveia, whey protein, canela, baunilha e manteiga de amêndoas até obter uma massa homogênea',
      'Deixe a massa descansar por 5 minutos para que a aveia absorva o líquido',
      'Aqueça uma frigideira antiaderente com um pouco de óleo de coco em fogo médio',
      'Despeje aproximadamente 1/4 de xícara da massa para cada panqueca',
      'Cozinhe por 2-3 minutos de cada lado ou até dourar',
      'Sirva quente com iogurte grego, frutas vermelhas e um fio de mel ou manteiga de amendoim'
    ],
    benefits: 'Equilibra carboidratos complexos e proteínas de alta qualidade para ganho de massa muscular, fornecendo energia sustentada e nutrientes para recuperação.',
    scientificBenefits: [
      'Combinação carboidratos + proteínas: proporciona janela anabólica ideal para síntese proteica',
      'Whey protein: rápida absorção e rico em aminoácidos essenciais para construção muscular',
      'Aveia: carboidratos complexos que fornecem energia sustentada e beta-glucanas que aumentam a imunidade',
      'Ovos: proteína completa com alta biodisponibilidade e colina que apoia o metabolismo energético'
    ],
    contraindications: [
      'Pessoas com alergia a ovos ou proteínas lácteas (whey)',
      'Indivíduos com intolerância a histamina podem reagir a bananas muito maduras'
    ],
    adaptations: {
      'Alergia a ovos': 'Substituir por 3 colheres de sopa de linhaça moída misturadas com 9 colheres de sopa de água',
      'Intolerância à lactose': 'Usar whey isolado ou proteína vegetal',
      'Diabetes': 'Usar bananas menos maduras e omitir o mel'
    },
    specialTip: 'Ideal para café da manhã pré-treino ou lanche pós-treino. Para aumentar ainda mais as calorias, sirva com uma colher extra de manteiga de amendoim e iogurte grego integral.'
  },
  
  // HORMÔNIOS
  {
    id: 28,
    name: 'Salada de Brócolis e Sementes para Equilíbrio Hormonal',
    time: '20 min',
    prepTime: 20,
    servings: 2,
    difficulty: 'Fácil',
    category: 'Hormônios',
    image: 'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=1000',
    ingredients: [
      '3 xícaras de floretes de brócolis',
      '1/2 xícara de couve-flor picada',
      '1/2 xícara de repolho roxo fatiado finamente',
      '1/4 xícara de cebola roxa picada',
      '1/4 xícara de sementes de abóbora torradas',
      '2 colheres de sopa de sementes de linhaça moídas',
      '2 colheres de sopa de sementes de girassol',
      '1 abacate maduro em cubos',
      '2 colheres de sopa de azeite de oliva extra-virgem',
      '1 colher de sopa de vinagre de maçã',
      '1 colher de chá de mostarda Dijon',
      '1 dente de alho pequeno amassado',
      'Sal marinho e pimenta-do-reino a gosto',
      'Opcional: 1/4 xícara de cranberries secas sem açúcar'
    ],
    instructions: [
      'Cozinhe no vapor os floretes de brócolis e a couve-flor por 3-4 minutos (devem ficar al dente)',
      'Transfira para água gelada para interromper o cozimento e manter a cor viva',
      'Escorra bem e coloque em uma tigela grande',
      'Adicione o repolho roxo, cebola, sementes e cranberries (se usar)',
      'Em um recipiente pequeno, prepare o molho misturando azeite, vinagre, mostarda, alho, sal e pimenta',
      'Regue a salada com o molho e misture delicadamente',
      'Adicione o abacate por último e misture com cuidado para não amassar',
      'Sirva imediatamente ou refrigere por até 1 hora antes de servir'
    ],
    benefits: 'Combinação de vegetais crucíferos e sementes ricas em lignanas que ajudam a metabolizar os estrogênios e equilibrar os hormônios femininos.',
    scientificBenefits: [
      'Brócolis e crucíferas: contêm DIM (diindolilmetano) que ajuda o fígado a metabolizar o estrogênio de forma saudável',
      'Sementes de linhaça: ricas em lignanas que modulam os receptores de estrogênio e equilibram os hormônios',
      'Sementes de abóbora: fonte de zinco que apoia a produção de progesterona e reduz sintomas de TPM',
      'Abacate: gorduras saudáveis necessárias para a produção de hormônios esteroides'
    ],
    contraindications: [
      'Pessoas com hipotireoidismo não tratado devem consumir crucíferas com moderação',
      'Indivíduos com distúrbios de coagulação sanguínea devem limitar o consumo de vegetais verde-escuros'
    ],
    adaptations: {
      'Hipotireoidismo': 'Cozinhar bem os vegetais crucíferos e consumir com moderação',
      'Intolerância ao FODMAP': 'Reduzir quantidade de brócolis e cebola, omitir alho',
      'Síndrome do intestino irritável': 'Evitar vegetais crus, cozinhar bem todos os ingredientes'
    },
    specialTip: 'Para mulheres, consumir esta salada regularmente durante a fase lútea do ciclo menstrual (7-10 dias antes da menstruação) para ajudar a reduzir sintomas de TPM.'
  },
  
  // ANTI-INFLAMATÓRIA
  {
    id: 29,
    name: 'Bowl de Açaí Anti-inflamatório',
    time: '10 min',
    prepTime: 10,
    servings: 1,
    difficulty: 'Fácil',
    category: 'Anti-inflamatória',
    image: 'https://images.unsplash.com/photo-1541390573302-9963d14c2673?q=80&w=1000',
    ingredients: [
      '200g de polpa de açaí congelada',
      '1/2 banana congelada',
      '1/4 abacate pequeno',
      '1 colher de sopa de óleo de coco',
      '1 colher de sopa de cacau em pó sem açúcar',
      '1 colher de chá de gengibre em pó',
      '1 colher de chá de canela em pó',
      '1/4 xícara de leite vegetal (amêndoas ou coco)',
      'Para decorar: morangos fatiados, banana, granola sem açúcar, sementes de chia, coco ralado sem açúcar'
    ],
    instructions: [
      'No liquidificador, bata a polpa de açaí, banana congelada, abacate, óleo de coco, cacau, gengibre e canela com o leite vegetal',
      'A mistura deve ficar cremosa e espessa, como sorvete mole',
      'Transfira para uma tigela',
      'Decore com morangos, banana, granola, sementes de chia e coco ralado',
      'Sirva imediatamente'
    ],
    benefits: 'Concentrado de antioxidantes e compostos anti-inflamatórios que combatem radicais livres, reduzem dores crônicas e melhoram a recuperação muscular.',
    scientificBenefits: [
      'Açaí: um dos alimentos mais ricos em antocianinas, poderosos antioxidantes que neutralizam radicais livres e reduzem marcadores inflamatórios',
      'Cacau: os flavonoides do cacau inibem as vias inflamatórias NF-kB e reduzem níveis de proteína C-reativa',
      'Gengibre: gingeróis bloqueiam enzimas COX-2 envolvidas na inflamação, similar a medicamentos anti-inflamatórios',
      'Óleo de coco: ácido láurico reduz inflamação e apoia saúde intestinal'
    ],
    contraindications: [
      'Pessoas sensíveis a oxalatos (açaí e cacau são ricos nesse composto)',
      'Indivíduos com refluxo severo podem ter sensibilidade ao cacau'
    ],
    adaptations: {
      'Diabetes': 'Reduzir a quantidade de banana e não adicionar frutas extras ou granola',
      'Alergia a coco': 'Substituir óleo de coco por azeite extra-virgem e usar leite de amêndoas',
      'Sensibilidade a oxalatos': 'Reduzir quantidade de açaí e cacau'
    },
    specialTip: 'Consuma este bowl anti-inflamatório após exercícios intensos para reduzir a inflamação pós-treino e acelerar a recuperação muscular.'
  },
  
  // DIGESTÃO
  {
    id: 30,
    name: 'Kombucha Caseira para Saúde Digestiva',
    time: '7-14 dias',
    prepTime: 30,
    servings: 8,
    difficulty: 'Médio',
    category: 'Digestão',
    image: 'https://images.unsplash.com/photo-1596871117052-9a3e4c9b08b0?q=80&w=1000',
    ingredients: [
      '1 SCOBY (cultura simbiótica de bactérias e leveduras)',
      '1/2 xícara de kombucha starter (de um lote anterior ou comprada)',
      '8 xícaras de água filtrada',
      '1/2 xícara de açúcar orgânico (será consumido durante a fermentação)',
      '4 saquinhos de chá preto orgânico (ou 4 colheres de sopa de chá a granel)',
      'Para sabor (segunda fermentação): gengibre, frutas vermelhas, hibisco, hortelã, limão, canela'
    ],
    instructions: [
      '1ª Fermentação:',
      'Ferva a água e adicione o açúcar, mexendo até dissolver',
      'Adicione os saquinhos de chá e deixe em infusão por 15 minutos',
      'Remova os saquinhos e deixe o chá esfriar completamente até temperatura ambiente',
      'Transfira o chá para um pote de vidro grande limpo',
      'Adicione o SCOBY e a kombucha starter com cuidado',
      'Cubra o pote com um pano limpo preso com elástico (permite que respire mas impede contaminações)',
      'Deixe fermentar em local escuro por 7-14 dias, dependendo da temperatura ambiente e acidez desejada',
      '2ª Fermentação (opcional para carbonatação e sabor):',
      'Remova o SCOBY e reserve 1/2 xícara do líquido para o próximo lote',
      'Adicione frutas, ervas ou especiarias nas garrafas individuais',
      'Encha as garrafas com a kombucha fermentada, deixando 2,5cm de espaço no topo',
      'Feche hermeticamente e deixe em temperatura ambiente por 2-5 dias',
      'Refrigere antes de consumir para interromper a fermentação'
    ],
    benefits: 'Bebida probiótica viva que melhora a flora intestinal, fortalece o sistema imunológico e facilita a digestão e absorção de nutrientes.',
    scientificBenefits: [
      'Probióticos: colônias de bactérias benéficas que reequilibram a microbiota intestinal e melhoram a digestão',
      'Ácidos orgânicos: ácido acético, glucônico e outros que ajudam na digestão e absorção de minerais',
      'Compostos polifenólicos do chá: potentes antioxidantes que protegem o trato digestivo',
      'Enzimas vivas: facilitam a quebra de alimentos e aliviam sintomas de má digestão'
    ],
    contraindications: [
      'Pessoas com sistema imunológico comprometido devem consultar médico antes de consumir alimentos fermentados',
      'Indivíduos com candidíase ou SIBO podem ter reações temporárias aos probióticos',
      'Grávidas e lactantes devem consumir com moderação devido ao pequeno teor alcoólico'
    ],
    adaptations: {
      'Diabetes': 'A maior parte do açúcar é consumido na fermentação, mas monitore a glicemia ao iniciar o consumo',
      'Sensibilidade a histamina': 'Fermentação mais curta produz menos histamina',
      'Síndrome do intestino irritável': 'Comece com porções pequenas (30ml) e aumente gradualmente'
    },
    specialTip: 'Comece consumindo apenas 60ml por dia e aumente gradualmente. Para benefícios digestivos, beba 15 minutos antes das refeições principais.'
  }
];

export default recipes; 