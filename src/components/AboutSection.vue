<template>
  <section id="about" class="about">
    <div class="container">
      <SectionTitle title="Sobre Mim" subtitle="Um pouco da minha trajetória" />

      <div class="about-content">
        <div class="about-card">
          <div class="card-inner">
            <div class="photo-wrapper">
              <img src="@/assets/images/avelar.jpg" alt="Avelar Sousa" class="photo" />
              <div class="photo-border"></div>
            </div>
            <div class="about-text">
              <p>
                Doutorando em Inteligência Artificial — Processamento de Linguagem Natural pelo
                Instituto de Ciências Matemáticas e de Computação (ICMC/USP). Graduado em Análise e
                Desenvolvimento de Sistemas pelo Instituto Federal do Piauí (IFPI), Campus Picos, e
                técnico em Informática para Internet pelo IFPI, Campus Paulistana.
              </p>
              <p>
                Atuo em projetos de pesquisa e extensão em Inteligência Artificial, com ênfase em
                Recuperação Aumentada por Geração (RAG) aplicada a documentos públicos e em sistemas
                de avaliação automática de respostas abertas, com particular interesse em
                Processamento de Linguagem Natural (PLN) e suas aplicações em Educação e serviços públicos.
              </p>
              <p>
                Possuo experiência prática em desenvolvimento web com Next.js, NestJS, Django e TypeScript.
                Laureado academicamente pelo IFPI em 2025.
              </p>
            </div>
          </div>

          <div class="stats">
            <div class="stat" v-for="stat in stats" :key="stat.label">
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
      stats: [
        { value: '5+', label: 'Publicações' },
        { value: '2', label: 'Patentes de Software' },
        { value: '4+', label: 'Projetos de Pesquisa' },
        { value: '1', label: 'Láurea Acadêmica' },
      ],
    };
  },
};
</script>

<style scoped>
.about {
  padding: 6rem 2rem;
  background: var(--bg-secondary);
  position: relative;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-pink), var(--accent-purple), var(--accent-blue));
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.about-card {
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.2);
  padding: 2.5rem;
}

.card-inner {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
}

.photo-wrapper {
  flex-shrink: 0;
  position: relative;
  width: 180px;
  height: 180px;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-border {
  position: absolute;
  inset: -6px;
  border: 3px solid var(--accent-pink);
  pointer-events: none;
}

.about-text p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid rgba(233, 69, 96, 0.15);
}

.stat {
  text-align: center;
}

.stat-value {
  font-family: var(--font-pixel);
  font-size: 1.2rem;
  color: var(--accent-green);
  display: block;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.8rem;
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
    width: 150px;
    height: 150px;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-card {
    padding: 1.5rem;
  }
}
</style>
