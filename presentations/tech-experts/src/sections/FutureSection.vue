<script setup>
defineProps({ active: Boolean });

const phase2 = [
  {
    icon: '🎨',
    title: 'Re-branding Completo',
    desc: 'Nova identidade visual profissional: logo em SVG, manual de marca e design system escalável.',
  },
  {
    icon: '🤖',
    title: 'Automações & CRM',
    desc: 'E-mail marketing, funil automatizado, remarketing e CRM trabalhando juntos 24/7.',
  },
];

const phase3 = [
  {
    icon: '🎓',
    title: 'Plataforma de Cursos',
    desc: 'Área de membros com módulos, certificação e pagamento recorrente integrado.',
  },
  {
    icon: '📱',
    title: 'App Mobile',
    desc: 'Aplicativo com notificações push e experiência mobile nativa para mentorados.',
  },
  {
    icon: '🛒',
    title: 'E-commerce de Infoprodutos',
    desc: 'Loja digital com checkout próprio para venda direta de e-books, templates e materiais exclusivos.',
  },
  {
    icon: '🎙️',
    title: 'Hub de Podcast & Conteúdo',
    desc: 'Episódios, transcrições e materiais complementares integrados ao ecossistema para gerar autoridade contínua.',
  },
];
</script>

<template>
  <section class="future">
    <div class="future__bg">
      <div class="future__glow future__glow--1" />
      <div class="future__glow future__glow--2" />
    </div>

    <div class="future__content">
      <span class="tag tag--nexus">Visão de Futuro</span>

      <h2 class="future__title">Isso é só o <span class="future__highlight">começo.</span></h2>

      <p class="future__subtitle">
        A arquitetura que construímos é pensada para expandir.
        <strong>Sem refazer nada.</strong> Novos produtos, novas funcionalidades, novos canais de
        receita.
      </p>

      <div class="future__section">
        <div class="future__section-header">
          <span class="future__phase-badge future__phase-badge--2">Fase 2</span>
          <span class="future__phase-label">Evolução imediata</span>
        </div>
        <div class="future__grid future__grid--2">
          <div v-for="(idea, i) in phase2" :key="i" class="future__card">
            <span class="future__icon">{{ idea.icon }}</span>
            <h3 class="future__card-title">{{ idea.title }}</h3>
            <p class="future__card-desc">{{ idea.desc }}</p>
          </div>
        </div>
      </div>

      <div class="future__section">
        <div class="future__section-header">
          <span class="future__phase-badge future__phase-badge--3">Fase 3</span>
          <span class="future__phase-label">Expansão total</span>
        </div>
        <div class="future__grid future__grid--4">
          <div v-for="(idea, i) in phase3" :key="i" class="future__card future__card--future">
            <span class="future__icon">{{ idea.icon }}</span>
            <h3 class="future__card-title">{{ idea.title }}</h3>
            <p class="future__card-desc">{{ idea.desc }}</p>
          </div>
        </div>
      </div>

      <div class="future__bottom">
        <span class="future__bottom-icon">🚀</span>
        <p>
          Cada evolução é um novo canal de receita.
          <strong>A plataforma cresce junto com o negócio.</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.future {
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

.future__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.future__glow--1 {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  top: -80px;
  left: -80px;
}

.future__glow--2 {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  bottom: -60px;
  right: -60px;
}

.future__content {
  position: relative;
  z-index: 1;
  max-width: 1050px;
  width: 100%;
}

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
}

.future__title {
  font-size: clamp(1.6rem, 3.5vw, 2.3rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.5rem;
  letter-spacing: -0.02em;
}

.future__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.future__subtitle {
  font-size: 0.92rem;
  color: var(--white-50);
  line-height: 1.55;
  max-width: 560px;
  margin-bottom: 1.5rem;
}

.future__subtitle strong {
  color: var(--pure-white);
}

.future__section {
  margin-bottom: 1.15rem;
}

.future__section-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.65rem;
}

.future__phase-badge {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.15rem 0.55rem;
  border-radius: 3px;
}

.future__phase-badge--2 {
  color: var(--neon-gold);
  background: var(--neon-gold-08);
}

.future__phase-badge--3 {
  color: #8b9dc3;
  background: rgba(139, 157, 195, 0.1);
}

.future__phase-label {
  font-size: 0.72rem;
  color: var(--white-30);
  font-weight: 500;
}

.future__grid--2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
}

.future__grid--4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.85rem;
}

.future__card {
  padding: 1rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px dashed rgba(212, 175, 55, 0.2);
  transition:
    border-color 0.3s,
    transform 0.3s;
}

.future__card:hover {
  border-color: rgba(212, 175, 55, 0.4);
  transform: translateY(-2px);
}

.future__card--future {
  border-color: rgba(139, 157, 195, 0.15);
}

.future__card--future:hover {
  border-color: rgba(139, 157, 195, 0.3);
}

.future__icon {
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.45rem;
}

.future__card-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.2rem;
}

.future__card-desc {
  font-size: 0.72rem;
  color: var(--white-50);
  line-height: 1.45;
}

.future__bottom {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1.25rem;
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  border-radius: var(--radius-md, 8px);
}

.future__bottom-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.future__bottom p {
  font-size: 0.85rem;
  color: var(--white-70);
  line-height: 1.5;
  margin: 0;
}

.future__bottom strong {
  color: var(--neon-gold);
}
</style>
