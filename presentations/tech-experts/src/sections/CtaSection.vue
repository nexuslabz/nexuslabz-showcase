<script setup>
defineProps({ active: Boolean });

const timeline = [
  { num: '1', label: 'Aprovação da proposta' },
  { num: '2', label: 'Assinatura do contrato' },
  { num: '3', label: 'Pagamento e emissão de NF' },
  { num: '4', label: 'Kickoff & discovery' },
  { num: '5', label: 'Design & prototipação' },
  { num: '6', label: 'Desenvolvimento & integrações' },
  { num: '7', label: 'Revisão final & ajustes' },
  { num: '8', label: 'Lançamento + início do suporte' },
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
        Vamos construir o ecossistema da<br />
        <span class="cta__highlight">Tech Experts</span> juntos?
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

      <div class="cta__info">
        <div class="cta__info-item">
          <span class="cta__info-icon">⏱️</span>
          <div>
            <strong>Prazo estimado</strong>
            <p>20 semanas (~5 meses)</p>
          </div>
        </div>
        <div class="cta__info-item">
          <span class="cta__info-icon">💳</span>
          <div>
            <strong>Pagamento</strong>
            <p>PIX ou Lucre+ (até 12x)</p>
          </div>
        </div>
        <div class="cta__info-item">
          <span class="cta__info-icon">🛡️</span>
          <div>
            <strong>Suporte</strong>
            <p>6 meses de Nexus Gold incluso</p>
          </div>
        </div>
      </div>

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

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
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

.cta__info {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md, 8px);
}

.cta__info-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.cta__info-icon {
  font-size: 1.3rem;
}

.cta__info-item strong {
  display: block;
  font-size: 0.8rem;
  color: var(--pure-white);
  margin-bottom: 0.1rem;
}

.cta__info-item p {
  font-size: 0.72rem;
  color: var(--white-50);
  margin: 0;
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
