<script setup>
const layers = [
  {
    title: 'App.vue',
    description: 'Renderizador raíz. Solo monta la ruta activa mediante RouterView.',
  },
  {
    title: 'layouts/MainLayout.vue',
    description: 'Estructura común con header, navegación, contenido principal y footer.',
  },
  {
    title: 'pages/*.vue',
    description: 'Cada página importa y organiza únicamente sus componentes.',
  },
  {
    title: 'components/pages/{pagina}',
    description: 'Componentes exclusivos agrupados por el nombre de su página.',
  },
]
</script>

<template>
  <div class="mt-14 grid gap-4 sm:grid-cols-2">
    <article
      v-for="(layer, index) in layers"
      :key="layer.title"
      class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-brand-500/40 hover:bg-brand-500/[0.06]"
    >
      <span class="text-sm font-black text-indigo-400">0{{ index + 1 }}</span>
      <h2 class="mt-3 text-xl font-bold text-white">{{ layer.title }}</h2>
      <p class="mt-3 leading-7 text-slate-400">{{ layer.description }}</p>
    </article>
  </div>
</template>

