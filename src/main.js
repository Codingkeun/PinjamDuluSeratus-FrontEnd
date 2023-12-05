import { createApp } from 'vue'
import App from './App.vue'

// import store from './store'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

// load utils
import router from './router'

// load external library
import VueCountdown from '@chenfengyuan/vue-countdown';

// load assets
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

import 'bootstrap'

const app = createApp(App)
const pinia = createPinia()

pinia.use(createPersistedState({
    storage: localStorage,
}))

app.use(pinia)
app.use(router)

app.component(VueCountdown.name, VueCountdown);

app.mount('#app')