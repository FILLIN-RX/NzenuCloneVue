

import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

import EnregistrerPage from '@/pages/EnregistrerPage.vue'
import RechercheWhois from '@/pages/RechercheWhois.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/RechercheWhois', component: RechercheWhois },
  { path: '/enregistrer', component: EnregistrerPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
