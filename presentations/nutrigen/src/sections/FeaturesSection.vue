<script setup>
defineProps({ active: Boolean });

const features = [
  {
    icon: '🏠',
    title: 'Landing Page Estratégica',
    desc: 'Página principal com hero impactante, protocolo Nutrigen, depoimentos e CTA de agendamento',
  },
  {
    icon: '👩‍⚕️',
    title: 'Página "Sobre Mim"',
    desc: 'Sua história, formação, diferenciais e o que faz o Nutrigen ser único',
  },
  {
    icon: '📋',
    title: 'Página de Serviços',
    desc: 'Detalhamento das consultas, protocolos e planos disponíveis',
  },
  {
    icon: '📝',
    title: 'Blog / Conteúdo',
    desc: 'Área para artigos, dicas e educação nutricional que funciona como motor de SEO & GEO contínuo',
  },
  {
    icon: '📅',
    title: 'Sistema de Agendamento',
    desc: 'Integração com calendário para agendamento direto pelo site, sem idas e vindas',
  },
  {
    icon: '💬',
    title: 'WhatsApp Integrado',
    desc: 'Botão flutuante de contato rápido para atendimento instantâneo de quem tem dúvidas',
  },
  {
    icon: '⭐',
    title: 'Depoimentos & Cases',
    desc: 'Seção de social proof com resultados reais e feedbacks de pacientes',
  },
  {
    icon: '📊',
    title: 'Painel de Analytics',
    desc: 'Google Analytics + Search Console para acompanhar métricas e evolução',
  },
];
</script>

<template>
  <section class="features">
    <div class="features__content">
      <span class="tag">O Que Vamos Construir</span>

      <h2 class="features__title">Tudo que o <span class="text-gold">Nutrigen</span> precisa</h2>

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
