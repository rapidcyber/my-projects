<template>
  <section id="top" class="hero">
    <div class="hero__bg" aria-hidden="true">
      <span class="blob blob--one"></span>
      <span class="blob blob--two"></span>
      <span class="hero__halo"></span>
      <span class="hero__grid"></span>
      <span class="hero__beam hero__beam--a"></span>
      <span class="hero__beam hero__beam--b"></span>
      <span class="hero__beam hero__beam--c"></span>
      <svg class="hero__circuit" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <g class="hero__traces">
          <path d="M-20 130 H240 L300 190 H560" />
          <path d="M1220 210 H960 L900 270 H660 L620 310 H520" />
          <path d="M-20 640 H160 L220 580 H470 L530 640 H820" />
          <path d="M1220 700 H1020 L960 640 H760" />
          <path d="M300 190 V330 L360 390 H520" />
          <path d="M900 270 V430 L840 490 H640" />
        </g>
        <g class="hero__pulses">
          <path class="p1" d="M-20 130 H240 L300 190 H560" />
          <path class="p2" d="M1220 210 H960 L900 270 H660 L620 310 H520" />
          <path class="p3" d="M-20 640 H160 L220 580 H470 L530 640 H820" />
          <path class="p4" d="M1220 700 H1020 L960 640 H760" />
          <path class="p5" d="M300 190 V330 L360 390 H520" />
          <path class="p6" d="M900 270 V430 L840 490 H640" />
        </g>
        <g class="hero__nodes">
          <circle cx="300" cy="190" r="4" />
          <circle cx="560" cy="190" r="4" class="n2" />
          <circle cx="900" cy="270" r="4" class="n3" />
          <circle cx="220" cy="580" r="4" class="n4" />
          <circle cx="530" cy="640" r="4" class="n5" />
          <circle cx="960" cy="640" r="4" class="n6" />
        </g>
      </svg>
      <span class="hero__scanline"></span>
      <span class="hero__noise"></span>
      <span class="hero__fade"></span>
      <span class="hero__hud hero__hud--tl"></span>
      <span class="hero__hud hero__hud--tr"></span>
      <span class="hero__hud hero__hud--bl"></span>
      <span class="hero__hud hero__hud--br"></span>
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
  inset: -10%;
  background-image:
    linear-gradient(to right, var(--fx-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--fx-line) 1px, transparent 1px),
    linear-gradient(to right, var(--fx-line-strong) 1px, transparent 1px),
    linear-gradient(to bottom, var(--fx-line-strong) 1px, transparent 1px);
  background-size: 40px 40px, 40px 40px, 200px 200px, 200px 200px;
  -webkit-mask-image: radial-gradient(ellipse 75% 65% at 50% 5%, #000 35%, transparent 88%);
  mask-image: radial-gradient(ellipse 75% 65% at 50% 5%, #000 35%, transparent 88%);
  animation: hero-grid-drift 40s linear infinite;
}

/* Rotating halo ring */
.hero__halo {
  position: absolute;
  top: -42%;
  right: -14%;
  width: min(820px, 90vw);
  aspect-ratio: 1;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0 48%,
    var(--accent) 68%,
    var(--accent-2) 82%,
    transparent 92% 100%
  );
  opacity: 0.28;
  filter: blur(26px);
  -webkit-mask-image: radial-gradient(circle, transparent 54%, #000 60%, #000 76%, transparent 80%);
  mask-image: radial-gradient(circle, transparent 54%, #000 60%, #000 76%, transparent 80%);
  animation: hero-spin 34s linear infinite;
}

[data-theme='dark'] .hero__halo {
  opacity: 0.4;
}

/* Falling data beams */
.hero__beam {
  position: absolute;
  top: -35%;
  width: 1px;
  height: 45%;
  background: linear-gradient(180deg, transparent, var(--accent-2), transparent);
  opacity: 0;
  animation: hero-beam 9s linear infinite;
}

.hero__beam--a { left: 18%; animation-duration: 8s; animation-delay: -1s; }
.hero__beam--b { left: 54%; animation-duration: 11s; animation-delay: -5s; }
.hero__beam--c { left: 79%; animation-duration: 13s; animation-delay: -8s; background: linear-gradient(180deg, transparent, var(--accent), transparent); }

/* Fine grain */
.hero__noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.035;
  mix-blend-mode: overlay;
}

/* Circuit traces with traveling pulses */
.hero__circuit {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  -webkit-mask-image: radial-gradient(ellipse 85% 80% at 50% 45%, #000 20%, transparent 85%);
  mask-image: radial-gradient(ellipse 85% 80% at 50% 45%, #000 20%, transparent 85%);
}

.hero__traces path {
  fill: none;
  stroke: var(--fx-line-strong);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hero__pulses path {
  fill: none;
  stroke: var(--accent-2);
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 40 1600;
  filter: drop-shadow(0 0 6px var(--accent-2));
  animation: circuit-pulse 6s linear infinite;
}

.hero__pulses .p2 { stroke: var(--accent); filter: drop-shadow(0 0 6px var(--accent)); animation-duration: 7.5s; animation-delay: -2s; }
.hero__pulses .p3 { animation-duration: 9s; animation-delay: -4s; }
.hero__pulses .p4 { stroke: var(--accent); filter: drop-shadow(0 0 6px var(--accent)); animation-duration: 6.5s; animation-delay: -1s; }
.hero__pulses .p5 { animation-duration: 8s; animation-delay: -5.5s; }
.hero__pulses .p6 { stroke: var(--accent); filter: drop-shadow(0 0 6px var(--accent)); animation-duration: 10s; animation-delay: -3s; }

.hero__nodes circle {
  fill: var(--accent-2);
  transform-box: fill-box;
  transform-origin: center;
  animation: node-blink 3.2s ease-in-out infinite;
}

.hero__nodes .n2 { animation-delay: -0.6s; }
.hero__nodes .n3 { animation-delay: -1.2s; fill: var(--accent); }
.hero__nodes .n4 { animation-delay: -1.8s; }
.hero__nodes .n5 { animation-delay: -2.4s; fill: var(--accent); }
.hero__nodes .n6 { animation-delay: -3s; }

/* Sweeping scan line */
.hero__scanline {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-2), var(--accent), transparent);
  box-shadow: 0 0 18px 2px var(--ring);
  opacity: 0.55;
  animation: hero-sweep 7s cubic-bezier(0.45, 0, 0.55, 1) infinite;
}

/* HUD corner brackets */
.hero__hud {
  position: absolute;
  width: 26px;
  height: 26px;
  border: 1px solid var(--accent);
  opacity: 0.35;
  animation: hud-flicker 5s ease-in-out infinite;
}

.hero__hud--tl { top: 92px; left: 24px; border-right: 0; border-bottom: 0; }
.hero__hud--tr { top: 92px; right: 24px; border-left: 0; border-bottom: 0; animation-delay: -1.2s; }
.hero__hud--bl { bottom: 28px; left: 24px; border-right: 0; border-top: 0; animation-delay: -2.4s; }
.hero__hud--br { bottom: 28px; right: 24px; border-left: 0; border-top: 0; animation-delay: -3.6s; }

/* Blend into the next section */
.hero__fade {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 22%;
  background: linear-gradient(180deg, transparent, var(--bg));
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

@keyframes circuit-pulse {
  from { stroke-dashoffset: 1640; }
  to { stroke-dashoffset: 0; }
}

@keyframes node-blink {
  0%, 100% { opacity: 0.25; transform: scale(0.7); }
  50% { opacity: 1; transform: scale(1.15); }
}

@keyframes hero-sweep {
  0% { transform: translateY(0); opacity: 0; }
  8% { opacity: 0.55; }
  92% { opacity: 0.55; }
  100% { transform: translateY(92vh); opacity: 0; }
}

@keyframes hud-flicker {
  0%, 100% { opacity: 0.35; }
  45% { opacity: 0.6; }
  50% { opacity: 0.2; }
  55% { opacity: 0.55; }
}

@keyframes hero-spin {
  to { transform: rotate(360deg); }
}

@keyframes hero-grid-drift {
  from { background-position: 0 0, 0 0, 0 0, 0 0; }
  to { background-position: 40px 40px, 40px 40px, 200px 200px, 200px 200px; }
}

@keyframes hero-beam {
  0% { transform: translateY(0); opacity: 0; }
  12% { opacity: 0.55; }
  70% { opacity: 0.55; }
  100% { transform: translateY(320%); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .blob,
  .hero__halo,
  .hero__grid,
  .hero__beam,
  .hero__pulses path,
  .hero__nodes circle,
  .hero__scanline,
  .hero__hud {
    animation: none;
  }
  .hero__scanline {
    opacity: 0;
  }
  .hero__beam {
    opacity: 0.25;
  }
  .hero__scroll-arrow {
    animation: none;
  }
}
</style>
