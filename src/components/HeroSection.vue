<template>
  <section id="home" class="hero">
    <div class="hero-bg">
      <div class="grid-lines"></div>
      <div class="scanline"></div>
    </div>

    <div class="hero-content">
      <div class="hero-text">
        <p class="greeting">&gt; Olá, mundo! Eu sou</p>
        <h1 class="name">
          <span class="first">Avelar</span>
          <span class="last">Sousa</span>
        </h1>
        <div class="role-wrapper">
          <span class="role-prefix">&gt;&gt;</span>
          <span class="role">{{ currentRole }}</span>
          <span class="cursor">|</span>
        </div>
        <p class="description">
          Doutorando em IA/PLN na USP (ICMC). Graduado em ADS pelo IFPI.
          Pesquisador em Processamento de Linguagem Natural e Recuperação de Informação.
        </p>
        <div class="hero-buttons">
          <a href="#projects" class="btn-primary" @click.prevent="scrollTo('projects')">
            <span class="btn-icon">&#9654;</span> Ver Projetos
          </a>
          <a href="#publications" class="btn-secondary" @click.prevent="scrollTo('publications')">
            <span class="btn-icon">&#9830;</span> Publicações
          </a>
        </div>
        <div class="hero-links">
          <a href="https://github.com/avelando" target="_blank" rel="noopener" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="http://lattes.cnpq.br/5118004962010339" target="_blank" rel="noopener" title="Lattes">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </a>
          <a href="https://orcid.org/0009-0008-7433-8262" target="_blank" rel="noopener" title="ORCID">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.444-.844-3.722-3.862-3.722h-2.457z"/></svg>
          </a>
        </div>
      </div>

      <div class="hero-character">
        <div class="character-frame">
          <img
            :src="publicPath + 'personagem_transparente.gif'"
            alt="Personagem pixel art"
            class="character-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      roles: [
        'Doutorando em IA @ USP',
        'Pesquisador em PLN',
        'Desenvolvedor Web Full-Stack',
        'Graduado em ADS @ IFPI',
      ],
      currentRoleIndex: 0,
      currentCharIndex: 0,
      isDeleting: false,
      currentRole: '',
      publicPath: process.env.BASE_URL,
      typeSpeed: 80,
    };
  },
  mounted() {
    this.typeEffect();
  },
  methods: {
    typeEffect() {
      const fullText = this.roles[this.currentRoleIndex];

      if (!this.isDeleting) {
        this.currentRole = fullText.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;

        if (this.currentCharIndex === fullText.length) {
          this.isDeleting = true;
          setTimeout(() => this.typeEffect(), 2000);
          return;
        }
      } else {
        this.currentRole = fullText.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;

        if (this.currentCharIndex === 0) {
          this.isDeleting = false;
          this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        }
      }

      const speed = this.isDeleting ? 40 : this.typeSpeed;
      setTimeout(() => this.typeEffect(), speed);
    },
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 70px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(233, 69, 96, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(233, 69, 96, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.scanline {
  position: absolute;
  width: 100%;
  height: 4px;
  background: rgba(233, 69, 96, 0.05);
  animation: scanline 8s linear infinite;
}

@keyframes scanline {
  0% { top: -5%; }
  100% { top: 105%; }
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
}

.hero-text {
  flex: 1;
}

.greeting {
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  color: var(--accent-green);
  margin-bottom: 1rem;
}

.name {
  font-family: var(--font-pixel);
  font-size: 2.2rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.name .first {
  color: var(--text-primary);
  display: block;
}

.name .last {
  color: var(--accent-pink);
  display: block;
}

.role-wrapper {
  font-family: var(--font-pixel);
  font-size: 0.65rem;
  margin-bottom: 1.5rem;
  min-height: 2em;
}

.role-prefix {
  color: var(--accent-yellow);
  margin-right: 0.5rem;
}

.role {
  color: var(--accent-blue);
}

.cursor {
  color: var(--accent-pink);
  animation: blink 0.8s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn-primary,
.btn-secondary {
  font-family: var(--font-pixel);
  font-size: 0.55rem;
  padding: 0.9rem 1.5rem;
  border: 3px solid;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--accent-pink);
  border-color: var(--accent-pink);
  color: #fff;
}

.btn-primary:hover {
  background: transparent;
  color: var(--accent-pink);
}

.btn-secondary {
  background: transparent;
  border-color: var(--accent-green);
  color: var(--accent-green);
}

.btn-secondary:hover {
  background: var(--accent-green);
  color: var(--bg-primary);
}

.btn-icon {
  font-size: 0.6rem;
}

.hero-links {
  display: flex;
  gap: 1rem;
}

.hero-links a {
  color: var(--text-muted);
  transition: all 0.3s ease;
  padding: 0.5rem;
}

.hero-links a:hover {
  color: var(--accent-pink);
  transform: translateY(-2px);
}

.hero-character {
  flex-shrink: 0;
}

.character-frame {
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.character-frame::before {
  content: '';
  position: absolute;
  inset: -8px;
  border: 4px solid var(--accent-pink);
  opacity: 0.3;
}

.character-frame::after {
  content: '';
  position: absolute;
  inset: -16px;
  border: 2px solid var(--accent-green);
  opacity: 0.15;
}

.character-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  image-rendering: auto;
}

@media (max-width: 900px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
    padding-top: 2rem;
  }

  .name {
    font-size: 1.5rem;
  }

  .description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-links {
    justify-content: center;
  }

  .character-frame {
    width: 220px;
    height: 220px;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 1.2rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
