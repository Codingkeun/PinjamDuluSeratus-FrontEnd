import { createRouter, createWebHashHistory } from 'vue-router'
import stores from '../stores'

import apiEnpoint from '../services/api-endpoint'
import { ApiCore } from '../services/core'

import Home from '../views/Home.vue'
import Signin from '../views/authentication/Signin.vue'
import Signup from '../views/authentication/Signup.vue'
import About from '../views/About.vue'
import Donation from '../views/donation/Donation.vue'
import DonationForm from '../views/donation/DonationForm.vue'
import HistoryPayment from '../views/HistoryPayment.vue'
import NotFound from '../views/404.vue'

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
import TopUpTransferConfirmation from '../views/investor/TopUpTransferConfirmation.vue'
import TopUpHistory from '../views/investor/TopUpHistory.vue'

const nameApplication = import.meta.env.VITE_APP_TITLE

const routes = [
    // routes general
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: `${nameApplication} | Home`,
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: NotFound,
        meta: {
            title: `${nameApplication} | Not Found`,
            footer: false,
            navbar: false,
        }
    },
    {
        path: '/signin/:role',
        name: 'signin',
        component: Signin,
        meta: {
            title: `${nameApplication} | Login`,
            footer: false,
            navbar: false,
        }
    },
    {
        path: '/signup/:role',
        name: 'signup',
        component: Signup,
        meta: {
            title: `${nameApplication} | Registrasi Akun`,
            footer: false,
            navbar: false,
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: `${nameApplication} | Tentang Kami`,
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/donation',
        name: 'donation',
        component: Donation,
        meta: {
            title: `${nameApplication} | Donasi`,
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/donation-send',
        component: DonationForm,
        meta: {
            title: `${nameApplication} | Form Donasi`,
            footer: true,
            navbar: true,
        }
    },
    // routes for borrower
    {
        path: '/dashboard/peminjam',
        component: DashboardBorrower,
        meta: {
            title: `${nameApplication} | Dashboard`,
            footer: true,
            navbar: true,
            role: 'peminjam'
        }
    },
    {
        path: '/account/peminjam',
        name: 'account.borrower',
        component: AccountBorrower,
        meta: {
            title: `${nameApplication} | Akun`,
            footer: true,
            navbar: true,
            role: 'peminjam'
        }
    },
    {
        path: '/loan',
        name: 'loan',
        component: LoanBorrower,
        meta: {
            title: `${nameApplication} | Pinjaman`,
            footer: true,
            navbar: true,
            role: 'peminjam'
        }
    },
    {
        path: '/loan/form/:id?',
        component: LoanFormBorrower,
        meta: {
            title: `${nameApplication} | Pengajuan Pinjaman`,
            footer: true,
            navbar: true,
            role: 'peminjam'
        }
    },
    {
        path: '/loan/detail/:id',
        component: LoanDetailBorrower,
        meta: {
            title: `${nameApplication} | Detail Pinjaman`,
            footer: true,
            navbar: true,
            role: 'peminjam'
        }
    },
    {
        path: '/history-payment/:id',
        component: HistoryPayment,
        meta: {
            title: `${nameApplication} | Riwayat Pembayaran`,
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/loan/payment/:id',
        component: LoanPayBorrower,
        meta: {
            title: `${nameApplication} | Informasi Pembayaran`,
            footer: true,
            navbar: true,
            role: 'peminjam'
        }
    },
    // routes for investor
    {
        path: '/dashboard/investor',
        component: DashboardInvestor,
        meta: {
            title: `${nameApplication} | Dashboard`,
            footer: true,
            navbar: true,
            role: 'investor'
        }
    },
    {
        path: '/investment',
        name: 'investment',
        component: InvestmentInvestor,
        meta: {
            title: `${nameApplication} | Investasi Aktif`,
            footer: true,
            navbar: true,
            role: 'investor'
        }
    },
    {
        path: '/account/investor',
        name: 'account.investor',
        component: AccountInvestor,
        meta: {
            title: `${nameApplication} | Akun`,
            footer: true,
            navbar: true,
            role: 'investor'
        }
    },
    {
        path: '/investment/detail/:id',
        component: InvestmentDetailInvestor,
        meta: {
            title: `${nameApplication} | Detail Pinjaman`,
            footer: true,
            navbar: true,
            role: 'investor'
        }
    },
    {
        path: '/topup-balance',
        component: TopUpBalanceInvestor,
        meta: {
            title: `${nameApplication} | Top Up Saldo`,
            footer: true,
            navbar: true,
            role: 'investor'
        }
    },
    {
        path: '/topup-balance/confirmation/:id',
        name: 'topup.confirmation',
        component: TopUpTransferConfirmation,
        meta: {
            title: `${nameApplication} | Konfirmasi Pembayaran`,
            footer: true,
            navbar: true,
            role: 'investor'
        }
    },
    {
        path: '/topup-balance/history',
        name: 'topup.history',
        component: TopUpHistory,
        meta: {
            title: `${nameApplication} | History Top Up`,
            footer: true,
            navbar: true,
            role: 'investor'
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
    document.title = to.meta.title;

    const localData = localStorage.getItem('token')
    const tmpRole = localStorage.getItem('role') || ''

    const authRequired  = ['signin', 'signup'].includes(to.name);
    const role = to.meta.role || ''

    let isAllow = true

    if (role) {
        if (role != tmpRole)
            isAllow = false
    }

    console.log(isAllow);

    if (isAllow) {
        if (localData && !authRequired) {
            ApiCore.get(`${apiEnpoint.ACCOUNT}/info`, null, false)
                    .then((response) => {
                        if ('status' in response && !response.status) {
                            localStorage.removeItem('token')
                            next({name: 'home'})
                        } else {
                            stores.commit('setuser', response)
                            next()
                        }
                    })
                    .catch(() => {})
        } else{
            next()
        }
    } else {
        next({name: 'notfound'})
    }
})

export default router
