<script setup>
defineProps({ active: Boolean });

const steps = [
  {
    num: '01',
    title: 'Descoberta',
    desc: 'Paciente pesquisa no Google ou encontra seu perfil nas redes sociais',
  },
  {
    num: '02',
    title: 'Visita',
    desc: 'Acessa o site e conhece o protocolo Nutrigen, os diferenciais e resultados',
  },
  {
    num: '03',
    title: 'Conexão',
    desc: 'Lê depoimentos, navega pelo conteúdo e sente confiança no trabalho',
  },
  {
    num: '04',
    title: 'Agendamento',
    desc: 'Clica no botão de agendamento e marca a consulta direto pelo site',
  },
  {
    num: '05',
    title: 'Fidelização',
    desc: 'Inicia o acompanhamento e se torna um promotor da sua marca',
  },
];
</script>

<template>
  <section class="journey">
    <div class="journey__content">
      <span class="tag">Jornada do Paciente</span>

      <h2 class="journey__title">
        Do primeiro clique à<br />
        <span class="text-gold">primeira consulta</span>
      </h2>

      <div class="journey__timeline">
        <div class="journey__line" />
        <div v-for="(step, i) in steps" :key="i" class="journey__step">
          <div class="journey__dot" />
          <div class="journey__num">{{ step.num }}</div>
          <h3 class="journey__step-title">{{ step.title }}</h3>
          <p class="journey__step-desc">{{ step.desc }}</p>
        </div>
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
  padding: 3rem;
}

.journey__content {
  max-width: 1000px;
  width: 100%;
}

.journey__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 3rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.journey__timeline {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.journey__line {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-gold), transparent);
  opacity: 0.3;
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
  background: var(--neon-gold);
  border: 3px solid var(--nexus-grey);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.15);
  position: relative;
  z-index: 1;
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
  font-weight: 600;
  color: var(--pure-white);
  margin-bottom: 0.35rem;
}

.journey__step-desc {
  font-size: 0.78rem;
  color: var(--white-50);
  line-height: 1.5;
}
</style>
