<template>
  <button
    @click="toggleTheme"
    class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 transition"
  >
    {{ isDark ? '🌙' : '☀️' }}
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  watch(isDark, (newValue) => {
    document.documentElement.classList.toggle('dark', newValue)
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
  })

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    isDark.value = savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark.value)
  })
  
</script>
