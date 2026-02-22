<script setup>
import { inject } from 'vue';
import NexusLogo from '@theme/components/NexusLogo.vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="cta" :class="{ active }">
    <div class="cta__glow" />
    <div class="cta__glow-bottom" />

    <div class="cta__content">
      <NexusLogo width="180" class="animate-scale" :class="{ visible: active }" />

      <h2 class="cta__title animate-in delay-1" :class="{ visible: active }">
        {{ t('cta.title') }}
      </h2>

      <p class="cta__desc animate-in delay-2" :class="{ visible: active }">
        {{ t('cta.desc') }}
      </p>

      <a
        href="https://nexuslabz.co"
        target="_blank"
        class="cta__button animate-in delay-3"
        :class="{ visible: active }"
      >
        nexuslabz.co
      </a>
    </div>

    <div class="cta__accent" />
  </section>
</template>

<style scoped>
.cta {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: var(--nexus-grey);
  overflow: hidden;
}

.cta__glow {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.cta__glow-bottom {
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.cta__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
}

.cta__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.cta__desc {
  font-size: 1.1rem;
  color: var(--white-50);
  max-width: 450px;
}

.cta__button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 2rem;
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  border-radius: 100px;
  color: var(--neon-gold);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  transition:
    background var(--transition-base),
    box-shadow var(--transition-base);
}

.cta__button:hover {
  background: var(--neon-gold-15);
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.15);
  color: var(--neon-gold-glow);
}

.cta__accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-gold), transparent);
}
</style>
