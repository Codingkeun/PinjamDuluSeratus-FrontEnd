<template>
    <main class="mt-5 mb-5">
        <button @click="$router.push(`/account/investor`)" class="btn bg-white text-primary font-weight-semibold d-flex align-items-center pl-1 mb-3" style="gap: .5rem; margin-left: calc(15% / 2)">
            <span class="material-symbols-rounded" aria-hidden="true">
                keyboard_arrow_left
            </span>
            Kembali
        </button>
        <Form :validation-schema="schemaSubmit" @submit="handleSubmit" class="mb-5 w-100 d-flex flex-column" style="gap: 3rem;">
            <h1 class="font-weight-semibold" style="padding-inline: calc(15% / 2);">Top Up Saldo</h1>
            <div class="d-flex flex-column" style="gap: 1rem;">
                <Field type="hidden" name="nominal" v-model="form.nominal" />
                <h2 class="text-center font-weight-semibold par-1-2em">Pilih nominal top up</h2>
                <div class="amountInputByRadioElement d-flex card-horizontal-scroll" style="gap: 2rem; padding-inline: calc(15% / 2);">
                    <label :for="`tagAmount_${index}`" class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;" v-for="amount, index in listAmount" @click="changeTypeTopUp('tag')">
                        <input type="radio" name="topUpAmount" :id="`tagAmount_${index}`" @click="form.nominal=amount" :disabled="typeTopUp != 'tag'">
                        <div class="position-relative d-flex justify-content-center font-weight-semibold par-1-2em" :class="{'text-muted': typeTopUp != 'tag'}" style="transform: translateY(50%);">
                            Rp {{$toCurrency(amount)}}
                        </div>
                    </label>
                </div>
                <div style="padding-inline: calc(15% / 2); gap: 2rem;" v-if="typeTopUp == 'tag'">
                    <ErrorMessage name="nominal" class="text-danger" />
                </div>
                <div class="d-flex justify-content-between" style="padding-inline: calc(15% / 2); gap: 2rem;">
                    <div class="divider my-auto"></div>
                    <div>atau</div>
                    <div class="divider my-auto"></div>
                </div>
                <label class="w-50 mx-auto" @click="changeTypeTopUp('input')" for="topUpWrittenAmount" >
                    <div class="input-group mb-3">
                        <span class="input-group-text border-right-0" style="border-top-right-radius: 0; border-bottom-right-radius: 0;">Rp</span>
                        <input type="number" placeholder="Masukkan nominal top-up" class="form-control" id="topUpWrittenAmount" v-model="inputNominal" @keyup="form.nominal=inputNominal" :readonly="typeTopUp == 'tag'">
                    </div>
                    <ErrorMessage v-if="typeTopUp == 'input'" name="nominal" class="text-danger" />
                </label>
            </div>
            <div class="d-flex flex-column" style="gap: 1rem;">
                <h2 class="text-center font-weight-semibold par-1-2em">Pilih metode pembayaran</h2>
                <div class="d-flex card-horizontal-scroll" style="gap: 2rem; padding-inline: calc(15% / 2);">
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;" v-for="bank, index in listBank" :key="index">
                        <Field type="radio" name="bank_name" :id="`topUpPaymentMethod_${index}`" :value="bank.id" v-model="form.payment_method_id" />
                        <label :for="`topUpPaymentMethod_${index}`" class="position-relative d-flex justify-content-center">
                            <img :src="bank.bank_logo" :alt="`Bank ${bank.name}`" class="p-3">
                        </label>
                    </div>
                </div>
                <div style="padding-inline: calc(15% / 2); gap: 2rem;">
                    <ErrorMessage class="text-danger" name="bank_name" />
                </div>
            </div>
            <button type="submit" class="btn btn-primary font-weight-semibold w-75 mx-auto">Lanjut</button>
        </form>
    </main>
</template>
<script>
import { vMaska } from "maska"

import { Field, Form, ErrorMessage } from 'vee-validate';
import {string, number, object, array} from 'yup';

import { ApiCore } from '@/services/core';
import apiEnpoint from '@/services/api-endpoint';
    
export default {
    name: 'TopUpBalance',
    data() {
        return {
            inputNominal: null,
            typeTopUp: 'tag',
            listBank: [],
            form: {
                nominal: null,
                payment_method_id: '',
            },
            listAmount: [
                30000,
                50000,
                100000,
                200000,
                300000,
                500000
            ]
        }
    },
    directives: { maska: vMaska },
    setup() {
        const schemaSubmit = object({
            nominal: number().nullable().min(10000, 'Jumlah nominal top up minimal Rp. 10,000.00').required('Masukan jumlah nominal top up'),
            bank_name: string().required('Silahkan pilih bank'),
        });

        return {
            schemaSubmit,
        }
    },
    components: {Field, Form, ErrorMessage},
    mounted() {
        this.fetchPaymentMethod()
    },
    methods: {
        changeTypeTopUp(type) {
            if (type == 'input')
                this.form.nominal = 0
            else
                this.inputNominal = null
            this.typeTopUp = type
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
        async handleSubmit() {
            try {
                this.form.fetch = true
                const process = await ApiCore.store(`${apiEnpoint.INVESMENT}/topup`, {
                    ...this.form
                })
                this.form.fetch = false
                if (process.status) {
                    this.$toast.success(process.message);
                    this.$router.push({ name: 'account.investor' })
                } else {
                    this.$toast.error(process.message);
                }
            } catch(error) {
                this.form.fetch = false
                this.$toast.error(error);
            }
        },
    }
}
</script>