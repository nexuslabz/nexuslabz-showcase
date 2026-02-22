<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="consulting" :class="{ active }">
    <div class="consulting__glow" />

    <div class="consulting__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('consulting.tag') }}</span>

      <h2 class="consulting__title animate-in delay-1" :class="{ visible: active }">
        {{ t('consulting.title') }}
      </h2>

      <p class="consulting__subtitle animate-in delay-1" :class="{ visible: active }">
        {{ t('consulting.subtitle') }}
      </p>

      <div class="consulting__box glass glow-gold animate-in delay-2" :class="{ visible: active }">
        <p>{{ t('consulting.desc') }}</p>
        <div class="consulting__divider" />
        <p class="consulting__highlight">{{ t('consulting.highlight') }}</p>
      </div>

      <div class="consulting__features">
        <div
          v-for="(f, i) in t('consulting.features')"
          :key="f.text"
          class="consulting__feature glass animate-in"
          :class="['delay-' + (i + 3), { visible: active }]"
        >
          <span class="consulting__feature-icon">{{ f.icon }}</span>
          <span>{{ f.text }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.consulting {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.consulting__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

.consulting__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.consulting__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.consulting__subtitle {
  font-size: 1rem;
  color: var(--neon-gold);
  font-weight: 500;
}

.consulting__box {
  padding: 2rem 2.5rem;
  border-radius: var(--radius-lg);
  width: 100%;
}

.consulting__box p {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--white-70);
}

.consulting__divider {
  width: 40px;
  height: 2px;
  background: var(--neon-gold);
  margin: 1rem 0;
}

.consulting__highlight {
  font-weight: 500;
  color: var(--neon-gold) !important;
  font-style: italic;
}

.consulting__features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  width: 100%;
  margin-top: 0.25rem;
}

.consulting__feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.1rem;
  border-radius: var(--radius-md);
  font-size: 0.88rem;
  color: var(--white-70);
}

.consulting__feature-icon {
  font-size: 1rem;
}
</style>
