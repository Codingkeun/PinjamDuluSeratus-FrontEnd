<template>
    <main class="mt-5 mb-5" style="padding-inline: calc(15% / 2)">
        <button type="button" @click="$router.push(`/topup-balance/history`)" class="btn bg-white text-primary font-weight-semibold d-flex align-items-center pl-1 mb-3" style="gap: .5rem;">
            <span class="material-symbols-rounded" aria-hidden="true">
                keyboard_arrow_left
            </span>
            Kembali
        </button>
        <div class="d-flex justify-content-between align-items-center flex-wrap" style="gap: 2rem;">
            <h1 class="font-weight-semibold">Detail Pembayaran Top-Up</h1>
            <button type="button" @click="handleLinkToUploadReceiptOnClick" class="btn bg-white text-primary font-weight-semibold d-flex align-items-center" style="height: 44px; border: 2px solid var(--primary);">
                <span>Upload Bukti Pembayaran</span>
                <span class="material-symbols-rounded ml-2" aria-hidden="true">
                    arrow_downward
                </span>
            </button>
        </div>
        <div class="mt-5 top-up-detail">
            <div class="mt-4 mb-5 row justify-content-between w-100 mx-auto">
                <div class="bg-light rounded-20 d-flex flex-column justify-content-center col-sm-12 col-md-12 col-lg-6" style="height: 14rem; gap: .4rem;">
                    <h1 class="text-center font-weight-bold text-primary">Rp 200,000</h1>
                    <div class="d-flex p-3 rounded-10 bg-white mx-auto flex-wrap remaining-time" style="gap: .4rem 1rem; width: fit-content;">
                        <h2 class="my-auto par-1em">Sisa Waktu</h2>
                        <vue-countdown :transform="$transformSlotProps" :time="detail.time_remaining_in_millisecond" v-slot="{ days, hours, minutes, seconds }" v-if="detail.time_remaining_in_millisecond">
                            <h3 class="text-danger my-auto font-weight-bold par-1em" id="donationDueDateTimer"><span v-if="days > 0">{{ days }} hari, </span>{{hours}}:{{minutes}}:{{seconds}}</h3>
                        </vue-countdown>
                    </div>
                </div>
                <div class="bg-secondary rounded-20 d-flex flex-column justify-content-center col-sm-12 col-md-12 col-lg-6" style="height: 14rem; gap: 1rem;">
                    <h2 class="text-center par-1em">Nomor Rekening</h2>
                    <h1 class="text-center font-weight-bold text-primary">{{detail.bank_name}} - {{detail.payment_method_account_number}}</h1>
                </div>
            </div>
        </div>
        <Form :validation-schema="schemaSubmit" @submit="handleSubmit" class="d-block mt-5" id="uploadtopUpReceiptSection">
            <div ref="uploadContent">
                <div id="topUpPaymentDateForm" class="w-100 d-flex flex-column mb-3">
                    <label for="topUpPaymentDate" class="form-label text-center">Masukkan Tanggal Pembayaran</label>
                    <Field name="date" v-model="form.date" type="hidden" />
                    <flat-pickr class="form-control bg-white" v-model="form.date" placeholder="Choose date" :config="configDate"></flat-pickr>
                </div>
                <ErrorMessage name="date" :class="'text-danger'" />
            </div>
            <div class="mt-5">
            <h2 class="text-center mb-3 par-1em">Upload Bukti Pembayaran</h2>
                <div class="rounded-5 d-flex justify-content-center align-items-center py-5 w-100" style="border: 2px dashed var(--primary);">
                    <Field id="uploadProofOfPaymentButton" type="file" name="attachment" v-model="form.attachment" class="d-none" @change="previewFile" ref="attachment_file" />
                    <div class="btn bg-secondary text-primary position-relative d-flex align-items-center" v-if="!attachment_preview">
                        <label for="uploadProofOfPaymentButton" class="pb-0 mb-0 d-flex align-items-center">
                            <span class="font-weight-medium">Upload</span>
                            <span class="material-symbols-rounded ml-2">
                                upload
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
                    <ErrorMessage name="attachment" :class="'text-danger'" />
                </div>
            </div>
            <button type="submit" class="btn btn-primary font-weight-semibold w-100 mt-5" style="border: 2px solid var(--primary);">Kirim Bukti Pembayaran</button>
        </Form>
    </main>
    </template>
    <script>
    import { Field, Form, ErrorMessage } from 'vee-validate';
    import {string, object} from 'yup';
    
    import { ApiCore } from '@/services/core';
    import apiEnpoint from '@/services/api-endpoint';
    export default {
        name: "TransferConfirmation",
        data() {
            return {
                attachment_preview: '',
                detail: {},
                form: {
                    trx_id: this.$route.params.id,
                    date: null,
                    attachment: null
                },
                configDate: {
                    altInput: true,
                    altFormat: "j F Y H:i",
                    dateFormat: "Y-m-d H:i",
                    enableTime: true,
                    time_24hr: true
                },
            }
        },
        components: {Field, Form, ErrorMessage},
        setup() {
            const schemaSubmit = object({
                date: string().required('Pilih Tanggal Pembayaran'),
                attachment: string().required('Pilih Bukti Pembayaran'),
            });

            return {
                schemaSubmit,
            }
        },
        mounted() {
            this.fetchData()
        },
        methods: {
            handleLinkToUploadReceiptOnClick() {
                this.$refs.uploadContent.scrollIntoView({ behavior: "smooth" });
            },
            fetchData() {
                ApiCore.get(`${apiEnpoint.INVESMENT}/topup/detail/${this.form.trx_id}`).then((data) => {
                    if (data.status)
                        this.detail = data.data
                }).catch((error) => {})
            },
            async handleSubmit() {
                try {
                    this.form.fetch = true
                    const process = await ApiCore.postWithUpload(`${apiEnpoint.INVESMENT}/topup/confirm`, {
                        ...this.form
                    })
                    this.form.fetch = false
                    if (process.status) {
                        this.$toast.success(process.message);
                        this.$router.push({ name: 'topup.history' })
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
                this.$refs.attachment_file.value = null
            }
        }
    }
    </script>