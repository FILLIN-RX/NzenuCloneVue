

import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import TransFerrer from '../pages/TransFerrer.vue'
import MutuaLiser from '../pages/MutuaLiser.vue'
import EnregistrerPage from '@/pages/EnregistrerPage.vue'
import RechercheWhois from '@/pages/RechercheWhois.vue'
import WordPress from '../pages/WordPress.vue'
import PresTashop from '../pages/PresTashop.vue'
import MigraTion from '../pages/MigraTion.vue'
import EmailVue from '../pages/EmailVue.vue'
import CertificatSsk from '../pages/CertificatSsk.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/RechercheWhois', component: RechercheWhois },
  { path: '/enregistrer', component: EnregistrerPage },
  { path: '/transferrer', component: TransFerrer },
  { path: '/mutualiser', component: MutuaLiser },
  { path: '/wordpress', component: WordPress },
  { path: '/prestashop', component: PresTashop },
  { path: '/migration', component: MigraTion },
  { path: '/email', component: EmailVue },
  { path: '/certificat-ssk', component: CertificatSsk },
  
  

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
