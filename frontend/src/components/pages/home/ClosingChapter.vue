<script setup>
import { ref } from 'vue'
import { sources } from '../../../data/presentation'

const openQuestion = ref(-1)
const questions = [
  { question: '¿El kernel y el shell son lo mismo?', answer: 'No. El shell ofrece una forma de interactuar con el sistema; el kernel coordina recursos y operaciones privilegiadas.' },
  { question: '¿Linux es una versión directa de Unix?', answer: 'No. Linux fue desarrollado de forma independiente, inspirado por conceptos Unix. Una distribución reúne el kernel y herramientas de usuario.' },
  { question: '¿Qué pasa entre un clic y la respuesta?', answer: 'La aplicación procesa el evento, pide servicios al sistema, el kernel organiza la operación y el hardware devuelve el resultado.' },
]
</script>

<template>
  <section id="cierre" class="chapter closing-section section-anchor">
    <div class="page-container">
      <div class="chapter-meta" data-reveal><span>08 / CIERRE</span><span>IDEAS QUE DEBEN QUEDAR</span></div>
      <div class="closing-lead" data-reveal>
        <p class="eyebrow">EN UNA FRASE</p>
        <h2>El sistema operativo<br />convierte <em>hardware</em><br />en posibilidades<span class="red-period">.</span></h2>
      </div>
      <div class="takeaways" data-reveal>
        <div><span>01</span><p>El SO administra recursos y crea una capa segura para las aplicaciones.</p></div>
        <div><span>02</span><p>Shell, kernel y hardware cumplen papeles distintos en cada acción.</p></div>
        <div><span>03</span><p>Cada plataforma equilibra compatibilidad, control, integración y variedad.</p></div>
      </div>

      <div class="closing-questions" data-reveal>
        <div class="closing-questions-heading"><p class="eyebrow">PREGUNTAS PARA EL PÚBLICO</p><h3>Compruébalo tú mismo.</h3></div>
        <div>
          <div v-for="(item, index) in questions" :key="item.question" class="question-row">
            <button type="button" :aria-expanded="openQuestion === index" @click="openQuestion = openQuestion === index ? -1 : index">
              <span>0{{ index + 1 }}</span><strong>{{ item.question }}</strong><span class="question-plus">{{ openQuestion === index ? '−' : '+' }}</span>
            </button>
            <p v-if="openQuestion === index" class="question-answer">{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <div class="closing-footer">
        <div class="footer-heading">
          <span class="brand-upc">UPC<span class="brand-mark">/</span></span>
          <p>Arquitectura de Computadoras y Sistemas Operativos<br />1FIS0277 · Semana 4 · EPE</p>
        </div>
        <div class="footer-team">
          <span>INTEGRANTES</span>
          <p>Jorge Neal Zari Hidalgo<br />Jaira Tamara Ortega Solano<br />Jeremi Matias Toscano Cardenas<br />Ruben David Quiñones Vizcaya</p>
        </div>
        <div class="footer-sources">
          <span>FUENTES Y LECTURAS</span>
          <a v-for="source in sources.filter((item) => item.url)" :key="source.label" :href="source.url" target="_blank" rel="noopener noreferrer">{{ source.label }} ↗</a>
          <small>Basado en el material de clase. Visuales conceptuales creados para la exposición.</small>
        </div>
      </div>
      <div class="footer-bottom"><span>UPC · EXPOSICIÓN INTERACTIVA</span><a href="#inicio">VOLVER ARRIBA ↑</a></div>
    </div>
  </section>
</template>
