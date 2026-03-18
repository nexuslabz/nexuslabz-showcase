<script setup>
defineProps({ active: Boolean });

const routes = [
  { path: '/mentoria', label: 'Mentoria Executive', icon: '🧠' },
  { path: '/leadership-pro', label: 'Leadership Pro', icon: '🎖️' },
  { path: '/eventos', label: 'Eventos & Workshops', icon: '🎤' },
  { path: '/livro', label: 'Livro', icon: '📖' },
  { path: '/comunidade', label: 'Comunidade', icon: '👥' },
  { path: '/...', label: 'Novos Produtos', icon: '🚀', future: true },
];
</script>

<template>
  <section class="ecosystem">
    <div class="ecosystem__content">
      <span class="tag">Arquitetura</span>

      <h2 class="ecosystem__title">O <span class="text-gold">ecossistema</span> completo</h2>

      <div class="ecosystem__diagram">
        <div class="ecosystem__hub">
          <div class="ecosystem__hub-icon">🌐</div>
          <div class="ecosystem__hub-label">techexpertsmentory.com</div>
          <div class="ecosystem__hub-desc">Hub Principal</div>
        </div>

        <div class="ecosystem__trunk" />

        <div class="ecosystem__branches">
          <div
            v-for="(route, i) in routes"
            :key="i"
            class="ecosystem__branch"
            :class="i % 2 === 0 ? 'ecosystem__branch--left' : 'ecosystem__branch--right'"
          >
            <div class="ecosystem__arm" />
            <div
              class="card ecosystem__route"
              :class="{ 'ecosystem__route--future': route.future }"
            >
              <span class="ecosystem__route-icon">{{ route.icon }}</span>
              <div class="ecosystem__route-info">
                <span class="ecosystem__route-label">{{ route.label }}</span>
                <span class="ecosystem__route-path">{{ route.path }}</span>
              </div>
              <span class="ecosystem__route-type">{{ route.future ? 'Futuro' : 'LP' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ecosystem {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  padding: 2rem 3rem;
}

.ecosystem__content {
  max-width: 800px;
  width: 100%;
}

.ecosystem__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 1rem 0 2rem;
  letter-spacing: -0.02em;
}

.ecosystem__diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.ecosystem__hub {
  text-align: center;
  padding: 1.25rem 2.5rem;
  border-radius: var(--radius-lg);
  background: var(--neon-gold-08);
  border: 2px solid var(--neon-gold);
  box-shadow:
    0 0 30px rgba(212, 175, 55, 0.15),
    0 0 60px rgba(212, 175, 55, 0.05);
  position: relative;
  z-index: 2;
}

.ecosystem__hub-icon {
  font-size: 1.6rem;
  margin-bottom: 0.35rem;
}

.ecosystem__hub-label {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--neon-gold);
  letter-spacing: -0.01em;
}

.ecosystem__hub-desc {
  font-size: 0.7rem;
  color: var(--white-50);
  margin-top: 0.15rem;
}

.ecosystem__trunk {
  width: 2px;
  height: 24px;
  background: linear-gradient(180deg, var(--neon-gold), var(--white-15));
  flex-shrink: 0;
}

.ecosystem__branches {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.ecosystem__branches::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--neon-gold-15), var(--white-08));
  transform: translateX(-50%);
}

.ecosystem__branch {
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
}

.ecosystem__branch--left {
  align-self: flex-start;
  flex-direction: row-reverse;
  padding-right: 0;
}

.ecosystem__branch--right {
  align-self: flex-end;
  flex-direction: row;
  padding-left: 0;
}

.ecosystem__arm {
  width: 32px;
  height: 2px;
  background: var(--neon-gold-15);
  flex-shrink: 0;
}

.ecosystem__branch--left .ecosystem__arm {
  margin-left: 0;
}

.ecosystem__branch--right .ecosystem__arm {
  margin-right: 0;
}

.ecosystem__route {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex: 1;
  padding: 0.7rem 1rem !important;
}

.ecosystem__route-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.ecosystem__route-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.ecosystem__route-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--pure-white);
}

.ecosystem__route-path {
  font-size: 0.65rem;
  color: var(--white-30);
  font-family: monospace;
}

.ecosystem__route-type {
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--neon-gold);
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  border-radius: 100px;
  padding: 0.15rem 0.5rem;
  white-space: nowrap;
}

.ecosystem__route--future {
  border-style: dashed !important;
  opacity: 0.7;
}
</style>
