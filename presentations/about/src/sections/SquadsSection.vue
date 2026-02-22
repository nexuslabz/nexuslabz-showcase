<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="squads" :class="{ active }">
    <div class="squads__bg-dots" />

    <div class="squads__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('squads.tag') }}</span>

      <h2 class="squads__title animate-in delay-1" :class="{ visible: active }">
        {{ t('squads.title') }}<br />{{ t('squads.titleLine2') }}
      </h2>

      <p class="squads__desc animate-in delay-1" :class="{ visible: active }">
        {{ t('squads.desc') }}
      </p>

      <div class="squads__features">
        <div
          v-for="(f, i) in t('squads.features')"
          :key="f.text"
          class="squads__feature glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <span class="squads__feature-icon">{{ f.icon }}</span>
          <span>{{ f.text }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.squads {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.squads__bg-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--white-05) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  opacity: 0.4;
}

.squads__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 750px;
  z-index: 1;
}

.squads__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.squads__desc {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--white-70);
  max-width: 550px;
}

.squads__features {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  margin-top: 0.5rem;
}

.squads__feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1.25rem;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  color: var(--white-70);
}

.squads__feature-icon {
  font-size: 1.1rem;
}
</style>
