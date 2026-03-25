<script setup>
defineProps({ active: Boolean });

const categories = [
  {
    icon: '🧭',
    title: 'Estratégia e Planejamento',
    items: [
      { name: 'Consultoria e Discovery', value: 'R$ 2.800' },
      { name: 'Estratégia de Funil de Vendas', value: 'R$ 3.500' },
    ],
    subtotal: 'R$ 6.300',
  },
  {
    icon: '🎨',
    title: 'Design e Desenvolvimento',
    items: [
      { name: 'Design UI/UX Personalizado', value: 'R$ 4.800' },
      { name: 'Desenvolvimento Frontend Responsivo', value: 'R$ 5.200' },
    ],
    subtotal: 'R$ 10.000',
  },
  {
    icon: '⚙️',
    title: 'Infraestrutura e Performance',
    items: [
      { name: 'Setup Infraestrutura Completa', value: 'R$ 1.800' },
      { name: 'SEO e GEO, Analytics e Search Console', value: 'R$ 1.500' },
    ],
    subtotal: 'R$ 3.300',
  },
  {
    icon: '🛡️',
    title: 'Entregáveis e Suporte',
    items: [
      { name: 'Guia de Uso da Marca Digital', value: 'R$ 900' },
      { name: '6 Meses de Suporte Nexus Gold', value: 'R$ 1.500' },
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
      <span class="tag tag--nexus">Investimento</span>

      <h2 class="investment__title">
        Cada centavo <span class="investment__highlight">justificado.</span>
      </h2>

      <div class="investment__grid">
        <div v-for="(cat, i) in categories" :key="i" class="investment__card">
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
        <div class="investment__total-label">Valor total do pacote</div>
        <div class="investment__total-price">R$ 22.000</div>
        <div class="investment__total-desc">
          Plataforma no ar, busca no Google e nas IAs, 6 meses de suporte. Do zero até a primeira
          conversão.
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
  padding: 1.5rem 2.5rem;
  overflow: hidden;
}

.investment__bg {
  position: absolute;
  inset: 0;
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

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
}

.investment__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 0.75rem 0 1rem;
  letter-spacing: -0.02em;
}

.investment__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.investment__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.investment__card {
  display: flex;
  flex-direction: column;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.investment__card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.investment__card-icon {
  font-size: 0.95rem;
}

.investment__card-title {
  font-size: 0.72rem;
  font-weight: 700;
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
  gap: 0.4rem;
  flex: 1;
}

.investment__items li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.investment__item-name {
  font-size: 0.72rem;
  color: var(--white-50);
}

.investment__item-value {
  font-size: 0.72rem;
  color: var(--pure-white);
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.investment__card-subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--white-30);
}

.investment__card-subtotal span:last-child {
  color: var(--white-70);
  font-variant-numeric: tabular-nums;
}

.investment__total {
  text-align: center;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-lg);
  background: rgba(212, 175, 55, 0.05);
  border: 2px solid var(--neon-gold);
  box-shadow:
    0 0 30px rgba(212, 175, 55, 0.15),
    0 0 80px rgba(212, 175, 55, 0.05);
}

.investment__total-label {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--white-50);
  margin-bottom: 0.25rem;
}

.investment__total-price {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--neon-gold);
  letter-spacing: -0.03em;
  text-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
}

.investment__total-desc {
  font-size: 0.72rem;
  color: var(--white-30);
  margin-top: 0.15rem;
}
</style>
