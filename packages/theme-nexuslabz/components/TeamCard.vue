<script setup>
defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  avatar: { type: String, default: '' },
});
</script>

<template>
  <div class="team-card">
    <div v-if="avatar" class="team-card__avatar">
      <img :src="avatar" :alt="name" />
    </div>
    <div v-else class="team-card__avatar team-card__avatar--placeholder">
      {{ name.charAt(0) }}
    </div>
    <div class="team-card__info">
      <h3 class="team-card__name">{{ name }}</h3>
      <span class="team-card__role">{{ role }}</span>
    </div>
  </div>
</template>

<style scoped>
.team-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--nexus-grey-lighter);
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.team-card:hover {
  border-color: var(--neon-gold-dim);
}

.team-card__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.team-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-card__avatar--placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neon-gold);
  color: var(--nexus-grey);
  font-weight: 700;
  font-size: 1.2em;
}

.team-card__info {
  display: flex;
  flex-direction: column;
}

.team-card__name {
  font-size: 1em;
  font-weight: 600;
  color: var(--pure-white);
  margin: 0;
}

.team-card__role {
  font-size: 0.85em;
  color: var(--neon-gold-dim);
}
</style>
