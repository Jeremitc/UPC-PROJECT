<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const scene = ref(null)
let frame = 0
let mx = 0
let my = 0
let cx = 0
let cy = 0

function move(event) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  mx = (event.clientX / window.innerWidth - 0.5) * 24
  my = (event.clientY / window.innerHeight - 0.5) * 18
}

function animate() {
  cx += (mx - cx) * 0.065
  cy += (my - cy) * 0.065
  if (scene.value) {
    scene.value.style.setProperty('--mouse-x', `${cx}px`)
    scene.value.style.setProperty('--mouse-y', `${cy}px`)
  }
  frame = requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('pointermove', move, { passive: true })
  animate()
})

onUnmounted(() => {
  window.removeEventListener('pointermove', move)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <section id="inicio" class="hero-section section-anchor">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-image-wrap" ref="scene" aria-hidden="true">
      <div class="hero-image"></div>
      <div class="hero-image-glow"></div>
      <div class="hero-orbit orbit-one"></div>
      <div class="hero-orbit orbit-two"></div>
      <span class="hero-float float-a">CPU / RAM / I·O</span>
      <span class="hero-float float-b">KERNEL 01</span>
    </div>

    <div class="hero-content page-container">
      <div class="eyebrow hero-eyebrow"><span class="red-line"></span> UPC · SEMANA 04 / 1FIS0277</div>
      <h1>El sistema<br /><em>invisible</em><br />que mueve<br />todo<span class="red-period">.</span></h1>
      <p class="hero-description">Arquitectura de sistemas operativos. Desde lo que ocurre detrás de un clic hasta los ecosistemas que usamos todos los días.</p>
      <div class="hero-actions">
        <a class="primary-button" href="#fundamentos">INICIAR EXPLORACIÓN <span aria-hidden="true">↘</span></a>
        <span class="hero-duration">UNA EXPOSICIÓN INTERACTIVA<br />DESLIZA PARA DESCUBRIR</span>
      </div>
    </div>

    <div class="hero-bottom page-container">
      <span>01 / 09</span>
      <span class="scroll-cue"><span class="scroll-line"></span> SCROLL PARA EXPLORAR</span>
      <span>FUNDAMENTOS → EVOLUCIÓN</span>
    </div>
  </section>
</template>
