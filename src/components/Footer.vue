<template>
    <div class="container-fluid footer position-relative d-flex flex-column" style="padding-inline: calc(15% / 2); gap: 1rem; overflow: hidden;">
        <div class="footer-logo d-flex justify-content-center align-items-center" style="gap: 1rem;">
            <div class="appLogo">
                <img src="../assets/images/full-white-logo.svg" alt="" class="w-100">
            </div>
            <span class="material-symbols-rounded text-white" style="font-size: 3rem; opacity: .5">
                close
            </span>
            <div class="universityLogo">
                <img src="../assets/images/icon/university-logo.svg" alt="">
            </div>
        </div>
        <div class="footer-contact-info d-flex flex-wrap justify-content-between" style="column-gap: 1rem;">
            <div class="footer-location-info d-flex">
                <span class=" mr-2 material-symbols-rounded text-white par-1em">
                    location_on
                </span>
                <p class="text-white par-0-8em">Lorem ipsum dolor sit emet</p>
            </div>
            <div class="footer-mail-info d-flex">
                <span class=" mr-2 material-symbols-rounded text-white par-1em">
                    mail
                </span>
                <p class="text-white par-0-8em">pinjamduluseratus@gmail.com</p>
            </div>
            <div class="footer-phone-info d-flex">
                <span class=" mr-2 material-symbols-rounded text-white par-1em">
                    call
                </span>
                <p class="text-white par-0-8em">061-234567</p>
            </div>
        </div>
        <div class="divider bg-white"></div>
        <div class="footer-bottom-section d-flex justify-content-between flex-wrap" style="margin-bottom: 1rem; column-gap: 1rem; row-gap: .5rem;">
            <p class="text-light footer-copyright par-0-8em my-auto">Copyright &#169; 2023 PinjamDuluSeratus. All right reserved.</p>
            <div class="footer-social-media d-flex my-auto" style="gap: 1rem;">
                <a href="">
                    <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/twitter--v1.png" alt=""/>
                </a>
                <a href="">
                    <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/facebook-new.png" alt=""/>
                </a>
                <a href="">
                    <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/instagram-new.png" alt=""/>
                </a>
            </div>
        </div>
        <img src="../assets/images/background/footer-pattern.svg" class="position-absolute" alt="" aria-hidden="true">
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