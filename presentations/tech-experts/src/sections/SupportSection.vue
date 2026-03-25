<script setup>
defineProps({ active: Boolean });

const plans = [
  {
    name: 'Nexus White',
    price: 'R$ 99,90',
    period: '/mês',
    tier: 'white',
    features: [
      'Monitoramento de uptime e performance',
      'Correção de bugs e ajustes pontuais',
      'Suporte seg a sex, 10h–19h',
      'Backup quinzenal com restauração',
    ],
  },
  {
    name: 'Nexus Grey',
    price: 'R$ 197,90',
    period: '/mês',
    tier: 'grey',
    features: [
      'Tudo do White +',
      'Otimizações de performance',
      'Relatórios mensais de métricas',
      'Otimização SEO & GEO contínua',
      'Atualização de dependências',
    ],
  },
  {
    name: 'Nexus Gold',
    price: 'R$ 249,90',
    period: '/mês',
    tier: 'gold',
    popular: true,
    features: [
      'Tudo do Grey +',
      'Atendimento prioritário com SLA',
      'Suporte 7 dias por semana',
      'Até 2 reuniões mensais',
      'Evolução contínua de features',
      'Backup semanal + monitoramento',
    ],
  },
];
</script>

<template>
  <section class="support">
    <div class="support__bg">
      <div class="support__glow" />
    </div>

    <div class="support__content">
      <span class="tag tag--nexus">Pós-Lançamento</span>

      <h2 class="support__title">
        <span class="support__highlight">6 meses de Nexus Gold</span> já inclusos.
      </h2>

      <p class="support__subtitle">
        Seu ecossistema não fica sozinho depois do go-live. Você começa com o plano mais completo.
        <strong>Depois, escolhe como quer continuar.</strong>
      </p>

      <div class="support__grid">
        <div
          v-for="(plan, i) in plans"
          :key="i"
          class="support__card"
          :class="['support__card--' + plan.tier, { 'support__card--popular': plan.popular }]"
        >
          <div v-if="plan.popular" class="support__badge">Incluso no pacote</div>
          <h3 class="support__plan-name">{{ plan.name }}</h3>
          <div class="support__price">
            {{ plan.price }}<span class="support__period">{{ plan.period }}</span>
          </div>
          <ul class="support__features">
            <li v-for="(feat, j) in plan.features" :key="j">
              <span class="support__check">✓</span>
              {{ feat }}
            </li>
          </ul>
        </div>
      </div>

      <p class="support__note">
        Após os 6 meses, você escolhe o plano que faz sentido para o momento do negócio.
      </p>
    </div>
  </section>
</template>

<style scoped>
.support {
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

.support__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.support__glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  bottom: -100px;
  left: -100px;
}

.support__content {
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

.support__title {
  font-size: clamp(1.6rem, 3.5vw, 2.3rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.6rem;
  letter-spacing: -0.02em;
}

.support__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.support__subtitle {
  font-size: 0.92rem;
  color: var(--white-50);
  line-height: 1.55;
  max-width: 580px;
  margin-bottom: 2rem;
}

.support__subtitle strong {
  color: var(--pure-white);
}

.support__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.support__card {
  position: relative;
  padding: 1.25rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: border-color 0.3s;
}

.support__card--white {
  border-color: rgba(200, 200, 200, 0.12);
  background: rgba(200, 200, 200, 0.03);
}

.support__card--white .support__plan-name {
  color: #c8c8c8;
}

.support__card--white .support__check {
  color: #a0a0a0;
}

.support__card--grey {
  border-color: rgba(140, 150, 170, 0.2);
  background: rgba(140, 150, 170, 0.04);
}

.support__card--grey .support__plan-name {
  color: #8b9dc3;
}

.support__card--grey .support__price {
  color: #8b9dc3;
}

.support__card--grey .support__check {
  color: #8b9dc3;
}

.support__card:hover {
  border-color: rgba(255, 255, 255, 0.15);
}

.support__card--gold {
  border-color: var(--neon-gold) !important;
  background: rgba(212, 175, 55, 0.04) !important;
  box-shadow:
    0 0 25px rgba(212, 175, 55, 0.12),
    0 0 60px rgba(212, 175, 55, 0.04);
}

.support__card--gold .support__plan-name {
  color: var(--neon-gold);
}

.support__card--gold .support__price {
  color: var(--neon-gold);
}

.support__card--gold .support__check {
  color: var(--neon-gold);
}

.support__badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--neon-gold);
  color: var(--nexus-grey);
  font-size: 0.58rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.2rem 0.7rem;
  border-radius: 100px;
  white-space: nowrap;
}

.support__plan-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.6rem;
}

.support__price {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--pure-white);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.support__period {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--white-30);
}

.support__features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.support__features li {
  font-size: 0.76rem;
  color: var(--white-50);
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.support__check {
  color: var(--white-30);
  font-weight: 700;
  font-size: 0.7rem;
  flex-shrink: 0;
}

.support__note {
  text-align: center;
  font-size: 0.75rem;
  color: var(--white-30);
}
</style>
