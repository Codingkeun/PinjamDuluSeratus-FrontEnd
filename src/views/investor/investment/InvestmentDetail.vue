<template>
    <main class="mt-5 mb-5" style="padding-inline: calc(15% / 2);">
        <div id="beforeProvidingLoans">
            <router-link :to="`/investment`" class="payment-history-back-button bg-white text-primary font-weight-semibold d-flex align-items-center p-0" style="gap: .5rem; width: fit-content">
                <span class="material-symbols-rounded" aria-hidden="true">
                    keyboard_arrow_left
                </span>
                Kembali
            </router-link>
            <div class="d-flex justify-content-between align-items-center flex-wrap mt-5" style="gap: 2rem;">
                <h1 class="font-weight-semibold">Detail Pinjaman</h1>
                <button @click="$router.push('/history-payment')" v-if="detail.status_approval == 'approve'" class="btn btn-border bg-white text-primary font-weight-semibold" style="height: 44px; border: 2px solid var(--primary);">Lihat Histori Pembayaran</button>
            </div>
            <Form :validation-schema="schema" @submit="handleSubmit" class="loan-detail-container lender-role w-100 mx-0 mt-4">
                <section class="p-5 rounded-10 container-card-shadow w-100" style="height: fit-content;">
                    <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em">Informasi Data Peminjam</h2>
                    <div class="profile-image rounded-circle bg-primary mx-auto" style="width: 5rem; height: 5rem;">
                        <img src="@/assets/images/profile/user-profile.svg" alt="" class="w-100 h-100">
                    </div>
                    <div class="loan-detail-lendee-data d-flex flex-wrap mt-4" style="row-gap: 1rem">
                        <div class="w-50">
                            <h4 class="par-1em">Nama Peminjam</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">{{detail.borrower?.name || '-'}}</h4>
                        </div>
                        <div class="w-50">
                            <h4 class="par-1em">Email</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">{{detail.borrower?.email || '-'}}</h4>
                        </div>
                        <div class="w-50">
                            <h4 class="par-1em">Nomor HP</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">{{detail.borrower?.phone || '-'}}</h4>
                        </div>
                        <div class="w-50">
                            <h4 class="par-1em">NPM</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">{{detail.borrower?.npm || '-'}}</h4>
                        </div>
                        <div class="w-50">
                            <h4 class="par-1em">Jurusan</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">{{detail.borrower?.major || '-'}}</h4>
                        </div>
                        <div class="w-50">
                            <h4 class="par-1em">Kelas</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">{{detail.borrower?.class || '-'}}</h4>
                        </div>
                    </div>
                </section>

                <section class="form-check" :class="{'pl-0': detail.status_approval == 'approve'}">
                    <div class="w-100 opacity-75" v-if="detail.status_approval == 'approve'">
                        <div class="bg-primary" style="border-radius: 1.2rem; height: 4rem;">
                            <img class="w-100" src="@/assets/images/background/wave-background.svg" alt="">
                        </div>
                    </div>
                    <Field v-if="detail.status_approval != 'approve'" class="form-check-input" type="checkbox" name="terms" value="1" id="terms" />
                    <label v-if="detail.status_approval != 'approve'" class="form-check-label ml-3 mb-2" for="terms">Form pemberian dana pinjaman yang telah berhasil dibuat tidak bisa dibatalkan</label>
                    <ErrorMessage name="terms" class="text-danger ml-3"/>
                </section>

                <section class="d-flex flex-column w-100 px-0" style="gap: 3rem;">
                    <div class="p-5 rounded-10 container-card-shadow" style="height: fit-content;">
                        <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em">Informasi Pinjaman</h2>
                        <div class="loan-information-data d-flex flex-column" style="gap: 1.5rem">
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Jumlah Pinjaman</h4>
                                <h4 class="text-right font-weight-semibold my-auto par-1em">Rp {{$toCurrency(detail.nominal)}}</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Jumlah Tip ke Investor</h4>
                                <h4 class="text-right font-weight-semibold my-auto par-1em">Rp {{$toCurrency(detail.tip)}}</h4>
                            </div>
                            <div style="row-gap: 8px;" class="d-none">
                                <h4 class="my-auto par-1em">Durasi Pinjaman</h4>
                                <h4 class="text-right font-weight-semibold my-auto par-1em">90 hari</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Cara pembayaran</h4>
                                <h4 class="text-right font-weight-semibold my-auto par-1em">
                                    <span v-if="detail.instalment_total > 1">Cicilan</span>
                                    <span v-else>Sekali Bayar</span>
                                </h4>
                            </div>
                            <div style="row-gap: 8px;" v-if="detail.instalment_total > 1">
                                <h4 class="my-auto par-1em">Jumlah cicilan</h4>
                                <h4 class="text-right font-weight-semibold my-auto par-1em">{{detail.instalment_total}} kali</h4>
                            </div>
                            <div class="divider"></div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Jumlah yang harus dibayarkan</h4>
                                <h4 class="text-primary my-auto text-right" :class="{'par-1em font-weight-semibold': detail.instalment_total > 1, 'font-weight-bold': detail.instalment_total == 1}">Rp {{$toCurrency((detail.nominal + detail.tip))}}</h4>
                            </div>
                            <div style="row-gap: 8px;" v-if="detail.instalment_total > 1">
                                <h4 class="my-auto par-1em">Pembayaran per cicilan</h4>
                                <h4 class="text-primary font-weight-bold text-right">Rp {{$toCurrency(detail.instalment_nominal)}}</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Tanggal jatuh tempo</h4>
                                <h4 class="text-primary font-weight-semibold my-auto text-right par-1em">{{$changeFormatDate(detail.deadline)}}</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="w-100 mx-auto">
                    <button v-if="detail.status_approval == 'wait'" class="btn btn-primary font-weight-semibold mb-2" type="submit">Berikan Dana Pinjaman</button>
                    <div class="d-block" v-if="mustTopUp">
                        <div class="text-muted mb-3">Saldo kamu kurang untuk melakukan investasi pada pinjaman ini ?</div>
                        <button @click="$router.push('/account/investor')" class="btn btn-outline-primary font-weight-semibold" type="button">Top Up Saldo</button>
                    </div>
                </div>
            </Form>
        </div>
    </main>
</template>
<script>
import { ApiCore } from '@/services/core';
import apiEnpoint from '@/services/api-endpoint';

import { Field, Form, ErrorMessage } from 'vee-validate';
import { object, string } from 'yup'

export default {
    name: 'InvestmentDetailInvestor',
    data() {
        return {
            mustTopUp: false,
            detail: {
                status_approval: 'wait',
                count_payment: 0
            },
            form: {
                id: this.$route.params.id
            }
        }
    },
    mounted() {
        this.fetchData()
    },
    setup() {
        const schema = object({
            terms: string().required('Silahkan untuk menyetujui syarat & ketentuan terlebih dahulu'),
        });

        return {
            schema
        }
    },
    components: {Field, Form, ErrorMessage},
    methods: {
        fetchData() {
            ApiCore.find(`${apiEnpoint.INVESMENT}/detail/pengajuan`, this.$route.params.id)
                    .then((result) => {
                        if (result.status)
                            this.detail = result.data
                    })
                    .catch((error) => {
                        this.$toast.error(error.message)
                    })
        },
        async handleSubmit() {
            this.$swal
                .fire({
                    title: 'Apakah kamu yakin ?',
                    html: `Kamu akan memberikan dana pinjaman kepada <b>${this.detail.borrower?.name}</b>`,
                    icon: 'warning',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'Ya',
                    confirmButtonColor: '#159895',
                    denyButtonColor: '#c0c0c0',
                    denyButtonText: 'Tidak',
                })
                .then(async (result) => {
                    if (result.isConfirmed) {
                        try {
                            this.form.fetch = true
                            const process = await ApiCore.store(`${apiEnpoint.INVESMENT}/approve-pinjaman`, {
                                ...this.form
                            })
                            this.form.fetch = false
                            if (process.status) {
                                this.$toast.success(process.message);
                                this.$router.push({ name: 'investment' })
                            } else {
                                this.mustTopUp = process.must_topup
                                this.$toast.error(process.message);
                            }
                        } catch(error) {
                            this.form.fetch = false
                            this.$toast.error(error);
                        }
                    }
                });
        },
    }
}
</script>