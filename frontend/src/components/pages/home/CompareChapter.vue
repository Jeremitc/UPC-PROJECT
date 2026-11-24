<script setup>
import { systems } from '../../../data/presentation'
</script>

<template>
  <section id="comparar" class="chapter compare-section section-anchor">
    <div class="page-container">
      <div class="chapter-meta" data-reveal><span>07 / COMPARATIVA</span><span>UNA VISTA PARA TOMAR DECISIONES</span></div>
      <div class="split-heading" data-reveal>
        <div><p class="eyebrow">PANORAMA GENERAL</p><h2>¿Cuál conviene<br /><em>para cada caso?</em></h2></div>
        <p>No existe un ganador absoluto. La elección depende del dispositivo, la compatibilidad que necesitas y el nivel de control que buscas.</p>
      </div>
      <div class="comparison-scroll" data-reveal>
        <table class="comparison-table">
          <thead><tr><th scope="col">SISTEMA</th><th scope="col">KERNEL</th><th scope="col">MODELO</th><th scope="col">PUNTO FUERTE</th><th scope="col">USO RECOMENDADO</th></tr></thead>
          <tbody>
            <tr v-for="system in systems" :key="system.id">
              <th scope="row"><span class="table-mark" :style="{ color: system.accent }">{{ system.mark }}</span>{{ system.name }}</th>
              <td>{{ system.kernel }}</td><td>{{ system.model }}</td>
              <td>{{ system.id === 'windows' ? 'Compatibilidad' : system.id === 'linux' ? 'Control y flexibilidad' : system.id === 'macos' ? 'Integración con Mac' : system.id === 'ios' ? 'Integración con iPhone' : 'Variedad de dispositivos' }}</td>
              <td>{{ system.ideal }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="comparison-note" data-reveal>
        <span>IMPORTANTE</span>
        <p>“Abierto” y “cerrado” describen licencias y posibilidades de modificación; no determinan por sí solos que un sistema sea más seguro o más rápido.</p>
      </div>
    </div>
  </section>
</template>
