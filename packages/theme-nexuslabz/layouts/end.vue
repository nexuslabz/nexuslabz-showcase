<template>
  <div class="slidev-layout nexus-end">
    <div class="nexus-end__content">
      <slot />
    </div>
    <div class="nexus-end__accent" />
  </div>
</template>

<style scoped>
.nexus-end {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem;
  overflow: hidden;
}

.nexus-end__content {
  z-index: 1;
}

.nexus-end__content :deep(h1) {
  font-size: 2.4em;
  color: var(--neon-gold);
}

.nexus-end__content :deep(p) {
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.5rem;
}

.nexus-end__accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--neon-gold), transparent);
}
</style>
