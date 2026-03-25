<script setup>
defineProps({ active: Boolean });

const categories = [
  {
    icon: '🧭',
    title: 'Estratégia e Conteúdo',
    items: [
      { name: 'Consultoria e Discovery', value: 'R$ 1.200' },
      { name: 'Estratégia de copy e conversão', value: 'R$ 1.500' },
    ],
    subtotal: 'R$ 2.700',
  },
  {
    icon: '🎨',
    title: 'Design e Desenvolvimento',
    items: [
      { name: 'Design UI/UX da landing page', value: 'R$ 2.000' },
      { name: 'Desenvolvimento frontend responsivo', value: 'R$ 2.500' },
    ],
    subtotal: 'R$ 4.500',
  },
  {
    icon: '⚙️',
    title: 'Infraestrutura',
    items: [
      { name: 'Hosting, domínio e SSL', value: 'R$ 800' },
      { name: 'SEO básico, Analytics e Search Console', value: 'R$ 500' },
    ],
    subtotal: 'R$ 1.300',
  },
  {
    icon: '🛡️',
    title: 'Entregáveis e Suporte',
    items: [
      { name: 'Integrações (WhatsApp, formulários)', value: 'R$ 750' },
      { name: '3 Meses de Suporte Nexus Gold', value: 'R$ 750' },
    ],
    subtotal: 'R$ 1.500',
  },
];
</script>

<template>
  <section class="lpi">
    <div class="lpi__bg">
      <div class="lpi__glow" />
    </div>

    <div class="lpi__content">
      <div class="lpi__offer-tag"><span>Oferta 2</span></div>
      <span class="tag tag--nexus">Investimento</span>

      <h2 class="lpi__title">Cada centavo <span class="lpi__highlight">justificado.</span></h2>

      <div class="lpi__grid">
        <div v-for="(cat, i) in categories" :key="i" class="lpi__card">
          <div class="lpi__card-header">
            <span class="lpi__card-icon">{{ cat.icon }}</span>
            <span class="lpi__card-title">{{ cat.title }}</span>
          </div>
          <ul class="lpi__items">
            <li v-for="(item, j) in cat.items" :key="j">
              <span class="lpi__item-name">{{ item.name }}</span>
              <span class="lpi__item-value">{{ item.value }}</span>
            </li>
          </ul>
          <div class="lpi__card-subtotal">
            <span>Subtotal</span>
            <span>{{ cat.subtotal }}</span>
          </div>
        </div>
      </div>

      <div class="lpi__total">
        <div class="lpi__total-label">Valor total do pacote</div>
        <div class="lpi__total-price">R$ 10.000</div>
        <div class="lpi__total-desc">
          Landing page no ar, infraestrutura, integrações e 3 meses de suporte. Do briefing à
          primeira conversão.
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lpi {
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

.lpi__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.lpi__glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
}

.lpi__content {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
  text-align: center;
}

.lpi__offer-tag {
  display: block;
  margin-bottom: 0.6rem;
}

.lpi__offer-tag span {
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

.lpi__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 0.75rem 0 1rem;
  letter-spacing: -0.02em;
}

.lpi__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lpi__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1rem;
  text-align: left;
}

.lpi__card {
  display: flex;
  flex-direction: column;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.lpi__card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.lpi__card-icon {
  font-size: 0.95rem;
}

.lpi__card-title {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--neon-gold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.lpi__items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}

.lpi__items li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.lpi__item-name {
  font-size: 0.72rem;
  color: var(--white-50);
}

.lpi__item-value {
  font-size: 0.72rem;
  color: var(--pure-white);
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.lpi__card-subtotal {
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

.lpi__card-subtotal span:last-child {
  color: var(--white-70);
  font-variant-numeric: tabular-nums;
}

.lpi__total {
  text-align: center;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-lg);
  background: rgba(212, 175, 55, 0.05);
  border: 2px solid var(--neon-gold);
  box-shadow:
    0 0 30px rgba(212, 175, 55, 0.15),
    0 0 80px rgba(212, 175, 55, 0.05);
}

.lpi__total-label {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--white-50);
  margin-bottom: 0.25rem;
}

.lpi__total-price {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--neon-gold);
  letter-spacing: -0.03em;
  text-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
}

.lpi__total-desc {
  font-size: 0.72rem;
  color: var(--white-30);
  margin-top: 0.15rem;
}
</style>
