<script setup>
import { inject, computed } from 'vue';
import logoFullWhite from '@assets/logos/logo-full-no-bg-white.png';
import logoFullGrey from '@assets/logos/logo-full-no-bg-grey.png';
import logoHorizWhite from '@assets/logos/logo-full-no-bg-white-horizontal.png';
import logoHorizGrey from '@assets/logos/logo-full-no-bg-grey-horizontal.png';
import logoHoriz2White from '@assets/logos/logo-full-no-bg-white-horizontal-2.png';
import logoHoriz2Grey from '@assets/logos/logo-full-no-bg-grey-horizontal-2.png';
import iconWhite from '@assets/logos/icon-no-bg-white.png';
import iconGrey from '@assets/logos/icon-no-bg-grey.png';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const groupImages = [
  [
    { img: logoFullWhite, bg: 'dark' },
    { img: logoFullGrey, bg: 'light' },
  ],
  [
    { img: logoHorizWhite, bg: 'dark', wide: true },
    { img: logoHorizGrey, bg: 'light', wide: true },
  ],
  [
    { img: logoHoriz2White, bg: 'dark' },
    { img: logoHoriz2Grey, bg: 'light' },
  ],
  [
    { img: iconWhite, bg: 'dark', icon: true },
    { img: iconGrey, bg: 'light', icon: true },
  ],
];

const groups = computed(() =>
  t('logoVersions.groups').map((g, i) => ({ ...g, items: groupImages[i] })),
);
</script>

<template>
  <section class="versions" :class="{ active }">
    <div class="versions__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('logoVersions.tag') }}</span>

      <h2 class="versions__title animate-in delay-1" :class="{ visible: active }">
        {{ t('logoVersions.title') }}
      </h2>

      <div class="versions__groups">
        <div
          v-for="(group, gi) in groups"
          :key="group.label"
          class="versions__group animate-in"
          :class="['delay-' + (gi + 2), { visible: active }]"
        >
          <div class="versions__group-header">
            <span class="versions__group-label">{{ group.label }}</span>
            <span class="versions__group-desc">{{ group.desc }}</span>
          </div>

          <div class="versions__row">
            <div
              v-for="(item, ii) in group.items"
              :key="ii"
              class="versions__card"
              :class="`versions__card--${item.bg}`"
            >
              <img
                :src="item.img"
                :alt="`${group.label} — ${item.bg === 'dark' ? 'White' : 'Grey'}`"
                :class="{ 'versions__img--icon': item.icon, 'versions__img--wide': item.wide }"
              />
              <span class="versions__variant">{{
                item.bg === 'dark' ? t('logoVersions.white') : t('logoVersions.grey')
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.versions {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
}

.versions__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2.5rem 3rem;
  max-width: 920px;
  width: 100%;
  z-index: 1;
}

.versions__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
}

.versions__groups {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  width: 100%;
}

.versions__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.versions__group-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}

.versions__group-label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--neon-gold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.versions__group-desc {
  font-size: 0.7rem;
  color: var(--white-30);
}

.versions__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.versions__card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  border-radius: var(--radius-md);
  padding: 1rem 1.5rem;
  position: relative;
}

.versions__card--dark {
  background: var(--nexus-grey-light);
  border: 1px solid var(--white-08);
}

.versions__card--light {
  background: #f0f0f0;
}

.versions__card img {
  max-width: 160px;
  max-height: 55px;
  object-fit: contain;
}

.versions__img--icon {
  max-width: 50px !important;
  max-height: 50px !important;
}

.versions__img--wide {
  max-width: 200px !important;
  max-height: 50px !important;
}

.versions__variant {
  position: absolute;
  bottom: 6px;
  right: 10px;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.4;
  font-weight: 600;
}

.versions__card--dark .versions__variant {
  color: var(--pure-white);
}

.versions__card--light .versions__variant {
  color: var(--nexus-grey);
}
</style>
