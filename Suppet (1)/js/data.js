/* ======================================================
   SUPPET · dados dos produtos
   Conteúdo revisado pela DrogaVET
   ====================================================== */
const PRODUCTS = {
  vitaforca: {
    slug: "vitaforca",
    name: "Campo de Vitaforça",
    campaignLine: "A defesa da vitalidade",
    tagline: "Reforço Imunológico e suporte nutricional",
    short: "Vitaminas, minerais e aminoácidos",
    flavor: "Sabor baunilha",
    packageText: "Sachê de 150 g (com aproximadamente 34 biscoitos)",
    color: "#D7282D",
    colorDark: "#A81E22",
    image: "img/pack-vitaforca.webp",
    price: 149.90,
    desc: "Suplemento mastigável super premium com vitaminas, minerais e aminoácidos que fortalece as defesas naturais do seu cão e entrega suporte nutricional completo. O campo de força que todo super-herói de quatro patas merece. Sabor baunilha.",
    mission: "Oferecer energia e suporte nutricional para as aventuras do dia a dia.",
    powers: [
      "Auxilia o metabolismo energético;",
      "Fortalece a imunidade;",
      "Favorece pele e pelagem;",
      "Saúde intestinal;",
      "Ação antioxidante."
    ],
    allies: "EPA + DHA • Taurina • Biotina • Zinco • Beta-glucanos",
    icon: "heart",
    miniBenefits: ["Mastigável", "Praticidade", "Alta palatabilidade", "Super premium"],
    benefits: [
      { title: "Praticidade", text: "Biscoito pronto para consumo. Não é em pó e nem precisa misturar, sem complicação na rotina diária." },
      { title: "Reforço Imunológico", text: "Vitaminas, minerais e aminoácidos essenciais ajudam a fortalecer as defesas naturais do organismo." },
      { title: "Alta Palatabilidade", text: "Sabor baunilha, aprovado até pelos pets mais exigentes. Parece petisco." },
      { title: "Suporte Nutricional", text: "Fórmula super premium desenvolvida para complementar a dieta diária de cães adultos." }
    ],
    nutrition: [
      ["Vitamina A", "178.500 UI", "714 UI"],
      ["Vitamina E", "2.975 UI", "11,9 UI"],
      ["Selênio", "8,5 mg", "0,03 mg"],
      ["Zinco", "1.275 mg", "5,1 mg"],
      ["Ferro", "680 mg", "2,72 mg"],
      ["EPA + DHA", "2.550 mg", "10,2 mg"]
    ]
  },
  condroprotetor: {
    slug: "condroprotetor",
    name: "Escudo Condroprotetor",
    campaignLine: "A proteção da mobilidade",
    tagline: "Proteção para as articulações",
    short: "Condroitina e glucosamina",
    flavor: "Sabor baunilha",
    packageText: "Sachê de 150 g (com aproximadamente 34 biscoitos)",
    color: "#DD6E1F",
    colorDark: "#B4560F",
    image: "img/pack-condroprotetor.webp",
    price: 149.90,
    desc: "Suplemento mastigável com condroitina e glucosamina que auxilia na saúde das articulações e contribui para a mobilidade. O escudo que blinda cada passo, corrida e brincadeira do seu pet. Sabor baunilha.",
    mission: "Proteger as articulações para que nenhuma aventura precise parar.",
    powers: [
      "Auxilia a saúde articular;",
      "Protege a cartilagem;",
      "Favorece a mobilidade;",
      "Contribui para o conforto;",
      "Mais qualidade de vida."
    ],
    allies: "Glucosamina • Condroitina • Colágeno Tipo II",
    icon: "shield",
    miniBenefits: ["Mastigável", "Proteção articular", "Alta palatabilidade", "Super premium"],
    benefits: [
      { title: "Proteção Articular", text: "A condroitina e a glucosamina atuam na manutenção das articulações." },
      { title: "Mastigável", text: "Fácil de oferecer e pronto para consumo, sem necessidade de misturar em outros alimentos." },
      { title: "Mobilidade e Conforto", text: "Contribui para a mobilidade, o conforto e a qualidade de vida em diferentes fases da vida." },
      { title: "Praticidade", text: "Ideal para uma rotina diária de suplementação simples e consistente." }
    ],
    nutrition: [
      ["Glucosamina", "50 g", "200 mg"],
      ["Condroitina", "40 g", "160 mg"],
      ["Manganês", "1.445 mg", "5,7 mg"],
      ["Vitamina E", "2.975 UI", "11,9 UI"],
      ["Colágeno tipo II", "42 g", "168 mg"]
    ]
  },
  anticopro: {
    slug: "anticopro",
    name: "Barreira AntiCopro",
    campaignLine: "A potência da saúde intestinal",
    tagline: "Redução do hábito de ingestão das fezes",
    short: "Prebióticos e probióticos",
    flavor: "Sabor baunilha",
    packageText: "Sachê de 150 g (com aproximadamente 34 biscoitos)",
    color: "#3A7CAE",
    colorDark: "#2C6088",
    image: "img/pack-anticopro.webp",
    price: 149.90,
    desc: "Suplemento mastigável formulado com prebióticos e probióticos que ajuda a reduzir o hábito de ingestão das fezes e favorece o equilíbrio da microbiota intestinal. Sabor baunilha.",
    mission: "Impedir que a coprofagia atrapalhe o bem-estar do seu herói.",
    powers: [
      "Auxilia no controle da coprofagia;",
      "Favorece a saúde intestinal;",
      "Reduz o odor das fezes;",
      "Melhora a digestibilidade dos nutrientes;",
      "Alta palatabilidade."
    ],
    allies: "Yucca • Probióticos • Prebióticos • Enzimas Digestivas",
    icon: "bolt",
    miniBenefits: ["Mastigável", "Barreira anticoprofagia", "Alta palatabilidade", "Super premium"],
    benefits: [
      { title: "Barreira Anticoprofagia", text: "Ajuda a reduzir o hábito de ingestão das fezes e contribui para o bem-estar do cão." },
      { title: "Equilíbrio Intestinal", text: "Os prebióticos e os probióticos favorecem uma microbiota intestinal saudável." },
      { title: "Mastigável", text: "Formato prático, fácil de oferecer e adequado para a rotina diária." },
      { title: "Bem-Estar Digestivo", text: "Contribui para uma digestão mais equilibrada e para o melhor aproveitamento dos nutrientes." }
    ],
    nutrition: [
      ["Metionina", "22 g", "88 mg"],
      ["Triptofano", "13 g", "52 mg"],
      ["Vitamina B6", "397 mg", "1,5 mg"],
      ["Beta-glucanos", "6.256 mg", "25 mg"],
      ["Lactobacillus acidophilus", "2,55×10⁹ UFC", "1×10⁹ UFC"]
    ]
  },
  estresse: {
    slug: "estresse",
    name: "Neutralizador de Estresse",
    campaignLine: "A diferença do equilíbrio",
    tagline: "Equilíbrio e bem-estar",
    short: "L-triptofano e L-teanina",
    flavor: "Sabor maracujá",
    packageText: "Sachê de 150 g (com aproximadamente 34 biscoitos)",
    color: "#2FA39C",
    colorDark: "#1F7F79",
    image: "img/pack-estresse.webp",
    price: 149.90,
    desc: "Suplemento mastigável com L-triptofano e L-teanina que ajuda a promover calma, equilíbrio emocional e bem-estar em momentos de tensão, viagens ou mudanças de rotina. Sabor maracujá.",
    mission: "Transformar momentos desafiadores em mais tranquilidade.",
    powers: [
      "Auxilia no controle do estresse e da ansiedade;",
      "Promove relaxamento;",
      "Favorece o equilíbrio comportamental;",
      "Suporte ao sistema nervoso;",
      "Ideal para viagens, fogos e mudanças de rotina."
    ],
    allies: "L-Triptofano • L-Teanina • Camomila • Melissa • Valeriana",
    icon: "star",
    miniBenefits: ["Mastigável", "Equilíbrio emocional", "Alta palatabilidade", "Super premium"],
    benefits: [
      { title: "Equilíbrio Emocional", text: "O L-triptofano e a L-teanina ajudam a promover calma e equilíbrio." },
      { title: "Bem-Estar", text: "Auxilia em momentos de tensão, viagens, fogos ou mudanças de rotina." },
      { title: "Mastigável", text: "Sabor maracujá e formato prático para oferecer no dia a dia." },
      { title: "Consumo Flexível", text: "Pode integrar a rotina sempre que o cão precisar de mais tranquilidade." }
    ],
    nutrition: [
      ["Glicina", "26 g", "104 mg"],
      ["Magnésio", "4.300 mg", "17 mg"],
      ["L-teanina", "16.600 mg", "66 mg"],
      ["Triptofano", "37 g", "148 mg"],
      ["Vitamina B12", "8.000 mcg", "32 mcg"]
    ]
  }
};

const PRODUCT_ORDER = ["vitaforca", "condroprotetor", "anticopro", "estresse"];
