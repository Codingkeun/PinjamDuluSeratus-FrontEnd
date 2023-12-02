<template>
    <div class="fluid-container footer bg-primary py-5 position-relative" style="padding-inline: calc(15% / 2); gap: clamp(2rem, calc(1vw + 3rem), 4rem)">
        <div class="footer-logo mx-auto my-auto">
            <img src="../assets/images/full-white-logo.svg" alt="" class="w-100">
            <h4 class="text-light border p-2 text-center rounded-10 mt-4 w-100" style="font-size: 1rem;">Universitas Padjajaran</h4>
        </div>
        <div class="footer-pages-links d-flex flex-column" style="gap: 2rem">
            <h2 class="text-light font-weight-semibold">Pages</h2>
            <a href="#" class="text-light">Home</a>
            <div class="w-100 bg-light" style="height: 1px;"></div>
            <a href="peminjam_dashboard.html" class="text-light">Dashboard</a>
            <div class="w-100 bg-light" style="height: 1px;"></div>
            <a href="peminjam_pinjaman.html" class="text-light">Pinjaman</a>
            <div class="w-100 bg-light" style="height: 1px;"></div>
            <a href="#" class="text-light">About Us</a>
        </div>
        <div class="footer-members-links d-flex flex-column" style="gap: 2rem">
            <h2 class="text-light font-weight-semibold">Members</h2>
            <a href="#" class="text-light">Arinda Puspa Dewi</a>
            <div class="w-100 bg-light" style="height: 1px;"></div>
            <a href="#" class="text-light">Cecep Rokani</a>
            <div class="w-100 bg-light" style="height: 1px;"></div>
            <a href="#" class="text-light">Cecep Sutisna</a>
            <div class="w-100 bg-light" style="height: 1px;"></div>
            <a href="#" class="text-light">Moh Ari Nurhuda Aprilyansyah</a>
            <div class="w-100 bg-light" style="height: 1px;"></div>
            <a href="#" class="text-light">Riana Ratna</a>
        </div>
        <p class="text-light text-center footer-copyright" style="font-size: .8rem;">Copyright &#169; 2023 PinjamDuluSeratus. All right reserved.</p>
        <div class="footer-background position-absolute opacity-50" style="left: 0; bottom: 0;">
            <img src="../assets/images/background/footer-background.svg" alt="">
        </div>
        <div class="footer-background position-absolute opacity-50" style="right: 0; top: 0; rotate: 180deg;">
            <img src="../assets/images/background/footer-background.svg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {

        }
    }
}
</script>