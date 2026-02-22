<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="purpose" :class="{ active }">
    <div class="purpose__glow" />

    <div class="purpose__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('purpose.tag') }}</span>

      <div class="purpose__blocks">
        <div class="purpose__block glass animate-in delay-1" :class="{ visible: active }">
          <div class="purpose__block-accent" />
          <div class="purpose__header">
            <span class="purpose__icon">🎯</span>
            <h2>{{ t('purpose.missionTitle') }}</h2>
          </div>
          <p>
            {{ t('purpose.missionDesc') }}
          </p>
        </div>

        <div class="purpose__block glass animate-in delay-2" :class="{ visible: active }">
          <div class="purpose__block-accent" />
          <div class="purpose__header">
            <span class="purpose__icon">🔭</span>
            <h2>{{ t('purpose.visionTitle') }}</h2>
          </div>
          <p>
            {{ t('purpose.visionDesc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.purpose {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.purpose__glow {
  position: absolute;
  bottom: -10%;
  right: -10%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.purpose__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 3rem;
  max-width: 900px;
  z-index: 1;
}

.purpose__blocks {
  display: flex;
  gap: 1.5rem;
  width: 100%;
}

.purpose__block {
  flex: 1;
  padding: 2rem;
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
}

.purpose__block-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-gold), transparent);
}

.purpose__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.purpose__icon {
  font-size: 1.4rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neon-gold-08);
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.purpose__block h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--neon-gold);
}

.purpose__block p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--white-70);
}
</style>
