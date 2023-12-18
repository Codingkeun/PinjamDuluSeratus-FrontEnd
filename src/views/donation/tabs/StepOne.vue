<template>
    <div class="donation-nominal-area mt-4 mb-5">
        <Form :validation-schema="schemaNext" class="d-flex flex-column" style="gap: 3rem;" @submit.prevent="submit">
            <div class="w-100 d-flex flex-column" style="padding-inline: calc(15% / 2); gap: 1rem;">
                <label for="donationAmount" class="text-center font-weight-semibold" aria-hidden="true">Masukkan jumlah donasi</label>
                <Field type="text" v-model="form.nominal" name="nominal" class="d-none" />
                <div class="input-group d-flex mx-auto">
                    <span class="input-group-text border-right-0" style="border-top-right-radius: 0; border-bottom-right-radius: 0;">Rp</span>
                    <input v-maska 
                        placeholder="Masukkan jumlah donasi"
                        class="form-control"
                        id="donationAmount" 
                        @maska="setNominal"
                        data-maska="9,99#"
                        data-maska-tokens="9:[0-9]:repeated"
                        data-maska-reversed/>
                </div>
                <ErrorMessage name="nominal" :class="'text-center text-danger'" />
            </div>
            <div class="d-flex flex-column w-100" style="gap: 1rem;">
                <h1 class="font-weight-semibold text-center par-1em" tabindex="0">Pilih metode pembayaran</h1>
                <div class="d-flex card-horizontal-scroll" style="gap: 2rem; padding-inline: calc(15% / 2);">
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;" v-for="bank, index in listBank" :key="index">
                        <Field type="radio" name="paymentMethod" :id="`bank_${index}`" :value="bank.bank_name" v-model="form.bank"/>
                        <label :for="`bank_${index}`" class="position-relative d-flex justify-content-center" :aria-label="`Bank ${index}`">
                            <img :src="bank.bank_logo" :alt="`Bank ${bank.bank_name}`" class="p-3">
                        </label>
                    </div>
                </div>
                <ErrorMessage name="bank" :class="'text-danger'" style="padding-inline:calc(15% / 2)" />
            </div>
            <button type="submit" class="btn btn-primary font-weight-semibold w-75 mx-auto">Lanjut</button>
        </Form>
    </div>
</template>
<script>
import { vMaska } from "maska"

import { Field, Form, ErrorMessage } from 'vee-validate';
import {string, number, object, array} from 'yup';

import { ApiCore } from '@/services/core';
import apiEnpoint from '@/services/api-endpoint';

export default {
    name: 'DonationStepOne',
    data() {
        return {
            form: {
                nominal: null,
                bank: '',
            },
            listBank: []
        }
    },
    directives: { maska: vMaska },
    setup() {
        const schemaNext = object({
            nominal: number().nullable().min(10000, 'Jumlah donasi minimal Rp. 10,000.00').required('Masukan jumlah donasi'),
            bank: string().required('Silahkan pilih bank'),
        });

        return {
            schemaNext,
        }
    },
    components: {Field, Form, ErrorMessage},
    mounted() {
        this.fetchPaymentMethod()
    },
    methods: {
        submit() {
            this.$emit("onHandleSubmit", {form: this.form});
        },
        setNominal(data) {
            this.form.nominal=data.detail.unmasked
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
    }
}
</script>