import { createApp } from 'vue'
import App from './App.vue'

// load utils
import router from './router'
import store from './store'

// load external library
import VueCountdown from '@chenfengyuan/vue-countdown';

// load assets
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

import 'bootstrap'

const app = createApp(App)

app.use(router)
app.use(store)

app.component(VueCountdown.name, VueCountdown);

app.mount('#app')