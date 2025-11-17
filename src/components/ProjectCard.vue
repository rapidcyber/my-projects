<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition">
    <img
      :src="image"
      alt="Project image"
      class="w-full h-40 object-cover rounded-md mb-4"
    />
    <h2 class="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">{{ title }}</h2>
    <p class="text-gray-600 dark:text-gray-300">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
}>()
</script>
