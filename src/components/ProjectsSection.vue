<template>
  <section id="projects" class="projects">
    <div class="container">
      <SectionTitle title="Sistemas & Projetos" subtitle="Sistemas desenvolvidos e protótipos" />

      <div class="filter-bar">
        <button
          v-for="filter in filters"
          :key="filter.value"
          :class="['filter-btn', { active: activeFilter === filter.value }]"
          @click="activeFilter = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="projects-grid">
        <div
          class="project-card"
          v-for="(project, index) in filteredProjects"
          :key="index"
        >
          <div class="card-top">
            <img :src="getImage(project.image)" :alt="project.title" class="card-image" />
            <div class="card-overlay">
              <span :class="['tag', project.tagClass]">{{ project.tag }}</span>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-desc">{{ project.description }}</p>
            <div class="card-techs" v-if="project.techs">
              <span class="tech" v-for="tech in project.techs" :key="tech">{{ tech }}</span>
            </div>
            <div class="card-links">
              <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" class="card-link">
                <span>&#9654;</span> Acessar
              </a>
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="card-link github">
                <span>&#9830;</span> GitHub
              </a>
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
  name: 'ProjectsSection',
  components: { SectionTitle },
  data() {
    return {
      activeFilter: 'all',
      filters: [
        { label: 'Todos', value: 'all' },
        { label: 'Sistemas', value: 'system' },
        { label: 'Protótipos', value: 'prototype' },
        { label: 'Pesquisa', value: 'research' },
      ],
      projects: [
        {
          title: 'SisTIRA',
          description: 'Plataforma Web de Tutoria Inteligente para Avaliação Automática de Respostas Discursivas. Registro de software INPI: BR512025004679-0.',
          image: 'sistira.png',
          tag: 'Pesquisa',
          tagClass: 'research',
          category: 'research',
          techs: ['Python', 'PLN', 'Web', 'NLP'],
          link: 'https://www.figma.com/design/oWMkDCr0E8KoUuV2LuxPFZ/SisTIRA',
        },
        {
          title: 'RAG — Documentos Públicos',
          description: 'Sistema de Recuperação de Informação em Documentos Públicos utilizando Retrieval Augmented Generation (RAG) para consulta de leis, decretos e decisões judiciais.',
          image: 'black.jpg',
          tag: 'Pesquisa',
          tagClass: 'research',
          category: 'research',
          techs: ['RAG', 'LLM', 'Python', 'NLP'],
        },
        {
          title: 'Landing Page — SOMA',
          description: 'Landing page desenvolvida para divulgação da Construtora e Incorporadora SOMA.',
          image: 'cis.png',
          tag: 'Sistema',
          tagClass: 'system',
          category: 'system',
          techs: ['Next.js', 'TypeScript', 'CSS'],
          github: 'https://github.com/Aprendizes-SOMA/landing-page.git',
          link: 'https://www.figma.com/design/B62f8ZIu5CUD3qJQhFkkHy/Construtora-e-incorporadora-SOMA',
        },
        {
          title: 'Wordle of Dreams',
          description: 'Jogo de palavras inspirado no Wordle. Registro de software INPI: BR512026001585-5.',
          image: 'black.jpg',
          tag: 'Sistema',
          tagClass: 'system',
          category: 'system',
          techs: ['Web', 'JavaScript'],
          github: 'https://github.com/WordleOfThrones/WordleOfThrones.git',
        },
        {
          title: 'ThronesAPI',
          description: 'API desenvolvida para o jogo WordleOfThrones.',
          image: 'black.jpg',
          tag: 'Sistema',
          tagClass: 'system',
          category: 'system',
          techs: ['Node.js', 'Express', 'API'],
          github: 'https://github.com/WordleOfThrones/ThronesAPI.git',
        },
        {
          title: 'Cursos Online — AJK System',
          description: 'Sistema desenvolvido com Java e JavaFX para a disciplina de Programação Orientada a Objetos.',
          image: 'black.jpg',
          tag: 'Sistema',
          tagClass: 'system',
          category: 'system',
          techs: ['Java', 'JavaFX', 'OOP'],
          github: 'https://github.com/ifpi-picos/cursos-online-ajk-academic-system.git',
        },
        {
          title: 'Gerenciador de Estoques — AMR',
          description: 'Protótipo de sistema para gerenciamento de estoques e máquinas para a Amorim Rental.',
          image: 'amr.png',
          tag: 'Protótipo',
          tagClass: 'prototype',
          category: 'prototype',
          techs: ['Figma', 'UI/UX'],
          link: 'https://www.figma.com/design/GdXCyPQGphMDcnFBNwuiEJ/Gerenciador-de-estoques',
        },
        {
          title: 'Página de Relatórios — JR Soluções',
          description: 'Protótipo de página de relatórios para o app JR Soluções.',
          image: 'relatorios.png',
          tag: 'Protótipo',
          tagClass: 'prototype',
          category: 'prototype',
          techs: ['Figma', 'UI/UX'],
          link: 'https://www.figma.com/design/QGqunu45lC37DEJE7xp5sL/Página-de-relatórios',
        },
        {
          title: 'Bar do João',
          description: 'Protótipo de sistema de gerenciamento de estoque e vendas para um bar hipotético.',
          image: 'bar.png',
          tag: 'Protótipo',
          tagClass: 'prototype',
          category: 'prototype',
          techs: ['Figma', 'UI/UX'],
          link: 'https://www.figma.com/design/Y02V2avRaUtTgaKryL81MZ/Desafio---Bar-do-João',
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'all') return this.projects;
      return this.projects.filter((p) => p.category === this.activeFilter);
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
.projects {
  padding: 6rem 2rem;
  background: var(--bg-primary);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.filter-bar {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: transparent;
  border: 2px solid var(--text-muted);
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  border-color: var(--accent-pink);
  color: var(--accent-pink);
  background: rgba(233, 69, 96, 0.1);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.15);
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: var(--accent-pink);
  transform: translateY(-5px);
}

.card-top {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .card-image {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
}

.tag {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  padding: 0.3rem 0.6rem;
  border: 2px solid;
}

.tag.system {
  color: var(--accent-green);
  border-color: var(--accent-green);
  background: rgba(83, 215, 105, 0.1);
}

.tag.prototype {
  color: var(--accent-yellow);
  border-color: var(--accent-yellow);
  background: rgba(255, 217, 61, 0.1);
}

.tag.research {
  color: var(--accent-purple);
  border-color: var(--accent-purple);
  background: rgba(179, 136, 255, 0.1);
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
  line-height: 1.6;
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
  gap: 0.8rem;
}

.card-link {
  font-family: var(--font-pixel);
  font-size: 0.45rem;
  color: var(--accent-pink);
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border: 2px solid var(--accent-pink);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.card-link:hover {
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

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
