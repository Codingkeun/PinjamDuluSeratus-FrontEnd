<template>
    <div class="menu-area">
        <div class="background"></div>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="navbar-brand" href="#">
                    <img src="/logo.svg" />
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About Us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/donation" v-if="!$store.state.user?.logged_in">Donasi</router-link>
                        </li>
                    </ul>
                    <div class="btn-group" v-if="!$store.state.user?.logged_in">
                        <button class="btn btn-primary dropdown-toggle rounded-10" type="button"
                            data-toggle="dropdown" aria-expanded="false">
                            Masuk ke Akun
                        </button>
                        <div class="dropdown-menu rounded-10 border-0 container-card-shadow" style="">
                            <router-link class="dropdown-item" to="/signin/peminjam">Sebagai Peminjam <span class="material-symbols-outlined"></span></router-link>
                            <router-link class="dropdown-item" to="/signin/investor">Sebagai Investor <span class="material-symbols-outlined"></span></router-link>
                        </div>
                    </div>
                    <div class="btn-group" v-else>
                        <div class="mr-2">
                            <h5 class="par-1em">{{$store.state.user.fullname}}</h5>
                            <h6 class="font-weight-light opacity-75 par-0-8em text-capitalize">{{$store.state.user.role}}</h6>
                        </div>
                        <div class="profile-image rounded-circle bg-primary" style="width: 3rem; height: 3rem;">
                            <img src="@/assets/images/profile/user-profile.svg" alt="" class="w-100 h-100">
                        </div>
                        <div class="d-flex align-items-center">
                            <button class="border-0 dropdown-toggle" data-toggle="dropdown" aria-expanded="false" aria-label="profile"></button>
                            <ul class="dropdown-menu rounded-10 border-0 container-card-shadow" style="left: auto; right: 0">
                                <li><a class="dropdown-item" href="#"></a></li>
                                <li><router-link :to="'/dashboard/' + $store.state.user.role" class="dropdown-item">Dashboard</router-link></li>
                                <li><router-link to="/loan" class="dropdown-item" v-if="$store.state.user.role == 'peminjam'">Pinjaman</router-link></li>
                                <li><router-link to="/investment" class="dropdown-item" v-if="$store.state.user.role == 'investor'">Investasi Aktif</router-link></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><router-link class="dropdown-item" :to="'/account/' + $store.state.user.role">Akun</router-link></li>
                                <li><a class="dropdown-item" href="https://bit.ly/48n9SdA" target="_blank">User Guide</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><button type="button" @click="logout" class="dropdown-item">Log Out</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {

        }
    },
    methods: {
        async logout() {
            this.$swal
                .fire({
                    title: 'Apakah kamu yakin ?',
                    text: 'Kamu akan keluar dari aplikasi',
                    icon: 'warning',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'Ya',
                    confirmButtonColor: '#159895',
                    denyButtonColor: '#c0c0c0',
                    denyButtonText: 'Tidak',
                })
                .then(async (result) => {
                    if (result.isConfirmed) {
                        this.$store.getters.logout
                        window.location.href='/'
                    }
                });
        }
    }
}
</script>