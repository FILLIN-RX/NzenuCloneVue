import { createApp } from 'vue'
import './style.css'
import '@splidejs/vue-splide/css' // style par défaut

// In main.js or App.vue


import router from './router'
import App from './App.vue'

const app=createApp(App)

app.use(router)
app.mount('#app')