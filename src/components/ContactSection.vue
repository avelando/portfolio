<template>
  <section id="contact" class="contact">
    <div class="container">
      <SectionTitle :title="sectionTitle" :subtitle="sectionSubtitle" />

      <div class="contact-content">
        <div class="contact-grid">
          <a
            v-for="(link, i) in links"
            :key="link.label"
            :href="link.url"
            :target="link.url.startsWith('mailto') ? '_self' : '_blank'"
            rel="noopener"
            class="contact-card"
            :style="{ animationDelay: (i * 0.1) + 's' }"
          >
            <div class="card-icon-wrapper" :style="{ borderColor: link.color }">
              <span class="card-svg" v-html="link.icon"></span>
            </div>
            <span class="card-label">{{ link.label }}</span>
            <span class="card-handle">{{ link.handle }}</span>
            <span class="card-arrow">&#8594;</span>
          </a>
        </div>

        <div class="contact-character">
          <img
            :src="publicPath + 'personagem_transparente.gif'"
            alt="Personagem"
            class="character-img"
          />
          <p class="character-text">{{ characterText }}</p>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <span class="footer-logo">[AR]_</span>
        <p class="footer-text">
          &copy; {{ currentYear }} Avelar Rodrigues de Sousa
        </p>
      </div>
    </footer>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';
import { t } from '@/i18n';

export default {
  name: 'ContactSection',
  components: { SectionTitle },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    sectionTitle() { return t('contact.title'); },
    sectionSubtitle() { return t('contact.subtitle'); },
    characterText() { return t('contact.characterText'); },
    lattesHandle() { return t('contact.handles.lattes'); },
    links() {
      return [
        {
          label: 'GitHub',
          handle: '@avelando',
          url: 'https://github.com/avelando',
          color: 'var(--accent-green)',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
        },
        {
          label: 'LinkedIn',
          handle: 'Avelar Rodrigues',
          url: 'https://linkedin.com/in/avelar-rodrigues-15568a1b1',
          color: 'var(--accent-blue)',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        },
        {
          label: 'Instagram',
          handle: '@avelando',
          url: 'https://instagram.com/avelando',
          color: 'var(--accent-pink)',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
        },
        {
          label: 'Email USP',
          handle: 'avelars@usp.br',
          url: 'mailto:avelars@usp.br',
          color: 'var(--accent-yellow)',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
        },
        {
          label: 'ORCID',
          handle: '0009-0008-7433-8262',
          url: 'https://orcid.org/0009-0008-7433-8262',
          color: 'var(--accent-green)',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.444-.844-3.722-3.862-3.722h-2.457z"/></svg>',
        },
        {
          label: 'Lattes',
          handle: this.lattesHandle,
          url: 'http://lattes.cnpq.br/5118004962010339',
          color: 'var(--accent-purple)',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
        },
      ];
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 80px 2rem 0;
  background: var(--bg-quaternary);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: 1rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.12);
  text-decoration: none;
  transition: all 0.3s ease;
  animation: fadeIn 0.4s ease both;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.contact-card:hover {
  transform: translateX(5px) translateY(-2px);
  border-color: var(--accent-pink);
  background: rgba(233, 69, 96, 0.05);
}

.card-icon-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  flex-shrink: 0;
  background: rgba(233, 69, 96, 0.05);
  transition: all 0.3s ease;
}

.contact-card:hover .card-icon-wrapper {
  background: rgba(233, 69, 96, 0.15);
}

.card-svg {
  color: var(--text-primary);
  display: flex;
}

.card-svg svg {
  width: 20px;
  height: 20px;
}

.card-label {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  color: var(--text-primary);
  display: block;
}

.card-handle {
  flex: 1;
  font-size: 0.75rem;
  color: var(--text-muted);
  text-align: right;
}

.card-arrow {
  color: var(--accent-green);
  opacity: 0;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.contact-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(3px);
}

.contact-character {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.12);
}

.character-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  flex-shrink: 0;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.character-text {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  color: var(--accent-green);
  line-height: 2;
}

.footer {
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  border-top: 3px solid rgba(233, 69, 96, 0.2);
  text-align: center;
}

.footer-logo {
  font-family: var(--font-pixel);
  font-size: 0.8rem;
  color: var(--accent-pink);
}

.footer-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-character {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }

  .character-img {
    width: 80px;
    height: 80px;
  }
}
</style>
