<template>
  <div class="app-shell">
    <NavBar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
