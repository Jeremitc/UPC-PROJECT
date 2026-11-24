<script setup>
import { ref } from 'vue'
import { layers } from '../../../data/presentation'

const active = ref(2)
</script>

<template>
  <section id="capas" class="chapter layers-section section-anchor">
    <div class="page-container">
      <div class="chapter-meta" data-reveal><span>02 / ARQUITECTURA</span><span>DEL USUARIO AL CIRCUITO</span></div>
      <div class="split-heading" data-reveal>
        <div><p class="eyebrow">UN MAPA DE CUATRO NIVELES</p><h2>Todo ocurre<br /><em>por capas.</em></h2></div>
        <p>Cada nivel oculta complejidad al anterior. Selecciona una capa para ver qué hace dentro del sistema.</p>
      </div>

      <div class="layers-grid">
        <div class="layer-visual" data-reveal>
          <div class="layer-light" aria-hidden="true"></div>
          <div class="stack-perspective" aria-label="Diagrama interactivo de las cuatro capas">
            <button
              v-for="(layer, index) in layers" :key="layer.id" type="button"
              class="stack-layer" :class="[`stack-${layer.id}`, { active: active === index }]"
              :style="{ '--layer-y': ['-124.5px', '-41.5px', '41.5px', '124.5px'][index], '--mobile-layer-y': ['-91.5px', '-30.5px', '30.5px', '91.5px'][index] }"
              :aria-label="`Ver capa ${layer.title}`"
              :aria-pressed="active === index"
              @click="active = index"
            >
              <span class="stack-corner">0{{ index + 1 }}</span>
              <span class="stack-label">{{ layer.title }}</span>
              <span class="stack-lines" aria-hidden="true"></span>
            </button>
          </div>
          <span class="visual-caption">MODELO CONCEPTUAL · NO A ESCALA</span>
        </div>

        <div class="layer-explainer" data-reveal>
          <div class="layer-tabs">
            <button v-for="(layer, index) in layers" :key="layer.id" type="button"
              :class="{ active: active === index }" :aria-pressed="active === index" @click="active = index">
              <span>{{ layer.number }}</span>{{ layer.title }}
            </button>
          </div>
          <div class="layer-description" :key="active">
            <span class="eyebrow">CAPA {{ layers[active].number }} / 04</span>
            <h3>{{ layers[active].title }}</h3>
            <p>{{ layers[active].detail }}</p>
            <div class="layer-example"><span>EN LA PRÁCTICA</span><strong>{{ layers[active].example }}</strong></div>
          </div>
        </div>
      </div>
      <div class="insight-line" data-reveal><span>ACLARACIÓN</span><p>La GUI y la CLI son formas de interactuar; las aplicaciones piden servicios mediante API y llamadas al sistema. El usuario no accede directamente a la CPU.</p></div>
    </div>
  </section>
</template>
