<script setup>
import { ref } from 'vue'

const selected = ref(0)
const roles = [
  {
    number: '01', name: 'Gestiona recursos', glyph: '⌁',
    summary: 'Reparte el tiempo de CPU y la memoria entre los programas.',
    detail: 'Cuando escuchas música mientras abres un navegador, el planificador alterna tareas y el gestor de memoria reserva espacio para ambas. Ninguna aplicación debe apropiarse de todo el equipo.',
    metric: 'CPU + RAM',
  },
  {
    number: '02', name: 'Conecta mundos', glyph: '◇',
    summary: 'Hace que aplicaciones y dispositivos puedan entenderse.',
    detail: 'Un programa no necesita conocer los circuitos del SSD o de una impresora. Usa interfaces del sistema y los controladores se ocupan del lenguaje particular de cada dispositivo.',
    metric: 'SOFTWARE ↔ HARDWARE',
  },
  {
    number: '03', name: 'Protege el sistema', glyph: '▣',
    summary: 'Aísla procesos y controla el acceso a datos y hardware.',
    detail: 'Cada aplicación trabaja en un espacio de memoria protegido. Para abrir un archivo o usar un dispositivo necesita pasar por el sistema operativo y sus reglas de permisos.',
    metric: 'AISLAMIENTO + PERMISOS',
  },
]
</script>

<template>
  <section id="fundamentos" class="chapter fundamentals-section section-anchor">
    <div class="page-container">
      <div class="chapter-meta" data-reveal><span>01 / FUNDAMENTOS</span><span>EL PAPEL DEL SISTEMA OPERATIVO</span></div>
      <div class="fundamentals-heading" data-reveal>
        <p class="eyebrow">LA IDEA ESENCIAL</p>
        <h2>Una computadora no funciona sola<span class="red-period">.</span></h2>
        <p>El sistema operativo es la capa que convierte componentes físicos en una experiencia útil. Coordina trabajo, comunica piezas y protege la ejecución.</p>
      </div>

      <div class="role-grid">
        <div class="role-list" aria-label="Funciones del sistema operativo" data-reveal>
          <button
            v-for="(role, index) in roles" :key="role.number" type="button"
            class="role-item" :class="{ selected: selected === index }"
            :aria-pressed="selected === index" @click="selected = index"
          >
            <span class="role-number">{{ role.number }}</span>
            <span class="role-label"><strong>{{ role.name }}</strong><small>{{ role.summary }}</small></span>
            <span class="role-arrow" aria-hidden="true">↗</span>
          </button>
        </div>
        <div class="role-detail" data-reveal>
          <span class="role-detail-overline">FUNCIÓN / {{ roles[selected].number }}</span>
          <div class="role-detail-glyph" aria-hidden="true">{{ roles[selected].glyph }}</div>
          <div class="role-detail-copy" :key="selected">
            <span>{{ roles[selected].metric }}</span>
            <h3>{{ roles[selected].name }}</h3>
            <p>{{ roles[selected].detail }}</p>
          </div>
        </div>
      </div>
      <p class="chapter-footnote" data-reveal>Ejemplo cotidiano: videollamada + navegador + música. El SO coordina los tres sin que tengas que administrar CPU y RAM a mano.</p>
    </div>
  </section>
</template>
