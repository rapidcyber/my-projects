<template>
  <section id="top" class="hero">
    <div class="hero__bg" aria-hidden="true">
      <span class="blob blob--one"></span>
      <span class="blob blob--two"></span>
      <span class="hero__grid"></span>
    </div>

    <div class="container hero__inner">
      <p class="eyebrow animate-fade-up">Available for select projects</p>

      <h1 class="hero__title animate-fade-up" style="animation-delay:.08s">
        Hi, I'm <span class="hero__gradient-text">Jun Barcellano</span>.
      </h1>

      <p class="hero__role animate-fade-up" style="animation-delay:.16s">
        <span>{{ text }}</span><span class="hero__caret" aria-hidden="true">|</span>
      </p>

      <p class="hero__lead animate-fade-up" style="animation-delay:.24s">
        I design and ship full-stack products end to end — from payroll systems and
        point-of-sale platforms to ride-hailing apps — across web, mobile, and cloud
        infrastructure.
      </p>

      <div class="hero__actions animate-fade-up" style="animation-delay:.32s">
        <a href="#work" class="btn btn-primary">View my work</a>
        <a href="#contact" class="btn btn-ghost">Get in touch</a>
        <a href="resume.html" target="_blank" rel="noopener" class="btn btn-ghost">View resume</a>
      </div>

      <a href="#about" class="hero__scroll">
        <span class="hero__scroll-label">Scroll</span>
        <svg class="hero__scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 4v15" />
          <path d="M5 13l7 7 7-7" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTypewriter } from '../composables/useTypewriter'


const { text } = useTypewriter([
  'Full-Stack Engineer',
  'Product Builder',
  'Systems Architect',
])
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, var(--border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--border) 1px, transparent 1px);
  background-size: 64px 64px;
  opacity: 0.35;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.55;
  animation: blob-float 16s ease-in-out infinite;
}

.blob--one {
  width: 420px;
  height: 420px;
  top: -120px;
  right: -80px;
  background: radial-gradient(circle at 30% 30%, var(--accent), transparent 70%);
}

.blob--two {
  width: 360px;
  height: 360px;
  bottom: -140px;
  left: -100px;
  background: radial-gradient(circle at 60% 40%, var(--accent-2), transparent 70%);
  animation-delay: -8s;
}

.hero__inner {
  position: relative;
  z-index: 1;
  padding-top: 96px;
  padding-bottom: 64px;
}

.hero__title {
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  font-weight: 700;
  line-height: 1.08;
  max-width: 16ch;
}

.hero__gradient-text {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__role {
  margin-top: 20px;
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2.4vw, 1.5rem);
  font-weight: 600;
  color: var(--accent);
  min-height: 1.6em;
}

.hero__caret {
  animation: caret-blink 1s step-end infinite;
  margin-left: 2px;
}

.hero__lead {
  margin-top: 22px;
  max-width: 560px;
  font-size: 1.08rem;
  color: var(--text-muted);
}

.hero__actions {
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.hero__scroll {
  margin-top: 72px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  transition: color 0.25s ease;
}

.hero__scroll:hover {
  color: var(--accent);
}

.hero__scroll-label {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.hero__scroll-arrow {
  width: 22px;
  height: 22px;
  animation: scroll-bounce 1.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
}

.hero__scroll:hover .hero__scroll-arrow {
  filter: drop-shadow(0 0 8px var(--ring));
}

@keyframes scroll-bounce {
  0%, 100% { transform: translateY(0); opacity: 0.75; }
  50% { transform: translateY(8px); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .blob {
    animation: none;
  }
  .hero__scroll-arrow {
    animation: none;
  }
}
</style>
