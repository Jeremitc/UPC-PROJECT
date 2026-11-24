<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from '../components/pages/home/SiteHeader.vue'
</script>

<template>
  <div class="site-shell">
    <SiteHeader />
    <main id="contenido" tabindex="-1"><RouterView /></main>
  </div>
</template>
