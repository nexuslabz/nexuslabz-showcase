<script setup>
defineProps({ active: Boolean });

const problems = [
  {
    icon: '🚫',
    pain: 'Sem site, sem conversão.',
    detail: 'Cada dia sem um ponto digital de vendas é dinheiro deixado na mesa.',
  },
  {
    icon: '🔀',
    pain: 'Leads chegam, mas não convertem.',
    detail:
      'A audiência está distribuída entre vários canais sem conexão. Não existe um fluxo claro até a conversão.',
  },
  {
    icon: '🕳️',
    pain: 'Leads entram e somem.',
    detail:
      'Sem funil, o interesse vira silêncio. O potencial cliente desiste antes de falar com você.',
  },
  {
    icon: '🧱',
    pain: 'Crescimento preso a pessoas. Zero automação.',
    detail:
      'Sem estrutura digital, escalar depende exclusivamente de esforço humano. Nenhum processo automático de aquisição.',
  },
  {
    icon: '📦',
    pain: 'Produtos existem, ecossistema não.',
    detail: 'Mentoria, liderança, workshops, livro... tudo solto. O cliente não enxerga o todo.',
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
        A Tech Experts está<br />
        <span class="challenge__highlight">deixando dinheiro na mesa.</span>
      </h2>

      <p class="challenge__subtitle">
        Enquanto o negócio cresce na base do esforço pessoal, essas lacunas estão custando vendas
        todos os dias:
      </p>

      <div class="challenge__grid">
        <div v-for="(p, i) in problems" :key="i" class="challenge__card">
          <span class="challenge__icon">{{ p.icon }}</span>
          <div class="challenge__card-body">
            <h3 class="challenge__pain">{{ p.pain }}</h3>
            <p class="challenge__detail">{{ p.detail }}</p>
          </div>
        </div>
      </div>

      <div class="challenge__bottom">
        <div class="challenge__verdict">
          <span class="challenge__verdict-icon">🚨</span>
          <p>
            Enquanto isso não muda, cada dia que passa representa uma possível
            <strong>oportunidade perdida</strong>, uma venda não finalizada e principalmente um
            crescimento travado.
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

.tag--danger {
  background: rgba(220, 70, 70, 0.12);
  border-color: rgba(220, 70, 70, 0.25);
  color: #f07070;
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

.challenge__grid .challenge__card:last-child {
  grid-column: 1 / -1;
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
