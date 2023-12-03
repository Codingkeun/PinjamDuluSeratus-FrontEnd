<template>
    <div class="menu-area">
        <div class="background"></div>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src="/logo.svg" />
                </a>
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
                            <router-link class="nav-link" to="/donation">Donasi</router-link>
                        </li>
                    </ul>
                    <div class="btn-group">
                        <button class="btn btn-primary dropdown-toggle rounded-10" type="button"
                            data-toggle="dropdown" aria-expanded="false">
                            Masuk ke Akun
                        </button>
                        <div class="dropdown-menu rounded-10 border-0 container-card-shadow" style="">
                            <router-link class="dropdown-item" to="signin">Sebagai Peminjam <span class="material-symbols-outlined"></span></router-link>
                            <router-link class="dropdown-item" to="signin">Sebagai Investor <span class="material-symbols-outlined"></span></router-link>
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
    }
}
</script>