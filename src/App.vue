<template>
  <div id="app">
    <PixelHeader />
    <HeroSection />
    <AboutSection />
    <FormationSection />
    <PublicationsSection />
    <ExperienceSection />
    <SystemsSection />
    <ResearchSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>

<script>
import PixelHeader from '@/components/PixelHeader.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import FormationSection from '@/components/FormationSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import SystemsSection from '@/components/SystemsSection.vue';
import ResearchSection from '@/components/ResearchSection.vue';
import PublicationsSection from '@/components/PublicationsSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ContactSection from '@/components/ContactSection.vue';

export default {
  name: 'App',
  components: {
    PixelHeader,
    HeroSection,
    AboutSection,
    FormationSection,
    ExperienceSection,
    SystemsSection,
    ResearchSection,
    PublicationsSection,
    SkillsSection,
    ContactSection,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
