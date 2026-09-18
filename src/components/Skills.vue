<template>
  <section id="skills" class="section section--soft section--blueprint">
    <div class="container">
      <div v-reveal class="skills__intro">
        <p class="eyebrow">Skills</p>
        <h2 class="section-title">Tools I reach for</h2>
        <p class="section-lead">A working toolkit built by shipping across the stack — not just studying it.</p>
      </div>

      <div class="skills__grid">
        <div
          v-for="(group, index) in skillGroups"
          :key="group.label"
          v-reveal="(index % 4) + 1"
          class="skill-card"
        >
          <h3 class="skill-card__title">{{ group.label }}</h3>
          <ul class="skill-card__list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillGroups } from '../data/skills'
</script>

<style scoped>
.section--soft {
  background: var(--bg-soft);
}

.skills__intro {
  max-width: 640px;
}

.skills__grid {
  margin-top: 44px;
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.skill-card {
  padding: 24px;
  border-radius: 18px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}

.skill-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 14px;
}

.skill-card__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--text-muted);
  font-size: 0.92rem;
}

.skill-card__list li {
  position: relative;
  padding-left: 16px;
}

.skill-card__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--accent-2);
}
</style>
