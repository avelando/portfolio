<template>
  <section id="skills" class="skills">
    <div class="container">
      <SectionTitle title="Skills" subtitle="Baseado nos repositórios públicos do GitHub" />

      <div class="skills-grid">
        <div
          class="skill-category"
          v-for="(cat, index) in categories"
          :key="index"
        >
          <h3 class="cat-title">
            <span class="cat-icon">{{ cat.icon }}</span>
            {{ cat.name }}
          </h3>
          <div class="skill-items">
            <div
              class="skill-item"
              v-for="skill in cat.skills"
              :key="skill.name"
            >
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-fill"
                  :style="{ width: skill.level + '%', background: skill.color }"
                >
                  <div class="pixel-blocks">
                    <span
                      v-for="n in Math.floor(skill.level / 10)"
                      :key="n"
                      class="pixel-block"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="skills-note">
        <span class="note-icon">&#9670;</span>
        Baseado nos repositórios públicos do GitHub
      </p>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';

export default {
  name: 'SkillsSection',
  components: { SectionTitle },
  data() {
    return {
      categories: [
        {
          name: 'Linguagens',
          icon: '&#9654;',
          skills: [
            { name: 'TypeScript', level: 90, color: 'var(--accent-blue)' },
            { name: 'Python', level: 85, color: 'var(--accent-yellow)' },
            { name: 'JavaScript', level: 80, color: 'var(--accent-green)' },
            { name: 'Java', level: 75, color: 'var(--accent-pink)' },
          ],
        },
        {
          name: 'Web & Markup',
          icon: '&#9654;',
          skills: [
            { name: 'HTML', level: 85, color: 'var(--accent-pink)' },
            { name: 'CSS', level: 80, color: 'var(--accent-blue)' },
            { name: 'Vue.js', level: 75, color: 'var(--accent-green)' },
            { name: 'LaTeX / TeX', level: 70, color: 'var(--accent-yellow)' },
          ],
        },
        {
          name: 'Data Science',
          icon: '&#9654;',
          skills: [
            { name: 'Jupyter Notebook', level: 80, color: 'var(--accent-purple)' },
            { name: 'PLN / NLP', level: 85, color: 'var(--accent-blue)' },
            { name: 'Redes Complexas', level: 70, color: 'var(--accent-green)' },
            { name: 'RAG', level: 75, color: 'var(--accent-yellow)' },
          ],
        },
        {
          name: 'Ferramentas',
          icon: '&#9654;',
          skills: [
            { name: 'Git / GitHub', level: 95, color: 'var(--accent-pink)' },
            { name: 'Figma', level: 70, color: 'var(--accent-purple)' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  padding: 2rem 2rem;
  background: var(--bg-secondary);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skill-category {
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.15);
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: var(--accent-pink);
}

.cat-title {
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  color: var(--accent-pink);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cat-icon {
  color: var(--accent-green);
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
}

.skill-name {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.skill-bar {
  height: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  position: relative;
  transition: width 1s ease;
}

.pixel-blocks {
  display: flex;
  height: 100%;
  gap: 2px;
  padding: 2px;
}

.pixel-block {
  flex: 1;
  background: rgba(255, 255, 255, 0.2);
}

.skills-note {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.note-icon {
  color: var(--accent-pink);
  margin-right: 0.3rem;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
