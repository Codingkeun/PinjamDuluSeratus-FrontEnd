<template>
    <div class="page container-fluid p-0 position-absolute top-0 start-0 bg-white vh-100 vw-100 register-page">
        <a class="navbar-brand position-absolute start-0 mt-4" href="#" style="padding-left: calc(15% / 2)">
            <img src="@/assets/images/full-white-logo.svg" style="width: 60%;"/>
        </a>
        <img class="ornament w-50" src="@/assets/images/background/register.svg" alt="">

        <div class="btn-group position-absolute top-0 mt-4" style="right: calc(15% / 2); z-index: 999;">
            <router-link :to="'/signin/' + $route.params.role" class="btn rounded-10 d-flex align-items-center border-0 p-2 login-register-button" id="loginButton">
                Masuk ke Akun
                <span class="material-symbols-outlined rounded-5 mx-2 login-register-arrow-icon">
                    keyboard_arrow_right
                </span>
            </router-link>
        </div>

        <div class="container-fluid row mx-auto pb-4 register-container">
            <img src="@/assets/images/illustration/computer-login.svg" alt="" class="col-sm-12 col-md-12 col-lg-12 w-100" style="height: fit-content;">
            <Form :validation-schema="schema" @submit="handleSubmit" class="col-md-12" style="gap: 1.5rem; padding-right: calc(15% / 2);">
                <div class="d-flex flex-column form-register mb-3" style="gap: 10px">
                    <h1 class="fs-1 fw-bold text-primary">Registrasi Akun</h1>
                    <div class="mb-2">
                        <label for="name">Nama</label>
                        <Field type="text" name="name" class="form-control" placeholder="Masukkan nama" v-model="form.name" />
                        <ErrorMessage name="name" :class="'text-danger'" />
                    </div>
                    <div class="mb-2">
                        <label for="npm">NPM</label>
                        <Field type="text" name="npm" class="form-control" placeholder="Masukkan NPM" v-model="form.npm" />
                        <ErrorMessage name="npm" :class="'text-danger'" />
                    </div>
                    <div class="mb-2">
                        <label for="phone">Nomor HP</label>
                        <Field type="text" name="phone" class="form-control" placeholder="Masukkan nomor HP" v-model="form.phone" min="0" />
                        <ErrorMessage name="phone" :class="'text-danger'" />
                    </div>
                    <div class="mb-2">
                        <label for="email">Email</label>
                        <Field type="email" name="email" class="form-control" placeholder="Masukkan email" v-model="form.email" />
                        <ErrorMessage name="email" :class="'text-danger'" />
                    </div>
                    <div class="mb-2">
                        <label for="password">Password</label>
                        <Field type="password" name="password" class="form-control" placeholder="Masukkan password" v-model="form.password" />
                        <ErrorMessage name="password" :class="'text-danger'" />
                    </div>
                    <div class="mb-2">
                        <label for="faculty">Fakultas</label>
                        <Field type="text" name="faculty" class="form-control" placeholder="Masukkan fakultas" v-model="form.faculty" @input="form.faculty=$event.target.value.toUpperCase()" />
                        <ErrorMessage name="faculty" :class="'text-danger'" />
                    </div>
                    <div class="mb-2">
                        <label for="major">Jurusan</label>
                        <Field type="text" name="major" class="form-control" placeholder="Masukkan jurusan" v-model="form.major" />
                        <ErrorMessage name="major" :class="'text-danger'" />
                    </div>
                    <div class="mb-2">
                        <label for="class">Kelas</label>
                        <Field type="text" name="class" class="form-control" placeholder="Masukkan kelas" v-model="form.class" />
                        <ErrorMessage name="class" :class="'text-danger'" />
                    </div>
                    <div class="mb-2">
                        <label for="profile">Foto profil</label>
                        <Field type="file" name="profile" class="form-control" v-model="form.foto_profile" />
                        <ErrorMessage name="profile" :class="'text-danger'" />
                    </div>
                    <div class="mb-2">
                        <label for="foto_ktm">Foto KTM</label>
                        <Field type="file" name="foto_ktm" class="form-control" v-model="form.foto_ktm" />
                        <ErrorMessage name="foto_ktm" :class="'text-danger'" />
                    </div>
                    <div class="mb-2">
                        <label for="foto_selfie">Foto diri dan KTM secara bersamaan</label>
                        <Field type="file" name="foto_selfie" class="form-control" v-model="form.foto_selfie" />
                        <ErrorMessage name="foto_selfie" :class="'text-danger'" />
                    </div>
                </div>
                <div class="d-block">
                    <button type="submit" class="btn btn-block btn-primary font-weight-semibold" :disabled="form.fetch"><span v-if="form.fetch">Loading</span><span v-else>Registrasi</span></button>
                </div>
            </Form>
        </div>
    </div>
</template>
<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

import { ApiCore } from '@/services/core';
import apiEnpoint from '@/services/api-endpoint';

export default {
    name: 'Register',
    data() {
        return {
            form: {
                name: '',
                npm: '',
                phone: '',
                email: '',
                password: '',
                faculty: '',
                major: '',
                class: '',
                profile: '',
                foto_ktm: '',
                foto_profile: '',
                foto_selfie: '',
                role: this.$route.params.role
            }
        }
    },
    setup() {
        const schema = yup.object({
            npm: yup.string().required('Masukan npm'),
            name: yup.string().required('Masukan nama'),
            phone: yup.string().required('Masukan nomor handphone'),
            email: yup.string().email('Masukan email yang valid').required('Masukan email'),
            password: yup.string().required('Masukan password'),
            faculty: yup.string().required('Masukan fakultas'),
            major: yup.string().required('Masukan jurusan'),
            class: yup.string().required('Masukan kelas'),
            profile: yup.string().required('Pilih poto profile'),
            foto_ktm: yup.string().required('Pilih berkas KTM'),
            foto_selfie: yup.string().required('Pilih foto diri beserta KTM'),
        });

        return {
            schema
        }
    },
    components: {Field, Form, ErrorMessage},
    methods: {
        async handleSubmit() {
            try {
                this.form.fetch = true
                const register = await ApiCore.postWithUpload(`${apiEnpoint.AUTHENTICATION}/signup`, {
                    ...this.form
                })
                this.form.fetch = false
                if (register.status) {
                    this.$toast.success(register.message);
                    setTimeout(() => {
                        this.$router.push({ name: 'signin' })
                    }, 1000);
                } else {
                    this.$toast.error(register.message);
                }
            } catch(error) {
                this.form.fetch = false
                this.$toast.error(error);
            }
        }
    }
}
</script>