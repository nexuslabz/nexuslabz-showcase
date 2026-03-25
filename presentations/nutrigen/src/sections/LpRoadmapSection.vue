<script setup>
defineProps({ active: Boolean });

const phases = [
  {
    phase: 'Fase 1',
    title: 'Descoberta e Conteúdo',
    period: 'Semanas 1 a 2',
    items: [
      'Reunião de kickoff e alinhamento',
      'Definição de copy e tom de voz',
      'Estrutura da página e wireframe',
      'Coleta de depoimentos e materiais',
    ],
    outcome: 'Copy aprovada e estrutura validada',
  },
  {
    phase: 'Fase 2',
    title: 'Design e Desenvolvimento',
    period: 'Semanas 3 a 6 (1 mês)',
    items: [
      'Design visual da landing page',
      'Desenvolvimento frontend responsivo',
      'Integração com WhatsApp Business',
      'Analytics e Search Console configurados',
    ],
    outcome: 'Página pronta para revisão',
  },
  {
    phase: 'Fase 3',
    title: 'Testes e entrada no ar',
    period: 'Semanas 7 a 8',
    items: [
      'Revisão final com você',
      'Ajustes de performance e velocidade',
      'Domínio e certificado SSL configurados',
      'Página no ar com monitoramento ativo',
    ],
    outcome: 'Landing page no ar com suporte',
  },
];
</script>

<template>
  <section class="lpr">
    <div class="lpr__bg">
      <div class="lpr__glow" />
    </div>

    <div class="lpr__content">
      <div class="lpr__offer-tag"><span>Oferta 2</span></div>
      <span class="tag tag--nexus">Cronograma</span>

      <h2 class="lpr__title">
        <span class="lpr__hl">8 semanas.</span> Do briefing à página no ar.
      </h2>

      <p class="lpr__desc">
        Processo enxuto e direto em 3 fases.
        <strong>Você acompanha cada etapa.</strong>
      </p>

      <div class="lpr__grid">
        <div v-for="(p, i) in phases" :key="i" class="lpr__card">
          <div class="lpr__phase-badge">{{ p.phase }}</div>
          <h3 class="lpr__card-title">{{ p.title }}</h3>
          <div class="lpr__period">{{ p.period }}</div>
          <ul class="lpr__items">
            <li v-for="(item, j) in p.items" :key="j">{{ item }}</li>
          </ul>
          <div class="lpr__outcome">
            <span class="lpr__outcome-icon">✓</span>
            <span class="lpr__outcome-text">{{ p.outcome }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lpr {
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

.lpr__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.lpr__glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  bottom: -150px;
  left: -100px;
}

.lpr__content {
  position: relative;
  z-index: 1;
  max-width: 960px;
  width: 100%;
  text-align: center;
}

.lpr__offer-tag {
  display: block;
  margin-bottom: 0.6rem;
}

.lpr__offer-tag span {
  display: inline-block;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: var(--neon-gold);
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.25rem 0.85rem;
  border-radius: 100px;
}

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
}

.lpr__title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1rem 0 0.75rem;
  letter-spacing: -0.02em;
}

.lpr__hl {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lpr__desc {
  font-size: 0.95rem;
  color: var(--white-50);
  line-height: 1.6;
  max-width: 550px;
  margin: 0 auto 2rem;
}

.lpr__desc strong {
  color: var(--white-70);
}

.lpr__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  text-align: left;
}

.lpr__card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.25rem;
  transition: border-color 0.3s ease;
}

.lpr__card:hover {
  border-color: rgba(212, 175, 55, 0.2);
}

.lpr__phase-badge {
  display: inline-block;
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  color: var(--neon-gold);
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  margin-bottom: 0.75rem;
}

.lpr__card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.25rem;
}

.lpr__period {
  font-size: 0.72rem;
  color: var(--white-30);
  margin-bottom: 1rem;
}

.lpr__items {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.lpr__items li {
  font-size: 0.78rem;
  color: var(--white-50);
  padding-left: 1rem;
  position: relative;
}

.lpr__items li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.45em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--neon-gold);
}

.lpr__outcome {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.lpr__outcome-icon {
  color: var(--neon-gold);
  font-size: 0.75rem;
  font-weight: 700;
}

.lpr__outcome-text {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--neon-gold);
}
</style>
