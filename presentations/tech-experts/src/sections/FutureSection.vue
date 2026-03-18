<script setup>
defineProps({ active: Boolean });

const ideas = [
  {
    icon: '🎨',
    title: 'Re-branding Completo',
    desc: 'Uma nova identidade visual profissional com logo em SVG, PNG monocromático, manual de marca e design system pensado para escalar.',
  },
  {
    icon: '🎓',
    title: 'Plataforma de Cursos',
    desc: 'Uma área de membros com conteúdo gravado, módulos, certificação e pagamento recorrente integrado.',
  },
  {
    icon: '📱',
    title: 'App / PWA',
    desc: 'Um aplicativo progressivo com acesso mobile nativo, notificações push e experiência personalizada para os mentorados.',
  },
  {
    icon: '🤖',
    title: 'Automações Inteligentes',
    desc: 'E-mail marketing, funil automatizado, CRM e remarketing trabalhando juntos para escalar a captação de forma contínua.',
  },
];
</script>

<template>
  <section class="future">
    <div class="future__content">
      <span class="tag">Visão de Futuro</span>

      <h2 class="future__title">
        Um ecossistema que <span class="text-gold">cresce com você</span>
      </h2>

      <p class="future__desc">
        A plataforma é construída com arquitetura escalável, pronta para receber novas
        funcionalidades conforme a Tech Experts evolui.
      </p>

      <div class="future__grid">
        <div v-for="(idea, i) in ideas" :key="i" class="card future__card">
          <span class="future__icon">{{ idea.icon }}</span>
          <h3 class="future__card-title">{{ idea.title }}</h3>
          <p class="future__card-desc">{{ idea.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.future {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  padding: 3rem;
}

.future__content {
  max-width: 1000px;
  width: 100%;
}

.future__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 0.75rem;
  letter-spacing: -0.02em;
}

.future__desc {
  font-size: 1rem;
  color: var(--white-70);
  line-height: 1.6;
  max-width: 650px;
  margin-bottom: 2.5rem;
}

.future__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.future__card {
  display: flex;
  flex-direction: column;
  border-style: dashed;
}

.future__icon {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
}

.future__card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--pure-white);
  margin-bottom: 0.4rem;
}

.future__card-desc {
  font-size: 0.82rem;
  color: var(--white-50);
  line-height: 1.55;
}
</style>
