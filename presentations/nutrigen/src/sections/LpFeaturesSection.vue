<script setup>
defineProps({ active: Boolean });

const features = [
  {
    icon: '🎯',
    title: 'Hero com CTA direto',
    desc: 'Abertura forte com headline, vídeo opcional e botão de ação claro. A visitante entende a proposta em segundos.',
  },
  {
    icon: '👩‍⚕️',
    title: 'Sobre a Angelica',
    desc: 'Seção de credibilidade com sua história, formação e diferenciais. A paciente confia antes de comprar.',
  },
  {
    icon: '📋',
    title: 'Protocolo Nutrigen',
    desc: 'Explicação clara do que é o protocolo, como funciona e o que a paciente vai receber.',
  },
  {
    icon: '✅',
    title: 'Benefícios e Resultados',
    desc: 'Lista visual dos ganhos reais. A paciente vê o que muda na vida dela ao seguir o protocolo.',
  },
  {
    icon: '⭐',
    title: 'Depoimentos e Prova Social',
    desc: 'Feedbacks reais que geram confiança. Quem está em dúvida se convence ao ver resultados de outras pessoas.',
  },
  {
    icon: '❓',
    title: 'FAQ',
    desc: 'Perguntas frequentes que eliminam objeções. A paciente tira as dúvidas sem precisar perguntar.',
  },
  {
    icon: '💬',
    title: 'WhatsApp Integrado',
    desc: 'Botão flutuante para contato rápido. Quem preferir falar antes de comprar, consegue.',
  },
  {
    icon: '📊',
    title: 'Analytics e Rastreamento',
    desc: 'Você acompanha quantas pessoas visitaram, clicaram e converteram. Dados reais para tomar decisões.',
  },
];
</script>

<template>
  <section class="lpf">
    <div class="lpf__bg">
      <div class="lpf__glow" />
    </div>

    <div class="lpf__content">
      <div class="lpf__offer-tag"><span>Oferta 2</span></div>
      <span class="tag tag--nexus">Landing Page de Conversão</span>

      <h2 class="lpf__title">Uma página. <span class="lpf__hl">Um objetivo.</span></h2>

      <p class="lpf__subtitle">
        Página única pensada para vender o protocolo Nutrigen. Cada seção existe para
        <strong>levar a visitante até o botão de ação</strong>.
      </p>

      <div class="lpf__grid">
        <div v-for="(feat, i) in features" :key="i" class="lpf__card">
          <span class="lpf__icon">{{ feat.icon }}</span>
          <h3 class="lpf__card-title">{{ feat.title }}</h3>
          <p class="lpf__card-desc">{{ feat.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lpf {
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

.lpf__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.lpf__glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}

.lpf__content {
  position: relative;
  z-index: 1;
  max-width: 960px;
  width: 100%;
  text-align: center;
}

.lpf__offer-tag {
  display: block;
  margin-bottom: 0.6rem;
}

.lpf__offer-tag span {
  display: inline-block;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: var(--neon-gold);
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.25rem 0.85rem;
  border-radius: 100px;
}

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
}

.lpf__title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1rem 0 0.75rem;
  letter-spacing: -0.02em;
}

.lpf__hl {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lpf__subtitle {
  font-size: 0.95rem;
  color: var(--white-50);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 1.75rem;
}

.lpf__subtitle strong {
  color: var(--white-70);
}

.lpf__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.lpf__card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1rem;
  text-align: left;
  transition: border-color 0.3s ease;
}

.lpf__card:hover {
  border-color: rgba(212, 175, 55, 0.2);
}

.lpf__icon {
  font-size: 1.3rem;
  display: block;
  margin-bottom: 0.6rem;
}

.lpf__card-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.35rem;
}

.lpf__card-desc {
  font-size: 0.72rem;
  color: var(--white-50);
  line-height: 1.5;
  margin: 0;
}
</style>
