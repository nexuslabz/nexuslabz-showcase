<script setup>
defineProps({ active: Boolean });

const categories = [
  {
    icon: '🧭',
    title: 'Estratégia & Planejamento',
    items: [
      { name: 'Consultoria Estratégica & Discovery', value: 'R$ 2.800' },
      { name: 'Estratégia de Funil de Vendas', value: 'R$ 3.500' },
    ],
    subtotal: 'R$ 6.300',
  },
  {
    icon: '🎨',
    title: 'Design & Desenvolvimento',
    items: [
      { name: 'Design UI/UX Personalizado', value: 'R$ 4.800' },
      { name: 'Desenvolvimento Frontend Responsivo', value: 'R$ 5.200' },
    ],
    subtotal: 'R$ 10.000',
  },
  {
    icon: '⚙️',
    title: 'Infraestrutura & Performance',
    items: [
      { name: 'Setup Infraestrutura Completa', value: 'R$ 1.800' },
      { name: 'SEO & GEO + Analytics + Search Console', value: 'R$ 1.500' },
    ],
    subtotal: 'R$ 3.300',
  },
  {
    icon: '🛡️',
    title: 'Entregáveis & Suporte',
    items: [
      { name: 'Guia de Uso da Marca Digital', value: 'R$ 900' },
      { name: '6 Meses de Suporte Profissional', value: 'R$ 1.500' },
    ],
    subtotal: 'R$ 2.400',
  },
];
</script>

<template>
  <section class="investment">
    <div class="investment__bg">
      <div class="investment__glow" />
    </div>

    <div class="investment__content">
      <span class="tag">Investimento</span>

      <h2 class="investment__title">Tudo que está <span class="text-gold">incluso</span></h2>

      <div class="investment__grid">
        <div v-for="(cat, i) in categories" :key="i" class="card investment__card">
          <div class="investment__card-header">
            <span class="investment__card-icon">{{ cat.icon }}</span>
            <span class="investment__card-title">{{ cat.title }}</span>
          </div>
          <ul class="investment__items">
            <li v-for="(item, j) in cat.items" :key="j">
              <span class="investment__item-name">{{ item.name }}</span>
              <span class="investment__item-value">{{ item.value }}</span>
            </li>
          </ul>
          <div class="investment__card-subtotal">
            <span>Subtotal</span>
            <span>{{ cat.subtotal }}</span>
          </div>
        </div>
      </div>

      <div class="investment__total">
        <div class="investment__total-label">Valor Total do Pacote</div>
        <div class="investment__total-price">R$ 22.000</div>
        <div class="investment__total-desc">
          8 entregáveis completos · projeto do zero ao resultado
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.investment {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  position: relative;
  padding: 2rem 3rem;
}

.investment__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.investment__glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
}

.investment__content {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
}

.investment__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 1.5rem;
  letter-spacing: -0.02em;
}

.investment__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.investment__card {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
}

.investment__card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--white-08);
}

.investment__card-icon {
  font-size: 1.1rem;
}

.investment__card-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--neon-gold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.investment__items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.investment__items li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.investment__item-name {
  font-size: 0.78rem;
  color: var(--white-50);
}

.investment__item-value {
  font-size: 0.78rem;
  color: var(--pure-white);
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.investment__card-subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--white-08);
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--white-30);
}

.investment__card-subtotal span:last-child {
  color: var(--white-70);
  font-variant-numeric: tabular-nums;
}

.investment__total {
  text-align: center;
  padding: 1.5rem 2rem;
  border-radius: var(--radius-lg);
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  box-shadow:
    0 0 30px rgba(212, 175, 55, 0.1),
    0 0 80px rgba(212, 175, 55, 0.04);
}

.investment__total-label {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--white-50);
  margin-bottom: 0.5rem;
}

.investment__total-price {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--neon-gold);
  letter-spacing: -0.03em;
  text-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
}

.investment__total-desc {
  font-size: 0.78rem;
  color: var(--white-30);
  margin-top: 0.25rem;
}
</style>
