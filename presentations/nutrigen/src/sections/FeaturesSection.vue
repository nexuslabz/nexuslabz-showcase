<script setup>
defineProps({ active: Boolean });

const features = [
  {
    icon: '🏠',
    title: 'Página Inicial',
    desc: 'Abertura forte com o protocolo Nutrigen, depoimentos e um botão claro para agendar.',
    tag: 'Principal',
  },
  {
    icon: '👩‍⚕️',
    title: 'Página "Sobre Mim"',
    desc: 'Sua história, formação e o que faz o Nutrigen ser único. A paciente conhece você antes de agendar.',
    tag: null,
  },
  {
    icon: '📋',
    title: 'Página de Serviços',
    desc: 'Consultas, protocolos e planos explicados de forma clara para a paciente escolher com confiança.',
    tag: null,
  },
  {
    icon: '📝',
    title: 'Blog e Conteúdo',
    desc: 'Artigos e dicas que mantêm o site vivo no Google e dão matéria para as IAs citarem você.',
    tag: 'SEO e GEO',
  },
  {
    icon: '📅',
    title: 'Sistema de Agendamento',
    desc: 'A paciente escolhe o horário direto no site, sem precisar trocar mensagem.',
    tag: null,
  },
  {
    icon: '💬',
    title: 'WhatsApp Integrado',
    desc: 'Botão flutuante para contato rápido. Quem preferir falar antes de agendar, consegue.',
    tag: null,
  },
  {
    icon: '⭐',
    title: 'Depoimentos e Cases',
    desc: 'Resultados reais e feedbacks de pacientes que geram confiança em quem está conhecendo.',
    tag: null,
  },
  {
    icon: '📊',
    title: 'Analytics e Search Console',
    desc: 'Você acompanha tráfego, conversões e comportamento de quem visita o site.',
    tag: 'Dados',
  },
  {
    icon: '🔍',
    title: 'Presença no Google e nas IAs',
    desc: 'Seu site aparece na busca e entra nas respostas de ferramentas como ChatGPT, Gemini e Perplexity.',
    tag: 'Diferencial',
  },
];
</script>

<template>
  <section class="features">
    <div class="features__bg">
      <div class="features__glow" />
    </div>

    <div class="features__content">
      <span class="tag tag--nexus">O Novo Ecossistema</span>

      <h2 class="features__title">
        Tudo que vamos <span class="features__highlight">entregar.</span>
      </h2>

      <p class="features__subtitle">
        Você recebe plataforma e infraestrutura prontas. Cada parte existe para
        <strong>trazer retorno na prática</strong>.
      </p>

      <div class="features__grid">
        <div v-for="(feat, i) in features" :key="i" class="features__card">
          <div class="features__card-top">
            <span class="features__icon">{{ feat.icon }}</span>
            <span v-if="feat.tag" class="features__tag">{{ feat.tag }}</span>
          </div>
          <h3 class="features__card-title">{{ feat.title }}</h3>
          <p class="features__card-desc">{{ feat.desc }}</p>
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
  position: relative;
  padding: 2.5rem 3rem;
  overflow: hidden;
}

.features__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.features__glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  bottom: -100px;
  left: -100px;
}

.features__content {
  position: relative;
  z-index: 1;
  max-width: 1050px;
  width: 100%;
}

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
}

.features__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.6rem;
  letter-spacing: -0.02em;
}

.features__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features__subtitle {
  font-size: 0.92rem;
  color: var(--white-50);
  line-height: 1.5;
  max-width: 550px;
  margin-bottom: 1.75rem;
}

.features__subtitle strong {
  color: var(--pure-white);
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.features__card {
  padding: 1rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition:
    border-color 0.3s,
    transform 0.3s;
}

.features__card:hover {
  border-color: var(--neon-gold-15);
  transform: translateY(-2px);
}

.features__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}

.features__icon {
  font-size: 1.2rem;
}

.features__tag {
  font-size: 0.58rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--neon-gold);
  background: var(--neon-gold-08);
  padding: 0.12rem 0.45rem;
  border-radius: 3px;
}

.features__card-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.25rem;
}

.features__card-desc {
  font-size: 0.72rem;
  color: var(--white-50);
  line-height: 1.5;
}
</style>
