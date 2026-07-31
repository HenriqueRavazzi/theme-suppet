/* ======================================================
   SUPPET · dados dos produtos (fonte: ficha técnica DrogaVET)
   ====================================================== */
const PRODUCTS = {
  vitaforca: {
    slug: "vitaforca",
    name: "Campo de Vitaforça",
    tagline: "Reforço Imunológico e Suporte Nutricional",
    short: "Com Vitaminas, Minerais e Aminoácidos",
    flavor: "Sabor Baunilha",
    color: "#D7282D",
    colorDark: "#A81E22",
    image: "img/pack-vitaforca.webp",
    price: 149.90,
    desc: "Suplemento mastigável super premium que fortalece as defesas naturais do seu cão e entrega suporte nutricional completo — o campo de força que todo super-herói de quatro patas merece.",
    icon: "heart",
    benefits: [
      { title: "Praticidade", text: "Vem pronto para consumo. Sem pó, sem misturar, sem complicação na rotina diária." },
      { title: "Reforço Imunológico", text: "Vitaminas, minerais e aminoácidos essenciais que fortalecem as defesas naturais do organismo." },
      { title: "Alta Palatabilidade", text: "Sabor baunilha aprovado até pelos pets mais exigentes — parece agrado, não remédio." },
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
    tagline: "Proteção para as Articulações",
    short: "Com Condroitina e Glucosamina",
    flavor: "Sabor Baunilha",
    color: "#DD6E1F",
    colorDark: "#B4560F",
    image: "img/pack-condroprotetor.webp",
    price: 149.90,
    desc: "Suplemento mastigável com condroitina e glucosamina para proteger as articulações e manter a mobilidade — o escudo que blinda cada passo, corrida e brincadeira do seu pet.",
    icon: "shield",
    benefits: [
      { title: "Proteção Articular", text: "Condroitina e Glucosamina atuam na manutenção da saúde das articulações." },
      { title: "Suplemento Mastigável", text: "Fácil de oferecer, sem necessidade de disfarçar em outros alimentos." },
      { title: "Mobilidade e Conforto", text: "Ajuda a manter a mobilidade e o bem-estar em cães de todas as idades." },
      { title: "Praticidade", text: "Pronto para consumo, ideal para a rotina diária de suplementação." }
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
    tagline: "Redução do Hábito de Ingestão das Fezes",
    short: "Com Prebióticos e Probióticos",
    flavor: "Sabor Baunilha",
    color: "#3A7CAE",
    colorDark: "#2C6088",
    image: "img/pack-anticopro.webp",
    price: 149.90,
    desc: "Suplemento mastigável formulado com prebióticos e probióticos que ajuda a reduzir o hábito de ingestão das fezes e favorece o equilíbrio da flora intestinal.",
    icon: "bolt",
    benefits: [
      { title: "Barreira AntiCopro", text: "Reduz o hábito de ingestão das próprias fezes, tornando-as menos atrativas." },
      { title: "Equilíbrio Intestinal", text: "Prebióticos e probióticos favorecem uma flora intestinal saudável." },
      { title: "Suplemento Mastigável", text: "Praticidade no dia a dia, sem complicação na hora de oferecer." },
      { title: "Bem-Estar Digestivo", text: "Contribui para uma digestão mais equilibrada e confortável." }
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
    tagline: "Equilíbrio e Bem-Estar",
    short: "Com L-triptofano e L-teanina",
    flavor: "Sabor Maracujá",
    color: "#2FA39C",
    colorDark: "#1F7F79",
    image: "img/pack-estresse.webp",
    price: 149.90,
    desc: "Suplemento mastigável com L-triptofano e L-teanina que ajuda a promover calma, equilíbrio emocional e bem-estar em momentos de tensão, viagens ou mudanças de rotina.",
    icon: "star",
    benefits: [
      { title: "Equilíbrio Emocional", text: "L-triptofano e L-teanina ajudam a promover calma e equilíbrio." },
      { title: "Bem-Estar", text: "Auxilia pets ansiosos em momentos de tensão, viagens ou mudanças de rotina." },
      { title: "Suplemento Mastigável", text: "Sabor maracujá, fácil de oferecer a qualquer momento do dia." },
      { title: "Consumo Flexível", text: "Pode ser usado sempre que o pet precisar de um momento de tranquilidade." }
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
