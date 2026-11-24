<script setup>
import { milestones } from '../../../data/presentation'
</script>

<template>
  <section id="historia" class="chapter history-section section-anchor">
    <div class="history-image" aria-hidden="true"></div>
    <div class="page-container">
      <div class="chapter-meta" data-reveal><span>05 / EVOLUCIÓN</span><span>DE LABORATORIOS A MILES DE MILLONES DE DISPOSITIVOS</span></div>
      <div class="history-heading" data-reveal>
        <p class="eyebrow">UNA HISTORIA, VARIOS CAMINOS</p>
        <h2>El software cambió<br /><em>la forma de usar hardware.</em></h2>
        <p>Unix influyó en muchas ideas; Windows NT siguió una arquitectura propia. Linux es compatible con la filosofía Unix, pero no procede de su código.</p>
      </div>

      <div class="timeline" aria-label="Cronología de los sistemas operativos">
        <article v-for="(event, index) in milestones" :key="event.year" class="timeline-item" data-reveal>
          <div class="timeline-year"><span class="timeline-pin"></span><strong>{{ event.year }}</strong><small>{{ String(index + 1).padStart(2, '0') }}</small></div>
          <h3>{{ event.title }}</h3>
          <p>{{ event.body }}</p>
        </article>
      </div>
      <div class="history-summary" data-reveal>
        <span>LA CLAVE PARA RECORDAR</span>
        <p>Un sistema operativo evoluciona cuando cambian los dispositivos, las necesidades de seguridad y la forma en que interactuamos con ellos.</p>
      </div>
    </div>
  </section>
</template>
