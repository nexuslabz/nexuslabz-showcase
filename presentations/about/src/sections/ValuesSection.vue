<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="values" :class="{ active }">
    <div class="values__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('values.tag') }}</span>

      <div class="values__grid">
        <div
          v-for="(v, i) in t('values.items')"
          :key="v.title"
          class="values__card card animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
        >
          <span class="values__icon">{{ v.icon }}</span>
          <h3>{{ v.title }}</h3>
          <p>{{ v.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
}

.values__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 1100px;
}

.values__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
}

.values__card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
}

.values__icon {
  font-size: 1.4rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neon-gold-08);
  border-radius: var(--radius-md);
}

.values__card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--pure-white);
}

.values__card p {
  font-size: 0.8rem;
  line-height: 1.55;
  color: var(--white-50);
}
</style>
