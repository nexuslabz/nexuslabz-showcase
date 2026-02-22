<template>
  <div class="slidev-layout cover nexus-cover">
    <div class="nexus-cover__accent" />
    <div class="nexus-cover__content">
      <slot />
    </div>
    <div class="nexus-cover__footer">
      <span class="nexus-cover__brand">Nexus Labz</span>
    </div>
  </div>
</template>

<style scoped>
.nexus-cover {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem;
  overflow: hidden;
}

.nexus-cover__accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--neon-gold), transparent);
}

.nexus-cover__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 1;
}

.nexus-cover__content :deep(h1) {
  font-size: 2.8em;
  line-height: 1.1;
}

.nexus-cover__content :deep(h2) {
  font-size: 1.3em;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
}

.nexus-cover__footer {
  position: absolute;
  bottom: 2rem;
  z-index: 1;
}

.nexus-cover__brand {
  color: var(--neon-gold-dim);
  font-size: 0.85em;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
</style>
