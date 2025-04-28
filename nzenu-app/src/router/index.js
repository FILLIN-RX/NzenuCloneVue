

import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import EnregistrerPage from '@/pages/EnregistrerPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/enregistrer', component: EnregistrerPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
