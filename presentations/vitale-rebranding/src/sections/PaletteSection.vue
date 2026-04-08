<script setup>
defineProps({ active: Boolean });

const backgrounds = [
  { name: 'Claro', hex: '#f4f1de', textColor: '#1c1c1e' },
  { name: 'Escuro', hex: '#1c1c1e', textColor: '#ffffff' },
];

const accents = [
  { name: 'Roxo', hex: '#a886d1' },
  { name: 'Azul', hex: '#8aa4cc' },
  { name: 'Verde', hex: '#6cc2c8' },
];
</script>

<template>
  <section class="palette">
    <div class="palette__bg">
      <div class="palette__glow palette__glow--1" />
      <div class="palette__glow palette__glow--2" />
    </div>

    <div class="palette__content">
      <span class="tag">Identidade Visual</span>

      <h2 class="palette__title">Nova <span class="palette__highlight">paleta de cores.</span></h2>

      <p class="palette__subtitle">Cores que transmitem equilíbrio, sofisticação e bem-estar.</p>

      <div class="palette__groups">
        <div class="palette__group">
          <h3 class="palette__group-title">Fundos</h3>
          <div class="palette__swatches palette__swatches--bg">
            <div
              v-for="bg in backgrounds"
              :key="bg.hex"
              class="palette__swatch palette__swatch--large"
              :style="{ background: bg.hex }"
            >
              <span class="palette__swatch-name" :style="{ color: bg.textColor }">{{
                bg.name
              }}</span>
              <span class="palette__swatch-hex" :style="{ color: bg.textColor, opacity: 0.6 }">{{
                bg.hex
              }}</span>
            </div>
          </div>
        </div>

        <div class="palette__group">
          <h3 class="palette__group-title">Destaques</h3>
          <div class="palette__swatches palette__swatches--accents">
            <div
              v-for="accent in accents"
              :key="accent.hex"
              class="palette__swatch palette__swatch--accent"
              :style="{ background: accent.hex }"
            >
              <span class="palette__swatch-name" style="color: #1c1c1e">{{ accent.name }}</span>
              <span class="palette__swatch-hex" style="color: rgba(28, 28, 30, 0.6)">{{
                accent.hex
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="palette__gradient-bar" />

      <p class="palette__note">
        O gradiente roxo-azul-verde é usado em elementos de destaque, logotipos e acentos visuais.
      </p>
    </div>
  </section>
</template>

<style scoped>
.palette {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  position: relative;
  padding: 2rem 3rem;
}

.palette__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.palette__glow--1 {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  top: -100px;
  left: -100px;
}

.palette__glow--2 {
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  bottom: -80px;
  right: -80px;
}

.palette__content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 100%;
  text-align: center;
}

.palette__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.5rem;
}

.palette__highlight {
  color: var(--neon-gold);
}

.palette__subtitle {
  font-size: 0.95rem;
  color: var(--white-50);
  margin-bottom: 2.5rem;
}

.palette__groups {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.palette__group-title {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--white-30);
  margin-bottom: 0.75rem;
}

.palette__swatches--bg {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.palette__swatches--accents {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.palette__swatch {
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  border: 1px solid var(--white-08);
}

.palette__swatch--large {
  padding: 2rem 1.5rem;
}

.palette__swatch--accent {
  padding: 1.75rem 1rem;
}

.palette__swatch-name {
  font-size: 0.85rem;
  font-weight: 600;
}

.palette__swatch-hex {
  font-size: 0.72rem;
  font-family: monospace;
  letter-spacing: 0.05em;
}

.palette__gradient-bar {
  height: 4px;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--vitale-purple), var(--vitale-blue), var(--vitale-teal));
  margin-bottom: 1rem;
}

.palette__note {
  font-size: 0.8rem;
  color: var(--white-30);
  line-height: 1.5;
}
</style>
