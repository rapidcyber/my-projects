<template>
  <article class="card">
    <div class="card__cover" :style="{ background: accent }">
      <span class="card__initials">{{ initials }}</span>
    </div>
    <div class="card__body">
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__description">{{ description }}</p>
      <ul class="card__tags">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  tags: string[]
  accent: string
}>()

const initials = computed(() =>
  props.title
    .split(' ')
    .filter((word) => /^[A-Za-z0-9]/.test(word))
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join(''),
)
</script>

<style scoped>
.card {
  border-radius: 18px;
  overflow: hidden;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow);
  border-color: var(--accent);
}

.card__cover {
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.card__cover::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.25) 100%);
}

.card__initials {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.92);
  letter-spacing: 0.02em;
}

.card__body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.card__title {
  font-size: 1.05rem;
  font-weight: 700;
}

.card__description {
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.6;
  flex: 1;
}

.card__tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.card__tags li {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
}
</style>
