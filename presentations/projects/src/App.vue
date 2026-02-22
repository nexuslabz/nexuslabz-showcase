<script setup>
import NexusLogo from '@theme/components/NexusLogo.vue';
</script>

<template>
  <div class="placeholder">
    <div class="placeholder__glow" />
    <div class="placeholder__content">
      <NexusLogo width="160" />
      <div class="placeholder__divider" />
      <h1>Projects</h1>
      <span class="tag">Coming Soon</span>
    </div>
  </div>
</template>

<style scoped>
.placeholder {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}
.placeholder__glow {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
  pointer-events: none;
}
.placeholder__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
}
.placeholder__divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-gold), transparent);
}
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--pure-white);
}
</style>
