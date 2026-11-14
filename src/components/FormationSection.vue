<template>
  <section id="formation" class="formation">
    <div class="container">
      <SectionTitle :title="sectionTitle" :subtitle="sectionSubtitle" />

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
              <span v-if="item.statusLabel" :class="['status', item.statusClass]">{{ item.statusLabel }}</span>
            </div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="institution">{{ item.institution }}</p>
            <p v-if="item.description" class="card-description">{{ item.description }}</p>
            <p v-if="item.advisor" class="advisor">
              <span class="advisor-label">{{ advisorLabel }}</span> {{ item.advisor }}
            </p>
            <p v-if="item.coadvisor" class="advisor">
              <span class="advisor-label coadvisor">{{ coadvisorLabel }}</span> {{ item.coadvisor }}
            </p>
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
  name: 'FormationSection',
  components: { SectionTitle },
  computed: {
    sectionTitle() { return t('formation.title'); },
    sectionSubtitle() { return t('formation.subtitle'); },
    advisorLabel() { return t('formation.advisorLabel'); },
    coadvisorLabel() { return t('formation.coadvisorLabel'); },
    formations() {
      const items = t('formation.items');
      const statusActive = t('formation.statusActive');
      const statusDone = t('formation.statusDone');
      return items.map(item => ({
        ...item,
        statusLabel: item.status === 'active' ? statusActive : statusDone,
        statusClass: item.status,
      }));
    },
  },
};
</script>

<style scoped>
.formation {
  min-height: 100vh;
  padding: 80px 2rem 3rem;
  background: var(--bg-tertiary);
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
  margin-bottom: 2rem;
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
  margin-top: 0.3rem;
}

.advisor-label {
  color: var(--accent-green);
  font-weight: 600;
}

.advisor-label.coadvisor {
  color: var(--accent-blue);
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

  .timeline-card {
    padding: 1.2rem;
  }

  .card-title {
    font-size: 0.9rem;
  }

  .institution {
    font-size: 0.8rem;
  }

  .card-description {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .timeline-item.left,
  .timeline-item.right {
    padding-left: 45px;
  }

  .period {
    font-size: 0.5rem;
  }

  .status {
    font-size: 0.4rem;
  }
}
</style>
