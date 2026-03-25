<script setup>
defineProps({ active: Boolean });

const features = [
  {
    icon: '🎯',
    title: 'Hero com CTA direto',
    desc: 'Abertura sobre o Protocolo de Modulação Metabólica: o que é, para quem e botão de agendamento logo no topo.',
  },
  {
    icon: '👩‍⚕️',
    title: 'Sobre a Angelica',
    desc: 'Formação em nutrição funcional, abordagem de causa raiz e o diferencial de tratar hormônios e metabolismo.',
  },
  {
    icon: '🧬',
    title: 'O Protocolo',
    desc: 'Modulação Metabólica explicada de forma simples: genética, hormônios e metabolismo como base do tratamento.',
  },
  {
    icon: '✅',
    title: 'Benefícios e Resultados',
    desc: 'Lista visual dos ganhos reais. A paciente vê o que muda quando você trata a causa, não o sintoma.',
  },
  {
    icon: '⭐',
    title: 'Depoimentos Reais',
    desc: 'Resultados de pacientes que fizeram o protocolo. Prova social que gera confiança em quem está conhecendo.',
  },
  {
    icon: '❓',
    title: 'FAQ',
    desc: 'Perguntas frequentes que eliminam objeções. A paciente tira as dúvidas e decide ali mesmo.',
  },
  {
    icon: '💬',
    title: 'WhatsApp Integrado',
    desc: 'Botão flutuante para quem prefere conversar antes de agendar. Contato rápido em um clique.',
  },
  {
    icon: '📊',
    title: 'Analytics e Rastreamento',
    desc: 'Você vê quantas pessoas visitaram, de onde vieram e quantas agendaram. Dados reais para decidir.',
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
        Página única com o Protocolo de Modulação Metabólica no centro. Cada seção existe para
        <strong>levar a visitante do interesse ao agendamento</strong>.
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
