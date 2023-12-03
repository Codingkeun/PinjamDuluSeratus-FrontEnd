import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Signin from '../views/authentication/Signin.vue'
import Signup from '../views/authentication/Signup.vue'
import About from '../views/About.vue'
import Donation from '../views/donation/Donation.vue'
import DonationForm from '../views/donation/DonationForm.vue'

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/signin',
        component: Signin,
        meta: {
            footer: false,
            navbar: false,
        }
    },
    {
        path: '/signup',
        component: Signup,
        meta: {
            footer: false,
            navbar: false,
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/donation',
        component: Donation,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/donation-send',
        component: DonationForm,
        meta: {
            footer: true,
            navbar: true,
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
    // if (to.name !== 'auth.callback') {
    //     const authenticationLoginUrlTemplate = getUrlScola(process.env.VUE_APP_LOGIN_REDIRECT_URL)
    //     const host = window.location.host
    //     let authenticationUrl
    //     const matched = host.match(/\w+.(\w+).[\w]+.(id|com|net|org)$/)
    //     if (matched) {
    //         authenticationUrl = authenticationLoginUrlTemplate.replace('<name>', matched[1])
    //     }

    //     setTimeout(() => {
    //         // validate token
    //         ApiCore.store(endpoint.AUTHENTICATION, null, 'check')
    //         .then(() => {
    //             ApiCore.get(endpoint.AUTHENTICATION, null, 'user')
    //                 .then((result) => {
    //                     store.commit('setuser', result.data)

    //                     if (to.path == '/') {
    //                         if (result.data.role == 'ortu')
    //                             next('/dashboard/parent')
    //                         else if (result.data.role == 'pengajuan')
    //                             next('/dashboard/requester')
    //                         else if (result.data.role == 'inventaris')
    //                             next('/dashboard/inventarist')
    //                         else
    //                             next('/dashboard/administrator')
    //                     } else {
    //                         next()
    //                     }
    //                 })
    //                 .catch(() => {
    //                     if (authenticationUrl) window.location.replace(authenticationUrl)
    //                 })
    //         })
    //         .catch(() => {
    //             if (authenticationUrl) window.location.replace(authenticationUrl)
    //         })
    //     }, 100);
    // }
    next()
})

export default router
