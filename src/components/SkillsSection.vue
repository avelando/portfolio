<template>
  <section id="skills" class="skills">
    <div class="container">
      <SectionTitle title="Skills" subtitle="Tecnologias e ferramentas" />

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
              <div class="skill-bar-wrapper">
                <span class="skill-name">{{ skill.name }}</span>
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
      </div>
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
          name: 'Frontend',
          icon: '▸',
          skills: [
            { name: 'Next.js', level: 85, color: 'var(--accent-pink)' },
            { name: 'Vue.js', level: 75, color: 'var(--accent-green)' },
            { name: 'TypeScript', level: 85, color: 'var(--accent-blue)' },
            { name: 'HTML/CSS', level: 90, color: 'var(--accent-yellow)' },
          ],
        },
        {
          name: 'Backend',
          icon: '▸',
          skills: [
            { name: 'NestJS', level: 80, color: 'var(--accent-pink)' },
            { name: 'Express.js', level: 80, color: 'var(--accent-green)' },
            { name: 'Django', level: 70, color: 'var(--accent-purple)' },
            { name: 'Python', level: 85, color: 'var(--accent-yellow)' },
          ],
        },
        {
          name: 'IA & Pesquisa',
          icon: '▸',
          skills: [
            { name: 'PLN / NLP', level: 80, color: 'var(--accent-purple)' },
            { name: 'RAG', level: 75, color: 'var(--accent-blue)' },
            { name: 'Redes Complexas', level: 70, color: 'var(--accent-green)' },
            { name: 'LaTeX', level: 75, color: 'var(--accent-yellow)' },
          ],
        },
        {
          name: 'Ferramentas',
          icon: '▸',
          skills: [
            { name: 'Git/GitHub', level: 90, color: 'var(--accent-pink)' },
            { name: 'Figma', level: 75, color: 'var(--accent-purple)' },
            { name: 'Linux', level: 70, color: 'var(--accent-yellow)' },
            { name: 'Docker', level: 60, color: 'var(--accent-blue)' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  padding: 6rem 2rem;
  background: var(--bg-primary);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
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
  font-size: 0.65rem;
  color: var(--accent-pink);
  margin-bottom: 1.2rem;
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
  gap: 1rem;
}

.skill-name {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
  display: block;
}

.skill-bar {
  height: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
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

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
