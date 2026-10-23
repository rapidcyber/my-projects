<template>
  <svg
    class="illustration"
    viewBox="0 0 400 200"
    preserveAspectRatio="xMidYMid slice"
    role="img"
    :aria-label="label"
  >
    <defs>
      <clipPath id="jug-clip">
        <path d="M168 82c0-8 6-12 14-12h36c8 0 14 4 14 12v78c0 8-6 12-14 12h-36c-8 0-14-4-14-12z" />
      </clipPath>
      <linearGradient id="tv-screen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fb7185" />
        <stop offset="1" stop-color="#8b5cf6" />
      </linearGradient>
    </defs>

    <!-- soft background shapes shared by every scene -->
    <circle cx="48" cy="36" r="64" fill="#fff" opacity="0.08" />
    <circle cx="364" cy="176" r="84" fill="#fff" opacity="0.08" />

    <!-- HRMS & Payroll: employee dashboard with payroll bars -->
    <g v-if="name === 'hrms'">
      <rect x="104" y="34" width="192" height="132" rx="14" fill="#fff" />
      <circle cx="132" cy="66" r="14" fill="#c7d2fe" />
      <circle cx="132" cy="62" r="5" fill="#6366f1" />
      <path d="M122 76c1-6 6-8 10-8s9 2 10 8z" fill="#6366f1" />
      <rect x="156" y="56" width="84" height="8" rx="4" fill="#c7d2fe" />
      <rect x="156" y="71" width="56" height="6" rx="3" fill="#e0e7ff" />
      <rect x="252" y="55" width="30" height="16" rx="8" fill="#bbf7d0" />
      <rect x="258" y="61" width="18" height="4" rx="2" fill="#16a34a" />
      <line x1="120" y1="92" x2="280" y2="92" stroke="#e5e7eb" />
      <rect x="124" y="128" width="16" height="26" rx="4" fill="#c7d2fe" />
      <rect x="150" y="116" width="16" height="38" rx="4" fill="#a5b4fc" />
      <rect x="176" y="106" width="16" height="48" rx="4" fill="#818cf8" />
      <rect x="202" y="120" width="16" height="34" rx="4" fill="#6366f1" />
      <rect x="228" y="100" width="16" height="54" rx="4" fill="#4f46e5" />
      <rect x="256" y="104" width="24" height="6" rx="3" fill="#e5e7eb" />
      <rect x="256" y="118" width="24" height="6" rx="3" fill="#e5e7eb" />
      <rect x="256" y="132" width="16" height="6" rx="3" fill="#e5e7eb" />

      <circle cx="312" cy="58" r="22" fill="#fde68a" />
      <circle cx="312" cy="58" r="16" fill="none" stroke="#f59e0b" stroke-width="2" />
      <text x="312" y="66" text-anchor="middle" font-size="22" font-weight="700" fill="#d97706" font-family="Arial, sans-serif">$</text>

      <g transform="translate(62 102)">
        <circle r="20" fill="#fff" opacity="0.95" />
        <circle cy="-5" r="6" fill="#818cf8" />
        <path d="M-11 11c1-7 6-9 11-9s10 2 11 9z" fill="#818cf8" />
      </g>
      <g transform="translate(84 146)">
        <circle r="18" fill="#fff" opacity="0.85" />
        <circle cy="-5" r="5.5" fill="#22d3ee" />
        <path d="M-10 10c1-6 5-8 10-8s9 2 10 8z" fill="#22d3ee" />
      </g>

      <circle cx="302" cy="150" r="16" fill="#22c55e" />
      <path d="M294 150l6 6 11-12" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    </g>

    <!-- Expenses: receipts, approval stamp and a pie chart -->
    <g v-else-if="name === 'expenses'">
      <g transform="rotate(-8 148 100)">
        <rect x="112" y="36" width="72" height="124" rx="4" fill="#fff" opacity="0.88" />
        <polygon points="112,160 112,166 124,172 136,166 148,172 160,166 172,172 184,166 184,160" fill="#fff" opacity="0.88" />
        <rect x="124" y="50" width="40" height="7" rx="3.5" fill="#fdba74" />
        <rect x="124" y="68" width="48" height="5" rx="2.5" fill="#e5e7eb" />
        <rect x="124" y="80" width="38" height="5" rx="2.5" fill="#e5e7eb" />
        <rect x="124" y="92" width="44" height="5" rx="2.5" fill="#e5e7eb" />
        <rect x="124" y="112" width="48" height="8" rx="4" fill="#f97316" opacity="0.7" />
      </g>
      <g transform="rotate(7 250 100)">
        <rect x="214" y="40" width="72" height="124" rx="4" fill="#fff" />
        <polygon points="214,164 214,170 226,176 238,170 250,176 262,170 274,176 286,170 286,164" fill="#fff" />
        <rect x="226" y="54" width="36" height="7" rx="3.5" fill="#fb7185" />
        <rect x="226" y="72" width="48" height="5" rx="2.5" fill="#e5e7eb" />
        <rect x="226" y="84" width="40" height="5" rx="2.5" fill="#e5e7eb" />
        <rect x="226" y="96" width="46" height="5" rx="2.5" fill="#e5e7eb" />
        <rect x="226" y="116" width="48" height="8" rx="4" fill="#f43f5e" opacity="0.7" />
      </g>
      <circle cx="288" cy="150" r="18" fill="#22c55e" />
      <path d="M279 150l7 7 12-14" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />

      <circle cx="62" cy="62" r="24" fill="#fff" opacity="0.28" />
      <path d="M62 62V38a24 24 0 0 1 22 34z" fill="#fde68a" />
      <circle cx="334" cy="52" r="6" fill="#fde68a" />
      <circle cx="350" cy="68" r="4" fill="#fff" opacity="0.7" />
    </g>

    <!-- Restaurant POS: order terminal, fork & knife and a plate -->
    <g v-else-if="name === 'restaurant'">
      <rect x="104" y="30" width="176" height="118" rx="12" fill="#1f2937" />
      <rect x="112" y="38" width="160" height="102" rx="6" fill="#fff" />
      <circle cx="126" cy="58" r="5" fill="#fca5a5" />
      <rect x="138" y="54" width="62" height="7" rx="3.5" fill="#e5e7eb" />
      <rect x="236" y="54" width="26" height="7" rx="3.5" fill="#d1d5db" />
      <circle cx="126" cy="76" r="5" fill="#fcd34d" />
      <rect x="138" y="72" width="52" height="7" rx="3.5" fill="#e5e7eb" />
      <rect x="236" y="72" width="26" height="7" rx="3.5" fill="#d1d5db" />
      <circle cx="126" cy="94" r="5" fill="#86efac" />
      <rect x="138" y="90" width="68" height="7" rx="3.5" fill="#e5e7eb" />
      <rect x="236" y="90" width="26" height="7" rx="3.5" fill="#d1d5db" />
      <line x1="124" y1="108" x2="262" y2="108" stroke="#e5e7eb" />
      <rect x="126" y="116" width="44" height="8" rx="4" fill="#9ca3af" />
      <rect x="206" y="112" width="56" height="20" rx="10" fill="#ef4444" />
      <rect x="220" y="120" width="28" height="4" rx="2" fill="#fff" />
      <path d="M174 148h36l6 22h-48z" fill="#374151" />
      <rect x="156" y="168" width="72" height="8" rx="4" fill="#4b5563" />

      <g stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none">
        <path d="M52 40v28M60 40v28M68 40v28M52 68c0 8 16 8 16 0M60 76v62" />
        <path d="M86 40c9 10 9 36 0 46v52" />
      </g>

      <g transform="translate(336 130)">
        <circle r="32" fill="#fff" />
        <circle r="22" fill="none" stroke="#fecaca" stroke-width="2" />
        <circle cx="-6" cy="2" r="7" fill="#f97316" />
        <circle cx="7" cy="-3" r="6" fill="#84cc16" />
        <circle cx="5" cy="9" r="5" fill="#fbbf24" />
        <path d="M-8 -38c-6-8 6-12 0-20M6 -38c-6-8 6-12 0-20" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.7" />
      </g>
    </g>

    <!-- Water Refilling Station: jug being refilled, droplets and a mini POS -->
    <g v-else-if="name === 'water'">
      <rect x="196" y="20" width="164" height="14" rx="7" fill="#fff" opacity="0.92" />
      <rect x="193" y="20" width="14" height="26" rx="5" fill="#fff" />
      <path d="M200 48c-3 4-5 6-5 9a5 5 0 0 0 10 0c0-3-2-5-5-9z" fill="#e0f2fe" />
      <rect x="186" y="58" width="28" height="16" rx="4" fill="#e0f2fe" />
      <path d="M168 82c0-8 6-12 14-12h36c8 0 14 4 14 12v78c0 8-6 12-14 12h-36c-8 0-14-4-14-12z" fill="#fff" opacity="0.92" />
      <g clip-path="url(#jug-clip)">
        <rect x="160" y="112" width="80" height="70" fill="#38bdf8" />
        <path d="M160 112q10-8 20 0t20 0 20 0 20 0v6h-80z" fill="#7dd3fc" />
        <rect x="176" y="124" width="6" height="36" rx="3" fill="#fff" opacity="0.5" />
      </g>
      <path d="M168 98c-14 0-14 32 0 32" stroke="#fff" stroke-width="6" fill="none" opacity="0.9" stroke-linecap="round" />

      <g fill="#fff">
        <path transform="translate(78 62) scale(1.1)" opacity="0.9" d="M0 -12c-7 9-11 14-11 19a11 11 0 0 0 22 0c0-5-4-10-11-19z" />
        <path transform="translate(58 126) scale(0.7)" opacity="0.7" d="M0 -12c-7 9-11 14-11 19a11 11 0 0 0 22 0c0-5-4-10-11-19z" />
        <path transform="translate(120 140) scale(0.9)" opacity="0.8" d="M0 -12c-7 9-11 14-11 19a11 11 0 0 0 22 0c0-5-4-10-11-19z" />
      </g>

      <rect x="284" y="84" width="80" height="58" rx="8" fill="#fff" opacity="0.95" />
      <rect x="294" y="94" width="40" height="6" rx="3" fill="#bae6fd" />
      <rect x="294" y="106" width="56" height="5" rx="2.5" fill="#e5e7eb" />
      <rect x="294" y="116" width="48" height="5" rx="2.5" fill="#e5e7eb" />
      <rect x="294" y="127" width="30" height="9" rx="4.5" fill="#0ea5e9" />

      <path d="M0 178q25-10 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0v22H0z" fill="#fff" opacity="0.18" />
    </g>

    <!-- Jayride: ride-hailing car on a route between two pins -->
    <g v-else-if="name === 'jayride'">
      <g fill="#fff" opacity="0.14">
        <rect x="36" y="108" width="28" height="48" />
        <rect x="68" y="90" width="32" height="66" />
        <rect x="104" y="116" width="24" height="40" />
        <rect x="300" y="100" width="30" height="56" />
        <rect x="334" y="86" width="34" height="70" />
      </g>
      <path d="M80 74C140 14 260 14 320 78" stroke="#fff" stroke-width="3" stroke-dasharray="6 9" fill="none" stroke-linecap="round" />
      <g transform="translate(70 70)">
        <path d="M0 -22c-10 0-16 7-16 15 0 11 16 27 16 27s16-16 16-27c0-8-6-15-16-15z" fill="#fff" />
        <circle cy="-7" r="6" fill="#6366f1" />
      </g>
      <g transform="translate(330 76)">
        <path d="M0 -22c-10 0-16 7-16 15 0 11 16 27 16 27s16-16 16-27c0-8-6-15-16-15z" fill="#fb7185" />
        <circle cy="-7" r="6" fill="#fff" />
      </g>

      <rect x="0" y="152" width="400" height="48" fill="#1e1b4b" opacity="0.5" />
      <path d="M0 178h400" stroke="#fff" stroke-width="3" stroke-dasharray="18 14" opacity="0.7" />

      <path d="M118 150v-18c0-5 3-8 8-9l30-6 20-22c2-3 5-4 9-4h50c4 0 7 1 9 4l18 22 30 7c5 1 8 4 8 9v17z" fill="#fff" />
      <path d="M182 117l14-18h38l16 18z" fill="#bae6fd" />
      <rect x="214" y="99" width="4" height="18" fill="#fff" />
      <rect x="200" y="84" width="24" height="8" rx="3" fill="#fde047" />
      <circle cx="296" cy="135" r="4" fill="#fde047" />
      <path d="M300 130l36-8v26l-36-8z" fill="#fde047" opacity="0.25" />
      <circle cx="156" cy="152" r="15" fill="#1f2937" />
      <circle cx="156" cy="152" r="6" fill="#9ca3af" />
      <circle cx="262" cy="152" r="15" fill="#1f2937" />
      <circle cx="262" cy="152" r="6" fill="#9ca3af" />
    </g>

    <!-- Smudge TV: a retro TV with a play button -->
    <g v-else-if="name === 'smudge'">
      <path d="M170 56l-26-34M230 56l26-34" stroke="#fff" stroke-width="4" stroke-linecap="round" />
      <circle cx="144" cy="22" r="5" fill="#fde047" />
      <circle cx="256" cy="22" r="5" fill="#fde047" />
      <rect x="96" y="56" width="208" height="112" rx="20" fill="#fff" />
      <rect x="110" y="68" width="136" height="88" rx="12" fill="url(#tv-screen)" />
      <circle cx="178" cy="112" r="26" fill="#fff" opacity="0.25" />
      <path d="M168 96l30 16-30 16z" fill="#fff" />
      <circle cx="276" cy="92" r="11" fill="#e5e7eb" />
      <circle cx="276" cy="92" r="4" fill="#9ca3af" />
      <circle cx="276" cy="124" r="11" fill="#e5e7eb" />
      <circle cx="276" cy="124" r="4" fill="#9ca3af" />
      <rect x="264" y="142" width="24" height="3" rx="1.5" fill="#d1d5db" />
      <rect x="264" y="149" width="24" height="3" rx="1.5" fill="#d1d5db" />
      <path d="M130 168l-8 14M270 168l8 14" stroke="#fff" stroke-width="6" stroke-linecap="round" />

      <g fill="#fde047">
        <path transform="translate(58 62) scale(1.4)" d="M0 -10l2.5 7.5L10 0l-7.5 2.5L0 10l-2.5-7.5L-10 0l7.5-2.5z" />
        <path transform="translate(342 54) scale(1)" d="M0 -10l2.5 7.5L10 0l-7.5 2.5L0 10l-2.5-7.5L-10 0l7.5-2.5z" />
        <path transform="translate(346 142) scale(1.3)" d="M0 -10l2.5 7.5L10 0l-7.5 2.5L0 10l-2.5-7.5L-10 0l7.5-2.5z" />
        <path transform="translate(54 150) scale(0.9)" d="M0 -10l2.5 7.5L10 0l-7.5 2.5L0 10l-2.5-7.5L-10 0l7.5-2.5z" />
      </g>
    </g>

    <!-- Vestinit Ventures: growth chart, skyline and coins -->
    <g v-else-if="name === 'vestinit'">
      <g fill="#fff" opacity="0.14">
        <rect x="30" y="112" width="28" height="58" />
        <rect x="62" y="92" width="30" height="78" />
        <rect x="318" y="96" width="30" height="74" />
        <rect x="352" y="120" width="26" height="50" />
      </g>
      <line x1="76" y1="170" x2="306" y2="170" stroke="#fff" stroke-width="3" opacity="0.5" stroke-linecap="round" />
      <rect x="90" y="140" width="28" height="30" rx="5" fill="#fff" opacity="0.92" />
      <rect x="130" y="124" width="28" height="46" rx="5" fill="#fff" opacity="0.92" />
      <rect x="170" y="106" width="28" height="64" rx="5" fill="#fff" opacity="0.92" />
      <rect x="210" y="86" width="28" height="84" rx="5" fill="#fff" opacity="0.92" />
      <rect x="250" y="62" width="28" height="108" rx="5" fill="#bbf7d0" />
      <polyline points="84,128 140,108 190,92 236,66 292,36" stroke="#fde047" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M280 32h14v14" stroke="#fde047" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" />

      <g>
        <rect x="318" y="148" width="44" height="8" fill="#f59e0b" />
        <ellipse cx="340" cy="156" rx="22" ry="8" fill="#f59e0b" />
        <ellipse cx="340" cy="148" rx="22" ry="8" fill="#fde047" />
        <rect x="318" y="139" width="44" height="8" fill="#f59e0b" />
        <ellipse cx="340" cy="147" rx="22" ry="8" fill="#f59e0b" />
        <ellipse cx="340" cy="139" rx="22" ry="8" fill="#fde047" />
      </g>
    </g>

    <!-- Republisys: a website in a browser window and a globe -->
    <g v-else-if="name === 'republisys'">
      <rect x="80" y="30" width="200" height="140" rx="12" fill="#fff" />
      <path d="M80 42a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12v10H80z" fill="#e2e8f0" />
      <circle cx="96" cy="41" r="3" fill="#f87171" />
      <circle cx="108" cy="41" r="3" fill="#fbbf24" />
      <circle cx="120" cy="41" r="3" fill="#4ade80" />
      <rect x="136" y="36" width="120" height="10" rx="5" fill="#fff" />
      <rect x="94" y="64" width="172" height="40" rx="6" fill="#334155" />
      <rect x="106" y="74" width="72" height="8" rx="4" fill="#fff" />
      <rect x="106" y="88" width="48" height="6" rx="3" fill="#94a3b8" />
      <rect x="214" y="78" width="40" height="16" rx="8" fill="#38bdf8" />
      <rect x="94" y="114" width="52" height="44" rx="6" fill="#e2e8f0" />
      <rect x="154" y="114" width="52" height="44" rx="6" fill="#e2e8f0" />
      <rect x="214" y="114" width="52" height="44" rx="6" fill="#e2e8f0" />
      <rect x="102" y="122" width="24" height="5" rx="2.5" fill="#94a3b8" />
      <rect x="162" y="122" width="24" height="5" rx="2.5" fill="#94a3b8" />
      <rect x="222" y="122" width="24" height="5" rx="2.5" fill="#94a3b8" />

      <circle cx="334" cy="100" r="42" fill="#fff" opacity="0.14" />
      <g fill="none" stroke="#fff" stroke-width="2.5" opacity="0.9">
        <circle cx="334" cy="100" r="42" />
        <ellipse cx="334" cy="100" rx="18" ry="42" />
        <path d="M292 100h84M300 78h68M300 122h68" />
      </g>
      <path d="M236 128l0 26 7-7 5 12 5-2-5-12 10 0z" fill="#fff" stroke="#334155" stroke-width="2" stroke-linejoin="round" />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IllustrationName } from '../../data/projects'

const props = defineProps<{
  name: IllustrationName
}>()

const labels: Record<IllustrationName, string> = {
  hrms: 'Illustration of an employee dashboard with payroll charts',
  expenses: 'Illustration of expense receipts with an approval check',
  restaurant: 'Illustration of a restaurant point-of-sale terminal and a plate',
  water: 'Illustration of a water jug being refilled',
  jayride: 'Illustration of a ride-hailing car travelling between two map pins',
  smudge: 'Illustration of a retro television showing a play button',
  vestinit: 'Illustration of a growth chart with a skyline and coins',
  republisys: 'Illustration of a website in a browser window next to a globe',
}

const label = computed(() => labels[props.name])
</script>

<style scoped>
.illustration {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
