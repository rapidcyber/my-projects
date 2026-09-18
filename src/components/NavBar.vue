<template>
  <header
    class="nav"
    :class="{ 'nav--scrolled': scrolled }"
  >
    <div class="container nav__inner">
      <a href="#top" class="nav__brand" @click="closeMenu">
        <span class="nav__mark">JB</span>
        <span class="nav__name">Jun Barcellano</span>
      </a>

      <nav class="nav__links nav__links--desktop">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
        <a href="resume.html" target="_blank" rel="noopener">Resume</a>
      </nav>

      <div class="nav__actions">
        <ThemeToggle />
        <button class="nav__burger" :class="{ 'is-open': menuOpen }" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <Transition name="slide-down">
      <nav v-if="menuOpen" class="nav__links nav__links--mobile">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="closeMenu">{{ link.label }}</a>
        <a href="resume.html" target="_blank" rel="noopener" @click="closeMenu">Resume</a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'


const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--bg) 72%, transparent);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.nav--scrolled {
  border-bottom-color: var(--border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
}

.nav__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  font-size: 0.85rem;
}

.nav__name {
  font-size: 1rem;
}

.nav__links--desktop {
  display: none;
  gap: 32px;
}

.nav__links--desktop a {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.2s ease;
  position: relative;
}

.nav__links--desktop a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.25s ease;
}

.nav__links--desktop a:hover {
  color: var(--text);
}

.nav__links--desktop a:hover::after {
  width: 100%;
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav__burger {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  cursor: pointer;
}

.nav__burger span {
  height: 2px;
  margin: 0 8px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.nav__burger.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav__burger.is-open span:nth-child(2) {
  opacity: 0;
}
.nav__burger.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav__links--mobile {
  display: flex;
  flex-direction: column;
  padding: 8px 24px 20px;
  border-top: 1px solid var(--border);
  background: var(--bg);
}

.nav__links--mobile a {
  padding: 12px 0;
  font-weight: 500;
  border-bottom: 1px solid var(--border);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (min-width: 860px) {
  .nav__links--desktop {
    display: flex;
  }
  .nav__burger {
    display: none;
  }
}
</style>
