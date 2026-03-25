<script setup>
defineProps({ active: Boolean });

const points = [
  {
    icon: '🌱',
    title: 'Fase de Reestruturação',
    text: 'Angelica está se reestruturando para retomar os atendimentos. O Nutrigen está saindo do papel e precisa nascer com presença digital.',
  },
  {
    icon: '📱',
    title: 'Hoje: Só Instagram e Indicação',
    text: 'Sem site, sem funil, sem captura de leads. A única vitrine é o Instagram. E indicação, sozinha, não escala.',
  },
  {
    icon: '🎯',
    title: 'Objetivo Claro',
    text: 'Vender protocolos e atrair leads qualificados para atendimentos individualizados. Autoridade + presença online.',
  },
  {
    icon: '🏗️',
    title: 'Tudo Por Construir',
    text: 'Domínio, site, agendamento, blog, captura de leads. A identidade visual já existe. Falta a infraestrutura digital.',
  },
];
</script>

<template>
  <section class="context">
    <div class="context__bg">
      <div class="context__glow" />
    </div>

    <div class="context__content">
      <span class="tag tag--nexus">O Cenário Atual</span>

      <h2 class="context__title">
        O Nutrigen está saindo do papel.
        <span class="context__highlight">E precisa nascer digital.</span>
      </h2>

      <p class="context__subtitle">
        Angelica está se reestruturando para voltar aos atendimentos e quer fazer diferente.
        <strong>O momento ideal para construir tudo certo desde o início</strong>, com
        posicionamento, presença e estrutura profissional.
      </p>

      <div class="context__grid">
        <div v-for="(point, i) in points" :key="i" class="context__card">
          <span class="context__icon">{{ point.icon }}</span>
          <div class="context__card-body">
            <h3 class="context__card-title">{{ point.title }}</h3>
            <p class="context__card-text">{{ point.text }}</p>
          </div>
        </div>
      </div>

      <div class="context__note">
        <span class="context__note-tag">Realidade</span>
        <span class="context__note-text"
          >Logo e paleta prontos, visão clara. Falta a infraestrutura digital para fazer
          acontecer.</span
        >
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
  position: relative;
  padding: 2.5rem 3rem;
  overflow: hidden;
}

.context__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.context__glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}

.context__content {
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

.context__title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.75rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.context__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.context__subtitle {
  font-size: 0.95rem;
  color: var(--white-50);
  line-height: 1.55;
  max-width: 640px;
  margin-bottom: 2rem;
}

.context__subtitle strong {
  color: var(--pure-white);
  font-weight: 600;
}

.context__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
  margin-bottom: 1.5rem;
}

.context__card {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1rem 1.15rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: border-color 0.3s;
}

.context__card:hover {
  border-color: var(--neon-gold-15);
}

.context__icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.context__card-body {
  min-width: 0;
}

.context__card-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.2rem;
}

.context__card-text {
  font-size: 0.78rem;
  color: var(--white-50);
  line-height: 1.5;
}

.context__note {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.context__note-tag {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--pure-white);
  background: rgba(255, 255, 255, 0.08);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  flex-shrink: 0;
}

.context__note-text {
  font-size: 0.78rem;
  color: var(--white-30);
  font-style: italic;
}
</style>
