<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggleTheme"
  >
    <Transition name="pop" mode="out-in">
      <span :key="isDark ? 'moon' : 'sun'">{{ isDark ? '🌙' : '☀️' }}</span>
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const isDark = ref(true)

function applyTheme(dark: boolean) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
}

function toggleTheme() {
  isDark.value = !isDark.value
}

watch(isDark, (value) => {
  applyTheme(value)
  localStorage.setItem('theme', value ? 'dark' : 'light')
})

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(isDark.value)
})
</script>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  font-size: 1.05rem;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.theme-toggle:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.6) rotate(20deg);
}
</style>
