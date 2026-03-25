<script setup>
defineProps({ active: Boolean });

const timeline = [
  { num: '1', label: 'Aprovação da proposta' },
  { num: '2', label: 'Assinatura do contrato' },
  { num: '3', label: 'Pagamento e emissão de NF' },
  { num: '4', label: 'Kickoff e discovery' },
  { num: '5', label: 'Design e protótipo' },
  { num: '6', label: 'Desenvolvimento e integrações' },
  { num: '7', label: 'Revisão final e ajustes' },
  { num: '8', label: 'Lançamento e início do suporte' },
];
</script>

<template>
  <section class="cta">
    <div class="cta__bg">
      <div class="cta__glow cta__glow--1" />
      <div class="cta__glow cta__glow--2" />
      <div class="cta__glow cta__glow--3" />
    </div>

    <div class="cta__content">
      <h2 class="cta__title">
        Vamos colocar o Nutrigen no<br />
        <span class="cta__highlight">digital</span> juntos?
      </h2>

      <div class="cta__timeline">
        <div class="cta__timeline-row">
          <div v-for="(step, i) in timeline.slice(0, 4)" :key="i" class="cta__step">
            <div class="cta__step-num">{{ step.num }}</div>
            <div class="cta__step-label">{{ step.label }}</div>
            <div v-if="i < 3" class="cta__step-connector" />
          </div>
        </div>
        <div class="cta__timeline-row">
          <div v-for="(step, i) in timeline.slice(4)" :key="i + 4" class="cta__step">
            <div class="cta__step-num">{{ step.num }}</div>
            <div class="cta__step-label">{{ step.label }}</div>
            <div v-if="i < 3" class="cta__step-connector" />
          </div>
        </div>
      </div>

      <div class="cta__offers">
        <div class="cta__offer-card">
          <span class="cta__offer-badge">Oferta 1</span>
          <h3 class="cta__offer-name">Ecossistema Completo</h3>
          <div class="cta__offer-details">
            <div class="cta__offer-detail">
              <span class="cta__info-icon">⏱️</span>
              <span>16 semanas</span>
            </div>
            <div class="cta__offer-detail">
              <span class="cta__info-icon">🛡️</span>
              <span>6 meses Nexus Gold</span>
            </div>
            <div class="cta__offer-detail">
              <span class="cta__info-icon">💳</span>
              <span>A partir de R$ 15.400</span>
            </div>
          </div>
        </div>
        <div class="cta__offer-card cta__offer-card--lp">
          <span class="cta__offer-badge">Oferta 2</span>
          <h3 class="cta__offer-name">Landing Page</h3>
          <div class="cta__offer-details">
            <div class="cta__offer-detail">
              <span class="cta__info-icon">⏱️</span>
              <span>8 semanas</span>
            </div>
            <div class="cta__offer-detail">
              <span class="cta__info-icon">🛡️</span>
              <span>3 meses Nexus Gold</span>
            </div>
            <div class="cta__offer-detail">
              <span class="cta__info-icon">💳</span>
              <span>A partir de R$ 7.000</span>
            </div>
          </div>
        </div>
      </div>

      <p class="cta__payment-note">Pagamento via PIX ou Lucre+ (até 12x)</p>

      <div class="cta__contact">
        <img src="@assets/logos/logo-full-no-bg-white.png" alt="Nexus Labz" class="cta__logo" />
        <div class="cta__links">
          <a href="https://nexuslabz.co" target="_blank" rel="noopener">nexuslabz.co</a>
          <span class="cta__sep">·</span>
          <a href="mailto:rcgimenez@nexuslabz.co">rcgimenez@nexuslabz.co</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  position: relative;
  padding: 3rem;
  overflow: hidden;
}

.cta__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta__glow--1 {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cta__glow--2 {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  bottom: -80px;
  left: -80px;
}

.cta__glow--3 {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  top: -50px;
  right: -50px;
}

.cta__content {
  position: relative;
  z-index: 1;
  max-width: 850px;
  width: 100%;
  text-align: center;
}

.cta__title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 2rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.cta__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta__timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 2rem;
}

.cta__timeline-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta__step {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cta__step-num {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--neon-gold);
  flex-shrink: 0;
}

.cta__step-label {
  font-size: 0.75rem;
  color: var(--white-50);
  white-space: nowrap;
}

.cta__step-connector {
  width: 24px;
  height: 1px;
  background: var(--white-15);
  margin: 0 0.4rem;
}

.cta__offers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1rem;
}

.cta__offer-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1rem;
  text-align: left;
  position: relative;
}

.cta__offer-card--lp {
  background: rgba(212, 175, 55, 0.03);
  border-color: rgba(212, 175, 55, 0.15);
}

.cta__offer-badge {
  display: inline-block;
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  color: var(--neon-gold);
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.15rem 0.55rem;
  border-radius: 100px;
  margin-bottom: 0.5rem;
}

.cta__offer-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.75rem;
}

.cta__offer-details {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.cta__offer-detail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: var(--white-50);
}

.cta__info-icon {
  font-size: 0.9rem;
  flex-shrink: 0;
}

.cta__payment-note {
  font-size: 0.72rem;
  color: var(--white-30);
  margin-bottom: 2rem;
}

.cta__contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.cta__logo {
  height: 48px;
  opacity: 0.5;
}

.cta__links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
}

.cta__links a {
  color: var(--white-30);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.cta__links a:hover {
  color: var(--neon-gold);
}

.cta__sep {
  color: var(--white-15);
}
</style>
