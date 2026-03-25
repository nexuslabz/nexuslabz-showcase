<script setup>
defineProps({ active: Boolean });

const phases = [
  {
    phase: 'MVP, fase 1',
    title: 'Descoberta e Design',
    period: 'Semanas 1 a 4 (mês 1)',
    items: [
      'Reunião de kickoff e alinhamento',
      'Pesquisa de mercado e concorrentes',
      'Definição de conteúdo e tom de voz',
      'Wireframes e protótipo navegável',
      'Você valida o visual antes de seguir',
      'Ambiente de desenvolvimento no ar',
    ],
    outcome: 'Protótipo aprovado e ambiente pronto',
  },
  {
    phase: 'MVP, fase 2',
    title: 'Desenvolvimento',
    period: 'Semanas 5 a 12 (meses 2 e 3)',
    items: [
      'Site responsivo construído do zero',
      'Integração com WhatsApp Business',
      'Sistema de agendamento online',
      'Blog com termos que pacientes pesquisam (SEO e GEO)',
      'Google Analytics e Search Console configurados',
      'Seção de depoimentos e resultados reais',
      'Guia de uso da marca digital',
    ],
    outcome: 'Plataforma em homologação',
  },
  {
    phase: 'MVP, fase 3',
    title: 'Testes e entrada no ar',
    period: 'Semanas 13 a 16 (mês 4)',
    items: [
      'Nota máxima em velocidade e performance',
      'Revisões finais com você',
      'Ajustes de SEO e GEO nas páginas',
      'Domínio e certificado SSL configurados',
      'Site no ar com monitoramento ativo',
      'Início dos 6 meses de suporte',
    ],
    outcome: 'Site no ar com suporte ativo',
  },
];
</script>

<template>
  <section class="roadmap">
    <div class="roadmap__bg">
      <div class="roadmap__glow" />
    </div>

    <div class="roadmap__content">
      <span class="tag tag--nexus">MVP</span>

      <h2 class="roadmap__title">
        <span class="roadmap__highlight">16 semanas.</span> Do zero à plataforma completa.
      </h2>

      <p class="roadmap__desc">
        Processo estruturado em 3 fases com entregas claras.
        <strong>Você acompanha tudo em tempo real.</strong>
      </p>

      <div class="roadmap__grid">
        <div v-for="(p, i) in phases" :key="i" class="roadmap__card">
          <div class="roadmap__phase-badge">{{ p.phase }}</div>
          <h3 class="roadmap__card-title">{{ p.title }}</h3>
          <div class="roadmap__period">{{ p.period }}</div>
          <ul class="roadmap__items">
            <li v-for="(item, j) in p.items" :key="j">{{ item }}</li>
          </ul>
          <div class="roadmap__outcome">
            <span class="roadmap__outcome-icon">✓</span>
            <span class="roadmap__outcome-text">{{ p.outcome }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.roadmap {
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

.roadmap__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.roadmap__glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  bottom: -100px;
  right: -100px;
}

.roadmap__content {
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

.roadmap__title {
  font-size: clamp(1.6rem, 3.5vw, 2.3rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.6rem;
  letter-spacing: -0.02em;
}

.roadmap__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.roadmap__desc {
  font-size: 0.92rem;
  color: var(--white-50);
  line-height: 1.5;
  max-width: 520px;
  margin-bottom: 2rem;
}

.roadmap__desc strong {
  color: var(--pure-white);
}

.roadmap__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  align-items: stretch;
}

.roadmap__card {
  display: flex;
  flex-direction: column;
  padding: 1.15rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: border-color 0.3s;
}

.roadmap__card:hover {
  border-color: var(--neon-gold-15);
}

.roadmap__phase-badge {
  display: inline-block;
  width: fit-content;
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--neon-gold);
  background: var(--neon-gold-08);
  padding: 0.15rem 0.55rem;
  border-radius: 3px;
  margin-bottom: 0.6rem;
}

.roadmap__card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.2rem;
}

.roadmap__period {
  font-size: 0.7rem;
  color: var(--white-30);
  margin-bottom: 0.85rem;
}

.roadmap__items {
  list-style: none;
  padding: 0;
  margin: 0 0 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
}

.roadmap__items li {
  font-size: 0.75rem;
  color: var(--white-50);
  padding-left: 0.9rem;
  position: relative;
  line-height: 1.4;
}

.roadmap__items li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.42em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--neon-gold);
  opacity: 0.4;
}

.roadmap__outcome {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  margin-top: auto;
}

.roadmap__outcome-icon {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--neon-gold);
}

.roadmap__outcome-text {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--neon-gold);
}
</style>
