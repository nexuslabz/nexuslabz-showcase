<script setup>
defineProps({ active: Boolean });

const options = [
  {
    badge: 'Mais completo',
    icon: '🌐',
    title: 'Ecossistema Completo',
    desc: 'Plataforma multi-páginas com blog, agendamento, funil de conversão e presença completa no Google e nas IAs.',
    highlights: [
      'Site com 6+ páginas dedicadas',
      'Blog com SEO e GEO contínuo',
      'Jornada completa do paciente',
      'Expansão futura sem refazer nada',
    ],
    timeline: '~16 semanas',
    support: '6 meses Nexus Gold',
    accent: true,
  },
  {
    badge: 'Mais rápido',
    icon: '🚀',
    title: 'Landing Page de Conversão',
    desc: 'Página única focada em vender o protocolo Nutrigen. Direto ao ponto, com prova social e CTA claro.',
    highlights: [
      'Página única de alta conversão',
      'Copy estratégica e prova social',
      'Entrega rápida e focada',
      'Ideal para começar agora',
    ],
    timeline: '~8 semanas',
    support: '3 meses Nexus Gold',
    accent: false,
  },
];
</script>

<template>
  <section class="comp">
    <div class="comp__bg">
      <div class="comp__glow comp__glow--1" />
      <div class="comp__glow comp__glow--2" />
    </div>

    <div class="comp__content">
      <span class="tag tag--nexus">Propostas</span>

      <h2 class="comp__title">Duas formas de <span class="comp__hl">começar.</span></h2>

      <p class="comp__subtitle">
        Preparamos dois caminhos para colocar o Nutrigen no digital.
        <strong>Você escolhe o que faz mais sentido agora.</strong>
      </p>

      <div class="comp__grid">
        <div
          v-for="(opt, i) in options"
          :key="i"
          class="comp__card"
          :class="{ 'comp__card--accent': opt.accent }"
        >
          <span class="comp__badge" :class="{ 'comp__badge--accent': opt.accent }">
            {{ opt.badge }}
          </span>
          <span class="comp__icon">{{ opt.icon }}</span>
          <h3 class="comp__card-title">{{ opt.title }}</h3>
          <p class="comp__card-desc">{{ opt.desc }}</p>

          <ul class="comp__highlights">
            <li v-for="(h, j) in opt.highlights" :key="j">
              <span class="comp__check">✓</span>
              {{ h }}
            </li>
          </ul>

          <div class="comp__meta">
            <div class="comp__meta-item">
              <span class="comp__meta-label">Prazo</span>
              <span class="comp__meta-value">{{ opt.timeline }}</span>
            </div>
            <div class="comp__meta-item">
              <span class="comp__meta-label">Suporte</span>
              <span class="comp__meta-value">{{ opt.support }}</span>
            </div>
          </div>
        </div>
      </div>

      <p class="comp__note">
        Vamos detalhar cada proposta nos próximos slides. Primeiro o ecossistema completo, depois a
        landing page.
      </p>
    </div>
  </section>
</template>

<style scoped>
.comp {
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

.comp__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.comp__glow--1 {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  top: -150px;
  left: -100px;
}

.comp__glow--2 {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  bottom: -120px;
  right: -80px;
}

.comp__content {
  position: relative;
  z-index: 1;
  max-width: 960px;
  width: 100%;
  text-align: center;
}

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
}

.comp__title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1rem 0 0.75rem;
  letter-spacing: -0.02em;
}

.comp__hl {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.comp__subtitle {
  font-size: 0.95rem;
  color: var(--white-50);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.comp__subtitle strong {
  color: var(--white-70);
}

.comp__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.comp__card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-lg);
  padding: 1.75rem 1.5rem 1.5rem;
  text-align: left;
  position: relative;
  transition: border-color 0.3s ease;
}

.comp__card:hover {
  border-color: rgba(255, 255, 255, 0.12);
}

.comp__card--accent {
  background: rgba(212, 175, 55, 0.04);
  border-color: rgba(212, 175, 55, 0.2);
}

.comp__card--accent:hover {
  border-color: rgba(212, 175, 55, 0.35);
}

.comp__badge {
  position: absolute;
  top: -10px;
  left: 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  color: var(--white-50);
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.2rem 0.7rem;
  border-radius: 100px;
}

.comp__badge--accent {
  background: var(--neon-gold);
  color: var(--nexus-grey);
}

.comp__icon {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 0.75rem;
}

.comp__card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.5rem;
}

.comp__card-desc {
  font-size: 0.82rem;
  color: var(--white-50);
  line-height: 1.55;
  margin-bottom: 1rem;
}

.comp__highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.comp__highlights li {
  font-size: 0.78rem;
  color: var(--white-70);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.comp__check {
  color: var(--neon-gold);
  font-size: 0.7rem;
  flex-shrink: 0;
}

.comp__meta {
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.comp__meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.comp__meta-label {
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-30);
}

.comp__meta-value {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--neon-gold);
}

.comp__note {
  font-size: 0.75rem;
  color: var(--white-30);
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.5;
}
</style>
