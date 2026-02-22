<script setup>
import { inject } from 'vue';
import logoWhite from '@assets/logos/logo-full-no-bg-white.png';
import logoGrey from '@assets/logos/logo-full-no-bg-grey.png';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="bgs" :class="{ active }">
    <div class="bgs__content">
      <span class="tag animate-in" :class="{ visible: active }">{{
        t('logoBackgrounds.tag')
      }}</span>

      <h2 class="bgs__title animate-in delay-1" :class="{ visible: active }">
        {{ t('logoBackgrounds.title') }}
      </h2>

      <div class="bgs__grid">
        <div class="bgs__item animate-scale delay-2" :class="{ visible: active }">
          <div class="bgs__preview" style="background: #13140f">
            <img :src="logoWhite" alt="On Nexus Grey" />
          </div>
          <div class="bgs__meta">
            <span class="bgs__badge bgs__badge--ok">&#10003;</span>
            <span class="bgs__label">{{ t('logoBackgrounds.labels')[0] }}</span>
          </div>
        </div>

        <div class="bgs__item animate-scale delay-2" :class="{ visible: active }">
          <div class="bgs__preview" style="background: #1e1f18">
            <img :src="logoWhite" alt="On dark grey" />
          </div>
          <div class="bgs__meta">
            <span class="bgs__badge bgs__badge--ok">&#10003;</span>
            <span class="bgs__label">{{ t('logoBackgrounds.labels')[1] }}</span>
          </div>
        </div>

        <div class="bgs__item animate-scale delay-3" :class="{ visible: active }">
          <div class="bgs__preview" style="background: #ffffff">
            <img :src="logoGrey" alt="On white" />
          </div>
          <div class="bgs__meta">
            <span class="bgs__badge bgs__badge--ok">&#10003;</span>
            <span class="bgs__label">{{ t('logoBackgrounds.labels')[2] }}</span>
          </div>
        </div>

        <div class="bgs__item animate-scale delay-3" :class="{ visible: active }">
          <div class="bgs__preview" style="background: #f0f0f0">
            <img :src="logoGrey" alt="On light grey" />
          </div>
          <div class="bgs__meta">
            <span class="bgs__badge bgs__badge--ok">&#10003;</span>
            <span class="bgs__label">{{ t('logoBackgrounds.labels')[3] }}</span>
          </div>
        </div>

        <div class="bgs__item animate-scale delay-4" :class="{ visible: active }">
          <div
            class="bgs__preview"
            style="
              background: linear-gradient(
                135deg,
                rgba(212, 175, 55, 0.15) 0%,
                rgba(19, 20, 15, 1) 100%
              );
            "
          >
            <img :src="logoWhite" alt="On gold gradient" />
          </div>
          <div class="bgs__meta">
            <span class="bgs__badge bgs__badge--ok">&#10003;</span>
            <span class="bgs__label">{{ t('logoBackgrounds.labels')[4] }}</span>
          </div>
        </div>

        <div class="bgs__item animate-scale delay-4" :class="{ visible: active }">
          <div
            class="bgs__preview"
            style="
              background: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22><rect width=%2220%22 height=%2220%22 fill=%22%2313140f%22/><rect width=%2210%22 height=%2210%22 fill=%22%231e1f18%22/><rect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 fill=%22%231e1f18%22/></svg>');
            "
          >
            <img :src="logoWhite" alt="On busy background" class="bgs__bad" />
          </div>
          <div class="bgs__meta">
            <span class="bgs__badge bgs__badge--no">&#10007;</span>
            <span class="bgs__label">{{ t('logoBackgrounds.labels')[5] }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bgs {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
}

.bgs__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 900px;
  z-index: 1;
}

.bgs__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.bgs__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
}

.bgs__item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bgs__preview {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  border-radius: var(--radius-md);
  padding: 1.25rem;
  border: 1px solid var(--white-08);
}

.bgs__preview img {
  max-width: 140px;
  max-height: 60px;
  object-fit: contain;
}

.bgs__bad {
  opacity: 0.4;
}

.bgs__meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding-left: 0.15rem;
}

.bgs__badge {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.6rem;
  font-weight: 700;
}

.bgs__badge--ok {
  background: rgba(74, 222, 128, 0.15);
  color: #4ade80;
}

.bgs__badge--no {
  background: rgba(248, 113, 113, 0.15);
  color: #f87171;
}

.bgs__label {
  font-size: 0.78rem;
  color: var(--white-50);
}
</style>
