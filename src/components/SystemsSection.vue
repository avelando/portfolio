<template>
  <section id="systems" class="systems">
    <div class="container">
      <SectionTitle title="Sistemas" subtitle="Sistemas desenvolvidos" />

      <div class="systems-grid">
        <a
          class="system-card"
          v-for="(system, index) in systems"
          :key="index"
          :href="system.github || system.link || '#'"
          :target="system.github || system.link ? '_blank' : '_self'"
          rel="noopener"
        >
          <span class="card-tag">Sistema</span>
          <h3 class="card-title">{{ system.title }}</h3>
          <p class="card-desc">{{ system.description }}</p>
          <div class="card-techs">
            <span class="tech" v-for="tech in system.techs" :key="tech">{{ tech }}</span>
          </div>
          <div class="card-links">
            <span v-if="system.link" class="card-link page">
              <span>&#9654;</span> Acessar
            </span>
            <span v-if="system.github" class="card-link github">
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </span>
          </div>
        </a>
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
      systems: [
        {
          title: 'SisTIRA',
          description: 'Plataforma Web de Tutoria Inteligente para Avaliação Automática de Respostas Discursivas.',
          techs: ['Python', 'PLN', 'Django'],
          link: 'https://www.figma.com/design/oWMkDCr0E8KoUuV2LuxPFZ/SisTIRA',
        },
        {
          title: 'RAG — Documentos Públicos',
          description: 'Sistema de Recuperação de Informação em Documentos Públicos utilizando RAG.',
          techs: ['RAG', 'LLM', 'Python'],
        },
        {
          title: 'Landing Page — SOMA',
          description: 'Landing page para divulgação da Construtora e Incorporadora SOMA.',
          techs: ['Next.js', 'TypeScript', 'CSS'],
          github: 'https://github.com/Aprendizes-SOMA/landing-page.git',
          link: 'https://www.figma.com/design/B62f8ZIu5CUD3qJQhFkkHy/Construtora-e-incorporadora-SOMA',
        },
        {
          title: 'Wordle of Dreams',
          description: 'Jogo de palavras inspirado no Wordle. Registro INPI: BR512026001585-5.',
          techs: ['TypeScript', 'JavaScript'],
          github: 'https://github.com/WordleOfThrones/WordleOfThrones.git',
        },
        {
          title: 'ThronesAPI',
          description: 'API desenvolvida para o jogo WordleOfThrones.',
          techs: ['Node.js', 'Express', 'API'],
          github: 'https://github.com/WordleOfThrones/ThronesAPI.git',
        },
        {
          title: 'Cursos Online — AJK',
          description: 'Sistema com Java e JavaFX para a disciplina de POO.',
          techs: ['Java', 'JavaFX', 'OOP'],
          github: 'https://github.com/ifpi-picos/cursos-online-ajk-academic-system.git',
        },
      ],
    };
  },
};
</script>

<style scoped>
.systems {
  min-height: 100vh;
  padding: 2rem 2rem;
  padding-top: 90px;
  background: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.systems-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.system-card {
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.12);
  padding: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  flex-direction: column;
}

.system-card:hover {
  border-color: var(--accent-green);
  transform: translateY(-4px);
}

.card-tag {
  font-family: var(--font-pixel);
  font-size: 0.35rem;
  padding: 0.2rem 0.4rem;
  border: 2px solid var(--accent-green);
  color: var(--accent-green);
  align-self: flex-start;
  margin-bottom: 0.6rem;
}

.card-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.4rem;
  line-height: 1.3;
}

.card-desc {
  font-size: 0.78rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 0.6rem;
  flex: 1;
}

.card-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.6rem;
}

.tech {
  font-family: var(--font-pixel);
  font-size: 0.35rem;
  padding: 0.15rem 0.4rem;
  background: rgba(79, 195, 247, 0.1);
  border: 1px solid rgba(79, 195, 247, 0.3);
  color: var(--accent-blue);
}

.card-links {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
}

.card-link {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  padding: 0.3rem 0.6rem;
  border: 2px solid;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.card-link.page {
  color: var(--accent-pink);
  border-color: var(--accent-pink);
}

.card-link.github {
  color: var(--accent-green);
  border-color: var(--accent-green);
}

@media (max-width: 900px) {
  .systems-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .systems-grid {
    grid-template-columns: 1fr;
  }

  .system-card {
    padding: 1rem;
  }

  .card-title {
    font-size: 0.85rem;
  }

  .card-desc {
    font-size: 0.75rem;
  }
}
</style>
