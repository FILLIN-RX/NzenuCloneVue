import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// In main.js or App.vue
import 'bootstrap-icons/font/bootstrap-icons.css';

import router from './router'
import App from './App.vue'

const app=createApp(App)

app.use(router)
app.mount('#app')