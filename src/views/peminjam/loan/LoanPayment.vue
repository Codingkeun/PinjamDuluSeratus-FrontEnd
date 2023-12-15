<template>
    <main class="mt-5 mb-5 lendee-payment-section">
        <button @click="$router.push(`/loan/detail/${$route.params.id}`)" class="btn bg-white text-primary font-weight-semibold d-flex align-items-center pl-1 mb-3" style="gap: .5rem;">
            <span class="material-symbols-rounded">
                keyboard_arrow_left
            </span>
            Kembali
        </button>
        <Form :validation-schema="schemaSubmit" @submit="handleSubmit" id="uploadProofOfPaymentSection">
            <div class="d-flex justify-content-between align-items-center flex-wrap mt-5" style="gap: 2rem;">
                <h1 class="font-weight-semibold">Pembayaran Dana Pinjaman</h1>
                <button type="button" @click="handleLinkToUploadReceiptOnClick" class="btn bg-white text-primary font-weight-semibold d-flex align-items-center" style="height: 44px; border: 2px solid var(--primary);">
                    <span>Upload Bukti Pembayaran</span>
                    <span class="material-symbols-rounded ml-2">
                        arrow_downward
                    </span>
                </button>
            </div>
            <div class="lendee-payment-detail">
                <div class="mt-5">
                    <h2 class="text-center par-1em">Pilih metode pembayaran</h2>
                    <div class="d-flex card-horizontal-scroll" style="gap: 2rem; padding-inline: calc(15% / 2)">
                        <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;" v-for="bank, index in listBank">
                            <Field type="radio" :id="`lendeePaymentMethod_bca_` + index" required :value="bank.id" name="payment_method" v-model="form.payment_method_id" />
                            <label :for="`lendeePaymentMethod_bca_` + index" class="position-relative d-flex justify-content-center">
                                <img :src="bank.bank_logo" alt="" class="p-3">
                            </label>
                        </div>
                    </div>
                    <ErrorMessage name="payment_method" :class="'text-danger'" style="padding-inline: calc(15% / 2)" />
                </div>
                <div class="mt-5">
                    <h2 class="text-center par-1em">Informasi Pembayaran</h2>
                    <div class="mt-4 mb-5 row justify-content-between w-100 mx-auto">
                        <div class="bg-light rounded-20 d-flex flex-column justify-content-center col-sm-12 col-md-12 col-lg-6" style="height: 14rem; gap: .4rem;">
                            <h2 class="text-center pt-2 par-1em">Pembayaran Cicilan {{detail.count_payment_string}}</h2>
                            <h1 class="text-center font-weight-bold text-primary">Rp {{$toCurrency(detail.trx_unpaid?.nominal)}}</h1>
                            <div class="d-flex p-3 rounded-10 bg-white mx-auto flex-wrap remaining-time" style="gap: .4rem 1rem; width: fit-content;">
                                <h2 class="my-auto par-1em">Sisa Waktu</h2>
                                <vue-countdown :transform="$transformSlotProps" :time="detail.time_remaining_in_millisecond" v-slot="{ days, hours, minutes, seconds }" v-if="detail.time_remaining_in_millisecond">
                                    <h3 class="text-danger my-auto font-weight-bold par-1em" id="donationDueDateTimer"><span v-if="days">{{ days }} hari, </span>{{hours}}:{{minutes}}:{{seconds}}</h3>
                                </vue-countdown>
                            </div>
                        </div>
                        <div class="bg-secondary rounded-20 d-flex flex-column justify-content-center col-sm-12 col-md-12 col-lg-6" style="height: 14rem; gap: 1rem;">
                            <h2 class="text-center par-1em">Nomor Rekening</h2>
                            <h1 class="text-center font-weight-bold text-primary">{{detailBank?.account_number || '-'}}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-block mt-5">
                <div ref="uploadContent">
                    <form id="paymentDateForm" class="w-100 d-flex flex-column">
                        <label for="paymentDate" class="form-label text-center">Masukkan Tanggal Pembayaran</label>
                        <input type="date" class="form-control" id="paymentDate" required>
                    </form>
                </div>
                <div class="mt-5">
                <h2 class="text-center mb-3 par-1em">Upload Bukti Pembayaran</h2>
                    <div class="rounded-5 d-flex justify-content-center align-items-center py-5 w-100" style="border: 2px dashed var(--primary);">
                        <Field id="uploadProofOfPaymentButton" type="file" name="attachment_file" v-model="form.attachment" class="d-none" @change="previewFile" />
                        <div class="btn bg-secondary text-primary position-relative" v-if="!attachment_preview">
                            <label for="uploadProofOfPaymentButton" class="pb-0 mb-0 d-flex">
                                <span class="font-weight-medium">Upload</span>
                                <span class="material-symbols-rounded ml-2">
                                    publish
                                </span>
                            </label>
                        </div>
                        <div class="d-flex" style="gap: 10px" v-else>
                            <div class="btn bg-primary position-relative">
                                <a :href="attachment_preview" target="_blank" class="text-white">Lihat File</a>
                            </div>
                            <button type="button" @click="resetFile" class="btn bg-secondary position-relative">Hapus File</button>
                        </div>
                    </div>
                    <div class="mt-2">
                        <ErrorMessage name="attachment_file" :class="'text-danger'" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary font-weight-semibold w-100 mt-5" style="border: 2px solid var(--primary);">Kirim Bukti Pembayaran</button>
            </div>
        </Form>
    </main>
</template>
<script>
import { ApiCore } from '@/services/core';
import apiEnpoint from '@/services/api-endpoint';

import { Field, Form, ErrorMessage } from 'vee-validate';
import {string, object} from 'yup';

import {find} from 'lodash' 

export default {
    name: 'LoanInformationPayment',
    data() {
        return {
            form: {
                trx_id: '',
                payment_method_id: '',
                attachment: null,
                fetch: false
            },
            detail: {
                status_approval: 'belum',
                count_payment: 0
            },
            listBank: [],
            attachment_preview: '',
        }
    },
    components: {Field, Form, ErrorMessage},
    setup() {
        const schemaSubmit = object({
            payment_method: string().required('Pilih Metode Pembayaran'),
            attachment_file: string().required('Pilih Bukti Pembayaran'),
        });

        return {
            schemaSubmit,
        }
    },
    mounted() {
        this.fetchData()
    },
    computed: {
        detailBank() {
            return find(this.listBank, {id: this.form.payment_method_id})
        }
    },
    methods: {
        fetchData() {
            ApiCore.find(`${apiEnpoint.LOAN}/detail`, this.$route.params.id)
                    .then((result) => {
                        this.fetchPaymentMethod()
                        if (result.status) {
                            this.detail = result.data
                            this.form.trx_id = this.detail.trx_unpaid.id
                        }
                    })
                    .catch((error) => {
                        this.$toast.error(error.message)
                    })
        },
        fetchPaymentMethod() {
            ApiCore.get('payment-method').then((data) => {
                if (data.status)
                    this.listBank = data.data
                this.listBank.forEach(element => {
                    element.bank_logo = this.$getUrlImageBank(element.bank_logo)
                });
            }).catch((error) => {})
        },
        transformSlotProps(props) {
            const formattedProps = {};

            Object.entries(props).forEach(([key, value]) => {
                formattedProps[key] = value < 10 ? `0${value}` : String(value);
            });

            return formattedProps;
        },
        handleLinkToUploadReceiptOnClick() {
            this.$refs.uploadContent.scrollIntoView({ behavior: "smooth" });
        },
        async handleSubmit() {
            try {
                this.form.fetch = true
                const process = await ApiCore.postWithUpload(`${apiEnpoint.LOAN}/payment`, {
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
        previewFile(e) {
            const file = e.target.files[0];                
            var fsize = ((file.size/1024)/1024).toFixed(4); // MB
            
            if(fsize >= 5) {
                alert("File yang di upload tidak boleh lebih 5 MB");
            } else {
                this.attachment_preview = URL.createObjectURL(file);
                this.form.attachment = file;
            }
        },
        resetFile() {
            this.form.attachment = null
            this.attachment_preview = null
        }
    }
}
</script>