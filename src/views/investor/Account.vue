<template>
    <main>
        <div class="mt-5 pt-4 position-relative" style="padding-inline: calc(15% / 2);">
            <div class="row justify-content-between w-100 mx-auto" style="row-gap: 3rem">
                <div class="saving-balance-section rounded-20 d-flex align-items-center p-4 py-5 position-relative justify-content-around mx-auto" style="background: linear-gradient(272deg, #5D299F 3.69%, #F94A29 94.22%); opacity: 0.8; width: 100%; max-width: 40rem;">
                    <div class="position-relative" style="width: 7rem;">
                        <img src="@/assets/images/background/saving-balance.svg" alt="" class="position-absolute" style="width: 7rem; margin-top: -8rem;">
                    </div>
                    <div class="position-relative" style="z-index: 999;">
                        <h3 class="text-white font-weight-light par-1-2em">Rp <span class="font-weight-semibold par-2-2-5em">{{$toCurrency(account.balance)}}</span></h3>
                        <h3 class="text-white font-weight-light par-1-2em">Saldo Tabungan Anda</h3>
                        <button type="button" @click="$router.push('/topup-balance/top-up-history')" class="btn font-weight-semibold mt-3 view-topup-history-button" style="background-color: white; color: #5D299F;">Lihat Histori Top up</button>
                    </div>
                    <div class="wavy-background position-absolute opacity-50" style="left: 0; bottom: 0; margin-left: -4rem; margin-bottom: -3rem;">
                        <img src="@/assets/images/background/footer-background.svg" alt="">
                    </div>
                    <div class="wavy-background position-absolute opacity-50" style="right: 0; top: 0; rotate: 180deg; margin-right: -3rem; margin-top: -3rem;">
                        <img src="@/assets/images/background/footer-background.svg" alt="">
                    </div>
                </div>
                <div class="top-up-section rounded-20 d-flex align-items-center justify-content-around p-4 py-5 position-relative mx-auto" style="overflow: hidden; background: linear-gradient(272deg, #1A5F7A 3.69%, #159895 94.22%); opacity: 0.8; width: 100%; max-width: 40rem;">
                    <span class="material-symbols-outlined text-white" style="font-size: 4rem; margin-left: -5% !important">
                        add
                    </span>
                    <div class="position-relative">
                        <h3 class="text-white font-weight-semibold par-2-2-5em">Top Up</h3>
                        <h3 class="text-white font-weight-light par-1-2em">Saldo Tabungan Anda</h3>
                    </div>
                    <button class="btn rounded-10 d-flex justify-content-center align-items-center border-0 topup-balance-button" style="max-width: 44px; max-height: 44px; z-index: 5" @click="$router.push('/topup-balance')">
                        <span class="material-symbols-rounded text-primary" style="font-size: 3rem;" aria-hidden="true">
                            keyboard_arrow_right
                        </span>
                    </button>
                    <div class="wavy-background position-absolute opacity-50" style="left: 0; bottom: 0; margin-left: -4rem; margin-bottom: -3rem;">
                        <img src="@/assets/images/background/footer-background.svg" alt="">
                    </div>
                    <div class="wavy-background position-absolute opacity-50" style="right: 0; top: 0; rotate: 180deg; margin-right: -3rem; margin-top: -3rem;">
                        <img src="@/assets/images/background/footer-background.svg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <section class="profile-area mt-5 mb-5" style="padding-inline: calc(15% / 2);">
            <h1 class="font-weight-semibold">Informasi Pribadi</h1>
            <div class="p-5 w-100 h-100 rounded-20 container-card-shadow d-flex flex-column align-items-center mt-5">
                <img src="@/assets/images/profile/user-profile.svg" alt="" class="w-25 h-25">
                <div class="profile-container row justify-content-around mt-4">
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Nama</h3>
                        <h3 id="lendersName" class="font-weight-semibold text-primary par-1-2em">{{account.name}}</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Peran</h3>
                        <h3 id="lendersRole" class="font-weight-semibold text-primary par-1-2em">Investor</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Email</h3>
                        <h3 class="font-weight-semibold text-primary par-1-2em">{{account.email || '-'}}</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Nomor HP</h3>
                        <h3 id="lendersPhoneNumber" class="font-weight-semibold text-primary par-1-2em">{{account.phone || '-'}}</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">NPM</h3>
                        <h3 id="lendersNPM" class="font-weight-semibold text-primary par-1-2em">{{account.npm || '-'}}</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Fakultas</h3>
                        <h3 id="lendersFaculty" class="font-weight-semibold text-primary par-1-2em">{{account.faculty || '-'}}</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Jurusan</h3>
                        <h3 id="lenderMajor" class="font-weight-semibold text-primary par-1-2em">{{account.major || '-'}}</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Kelas</h3>
                        <h3 id="lenderClass" class="font-weight-semibold text-primary par-1-2em">{{account.class || '-'}}</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Foto KTM</h3>
                        <a href="#investor_idCard_modal" data-target="#investor_idCard_modal" data-toggle="modal" id="lendersStudentCardImage" class="btn-link font-weight-semibold text-primary par-1-2em" style="text-decoration: underline;" aria-label="Klik untuk melihat Foto KTM" v-if="account.foto_ktm">Klik untuk melihat</a>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="modal fade" tabindex="-1" id="investor_idCard_modal" aria-labelledby="investor_idCard_modaltitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="investor_idCard_modaltitle">Foto KTM</h5>
                        </div>
                        <div class="modal-body">
                            <img :src="account.foto_ktm" class="w-100" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import apiEnpoint from '@/services/api-endpoint'
import {ApiCore} from '@/services/core'

export default {
    name: 'AccountInvestor',
    data() {
        return {
            account: {}
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.account = {}
            ApiCore.get(`${apiEnpoint.ACCOUNT}/profile`).then((result) => {
                if (result.status) {
                    this.account = result.data
                }
            })
        },
    }
}
</script>