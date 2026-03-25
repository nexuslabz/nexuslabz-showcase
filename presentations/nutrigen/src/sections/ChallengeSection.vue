<script setup>
defineProps({ active: Boolean });

const challenges = [
  {
    icon: '🚫',
    pain: 'Sem site, sem autoridade.',
    detail:
      'O paciente busca no Google, não encontra o Nutrigen e marca com outro profissional que já tem presença digital.',
  },
  {
    icon: '🔀',
    pain: 'Instagram não é funil.',
    detail:
      'Postar conteúdo sem um site de conversão por trás é como abrir a porta e não ter onde receber o paciente.',
  },
  {
    icon: '🕳️',
    pain: 'Interesse que vira silêncio.',
    detail:
      'Sem funil e sem agendamento online, o potencial paciente perde o interesse antes de marcar a consulta.',
  },
  {
    icon: '🧱',
    pain: 'Crescimento depende só de você.',
    detail:
      'Sem estrutura digital, você traz cada paciente na marra. Nada trabalha de forma automática por você.',
  },
];
</script>

<template>
  <section class="challenge">
    <div class="challenge__bg">
      <div class="challenge__glow" />
    </div>

    <div class="challenge__content">
      <span class="tag tag--nexus">O Problema</span>

      <h2 class="challenge__title">
        Sem digital, o Nutrigen<br />
        <span class="challenge__highlight">já nasce limitado.</span>
      </h2>

      <p class="challenge__subtitle">
        Se você começa sem presença digital em 2026, já começa atrás. Essas falhas custam pacientes
        desde o primeiro dia:
      </p>

      <div class="challenge__grid">
        <div v-for="(c, i) in challenges" :key="i" class="challenge__card">
          <span class="challenge__icon">{{ c.icon }}</span>
          <div class="challenge__card-body">
            <h3 class="challenge__pain">{{ c.pain }}</h3>
            <p class="challenge__detail">{{ c.detail }}</p>
          </div>
        </div>
      </div>

      <div class="challenge__bottom">
        <div class="challenge__verdict">
          <span class="challenge__verdict-icon">🚨</span>
          <p>
            Enquanto isso não mudar, você perde tempo, consultas e ritmo de crescimento. Cada dia
            sem presença digital é uma <strong>oportunidade que não volta</strong>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.challenge {
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

.challenge__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.challenge__glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.challenge__content {
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

.challenge__title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.75rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.challenge__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.challenge__subtitle {
  font-size: 0.92rem;
  color: var(--white-50);
  line-height: 1.5;
  max-width: 600px;
  margin-bottom: 1.75rem;
}

.challenge__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.challenge__card {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1rem 1.15rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(220, 70, 70, 0.1);
  transition: border-color 0.3s;
}

.challenge__card:hover {
  border-color: rgba(220, 70, 70, 0.25);
}

.challenge__icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.challenge__card-body {
  min-width: 0;
}

.challenge__pain {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.2rem;
}

.challenge__detail {
  font-size: 0.78rem;
  color: var(--white-50);
  line-height: 1.5;
}

.challenge__bottom {
  margin-top: 1.5rem;
}

.challenge__verdict {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem 1.25rem;
  background: rgba(220, 70, 70, 0.08);
  border: 1px solid rgba(220, 70, 70, 0.2);
  border-radius: var(--radius-md, 8px);
}

.challenge__verdict-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.challenge__verdict p {
  font-size: 0.85rem;
  color: var(--white-70);
  line-height: 1.55;
  margin: 0;
}

.challenge__verdict strong {
  color: #f07070;
  font-weight: 600;
}
</style>
