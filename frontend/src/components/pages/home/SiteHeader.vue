<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { sections } from '../../../data/presentation'

const menuOpen = ref(false)
const active = ref('inicio')
let observer

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (visible.length) active.value = visible[visible.length - 1].target.id
    },
    { rootMargin: '-25% 0px -55% 0px' },
  )
  sections.forEach(([id]) => {
    const section = document.getElementById(id)
    if (section) observer.observe(section)
  })
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Volver al inicio" @click="closeMenu">
      <span class="brand-upc">UPC<span class="brand-mark">/</span></span>
      <span class="brand-divider"></span>
      <span class="brand-course">ARQUITECTURA<br />DE SISTEMAS</span>
    </a>

    <nav class="desktop-nav" aria-label="Secciones de la exposición">
      <a
        v-for="([id, label]) in sections.slice(1, 8)"
        :key="id"
        :href="`#${id}`"
        :class="{ active: active === id }"
      >{{ label }}</a>
    </nav>

    <a class="header-cta" href="#cierre"><span class="cta-dot"></span> VER CONCLUSIONES <span aria-hidden="true">↗</span></a>
    <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="mobile-nav" @click="menuOpen = !menuOpen">
      <span>{{ menuOpen ? 'CERRAR' : 'MENÚ' }}</span>
      <span class="menu-icon" aria-hidden="true">{{ menuOpen ? '×' : '☰' }}</span>
    </button>
  </header>

  <nav v-if="menuOpen" id="mobile-nav" class="mobile-nav" aria-label="Secciones de la exposición">
    <a v-for="([id, label], index) in sections" :key="id" :href="`#${id}`" @click="closeMenu">
      <span>{{ String(index).padStart(2, '0') }}</span>{{ label }}<span aria-hidden="true">↗</span>
    </a>
  </nav>
</template>
