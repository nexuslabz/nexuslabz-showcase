<template>
  <div class="slidev-layout two-cols nexus-two-cols">
    <div class="nexus-two-cols__left">
      <slot name="default" />
    </div>
    <div class="nexus-two-cols__divider" />
    <div class="nexus-two-cols__right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.nexus-two-cols {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.5rem;
  padding: 2.5rem 3rem;
  align-items: center;
}

.nexus-two-cols__divider {
  width: 1px;
  height: 60%;
  background: var(--nexus-grey-lighter);
}
</style>
