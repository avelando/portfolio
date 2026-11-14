<template>
  <div class="section-header">
    <span class="decorator left">&lt;</span>
    <h2 class="title">{{ title }}</h2>
    <span class="decorator right">/&gt;</span>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
  },
};
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-family: var(--font-pixel);
  font-size: 1rem;
  color: var(--accent-pink);
  display: inline;
}

.decorator {
  font-family: var(--font-pixel);
  font-size: 0.8rem;
  color: var(--accent-green);
}

.left {
  margin-right: 0.5rem;
}

.right {
  margin-left: 0.5rem;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-top: 0.8rem;
}
</style>
