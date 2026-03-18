<script setup>
defineProps({ active: Boolean });
</script>

<template>
  <section class="offer">
    <div class="offer__bg">
      <div class="offer__glow" />
    </div>

    <div class="offer__content">
      <span class="tag">Oferta Especial</span>

      <h2 class="offer__title">
        Condição exclusiva de <span class="text-gold text-glow-gold">1ª parceria</span>
      </h2>

      <div class="offer__urgency">
        <span class="offer__urgency-icon">⏳</span>
        <span>Válida por <strong>48 horas</strong> após esta apresentação</span>
      </div>

      <div class="offer__anchor">
        <span class="offer__anchor-label">Valor original do pacote</span>
        <span class="offer__anchor-price">R$ 22.000</span>
      </div>

      <div class="offer__cards">
        <div class="offer__card offer__card--installment">
          <div class="offer__card-header">Parcelado</div>
          <div class="offer__card-price">R$ 18.700</div>
          <div class="offer__card-detail">até 12x de R$ 1.870,01</div>
          <div class="offer__card-method">via Link de Pagamento · Lucre+</div>
          <div class="offer__card-discount">
            <span class="offer__card-discount-value">- R$ 3.300</span>
            <span class="offer__card-discount-pct">15% OFF</span>
          </div>
        </div>

        <div class="offer__card offer__card--pix">
          <div class="offer__card-badge">Melhor Condição</div>
          <div class="offer__card-header">À Vista · PIX</div>
          <div class="offer__card-price">R$ 15.400</div>
          <div class="offer__card-detail">Transferência única via PIX</div>
          <div class="offer__card-method">Pagamento imediato, sem parcelas</div>
          <div class="offer__card-discount">
            <span class="offer__card-discount-value">- R$ 6.600</span>
            <span class="offer__card-discount-pct">30% OFF</span>
          </div>
        </div>
      </div>

      <p class="offer__roi">
        💡 Apenas <strong>~9 pacientes</strong> no funil completo já trazem o retorno do
        investimento!
      </p>

      <p class="offer__note">
        As duas condições incluem tudo o que está no pacote completo: infraestrutura, SEO & GEO,
        guia da marca e 6 meses de suporte profissional.
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
}

.offer__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.offer__glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.offer__content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 100%;
  text-align: center;
}

.offer__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 1.5rem;
  letter-spacing: -0.02em;
}

.offer__urgency {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(212, 175, 55, 0.06);
  border: 1px solid var(--neon-gold-15);
  border-radius: 100px;
  font-size: 0.85rem;
  color: var(--white-70);
  margin-bottom: 2rem;
}

.offer__urgency-icon {
  font-size: 1rem;
}

.offer__urgency strong {
  color: var(--neon-gold);
}

.offer__anchor {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.offer__anchor-label {
  font-size: 0.82rem;
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
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.offer__card {
  border-radius: var(--radius-lg);
  padding: 2rem 1.5rem;
  text-align: center;
  position: relative;
}

.offer__card--installment {
  background: var(--white-05);
  border: 1px solid var(--white-10, rgba(255, 255, 255, 0.1));
  box-shadow:
    0 0 15px rgba(212, 175, 55, 0.05),
    0 0 40px rgba(212, 175, 55, 0.02);
}

.offer__card--pix {
  background: var(--neon-gold-08);
  border: 2px solid var(--neon-gold);
  box-shadow:
    0 0 30px rgba(212, 175, 55, 0.2),
    0 0 80px rgba(212, 175, 55, 0.08);
  transform: scale(1.03);
}

.offer__card--pix .offer__card-price {
  font-size: 3.2rem;
  color: var(--neon-gold);
  text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
}

.offer__card-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--neon-gold);
  color: var(--nexus-grey);
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.3rem 1rem;
  border-radius: 100px;
  white-space: nowrap;
}

.offer__card-header {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--neon-gold);
  margin-bottom: 1rem;
}

.offer__card-price {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--pure-white);
  letter-spacing: -0.03em;
  margin-bottom: 0.25rem;
}

.offer__card-detail {
  font-size: 0.88rem;
  color: var(--white-70);
  margin-bottom: 0.25rem;
}

.offer__card-method {
  font-size: 0.72rem;
  color: var(--white-30);
  margin-bottom: 1.25rem;
}

.offer__card-discount {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  border-radius: 100px;
  padding: 0.35rem 0.85rem;
}

.offer__card-discount-value {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--neon-gold-glow);
}

.offer__card-discount-pct {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--neon-gold);
}

.offer__roi {
  text-align: center;
  font-size: 0.85rem;
  color: var(--white-50);
  margin-bottom: 1rem;
}

.offer__roi strong {
  color: var(--neon-gold);
}

.offer__note {
  font-size: 0.78rem;
  color: var(--white-30);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}
</style>
