<script setup>
import { RouterLink, RouterView } from 'vue-router'

const navigation = [
  { label: 'Inicio', name: 'home' },
  { label: 'Proyecto', name: 'about' },
]
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navegación principal">
        <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3 font-bold tracking-tight">
          <span class="grid size-10 place-items-center rounded-xl bg-brand-600 text-sm shadow-lg shadow-brand-600/25">UPC</span>
          <span>Project</span>
        </RouterLink>

        <div class="flex items-center gap-2">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="{ name: item.name }"
            class="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            active-class="bg-white/10 !text-white"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="border-t border-white/10">
      <div class="mx-auto max-w-6xl px-5 py-8 text-center text-sm text-slate-500 lg:px-8">
        UPC Project · NestJS + Vue + Tailwind CSS 4
      </div>
    </footer>
  </div>
</template>

