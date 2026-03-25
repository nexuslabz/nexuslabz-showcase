<script setup>
defineProps({ active: Boolean });

const items = [
  {
    icon: '📄',
    title: 'Contrato',
    desc: 'No papel: escopo, prazo, entregas, responsabilidades e pagamento. Transparência para você e para nós.',
  },
  {
    icon: '🏢',
    title: 'Emissão de Nota Fiscal',
    desc: 'Nota fiscal emitida pela Colozzo Tech Ltda. (razão social atual, em processo de alteração para Nexus Labz Ltda.).',
  },
  {
    icon: '⚡',
    title: 'Powered by Nexus Labz',
    desc: 'Time Nexus Labz cuida de desenvolvimento, hospedagem e manutenção. Você tem canal direto, atualizações e ambiente estável.',
  },
  {
    icon: '🔍',
    title: 'Transparência em tempo real',
    desc: 'Você acompanha o progresso ao vivo, com reuniões de alinhamento e comunicação direta durante todo o projeto.',
  },
];
</script>

<template>
  <section class="formal">
    <div class="formal__bg">
      <div class="formal__glow" />
    </div>

    <div class="formal__content">
      <span class="tag tag--nexus">Segurança</span>

      <h2 class="formal__title">
        Profissionalismo do <span class="formal__highlight">início ao fim.</span>
      </h2>

      <p class="formal__subtitle">
        Contrato, nota fiscal, acompanhamento em tempo real.
        <strong>Sem surpresas.</strong>
      </p>

      <div class="formal__grid">
        <div v-for="(item, i) in items" :key="i" class="formal__card">
          <span class="formal__icon">{{ item.icon }}</span>
          <h3 class="formal__card-title">{{ item.title }}</h3>
          <p class="formal__card-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.formal {
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

.formal__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.formal__glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  top: -80px;
  right: -80px;
}

.formal__content {
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

.formal__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.6rem;
  letter-spacing: -0.02em;
}

.formal__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.formal__subtitle {
  font-size: 0.95rem;
  color: var(--white-50);
  line-height: 1.55;
  max-width: 480px;
  margin-bottom: 2rem;
}

.formal__subtitle strong {
  color: var(--pure-white);
}

.formal__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.formal__card {
  padding: 1.15rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: border-color 0.3s;
}

.formal__card:hover {
  border-color: var(--neon-gold-15);
}

.formal__icon {
  font-size: 1.3rem;
  display: block;
  margin-bottom: 0.6rem;
}

.formal__card-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.25rem;
}

.formal__card-desc {
  font-size: 0.78rem;
  color: var(--white-50);
  line-height: 1.5;
}
</style>
