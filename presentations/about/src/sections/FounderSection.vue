<script setup>
import { inject } from 'vue';
import founderImg from '@assets/images/rennan-gimenez-founder.png';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const timeline = [
  { company: 'Bosch', role: 'SDET Intern', period: '2019-20' },
  { company: 'HST Card', role: 'QA Analyst', period: '2020-21' },
  { company: 'Prime Control', role: 'QA Engineer', period: '2021' },
  { company: 'Accenture', role: 'Test Automation Eng.', period: '2021' },
  { company: 'Invillia', role: 'Mid QA Engineer', period: '2021-22' },
  { company: 'C6 Bank', role: 'SDET', period: '2022-23' },
  { company: 'GFT / Santander', role: 'SDET', period: '2023-24' },
  { company: 'Stefanini / Sicoob', role: 'SDET', period: '2024-25' },
  { company: 'Colozzo Tech', role: 'Senior SDET', period: '2024-2026+', current: true },
  { company: 'voidr.co', role: 'SDET Lead', period: '2025' },
  { company: 'Nexus Labz', role: 'Founder & CEO', period: '2026+', current: true },
];
</script>

<template>
  <section class="founder" :class="{ active }">
    <div class="founder__glow" />

    <div class="founder__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('founder.tag') }}</span>

      <div class="founder__header animate-in delay-1" :class="{ visible: active }">
        <div class="founder__top">
          <div class="founder__photo-wrap">
            <img :src="founderImg" :alt="t('founder.name')" class="founder__photo" />
          </div>
          <div class="founder__text">
            <div class="founder__name-row">
              <h2>{{ t('founder.name') }}</h2>
              <span class="founder__role">{{ t('founder.role') }}</span>
            </div>
            <p class="founder__bio">{{ t('founder.bio') }}</p>
          </div>
        </div>

        <div class="founder__highlights">
          <div v-for="h in t('founder.highlights')" :key="h.label" class="founder__highlight">
            <span class="founder__highlight-label">{{ h.label }}</span>
            <span class="founder__highlight-desc">{{ h.desc }}</span>
          </div>
        </div>
      </div>

      <div class="founder__timeline-section animate-in delay-3" :class="{ visible: active }">
        <h3 class="founder__timeline-title">{{ t('founder.timelineTitle') }}</h3>

        <div class="timeline">
          <div class="timeline__track" />
          <div
            v-for="(step, i) in timeline"
            :key="step.company"
            class="timeline__item"
            :class="{
              'timeline__item--current': step.current,
              'timeline__item--above': i % 2 === 0,
              'timeline__item--below': i % 2 !== 0,
            }"
            :style="{ left: (i / (timeline.length - 1)) * 100 + '%' }"
          >
            <div class="timeline__dot" />
            <div class="timeline__label">
              <span class="timeline__company">{{ step.company }}</span>
              <span class="timeline__role">{{ step.role }}</span>
              <span class="timeline__period">{{ step.period }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.founder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.founder__glow {
  position: absolute;
  top: 15%;
  left: 8%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.founder__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 3rem 4rem;
  max-width: 1100px;
  width: 100%;
  z-index: 1;
}

.founder__header {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.founder__top {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.founder__photo-wrap {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--neon-gold-15);
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.1);
  flex-shrink: 0;
}

.founder__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.founder__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding-top: 0.25rem;
}

.founder__name-row {
  display: flex;
  align-items: baseline;
  gap: 1rem;
}

.founder__name-row h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--pure-white);
}

.founder__role {
  font-size: 0.75rem;
  color: var(--neon-gold);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.founder__bio {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--white-50);
}

.founder__highlights {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.founder__highlight {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.85rem 1rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  text-align: center;
}

.founder__highlight-label {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--neon-gold);
}

.founder__highlight-desc {
  font-size: 0.6rem;
  color: var(--white-30);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Timeline */
.founder__timeline-section {
  width: 100%;
}

.founder__timeline-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--neon-gold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
  text-align: center;
}

.timeline {
  position: relative;
  height: 260px;
  padding: 0 40px;
}

.timeline__track {
  position: absolute;
  top: 50%;
  left: 40px;
  right: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--white-08), var(--neon-gold-15), var(--neon-gold));
  border-radius: 2px;
  transform: translateY(-50%);
}

.timeline__item {
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline__item--above {
  top: 50%;
  transform: translateX(-50%) translateY(-100%);
  padding-bottom: 14px;
}

.timeline__item--below {
  top: 50%;
  transform: translateX(-50%);
  padding-top: 14px;
}

.timeline__item--above .timeline__label {
  order: -1;
}

.timeline__item--above .timeline__dot {
  order: 1;
}

.timeline__item--below .timeline__label {
  order: 1;
}

.timeline__item--below .timeline__dot {
  order: -1;
}

.timeline__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--white-15);
  border: 2px solid var(--nexus-grey);
  z-index: 1;
  flex-shrink: 0;
}

.timeline__item--current .timeline__dot {
  width: 14px;
  height: 14px;
  background: var(--neon-gold);
  box-shadow: 0 0 14px rgba(212, 175, 55, 0.6);
}

.timeline__label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  white-space: nowrap;
  padding: 0.35rem 0;
}

.timeline__company {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--white-70);
}

.timeline__item--current .timeline__company {
  color: var(--neon-gold);
  font-size: 0.75rem;
}

.timeline__role {
  font-size: 0.58rem;
  color: var(--white-30);
  font-weight: 500;
}

.timeline__item--current .timeline__role {
  color: var(--neon-gold-dim);
}

.timeline__period {
  font-size: 0.52rem;
  color: var(--white-15);
  font-family: 'Fira Code', monospace;
}
</style>
