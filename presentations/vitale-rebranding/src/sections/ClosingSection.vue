<script setup>
defineProps({ active: Boolean });
</script>

<template>
  <section class="closing">
    <div class="closing__bg">
      <div class="closing__glow closing__glow--1" />
      <div class="closing__glow closing__glow--2" />
    </div>

    <div class="closing__content">
      <h2 class="closing__title">
        Qual direção combina<br />
        mais com <span class="closing__highlight">você</span>?
      </h2>

      <p class="closing__subtitle">
        Cada modelo pode ser refinado, combinado e adaptado. O próximo passo é definir a direção que
        mais representa você.
      </p>

      <div class="closing__models">
        <div class="closing__model-pill">01 · Manter o brand atual</div>
        <div class="closing__model-pill">02 · Novo Símbolo Vitale</div>
        <div class="closing__model-pill">03 · CH Serifado</div>
        <div class="closing__model-pill">04 · H Geométrico e Minimalista</div>
        <div class="closing__model-pill">05 · CH Cursivo</div>
      </div>

      <div class="closing__gradient-bar" />

      <div class="closing__contact">
        <img src="@assets/logos/logo-full-no-bg-white.png" alt="Nexus Labz" class="closing__logo" />
        <div class="closing__links">
          <a href="https://nexuslabz.co" target="_blank" rel="noopener">nexuslabz.co</a>
          <span class="closing__sep">·</span>
          <a href="mailto:rcgimenez@nexuslabz.co">rcgimenez@nexuslabz.co</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.closing {
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

.closing__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.closing__glow--1 {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.closing__glow--2 {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  bottom: -80px;
  left: -80px;
}

.closing__content {
  position: relative;
  z-index: 1;
  max-width: 750px;
  width: 100%;
  text-align: center;
}

.closing__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.closing__highlight {
  color: var(--neon-gold);
  text-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
}

.closing__subtitle {
  font-size: 0.95rem;
  color: var(--white-50);
  line-height: 1.6;
  max-width: 550px;
  margin: 0 auto 2.5rem;
}

.closing__models {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.closing__model-pill {
  padding: 0.5rem 1.25rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--white-70);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  transition:
    border-color var(--transition-fast),
    color var(--transition-fast);
}

.closing__model-pill:hover {
  border-color: var(--neon-gold-15);
  color: var(--neon-gold);
}

.closing__gradient-bar {
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--neon-gold-dim), var(--neon-gold));
  max-width: 200px;
  margin: 0 auto 2.5rem;
}

.closing__contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.closing__logo {
  height: 48px;
  opacity: 0.5;
}

.closing__links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
}

.closing__links a {
  color: var(--white-30);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.closing__links a:hover {
  color: var(--neon-gold);
}

.closing__sep {
  color: var(--white-15);
}
</style>
