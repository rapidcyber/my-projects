<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :description="project.description"
      :image="project.image"
    />
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    title: 'HRMS & Payroll System',
    description: 'Automates employee records, payroll, and compliance.',
    image: 'https://placehold.co/600x400/000000/FFF',
  },
  {
    title: 'Expenses Management System',
    description: 'Tracks operational costs with approval workflows.',
    image: 'https://placehold.co/600x400/orange/white',
  },
  {
    title: 'Restaurant POS',
    description: 'Real-time order, inventory, and sales management.',
    image: 'https://placehold.co/600x400/transparent/F00',
  },
  {
    title: 'Water Refilling Station POS',
    description: 'Billing, service tracking, and customer database.',
    image: 'https://placehold.co/600x400?text=Hello\nWorld',
  },
]
</script>
