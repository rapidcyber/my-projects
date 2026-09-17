<template>
  <svg
    class="work-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <!-- HRMS & Payroll: an employee card with payroll lines -->
    <g v-if="name === 'hrms'">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <circle cx="8.4" cy="11" r="2" />
      <path d="M5.4 16.2c0-1.8 1.3-2.9 3-2.9s3 1.1 3 2.9" />
      <line x1="13.6" y1="9.4" x2="18.6" y2="9.4" />
      <line x1="13.6" y1="12.4" x2="18.6" y2="12.4" />
      <line x1="13.6" y1="15.4" x2="17" y2="15.4" />
    </g>

    <!-- Expenses: a receipt with an approval check -->
    <g v-else-if="name === 'expenses'">
      <path d="M6.5 3.5h11a1 1 0 0 1 1 1v15.6l-2.3-1.4-2.2 1.4-2.2-1.4-2.2 1.4-2.2-1.4-2.2 1.4V4.5a1 1 0 0 1 1-1z" />
      <line x1="8.5" y1="8" x2="15.5" y2="8" />
      <line x1="8.5" y1="11.2" x2="15.5" y2="11.2" />
      <line x1="8.5" y1="14.4" x2="12.8" y2="14.4" />
    </g>

    <!-- Restaurant POS: crossed fork & knife -->
    <g v-else-if="name === 'restaurant'">
      <line x1="7.5" y1="3.2" x2="7.5" y2="9.2" />
      <line x1="5.6" y1="3.2" x2="5.6" y2="7.4" />
      <line x1="9.4" y1="3.2" x2="9.4" y2="7.4" />
      <path d="M5.6 7.4c0 1.1.85 2 1.9 2" />
      <path d="M9.4 7.4c0 1.1-.85 2-1.9 2" />
      <line x1="7.5" y1="9.2" x2="7.5" y2="20.8" />
      <path d="M16.8 3.2c-1.3 1.3-1.9 2.8-1.9 4.4 0 1.6.9 2.6 2 2.9v10.3" />
    </g>

    <!-- Water Refilling Station: a water droplet -->
    <path
      v-else-if="name === 'water'"
      d="M12 3.2c-3.6 4.6-5.8 8-5.8 10.6a5.8 5.8 0 0 0 11.6 0c0-2.6-2.2-6-5.8-10.6z"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  name: 'hrms' | 'expenses' | 'restaurant' | 'water'
}>()
</script>

<style scoped>
.work-icon {
  width: 44px;
  height: 44px;
  color: rgba(255, 255, 255, 0.95);
}
</style>
