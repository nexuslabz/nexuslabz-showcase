<script setup>
defineProps({
  width: { type: String, default: '120' },
});
</script>

<template>
  <img
    src="/logos/logo-full-no-bg-white.png"
    alt="Nexus Labz"
    :style="{ width: `${width}px` }"
    class="nexus-logo"
  />
</template>

<style scoped>
.nexus-logo {
  display: inline-block;
  object-fit: contain;
}
</style>
