<template>
  <div id="app">
    <PixelHeader />
    <HeroSection />
    <PixelDivider color="var(--accent-pink)" />
    <AboutSection />
    <PixelDivider color="var(--accent-green)" />
    <FormationSection />
    <PixelDivider color="var(--accent-blue)" />
    <PublicationsSection />
    <PixelDivider color="var(--accent-yellow)" />
    <ExperienceSection />
    <PixelDivider color="var(--accent-purple)" />
    <SystemsSection />
    <PixelDivider color="var(--accent-pink)" />
    <ResearchSection />
    <PixelDivider color="var(--accent-green)" />
    <SkillsSection />
    <PixelDivider color="var(--accent-blue)" />
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
import PixelDivider from '@/components/PixelDivider.vue';

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
    PixelDivider,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
