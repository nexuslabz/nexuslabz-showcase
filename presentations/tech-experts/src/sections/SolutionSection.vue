<script setup>
defineProps({ active: Boolean });

const pillars = [
  {
    icon: '🌐',
    title: 'Hub Central de Autoridade',
    impact: 'Fim da dispersão.',
    desc: 'Um ponto único que centraliza todos os produtos, posiciona a marca e direciona cada visitante para a conversão certa.',
  },
  {
    icon: '🎯',
    title: '5 Landing Pages de Conversão',
    impact: 'Fim do lead perdido.',
    desc: 'Páginas dedicadas com copy persuasiva, CTAs diretos e integração com WhatsApp. Cada produto com sua máquina de vendas.',
  },
  {
    icon: '📈',
    title: 'Funil Digital Completo',
    impact: 'Fim do achismo.',
    desc: 'Jornada do visitante estruturada da descoberta ao fechamento, com captura de leads, lista de espera e dados reais de conversão.',
  },
  {
    icon: '🚀',
    title: 'Arquitetura Escalável',
    impact: 'Fim do retrabalho.',
    desc: 'Base técnica pensada para crescer. Novos produtos, novas páginas, novas integrações, sem precisar reconstruir nada.',
  },
];
</script>

<template>
  <section class="solution">
    <div class="solution__bg">
      <div class="solution__glow solution__glow--1" />
      <div class="solution__glow solution__glow--2" />
    </div>

    <div class="solution__content">
      <div class="solution__header">
        <span class="tag tag--nexus">A Solução</span>

        <h2 class="solution__title">
          Não é um site.<br />
          É um <span class="solution__highlight">ecossistema digital de vendas.</span>
        </h2>

        <p class="solution__subtitle">
          Vamos construir a infraestrutura que a Tech Experts precisa para parar de depender de
          indicação e começar a <strong>vender no automático</strong>.
        </p>
      </div>

      <div class="solution__grid">
        <div v-for="(pillar, i) in pillars" :key="i" class="solution__card">
          <div class="solution__card-top">
            <span class="solution__icon">{{ pillar.icon }}</span>
            <span class="solution__impact">{{ pillar.impact }}</span>
          </div>
          <h3 class="solution__card-title">{{ pillar.title }}</h3>
          <p class="solution__card-desc">{{ pillar.desc }}</p>
          <div class="solution__card-glow" />
        </div>
      </div>

      <div class="solution__bottom">
        <div class="solution__promise">
          <span class="solution__promise-icon">✅</span>
          <p>
            Peças conectadas. Cliques rastreados.
            <strong>Cada visitante vira uma oportunidade real de negócio.</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution {
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

.solution__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.solution__glow--1 {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}

.solution__glow--2 {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  bottom: -80px;
  left: -80px;
}

.solution__content {
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
  letter-spacing: 0.08em;
}

.solution__header {
  margin-bottom: 2rem;
}

.solution__title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.75rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.solution__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.solution__subtitle {
  font-size: 0.95rem;
  color: var(--white-50);
  line-height: 1.55;
  max-width: 620px;
}

.solution__subtitle strong {
  color: var(--pure-white);
  font-weight: 600;
}

.solution__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.solution__card {
  position: relative;
  padding: 1.25rem 1.25rem 1.15rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(212, 175, 55, 0.03);
  border: 1px solid var(--neon-gold-15);
  overflow: hidden;
  transition:
    border-color 0.3s,
    transform 0.3s;
}

.solution__card:hover {
  border-color: rgba(212, 175, 55, 0.4);
  transform: translateY(-2px);
}

.solution__card-glow {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.solution__card-top {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}

.solution__icon {
  font-size: 1.3rem;
}

.solution__impact {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--neon-gold);
  background: var(--neon-gold-08);
  padding: 0.15rem 0.55rem;
  border-radius: 3px;
}

.solution__card-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.3rem;
}

.solution__card-desc {
  font-size: 0.78rem;
  color: var(--white-50);
  line-height: 1.5;
}

.solution__bottom {
  margin-top: 1.5rem;
}

.solution__promise {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem 1.25rem;
  background: rgba(40, 167, 69, 0.08);
  border: 1px solid rgba(40, 167, 69, 0.2);
  border-radius: var(--radius-md, 8px);
}

.solution__promise-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.solution__promise p {
  font-size: 0.85rem;
  color: var(--white-70);
  line-height: 1.55;
  margin: 0;
}

.solution__promise strong {
  color: #5cb85c;
  font-weight: 600;
}
</style>
