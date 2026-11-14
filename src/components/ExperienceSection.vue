<template>
  <section id="experience" class="experience">
    <div class="container">
      <SectionTitle :title="sectionTitle" :subtitle="sectionSubtitle" />

      <div class="experience-grid">
        <div
          class="exp-card"
          v-for="(exp, index) in experiences"
          :key="index"
        >
          <div class="exp-icon">{{ exp.icon }}</div>
          <div class="exp-content">
            <div class="exp-header">
              <span class="exp-period">{{ exp.period }}</span>
              <span :class="['exp-type', exp.typeClass]">{{ exp.type }}</span>
            </div>
            <h3 class="exp-title">{{ exp.title }}</h3>
            <p class="exp-org">{{ exp.organization }}</p>
            <p class="exp-desc">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';
import { t } from '@/i18n';

export default {
  name: 'ExperienceSection',
  components: { SectionTitle },
  computed: {
    sectionTitle() { return t('experience.title'); },
    sectionSubtitle() { return t('experience.subtitle'); },
    experiences() { return t('experience.items'); },
  },
};
</script>

<style scoped>
.experience {
  min-height: 100vh;
  padding: 80px 2rem 3rem;
  background: var(--bg-quaternary);
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.experience-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.exp-card {
  display: flex;
  gap: 1.5rem;
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.15);
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.exp-card:hover {
  border-color: var(--accent-pink);
  transform: translateX(5px);
}

.exp-icon {
  font-size: 2rem;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(233, 69, 96, 0.1);
  border: 2px solid rgba(233, 69, 96, 0.2);
}

.exp-content {
  flex: 1;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.exp-period {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  color: var(--accent-yellow);
}

.exp-type {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  padding: 0.2rem 0.5rem;
  border: 2px solid;
}

.exp-type.clt {
  color: var(--accent-green);
  border-color: var(--accent-green);
}

.exp-type.volunteer {
  color: var(--accent-blue);
  border-color: var(--accent-blue);
}

.exp-type.scholarship {
  color: var(--accent-purple);
  border-color: var(--accent-purple);
}

.exp-type.extension {
  color: var(--accent-yellow);
  border-color: var(--accent-yellow);
}

.exp-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
}

.exp-org {
  font-size: 0.85rem;
  color: var(--accent-purple);
  margin-bottom: 0.5rem;
}

.exp-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 600px) {
  .exp-card {
    flex-direction: column;
    gap: 0.8rem;
    padding: 1.2rem;
  }

  .exp-icon {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .exp-title {
    font-size: 0.9rem;
  }

  .exp-org {
    font-size: 0.8rem;
  }

  .exp-desc {
    font-size: 0.8rem;
  }
}
</style>
