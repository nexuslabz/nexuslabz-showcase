<script setup>
defineProps({ active: Boolean });
</script>

<template>
  <section class="cover">
    <div class="cover__bg">
      <div class="cover__gradient" />
      <div class="cover__grid" />
    </div>

    <div class="cover__content">
      <div class="cover__badge">
        <span class="tag">Proposta Comercial</span>
      </div>

      <div class="cover__logos">
        <img
          src="@assets/logos/tech-experts/logo-main.png"
          alt="Tech Experts Mentory"
          class="cover__logo cover__logo--client"
        />
        <span class="cover__x">&times;</span>
        <img
          src="@assets/logos/logo-full-no-bg-white.png"
          alt="Nexus Labz"
          class="cover__logo cover__logo--nexus"
        />
      </div>

      <h1 class="cover__title">
        Ecossistema Digital<br />
        <span class="cover__highlight">Tech Experts Mentory</span>
      </h1>

      <p class="cover__subtitle">Hub de Autoridade + Plataforma de Produtos Digitais</p>

      <span class="tag">2026</span>
    </div>
  </section>
</template>

<style scoped>
.cover {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.cover__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.cover__gradient {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cover__grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--white-08) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.5;
}

.cover__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
}

.cover__badge {
  margin-bottom: 2.5rem;
}

.cover__logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.cover__logo--client {
  height: 110px;
  width: auto;
  object-fit: contain;
  border-radius: 12px;
}

.cover__logo--nexus {
  height: 90px;
  width: auto;
  object-fit: contain;
}

.cover__x {
  font-size: 2rem;
  color: var(--white-30);
  font-weight: 300;
}

.cover__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--pure-white);
  margin-bottom: 1rem;
}

.cover__highlight {
  color: var(--neon-gold);
  text-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
}

.cover__subtitle {
  font-size: 1rem;
  color: var(--white-50);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.cover .tag {
  font-size: 1.05rem;
  padding: 0.35rem 1rem;
}
</style>
