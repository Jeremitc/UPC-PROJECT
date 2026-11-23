<script setup>
import { onMounted, ref } from 'vue'

const loading = ref(true)
const status = ref(null)
const error = ref('')

async function checkBackend() {
  loading.value = true
  error.value = ''

  try {
    const response = await fetch('/api/health')
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    status.value = await response.json()
  } catch {
    status.value = null
    error.value = 'No se pudo conectar. Inicia el backend en el puerto 3000.'
  } finally {
    loading.value = false
  }
}

onMounted(checkBackend)
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 pb-20 lg:px-8">
    <div class="flex flex-col gap-5 rounded-2xl border border-white/10 bg-slate-900 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">Conexión con NestJS</p>
        <div class="mt-2 flex items-center gap-3">
          <span
            class="size-3 rounded-full"
            :class="status ? 'bg-emerald-400 shadow-[0_0_16px_#34d399]' : loading ? 'animate-pulse bg-amber-300' : 'bg-red-400'"
          ></span>
          <p class="font-medium text-white">
            {{ loading ? 'Comprobando backend…' : status?.message ?? error }}
          </p>
        </div>
      </div>

      <button
        type="button"
        class="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/5 disabled:cursor-wait disabled:opacity-50"
        :disabled="loading"
        @click="checkBackend"
      >
        Volver a comprobar
      </button>
    </div>
  </section>
</template>

