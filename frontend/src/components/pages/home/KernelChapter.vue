<script setup>
import { computed, ref } from 'vue'
import { kernels } from '../../../data/presentation'

const selected = ref('mono')
const current = computed(() => kernels.find((item) => item.id === selected.value))
</script>

<template>
  <section id="nucleos" class="chapter kernel-section section-anchor">
    <div class="page-container">
      <div class="chapter-meta" data-reveal><span>04 / EL CORAZÓN DEL SO</span><span>TRES FORMAS DE DISEÑAR UN NÚCLEO</span></div>
      <div class="split-heading" data-reveal>
        <div><p class="eyebrow">MODO PRIVILEGIADO</p><h2>El kernel<br /><em>toma el control.</em></h2></div>
        <p>Administra recursos y protege el acceso al hardware. Su arquitectura define qué funciones quedan dentro del núcleo y cuáles viven separadas.</p>
      </div>
      <div class="kernel-options" role="tablist" aria-label="Tipos de kernel" data-reveal>
        <button v-for="item in kernels" :key="item.id" type="button" role="tab" :id="`tab-${item.id}`"
          :aria-selected="selected === item.id" :aria-controls="`panel-${item.id}`"
          :class="{ active: selected === item.id }" @click="selected = item.id">
          <span>{{ item.number }} / TIPO</span><strong>{{ item.name }}</strong><small>{{ item.short }}</small>
        </button>
      </div>
      <div class="kernel-display" :id="`panel-${current.id}`" role="tabpanel" :aria-labelledby="`tab-${current.id}`" data-reveal>
        <div class="kernel-diagram" :class="`diagram-${current.id}`" aria-hidden="true">
          <div class="diagram-processes"><span>APP 01</span><span>APP 02</span><span>APP 03</span></div>
          <div class="diagram-transfer"><span>LLAMADAS AL SISTEMA</span></div>
          <div class="diagram-boundary">
            <span class="diagram-caption">ESPACIO DEL KERNEL</span>
            <div class="diagram-modules"><span v-for="part in current.diagram" :key="part">{{ part }}</span></div>
          </div>
          <div class="diagram-hardware">HARDWARE / CPU · RAM · DISCO</div>
        </div>
        <div class="kernel-description" :key="selected">
          <span class="eyebrow">ARQUITECTURA {{ current.number }}</span>
          <h3>{{ current.name }}</h3>
          <p>{{ current.description }}</p>
          <div class="kernel-example"><span>EJEMPLO REAL</span><strong>{{ current.example }}</strong></div>
        </div>
      </div>
    </div>
  </section>
</template>
