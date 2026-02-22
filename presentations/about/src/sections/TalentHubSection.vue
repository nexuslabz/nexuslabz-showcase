<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="hub" :class="{ active }">
    <div class="hub__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('talentHub.tag') }}</span>

      <h2 class="hub__title animate-in delay-1" :class="{ visible: active }">
        {{ t('talentHub.title') }}<br />
        <span class="text-gold">{{ t('talentHub.titleHighlight') }}</span>
      </h2>

      <div class="hub__box glass glow-gold animate-in delay-2" :class="{ visible: active }">
        <p>
          {{ t('talentHub.desc') }}
        </p>
        <div class="hub__divider" />
        <p class="hub__highlight">
          {{ t('talentHub.highlight') }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hub {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.hub__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 750px;
  text-align: center;
  z-index: 1;
}

.hub__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--pure-white);
  line-height: 1.2;
}

.hub__box {
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  text-align: left;
}

.hub__box p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--white-70);
}

.hub__divider {
  width: 40px;
  height: 2px;
  background: var(--neon-gold);
  margin: 1.25rem 0;
}

.hub__highlight {
  font-weight: 500;
  color: var(--neon-gold) !important;
  font-style: italic;
}
</style>
