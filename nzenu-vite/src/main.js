import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import '@splidejs/vue-splide/css' // style par défaut

// In main.js or App.vue
const pinia = createPinia();


import router from './router'
import App from './App.vue'

const app=createApp(App)
app.use(pinia)
            app.use(router)
app.mount('#app')