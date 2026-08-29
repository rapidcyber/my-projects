import { onBeforeUnmount, onMounted, ref } from 'vue'

interface TypewriterOptions {
  typeSpeed?: number
  deleteSpeed?: number
  pauseAfterType?: number
  pauseAfterDelete?: number
}

/**
 * Cycles through a list of words with a type/delete effect.
 * Respects prefers-reduced-motion by freezing on the first word.
 */
export function useTypewriter(words: string[], options: TypewriterOptions = {}) {
  const { typeSpeed = 70, deleteSpeed = 40, pauseAfterType = 1600, pauseAfterDelete = 300 } = options

  const text = ref('')
  let wordIndex = 0
  let charIndex = 0
  let deleting = false
  let timer: ReturnType<typeof setTimeout> | undefined

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function tick() {
    if (!words.length) return
    const current = words[wordIndex % words.length]

    if (!deleting) {
      charIndex++
      text.value = current.slice(0, charIndex)
      if (charIndex === current.length) {
        deleting = true
        timer = setTimeout(tick, pauseAfterType)
        return
      }
      timer = setTimeout(tick, typeSpeed)
    } else {
      charIndex--
      text.value = current.slice(0, charIndex)
      if (charIndex === 0) {
        deleting = false
        wordIndex++
        timer = setTimeout(tick, pauseAfterDelete)
        return
      }
      timer = setTimeout(tick, deleteSpeed)
    }
  }

  onMounted(() => {
    if (prefersReducedMotion()) {
      text.value = words[0] ?? ''
      return
    }
    timer = setTimeout(tick, typeSpeed)
  })

  onBeforeUnmount(() => {
    if (timer) clearTimeout(timer)
  })

  return { text }
}
