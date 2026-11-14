<template>
  <section id="about" class="about">
    <div class="pixel-particles">
      <span v-for="n in 12" :key="n" class="float-pixel" :style="floatStyle(n)"></span>
    </div>
    <div class="container">
      <SectionTitle :title="sectionTitle" :subtitle="sectionSubtitle" />

      <div class="about-content">
        <div class="about-card" :class="{ visible: isVisible }" ref="card">
          <div class="card-inner">
            <div class="photo-wrapper">
              <img src="@/assets/images/avelar.jpg" alt="Avelar Sousa" class="photo" />
              <div class="photo-border"></div>
              <div class="photo-glitch"></div>
            </div>
            <div class="about-text">
              <div class="terminal-header">
                <span class="terminal-dot red"></span>
                <span class="terminal-dot yellow"></span>
                <span class="terminal-dot green"></span>
                <span class="terminal-title">{{ terminalTitle }}</span>
              </div>
              <div class="terminal-body">
                <p class="line" v-for="(line, i) in lines" :key="i">
                  <span class="line-number">{{ String(i + 1).padStart(2, '0') }}</span>
                  <span class="line-text">{{ line }}</span>
                </p>
              </div>
            </div>
          </div>

          <div class="stats">
            <div
              class="stat"
              v-for="(stat, i) in translatedStats"
              :key="stat.label"
              :style="{ animationDelay: (i * 0.15) + 's' }"
            >
              <span class="stat-icon" v-html="stat.icon"></span>
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';
import { t } from '@/i18n';

export default {
  name: 'AboutSection',
  components: { SectionTitle },
  data() {
    return {
      isVisible: false,
      icons: ['&#9830;', '&#9733;', '&#9672;'],
    };
  },
  computed: {
    sectionTitle() { return t('about.title'); },
    sectionSubtitle() { return t('about.subtitle'); },
    terminalTitle() { return t('about.terminalTitle'); },
    lines() { return t('about.lines'); },
    translatedStats() {
      const stats = t('about.stats');
      return stats.map((s, i) => ({ ...s, icon: this.icons[i] }));
    },
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) this.isVisible = true;
      },
      { threshold: 0.2 }
    );
    if (this.$refs.card) observer.observe(this.$refs.card);
  },
  methods: {
    floatStyle(n) {
      const x = ((n * 37) % 100);
      const y = ((n * 53) % 100);
      const size = (n % 3) + 2;
      const delay = (n * 0.5) % 6;
      const duration = 4 + (n % 4);
      const colors = ['var(--accent-pink)', 'var(--accent-green)', 'var(--accent-blue)', 'var(--accent-yellow)'];
      return {
        left: x + '%',
        top: y + '%',
        width: size + 'px',
        height: size + 'px',
        background: colors[n % 4],
        animationDelay: delay + 's',
        animationDuration: duration + 's',
      };
    },
  },
};
</script>

<style scoped>
.about {
  min-height: 100vh;
  padding: 80px 2rem 3rem;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.pixel-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.float-pixel {
  position: absolute;
  opacity: 0;
  animation: floatPixel ease-in-out infinite;
}

@keyframes floatPixel {
  0%, 100% { opacity: 0; transform: translateY(0) scale(0.5); }
  25% { opacity: 0.4; }
  50% { opacity: 0.6; transform: translateY(-20px) scale(1); }
  75% { opacity: 0.3; }
}

.container {
  position: relative;
  z-index: 1;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-pink), var(--accent-purple), var(--accent-blue));
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.about-card {
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.2);
  padding: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.about-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.card-inner {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.photo-wrapper {
  flex-shrink: 0;
  position: relative;
  width: 160px;
  height: 160px;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%);
  transition: filter 0.3s ease;
}

.photo-wrapper:hover .photo {
  filter: grayscale(0%);
}

.photo-border {
  position: absolute;
  inset: -4px;
  border: 3px solid var(--accent-pink);
  pointer-events: none;
  transition: border-color 0.3s ease;
}

.photo-wrapper:hover .photo-border {
  border-color: var(--accent-green);
}

.photo-glitch {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 95%, rgba(233, 69, 96, 0.1) 95%);
  background-size: 100% 4px;
  pointer-events: none;
  opacity: 0.5;
}

.about-text {
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.6rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.terminal-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.terminal-dot.red { background: #ff5f57; }
.terminal-dot.yellow { background: #ffbd2e; }
.terminal-dot.green { background: #28c840; }

.terminal-title {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  color: var(--text-muted);
  margin-left: 0.5rem;
}

.terminal-body {
  padding: 1rem;
}

.line {
  display: flex;
  gap: 1rem;
  line-height: 1.8;
  font-size: 0.85rem;
}

.line-number {
  color: var(--text-muted);
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  flex-shrink: 0;
  padding-top: 0.25rem;
  opacity: 0.5;
}

.line-text {
  color: var(--text-secondary);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 2px solid rgba(233, 69, 96, 0.15);
}

.stat {
  text-align: center;
  padding: 1rem;
  background: rgba(233, 69, 96, 0.03);
  border: 1px solid rgba(233, 69, 96, 0.1);
  transition: all 0.3s ease;
}

.stat:hover {
  border-color: var(--accent-pink);
  transform: translateY(-3px);
  background: rgba(233, 69, 96, 0.08);
}

.stat-icon {
  display: block;
  font-size: 1.2rem;
  color: var(--accent-pink);
  margin-bottom: 0.4rem;
}

.stat-value {
  font-family: var(--font-pixel);
  font-size: 1.2rem;
  color: var(--accent-green);
  display: block;
  margin-bottom: 0.4rem;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .card-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .photo-wrapper {
    width: 120px;
    height: 120px;
  }

  .stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
  }

  .about-card {
    padding: 1.2rem;
  }

  .stat {
    padding: 0.8rem 0.5rem;
  }

  .stat-value {
    font-size: 1rem;
  }

  .stat-label {
    font-size: 0.65rem;
  }

  .line {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .stats {
    grid-template-columns: 1fr;
  }
}
</style>
