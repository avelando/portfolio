<template>
  <div class="section-header">
    <div class="pixel-line left-line">
      <span v-for="n in 5" :key="'l'+n" class="px" :style="{ animationDelay: (n * 0.15) + 's' }"></span>
    </div>
    <div class="title-group">
      <span class="decorator left">&lt;</span>
      <h2 class="title">{{ title }}</h2>
      <span class="decorator right">/&gt;</span>
    </div>
    <div class="pixel-line right-line">
      <span v-for="n in 5" :key="'r'+n" class="px" :style="{ animationDelay: (n * 0.15) + 's' }"></span>
    </div>
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
  margin-bottom: 2.5rem;
}

.title-group {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.title {
  font-family: var(--font-pixel);
  font-size: 1rem;
  color: var(--accent-pink);
}

.decorator {
  font-family: var(--font-pixel);
  font-size: 0.8rem;
  color: var(--accent-green);
}

.pixel-line {
  display: inline-flex;
  gap: 6px;
  vertical-align: middle;
  margin: 0 0.8rem;
}

.px {
  display: inline-block;
  width: 4px;
  height: 4px;
  background: var(--accent-pink);
  animation: pxFade 2s ease-in-out infinite;
}

.px:nth-child(2n) {
  background: var(--accent-green);
}

.px:nth-child(3n) {
  background: var(--accent-yellow);
}

@keyframes pxFade {
  0%, 100% { opacity: 0.2; transform: scale(0.6); }
  50% { opacity: 1; transform: scale(1); }
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-top: 0.8rem;
}

@media (max-width: 600px) {
  .pixel-line {
    display: none;
  }
}
</style>
