<template>
  <header>
    <div class="img">
      <img src="@/assets/images/img.svg" alt="Logo" />
    </div>
    <nav>
      <ul>
        <li><a href="#home" @click="scrollToSection($event, 'home')">home</a></li>
        <li><a href="#about" @click="scrollToSection($event, 'about')">about</a></li>
        <li><a href="#projects" @click="scrollToSection($event, 'projects')">projects</a></li>
        <li><a href="#skills" @click="scrollToSection($event, 'skills')">skills</a></li>
        <li><a href="#contact" @click="scrollToSection($event, 'contact')">contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    scrollToSection(event, sectionId) {
      event.preventDefault();

      const targetSection = document.getElementById(sectionId);
      const headerHeight = document.querySelector('header').offsetHeight;

      if (targetSection) {
        const sectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

        const offsetPosition = sectionPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    },
  },
};
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header nav {
  margin-right: calc(5% - 20px);
}

header nav ul {
  display: flex;
  list-style: none;
}

header nav ul li {
  margin-right: 20px;
}

header nav ul li a {
  text-decoration: none;
  color: #f3f3f3;
  transition: color 0.3s ease;
}

header .img {
  margin-left: 5%;
  display: flex;
  align-items: center;
}

header .img img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  filter: invert(100%) sepia(0%) saturate(5821%) hue-rotate(225deg) brightness(116%) contrast(91%);
}
</style>
