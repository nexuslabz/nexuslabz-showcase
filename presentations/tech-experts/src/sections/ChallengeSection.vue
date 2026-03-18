<script setup>
defineProps({ active: Boolean });

const challenges = [
  {
    label: 'Presença Web',
    desc: 'Hoje não existe um site próprio nem uma URL de vendas. O negócio vive apenas dentro das redes sociais e WhatsApp.',
  },
  {
    label: 'Fragmentação',
    desc: 'A presença digital está espalhada entre LinkedIn, Instagram, WhatsApp e links avulsos, sem nenhuma conexão estratégica.',
  },
  {
    label: 'Funil Inexistente',
    desc: 'Não existe uma jornada de conversão digital. Potenciais mentorados se perdem antes de chegar ao contato.',
  },
  {
    label: 'Escala Limitada',
    desc: 'Sem um hub centralizado para distribuir os produtos, o crescimento depende 100% de indicação e rede pessoal.',
  },
];
</script>

<template>
  <section class="challenge">
    <div class="challenge__content">
      <span class="tag">O Desafio</span>

      <h2 class="challenge__title">
        Como escalar a Tech Experts<br />
        sem uma <span class="text-gold">base digital sólida?</span>
      </h2>

      <div class="challenge__list">
        <div v-for="(item, i) in challenges" :key="i" class="card challenge__item">
          <div class="challenge__number">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="challenge__info">
            <h3 class="challenge__label">{{ item.label }}</h3>
            <p class="challenge__desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.challenge {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  padding: 3rem;
}

.challenge__content {
  max-width: 800px;
  width: 100%;
}

.challenge__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 2.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.challenge__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.challenge__item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

.challenge__number {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--neon-gold);
  opacity: 0.4;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 0.15rem;
}

.challenge__label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--pure-white);
  margin-bottom: 0.2rem;
}

.challenge__desc {
  font-size: 0.82rem;
  color: var(--white-50);
  line-height: 1.5;
}
</style>
