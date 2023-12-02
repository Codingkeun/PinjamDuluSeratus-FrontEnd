import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')