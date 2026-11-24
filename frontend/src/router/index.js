import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [{ path: '', name: 'home', component: () => import('../pages/HomePage.vue') }],
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.afterEach(() => {
  document.title = 'Arquitectura de Sistemas Operativos | UPC'
})

export default router
