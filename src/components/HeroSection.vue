<template>
  <section id="home" class="hero">
    <div class="hero-bg">
      <div class="grid-lines"></div>
      <div class="scanline"></div>
      <div class="particles">
        <span v-for="n in 20" :key="n" class="particle" :style="particleStyle(n)"></span>
      </div>
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
          Doutorando em IA/PLN na USP (ICMC). Pesquisador e Desenvolvedor Full-Stack.
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
          <a href="https://instagram.com/avelando" target="_blank" rel="noopener" title="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://linkedin.com/in/avelar-rodrigues-15568a1b1" target="_blank" rel="noopener" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/avelando" target="_blank" rel="noopener" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="mailto:avelars@usp.br" title="Email">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
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
    particleStyle(n) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const delay = Math.random() * 6;
      const duration = Math.random() * 4 + 3;
      return {
        left: x + '%',
        top: y + '%',
        width: size + 'px',
        height: size + 'px',
        animationDelay: delay + 's',
        animationDuration: duration + 's',
      };
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

.particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  background: var(--accent-pink);
  opacity: 0;
  border-radius: 0;
  animation: particlePulse ease-in-out infinite;
}

@keyframes particlePulse {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 0.6; transform: scale(1); }
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
  margin-bottom: 0.5rem;
}

.name {
  font-family: var(--font-pixel);
  font-size: 2.2rem;
  line-height: 1.3;
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
  margin-bottom: 1.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
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
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  border-color: var(--accent-green);
  color: var(--accent-green);
}

.btn-secondary:hover {
  background: var(--accent-green);
  color: var(--bg-primary);
  transform: translateY(-2px);
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
  transform: translateY(-3px);
}

.hero-character {
  flex-shrink: 0;
}

.character-frame {
  width: 300px;
  height: 300px;
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
    max-width: calc(100vw - 6rem);
  }

}

@media (max-width: 480px) {
  .name {
    font-size: 1.2rem;
  }

  .greeting {
    font-size: 0.6rem;
  }

  .role-wrapper {
    font-size: 0.55rem;
  }

  .description {
    font-size: 0.9rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    font-size: 0.5rem;
    padding: 0.8rem 1.2rem;
    width: 100%;
    justify-content: center;
  }
}
</style>
