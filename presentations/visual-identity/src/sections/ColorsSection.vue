<script setup>
import { inject, computed } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const colorData = [
  { hex: '#13140F', rgb: '19, 20, 15', cmyk: '5, 0, 25, 92', swatch: '#13140f', border: true },
  { hex: '#D4AF37', rgb: '212, 175, 55', cmyk: '0, 17, 74, 17', swatch: '#d4af37', border: false },
  { hex: '#FFFFFF', rgb: '255, 255, 255', cmyk: '0, 0, 0, 0', swatch: '#ffffff', border: false },
];

const colors = computed(() =>
  colorData.map((c, i) => ({
    ...c,
    name: t('colors.items')[i].name,
    usage: t('colors.items')[i].usage,
  })),
);
</script>

<template>
  <section class="colors" :class="{ active }">
    <div class="colors__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('colors.tag') }}</span>

      <h2 class="colors__title animate-in delay-1" :class="{ visible: active }">
        {{ t('colors.title') }}
      </h2>

      <div class="colors__grid">
        <div
          v-for="(c, i) in colors"
          :key="c.hex"
          class="colors__card animate-scale"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <div
            class="colors__swatch"
            :style="{
              backgroundColor: c.swatch,
              border: c.border ? '1px solid var(--nexus-grey-border)' : 'none',
            }"
          />

          <h3>{{ c.name }}</h3>

          <div class="colors__values">
            <div class="colors__value">
              <span class="colors__label">HEX</span>
              <code>{{ c.hex }}</code>
            </div>
            <div class="colors__value">
              <span class="colors__label">RGB</span>
              <code>{{ c.rgb }}</code>
            </div>
            <div class="colors__value">
              <span class="colors__label">CMYK</span>
              <code>{{ c.cmyk }}</code>
            </div>
          </div>

          <p class="colors__usage">{{ c.usage }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.colors {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
}

.colors__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 1000px;
  z-index: 1;
}

.colors__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.colors__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  width: 100%;
}

.colors__card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
}

.colors__swatch {
  width: 100%;
  height: 100px;
  border-radius: var(--radius-md);
}

.colors__card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--pure-white);
  margin-top: 0.25rem;
}

.colors__values {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.colors__value {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.colors__label {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-30);
  width: 36px;
  flex-shrink: 0;
}

.colors__value code {
  font-size: 0.78rem;
  padding: 0.1rem 0.4rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-sm);
  color: var(--white-70);
  font-family: 'Fira Code', monospace;
}

.colors__usage {
  font-size: 0.75rem;
  color: var(--white-30);
  margin-top: 0.15rem;
  font-style: italic;
}
</style>
