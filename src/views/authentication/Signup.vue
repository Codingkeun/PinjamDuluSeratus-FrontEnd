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
            <form class="col-sm-12 col-md-12 col-lg-12 d-flex flex-column form-register" style="gap: 1.5rem; padding-right: calc(15% / 2);">
                <h1 class="fs-1 fw-bold text-primary">Registrasi Akun</h1>
                <div class="">
                    <label for="name">Nama</label>
                    <input type="text" id="name" class="form-control" placeholder="Masukkan nama" required>
                </div>
                <div class="">
                    <label for="npm">NPM</label>
                    <input type="npm" id="npm" class="form-control" placeholder="Masukkan NPM" required>
                </div>
                <div class="">
                    <label for="phone">Nomor HP</label>
                    <input type="text" id="phone" class="form-control" placeholder="Masukkan nomor HP" required>
                </div>
                <div class="">
                    <label for="email">Email</label>
                    <input type="text" id="email" class="form-control" placeholder="Masukkan email" required>
                </div>
                <div class="">
                    <label for="password">Password</label>
                    <input type="password" id="email" class="form-control" placeholder="Masukkan password" required>
                </div>
                <div class="">
                    <label for="faculty">Fakultas</label>
                    <input type="text" id="faculty" class="form-control" placeholder="Masukkan fakultas" required>
                </div>
                <div class="">
                    <label for="major">Jurusan</label>
                    <input type="text" id="major" class="form-control" placeholder="Masukkan jurusan" required>
                </div>
                <div class="">
                    <label for="class">Kelas</label>
                    <input type="text" id="class" class="form-control" placeholder="Masukkan kelas" required>
                </div>
                <div class="">
                    <label for="profile">Foto profil</label>
                    <input type="file" id="profile" class="form-control" required>
                </div>
                <div class="">
                    <label for="ktm">Foto KTM</label>
                    <input type="file" id="ktm" class="form-control" required>
                </div>
                <div class="">
                    <label for="face-and-ktm">Foto diri dan KTM secara bersamaan</label>
                    <input type="file" id="face-and-ktm" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary font-weight-semibold w-100" id="accountRegister">Registrasi</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Register',
    data() {
        return {
            
        }
    }
}
</script>