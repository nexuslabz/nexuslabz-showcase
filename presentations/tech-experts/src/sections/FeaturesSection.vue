<script setup>
defineProps({ active: Boolean });

const features = [
  {
    icon: '🏠',
    title: 'Hub Central de Produtos',
    desc: 'A página principal da marca com catálogo de produtos, links para redes sociais e prova social integrada',
  },
  {
    icon: '🧠',
    title: 'LP Mentoria Executive',
    desc: 'Página dedicada ao carro-chefe, com textos de venda, depoimentos e CTA direto para agendamento',
  },
  {
    icon: '🎖️',
    title: 'LP Leadership Pro',
    desc: 'Página focada em conversão para o programa de liderança, com storytelling e resultados reais',
  },
  {
    icon: '🎤',
    title: 'LP Eventos & Workshops',
    desc: 'Agenda de eventos, inscrições online, lista de espera e contato direto via WhatsApp',
  },
  {
    icon: '📖',
    title: 'LP Livro',
    desc: 'Página do livro com prévia do conteúdo, depoimentos e link direto para compra',
  },
  {
    icon: '👥',
    title: 'LP Comunidade',
    desc: 'Página da comunidade mostrando benefícios, planos e como acessar a área de membros',
  },
  {
    icon: '📊',
    title: 'Analytics Integrado',
    desc: 'Google Analytics e Search Console em todas as páginas para você acompanhar métricas e conversões',
  },
  {
    icon: '💬',
    title: 'WhatsApp & Formulários',
    desc: 'Botão flutuante de WhatsApp e formulários de captura em todas as landing pages',
  },
];
</script>

<template>
  <section class="features">
    <div class="features__content">
      <span class="tag">O Que Vamos Construir</span>

      <h2 class="features__title">
        Hub + 5 Landing Pages <span class="text-gold">estratégicas</span>
      </h2>

      <div class="features__grid">
        <div v-for="(feat, i) in features" :key="i" class="card features__card">
          <span class="features__icon">{{ feat.icon }}</span>
          <div>
            <h3 class="features__card-title">{{ feat.title }}</h3>
            <p class="features__card-desc">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  padding: 3rem;
}

.features__content {
  max-width: 1050px;
  width: 100%;
}

.features__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 2rem;
  letter-spacing: -0.02em;
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.features__card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.features__icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.features__card-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--pure-white);
  margin-bottom: 0.2rem;
}

.features__card-desc {
  font-size: 0.78rem;
  color: var(--white-50);
  line-height: 1.5;
}
</style>
