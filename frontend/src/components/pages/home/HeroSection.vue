<template>
  <section class="relative isolate overflow-hidden">
    <div class="absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-brand-600/20 blur-3xl"></div>

    <div class="mx-auto grid min-h-[64vh] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
      <div>
        <span class="inline-flex rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm font-medium text-indigo-300">
          Base full stack preparada
        </span>
        <h1 class="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
          NestJS y Vue organizados para crecer sin desorden.
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Un backend básico, un layout reutilizable, rutas hijas y componentes separados por cada página del frontend.
        </p>

        <div class="mt-9 flex flex-wrap gap-3">
          <RouterLink
            :to="{ name: 'about' }"
            class="rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-500"
          >
            Ver arquitectura
          </RouterLink>
          <a
            href="http://localhost:3000/api"
            target="_blank"
            rel="noreferrer"
            class="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
          >
            Abrir API
          </a>
        </div>
      </div>

      <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
        <div class="mb-5 flex items-center gap-2">
          <span class="size-3 rounded-full bg-red-400"></span>
          <span class="size-3 rounded-full bg-amber-300"></span>
          <span class="size-3 rounded-full bg-emerald-400"></span>
        </div>
        <pre class="overflow-x-auto text-sm leading-7 text-slate-300"><code>src/
├── components/pages/
│   ├── home/
│   └── about/
├── layouts/
│   └── MainLayout.vue
├── pages/
│   ├── HomePage.vue
│   └── AboutPage.vue
└── router/index.js</code></pre>
      </div>
    </div>
  </section>
</template>

