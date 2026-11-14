<template>
  <div class="pixel-divider" :style="{ '--divider-color': color }">
    <div class="divider-track">
      <span
        v-for="n in 30"
        :key="n"
        class="pixel-block"
        :style="{
          animationDelay: (n * 0.08) + 's',
          left: ((n - 1) * 3.33) + '%'
        }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PixelDivider',
  props: {
    color: { type: String, default: 'var(--accent-pink)' },
  },
};
</script>

<style scoped>
.pixel-divider {
  position: relative;
  height: 12px;
  overflow: hidden;
}

.divider-track {
  position: relative;
  width: 100%;
  height: 100%;
}

.pixel-block {
  position: absolute;
  width: 4px;
  height: 4px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--divider-color);
  opacity: 0.15;
  animation: pixelPulse 3s ease-in-out infinite;
}

.pixel-block:nth-child(3n) {
  width: 6px;
  height: 6px;
  opacity: 0.3;
}

.pixel-block:nth-child(5n) {
  width: 3px;
  height: 3px;
}

@keyframes pixelPulse {
  0%, 100% { opacity: 0.1; transform: translateY(-50%) scale(0.8); }
  50% { opacity: 0.5; transform: translateY(-50%) scale(1.2); }
}
</style>
