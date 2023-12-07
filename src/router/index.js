import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Signin from '../views/authentication/Signin.vue'
import Signup from '../views/authentication/Signup.vue'
import About from '../views/About.vue'
import Donation from '../views/donation/Donation.vue'
import DonationForm from '../views/donation/DonationForm.vue'
import HistoryPayment from '../views/HistoryPayment.vue'

// routes for borrower role
import DashboardBorrower from '../views/peminjam/Dashboard.vue'
import LoanBorrower from '../views/peminjam/loan/Loan.vue'
import LoanFormBorrower from '../views/peminjam/loan/LoanForm.vue'
import LoanDetailBorrower from '../views/peminjam/loan/LoanDetail.vue'
import LoanPayBorrower from '../views/peminjam/loan/LoanPayment.vue'
import AccountBorrower from '../views/peminjam/Account.vue'

// routes for investor
import DashboardInvestor from '../views/investor/Dashboard.vue'
import InvestmentInvestor from '../views/investor/investment/Investment.vue'
import InvestmentDetailInvestor from '../views/investor/investment/InvestmentDetail.vue'
import AccountInvestor from '../views/investor/Account.vue'
import TopUpBalanceInvestor from '../views/investor/TopUpBalance.vue'

const routes = [
    // routes general
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
        path: '/signup/:role',
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
    // routes for borrower
    {
        path: '/dashboard/peminjam',
        component: DashboardBorrower,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/account/peminjam',
        name: 'account.borrower',
        component: AccountBorrower,
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
    },
    // routes for investor
    {
        path: '/dashboard/investor',
        component: DashboardInvestor,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/investment',
        component: InvestmentInvestor,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/account/investor',
        name: 'account.investor',
        component: AccountInvestor,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/investment/detail/:id',
        component: InvestmentDetailInvestor,
        meta: {
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/topup-balance',
        component: TopUpBalanceInvestor,
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
    scrollBehavior() {
        return { top: 0, left: 0 }
    }
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
