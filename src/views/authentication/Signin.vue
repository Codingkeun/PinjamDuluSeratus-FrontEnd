<template>
    <div class="page container-fluid p-0 position-absolute top-0 start-0 bg-white vh-100 vw-100 login-page">
        <a class="navbar-brand position-absolute start-0 mt-4" href="#" style="padding-left: calc(15% / 2); z-index: 2000">
            <img src="@/assets/images/full-white-logo.svg" style="width: 60%;"/>
        </a>
        <img class="ornament w-50" style="z-index: 1111; position: relative;" src="@/assets/images/background/register.svg" alt="">

        <div class="btn-group position-absolute top-0 mt-4" style="right: calc(15% / 2); z-index: 3000;">
            <router-link :to="'/signup/' + $route.params.role" class="btn rounded-10 d-flex align-items-center border-0 p-2 login-register-button" id="loginButton">
                Registrasi Akun
                <span class="material-symbols-outlined rounded-5 mx-2 login-register-arrow-icon">
                    keyboard_arrow_right
                </span>
            </router-link>
        </div>

        <div class="container-fluid row mx-auto mb-4 signin-container">
            <img src="@/assets/images/illustration/computer-login.svg" alt="" class="col-sm-12 col-md-12 col-lg-12 w-100" style="height: fit-content;">
            <Form :validation-schema="schema" @submit="handleSubmit" class="col-sm-12 col-md-12 col-lg-12 d-flex flex-column form-login" style="gap: 1.5rem; padding-right: calc(15% / 2);">
                <h1 class="fs-1 fw-bold text-primary">Masuk ke Akun</h1>
                <div class="">
                    <label for="email">Email</label>
                    <Field type="email" name="email" id="email" class="form-control mb-2" placeholder="Masukkan email" v-model="email" />
                    <ErrorMessage name="email" :class="'text-danger'" />
                </div>
                <div class="">
                    <label for="password">Password</label>
                    <Field type="password" name="password" id="password" class="form-control mb-2" placeholder="Masukkan password" v-model="password" />
                    <ErrorMessage name="password" :class="'text-danger'" />
                </div>
                <button type="submit" class="btn btn-primary font-weight-semibold w-100" style="max-width: 100%" :disabled="fetch"><span v-if="fetch">Loading</span><span v-else>Masuk</span></button>
            </form>
        </div>
    </div>
</template>
<script>
import apiEndpoint from '@/services/api-endpoint'
import {ApiCore} from '@/services/core'

import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
    name: 'Signin',
    data() {
        return {
            loader: null,
            email: '',
            password: '',
            role: this.$route.params.role,
            fetch: false,
        }
    },
    setup() {
        const schema = yup.object({
            email: yup.string().email('Masukan email yang valid').required('Masukan email'),
            password: yup.string().required('Masukan password'),
        });

        return {
            schema
        }
    },
    components: {Field, Form, ErrorMessage},
    methods: {
        async handleSubmit() {
            try {
                this.fetch = true
                const signin = await ApiCore.store(`${apiEndpoint.AUTHENTICATION}/signin`, {email: this.email, password: this.password, role: this.role})
                this.fetch = false
                if (signin.status) {
                    this.$toast.success(signin.message);
                    localStorage.removeItem('token')
                    localStorage.setItem('token', signin.user.key)
                    setTimeout(() => {
                        window.location.href = '/'
                    }, 1000);
                } else {
                    this.$toast.error(signin.message);
                }
            } catch(error) {
                this.fetch = false
                this.$toast.error(error);
            }
        }
    }
}
</script>