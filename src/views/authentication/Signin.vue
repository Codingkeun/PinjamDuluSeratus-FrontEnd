<template>
    <div class="page container-fluid p-0 position-absolute top-0 start-0 bg-white vh-100 vw-100 login-page">
        <a class="navbar-brand position-absolute start-0 mt-4" href="#" style="padding-left: calc(15% / 2); z-index: 2000">
            <img src="../../assets/images/full-white-logo.svg" style="width: 60%;"/>
        </a>
        <img class="ornament w-50" style="z-index: 1111; position: relative;" src="../../assets/images/background/register.svg" alt="">

        <div class="btn-group position-absolute top-0 mt-4" style="right: calc(15% / 2); z-index: 3000;">
            <router-link to="signup" class="btn rounded-10 d-flex align-items-center border-0 p-2 login-register-button" id="loginButton">
                Registrasi Akun
                <span class="material-symbols-outlined rounded-5 mx-2 login-register-arrow-icon">
                    keyboard_arrow_right
                </span>
            </router-link>
        </div>

        <div class="container-fluid row mx-auto mb-4 signin-container">
            <img src="../../assets/images/illustration/computer-login.svg" alt="" class="col-sm-12 col-md-12 col-lg-12 w-100" style="height: fit-content;">
            <form @submit.prevent="handleSubmit" class="col-sm-12 col-md-12 col-lg-12 d-flex flex-column form-login" style="gap: 1.5rem; padding-right: calc(15% / 2);">
                <h1 class="fs-1 fw-bold text-primary">Masuk ke Akun</h1>
                <div class="">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control" placeholder="Masukkan email" v-model="email" required>
                </div>
                <div class="">
                    <label for="password">Password</label>
                    <input type="password" id="email" class="form-control" placeholder="Masukkan password" v-model="password" required>
                </div>
                <button type="submit" class="btn btn-primary font-weight-semibold w-100" id="accountSignIn">Masuk</button>
            </form>
        </div>
    </div>
</template>
<script>
import { storeToRefs } from 'pinia'
import {useUserStore} from '../../store/user'
export default {
    name: 'Signin',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    setup() {
        const user = storeToRefs(useUserStore())

        return {
            user
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const signin = await useUserStore().login(this.email, this.password)
                if (signin.status) {
                    this.$router.push({ name: 'home' })
                    // this.$showNotification(response.message, 'success')
                } else {
                    alert(signin.message)
                    // this.$showNotification(response.message)
                }
            } catch(error) {
                alert(error)
            }
        }
    }
}
</script>