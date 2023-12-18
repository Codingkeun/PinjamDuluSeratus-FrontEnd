<template>
    <div class="donation-nominal-area mt-4 mb-5" style="padding-inline: calc(15% / 2);">
        <Form :validation-schema="schemaSubmit" class="d-flex flex-column" style="gap: 3rem;" @submit="handleSubmit">
            <h1 for="donationAmount" class="text-center font-weight-semibold m-0 par-1em">Masukkan identitas diri</h1>
            <div class="d-flex flex-column form-identity p-5 rounded-10 container-card-shadow" style="gap: 2rem; padding-inline: calc(15% / 2);">
                <div class="">
                    <label for="name">Nama</label>
                    <Field v-model="form.name" name="name" type="text" id="name" class="form-control" placeholder="Masukkan nama" />
                    <ErrorMessage name="name" :class="'text-center text-danger'" />
                </div>
                <div class="">
                    <label for="email">Email</label>
                    <Field v-model="form.email" name="email" id="email" class="form-control" placeholder="Masukkan email" />
                    <ErrorMessage name="email" :class="'text-center text-danger'" />
                </div>
                <div class="">
                    <label for="phone">Nomor HP</label>
                    <Field v-model="form.phone" name="phone" type="text" id="phone" class="form-control" placeholder="Masukkan nomor HP" />
                    <ErrorMessage name="phone" :class="'text-center text-danger'" />
                </div>
            </div>
            <div class="button-group d-flex flex-column" style="gap: 2rem;">
                <button type="button" @click="$parent.currentTabComponent = 'StepOne'" class="btn btn-primary-outline w-100 font-weight-semibold">Kembali</button>
                <button type="submit" class="btn btn-primary w-100 font-weight-semibold">Donasi</button>
            </div>
        </form>
    </div>
</template>
<script>
import { vMaska } from "maska"

import { Field, Form, ErrorMessage } from 'vee-validate';
import {string, number, object, array} from 'yup';

import { ApiCore } from '@/services/core';
import apiEnpoint from '@/services/api-endpoint';

export default {
    name: 'DonationStepTwo',
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
            }
        }
    },
    directives: { maska: vMaska },
    setup() {
        const schemaSubmit = object({
            name: string().required('Masukan nama'),
            email: string().email('Masukan email yang valid').required('Masukan email'),
            phone: string().required('Masukan nomor handphone'),
        });

        return {
            schemaSubmit,
        }
    },
    components: {Field, Form, ErrorMessage},
    methods: {
        submit() {
            this.$emit("onHandleSubmit", {form: this.form});
        },
        async handleSubmit() {
            try {
                this.form.fetch = true
                const process = await ApiCore.store(`/donasi`, {
                    ...this.form
                })
                this.form.fetch = false
                if (process.status) {
                    this.$toast.success(process.message);
                    this.$router.push({ name: 'loan' })
                    submit();
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