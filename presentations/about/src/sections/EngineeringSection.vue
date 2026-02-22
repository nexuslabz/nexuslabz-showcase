<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="eng" :class="{ active }">
    <div class="eng__bg-dots" />

    <div class="eng__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('engineering.tag') }}</span>

      <h2 class="eng__title animate-in delay-1" :class="{ visible: active }">
        {{ t('engineering.title') }}
      </h2>

      <p class="eng__subtitle animate-in delay-2" :class="{ visible: active }">
        {{ t('engineering.subtitle') }}
      </p>

      <div class="eng__features">
        <div
          v-for="(feat, i) in t('engineering.features')"
          :key="i"
          class="eng__feature glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <div class="eng__feature-dot" />
          <p>{{ feat }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.eng {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.eng__bg-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--white-05) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  opacity: 0.5;
}

.eng__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.eng__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--pure-white);
}

.eng__subtitle {
  font-size: 1.1rem;
  color: var(--neon-gold);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.eng__features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.eng__feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
}

.eng__feature-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--neon-gold);
  margin-top: 0.5rem;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
}

.eng__feature p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--white-70);
}
</style>
