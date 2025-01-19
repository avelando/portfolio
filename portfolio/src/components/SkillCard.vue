<template>
  <div class="skill-card" :style="{ borderColor: borderColor }">
    <div class="icon" v-if="icon">
      <img :src="resolveIconPath(icon)" :alt="name + ' icon'" />
    </div>
    <h3 class="name">{{ name }}</h3>
    <p class="description" v-if="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
    icon: {
      type: String,
      required: true,
    },
    borderColor: {
      type: String,
      required: false,
      default: "#eaeaea",
    },
  },
  methods: {
    resolveIconPath(icon) {
      try {
        return require(`@/assets/${icon}`);
      } catch (error) {
        console.error("Icon not found:", icon);
        return "";
      }
    },
  },
};
</script>

<style scoped>
.skill-card {
  display: inline-flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 15px;
  border: 3px solid #eaeaea;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.skill-card .icon img {
  width: 50px;
  height: 50px;
}

.skill-card .name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333333;
  text-align: center;
  white-space: nowrap;
}

.skill-card .description {
  font-size: 0.9rem;
  color: #666666;
  text-align: center;
  white-space: normal;
}

.skill-card {
  max-width: fit-content;
}
</style>
