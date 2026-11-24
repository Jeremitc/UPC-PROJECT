<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import HeroChapter from '../components/pages/home/HeroChapter.vue'
import FundamentalsChapter from '../components/pages/home/FundamentalsChapter.vue'
import LayersChapter from '../components/pages/home/LayersChapter.vue'
import JourneyChapter from '../components/pages/home/JourneyChapter.vue'
import KernelChapter from '../components/pages/home/KernelChapter.vue'
import HistoryChapter from '../components/pages/home/HistoryChapter.vue'
import SystemsChapter from '../components/pages/home/SystemsChapter.vue'
import CompareChapter from '../components/pages/home/CompareChapter.vue'
import ClosingChapter from '../components/pages/home/ClosingChapter.vue'

const scrollProgress = ref(0)
let animationFrame = 0
let observer
let wheelFrame = 0
let targetY = 0
let currentY = 0
let previousTime = 0
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const finePointer = window.matchMedia('(pointer: fine)')

function scrollLimit() {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
}

function easeScroll(time) {
  const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16
  previousTime = time
  const easing = 1 - Math.exp(-elapsed / 135)
  currentY += (targetY - currentY) * easing
  if (Math.abs(targetY - currentY) < 0.4) {
    currentY = targetY
    wheelFrame = 0
    previousTime = 0
  } else {
    wheelFrame = requestAnimationFrame(easeScroll)
  }
  window.scrollTo({ top: currentY, behavior: 'instant' })
}

function animateTo(destination) {
  targetY = Math.max(0, Math.min(scrollLimit(), destination))
  if (prefersReducedMotion.matches) {
    window.scrollTo({ top: targetY, behavior: 'instant' })
    return
  }
  if (!wheelFrame) {
    currentY = window.scrollY
    previousTime = 0
    wheelFrame = requestAnimationFrame(easeScroll)
  }
}

function onWheel(event) {
  if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
      (event.target instanceof Element && event.target.closest('.systems-tabs, .comparison-scroll, .journey-steps, .mobile-nav'))) return
  event.preventDefault()
  const unit = event.deltaMode === 1 ? 20 : event.deltaMode === 2 ? window.innerHeight : 1
  animateTo((wheelFrame ? targetY : window.scrollY) + event.deltaY * unit)
}

function onAnchorClick(event) {
  const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null
  if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  const id = link.getAttribute('href')?.slice(1)
  const element = id ? document.getElementById(id) : null
  if (!element) return
  event.preventDefault()
  const offset = id === 'inicio' ? 0 : window.innerWidth <= 700 ? 66 : 78
  animateTo(element.getBoundingClientRect().top + window.scrollY - offset)
  window.history.replaceState(null, '', `#${id}`)
  if (id === 'contenido') element.focus({ preventScroll: true })
}

function cancelWheelAnimation() {
  cancelAnimationFrame(wheelFrame)
  wheelFrame = 0
  previousTime = 0
  currentY = targetY = window.scrollY
}

function onKeydown(event) {
  if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
    cancelWheelAnimation()
  }
}

function updateScroll() {
  cancelAnimationFrame(animationFrame)
  animationFrame = requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = max > 0 ? (window.scrollY / max) * 100 : 0
    document.documentElement.style.setProperty('--scroll-parallax', `${Math.min(window.scrollY * .16, 160)}px`)
    const history = document.getElementById('historia')
    if (history) {
      const offset = Math.max(-90, Math.min(90, -history.getBoundingClientRect().top * .07))
      history.style.setProperty('--history-parallax', `${offset}px`)
    }
  })
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
  window.addEventListener('resize', updateScroll, { passive: true })
  document.addEventListener('click', onAnchorClick)
  if (finePointer.matches && !prefersReducedMotion.matches) {
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeydown)
    window.addEventListener('pointerdown', cancelWheelAnimation, { passive: true })
  }
  observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    }),
    { threshold: 0.08, rootMargin: '0px 0px -35px 0px' },
  )
  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  window.removeEventListener('resize', updateScroll)
  document.removeEventListener('click', onAnchorClick)
  window.removeEventListener('wheel', onWheel)
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('pointerdown', cancelWheelAnimation)
  cancelAnimationFrame(animationFrame)
  cancelWheelAnimation()
  observer?.disconnect()
})
</script>

<template>
  <div class="presentation">
    <div class="progress-track" aria-hidden="true">
      <div class="progress-fill" :style="{ width: `${scrollProgress}%` }"></div>
    </div>
    <HeroChapter />
    <FundamentalsChapter />
    <LayersChapter />
    <JourneyChapter />
    <KernelChapter />
    <HistoryChapter />
    <SystemsChapter />
    <CompareChapter />
    <ClosingChapter />
  </div>
</template>
