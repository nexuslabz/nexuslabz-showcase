<script setup>
defineProps({ active: Boolean });

const steps = [
  {
    num: '01',
    title: 'Descoberta',
    desc: 'Google, LinkedIn, IA ou indicação. O profissional encontra a Tech Experts.',
    accent: false,
  },
  {
    num: '02',
    title: 'Hub',
    desc: 'Entra no hub, conhece o ecossistema completo e fica curioso para explorar mais.',
    accent: false,
  },
  {
    num: '03',
    title: 'Produto',
    desc: 'Landing page dedicada com copy, prova social e CTA direto para o produto certo.',
    accent: false,
  },
  {
    num: '04',
    title: 'Conexão',
    desc: 'WhatsApp, formulário ou agendamento. O lead quente chega pronto para conversar.',
    accent: false,
  },
  {
    num: '05',
    title: 'Conversão',
    desc: 'Mentoria fechada. Evento inscrito. Livro comprado. Comunidade ativada.',
    accent: true,
  },
];
</script>

<template>
  <section class="journey">
    <div class="journey__bg">
      <div class="journey__glow" />
    </div>

    <div class="journey__content">
      <span class="tag tag--nexus">A Máquina de Vendas</span>

      <h2 class="journey__title">
        Do primeiro clique ao<br />
        <span class="journey__highlight">fechamento.</span>
      </h2>

      <p class="journey__subtitle">
        Cada etapa pensada para transformar visitantes em clientes.
        <strong>Sem depender de sorte.</strong>
      </p>

      <div class="journey__timeline">
        <div class="journey__line" />
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="journey__step"
          :class="{ 'journey__step--accent': step.accent }"
        >
          <div class="journey__dot" :class="{ 'journey__dot--accent': step.accent }" />
          <div class="journey__num">{{ step.num }}</div>
          <h3 class="journey__step-title">{{ step.title }}</h3>
          <p class="journey__step-desc">{{ step.desc }}</p>
        </div>
      </div>

      <div class="journey__bottom">
        <span class="journey__bottom-bar" />
        <p>
          Esse funil trabalha <strong>24 horas por dia, 7 dias por semana</strong>. Enquanto você
          dorme, o ecossistema está captando, qualificando e convertendo.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.journey {
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

.journey__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.journey__glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.journey__content {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
}

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
}

.journey__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.6rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.journey__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.journey__subtitle {
  font-size: 0.92rem;
  color: var(--white-50);
  line-height: 1.5;
  margin-bottom: 2.5rem;
}

.journey__subtitle strong {
  color: var(--pure-white);
}

.journey__timeline {
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 2rem;
}

.journey__line {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  height: 2px;
  background: linear-gradient(90deg, var(--white-08), var(--neon-gold), var(--neon-gold));
  opacity: 0.4;
}

.journey__step {
  flex: 1;
  text-align: center;
  position: relative;
  padding: 0 0.5rem;
}

.journey__dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  background: var(--white-15);
  border: 3px solid var(--nexus-grey);
  position: relative;
  z-index: 1;
  transition: all 0.3s;
}

.journey__dot--accent {
  background: var(--neon-gold);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
}

.journey__num {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--white-30);
  letter-spacing: 0.1em;
  margin-bottom: 0.4rem;
}

.journey__step-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.35rem;
}

.journey__step--accent .journey__step-title {
  color: var(--neon-gold);
}

.journey__step-desc {
  font-size: 0.76rem;
  color: var(--white-50);
  line-height: 1.5;
}

.journey__bottom {
  display: flex;
  align-items: stretch;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  border-radius: var(--radius-md, 8px);
}

.journey__bottom-bar {
  width: 3px;
  flex-shrink: 0;
  border-radius: 3px;
  background: linear-gradient(180deg, var(--neon-gold), #f0d060);
}

.journey__bottom p {
  font-size: 0.85rem;
  color: var(--white-70);
  line-height: 1.55;
  margin: 0;
}

.journey__bottom strong {
  color: var(--neon-gold);
}
</style>
