<template>
    <main class="mt-5 mb-5" style="padding-inline: calc(15% / 2);">
        <button @click="$router.push('/loan')" class="btn bg-white text-primary font-weight-semibold d-flex align-items-center pl-1 mb-3" style="gap: .5rem;">
            <span class="material-symbols-rounded">
                keyboard_arrow_left
            </span>
            Kembali
        </button>
        <h1 class="font-weight-semibold">Pengajuan Pinjaman</h1>
        <div class="loan-inquiry d-flex flex-column mt-4" style="gap: 3rem;">
            <Form :validation-schema="schemaSimulate" @submit="simulateSubmit" class="p-5 rounded-10 container-card-shadow">
                <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em">Form Pengajuan</h2>
                <div class="d-flex flex-column" style="gap: 2rem;">
                    <div class="">
                        <label for="loanAmount">Jumlah Pinjaman</label>
                        <Field type="number" v-model="form.nominal" name="nominal" class="d-none" />
                        <div class="input-group d-flex">
                            <span class="input-group-text border-right-0" style="border-top-right-radius: 0; border-bottom-right-radius: 0;">Rp</span>
                            <input v-maska 
                                placeholder="Masukkan jumlah pinjaman"
                                class="form-control"
                                @maska="setNominal"
                                data-maska="9,99#"
                                data-maska-tokens="9:[0-9]:repeated"
                                data-maska-reversed/>
                        </div>
                        <ErrorMessage name="nominal" :class="'text-danger'" />
                    </div>
    
                    <div class="">
                        <label for="tipAmount">Tip</label>
                        <div class="input-group d-flex mb-3">
                            <span class="input-group-text border-right-0" style="border-top-right-radius: 0; border-bottom-right-radius: 0;">Rp</span>
                            <Field v-maska
                                name="nomitipnal"
                                placeholder="Masukkan jumlah tip"
                                class="form-control"
                                data-maska="9,99#"
                                data-maska-tokens="9:[0-9]:repeated"
                                @maska="setTip"
                                data-maska-reversed/>
                        </div>
                        <div class="alert alert-info rounded-10 p-3">
                            <div class="d-flex align-items-center">
                                <span class="material-symbols-outlined">
                                    info
                                </span>
                                <div class="ml-3">
                                    Silahkan beri uang tip untuk menaikan peluang mendapatkan pinjaman.
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="d-none">
                        <label for="loanDuration">Durasi Pinjaman</label>
                        <div id="loanDuration" class="d-flex flex-wrap" style="gap: 1rem">
                            <select name="loanDuration" id="loanTextDuration" class="form-select" >
                                <option value="">Pilih rentang:</option>
                                <option value="days">Hari</option>
                                <option value="weeks">Minggu</option>
                                <option value="months">Bulan</option>
                            </select>
                            <select name="loanDuration" id="loanNumberDuration" class="form-select form-select-lg" >
                                <option value="">Pilih rentang:</option>
                            </select>
                        </div>
                    </div>
    
                    <div class="d-flex flex-column">
                        <h3 class="font-weight-normal par-1em">Cara pelunasan</h3>
                        <div class="form-check">
                            <Field type="radio" id="instalment_payment" v-model="instalment_payment" name="instalment_payment" value="0" class="form-check-input" @change="onChangeTypePayment" />
                            <label for="instalment_payment" class="form-check-label ml-3">Bayar secara cicilan</label>
                            <Field name="jml_cicilan" type="hidden" v-model="form.jml_cicilan" />
                            <div class="ml-3 installmentPaymentRange" v-if="instalment_payment == 0">
                                <label for="installmentPaymentRange">Berapa kali cicilan?</label>
                                <div class="custom-range">
                                    <div class="custom-range-field">
                                        <div class="value left">1</div>
                                        <div class="w-100">
                                            <input type="range" min="1" max="12" step="1" v-model="form.jml_cicilan" @change="onChange($event)" @blur="onBlur($event)" />
                                            <div class="custom-range-value-section">
                                                <div class="custom-range-value" id="customRangeValue">
                                                    <span>5</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="value right">12</div>
                                    </div>
                                </div>
                                <ErrorMessage name="jml_cicilan" :class="'text-danger'" />
                            </div>
                        </div>
                        <div class="form-check mt-1">
                            <Field type="radio" id="instalment_payment_2" v-model="instalment_payment" @change="onChangeTypePayment" name="instalment_payment" value="1" class="form-check-input" />
                            <label for="instalment_payment_2" class="form-check-label ml-3">Bayar semuanya sekaligus</label>
                        </div>
                        <ErrorMessage name="instalment_payment" :class="'text-danger'" />
                    </div>
    
                    <div class="d-block">
                        <h3 class="font-weight-normal par-1em">Pilihan Bank</h3>
                        <div class="bank-choices-in-inquiry mt-3" style="gap: .5rem;">
                            <div class="form-check mb-2 border rounded-10" v-for="bank, index in listBank" :key="index">
                                <label :for="`bank_${index}`" class="d-flex align-items-center px-3 pt-3 pb-2">
                                    <div class="d-flex align-items-center" style="gap: 10px">
                                        <Field type="radio" name="bank_name" :id="`bank_${index}`" :value="bank.name" v-model="form.bank_name" class="form-check-input" @change="resetResultSimulate" />
                                        <img :src="bank.logo" :alt="`Bank ${bank.name}`" style="max-width: 100px;" class="ml-2">
                                    </div>
                                </label>
                            </div>
                        </div>
                        <ErrorMessage name="bank_name" :class="'text-danger'" />
                    </div>
    
                    <div class="">
                        <label for="account_number">Nomor Rekening</label>
                        <Field type="number" v-model="form.account_number" placeholder="Masukkan nomor rekening" class="form-control" name="account_number" />
                        <ErrorMessage name="account_number" :class="'text-danger'" />
                    </div>
                </div>
    
                <button type="submit" class="btn btn-primary font-weight-semibold w-100 mt-4">Simulasikan Pinjaman</button>
            </Form>
    
            <section>
                <div class="p-5 rounded-10 container-card-shadow" style="height: fit-content;">
                    <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em" id="result-simulation">Hasil Simulasi Pengajuan</h2>
                    <div class="simulation-result-data d-flex flex-column" style="gap: 1.5rem">
                        <div id="simulationResult_loanAmountTotal" style="row-gap: 8px;">
                            <h4 class="my-auto par-1em" id="loanAmountTotalName">Jumlah Pinjaman</h4>
                            <h4 id="loanAmountTotalResult" class="text-right font-weight-semibold my-auto par-1em">Rp {{ $toCurrency(simulate.nominal) }}</h4>
                        </div>
                        <div id="simulationResult_tipAmountTotal" style="row-gap: 8px;">
                            <h4 class="my-auto par-1em" id="tipAmountTotalName">Jumlah Tip ke Investor</h4>
                            <h4 id="tipAmountTotalResult" class="text-right font-weight-semibold my-auto par-1em">Rp {{ $toCurrency(simulate.tip) }}</h4>
                        </div>
                        <div id="simulationResult_loanDuration" class="d-none" style="row-gap: 8px;">
                            <h4 class="my-auto par-1em" id="loanDurationName">Durasi Pinjaman</h4>
                            <h4 id="loanDurationResult" class="text-right font-weight-semibold my-auto par-1em">90 hari</h4>
                        </div>
                        <div id="simulationResult_installmentRange" style="row-gap: 8px;">
                            <h4 class="my-auto par-1em" id="installmentRangeName">Cicilan</h4>
                            <h4 id="installmentRangeResult" class="text-right font-weight-semibold my-auto par-1em">
                                <span v-if="simulate.jml_cicilan">{{ simulate.jml_cicilan }} kali</span>
                                <span v-else>-</span>
                            </h4>
                        </div>
                        <div class="divider"></div>
                        <div id="simulationResult_numberOfTotalPayment" style="row-gap: 8px;">
                            <h4 class="my-auto par-1em" id="numberOfTotalPaymentName">Jumlah yang harus dibayarkan</h4>
                            <h4 id="numberOfTotalPaymentResult" class="text-primary font-weight-semibold my-auto text-right par-1em">Rp {{ $toCurrency(simulate.total_loan) }}</h4>
                        </div>
                        <div id="simulationResult_numberOfTotalInstallment" style="row-gap: 8px;">
                            <h4 class="my-auto par-1em" id="numberOfTotalInstallmentName">Pembayaran per cicilan</h4>
                            <h4 id="numberOfTotalInstallmentResult" class="text-primary font-weight-bold text-right">Rp {{ $toCurrency(simulate.total_loan_by_instalment) }}</h4>
                        </div>
                    </div>
                </div>

                <Form :validation-schema="schemaSubmit" @submit="handleSubmit" class="mt-5" v-if="simulate.total_loan > 0">
                    <div>
                        <h4 class="text-center par-1em">Tanggal jatuh tempo pembayaran pinjaman</h4>
                        <h4 id="dueDateOfLoanResult" class="text-primary font-weight-bold text-center">{{simulate.deadline}}</h4>
                    </div>
                    <div class="mt-4 d-flex flex-column mb-3" style="gap: .5rem;">
                        <div class="form-check">
                            <Field class="form-check-input" type="checkbox" name="dueDateOfLoanTerms" value="terms1" id="terms1" />
                            <label class="form-check-label ml-3" for="terms1">Saya telah menyutujui hasil simulasi pinjaman di atas</label>
                        </div>
                        <div class="form-check">
                            <Field input class="form-check-input" type="checkbox" name="dueDateOfLoanTerms" value="terms2" id="terms2" />
                            <label class="form-check-label ml-3" for="terms2">Pengajuan pinjaman yang telah berhasil dibuat tidak bisa dibatalkan</label>
                        </div>
                        <div class="form-check">
                            <Field input class="form-check-input" type="checkbox" name="dueDateOfLoanTerms" value="terms3" id="terms3" />
                            <label class="form-check-label ml-3" for="terms3">Jika pembayaran kembali pinjaman tidak dilakukan sebelum tanggal jatuh tempo, maka profile peminjam yang bersangkutan akan diterbitkan di halaman website</label>
                        </div>
                    </div>
                    <ErrorMessage name="dueDateOfLoanTerms" :class="'text-danger'" />
    
                    <button ref="submit" class="btn btn-primary font-weight-semibold w-100 mt-5" type="submit">Ajukan Pinjaman</button>
                </Form>
                <div v-else class="d-flex align-items-center alert alert-info rounded-10 mt-5 text-muted">
                    <div class="text-info mr-3 pb-0">
                        <span class="material-symbols-outlined">
                            info
                        </span>
                    </div>
                    <div>
                        Silahkan untuk melakukan <span class="text-info font-weight-bold">Simulasi Pinjaman</span> terlebih dahulu untuk melakukan <span class="text-info font-weight-bold">Pengajuan Pinjaman</span>.
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>
<script>
    const getImageUrl = (name) => {
        return new URL(`../../../assets/images/bank/${name}.svg`, import.meta.url).href;
    }
    
    import { vMaska } from "maska"

    import { Field, Form, ErrorMessage } from 'vee-validate';
    import {string, number, object, array} from 'yup';
    import $ from 'jquery'
    
    import { ApiCore } from '@/services/core';
    import apiEnpoint from '@/services/api-endpoint';
    
    export default {
        name: 'FormLoan',
        data() {
            return {
                instalment_payment: '0',
                form: {
                    nominal: null,
                    tip: null,
                    jml_cicilan: 1,
                    bank_name: '',
                    account_number: '',
                },
                simulate: {
                    nominal: 0,
                    tip: 0,
                    jml_cicilan: 0,
                    total_loan: 0,
                    total_loan_by_instalment: 0,
                    deadline: ''
                },
                listBank: [
                    {
                        name: 'BCA',
                        logo: getImageUrl('BCA'),
                    },
                    {
                        name: 'BNI',
                        logo: getImageUrl('BNI'),
                    },
                    {
                        name: 'BNI Syariah',
                        logo: getImageUrl('BNI_Syariah'),
                    },
                    {
                        name: 'BRI',
                        logo: getImageUrl('BRI'),
                    },
                    {
                        name: 'Mandiri',
                        logo: getImageUrl('Mandiri'),
                    },
                    {
                        name: 'VISA',
                        logo: getImageUrl('VISA'),
                    },
                    {
                        name: 'MasterCard',
                        logo: getImageUrl('MasterCard'),
                    }
                ]
            }
        },
        directives: { maska: vMaska },
        setup() {
            const schemaSimulate = object({
                nominal: number().nullable().min(10000, 'Jumlah pinjaman minimal Rp. 10,000.00').required('Masukan jumlah pinjaman'),
                jml_cicilan: string().required('Masukan jumlah tenor'),
                bank_name: string().required('Silahkan pilih bank'),
                account_number: string().required('Masukan nomor rekening'),
                instalment_payment: string().required('Pilih tipe pelunasan'),
            });
            const schemaSubmit = object({
                dueDateOfLoanTerms: array().min(3, 'Silahkan centang semua ketentuan').required('Silahkan untuk menyetujui ketentuan diatas.'),
            });
    
            return {
                schemaSimulate,
                schemaSubmit,
            }
        },
        components: {Field, Form, ErrorMessage},
        methods: {
            resetResultSimulate() {
                this.simulate = {
                    nominal: 0,
                    tip: 0,
                    jml_cicilan: 0,
                    total_loan: 0,
                    total_loan_by_instalment: 0,
                    deadline: ''
                }
            },
            setNominal(data) {
                this.form.nominal=data.detail.unmasked
                this.resetResultSimulate()
            },
            setTip(data) {
                this.form.tip=data.detail.unmasked
                this.resetResultSimulate()
            },
            simulateSubmit() {
                try {
                    this.simulate.nominal = this.form.nominal
                    this.simulate.tip = this.form.tip
                    this.simulate.jml_cicilan = this.form.jml_cicilan
    
                    this.simulate.total_loan = parseFloat(this.form.nominal) + parseFloat(this.form.tip)
                    this.simulate.total_loan_by_instalment = (this.simulate.total_loan / parseInt(this.form.jml_cicilan))
                    this.simulate.deadline = this.calculateDeadlineDate(this.form.jml_cicilan)

                    if (screen.width >= 900)
                        window.scrollTo(0, 200)
                    else
                        window.scrollTo(0, 1500)
                } catch(error) {
                    this.$toast.error(error);
                }
            },
            async handleSubmit() {
                try {
                    this.form.fetch = true
                    const process = await ApiCore.store(`${apiEnpoint.LOAN}/ajukan-pinjaman`, {
                        ...this.form
                    })
                    this.form.fetch = false
                    if (process.status) {
                        this.$toast.success(process.message);
                        this.$router.push({ name: 'loan' })
                    } else {
                        this.$toast.error(process.message);
                    }
                } catch(error) {
                    this.form.fetch = false
                    this.$toast.error(error);
                }
            },
            calculateDeadlineDate(totalMonth) {
                var currentDate = this.$moment();
                var futureMonth = this.$moment(currentDate).add(totalMonth, 'M');
    
                return futureMonth.format('DD MMMM YYYY')
            },
            onChangeTypePayment() {
                this.form.jml_cicilan = 1
                this.resetResultSimulate()
            },
            onChange(event) {
                if (event) {
                    let value = this.form.jml_cicilan;
                    $('.custom-range-value span').text(value);
                    $('.custom-range-value').css({
                        'margin-left': (value / 12 * 100) + '%',
                    })
                    $('.custom-range-value').addClass('show');
                    $('.custom-range-value span').addClass('show');
                };
            },
            onBlur(event) {
                if (event) {
                    $('.custom-range-value').removeClass('show');
                    $('.custom-range-value span').removeClass('show');
                }
            },
        }
    }
</script>