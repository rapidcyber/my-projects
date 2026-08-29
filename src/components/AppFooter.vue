<template>
  <footer class="footer">
    <div class="container footer__inner">
      <span>© {{ year }} Jun Barcellano. Built with Vue &amp; Tailwind.</span>
      <a href="https://github.com/rapidcyber" target="_blank" rel="noopener noreferrer">github.com/rapidcyber</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.footer__inner a {
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.footer__inner a:hover {
  color: var(--accent);
}
</style>
