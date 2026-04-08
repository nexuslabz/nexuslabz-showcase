<script setup>
defineProps({ active: Boolean });

const concepts = [
  {
    icon: '✒️',
    title: 'Monograma clássico',
    desc: 'C e H entrelaçados criam um selo de identidade pessoal.',
  },
  {
    icon: '👑',
    title: 'Tipografia serifada',
    desc: 'Serifas transmitem tradição, autoridade e expertise.',
  },
  {
    icon: '🌗',
    title: 'Dupla versão',
    desc: 'Fundo claro e escuro para qualquer contexto de uso.',
  },
];
</script>

<template>
  <section class="model">
    <div class="model__bg">
      <div class="model__glow model__glow--1" />
      <div class="model__glow model__glow--2" />
    </div>

    <div class="model__content">
      <span class="tag">Modelo 02</span>

      <h2 class="model__title">
        <span class="model__highlight">Carolina Hentz</span> · Monograma Serifado
      </h2>

      <p class="model__subtitle">
        Iniciais C e H entrelaçadas com tipografia serifada. Elegância e sofisticação para uma marca
        pessoal forte.
      </p>

      <div class="model__showcase">
        <div class="model__card-group">
          <div class="model__card model__card--dark">
            <img
              src="@assets/logos/vitale/modelo02-fundo-escuro.png"
              alt="Modelo 02 - Fundo Escuro"
              class="model__logo"
            />
          </div>
          <span class="model__card-label">Fundo Escuro</span>
        </div>

        <div class="model__card-group">
          <div class="model__card model__card--light">
            <img
              src="@assets/logos/vitale/modelo02-fundo-claro.png"
              alt="Modelo 02 - Fundo Claro"
              class="model__logo"
            />
          </div>
          <span class="model__card-label">Fundo Claro</span>
        </div>
      </div>

      <div class="model__concepts">
        <div v-for="c in concepts" :key="c.title" class="model__concept">
          <span class="model__concept-icon">{{ c.icon }}</span>
          <strong>{{ c.title }}</strong>
          <p>{{ c.desc }}</p>
        </div>
      </div>

      <div class="model__typography">
        <div class="model__type-item">
          <span class="model__type-label">Títulos</span>
          <span class="model__type-font" style="font-family: 'Cinzel', serif">Cinzel</span>
        </div>
        <div class="model__type-divider" />
        <div class="model__type-item">
          <span class="model__type-label">Corpo</span>
          <span class="model__type-font" style="font-family: 'Cormorant Garamond', serif"
            >Cormorant Garamond</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.model {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  position: relative;
  padding: 2rem 3rem;
}

.model__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.model__glow--1 {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  top: 20%;
  left: 25%;
}

.model__glow--2 {
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  bottom: 15%;
  right: 25%;
}

.model__content {
  position: relative;
  z-index: 1;
  max-width: 850px;
  width: 100%;
  text-align: center;
}

.model__title {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1rem 0 0.4rem;
}

.model__highlight {
  color: var(--neon-gold);
}

.model__subtitle {
  font-size: 0.85rem;
  color: var(--white-50);
  max-width: 500px;
  margin: 0 auto 1.5rem;
  line-height: 1.5;
}

.model__showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.model__card-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.model__card-label {
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--white-30);
}

.model__card {
  border-radius: var(--radius-lg);
  padding: 1.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.model__card--dark {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.model__card--light {
  background: var(--vitale-bg-light);
  border: 1px solid rgba(28, 28, 30, 0.08);
}

.model__logo {
  height: 180px;
  width: auto;
  object-fit: contain;
}

.model__concepts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.model__concept {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 0.65rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  text-align: center;
}

.model__concept-icon {
  font-size: 1.1rem;
}

.model__concept strong {
  font-size: 0.75rem;
  color: var(--pure-white);
}

.model__concept p {
  font-size: 0.68rem;
  color: var(--white-50);
  line-height: 1.4;
  margin: 0;
}

.model__typography {
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  padding: 0.65rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
}

.model__type-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
}

.model__type-label {
  font-size: 0.58rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--white-30);
}

.model__type-font {
  font-size: 1.05rem;
  color: var(--white-70);
}

.model__type-divider {
  width: 1px;
  height: 30px;
  background: var(--white-08);
}
</style>
