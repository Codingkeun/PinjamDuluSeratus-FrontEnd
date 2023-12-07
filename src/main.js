import { createApp } from 'vue'
import App from './App.vue'

// import store from './store'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

// load utils
import router from './router'

// load external library
import VueCountdown from '@chenfengyuan/vue-countdown';
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// load assets
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

import 'bootstrap'

// import components for global
import Pagination from './components/Pagination.vue'

const app = createApp(App)
const pinia = createPinia()

pinia.use(createPersistedState({
    storage: localStorage,
}))

app.use(pinia)
app.use(router)
app.use(VueSweetalert2);
app.use(LoadingPlugin, {
    color: '#fff',
    zIndex: 99999999,
    backgroundColor: '#000',
});

app.component(VueCountdown.name, VueCountdown);
app.component(Pagination.name, Pagination)

app.mount('#app')