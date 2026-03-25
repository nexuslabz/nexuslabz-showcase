<script setup>
defineProps({ active: Boolean });

const routes = [
  { path: '/servicos', label: 'Serviços e Protocolos', icon: '📋' },
  { path: '/sobre', label: 'Sobre a Angelica', icon: '👩‍⚕️' },
  { path: '/agendamento', label: 'Agendamento Online', icon: '📅' },
  { path: '/blog', label: 'Blog e Conteúdo', icon: '📝' },
  { path: '/depoimentos', label: 'Depoimentos e Cases', icon: '⭐' },
  { path: '/loja', label: 'Loja Online', icon: '🛒', future: true },
];
</script>

<template>
  <section class="eco">
    <div class="eco__bg">
      <div class="eco__glow" />
    </div>

    <div class="eco__content">
      <span class="tag tag--nexus">Arquitetura</span>

      <h2 class="eco__title">
        Uma <span class="eco__hl">plataforma completa</span> para transformar visita em agendamento.
      </h2>

      <div class="eco__diagram">
        <div class="eco__hub">
          <span class="eco__hub-badge">SITE PRINCIPAL</span>
          <span class="eco__hub-icon">🌐</span>
          <span class="eco__hub-domain">nutrigen.com.br</span>
        </div>

        <div class="eco__trunk" />

        <div class="eco__tree">
          <div
            v-for="(r, i) in routes"
            :key="i"
            class="eco__row"
            :class="i % 2 === 0 ? 'eco__row--left' : 'eco__row--right'"
          >
            <div class="eco__arm" />
            <div class="eco__node" :class="{ 'eco__node--future': r.future }">
              <span class="eco__node-icon">{{ r.icon }}</span>
              <span class="eco__node-name">{{ r.label }}</span>
              <span class="eco__node-path">{{ r.path }}</span>
              <span class="eco__node-tag">{{ r.future ? 'Futuro' : 'Página' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.eco {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  position: relative;
  padding: 1.5rem 3rem;
  overflow: hidden;
}

.eco__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.eco__glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
}

.eco__content {
  position: relative;
  z-index: 1;
  max-width: 780px;
  width: 100%;
}

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
}

.eco__title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 0.75rem 0 1.25rem;
  letter-spacing: -0.02em;
}

.eco__hl {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.eco__diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.eco__hub {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  padding: 0.65rem 2rem;
  border-radius: 10px;
  background: rgba(212, 175, 55, 0.05);
  border: 2px solid var(--neon-gold);
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.12);
  position: relative;
  z-index: 2;
}

.eco__hub-badge {
  font-size: 0.48rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--nexus-grey);
  background: var(--neon-gold);
  padding: 0.1rem 0.45rem;
  border-radius: 3px;
}

.eco__hub-icon {
  font-size: 1.1rem;
}

.eco__hub-domain {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--neon-gold);
}

.eco__trunk {
  width: 2px;
  height: 14px;
  background: linear-gradient(180deg, var(--neon-gold), var(--white-15));
  flex-shrink: 0;
}

.eco__tree {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.eco__tree::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--neon-gold-15), var(--white-08));
  transform: translateX(-50%);
}

.eco__row {
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
}

.eco__row--left {
  align-self: flex-start;
  flex-direction: row-reverse;
}

.eco__row--right {
  align-self: flex-end;
  flex-direction: row;
}

.eco__arm {
  width: 28px;
  height: 2px;
  background: var(--neon-gold-15);
  flex-shrink: 0;
}

.eco__node {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  padding: 0.45rem 0.7rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: border-color 0.3s;
}

.eco__node:hover {
  border-color: var(--neon-gold-15);
}

.eco__node--future {
  border-style: dashed;
  opacity: 0.6;
}

.eco__node--future:hover {
  opacity: 1;
}

.eco__node-icon {
  font-size: 0.9rem;
  flex-shrink: 0;
}

.eco__node-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--pure-white);
  flex: 1;
}

.eco__node-path {
  font-size: 0.55rem;
  color: var(--white-20);
  font-family: monospace;
}

.eco__node-tag {
  font-size: 0.48rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--neon-gold);
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  border-radius: 100px;
  padding: 0.1rem 0.35rem;
  white-space: nowrap;
}
</style>
