<script setup>
defineProps({ active: Boolean });

const points = [
  {
    icon: '🎯',
    title: 'Aceleração de Carreira',
    text: 'A Tech Experts Mentory ajuda executivos e líderes de tecnologia a alcançarem posições de maior impacto com estratégia, posicionamento e execução prática.',
  },
  {
    icon: '👥',
    title: 'Público de Alto Nível',
    text: 'De specialists a C-level: tech leads, coordenadores, gerentes, diretores e executivos que querem dar o próximo passo na carreira.',
  },
  {
    icon: '📦',
    title: 'Portfólio Completo',
    text: 'Mentoria individual (carro-chefe, ticket 15k), eventos, workshops, comunidade ativa, plataforma de conteúdo, e em breve livro e podcast.',
  },
  {
    icon: '🏆',
    title: 'Resultados Comprovados',
    text: 'Promoções, aumento de renda e recolocações estratégicas que transformam profissionais técnicos em líderes reconhecidos no mercado.',
  },
];
</script>

<template>
  <section class="context">
    <div class="context__content">
      <span class="tag">Entendendo o Negócio</span>

      <h2 class="context__title">
        Quem é a
        <span class="text-gold">Tech Experts Mentory</span>
      </h2>

      <div class="context__grid">
        <div v-for="(point, i) in points" :key="i" class="card context__card">
          <span class="context__icon">{{ point.icon }}</span>
          <h3 class="context__card-title">{{ point.title }}</h3>
          <p class="context__card-text">{{ point.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.context {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  padding: 3rem;
}

.context__content {
  max-width: 1000px;
  width: 100%;
}

.context__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 2.5rem;
  letter-spacing: -0.02em;
}

.context__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.context__card {
  display: flex;
  flex-direction: column;
}

.context__icon {
  font-size: 1.6rem;
  display: block;
  margin-bottom: 0.75rem;
}

.context__card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--pure-white);
  margin-bottom: 0.4rem;
}

.context__card-text {
  font-size: 0.82rem;
  color: var(--white-50);
  line-height: 1.55;
}
</style>
