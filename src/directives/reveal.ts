import type { Directive } from 'vue'

/**
 * v-reveal
 * Adds the `reveal` class immediately and toggles `is-visible` once the
 * element scrolls into the viewport. Pure CSS handles the actual
 * animation (see .reveal / .is-visible in style.css) so this stays cheap
 * even with many sections on the page.
 */
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
)

export const reveal: Directive<HTMLElement, number | void> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (typeof binding.value === 'number' && binding.value > 0) {
      const step = Math.min(binding.value, 4)
      el.classList.add(`reveal-delay-${step}`)
    }
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
