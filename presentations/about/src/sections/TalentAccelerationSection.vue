<script setup>
import { inject } from 'vue';
import qawbLogo from '@assets/logos/logo-qa-without-borders-mentory-no-bg.png';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="accel" :class="{ active }">
    <div class="accel__bg-dots" />

    <div class="accel__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('acceleration.tag') }}</span>

      <h2 class="accel__title animate-in delay-1" :class="{ visible: active }">
        {{ t('acceleration.title') }}
      </h2>

      <p class="accel__subtitle animate-in delay-1" :class="{ visible: active }">
        {{ t('acceleration.subtitle') }}
      </p>

      <div class="accel__main animate-in delay-2" :class="{ visible: active }">
        <div class="accel__box glass glow-gold">
          <p>{{ t('acceleration.desc') }}</p>
          <div class="accel__divider" />
          <p class="accel__highlight">{{ t('acceleration.highlight') }}</p>
        </div>

        <a href="https://qawithoutborders.com.br" target="_blank" class="accel__program glass">
          <img :src="qawbLogo" alt="QA Without Borders Mentory" class="accel__program-logo" />
          <div class="accel__program-info">
            <span class="accel__program-label">{{ t('acceleration.programLabel') }}</span>
            <span class="accel__program-name">QA Without Borders</span>
            <span class="accel__program-sub">— Mentory —</span>
          </div>
        </a>
      </div>

      <div class="accel__features">
        <div
          v-for="(f, i) in t('acceleration.features')"
          :key="f.text"
          class="accel__feature glass animate-in"
          :class="['delay-' + (i + 3), { visible: active }]"
        >
          <span class="accel__feature-icon">{{ f.icon }}</span>
          <span>{{ f.text }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.accel {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.accel__bg-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--white-05) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  opacity: 0.4;
}

.accel__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;
  padding: 2.5rem 5rem;
  max-width: 850px;
  z-index: 1;
}

.accel__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
}

.accel__subtitle {
  font-size: 0.95rem;
  color: var(--neon-gold);
  font-weight: 500;
}

.accel__main {
  display: flex;
  gap: 1.25rem;
  width: 100%;
}

.accel__box {
  flex: 1;
  padding: 1.5rem 2rem;
  border-radius: var(--radius-lg);
}

.accel__box p {
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--white-70);
}

.accel__divider {
  width: 40px;
  height: 2px;
  background: var(--neon-gold);
  margin: 0.75rem 0;
}

.accel__highlight {
  font-weight: 500;
  color: var(--neon-gold) !important;
  font-style: italic;
}

.accel__program {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  min-width: 200px;
  border: 1px solid var(--white-08);
}

.accel__program-logo {
  width: 140px;
  height: auto;
  filter: sepia(0.3) saturate(1.4) hue-rotate(10deg) brightness(0.9);
  transition: filter 0.3s ease;
}

.accel__program:hover .accel__program-logo {
  filter: sepia(0) saturate(1) brightness(1);
}

.accel__program-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
}

.accel__program-label {
  font-size: 0.5rem;
  color: var(--white-30);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.accel__program-name {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.accel__program-sub {
  font-size: 0.6rem;
  color: var(--neon-gold-dim);
  font-weight: 500;
  letter-spacing: 0.1em;
}

.accel__features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;
  width: 100%;
  margin-top: 0.15rem;
}

.accel__feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  color: var(--white-70);
}

.accel__feature-icon {
  font-size: 1rem;
}
</style>
