

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
import LogIn from '../pages/LogIn.vue'
import MotdepasseOublier from '../pages/MotdepasseOublier.vue'
import DashBoard from '../pages/DashBoard.vue'
import MiniDashbaord from '../../mini-pages/MiniDashbaord.vue'
import MesContact from '../../mini-pages/MesContact.vue'
import MesCommande from '../../mini-pages/MesCommande.vue'
import MesDomaine from '../../mini-pages/MesDomaine.vue'
import MiniSsl from '../../mini-pages/MiniSsl.vue'
import EmailPro from '../../mini-pages/EmailPro.vue'
import HebergementWeb from '../../mini-pages/HebergementWeb.vue'
import RenouVellement from '../../mini-pages/RenouVellement.vue'
import RegistraTion from '../pages/RegistraTion.vue'
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
  { path: '/login',component: LogIn},
  { path: '/Mot de passe',component: MotdepasseOublier},
  { path: '/registration', component: RegistraTion },
  { path: '/Dashboard',component:DashBoard, meta: { showNavbarAndFooter: false } ,
    children: [
      { path: '/dashbaord', component:MiniDashbaord},
      { path: '/contact',component:MesContact},
      { path: '/commande',component:MesCommande},
      { path: '/domaine',component:MesDomaine},
      { path:'/ssl',component:MiniSsl},
      { path: '/email pro',component:EmailPro},
      { path: '/hebergement',component:HebergementWeb},
      { path: '/renouvellement',component:RenouVellement}

    ]
  },
  
  
  
  

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
