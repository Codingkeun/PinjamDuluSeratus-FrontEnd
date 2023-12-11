import { createApp } from 'vue'
import App from './App.vue'

// import store from './store'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

// load utils
import router from './router'

// load external library
// countdown library
import VueCountdown from '@chenfengyuan/vue-countdown';

// loader library
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// sweetalert library
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// toast library
import Toast, {useToast} from "vue-toastification";
import "vue-toastification/dist/index.css";

// load assets
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

import 'bootstrap'

// import components for global
import Pagination from './components/Pagination.vue'
import EmptyState from './components/EmptyState.vue'

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
app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 1,
    newestOnTop: true,
    pauseOnHover: false,
    hideProgressBar: true,
    timeout: 2000,
    position: "top-right",
});

app.config.productionTip = false

app.component(VueCountdown.name, VueCountdown);
app.component(Pagination.name, Pagination)
app.component(EmptyState.name, EmptyState)

app.config.globalProperties.$toast = useToast()

app.mount('#app')