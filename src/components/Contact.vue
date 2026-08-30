<template>
  <section id="contact" class="section">
    <div class="container">
      <div v-reveal class="contact">
        <p class="eyebrow">Contact</p>
        <h2 class="section-title contact__title">Let's build something worth shipping.</h2>
        <p class="section-lead contact__lead">
          Have a project in mind, or just want to talk shop? My inbox is open.
        </p>

        <div class="contact__actions">
          <a class="btn btn-primary" :href="`mailto:${email}`">Email me</a>
          <button class="btn btn-ghost" type="button" @click="copyEmail">
            {{ copied ? 'Copied!' : email }}
          </button>
          <a class="btn btn-ghost" href="https://github.com/rapidcyber" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = 'jun.barcellano@gmail.com'
const copied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  } catch {
    window.location.href = `mailto:${email}`
  }
}
</script>

<style scoped>
.contact {
  border-radius: 28px;
  padding: clamp(40px, 6vw, 72px);
  background: linear-gradient(135deg, var(--accent-soft), transparent 60%), var(--bg-elevated);
  border: 1px solid var(--border);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact__title {
  max-width: 20ch;
}

.contact__lead {
  margin-left: auto;
  margin-right: auto;
}

.contact__actions {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}
</style>
