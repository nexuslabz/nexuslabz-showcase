<script setup>
import { ref } from 'vue';

defineProps({ active: Boolean });

const lockedParcelado = ref(true);
const lockedPix = ref(true);
const unlockingParcelado = ref(false);
const unlockingPix = ref(false);

function unlockCard(card) {
  if (card === 'parcelado' && lockedParcelado.value) {
    unlockingParcelado.value = true;
    setTimeout(() => {
      lockedParcelado.value = false;
      setTimeout(() => {
        unlockingParcelado.value = false;
      }, 400);
    }, 300);
  }
  if (card === 'pix' && lockedPix.value) {
    unlockingPix.value = true;
    setTimeout(() => {
      lockedPix.value = false;
      setTimeout(() => {
        unlockingPix.value = false;
      }, 400);
    }, 300);
  }
}
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
        <span class="offer__anchor-price">R$ 30.000</span>
      </div>

      <div class="offer__cards">
        <div class="offer__card-wrap" @click="unlockCard('parcelado')">
          <div
            class="offer__card offer__card--installment"
            :class="{ 'offer__card--locked': lockedParcelado }"
          >
            <div class="offer__ribbon">BRINDE</div>
            <div class="offer__card-header">Parcelado</div>
            <div class="offer__card-price">R$ 27.000</div>
            <div class="offer__card-detail">até 10x sem juros de R$ 2.700,00</div>
            <div class="offer__card-method">via Link de Pagamento · Mercado Pago</div>
            <div class="offer__card-discount">
              <span class="offer__card-discount-value">- R$ 3.000</span>
              <span class="offer__card-discount-pct">10% OFF</span>
            </div>
          </div>
          <div
            class="offer__lock"
            :class="{
              'offer__lock--unlocking': unlockingParcelado,
              'offer__lock--hidden': !lockedParcelado && !unlockingParcelado,
            }"
          >
            <svg
              v-if="!unlockingParcelado"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <svg
              v-else
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 5-5 5 5 0 0 1 5 5" />
            </svg>
          </div>
        </div>

        <div class="offer__card-wrap" @click="unlockCard('pix')">
          <div class="offer__card-badge" :class="{ 'offer__card-badge--locked': lockedPix }">
            Melhor Condição
          </div>
          <div class="offer__card offer__card--pix" :class="{ 'offer__card--locked': lockedPix }">
            <div class="offer__ribbon">BRINDE</div>
            <div class="offer__card-header">À Vista · PIX</div>
            <div class="offer__card-price">R$ 21.000</div>
            <div class="offer__card-detail">Transferência via PIX</div>
            <div class="offer__card-discount">
              <span class="offer__card-discount-value">- R$ 9.000</span>
              <span class="offer__card-discount-pct">30% OFF</span>
            </div>
          </div>
          <div
            class="offer__lock"
            :class="{
              'offer__lock--unlocking': unlockingPix,
              'offer__lock--hidden': !lockedPix && !unlockingPix,
            }"
          >
            <svg
              v-if="!unlockingPix"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <svg
              v-else
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 5-5 5 5 0 0 1 5 5" />
            </svg>
          </div>
        </div>
      </div>

      <div class="offer__roi">
        <span class="offer__roi-icon">💰</span>
        <p>
          Com apenas <strong>2 mentorados convertidos</strong> pelo funil digital, todo o
          investimento já se paga. A partir do terceiro, é <strong>lucro líquido</strong>.
        </p>
      </div>

      <p class="offer__note">
        As duas condições incluem o pacote completo: Hub + 5 LPs, infraestrutura, SEO e GEO e 6
        meses de Nexus Gold.
      </p>

      <div class="offer__bonus-note">
        <span>🎁</span>
        <span>Brinde: página de conversão simples para o <strong>Nutrigen</strong></span>
      </div>
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
  overflow: hidden;
}

.offer__card-wrap {
  position: relative;
  cursor: pointer;
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
  z-index: 30;
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

.offer__ribbon {
  position: absolute;
  right: -2.75rem;
  top: 1.25rem;
  z-index: 20;
  transform: rotate(45deg);
  white-space: nowrap;
  border-top: 1px solid #4caf50;
  border-bottom: 1px solid #4caf50;
  background: rgba(76, 175, 80, 0.85);
  padding: 0.35rem 3.5rem;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fff;
  box-shadow: 0 0 16px rgba(76, 175, 80, 0.3);
}

.offer__bonus-note {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.15rem;
  background: rgba(76, 175, 80, 0.08);
  border: 1px solid rgba(76, 175, 80, 0.2);
  border-radius: 100px;
  font-size: 0.82rem;
  color: var(--white-70);
  margin-top: 0.5rem;
}

.offer__bonus-note strong {
  color: #66bb6a;
}

.offer__note {
  font-size: 0.75rem;
  color: var(--white-30);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

.offer__card--locked {
  filter: blur(12px);
  user-select: none;
  transition: filter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.offer__card:not(.offer__card--locked) {
  filter: blur(0);
  transition: filter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.offer__card-badge--locked {
  filter: blur(6px);
  transition: filter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.offer__card-badge:not(.offer__card-badge--locked) {
  filter: blur(0);
  transition: filter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.offer__lock {
  position: absolute;
  inset: 0;
  z-index: 25;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white-50);
  pointer-events: none;
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.offer__lock svg {
  filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.15));
}

.offer__lock--unlocking {
  opacity: 1;
  transform: scale(1.1);
  color: var(--neon-gold);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    color 0.3s ease;
}

.offer__lock--hidden {
  opacity: 0;
  transform: scale(0.8);
  pointer-events: none;
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}
</style>
