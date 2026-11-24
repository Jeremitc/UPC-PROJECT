<script setup>
import { computed, ref } from 'vue'
import { systems } from '../../../data/presentation'

const selected = ref('windows')
const current = computed(() => systems.find((system) => system.id === selected.value))
</script>

<template>
  <section id="sistemas" class="chapter systems-section section-anchor">
    <div class="page-container">
      <div class="chapter-meta" data-reveal><span>06 / ECOSISTEMAS</span><span>CINCO SISTEMAS, DOS GRANDES BASES DE KERNEL</span></div>
      <div class="systems-heading" data-reveal>
        <p class="eyebrow">ELIGE UN SISTEMA PARA EXPLORAR</p>
        <h2>La misma misión.<br /><em>Distintas decisiones.</em></h2>
      </div>
      <div class="systems-tabs" role="tablist" aria-label="Sistemas operativos" data-reveal>
        <button v-for="system in systems" :key="system.id" type="button" role="tab"
          :id="`system-tab-${system.id}`" :aria-selected="selected === system.id"
          :aria-controls="`system-panel-${system.id}`"
          :class="{ active: selected === system.id }" @click="selected = system.id">
          <span class="system-tab-mark" :style="{ '--tab-accent': system.accent }">{{ system.mark }}</span>
          <span>{{ system.name }}</span>
        </button>
      </div>
      <div class="system-showcase" :id="`system-panel-${current.id}`" role="tabpanel"
        :aria-labelledby="`system-tab-${current.id}`" :style="{ '--system-accent': current.accent }" data-reveal>
        <div class="system-copy" :key="selected">
          <span class="eyebrow">{{ current.category }}</span>
          <h3>{{ current.name }}</h3>
          <p>{{ current.description }}</p>
          <div class="system-specs">
            <div><span>KERNEL / BASE</span><strong>{{ current.kernel }}</strong></div>
            <div><span>MODELO</span><strong>{{ current.model }}</strong></div>
            <div><span>IDEAL PARA</span><strong>{{ current.ideal }}</strong></div>
          </div>
          <div class="system-fact"><span>✳</span><p>{{ current.fact }}</p></div>
        </div>
        <div class="system-art" :class="`system-art-${current.id}`" aria-hidden="true">
          <div class="art-halo"></div>
          <div class="art-device">
            <div class="art-screen">
              <div class="art-toolbar"><i></i><i></i><i></i></div>
              <div class="art-symbol">{{ current.mark }}</div>
              <div class="art-interface"><span></span><span></span><span></span></div>
            </div>
            <div class="art-base"></div>
          </div>
          <span class="art-caption">{{ current.kernel }} / {{ current.category.toUpperCase() }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
