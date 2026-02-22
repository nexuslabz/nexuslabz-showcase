<script setup>
import { inject } from 'vue';
import caioImg from '@assets/images/caio-moloni-qa-mentor.jpeg';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const timeline = [
  { company: 'Kognit', period: '2018-19' },
  { company: 'Bosch', period: '2019-20' },
  { company: 'Venturus', period: '2020-23' },
  { company: 'WestRock', period: '2023' },
  { company: 'Doctoralia', period: '2023-24' },
  { company: 'Yum! Brands', period: '2024' },
  { company: 'Nexus Labz', period: '2024+', current: true },
];

const stack = [
  { name: 'Playwright', color: '#2EAD33' },
  { name: 'Cypress', color: '#69D3A7' },
  { name: 'Robot Framework', color: '#00B0D8' },
  { name: 'Selenium', color: '#43B02A' },
  { name: 'Appium', color: '#662D91' },
  { name: 'Python', color: '#3776AB' },
];
</script>

<template>
  <section class="cofounder" :class="{ active }">
    <div class="cofounder__glow" />

    <div class="cofounder__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('cofounder.tag') }}</span>

      <div class="cofounder__main">
        <div class="cofounder__left animate-in delay-1" :class="{ visible: active }">
          <div class="cofounder__photo-wrap">
            <img :src="caioImg" :alt="t('cofounder.name')" class="cofounder__photo" />
          </div>
          <div class="cofounder__identity">
            <h2>{{ t('cofounder.name') }}</h2>
            <span class="cofounder__role">{{ t('cofounder.role') }}</span>
          </div>
          <a
            href="https://www.linkedin.com/in/caio-henrique-de-paula-moloni-06999a143/"
            target="_blank"
            class="cofounder__linkedin"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
            {{ t('cofounder.linkedin') }}
          </a>

          <div class="cofounder__stack">
            <span
              v-for="s in stack"
              :key="s.name"
              class="cofounder__tech"
              :style="{
                borderColor: s.color + '40',
                background: s.color + '12',
                color: s.color,
              }"
            >
              <span class="cofounder__tech-dot" :style="{ background: s.color }" />
              {{ s.name }}
            </span>
          </div>
        </div>

        <div class="cofounder__right">
          <p class="cofounder__bio animate-in delay-2" :class="{ visible: active }">
            {{ t('cofounder.bio') }}
          </p>

          <div class="cofounder__highlights animate-in delay-2" :class="{ visible: active }">
            <div v-for="h in t('cofounder.highlights')" :key="h.label" class="cofounder__highlight">
              <span class="cofounder__highlight-label">{{ h.label }}</span>
              <span class="cofounder__highlight-desc">{{ h.desc }}</span>
            </div>
          </div>

          <div class="cofounder__career animate-in delay-3" :class="{ visible: active }">
            <h3>{{ t('cofounder.experience') }}</h3>
            <ul>
              <li v-for="item in t('cofounder.career')" :key="item">
                <span class="cofounder__bullet">&#9670;</span>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="cofounder__timeline animate-in delay-4" :class="{ visible: active }">
            <div class="timeline">
              <div class="timeline__track" />
              <div
                v-for="(tm, i) in timeline"
                :key="tm.company"
                class="timeline__item"
                :class="{ 'timeline__item--current': tm.current }"
                :style="{ left: (i / (timeline.length - 1)) * 100 + '%' }"
              >
                <div class="timeline__dot" />
                <div class="timeline__label">
                  <span class="timeline__company">{{ tm.company }}</span>
                  <span class="timeline__period">{{ tm.period }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cofounder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.cofounder__glow {
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.cofounder__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2rem 3rem;
  max-width: 960px;
  width: 100%;
  z-index: 1;
}

.cofounder__main {
  display: flex;
  gap: 2.5rem;
  width: 100%;
}

.cofounder__left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;
  width: 190px;
}

.cofounder__photo-wrap {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--neon-gold-15);
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.1);
}

.cofounder__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cofounder__identity {
  text-align: center;
}

.cofounder__identity h2 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--pure-white);
}

.cofounder__role {
  font-size: 0.65rem;
  color: var(--neon-gold);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.cofounder__linkedin {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.65rem;
  color: var(--white-30);
  text-decoration: none;
  transition: color 0.2s ease;
}

.cofounder__linkedin:hover {
  color: var(--neon-gold);
}

.cofounder__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: center;
}

.cofounder__tech {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.55rem;
  padding: 0.18rem 0.45rem;
  border: 1px solid;
  border-radius: 100px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.cofounder__tech-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}

.cofounder__right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cofounder__bio {
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--white-70);
}

.cofounder__highlights {
  display: flex;
  gap: 0.6rem;
}

.cofounder__highlight {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  padding: 0.5rem 0.4rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  text-align: center;
}

.cofounder__highlight-label {
  font-size: 1rem;
  font-weight: 800;
  color: var(--neon-gold);
}

.cofounder__highlight-desc {
  font-size: 0.55rem;
  color: var(--white-30);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.cofounder__career h3 {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--neon-gold);
  margin-bottom: 0.25rem;
}

.cofounder__career ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.cofounder__career li {
  font-size: 0.72rem;
  color: var(--white-50);
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.cofounder__bullet {
  font-size: 0.35rem;
  color: var(--neon-gold);
  flex-shrink: 0;
  filter: drop-shadow(0 0 3px currentColor);
}

/* Timeline */
.cofounder__timeline {
  margin-top: 0.25rem;
}

.timeline {
  position: relative;
  height: 52px;
  padding: 0 12px;
}

.timeline__track {
  position: absolute;
  top: 4px;
  left: 12px;
  right: 12px;
  height: 2px;
  background: var(--white-08);
  border-radius: 2px;
}

.timeline__item {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.timeline__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--white-15);
  border: 2px solid var(--nexus-grey);
  z-index: 1;
}

.timeline__item--current .timeline__dot {
  background: var(--neon-gold);
  box-shadow: 0 0 8px rgba(212, 175, 55, 0.5);
}

.timeline__label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  white-space: nowrap;
}

.timeline__company {
  font-size: 0.52rem;
  font-weight: 600;
  color: var(--white-50);
}

.timeline__item--current .timeline__company {
  color: var(--neon-gold);
}

.timeline__period {
  font-size: 0.45rem;
  color: var(--white-30);
  font-family: 'Fira Code', monospace;
}
</style>
