<script setup>
defineProps({ active: Boolean });
</script>

<template>
  <section class="current">
    <div class="current__bg">
      <div class="current__glow" />
    </div>

    <div class="current__content">
      <span class="tag">Ponto de Partida</span>

      <h2 class="current__title">Marca <span class="current__highlight">atual.</span></h2>

      <p class="current__subtitle">A identidade visual que acompanha a Vitale hoje.</p>

      <div class="current__showcase">
        <div class="current__logo-card">
          <img
            src="@assets/logos/vitale/vitale-logo.png"
            alt="Vitale Logo Atual"
            class="current__logo"
          />
        </div>
      </div>

      <p class="current__note">
        A proposta é evoluir essa identidade, reforçando o posicionamento da
        <strong>Carolina Hentz</strong> como referência em Pilates.
      </p>
    </div>
  </section>
</template>

<style scoped>
.current {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  position: relative;
  padding: 2rem 3rem;
}

.current__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.current__glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.current__content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  width: 100%;
  text-align: center;
}

.current__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.5rem;
}

.current__highlight {
  color: var(--neon-gold);
}

.current__subtitle {
  font-size: 0.95rem;
  color: var(--white-50);
  margin-bottom: 2rem;
}

.current__showcase {
  display: flex;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.current__logo-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: 2rem 3.5rem;
}

.current__logo {
  height: 280px;
  width: auto;
  object-fit: contain;
}

.current__note {
  font-size: 0.85rem;
  color: var(--white-30);
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.6;
}

.current__note strong {
  color: var(--neon-gold);
}
</style>
