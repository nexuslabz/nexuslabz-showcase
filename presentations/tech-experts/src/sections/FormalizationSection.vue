<script setup>
defineProps({ active: Boolean });

const items = [
  {
    icon: '📄',
    title: 'Contrato de Prestação de Serviços',
    desc: 'Tudo formalizado em contrato com escopo, prazos, entregáveis, responsabilidades e condições de pagamento bem definidos para proteger ambas as partes.',
  },
  {
    icon: '🏢',
    title: 'Emissão de NFS-e no CNPJ',
    desc: 'Toda nota fiscal será emitida no CNPJ da Colozzo Tech Ltda. (razão social atual, em processo de alteração para Nexus Labz Ltda.).',
  },
  {
    icon: '⚡',
    title: 'Powered by Nexus Labz',
    desc: 'Todo o ecossistema será desenvolvido, hospedado e mantido pela Nexus Labz, garantindo suporte contínuo, evolução técnica e estabilidade a longo prazo.',
  },
  {
    icon: '🤝',
    title: 'Transparência Total',
    desc: 'Você acompanha o progresso em tempo real, com reuniões de alinhamento e comunicação direta durante todo o processo.',
  },
];
</script>

<template>
  <section class="formal">
    <div class="formal__content">
      <span class="tag">Segurança & Formalização</span>

      <h2 class="formal__title">Tudo registrado e <span class="text-gold">formalizado</span></h2>

      <p class="formal__desc">
        Trabalhamos com total transparência e segurança jurídica. Cada etapa do projeto é respaldada
        por contrato e documentação fiscal.
      </p>

      <div class="formal__grid">
        <div v-for="(item, i) in items" :key="i" class="card formal__card">
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
  padding: 3rem;
}

.formal__content {
  max-width: 1000px;
  width: 100%;
}

.formal__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.5rem 0 0.75rem;
  letter-spacing: -0.02em;
}

.formal__desc {
  font-size: 1rem;
  color: var(--white-70);
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 2.5rem;
}

.formal__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.formal__card {
  display: flex;
  flex-direction: column;
}

.formal__icon {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
}

.formal__card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--pure-white);
  margin-bottom: 0.4rem;
}

.formal__card-desc {
  font-size: 0.82rem;
  color: var(--white-50);
  line-height: 1.55;
}
</style>
