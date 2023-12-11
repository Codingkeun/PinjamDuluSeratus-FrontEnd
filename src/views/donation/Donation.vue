<template>
    <div class="donation-page-area row mt-4 mb-5" style="padding-inline: calc(15% / 2);">
        <img src="@/assets/images/illustration/thank-you.png" alt="" class="w-100 h-100 col-md-5">
        <div class="col-md-7 my-auto">
            <h1 class="font-weight-semibold">Donasi</h1>
            <p>Ayo berdonasi</p>
            <div class="d-flex" style="gap: 1rem">
                <span class="material-symbols-rounded text-danger">
                    close
                </span>
                <p>Donasi yang terkumpul tidak akan digunakan untuk keperluan pribadi dari pihak <span class="text-primary font-weight-semibold">Pinjam Dulu Seratus</span></p>
            </div>
            <div class="d-flex" style="gap: 1rem">
                <span class="material-symbols-rounded text-primary">
                    favorite
                </span>
                <p>Donasi yang terkumpul akan digunakan untuk membantu keperluan dana darurat dari para mahasiswa yang mendaftar sebagai peminjam di <span class="text-primary font-weight-semibold">Pinjam Dulu Seratus</span></p>
            </div>
            <router-link to="donation-send" class="btn btn-primary w-100 font-weight-semibold d-flex align-items-center justify-content-center" id="makeDonationButton">Lakukan Donasi</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Donation',
    data() {
        return {
            
        }
    }
}
</script>