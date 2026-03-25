<script setup>
defineProps({ active: Boolean });

const highlights = [
  {
    metric: '15k+',
    label: 'ticket médio',
    icon: '💰',
  },
  {
    metric: 'C-Level',
    label: 'público-alvo',
    icon: '🎯',
  },
  {
    metric: '6+',
    label: 'produtos no portfólio',
    icon: '📦',
  },
  {
    metric: '100%',
    label: 'redes sociais e indicação',
    icon: '🔄',
  },
];

const products = [
  'Mentoria Executive (carro-chefe)',
  'Leadership Pro',
  'Eventos & Workshops',
  'Comunidade ativa',
  'Livro (em breve)',
  'Podcast (em breve)',
];
</script>

<template>
  <section class="context">
    <div class="context__bg">
      <div class="context__glow" />
    </div>

    <div class="context__content">
      <span class="tag tag--nexus">O Negócio</span>

      <h2 class="context__title">
        A Tech Experts já é uma <span class="context__highlight">máquina de resultados.</span>
      </h2>

      <p class="context__subtitle">
        Executivos promovidos, líderes formados, carreiras transformadas.
        <strong>O problema não é o produto</strong>. O problema é que tudo isso ainda vive fora do
        digital.
      </p>

      <div class="context__metrics">
        <div v-for="(h, i) in highlights" :key="i" class="context__metric">
          <span class="context__metric-icon">{{ h.icon }}</span>
          <span class="context__metric-value">{{ h.metric }}</span>
          <span class="context__metric-label">{{ h.label }}</span>
        </div>
      </div>

      <div class="context__portfolio">
        <div class="context__portfolio-header">
          <span class="context__portfolio-tag">Portfólio atual</span>
          <span class="context__portfolio-note">Tudo isso sem uma única página de vendas.</span>
        </div>
        <div class="context__portfolio-grid">
          <div v-for="(p, i) in products" :key="i" class="context__product">
            <span class="context__product-dot" />
            {{ p }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.context {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  position: relative;
  padding: 2.5rem 3rem;
  overflow: hidden;
}

.context__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.context__glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}

.context__content {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
}

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
}

.context__title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.75rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.context__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.context__subtitle {
  font-size: 0.95rem;
  color: var(--white-50);
  line-height: 1.55;
  max-width: 640px;
  margin-bottom: 2rem;
}

.context__subtitle strong {
  color: var(--pure-white);
  font-weight: 600;
}

.context__metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.context__metric {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0.75rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(212, 175, 55, 0.04);
  border: 1px solid var(--neon-gold-15);
}

.context__metric-icon {
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
}

.context__metric-value {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--neon-gold);
  letter-spacing: -0.02em;
}

.context__metric-label {
  font-size: 0.7rem;
  color: var(--white-40);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 0.15rem;
}

.context__portfolio {
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.context__portfolio-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.context__portfolio-tag {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--pure-white);
  background: rgba(255, 255, 255, 0.08);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}

.context__portfolio-note {
  font-size: 0.78rem;
  color: var(--white-30);
  font-style: italic;
}

.context__portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.context__product {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--white-50);
}

.context__product-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--neon-gold);
  opacity: 0.5;
  flex-shrink: 0;
}
</style>
