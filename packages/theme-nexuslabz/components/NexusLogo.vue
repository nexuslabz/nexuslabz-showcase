<script setup>
import logoWhite from '@assets/logos/logo-full-no-bg-white.png';
import logoGrey from '@assets/logos/logo-full-no-bg-grey.png';

defineProps({
  width: { type: String, default: '160' },
  variant: { type: String, default: 'white' },
});
</script>

<template>
  <img
    :src="variant === 'white' ? logoWhite : logoGrey"
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
