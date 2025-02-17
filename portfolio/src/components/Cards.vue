<template>
  <div :class="uniqueClass">
    <div class="cards-container">
      <div
        class="card"
        v-for="(card, index) in cards"
        :key="index"
        :class="{ 'card-active': activeCard === index }"
        @mouseenter="onHover(index)"
        @mouseleave="onHoverLeave(index)"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd(index)"
        @touchmove="onTouchMove"
      >
        <img :src="card.imageSrc" :alt="card.title" class="card-image" />
        <div class="card-overlay">
          <div class="card-title">{{ card.title }}</div>
          <div class="card-info">
            <p>{{ card.info }}</p>
            <!-- Botão "Acesse aqui" aparece apenas se o link existir -->
            <a
              v-if="card.link"
              :href="card.link"
              target="_blank"
              rel="noopener noreferrer"
              class="card-button"
            >
              Acesse aqui
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cards: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    const uniqueId = `card-${Math.random().toString(36).substr(2, 9)}`;
    return {
      uniqueClass: uniqueId,
      activeCard: null,
      touchStartY: 0,
      touchEndY: 0,
      isScrolling: false,
    };
  },
  methods: {
    toggleCard(index) {
      this.activeCard = this.activeCard === index ? null : index;
    },
    onHover(index) {
      if (window.innerWidth > 1024) {
        this.activeCard = index;
      }
    },
    onHoverLeave(index) {
      if (window.innerWidth > 1024 && this.activeCard === index) {
        this.activeCard = null;
      }
    },
    onTouchStart(event) {
      this.touchStartY = event.touches[0].clientY;
      this.isScrolling = false;
    },
    onTouchMove(event) {
      const currentY = event.touches[0].clientY;
      if (Math.abs(currentY - this.touchStartY) > 10) {
        this.isScrolling = true;
      }
    },
    onTouchEnd(index) {
      if (!this.isScrolling) {
        this.toggleCard(index);
      }
    },
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: left;
  margin-top: 20px;
}

.card {
  width: 250px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  background: #f9f9f9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.738);
}

.card-image {
  width: 110%;
  height: 110%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  padding: 10px;
  transition: all 0.3s ease;
}

.card-overlay:hover {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.63));
  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
}

.card-title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  transform: translateY(230px);
  transition: transform 0.3s ease;
}

.card-info {
  color: #fff;
  font-size: 1rem;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  margin-top: auto;
}

.card-button {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #f3f3f3;
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.card-button:hover {
  background-color: #333;
  color: #f3f3f3;
  transition: 0.5s ease;
  transform: translateY(-2px);
}

.card:hover .card-title {
  transform: translateY(10px);
}

.card:hover .card-info {
  opacity: 1;
  transform: translateY(0);
}

.card:hover .card-image {
  transform: scale(1.05);
}

.card-active .card-title {
  transform: translateY(10px);
}

.card-active .card-info {
  opacity: 1;
  transform: translateY(0);
}

.card-active .card-image {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .card {
    width: 80%;
    height: 200px;
  }

  .card-title {
    font-size: 1rem;
    transform: translateY(150px);
  }

  .card-info {
    font-size: 0.9rem;
  }
}

@media (max-width: 820px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}

@media (max-width: 912px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
