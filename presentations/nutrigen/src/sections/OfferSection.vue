<script setup>
defineProps({ active: Boolean });
</script>

<template>
  <section class="offer">
    <div class="offer__bg">
      <div class="offer__glow offer__glow--1" />
      <div class="offer__glow offer__glow--2" />
    </div>

    <div class="offer__content">
      <span class="tag tag--nexus">Condição Especial</span>

      <h2 class="offer__title">Proposta de <span class="offer__highlight">1ª parceria.</span></h2>

      <div class="offer__urgency">
        <span>⏳</span>
        <span>Condição válida por <strong>48 horas</strong> após esta apresentação</span>
      </div>

      <div class="offer__anchor">
        <span class="offer__anchor-label">Valor original do pacote completo</span>
        <span class="offer__anchor-price">R$ 22.000</span>
      </div>

      <div class="offer__cards">
        <div class="offer__card offer__card--installment">
          <div class="offer__card-header">Parcelado</div>
          <div class="offer__card-price">R$ 18.700</div>
          <div class="offer__card-detail">até 12x de R$ 1.870,01</div>
          <div class="offer__card-method">Link de pagamento Lucre+</div>
          <div class="offer__card-discount">
            <span class="offer__card-discount-value">- R$ 3.300</span>
            <span class="offer__card-discount-pct">15% OFF</span>
          </div>
        </div>

        <div class="offer__card offer__card--pix">
          <div class="offer__card-badge">Melhor Condição</div>
          <div class="offer__card-header">À Vista via PIX</div>
          <div class="offer__card-price">R$ 15.400</div>
          <div class="offer__card-detail">Transferência única via PIX</div>
          <div class="offer__card-method">Pagamento imediato, sem parcelas</div>
          <div class="offer__card-discount">
            <span class="offer__card-discount-value">- R$ 6.600</span>
            <span class="offer__card-discount-pct">30% OFF</span>
          </div>
        </div>
      </div>

      <div class="offer__roi">
        <span class="offer__roi-icon">💰</span>
        <p>
          Com apenas <strong>~9 pacientes</strong> no funil completo, todo o investimento já se
          paga. A partir do próximo, é <strong>lucro líquido</strong>.
        </p>
      </div>

      <p class="offer__note">
        Nas duas opções você leva o pacote fechado: site, infraestrutura, busca no Google e nas IAs,
        e 6 meses de Nexus Gold.
      </p>
    </div>
  </section>
</template>

<style scoped>
.offer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  position: relative;
  padding: 2rem 3rem;
  overflow: hidden;
}

.offer__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.offer__glow--1 {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.offer__glow--2 {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  bottom: -80px;
  right: -80px;
}

.offer__content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 100%;
  text-align: center;
}

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
}

.offer__title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 1.25rem;
  letter-spacing: -0.02em;
}

.offer__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.offer__urgency {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.15rem;
  background: rgba(220, 70, 70, 0.08);
  border: 1px solid rgba(220, 70, 70, 0.2);
  border-radius: 100px;
  font-size: 0.82rem;
  color: var(--white-70);
  margin-bottom: 1.75rem;
}

.offer__urgency strong {
  color: #f07070;
}

.offer__anchor {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.offer__anchor-label {
  font-size: 0.8rem;
  color: var(--white-30);
}

.offer__anchor-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--white-30);
  text-decoration: line-through;
  letter-spacing: -0.02em;
}

.offer__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.offer__card {
  border-radius: var(--radius-lg);
  padding: 1.75rem 1.25rem;
  text-align: center;
  position: relative;
}

.offer__card--installment {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.offer__card--pix {
  background: rgba(212, 175, 55, 0.05);
  border: 2px solid var(--neon-gold);
  box-shadow:
    0 0 30px rgba(212, 175, 55, 0.18),
    0 0 80px rgba(212, 175, 55, 0.06);
  transform: scale(1.03);
}

.offer__card--pix .offer__card-price {
  font-size: 3rem;
  color: var(--neon-gold);
  text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
}

.offer__card-badge {
  position: absolute;
  top: -11px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--neon-gold);
  color: var(--nexus-grey);
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.85rem;
  border-radius: 100px;
  white-space: nowrap;
}

.offer__card-header {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--neon-gold);
  margin-bottom: 0.85rem;
}

.offer__card-price {
  font-size: 2.6rem;
  font-weight: 800;
  color: var(--pure-white);
  letter-spacing: -0.03em;
  margin-bottom: 0.2rem;
}

.offer__card-detail {
  font-size: 0.85rem;
  color: var(--white-70);
  margin-bottom: 0.2rem;
}

.offer__card-method {
  font-size: 0.7rem;
  color: var(--white-30);
  margin-bottom: 1rem;
}

.offer__card-discount {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  border-radius: 100px;
  padding: 0.3rem 0.75rem;
}

.offer__card-discount-value {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--neon-gold-glow);
}

.offer__card-discount-pct {
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--neon-gold);
}

.offer__roi {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1.25rem;
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  border-radius: var(--radius-md, 8px);
  text-align: left;
  margin-bottom: 1rem;
}

.offer__roi-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.offer__roi p {
  font-size: 0.85rem;
  color: var(--white-70);
  line-height: 1.5;
  margin: 0;
}

.offer__roi strong {
  color: var(--neon-gold);
}

.offer__note {
  font-size: 0.75rem;
  color: var(--white-30);
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.5;
}
</style>
