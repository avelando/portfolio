<template>
  <header :class="['pixel-header', { scrolled: isScrolled, 'menu-open': menuOpen }]">
    <div class="header-content">
      <a href="#home" class="logo" @click.prevent="scrollTo('home')">
        <span class="logo-bracket">[</span>
        <span class="logo-text">AR</span>
        <span class="logo-bracket">]</span>
        <span class="logo-cursor">_</span>
      </a>

      <button class="menu-toggle" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav :class="{ open: menuOpen }">
        <ul>
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="'#' + item.id"
              :class="{ active: activeSection === item.id }"
              @click.prevent="scrollTo(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PixelHeader',
  data() {
    return {
      isScrolled: false,
      activeSection: 'home',
      menuOpen: false,
      navItems: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'Sobre' },
        { id: 'formation', label: 'Formação' },
        { id: 'publications', label: 'Publicações' },
        { id: 'experience', label: 'Experiência' },
        { id: 'systems', label: 'Sistemas' },
        { id: 'projects', label: 'Projetos' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contato' },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;

      if (window.innerHeight + Math.ceil(window.scrollY) >= document.documentElement.scrollHeight - 2) {
        this.activeSection = this.navItems[this.navItems.length - 1].id;
        return;
      }

      const sections = this.navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          this.activeSection = sections[i].id;
          break;
        }
      }
    },
    scrollTo(id) {
      this.menuOpen = false;
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
.pixel-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
  transition: all 0.3s ease;
  background: rgba(15, 14, 23, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 3px solid transparent;
}

.pixel-header.scrolled {
  border-bottom-color: var(--accent-pink);
  background: rgba(15, 14, 23, 0.95);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
}

.logo {
  font-family: var(--font-pixel);
  font-size: 1.1rem;
  color: var(--text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 2px;
}

.logo:hover {
  color: var(--text-primary);
}

.logo-bracket {
  color: var(--accent-pink);
}

.logo-text {
  color: var(--accent-green);
}

.logo-cursor {
  color: var(--accent-pink);
  animation: blink 1s step-end infinite;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 0.3rem;
}

nav ul li a {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.5rem 0.6rem;
  transition: all 0.3s ease;
  position: relative;
}

nav ul li a:hover,
nav ul li a.active {
  color: var(--accent-pink);
}

nav ul li a.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background: var(--accent-pink);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background: var(--accent-pink);
  transition: all 0.3s ease;
}

.menu-open .menu-toggle span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 6px);
}

.menu-open .menu-toggle span:nth-child(2) {
  opacity: 0;
}

.menu-open .menu-toggle span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -6px);
}

@media (max-width: 900px) {
  .menu-toggle {
    display: flex;
  }

  nav {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: rgba(15, 14, 23, 0.98);
    border-bottom: 3px solid var(--accent-pink);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  nav.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  nav ul {
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 0;
  }

  nav ul li a {
    display: block;
    padding: 1rem 0.8rem;
    font-size: 0.6rem;
  }
}
</style>
