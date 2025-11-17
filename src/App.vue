<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-colors">
    <header class="bg-white dark:bg-gray-800 shadow p-6 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-blue-700 dark:text-blue-300">Jun's Project Showcase</h1>
    </header>
    <main class="p-6">
      <Home />
    </main>
  </div>
</template>

<script setup lang="ts">
import Home from './pages/Home.vue'
</script>

<style scoped></style>