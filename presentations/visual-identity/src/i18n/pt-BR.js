export default {
  cover: {
    title: 'Manual de Identidade Visual',
    subtitle: 'Logo, Cores, Tipografia & Diretrizes de Uso',
    hint: 'Use as setas ou scroll para navegar →',
  },
  toc: {
    tag: 'Índice',
    title: 'Sumário',
    items: [
      { title: 'Especificações do Logo', desc: 'Logo primário & emblema' },
      { title: 'Versões do Logo', desc: 'Empilhado, horizontal, compacto & emblema' },
      { title: 'Fundos para Logo', desc: 'Uso aprovado em fundos' },
      { title: 'Espaçamento & Tamanhos', desc: 'Regras de espaço & mínimos' },
      { title: 'Boas Práticas', desc: 'O que fazer & o que evitar' },
      { title: 'Paleta de Cores', desc: 'Especificações HEX, RGB & CMYK' },
      { title: 'Tipografia', desc: 'Família, pesos & hierarquia' },
    ],
  },
  logoPrimary: {
    tag: '01 — Especificações do Logo',
    title: 'Logo Primário',
    desc: 'O logo da Nexus Labz consiste em dois elementos: o {emblem} (uma forma de gema facetada representando conexão e precisão) e o {wordmark} (NEXUS LABZ). Juntos, eles formam o logo primário.',
    layouts:
      'O logo está disponível em {count} layouts: empilhado (primário), horizontal, horizontal compacto e apenas emblema — cada um nas versões branca e cinza.',
    emblem: 'Emblema',
    wordmark: 'Wordmark',
    count: '4',
  },
  logoVersions: {
    tag: '02 — Versões do Logo',
    title: 'Todas as Variantes',
    groups: [
      { label: 'Empilhado', desc: 'Uso principal — apresentações, capas, redes sociais' },
      { label: 'Horizontal', desc: 'Cabeçalhos, barras de navegação, documentos' },
      { label: 'Horizontal Compacto', desc: 'Espaços reduzidos, assinaturas de email, badges' },
      { label: 'Apenas Emblema', desc: "Favicons, avatars, ícones de app, marcas d'água" },
    ],
    white: 'Branco',
    grey: 'Cinza',
  },
  logoBackgrounds: {
    tag: '03 — Fundos',
    title: 'Fundos Aprovados',
    labels: [
      'Nexus Grey',
      'Tons Escuros',
      'Branco / Claro',
      'Cinza Claro',
      'Acento Dourado',
      'Fundo Agitado / Padrão',
    ],
  },
  logoClearSpace: {
    tag: '04 — Espaçamento',
    title: 'Espaço Livre & Tamanhos Mínimos',
    clearSpaceTitle: 'Espaço Livre',
    clearSpaceDesc:
      'Sempre mantenha um espaço livre mínimo ao redor do logo igual à altura da letra {n} em NEXUS. Nenhum outro elemento gráfico, texto ou borda deve entrar nesta área. Esta regra se aplica a todos os layouts do logo.',
    minSizesTitle: 'Tamanhos Mínimos',
    minSizesDesc:
      'Abaixo dessas dimensões o logo perde legibilidade. Para aplicações muito pequenas, use apenas o emblema.',
    sizes: [
      { label: 'Empilhado', value: 'Largura mín: 120px / 30mm' },
      { label: 'Horizontal', value: 'Largura mín: 160px / 40mm' },
      { label: 'Horizontal Compacto', value: 'Largura mín: 100px / 25mm' },
      { label: 'Apenas Emblema', value: 'Tamanho mín: 24px / 6mm' },
    ],
  },
  logoUsage: {
    tag: '05 — Boas Práticas',
    title: 'O que Fazer & Evitar',
    correctTitle: 'Uso Correto',
    incorrectTitle: 'Uso Incorreto',
    correct: [
      'Use o logo branco em fundos escuros',
      'Use o logo Nexus Grey em fundos claros',
      'Use apenas o emblema para aplicações pequenas',
      'Mantenha o espaço livre definido ao redor do logo',
    ],
    incorrect: [
      'Não estique, gire ou distorça o logo',
      'Não altere as cores do logo',
      'Não adicione efeitos (sombras, contornos, gradientes)',
      'Não posicione o logo em fundos agitados ou de baixo contraste',
    ],
  },
  colors: {
    tag: '06 — Cores',
    title: 'Cores da Marca',
    items: [
      { name: 'Nexus Grey', usage: 'Fundos primários, elementos base' },
      { name: 'Neon Gold', usage: 'Destaques, CTAs, links, acentos' },
      { name: 'Pure White', usage: 'Títulos, corpo de texto, ícones em fundo escuro' },
    ],
  },
  typography: {
    tag: '07 — Tipografia',
    desc: 'Inter é a tipografia oficial da Nexus Labz. Oferece excelente legibilidade em todos os tamanhos e uma estética moderna e limpa tanto em digital quanto em impressão.',
    weightsTitle: 'Pesos',
    hierarchyTitle: 'Hierarquia',
  },
  cta: {
    title: 'Vamos Construir o Futuro Juntos?',
    desc: 'A Nexus Labz está pronta para transformar sua visão em realidade.',
  },
};
