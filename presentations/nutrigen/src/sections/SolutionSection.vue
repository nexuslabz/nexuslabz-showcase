<script setup>
defineProps({ active: Boolean });

const pillars = [
  {
    icon: '🎨',
    title: 'Design Profissional',
    desc: 'Identidade visual premium alinhada ao Nutrigen, com cores, tipografia e estética que transmitem confiança e autoridade.',
  },
  {
    icon: '⚡',
    title: 'Performance, SEO & GEO',
    desc: 'Site otimizado para Google e para inteligências artificiais, com carregamento ultra-rápido e estrutura técnica para aparecer nas primeiras posições.',
  },
  {
    icon: '🧲',
    title: 'Funil de Conversão',
    desc: 'Jornada estratégica do visitante: do primeiro clique até o agendamento da consulta, com CTAs inteligentes.',
  },
  {
    icon: '📱',
    title: '100% Responsivo',
    desc: 'Experiência impecável em celular, tablet ou desktop. Seus pacientes acessam de qualquer lugar e o site precisa acompanhar.',
  },
];
</script>

<template>
  <section class="solution">
    <div class="solution__content">
      <span class="tag">A Solução</span>

      <h2 class="solution__title">Um site que <span class="text-gold">trabalha por você</span></h2>

      <p class="solution__desc">
        Não queremos apenas uma landing page bonita. O objetivo é construir uma plataforma
        estratégica com foco em resultados reais: mais pacientes, mais vendas, mais monetização.
      </p>

      <div class="solution__grid">
        <div v-for="(pillar, i) in pillars" :key="i" class="card solution__card">
          <div class="solution__icon">{{ pillar.icon }}</div>
          <h3 class="solution__card-title">{{ pillar.title }}</h3>
          <p class="solution__card-desc">{{ pillar.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  padding: 3rem;
}

.solution__content {
  max-width: 1000px;
  width: 100%;
}

.solution__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 0.75rem;
  letter-spacing: -0.02em;
}

.solution__desc {
  font-size: 1rem;
  color: var(--white-70);
  line-height: 1.6;
  max-width: 650px;
  margin-bottom: 2.5rem;
}

.solution__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.solution__card {
  display: flex;
  flex-direction: column;
}

.solution__icon {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
}

.solution__card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--pure-white);
  margin-bottom: 0.4rem;
}

.solution__card-desc {
  font-size: 0.82rem;
  color: var(--white-50);
  line-height: 1.55;
}
</style>
