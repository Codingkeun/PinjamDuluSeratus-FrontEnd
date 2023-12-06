import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Signin from '../views/authentication/Signin.vue'
import Signup from '../views/authentication/Signup.vue'
import About from '../views/About.vue'
import Donation from '../views/donation/Donation.vue'
import DonationForm from '../views/donation/DonationForm.vue'
import HistoryPayment from '../views/HistoryPayment.vue'

// route for borrower role
import DashboardBorrower from '../views/peminjam/Dashboard.vue'
import LoanBorrower from '../views/peminjam/loan/Loan.vue'
import LoanFormBorrower from '../views/peminjam/loan/LoanForm.vue'
import LoanDetailBorrower from '../views/peminjam/loan/LoanDetail.vue'
import LoanPayBorrower from '../views/peminjam/loan/LoanPayment.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/signin/:role',
        name: 'signin',
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
        name: 'donation',
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
    },
    {
        path: '/dashboard/peminjam',
        component: DashboardBorrower,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/loan',
        component: LoanBorrower,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/loan/form/:id?',
        component: LoanFormBorrower,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/loan/detail/:id',
        component: LoanDetailBorrower,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/history-payment',
        component: HistoryPayment,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/loan/info-payment',
        component: LoanPayBorrower,
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
    // const localData = localStorage.getItem('store')

    // const authRequired  = !['signin'].includes(to.name);

    // if (authRequired) {
    //     if (localData && JSON.parse(localData).key)
    //         next()
    //     else
    //         next({name: 'signin'})
    // } else {
        next()
    // }
})

export default router
