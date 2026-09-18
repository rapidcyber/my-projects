<template>
  <section id="work" class="section section--matrix">
    <div class="container">
      <div v-reveal class="work__intro">
        <p class="eyebrow">Selected work</p>
        <h2 class="section-title">Systems and products I've shipped</h2>
        <p class="section-lead">
          A mix of enterprise systems built for real operations, and products built as
          ventures. Filter to see either.
        </p>
      </div>

      <div v-reveal="1" class="work__filters">
        <button
          v-for="option in filters"
          :key="option.value"
          class="filter-pill"
          :class="{ 'is-active': activeFilter === option.value }"
          type="button"
          @click="activeFilter = option.value"
        >
          {{ option.label }}
        </button>
      </div>

      <TransitionGroup tag="div" name="card-fade" class="work__grid">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :accent="project.accent"
          :logo="project.logo"
          :icon="project.icon"
        />
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'

const filters = [
  { value: 'all', label: 'All' },
  { value: 'systems', label: 'Enterprise Systems' },
  { value: 'products', label: 'Products & Ventures' },
] as const

const activeFilter = ref<(typeof filters)[number]['value']>('all')

const filteredProjects = computed(() =>
  activeFilter.value === 'all' ? projects : projects.filter((p) => p.category === activeFilter.value),
)
</script>

<style scoped>
.work__intro {
  max-width: 640px;
}

.work__filters {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-pill {
  padding: 9px 18px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  color: var(--text-muted);
  font-size: 0.86rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-pill:hover {
  color: var(--text);
  border-color: var(--accent);
}

.filter-pill.is-active {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  border-color: transparent;
  color: #fff;
}

.work__grid {
  margin-top: 36px;
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

.card-fade-enter-active,
.card-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.card-fade-enter-from,
.card-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}
.card-fade-leave-active {
  position: absolute;
}
.card-fade-move {
  transition: transform 0.3s ease;
}
</style>
