<template>
  <section id="publications" class="publications">
    <div class="container">
      <SectionTitle :title="sectionTitle" :subtitle="sectionSubtitle" />

      <div class="pub-filter">
        <button
          v-for="f in pubFilters"
          :key="f.value"
          :class="['filter-btn', { active: activePubFilter === f.value }]"
          @click="activePubFilter = f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <div class="pub-list">
        <div
          class="pub-card"
          v-for="(pub, index) in visiblePubs"
          :key="index"
        >
          <div class="pub-index">
            <span class="index-number">{{ String(index + 1).padStart(2, '0') }}</span>
          </div>
          <div class="pub-content">
            <span :class="['pub-type', pub.typeClass]">{{ translateType(pub.category) }}</span>
            <h3 class="pub-title">{{ pub.title }}</h3>
            <p class="pub-authors">
              <template v-for="(authorId, i) in pub.authorIds" :key="authorId">
                <template v-if="i > 0">; </template>
                <a
                  v-if="getAuthor(authorId) && getAuthor(authorId).lattes"
                  :href="getAuthor(authorId).lattes"
                  target="_blank"
                  rel="noopener"
                  :class="['author-link', { highlighted: getAuthor(authorId).highlighted }]"
                >{{ getAuthor(authorId).name }}</a>
                <span
                  v-else-if="getAuthor(authorId)"
                  :class="{ 'author-highlighted': getAuthor(authorId).highlighted }"
                >{{ getAuthor(authorId).name }}</span>
                <span v-else>{{ authorId }}</span>
              </template>
            </p>
            <p class="pub-venue">
              <span class="venue-icon">&#9830;</span>
              {{ translateVenue(pub.venueKey, pub.venue) }}
            </p>
            <div class="pub-meta">
              <span class="pub-year">{{ pub.year }}</span>
              <span v-if="pub.pages" class="pub-pages">pp. {{ pub.pages }}</span>
              <a v-if="pub.link" :href="pub.link" target="_blank" rel="noopener" class="pub-link">
                &#9654; {{ accessLabel }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="show-more" v-if="filteredPubs.length > initialCount && !showAllPubs">
        <button class="show-more-btn" @click="showAllPubs = true">
          <span class="btn-icon">&#9660;</span> {{ showMoreLabel }}
        </button>
      </div>
      <div class="show-less" v-if="showAllPubs && filteredPubs.length > initialCount">
        <button class="show-more-btn" @click="showAllPubs = false">
          <span class="btn-icon">&#9650;</span> {{ showLessLabel }}
        </button>
      </div>

      <div class="patents-section">
        <h3 class="patents-title">
          <span class="patents-icon">&#9733;</span> {{ patentsTitle }}
        </h3>
        <div class="patent-cards">
          <div class="patent-card" v-for="(patent, i) in patents" :key="i">
            <span class="patent-reg">{{ patent.registration }}</span>
            <h4 class="patent-name">{{ patent.name }}</h4>
            <p class="patent-authors">
              <template v-for="(authorId, j) in patent.authorIds" :key="authorId">
                <template v-if="j > 0">; </template>
                <a
                  v-if="getAuthor(authorId) && getAuthor(authorId).lattes"
                  :href="getAuthor(authorId).lattes"
                  target="_blank"
                  rel="noopener"
                  :class="['author-link', { highlighted: getAuthor(authorId).highlighted }]"
                >{{ getAuthor(authorId).name }}</a>
                <span
                  v-else-if="getAuthor(authorId)"
                  :class="{ 'author-highlighted': getAuthor(authorId).highlighted }"
                >{{ getAuthor(authorId).name }}</span>
                <span v-else>{{ authorId }}</span>
              </template>
            </p>
            <p class="patent-date">{{ patentDateLabel }} {{ patent.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';
import authors from '@/data/authors';
import { publications, patents } from '@/data/publications';
import { t } from '@/i18n';

export default {
  name: 'PublicationsSection',
  components: { SectionTitle },
  data() {
    return {
      activePubFilter: 'all',
      showAllPubs: false,
      initialCount: 4,
      publications,
      patents,
      authors,
    };
  },
  computed: {
    sectionTitle() { return t('publications.title'); },
    sectionSubtitle() { return t('publications.subtitle'); },
    showMoreLabel() { return t('publications.showMore'); },
    showLessLabel() { return t('publications.showLess'); },
    accessLabel() { return t('publications.access'); },
    patentsTitle() { return t('publications.patentsTitle'); },
    patentDateLabel() { return t('publications.patentDateLabel'); },
    pubFilters() {
      return [
        { label: t('publications.filterAll'), value: 'all' },
        { label: t('publications.filterFull'), value: 'full' },
        { label: t('publications.filterAbstract'), value: 'abstract' },
      ];
    },
    filteredPubs() {
      if (this.activePubFilter === 'all') return this.publications;
      return this.publications.filter((p) => p.category === this.activePubFilter);
    },
    visiblePubs() {
      return this.showAllPubs ? this.filteredPubs : this.filteredPubs.slice(0, this.initialCount);
    },
  },
  methods: {
    getAuthor(id) {
      return this.authors[id] || null;
    },
    translateType(category) {
      return category === 'full' ? t('publications.typeFull') : t('publications.typeAbstract');
    },
    translateVenue(key, fallback) {
      if (!key) return fallback;
      const venues = t('publications.venues');
      return venues[key] || fallback;
    },
  },
};
</script>

<style scoped>
.publications {
  min-height: 100vh;
  padding: 5rem 2rem 3rem;
  padding-top: 80px;
  background: var(--bg-primary);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.pub-filter {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
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

.pub-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pub-card {
  display: flex;
  gap: 1.5rem;
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.12);
  padding: 1.2rem;
  transition: all 0.3s ease;
}

.pub-card:hover {
  border-color: var(--accent-pink);
}

.pub-index {
  flex-shrink: 0;
}

.index-number {
  font-family: var(--font-pixel);
  font-size: 1.2rem;
  color: rgba(233, 69, 96, 0.25);
}

.pub-content {
  flex: 1;
}

.pub-type {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  padding: 0.2rem 0.5rem;
  border: 2px solid;
  margin-bottom: 0.6rem;
  display: inline-block;
}

.pub-type.full {
  color: var(--accent-green);
  border-color: var(--accent-green);
}

.pub-type.abstract {
  color: var(--accent-yellow);
  border-color: var(--accent-yellow);
}

.pub-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.4rem;
  line-height: 1.5;
}

.pub-authors {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
  line-height: 1.6;
}

.author-link {
  color: var(--accent-blue);
  text-decoration: none;
  border-bottom: 1px dashed transparent;
  transition: all 0.3s ease;
}

.author-link:hover {
  border-bottom-color: var(--accent-blue);
  color: var(--accent-blue);
}

.author-link.highlighted {
  color: var(--accent-green);
  font-weight: 600;
}

.author-link.highlighted:hover {
  border-bottom-color: var(--accent-green);
  color: var(--accent-green);
}

.author-highlighted {
  color: var(--accent-green);
  font-weight: 600;
}

.pub-venue {
  font-size: 0.8rem;
  color: var(--accent-purple);
  margin-bottom: 0.3rem;
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
}

.venue-icon {
  color: var(--accent-pink);
  flex-shrink: 0;
}

.pub-meta {
  display: flex;
  gap: 1rem;
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  align-items: center;
}

.pub-year {
  color: var(--accent-yellow);
}

.pub-pages {
  color: var(--text-muted);
}

.pub-link {
  color: var(--accent-blue);
  text-decoration: none;
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--accent-blue);
  transition: all 0.3s ease;
  font-family: var(--font-pixel);
  font-size: 0.4rem;
}

.pub-link:hover {
  background: var(--accent-blue);
  color: var(--bg-primary);
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

.patents-section {
  margin-top: 3rem;
}

.patents-title {
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  color: var(--accent-yellow);
  text-align: center;
  margin-bottom: 1.5rem;
}

.patents-icon {
  color: var(--accent-yellow);
}

.patent-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  gap: 1.2rem;
}

.patent-card {
  background: var(--bg-card);
  border: 2px solid rgba(255, 217, 61, 0.2);
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.patent-card:hover {
  border-color: var(--accent-yellow);
}

.patent-reg {
  font-family: var(--font-pixel);
  font-size: 0.45rem;
  color: var(--accent-green);
  display: block;
  margin-bottom: 0.5rem;
}

.patent-name {
  font-size: 0.95rem;
  color: var(--text-primary);
  margin-bottom: 0.4rem;
}

.patent-authors {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
  line-height: 1.6;
}

.patent-date {
  font-size: 0.75rem;
  color: var(--text-muted);
}

@media (max-width: 600px) {
  .pub-card {
    flex-direction: column;
    gap: 0.8rem;
    padding: 1rem;
  }

  .pub-title {
    font-size: 0.85rem;
  }

  .pub-authors {
    font-size: 0.75rem;
  }

  .pub-venue {
    font-size: 0.75rem;
  }

  .patent-cards {
    grid-template-columns: 1fr;
  }

  .patent-card {
    padding: 1.2rem;
  }

  .filter-btn {
    font-size: 0.45rem;
    padding: 0.5rem 0.8rem;
  }
}
</style>
