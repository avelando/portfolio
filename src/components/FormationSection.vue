<template>
  <section id="formation" class="formation">
    <div class="container">
      <SectionTitle title="Formação Acadêmica" subtitle="Minha trajetória educacional" />

      <div class="timeline">
        <div
          class="timeline-item"
          v-for="(item, index) in formations"
          :key="index"
          :class="{ left: index % 2 === 0, right: index % 2 !== 0 }"
        >
          <div class="timeline-dot">
            <span class="dot-inner"></span>
          </div>
          <div class="timeline-card">
            <div class="card-header">
              <span class="period">{{ item.period }}</span>
              <span v-if="item.status" :class="['status', item.statusClass]">{{ item.status }}</span>
            </div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="institution">{{ item.institution }}</p>
            <p v-if="item.description" class="card-description">{{ item.description }}</p>
            <p v-if="item.advisor" class="advisor">
              <span class="advisor-label">Orientador:</span> {{ item.advisor }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';

export default {
  name: 'FormationSection',
  components: { SectionTitle },
  data() {
    return {
      formations: [
        {
          period: '2026 - Atual',
          title: 'Doutorado em Ciências da Computação e Matemática Computacional',
          institution: 'Universidade de São Paulo (USP) — ICMC',
          description: 'Inteligência Artificial — Processamento de Linguagem Natural',
          advisor: 'Diego Raphael Amancio',
          status: 'Em andamento',
          statusClass: 'active',
        },
        {
          period: '2026 - Atual',
          title: 'Especialização em Processos Didáticos-Pedagógicos para EaD',
          institution: 'Fundação Universidade Virtual do Estado de São Paulo (UNIVESP)',
          description: 'Carga horária: 960h',
          status: 'Em andamento',
          statusClass: 'active',
        },
        {
          period: '2023 - 2025',
          title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
          institution: 'Instituto Federal do Piauí (IFPI) — Campus Picos',
          description: 'TCC: SisTIRA — Plataforma Web de Tutoria Inteligente para Avaliação Automática de Respostas Discursivas',
          advisor: 'Rogério Figueredo de Sousa',
          status: 'Concluído',
          statusClass: 'done',
        },
        {
          period: '2020 - 2023',
          title: 'Ensino Médio Integrado — Informática para Internet',
          institution: 'Instituto Federal do Piauí (IFPI) — Campus Paulistana',
          status: 'Concluído',
          statusClass: 'done',
        },
      ],
    };
  },
};
</script>

<style scoped>
.formation {
  padding: 6rem 2rem;
  background: var(--bg-primary);
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--accent-pink), var(--accent-purple), var(--accent-blue));
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  position: relative;
}

.timeline-item.left {
  justify-content: flex-start;
  padding-right: calc(50% + 30px);
}

.timeline-item.right {
  justify-content: flex-end;
  padding-left: calc(50% + 30px);
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 1.5rem;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: var(--bg-primary);
  border: 3px solid var(--accent-pink);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.dot-inner {
  width: 8px;
  height: 8px;
  background: var(--accent-green);
}

.timeline-card {
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.2);
  padding: 1.5rem;
  width: 100%;
  transition: all 0.3s ease;
}

.timeline-card:hover {
  border-color: var(--accent-pink);
  transform: translateY(-3px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.period {
  font-family: var(--font-pixel);
  font-size: 0.55rem;
  color: var(--accent-yellow);
}

.status {
  font-family: var(--font-pixel);
  font-size: 0.45rem;
  padding: 0.3rem 0.6rem;
  border: 2px solid;
}

.status.active {
  color: var(--accent-green);
  border-color: var(--accent-green);
}

.status.done {
  color: var(--accent-blue);
  border-color: var(--accent-blue);
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.institution {
  font-size: 0.9rem;
  color: var(--accent-purple);
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.advisor {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.advisor-label {
  color: var(--accent-green);
  font-weight: 600;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-item.left,
  .timeline-item.right {
    padding-left: 50px;
    padding-right: 0;
    justify-content: flex-start;
  }

  .timeline-dot {
    left: 20px;
  }
}
</style>
