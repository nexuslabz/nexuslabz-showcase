<script setup>
import { inject } from 'vue';
import rennan from '@assets/images/rennan-gimenez-founder.png';
import caio from '@assets/images/caio-moloni-qa-mentor.jpeg';
import giovani from '@assets/images/giovani-ohira-dev.png';
import joao from '@assets/images/joao-vitor-dev.jpeg';
import daniela from '@assets/images/daniella-foggiato-dev.jpeg';
import samnylle from '@assets/images/samylle-alves-qa.jpeg';
import afonso from '@assets/images/afonso-scrivani-qa.png';
import eduardo from '@assets/images/eduardo-ux-ui-designer.jpeg';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const members = [
  {
    img: rennan,
    name: 'Rennan Gimenez',
    role: 'Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/rennan-gimenez/',
  },
  {
    img: caio,
    name: 'Caio Moloni',
    role: 'Partner & QA Mentor',
    linkedin: 'https://www.linkedin.com/in/caio-henrique-de-paula-moloni-06999a143/',
  },
  {
    img: giovani,
    name: 'Giovani Ohira',
    role: 'Fullstack Dev Mid',
    linkedin: 'https://www.linkedin.com/in/giovaniohira/',
  },
  {
    img: joao,
    name: 'João Vitor',
    role: 'Fullstack Dev Jr',
    linkedin: 'https://www.linkedin.com/in/devborges-joaovitor/',
  },
  {
    img: daniela,
    name: 'Daniela Foggiatto',
    role: 'Fullstack Dev Jr',
    linkedin: 'https://www.linkedin.com/in/daniela-foggiatto-a1287b2a4/',
  },
  {
    img: samnylle,
    name: 'Samnylle Alves',
    role: 'QA Junior',
    linkedin: 'https://www.linkedin.com/in/samylle/',
  },
  {
    img: afonso,
    name: 'Afonso Scrivani',
    role: 'QA Junior',
    linkedin: 'https://www.linkedin.com/in/scrivaniafonso/',
  },
  {
    img: eduardo,
    name: 'Eduardo Borges',
    role: 'UX/UI Designer',
    linkedin: 'https://www.linkedin.com/in/eduardo-borges-guioti/',
  },
];
</script>

<template>
  <section class="team" :class="{ active }">
    <div class="team__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('team.tag') }}</span>

      <h2 class="team__title animate-in delay-1" :class="{ visible: active }">
        {{ t('team.title') }}
      </h2>
      <p class="team__subtitle animate-in delay-1" :class="{ visible: active }">
        {{ t('team.subtitle') }}
      </p>

      <div class="team__grid">
        <a
          v-for="(m, i) in members"
          :key="m.name"
          :href="m.linkedin"
          target="_blank"
          class="team__member animate-scale"
          :class="['delay-' + (Math.min(i, 5) + 2), { visible: active }]"
        >
          <div class="team__avatar">
            <img :src="m.img" :alt="m.name" />
            <div class="team__linkedin-badge">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </div>
          </div>
          <span class="team__name">{{ m.name }}</span>
          <span class="team__role">{{ m.role }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
}

.team__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2.5rem 3rem;
  max-width: 900px;
  z-index: 1;
}

.team__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
}

.team__subtitle {
  font-size: 0.9rem;
  color: var(--white-30);
  margin-top: -0.5rem;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem 1.5rem;
  width: 100%;
}

.team__member {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.team__member:hover {
  transform: translateY(-3px);
}

.team__avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--white-08);
  transition: border-color 0.3s ease;
  position: relative;
}

.team__member:hover .team__avatar {
  border-color: var(--neon-gold-dim);
}

.team__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team__linkedin-badge {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 20px;
  height: 20px;
  background: rgba(19, 20, 15, 0.85);
  border: 1px solid var(--white-08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white-30);
  transition: all 0.2s ease;
}

.team__member:hover .team__linkedin-badge {
  color: #0a66c2;
  border-color: #0a66c2;
  background: rgba(10, 102, 194, 0.15);
}

.team__name {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--pure-white);
  text-align: center;
}

.team__role {
  font-size: 0.65rem;
  color: var(--neon-gold-dim);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-align: center;
}
</style>
