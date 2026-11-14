<template>
  <section id="projects" class="research">
    <div class="container">
      <SectionTitle title="Projetos" subtitle="Repositórios de pesquisa e projetos acadêmicos" />

      <div class="projects-grid">
        <div
          class="project-card"
          v-for="(project, index) in visibleProjects"
          :key="index"
        >
          <div class="card-header">
            <span class="card-icon">&#9670;</span>
            <h3 class="card-title">{{ project.title }}</h3>
          </div>
          <p class="card-desc">{{ project.description }}</p>
          <div class="card-techs">
            <span class="tech" v-for="tech in project.techs" :key="tech">{{ tech }}</span>
          </div>
          <div class="card-links">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="card-link github">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" class="card-link page">
              <span>&#9654;</span> Acessar
            </a>
          </div>
        </div>
      </div>

      <div class="show-more" v-if="projects.length > initialCount && !showAll">
        <button class="show-more-btn" @click="showAll = true">
          <span class="btn-icon">&#9660;</span> Ver mais projetos
        </button>
      </div>
      <div class="show-less" v-if="showAll && projects.length > initialCount">
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
  name: 'ResearchSection',
  components: { SectionTitle },
  data() {
    return {
      showAll: false,
      initialCount: 6,
      projects: [
        {
          title: 'Puns-LLM',
          description: 'Pesquisa sobre detecção de trocadilhos usando Large Language Models.',
          techs: ['Python', 'NLP', 'LLM'],
          github: 'https://github.com/avelando/Puns-LLM',
        },
        {
          title: 'pun-detection-split-analysis',
          description: 'Análise de splits para detecção de trocadilhos em português.',
          techs: ['Jupyter Notebook', 'NLP', 'ML'],
          github: 'https://github.com/avelando/pun-detection-split-analysis',
        },
        {
          title: 'pun-stacking',
          description: 'Método de stacking para detecção de trocadilhos.',
          techs: ['HTML', 'NLP', 'Ensemble'],
          github: 'https://github.com/avelando/pun-stacking',
        },
        {
          title: 'RC-USP',
          description: 'Pesquisa em Redes Complexas na USP.',
          techs: ['Python', 'Redes Complexas'],
          github: 'https://github.com/avelando/RC-USP',
        },
        {
          title: 'RC-UF',
          description: 'Estudos em Redes Complexas e análise de grafos.',
          techs: ['Python', 'Redes Complexas'],
          github: 'https://github.com/avelando/RC-UF',
        },
        {
          title: 'networks',
          description: 'Análise de redes e grafos complexos.',
          techs: ['Jupyter Notebook', 'Redes'],
          github: 'https://github.com/avelando/networks',
        },
        {
          title: 'IFPI-wise',
          description: 'Projeto de pesquisa acadêmica no IFPI.',
          techs: ['Jupyter Notebook', 'Pesquisa'],
          github: 'https://github.com/avelando/IFPI-wise',
        },
        {
          title: 'metodos-de-busca',
          description: 'Implementação de métodos de busca em IA.',
          techs: ['Java', 'IA', 'Busca'],
          github: 'https://github.com/avelando/metodos-de-busca',
        },
        {
          title: 'desafios-IA',
          description: 'Desafios e exercícios de Inteligência Artificial.',
          techs: ['Java', 'IA'],
          github: 'https://github.com/avelando/desafios-IA',
        },
        {
          title: 'algoritmos_ordenacao',
          description: 'Implementação e análise de algoritmos de ordenação.',
          techs: ['Java', 'Algoritmos'],
          github: 'https://github.com/avelando/algoritmos_ordenacao',
        },
        {
          title: 'github-flow-demo',
          description: 'Demonstração do fluxo de trabalho com GitHub.',
          techs: ['HTML', 'Git'],
          github: 'https://github.com/avelando/github-flow-demo',
        },
      ],
    };
  },
  computed: {
    visibleProjects() {
      return this.showAll ? this.projects : this.projects.slice(0, this.initialCount);
    },
  },
};
</script>

<style scoped>
.research {
  padding: 4rem 2rem;
  background: var(--bg-primary);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.2rem;
}

.project-card {
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.12);
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: var(--accent-purple);
  transform: translateY(-3px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}

.card-icon {
  color: var(--accent-purple);
  font-size: 0.8rem;
}

.card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.card-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 0.8rem;
  flex: 1;
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
  background: rgba(179, 136, 255, 0.1);
  border: 1px solid rgba(179, 136, 255, 0.3);
  color: var(--accent-purple);
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

.card-link.github {
  color: var(--accent-green);
  border-color: var(--accent-green);
}

.card-link.github:hover {
  background: var(--accent-green);
  color: var(--bg-primary);
}

.card-link.page {
  color: var(--accent-blue);
  border-color: var(--accent-blue);
}

.card-link.page:hover {
  background: var(--accent-blue);
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
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
