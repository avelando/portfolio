<template>
  <section id="about" class="about">
    <div class="container">
      <SectionTitle title="Sobre Mim" subtitle="Um pouco da minha trajetória" />

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
                <span class="terminal-title">about.txt</span>
              </div>
              <div class="terminal-body">
                <p class="line" v-for="(line, i) in descriptionLines" :key="i">
                  <span class="line-number">{{ String(i + 1).padStart(2, '0') }}</span>
                  <span class="line-text">{{ line }}</span>
                </p>
              </div>
            </div>
          </div>

          <div class="stats">
            <div
              class="stat"
              v-for="(stat, i) in stats"
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

export default {
  name: 'AboutSection',
  components: { SectionTitle },
  data() {
    return {
      isVisible: false,
      descriptionLines: [
        'Doutorando em Ciências da Computação e Matemática',
        'Computacional pelo ICMC/USP, com foco em',
        'Inteligência Artificial e Processamento de',
        'Linguagem Natural (PLN).',
        '',
        'Graduado em Análise e Desenvolvimento de Sistemas',
        'pelo IFPI. Pesquisador em PLN, RAG e Redes',
        'Complexas. Desenvolvedor Web Full-Stack.',
      ],
      stats: [
        { value: '7+', label: 'Publicações', icon: '&#9830;' },
        { value: '2', label: 'Registros de Software', icon: '&#9733;' },
        { value: '10+', label: 'Citações', icon: '&#9672;' },
      ],
    };
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
};
</script>

<style scoped>
.about {
  min-height: 100vh;
  padding: 2rem 2rem;
  padding-top: 90px;
  background: var(--bg-secondary);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
