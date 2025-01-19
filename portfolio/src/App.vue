<template>
  <div id="app">
    <Header />

    <section id="home" class="home">
      <div class="content">
        <div class="info">
          <h1>Web Developer</h1>
          <h2>Avelar Sousa</h2>
          <p>
            Graduating in Systems Analysis and Development<br />
            passionate about WEB development.
          </p>
          <a href="#about">
            <button>Explore more</button>
          </a>
        </div>
        <div class="image"></div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="title">
        <h1>About Me</h1>
      </div>
      <div class="content">
        <div class="left">
          <div class="timeline">
            <div class="card">
              <div class="info">
                <h3 class="title">2020</h3>
                <p>Started high school integrated with the Internet Informatics course at IFPI - Campus Paulistana.</p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">2022</h3>
                <p>Finished high school and took the entrance exam.</p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">2023</h3>
                <p>Began the technologist degree in Systems Analysis and Development at IFPI - Campus Picos.</p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">2024</h3>
                <p>Started working at Construtora e Incorporadora SOMA.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <p>
            Hello! My name is Avelar Sousa. I am passionate about web development, 
            and I am constantly learning new technologies to improve my skills. 
            I am currently pursuing a degree in Systems Analysis and Development, 
            while working as a developer.
          </p>
        </div>
      </div>
    </section>

    <section id="projects" class="projects">
      <div class="content">
        <h1>Projects</h1>
        <div class="cards">
          <div class="prots">
            <h2>Prototypes</h2>
            <Card 
              :cards="[
                { 
                  imageSrc: require('@/assets/images/cis.png'),
                  title: 'Construtora e Incorporadora SOMA',
                  info: 'Prototype of a landing page created to showcase the Construtora e Incorporadora SOMA',
                  link: 'https://www.figma.com/design/B62f8ZIu5CUD3qJQhFkkHy/Construtora-e-incorporadora-SOMA?node-id=0-1&t=gpozLi5bvYqVX6uW-1' 
                },
                { 
                  imageSrc: require('@/assets/images/amr.png'),
                  title: 'Stock and Machine Manager',
                  info: 'Prototype of a system for managing stocks and machines for Amorim Rental',
                  link: 'https://www.figma.com/design/GdXCyPQGphMDcnFBNwuiEJ/Gerenciador-de-estoques?node-id=0-1&t=Jj58tChRhv4HoYEY-1'
                },
                { 
                  imageSrc: require('@/assets/images/relatorios.png'),
                  title: 'Report Page',
                  info: 'Prototype of a report page for the JR Solutions app',
                  link: 'https://www.figma.com/design/QGqunu45lC37DEJE7xp5sL/P%C3%A1gina-de-relat%C3%B3rios---JR-Solu%C3%A7%C3%B5es?node-id=0-1&t=W8x4JaSKuPxZTDgb-1'
                },
                { 
                  imageSrc: require('@/assets/images/bar.png'),
                  title: 'Bar',
                  info: 'Prototype of an inventory and sales management system for a hypothetical bar',
                  link: 'https://www.figma.com/design/Y02V2avRaUtTgaKryL81MZ/Desafio---Bar-do-Jo%C3%A3o?t=W8x4JaSKuPxZTDgb-1'
                },
                { 
                  imageSrc: require('@/assets/images/sistira.png'),
                  title: 'SisTIRA (under construction)',
                  info: 'Prototype of the SisTIRA System: Intelligent Tutoring System for Automatic Responses',
                  link: 'https://www.figma.com/design/oWMkDCr0E8KoUuV2LuxPFZ/SisTIRA-e-Sistema-de-Tutoria-Inteligente-de-Respostas-Autom%C3%A1ticas?node-id=6-2&t=zdN7n9EfmsgHbe4h-1'
                },
              ]"
            />
          </div>

          <div class="dev">
            <h2>Developed</h2>
            <Card 
              :cards="[ 
                { 
                  imageSrc: require('@/assets/images/black.jpg'),
                  title: 'Construtora e Incorporadora SOMA',
                  info: 'Landing page developed to showcase SOMA',
                  link: 'https://github.com/Aprendizes-SOMA/landing-page.git' 
                },
                { 
                  imageSrc: require('@/assets/images/black.jpg'),
                  title: 'Online Courses - AJK System',
                  info: 'System developed with Java and JavaFX for the Object-Oriented Programming course',
                  link: 'https://github.com/ifpi-picos/cursos-online-ajk-academic-system.git'
                },
                { 
                  imageSrc: require('@/assets/images/black.jpg'),
                  title: 'WordleOfThrones (Under construction)',
                  info: 'Game under development for the Programming for the Internet I and II courses',
                  link: 'https://github.com/WordleOfThrones/WordleOfThrones.git'
                },
                { 
                  imageSrc: require('@/assets/images/black.jpg'),
                  title: 'ThronesAPI (Under construction)',
                  info: 'API under development for the WordleOfThrones game',
                  link: 'https://github.com/WordleOfThrones/ThronesAPI.git'
                }
              ]"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="skills" id="skills">
      <div class="content">
        <SkillCard
          name="Next.js"
          icon="icons/next.png"
          borderColor="#000000"
        />
        <SkillCard
          name="Vue.js"
          icon="icons/vue.png"
          borderColor="#3FB984"
        />
        <SkillCard
          name="Django"
          icon="icons/django.svg"
          borderColor="#092E20"
        />
        <SkillCard
          name="Express"
          icon="icons/express.png"
          borderColor="#292929"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Card from '@/components/Cards.vue'
import SkillCard from './components/SkillCard.vue';

export default {
  name: 'App',
  components: {
    Header,
    Card,
    SkillCard
  },
};
</script>

<style>
section.home>.content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  width: 100vw;
  height: calc(100vh - 80px);
}

section.home>.content>.info h1 {
  font-size: 30px;
  color: #333333;
  font-weight: 500;
}

section.home>.content>.info h2 {
  font-size: 50px;
  margin-top: 0.2%;
  color: #333333;
}

section.home>.content>.info p {
  font-size: 20px;
  color: #333333;
  font-weight: 400;
  margin-top: 0.2%;
}

section.home>.content>.info button {
  margin-top: 2%;
  padding: 10px 20px;
  background-color: #333333;
  color: #f3f3f3;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  border: #333333 2px solid;
  transition: all 0.3s ease;
  font-weight: lighter;
}

section.home>.content>.info button:hover {
  background-color: #f3f3f3;
  color: #333333;
  border: #333333 2px solid;
  transition: 0.3s ease-in-out;
}

section.home>.content>.image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: url('@/assets/images/avelar.jpg');
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
  filter: drop-shadow(0px 0px 5px #333333);
}

section.home>.content>.image:hover {
  transform: scale(1.1);
  filter: drop-shadow(0px 0px 5px #333333);
  background-image: url('@/assets/images/avelar2.jpg');
}

section.about {
  padding: 30px 20px;
  background: #f3f3f3;
  text-align: center;
  position: relative;
}

section.about>.title h1 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 30px;
}

section.about>.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  position: relative;
}

section.about>.content::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: #333333;
  transform: translateX(-50%);
  z-index: 1;
}

section.about>.content>.left {
  width: 48%;
  position: relative;
}

section.about>.content>.left>.timeline {
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
}

section.about>.content>.left>.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: #333333;
  transform: translateX(-50%);
  z-index: 1;
}

section.about>.content>.left>.timeline>.card {
  position: relative;
  width: 300px;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

section.about>.content>.left>.timeline>.card:nth-child(odd) {
  margin-left: calc(50% - 315px);
  text-align: left;
}

section.about>.content>.left>.timeline>.card:nth-child(even) {
  margin-left: 52%;
  text-align: right;
}

section.about>.content>.left>.timeline>.card>.info>.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 5px;
}

section.about>.content>.left>.timeline>.card::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 10px;
  height: 10px;
  background: #333333;
  border-radius: 50%;
  z-index: 2;
  transform: translateY(-50%);
}

section.about>.content>.left>.timeline>.card:nth-child(odd)::before {
  right: -40px;
}

section.about>.content>.left>.timeline>.card:nth-child(even)::before {
  left: -40px;
}

section.about>.content>.right {
  width: 48%;
  text-align: justify;
  display: flex;
  justify-content: center;
}

section.projects {
  width: 100vw;
  height: auto;
  padding: 1% 0 2% 0;
  background-color: #333333;
}

section.projects>.content {
  color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

section.projects>.content h1 {
  margin: 1% 0;
  font-size: 1.8rem;
}

section.projects>.content>.cards h2 {
  font-size: 1.3rem;
}

section.projects>.content>.cards>.dev {
  margin-top: 3%;
  font-size: 1.3rem;
}
</style>
