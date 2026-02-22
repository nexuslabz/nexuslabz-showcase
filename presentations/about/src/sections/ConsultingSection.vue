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

      <div class="consulting__grid">
        <div
          v-for="(card, i) in t('consulting.cards')"
          :key="i"
          class="consulting__card card animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
        >
          <div class="consulting__card-header">
            <span class="consulting__card-icon">{{ card.icon }}</span>
            <h3>{{ card.title }}</h3>
          </div>
          <p class="consulting__card-lead">{{ card.lead }}</p>
          <p>{{ card.desc }}</p>
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
  align-items: center;
  gap: 2.5rem;
  padding: 3rem;
  max-width: 900px;
  z-index: 1;
}

.consulting__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  width: 100%;
}

.consulting__card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2rem;
}

.consulting__card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.consulting__card-icon {
  font-size: 1.4rem;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neon-gold-08);
  border-radius: var(--radius-md);
}

.consulting__card h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--pure-white);
}

.consulting__card-lead {
  font-size: 0.95rem;
  color: var(--neon-gold);
  font-weight: 500;
}

.consulting__card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--white-50);
}
</style>
