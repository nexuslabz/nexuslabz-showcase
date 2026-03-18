<script setup>
defineProps({ active: Boolean });

const plans = [
  {
    name: 'Nexus White',
    price: 'R$ 99,90',
    period: '/mês',
    tier: 'white',
    features: [
      'Monitoramento básico de uptime e performance',
      'Correção de bugs e ajustes pontuais',
      'Suporte seg a sex, das 10h às 19h',
      'Backup quinzenal com restauração garantida',
    ],
  },
  {
    name: 'Nexus Grey',
    price: 'R$ 197,90',
    period: '/mês',
    tier: 'grey',
    features: [
      'Tudo do White +',
      'Otimizações de performance e velocidade',
      'Relatórios mensais de desempenho e métricas',
      'Otimização SEO & GEO contínua e indexação',
      'Atualização de dependências e segurança',
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
      'Atendimento prioritário com SLA reduzido',
      'Suporte dedicado 7 dias por semana',
      'Até 2 reuniões mensais de alinhamento',
      'Evolução contínua de features e layout',
      'Backup semanal + monitoramento avançado',
    ],
  },
];
</script>

<template>
  <section class="support">
    <div class="support__content">
      <span class="tag">Suporte Pós-Lançamento</span>

      <h2 class="support__title">
        Após os <span class="text-gold">6 meses inclusos</span> no pacote
      </h2>

      <p class="support__desc">
        O seu pacote já vem com 6 meses de suporte
        <span class="text-gold">Nexus Gold</span>. Depois disso, você escolhe o plano que faz mais
        sentido para continuar evoluindo o ecossistema.
      </p>

      <div class="support__grid">
        <div
          v-for="(plan, i) in plans"
          :key="i"
          class="card support__card"
          :class="['support__card--' + plan.tier, { 'support__card--popular': plan.popular }]"
        >
          <div v-if="plan.popular" class="support__badge">Recomendado</div>
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

      <p class="support__note">Planos opcionais, contratação disponível após os 6 meses inclusos</p>
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
  padding: 3rem;
}

.support__content {
  max-width: 1000px;
  width: 100%;
}

.support__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 0.75rem;
  letter-spacing: -0.02em;
}

.support__desc {
  font-size: 1rem;
  color: var(--white-70);
  line-height: 1.6;
  max-width: 650px;
  margin-bottom: 2.5rem;
}

.support__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.support__card {
  position: relative;
}

.support__card--white {
  border-color: rgba(255, 255, 255, 0.15) !important;
  box-shadow:
    0 0 20px rgba(255, 255, 255, 0.06),
    0 0 50px rgba(255, 255, 255, 0.02);
}

.support__card--white .support__plan-name {
  color: var(--pure-white);
}

.support__card--white .support__check {
  color: var(--white-50);
}

.support__card--grey {
  border-color: rgba(255, 255, 255, 0.25) !important;
  background: rgba(255, 255, 255, 0.04) !important;
  box-shadow:
    0 0 20px rgba(160, 160, 170, 0.1),
    0 0 50px rgba(160, 160, 170, 0.04);
}

.support__card--grey .support__plan-name {
  color: var(--white-70);
}

.support__card--grey .support__check {
  color: var(--white-50);
}

.support__card--gold {
  border-color: var(--neon-gold) !important;
  background: var(--neon-gold-08) !important;
  box-shadow:
    0 0 25px rgba(212, 175, 55, 0.15),
    0 0 60px rgba(212, 175, 55, 0.05);
}

.support__card--gold .support__plan-name {
  color: var(--neon-gold);
}

.support__card--gold .support__check {
  color: var(--neon-gold);
}

.support__card--gold .support__price {
  color: var(--neon-gold);
}

.support__badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--neon-gold);
  color: var(--nexus-grey);
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;
}

.support__plan-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--pure-white);
  margin-bottom: 0.75rem;
}

.support__price {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--pure-white);
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
}

.support__period {
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--white-30);
}

.support__features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.support__features li {
  font-size: 0.8rem;
  color: var(--white-50);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.support__check {
  color: var(--neon-gold);
  font-weight: 700;
  font-size: 0.75rem;
}

.support__note {
  text-align: center;
  font-size: 0.75rem;
  color: var(--white-30);
  font-style: italic;
}
</style>
