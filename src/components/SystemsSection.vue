<template>
  <section id="systems" class="systems">
    <div class="container">
      <SectionTitle title="Sistemas" subtitle="Sistemas desenvolvidos" />

      <div class="systems-grid">
        <div
          class="system-card"
          v-for="(system, index) in visibleSystems"
          :key="index"
        >
          <div class="card-top">
            <img :src="getImage(system.image)" :alt="system.title" class="card-image" />
            <div class="card-overlay">
              <span class="tag">Sistema</span>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title">{{ system.title }}</h3>
            <p class="card-desc">{{ system.description }}</p>
            <div class="card-techs">
              <span class="tech" v-for="tech in system.techs" :key="tech">{{ tech }}</span>
            </div>
            <div class="card-links">
              <a v-if="system.link" :href="system.link" target="_blank" rel="noopener" class="card-link page">
                <span>&#9654;</span> Acessar
              </a>
              <a v-if="system.github" :href="system.github" target="_blank" rel="noopener" class="card-link github">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="show-more" v-if="systems.length > initialCount && !showAll">
        <button class="show-more-btn" @click="showAll = true">
          <span class="btn-icon">&#9660;</span> Ver mais sistemas
        </button>
      </div>
      <div class="show-less" v-if="showAll && systems.length > initialCount">
        <button class="show-more-btn" @click="showAll = false">
          <span class="btn-icon">&#9650;</span> Ver menos
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';

export default {
  name: 'SystemsSection',
  components: { SectionTitle },
  data() {
    return {
      showAll: false,
      initialCount: 6,
      systems: [
        {
          title: 'SisTIRA',
          description: 'Plataforma Web de Tutoria Inteligente para Avaliação Automática de Respostas Discursivas. Registro de software INPI: BR512025004679-0.',
          image: 'sistira.png',
          techs: ['Python', 'PLN', 'Django', 'NLP'],
          link: 'https://www.figma.com/design/oWMkDCr0E8KoUuV2LuxPFZ/SisTIRA',
        },
        {
          title: 'RAG — Documentos Públicos',
          description: 'Sistema de Recuperação de Informação em Documentos Públicos utilizando Retrieval Augmented Generation (RAG).',
          image: 'black.jpg',
          techs: ['RAG', 'LLM', 'Python', 'NLP'],
        },
        {
          title: 'Landing Page — SOMA',
          description: 'Landing page desenvolvida para divulgação da Construtora e Incorporadora SOMA.',
          image: 'cis.png',
          techs: ['Next.js', 'TypeScript', 'CSS'],
          github: 'https://github.com/Aprendizes-SOMA/landing-page.git',
          link: 'https://www.figma.com/design/B62f8ZIu5CUD3qJQhFkkHy/Construtora-e-incorporadora-SOMA',
        },
        {
          title: 'Wordle of Dreams',
          description: 'Jogo de palavras inspirado no Wordle. Registro de software INPI: BR512026001585-5.',
          image: 'black.jpg',
          techs: ['TypeScript', 'Web', 'JavaScript'],
          github: 'https://github.com/WordleOfThrones/WordleOfThrones.git',
        },
        {
          title: 'ThronesAPI',
          description: 'API desenvolvida para o jogo WordleOfThrones.',
          image: 'black.jpg',
          techs: ['Node.js', 'Express', 'API'],
          github: 'https://github.com/WordleOfThrones/ThronesAPI.git',
        },
        {
          title: 'Cursos Online — AJK System',
          description: 'Sistema desenvolvido com Java e JavaFX para a disciplina de Programação Orientada a Objetos.',
          image: 'black.jpg',
          techs: ['Java', 'JavaFX', 'OOP'],
          github: 'https://github.com/ifpi-picos/cursos-online-ajk-academic-system.git',
        },
      ],
    };
  },
  computed: {
    visibleSystems() {
      return this.showAll ? this.systems : this.systems.slice(0, this.initialCount);
    },
  },
  created() {
    const context = require.context('@/assets/images/', false, /\.(png|jpe?g|svg)$/);
    this.imageContext = {};
    context.keys().forEach((key) => {
      this.imageContext[key.replace('./', '')] = context(key);
    });
  },
  methods: {
    getImage(name) {
      return this.imageContext[name] || '';
    },
  },
};
</script>

<style scoped>
.systems {
  padding: 4rem 2rem;
  background: var(--bg-secondary);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.systems-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.2rem;
}

.system-card {
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.12);
  overflow: hidden;
  transition: all 0.3s ease;
}

.system-card:hover {
  border-color: var(--accent-green);
  transform: translateY(-4px);
}

.card-top {
  position: relative;
  height: 160px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.system-card:hover .card-image {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
}

.tag {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  padding: 0.3rem 0.6rem;
  border: 2px solid var(--accent-green);
  color: var(--accent-green);
  background: rgba(83, 215, 105, 0.15);
}

.card-body {
  padding: 1.2rem;
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 0.8rem;
}

.card-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.tech {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  padding: 0.2rem 0.5rem;
  background: rgba(79, 195, 247, 0.1);
  border: 1px solid rgba(79, 195, 247, 0.3);
  color: var(--accent-blue);
}

.card-links {
  display: flex;
  gap: 0.6rem;
}

.card-link {
  font-family: var(--font-pixel);
  font-size: 0.45rem;
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border: 2px solid;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.card-link.page {
  color: var(--accent-pink);
  border-color: var(--accent-pink);
}

.card-link.page:hover {
  background: var(--accent-pink);
  color: #fff;
}

.card-link.github {
  color: var(--accent-green);
  border-color: var(--accent-green);
}

.card-link.github:hover {
  background: var(--accent-green);
  color: var(--bg-primary);
}

.show-more, .show-less {
  text-align: center;
  margin-top: 2rem;
}

.show-more-btn {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  padding: 0.8rem 2rem;
  background: transparent;
  border: 2px solid var(--accent-pink);
  color: var(--accent-pink);
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.show-more-btn:hover {
  background: var(--accent-pink);
  color: #fff;
}

.btn-icon {
  font-size: 0.4rem;
}

@media (max-width: 600px) {
  .systems-grid {
    grid-template-columns: 1fr;
  }
}
</style>
