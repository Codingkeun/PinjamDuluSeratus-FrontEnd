<template>
    <div class="page container-fluid p-5 position-absolute top-0 start-0 bg-white notfound-container">
        <div class="d-flex justify-content-center notfound-section">
            <div class="d-flex flex-wrap align-items-center">
                <img src="../assets/images/illustration/404-error.svg" alt="404 Error" class="notfound-image w-75 mx-auto">
                <div class="d-flex flex-column mx-auto">
                    <div class="display-1 font-weight-semibold text-primary">Oops!</div>
                    <div class="text-muted par-1em mb-3" style=" max-width: 100%;">Halaman yang Anda cari tidak ada atau terjadi kesalahan lain</div>
                    <router-link to="/" class="btn btn-sm btn-primary px-3" style="width: fit-content;">Kembali Ke Home</router-link>
                </div>
            </div>
        </div>
    </div>
</template>