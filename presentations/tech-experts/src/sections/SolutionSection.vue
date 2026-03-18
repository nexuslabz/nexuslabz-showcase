<script setup>
defineProps({ active: Boolean });

const pillars = [
  {
    icon: '🌐',
    title: 'Hub de Autoridade',
    desc: 'Um ponto central que reúne todos os produtos, links e a presença digital da Tech Experts, posicionando a marca como referência no mercado.',
  },
  {
    icon: '🎯',
    title: 'Landing Pages de Conversão',
    desc: '5 páginas dedicadas com textos persuasivos, CTAs diretos e integração com WhatsApp para transformar visitantes em clientes.',
  },
  {
    icon: '📈',
    title: 'Funil Digital Completo',
    desc: 'Uma jornada clara do visitante, da descoberta ao fechamento, com captura de leads, lista de espera e redirecionamento inteligente.',
  },
  {
    icon: '🚀',
    title: 'Base Escalável',
    desc: 'Arquitetura pensada para crescer junto com o negócio. Novos produtos, novas páginas e novas funcionalidades sem precisar refazer nada.',
  },
];
</script>

<template>
  <section class="solution">
    <div class="solution__content">
      <span class="tag">A Solução</span>

      <h2 class="solution__title">
        Não é um site. É um <span class="text-gold">ecossistema digital.</span>
      </h2>

      <p class="solution__desc">
        O objetivo é construir uma plataforma que posicione a Tech Experts como referência,
        centralize todos os produtos e transforme visitantes em clientes de forma consistente.
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
