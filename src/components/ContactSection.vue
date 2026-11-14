<template>
  <section id="contact" class="contact">
    <div class="container">
      <SectionTitle title="Contato" subtitle="Vamos nos conectar?" />

      <div class="contact-content">
        <div class="contact-card">
          <div class="contact-character">
            <img
              :src="publicPath + 'personagem_transparente.gif'"
              alt="Personagem"
              class="character-video"
            />
          </div>

          <div class="contact-info">
            <p class="contact-text">
              Interessado em colaborar em projetos de pesquisa, desenvolvimento web ou
              discutir ideias sobre IA e PLN? Entre em contato!
            </p>

            <div class="contact-links">
              <a
                v-for="link in links"
                :key="link.label"
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="contact-link"
              >
                <span class="link-icon" v-html="link.icon"></span>
                <span class="link-label">{{ link.label }}</span>
                <span class="link-arrow">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <span class="footer-logo">[AR]_</span>
        <p class="footer-text">
          &copy; {{ currentYear }} Avelar Rodrigues de Sousa
        </p>
        <p class="footer-sub">Feito com Vue.js & pixel art vibes</p>
      </div>
    </footer>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';

export default {
  name: 'ContactSection',
  components: { SectionTitle },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      currentYear: new Date().getFullYear(),
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/avelando',
          icon: '&#9670;',
        },
        {
          label: 'Lattes',
          url: 'http://lattes.cnpq.br/5118004962010339',
          icon: '&#9733;',
        },
        {
          label: 'ORCID',
          url: 'https://orcid.org/0009-0008-7433-8262',
          icon: '&#9679;',
        },
        {
          label: 'LinkedIn',
          url: 'https://linkedin.com/in/avelar-sousa',
          icon: '&#9632;',
        },
      ],
    };
  },
};
</script>

<style scoped>
.contact {
  padding: 6rem 2rem 0;
  background: var(--bg-secondary);
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.contact-card {
  background: var(--bg-card);
  border: 2px solid rgba(233, 69, 96, 0.2);
  display: flex;
  gap: 2rem;
  padding: 2.5rem;
  align-items: center;
}

.contact-character {
  flex-shrink: 0;
  width: 180px;
  height: 180px;
}

.character-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.contact-info {
  flex: 1;
}

.contact-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.2rem;
  background: rgba(233, 69, 96, 0.05);
  border: 2px solid rgba(233, 69, 96, 0.15);
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.contact-link:hover {
  border-color: var(--accent-pink);
  background: rgba(233, 69, 96, 0.1);
  transform: translateX(5px);
  color: var(--text-primary);
}

.link-icon {
  color: var(--accent-pink);
  font-size: 1rem;
  width: 24px;
  text-align: center;
}

.link-label {
  flex: 1;
  font-family: var(--font-pixel);
  font-size: 0.55rem;
}

.link-arrow {
  color: var(--accent-green);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-link:hover .link-arrow {
  opacity: 1;
}

.footer {
  margin-top: 4rem;
  padding: 2rem;
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

.footer-sub {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  color: var(--text-muted);
  margin-top: 0.3rem;
}

@media (max-width: 768px) {
  .contact-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .contact-character {
    width: 140px;
    height: 140px;
  }
}
</style>
