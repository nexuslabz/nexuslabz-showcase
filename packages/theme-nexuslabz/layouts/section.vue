<template>
  <div class="slidev-layout section nexus-section">
    <div class="nexus-section__bar" />
    <div class="nexus-section__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.nexus-section {
  position: relative;
  display: flex;
  align-items: center;
  padding: 3rem 4rem;
}

.nexus-section__bar {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 40%;
  background: var(--neon-gold);
  border-radius: 0 3px 3px 0;
}

.nexus-section__content :deep(h1) {
  font-size: 2.4em;
  line-height: 1.2;
}

.nexus-section__content :deep(p) {
  color: rgba(255, 255, 255, 0.65);
  font-size: 1.1em;
  margin-top: 0.5rem;
}
</style>
