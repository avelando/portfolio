<template>
  <section id="projects" class="research">
    <div class="container">
      <SectionTitle :title="sectionTitle" :subtitle="sectionSubtitle" />

      <div class="filter-bar">
        <button
          v-for="f in filters"
          :key="f.value"
          :class="['filter-btn', { active: activeFilter === f.value }]"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <div class="projects-list">
        <div
          class="project-card"
          v-for="(project, index) in visibleProjects"
          :key="index"
        >
          <div class="card-left">
            <span :class="['card-tag', project.tagClass]">{{ project.tag }}</span>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-desc">{{ project.description }}</p>
            <p v-if="project.period" class="card-period">{{ project.period }}</p>
          </div>
        </div>
      </div>

      <div class="show-more" v-if="filteredProjects.length > initialCount && !showAll">
        <button class="show-more-btn" @click="showAll = true">
          <span class="btn-icon">&#9660;</span> {{ showMoreLabel }}
        </button>
      </div>
      <div class="show-less" v-if="showAll && filteredProjects.length > initialCount">
        <button class="show-more-btn" @click="showAll = false">
          <span class="btn-icon">&#9650;</span> {{ showLessLabel }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';
import { t } from '@/i18n';

export default {
  name: 'ResearchSection',
  components: { SectionTitle },
  data() {
    return {
      showAll: false,
      initialCount: 6,
      activeFilter: 'all',
    };
  },
  computed: {
    sectionTitle() { return t('projects.title'); },
    sectionSubtitle() { return t('projects.subtitle'); },
    showMoreLabel() { return t('projects.showMore'); },
    showLessLabel() { return t('projects.showLess'); },
    filters() {
      return [
        { label: t('projects.filterAll'), value: 'all' },
        { label: t('projects.filterResearch'), value: 'research' },
        { label: t('projects.filterExtension'), value: 'extension' },
      ];
    },
    projects() { return t('projects.items'); },
    filteredProjects() {
      if (this.activeFilter === 'all') return this.projects;
      return this.projects.filter((p) => p.category === this.activeFilter);
    },
    visibleProjects() {
      return this.showAll ? this.filteredProjects : this.filteredProjects.slice(0, this.initialCount);
    },
  },
};
</script>

<style scoped>
.research {
  min-height: 100vh;
  padding: 80px 2rem 3rem;
  background: var(--bg-tertiary);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.filter-bar {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
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

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.project-card {
  display: flex;
  gap: 1rem;
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.12);
  padding: 1.2rem;
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: var(--accent-purple);
  transform: translateX(3px);
}

.card-left {
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
}

.card-tag {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  padding: 0.3rem 0.5rem;
  border: 2px solid;
  white-space: nowrap;
}

.card-tag.tag-research {
  color: var(--accent-purple);
  border-color: var(--accent-purple);
}

.card-tag.tag-extension {
  color: var(--accent-yellow);
  border-color: var(--accent-yellow);
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
}

.card-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 0.3rem;
}

.card-period {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  color: var(--accent-yellow);
}

.show-more, .show-less {
  text-align: center;
  margin-top: 1.5rem;
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
  .project-card {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  .card-title {
    font-size: 0.85rem;
  }

  .card-desc {
    font-size: 0.8rem;
  }

  .filter-btn {
    font-size: 0.45rem;
    padding: 0.5rem 0.8rem;
  }
}
</style>
