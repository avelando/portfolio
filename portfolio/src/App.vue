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
          <button>Explore more</button>
        </div>
        <div class="image"></div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="content">
        <div class="resum">
          <h1>About me</h1>
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
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Card from '@/components/Cards.vue'

export default {
  name: 'App',
  components: {
    Header,
    Card,
  }
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
  width: 100vw;
  height: 100vh;
}

section.projects {
  width: 100vw;
  height: 100vh;
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
}


section.projects>.content>.cards>.prots h2 {
  font-size: 1.3rem;
}
</style>
