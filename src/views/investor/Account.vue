<template>
    <main>
        <div class="mt-5 pt-4" style="padding-inline: calc(15% / 2);">
            <div class="row justify-content-between w-100 mx-auto" style="row-gap: 3rem">
                <div class="saving-balance-section rounded-20 d-flex align-items-center p-4 py-5 position-relative justify-content-around mx-auto" style="background: linear-gradient(272deg, #5D299F 3.69%, #F94A29 94.22%); opacity: 0.8; width: 100%; max-width: 40rem;">
                    <div class="position-relative" style="width: 7rem;">
                        <img src="../../assets/images/background/saving-balance.svg" alt="" class="position-absolute" style="width: 7rem; margin-top: -8rem;">
                    </div>
                    <div class="position-relative">
                        <h3 class="text-white font-weight-light" style="font-size: 1.375rem;">Rp <span class="font-weight-semibold" style="font-size: 2.25rem;">2,000,000</span></h3>
                        <h3 class="text-white font-weight-light" style="font-size: 1.375rem;">Saldo Tabungan Saya</h3>
                    </div>
                    <div class="wavy-background position-absolute opacity-50" style="left: 0; bottom: 0; margin-left: -4rem; margin-bottom: -3rem;">
                        <img src="../../assets/images/background/footer-background.svg" alt="">
                    </div>
                    <div class="wavy-background position-absolute opacity-50" style="right: 0; top: 0; rotate: 180deg; margin-right: -3rem; margin-top: -3rem;">
                        <img src="../../assets/images/background/footer-background.svg" alt="">
                    </div>
                </div>
                <div class="top-up-section rounded-20 d-flex align-items-center justify-content-around p-4 py-5 position-relative mx-auto" style="overflow: hidden; background: linear-gradient(272deg, #1A5F7A 3.69%, #159895 94.22%); opacity: 0.8; width: 100%; max-width: 40rem;">
                    <span class="material-symbols-outlined text-white" style="font-size: 3.5rem;">
                        add
                    </span>
                    <div class="position-relative">
                        <h3 class="text-white font-weight-semibold" style="font-size: 2.25rem;">Top Up</h3>
                        <h3 class="text-white font-weight-light" style="font-size: 1.375rem;">Saldo Tabungan Anda</h3>
                    </div>
                    <button class="btn rounded-10 d-flex justify-content-center align-items-center border-0" style="max-width: 44px; max-height: 44px; z-index: 5" @click="$router.push('/topup-balance')">
                        <span class="material-symbols-rounded text-primary" style="font-size: 3rem;">
                            keyboard_arrow_right
                        </span>
                    </button>
                    <div class="wavy-background position-absolute opacity-50" style="left: 0; bottom: 0; margin-left: -4rem; margin-bottom: -3rem;">
                        <img src="../../assets/images/background/footer-background.svg" alt="">
                    </div>
                    <div class="wavy-background position-absolute opacity-50" style="right: 0; top: 0; rotate: 180deg; margin-right: -3rem; margin-top: -3rem;">
                        <img src="../../assets/images/background/footer-background.svg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <section class="profile-area mt-5 mb-5" style="padding-inline: calc(15% / 2);">
            <h1 class="font-weight-semibold">Informasi Pribadi</h1>
            <div class="p-5 w-100 h-100 rounded-20 container-card-shadow d-flex flex-column align-items-center mt-5">
                <img src="../../assets/images/profile/user-profile.svg" alt="" class="w-25 h-25">
                <div class="profile-container row justify-content-around mt-4">
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 style="font-size: 1rem;">Nama</h3>
                        <h3 id="lendersName" class="font-weight-semibold text-primary" style="font-size: 1.2rem;">John Doe</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 style="font-size: 1rem;">Peran</h3>
                        <h3 id="lendersRole" class="font-weight-semibold text-primary" style="font-size: 1.2rem;">Investor</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 style="font-size: 1rem;">Email</h3>
                        <h3 class="font-weight-semibold text-primary" style="font-size: 1.2rem;"><span id="lendersEmail">johndoe</span>@gmail.com</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 style="font-size: 1rem;">Nomor HP</h3>
                        <h3 id="lendersPhoneNumber" class="font-weight-semibold text-primary" style="font-size: 1.2rem;">08123456789</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 style="font-size: 1rem;">NPM</h3>
                        <h3 id="lendersNPM" class="font-weight-semibold text-primary" style="font-size: 1.2rem;">1019201923</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 style="font-size: 1rem;">Fakultas</h3>
                        <h3 id="lendersFaculty" class="font-weight-semibold text-primary" style="font-size: 1.2rem;">Informatika</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 style="font-size: 1rem;">Jurusan</h3>
                        <h3 id="lenderMajor" class="font-weight-semibold text-primary" style="font-size: 1.2rem;">Teknik Informatika</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 style="font-size: 1rem;">Kelas</h3>
                        <h3 id="lenderClass" class="font-weight-semibold text-primary" style="font-size: 1.2rem;">TIF RM 222</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 style="font-size: 1rem;">Nama</h3>
                        <a href="#" id="lendersStudentCardImage" class="btn-link font-weight-semibold text-primary" style="font-size: 1.2rem; text-decoration: underline;">Klik untuk melihat</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
    name: 'AccountInvestor',
    data() {
        return {
            
        }
    }
}
</script>