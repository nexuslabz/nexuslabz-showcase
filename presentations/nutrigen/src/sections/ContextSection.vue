<script setup>
defineProps({ active: Boolean });

const points = [
  {
    icon: '📱',
    title: 'Presença Digital Limitada',
    text: 'Hoje o Nutrigen vive dentro do Instagram da Angelica. Sem site próprio, sem funil e sem captura automatizada de leads.',
  },
  {
    icon: '🔍',
    title: 'Invisível no Google',
    text: 'Pacientes buscam "nutricionista + sua cidade" diariamente. Sem um site otimizado, você não aparece.',
  },
  {
    icon: '⏱️',
    title: 'Tempo Perdido com Operacional',
    text: 'Agendamentos manuais, envio de conteúdo por DM e falta de automação consomem horas do seu dia.',
  },
  {
    icon: '📉',
    title: 'Conversão Limitada',
    text: 'Sem uma jornada clara do visitante até a consulta, muitos potenciais pacientes se perdem no caminho.',
  },
];
</script>

<template>
  <section class="context">
    <div class="context__content">
      <span class="tag">Entendendo o Momento</span>

      <h2 class="context__title">
        O cenário atual do
        <span class="text-gold">Nutrigen</span>
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
