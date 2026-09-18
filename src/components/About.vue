<template>
  <section id="about" class="section section--circuit">
    <div class="container about">
      <div v-reveal class="about__copy">
        <p class="eyebrow">About</p>
        <h2 class="section-title">I build products, not just features.</h2>
        <p class="section-lead">
          I'm a full-stack engineer and product builder who enjoys taking an idea from a
          napkin sketch to something real people use. My work spans enterprise systems
          (payroll, POS, expense tracking) and consumer products (ride-hailing, streaming,
          fintech) — usually touching the web app, the mobile clients, and the
          infrastructure underneath.
        </p>
        <p class="about__paragraph">
          I care most about clean data models, interfaces that get out of the user's way,
          and shipping something that still works a year later. I currently work on
          products at <strong>AiPAYGO</strong>, alongside client and venture work.
        </p>
      </div>

      <div v-reveal="1" class="about__stats">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <span class="stat-card__value">{{ stat.value }}</span>
          <span class="stat-card__label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'

const stats = [
  { value: `${projects.length}+`, label: 'Products & systems shipped' },
  { value: `${skillGroups.length}`, label: 'Disciplines — web to cloud' },
  { value: 'Web · Mobile · Cloud', label: 'End-to-end delivery' },
]
</script>

<style scoped>
.about {
  display: grid;
  gap: 56px;
  align-items: start;
}

.about__paragraph {
  margin-top: 18px;
  color: var(--text-muted);
  max-width: 620px;
  line-height: 1.7;
}

.about__stats {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.stat-card {
  padding: 22px;
  border-radius: 16px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.stat-card__value {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--accent);
}

.stat-card__label {
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (min-width: 900px) {
  .about {
    grid-template-columns: 1.2fr 1fr;
  }
}
</style>
