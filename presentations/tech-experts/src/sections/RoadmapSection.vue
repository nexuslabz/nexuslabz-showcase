<script setup>
defineProps({ active: Boolean });

const phases = [
  {
    phase: 'Fase 1',
    title: 'Discovery & Estratégia',
    period: 'Semanas 1 a 4 (Mês 1)',
    items: [
      'Reunião de kickoff e imersão no negócio',
      'Mapeamento de produtos e público-alvo',
      'Arquitetura do ecossistema e URLs',
      'Estratégia de funil por produto',
      'Wireframes e protótipos navegáveis',
      'Definição de conteúdo e tom de voz',
    ],
    outcome: 'Protótipos e arquitetura aprovados',
  },
  {
    phase: 'Fase 2',
    title: 'Design & Desenvolvimento',
    period: 'Semanas 5 a 16 (Meses 2, 3 e 4)',
    items: [
      'Design UI/UX do Hub central',
      'Design das 5 landing pages de produtos',
      'Desenvolvimento frontend responsivo',
      'Integração com WhatsApp Business',
      'Formulários de captura e lista de espera',
      'SEO & GEO on-page + Google Analytics',
      'Área de depoimentos e social proof',
    ],
    outcome: 'Hub + 5 LPs em homologação',
  },
  {
    phase: 'Fase 3',
    title: 'Testes & Lançamento',
    period: 'Semanas 17 a 20 (Mês 5)',
    items: [
      'Testes de performance e compatibilidade',
      'Revisão de conteúdo e copy final',
      'Otimização de velocidade e Core Web Vitals',
      'Configuração de domínio e SSL',
      'Go-live com monitoramento ativo',
      'Início dos 6 meses de suporte incluso',
    ],
    outcome: 'Ecossistema no ar com suporte ativo',
  },
];
</script>

<template>
  <section class="roadmap">
    <div class="roadmap__content">
      <span class="tag">Plano de Execução</span>

      <h2 class="roadmap__title">Como vamos <span class="text-gold">construir</span></h2>

      <p class="roadmap__desc">
        Um processo estruturado em 3 fases ao longo de 20 semanas (~5 meses), com entregas claras em
        cada etapa.
      </p>

      <div class="roadmap__grid">
        <div v-for="(p, i) in phases" :key="i" class="card roadmap__card">
          <div class="roadmap__phase">{{ p.phase }}</div>
          <h3 class="roadmap__card-title">{{ p.title }}</h3>
          <div class="roadmap__period">{{ p.period }}</div>
          <ul class="roadmap__items">
            <li v-for="(item, j) in p.items" :key="j">{{ item }}</li>
          </ul>
          <div class="roadmap__outcome">
            <span class="roadmap__outcome-label">Entregável</span>
            <span class="tag roadmap__outcome-tag">{{ p.outcome }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.roadmap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  padding: 3rem;
}

.roadmap__content {
  max-width: 1050px;
  width: 100%;
}

.roadmap__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 0.75rem;
  letter-spacing: -0.02em;
}

.roadmap__desc {
  font-size: 1rem;
  color: var(--white-70);
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 2.5rem;
}

.roadmap__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  align-items: stretch;
}

.roadmap__phase {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--neon-gold);
  margin-bottom: 0.5rem;
}

.roadmap__card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.25rem;
}

.roadmap__period {
  font-size: 0.72rem;
  color: var(--white-30);
  margin-bottom: 1rem;
}

.roadmap__items {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.roadmap__items li {
  font-size: 0.78rem;
  color: var(--white-50);
  padding-left: 1rem;
  position: relative;
  line-height: 1.45;
}

.roadmap__items li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.45em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--neon-gold);
  opacity: 0.5;
}

.roadmap__card {
  display: flex;
  flex-direction: column;
}

.roadmap__outcome {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--white-08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  text-align: center;
}

.roadmap__outcome-label {
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--white-30);
}

.roadmap__outcome-tag {
  font-size: 0.68rem;
  padding: 0.25rem 0.65rem;
  line-height: 1.35;
  display: inline-block;
  max-width: 100%;
}
</style>
