<script setup>
defineProps({ active: Boolean });

const timeline = [
  { num: '1', label: 'Aprovação da proposta' },
  { num: '2', label: 'Kickoff & discovery' },
  { num: '3', label: 'Design & prototipação' },
  { num: '4', label: 'Desenvolvimento & integração' },
  { num: '5', label: 'Revisão & ajustes' },
  { num: '6', label: 'Lançamento + 6 meses de suporte' },
];
</script>

<template>
  <section class="cta">
    <div class="cta__bg">
      <div class="cta__glow cta__glow--1" />
      <div class="cta__glow cta__glow--2" />
    </div>

    <div class="cta__content">
      <span class="tag">Próximos Passos</span>

      <h2 class="cta__title">
        Vamos construir o futuro do<br />
        <span class="text-gold text-glow-gold">Nutrigen</span> juntos?
      </h2>

      <div class="cta__timeline">
        <div class="cta__timeline-row">
          <div v-for="(step, i) in timeline.slice(0, 3)" :key="i" class="cta__step">
            <div class="cta__step-num">{{ step.num }}</div>
            <div class="cta__step-label">{{ step.label }}</div>
            <div v-if="i < 2" class="cta__step-connector" />
          </div>
        </div>
        <div class="cta__timeline-row">
          <div v-for="(step, i) in timeline.slice(3)" :key="i + 3" class="cta__step">
            <div class="cta__step-num">{{ step.num }}</div>
            <div class="cta__step-label">{{ step.label }}</div>
            <div v-if="i < 2" class="cta__step-connector" />
          </div>
        </div>
      </div>

      <div class="cta__info">
        <div class="cta__info-item">
          <span class="cta__info-icon">⏱️</span>
          <div>
            <strong>Prazo estimado</strong>
            <p>16 semanas (4 meses)</p>
          </div>
        </div>
        <div class="cta__info-item">
          <span class="cta__info-icon">💳</span>
          <div>
            <strong>Pagamento</strong>
            <p>PIX ou Mercado Pago (até 3x)</p>
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
}

.cta__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.cta__glow {
  position: absolute;
  border-radius: 50%;
}

.cta__glow--1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
  bottom: -100px;
  left: -100px;
}

.cta__glow--2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  top: -50px;
  right: -50px;
}

.cta__content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  width: 100%;
  text-align: center;
}

.cta__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 2.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.cta__timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
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
  gap: 3rem;
  margin-bottom: 2.5rem;
}

.cta__info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.cta__info-icon {
  font-size: 1.5rem;
}

.cta__info-item strong {
  display: block;
  font-size: 0.82rem;
  color: var(--pure-white);
  margin-bottom: 0.15rem;
}

.cta__info-item p {
  font-size: 0.75rem;
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
