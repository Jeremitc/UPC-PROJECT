<script setup>
import { computed, onUnmounted, ref } from 'vue'
import { journey } from '../../../data/presentation'

const step = ref(0)
const playing = ref(false)
let timer

const current = computed(() => journey[step.value])

function setStep(index) {
  step.value = index
}

function next() {
  step.value = (step.value + 1) % journey.length
}

function togglePlay() {
  playing.value = !playing.value
  if (playing.value) {
    next()
    timer = window.setInterval(next, 2700)
  } else {
    window.clearInterval(timer)
  }
}

onUnmounted(() => window.clearInterval(timer))
</script>

<template>
  <section id="recorrido" class="chapter journey-section section-anchor">
    <div class="page-container">
      <div class="chapter-meta" data-reveal><span>03 / FUNCIONAMIENTO</span><span>UNA ACCIÓN EN MILISEGUNDOS</span></div>
      <div class="journey-heading" data-reveal>
        <p class="eyebrow">SIGUE LA SEÑAL</p>
        <h2>¿Qué pasa cuando<br /><em>haces clic?</em></h2>
        <p>Una acción cotidiana activa una cadena de decisiones entre software y hardware. Recorre los cinco momentos.</p>
      </div>

      <div class="journey-stage" data-reveal>
        <div class="signal-panel">
          <div class="signal-top"><span>SIMULACIÓN / 001</span><span class="live-indicator"><i></i> EN VIVO</span></div>
          <div class="signal-visual" :class="`signal-step-${step}`" aria-hidden="true">
            <div class="signal-ring ring-outer"></div>
            <div class="signal-ring ring-inner"></div>
            <div class="signal-core"><span>{{ current.number }}</span></div>
            <div class="signal-horizontal"></div>
            <div class="signal-vertical"></div>
            <span class="signal-node node-one"></span><span class="signal-node node-two"></span>
            <span class="signal-node node-three"></span><span class="signal-node node-four"></span>
          </div>
          <div class="signal-bottom"><span>{{ current.signal }}</span><span>0{{ step + 1 }} / 05</span></div>
        </div>

        <div class="journey-detail" :key="step">
          <p class="eyebrow">PASO {{ current.number }} / {{ current.label }}</p>
          <h3>{{ current.title }}</h3>
          <p>{{ current.body }}</p>
          <div class="journey-controls">
            <button type="button" class="circle-button" aria-label="Paso anterior" @click="setStep((step + journey.length - 1) % journey.length)">←</button>
            <button type="button" class="circle-button" aria-label="Paso siguiente" @click="next">→</button>
            <button type="button" class="play-button" :aria-pressed="playing" @click="togglePlay">{{ playing ? 'Ⅱ PAUSAR' : '▶ REPRODUCIR' }}</button>
          </div>
        </div>
      </div>
      <div class="journey-steps" role="group" aria-label="Etapas de la orden" data-reveal>
        <button v-for="(item, index) in journey" :key="item.number" type="button"
          :class="{ active: step === index }" :aria-pressed="step === index" @click="setStep(index)">
          <span>{{ item.number }}</span><strong>{{ item.label }}</strong><i></i>
        </button>
      </div>
    </div>
  </section>
</template>
