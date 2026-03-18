<script setup>
defineProps({ active: Boolean });

const strategies = [
  {
    type: 'seo',
    badge: 'SEO',
    title: 'Search Engine Optimization',
    subtitle: 'Apareça no Google quando seus pacientes buscarem por você',
    desc: 'Otimização técnica e de conteúdo para que suas páginas apareçam nas primeiras posições dos buscadores como Google, Bing e Yahoo. Mais visibilidade, mais pacientes.',
    items: [
      'Estrutura semântica com headings e meta tags otimizados',
      'Performance e Core Web Vitals no máximo',
      'Sitemap, robots.txt e indexação automatizada',
      'Blog com palavras-chave estratégicas para nutrição',
      'Google Analytics + Search Console integrados',
    ],
  },
  {
    type: 'geo',
    badge: 'GEO',
    title: 'Generative Engine Optimization',
    subtitle: 'Seja recomendada pelas inteligências artificiais',
    desc: 'Estratégia para que seu conteúdo e protocolo sejam citados e recomendados por IAs generativas como ChatGPT, Gemini, Copilot e Perplexity quando alguém perguntar sobre nutrição.',
    items: [
      'Dados estruturados (Schema.org) para IAs interpretarem seu conteúdo',
      'Conteúdo com respostas diretas e autoridade no assunto',
      'Citações e fontes rastreáveis para os modelos de linguagem',
      'Otimização para snippets e "posição zero"',
      'Monitoramento de presença em respostas de IA',
    ],
  },
];
</script>

<template>
  <section class="seogeo">
    <div class="seogeo__content">
      <span class="tag">Visibilidade Digital</span>

      <h2 class="seogeo__title">
        <span class="text-gold">SEO & GEO:</span> encontrada por humanos e por IAs
      </h2>

      <p class="seogeo__desc">
        Não basta ter um site bonito. Ele precisa ser encontrado tanto no Google quanto nas
        respostas das inteligências artificiais. Aplicamos as duas estratégias em tudo que
        construímos.
      </p>

      <div class="seogeo__grid">
        <div v-for="(s, i) in strategies" :key="i" class="card seogeo__card">
          <div class="seogeo__card-header">
            <span class="seogeo__badge" :class="'seogeo__badge--' + s.type">{{ s.badge }}</span>
            <h3 class="seogeo__card-title">{{ s.title }}</h3>
            <p class="seogeo__card-subtitle">{{ s.subtitle }}</p>
          </div>

          <p class="seogeo__card-desc">{{ s.desc }}</p>

          <ul class="seogeo__list">
            <li v-for="(item, j) in s.items" :key="j" class="seogeo__list-item">
              <span class="seogeo__check">✓</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.seogeo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  padding: 3rem;
}

.seogeo__content {
  max-width: 1050px;
  width: 100%;
}

.seogeo__title {
  font-size: clamp(1.6rem, 3.5vw, 2.3rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.75rem;
  letter-spacing: -0.02em;
}

.seogeo__desc {
  font-size: 0.95rem;
  color: var(--white-70);
  line-height: 1.6;
  max-width: 700px;
  margin-bottom: 2rem;
}

.seogeo__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.seogeo__card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
}

.seogeo__card-header {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.seogeo__badge {
  display: inline-block;
  width: fit-content;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  margin-bottom: 0.25rem;
}

.seogeo__badge--seo {
  background: rgba(66, 133, 244, 0.15);
  color: #6ea8fe;
}

.seogeo__badge--geo {
  background: rgba(192, 169, 80, 0.15);
  color: var(--neon-gold);
}

.seogeo__card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--pure-white);
}

.seogeo__card-subtitle {
  font-size: 0.82rem;
  color: var(--white-50);
  font-style: italic;
}

.seogeo__card-desc {
  font-size: 0.82rem;
  color: var(--white-60);
  line-height: 1.55;
}

.seogeo__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.seogeo__list-item {
  font-size: 0.78rem;
  color: var(--white-50);
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.seogeo__check {
  color: var(--neon-gold);
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 0.05rem;
}
</style>
