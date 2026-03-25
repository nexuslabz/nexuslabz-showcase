<script setup>
defineProps({ active: Boolean });
</script>

<template>
  <section class="seogeo">
    <div class="seogeo__bg">
      <div class="seogeo__glow" />
    </div>

    <div class="seogeo__content">
      <span class="tag tag--nexus">Visibilidade Digital</span>

      <h2 class="seogeo__title">
        Encontrada por <span class="seogeo__highlight">humanos</span> e por
        <span class="seogeo__highlight">IAs.</span>
      </h2>

      <p class="seogeo__subtitle">
        Não basta um site bonito. Suas pacientes precisam achar você no Google, e as IAs precisam
        conseguir recomendar você com segurança.
        <strong>Cuidamos das duas frentes em tudo que entregamos.</strong>
      </p>

      <div class="seogeo__grid">
        <div class="seogeo__card seogeo__card--seo">
          <div class="seogeo__card-header">
            <span class="seogeo__badge seogeo__badge--seo">SEO</span>
            <h3 class="seogeo__card-title">Busca no Google</h3>
          </div>
          <p class="seogeo__card-hook">Quando a paciente pesquisar, você aparece</p>
          <div class="seogeo__items">
            <div class="seogeo__item">
              <span class="seogeo__icon">🔍</span>
              <span>Meta tags, headings e estrutura semântica</span>
            </div>
            <div class="seogeo__item">
              <span class="seogeo__icon">⚡</span>
              <span>Site rápido com nota máxima em velocidade</span>
            </div>
            <div class="seogeo__item">
              <span class="seogeo__icon">📊</span>
              <span>Google Analytics + Search Console</span>
            </div>
            <div class="seogeo__item">
              <span class="seogeo__icon">🗺️</span>
              <span>Sitemap, indexação e robots.txt</span>
            </div>
            <div class="seogeo__item">
              <span class="seogeo__icon">📝</span>
              <span>Blog com termos que pacientes realmente pesquisam</span>
            </div>
          </div>
        </div>

        <div class="seogeo__card seogeo__card--geo">
          <div class="seogeo__card-header">
            <span class="seogeo__badge seogeo__badge--geo">GEO</span>
            <h3 class="seogeo__card-title">Recomendação em IAs</h3>
          </div>
          <p class="seogeo__card-hook">A paciente pergunta à IA e a IA recomenda você</p>
          <div class="seogeo__items">
            <div class="seogeo__item">
              <span class="seogeo__icon">🧠</span>
              <span>Dados organizados para as IAs entenderem o site</span>
            </div>
            <div class="seogeo__item">
              <span class="seogeo__icon">💬</span>
              <span>Conteúdo que a IA consegue citar com confiança</span>
            </div>
            <div class="seogeo__item">
              <span class="seogeo__icon">🔗</span>
              <span>Links que os modelos de IA conseguem rastrear</span>
            </div>
            <div class="seogeo__item">
              <span class="seogeo__icon">🏆</span>
              <span>Otimização para "posição zero"</span>
            </div>
            <div class="seogeo__item">
              <span class="seogeo__icon">📡</span>
              <span>Acompanhamento de como as IAs citam você</span>
            </div>
          </div>
        </div>
      </div>

      <div class="seogeo__vs">
        <div class="seogeo__vs-item">
          <span class="seogeo__vs-label">SEO</span>
          <span class="seogeo__vs-desc">A paciente pesquisa no Google e encontra você</span>
        </div>
        <span class="seogeo__vs-plus">+</span>
        <div class="seogeo__vs-item">
          <span class="seogeo__vs-label seogeo__vs-label--geo">GEO</span>
          <span class="seogeo__vs-desc">A paciente pergunta à IA e a IA recomenda você</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.seogeo {
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

.seogeo__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.seogeo__glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  top: -80px;
  left: -80px;
}

.seogeo__content {
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
}

.seogeo__title {
  font-size: clamp(1.6rem, 3.5vw, 2.3rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1.25rem 0 0.6rem;
  letter-spacing: -0.02em;
}

.seogeo__highlight {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.seogeo__subtitle {
  font-size: 0.92rem;
  color: var(--white-50);
  line-height: 1.5;
  max-width: 580px;
  margin-bottom: 1.75rem;
}

.seogeo__subtitle strong {
  color: var(--pure-white);
}

.seogeo__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.seogeo__card {
  padding: 1.25rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  transition: border-color 0.3s;
}

.seogeo__card--seo {
  border: 1px solid rgba(66, 133, 244, 0.15);
}

.seogeo__card--seo:hover {
  border-color: rgba(66, 133, 244, 0.3);
}

.seogeo__card--geo {
  border: 1px solid var(--neon-gold-15);
}

.seogeo__card--geo:hover {
  border-color: rgba(212, 175, 55, 0.35);
}

.seogeo__card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.seogeo__badge {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
}

.seogeo__badge--seo {
  background: rgba(66, 133, 244, 0.15);
  color: #6ea8fe;
}

.seogeo__badge--geo {
  background: rgba(212, 175, 55, 0.15);
  color: var(--neon-gold);
}

.seogeo__card-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--pure-white);
}

.seogeo__card-hook {
  font-size: 0.78rem;
  color: var(--white-40);
  font-style: italic;
  margin-bottom: 0.85rem;
}

.seogeo__items {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.seogeo__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.76rem;
  color: var(--white-50);
}

.seogeo__icon {
  font-size: 0.85rem;
  flex-shrink: 0;
}

.seogeo__vs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 0.85rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md, 8px);
}

.seogeo__vs-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.seogeo__vs-label {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: #6ea8fe;
  background: rgba(66, 133, 244, 0.12);
  padding: 0.15rem 0.45rem;
  border-radius: 3px;
}

.seogeo__vs-label--geo {
  color: var(--neon-gold);
  background: rgba(212, 175, 55, 0.12);
}

.seogeo__vs-desc {
  font-size: 0.78rem;
  color: var(--white-50);
}

.seogeo__vs-plus {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--neon-gold);
}
</style>
