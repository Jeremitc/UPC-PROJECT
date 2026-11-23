import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../pages/HomePage.vue'),
          meta: { title: 'Inicio' },
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../pages/AboutPage.vue'),
          meta: { title: 'Acerca del proyecto' },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = `${to.meta.title ?? 'Página'} | UPC Project`
})

export default router

