<template>
    <main class="mt-5 mb-5" style="padding-inline: calc(15% / 2);">
        <div class="d-flex justify-content-between align-items-center flex-wrap mt-5" style="gap: 2rem;">
            <h1 class="font-weight-semibold">Detail Pinjaman</h1>
            <router-link to="/history-payment" class="btn bg-white text-primary font-weight-semibold" style="height: 44px; border: 2px solid var(--primary);">Lihat Histori Pembayaran</router-link>
        </div>
        <div class="loan-detail-container row w-100 d-flex mx-0 justify-content-between mt-4">
            <div class="d-flex flex-column mt-4 w-100 col-sm-12 col-md-12 col-lg-6 px-0" style="gap: 3rem;">
                <section class="p-5 rounded-10 container-card-shadow">
                    <h2 class="font-weight-semibold m-0 text-primary mb-4" style="font-size: 1.2rem;">Informasi Data Peminjam</h2>
                    <div class="profile-image rounded-circle bg-primary mx-auto" style="width: 5rem; height: 5rem;">
                        <img src="../../../assets/images/profile/user-profile.svg" alt="" class="w-100 h-100">
                    </div>
                    <div class="loan-detail-lendee-data d-flex flex-wrap mt-4" style="row-gap: 1rem">
                        <div class="w-50">
                            <h4 style="font-size: 1rem;">Nama Investor</h4>
                            <h4 class="text-primary font-weight-semibold my-auto" style="font-size: 1rem;">Andrea</h4>
                        </div>
                        <div class="w-50">
                            <h4 style="font-size: 1rem;">Email</h4>
                            <h4 class="text-primary font-weight-semibold my-auto" style="font-size: 1rem;">andrea@gmail.com</h4>
                        </div>
                        <div class="w-50">
                            <h4 style="font-size: 1rem;">Nomor HP</h4>
                            <h4 class="text-primary font-weight-semibold my-auto" style="font-size: 1rem;">08123456789</h4>
                        </div>
                        <div class="w-50">
                            <h4 style="font-size: 1rem;">NPM</h4>
                            <h4 class="text-primary font-weight-semibold my-auto" style="font-size: 1rem;">1019201923</h4>
                        </div>
                        <div class="w-50">
                            <h4 style="font-size: 1rem;">Jurusan</h4>
                            <h4 class="text-primary font-weight-semibold my-auto" style="font-size: 1rem;">Teknik Informatika</h4>
                        </div>
                        <div class="w-50">
                            <h4 style="font-size: 1rem;">Kelas</h4>
                            <h4 class="text-primary font-weight-semibold my-auto" style="font-size: 1rem;">TIF RM 222</h4>
                        </div>
                    </div>
                </section>

                <div class="w-100 opacity-75">
                    <div class="bg-primary" style="border-radius: 1.2rem; height: 4rem;">
                        <img class="w-100" src="./assets/images/background/wave-background.svg" alt="">
                    </div>
                </div>
                <section class="form-check">
                    <input class="form-check-input" type="checkbox" name="terms" id="providingLoanFunds_terms" required="">
                    <label class="form-check-label ml-3" for="providingLoanFunds_terms">Form pemberian dana pinjaman yang telah berhasil dibuat tidak bisa dibatalkan</label>
                </section>
                <button class="btn btn-primary w-100 font-weight-semibold" id="provideLoanFundsButton" type="submit">Berikan Dana Pinjaman</button>
            </div>

            <div class="d-flex flex-column mt-4 w-100 col-sm-12 col-md-12 col-lg-6 px-0" style="gap: 3rem;">
                <section>
                    <div class="p-5 rounded-10 container-card-shadow" style="height: fit-content;">
                        <h2 class="font-weight-semibold m-0 text-primary mb-4" style="font-size: 1.2rem;">Informasi Pinjaman</h2>
                        <div class="loan-information-data d-flex flex-column" style="gap: 1.5rem">
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto" style="font-size: 1rem;">Jumlah Pinjaman</h4>
                                <h4 class="text-right font-weight-semibold my-auto" style="font-size: 1rem;">Rp 2,000,000</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto" style="font-size: 1rem;">Jumlah Tip ke Investor</h4>
                                <h4 class="text-right font-weight-semibold my-auto" style="font-size: 1rem;">Rp 500,000</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto" style="font-size: 1rem;">Durasi Pinjaman</h4>
                                <h4 class="text-right font-weight-semibold my-auto" style="font-size: 1rem;">90 hari</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto" style="font-size: 1rem;">Cara pembayaran</h4>
                                <h4 class="text-right font-weight-semibold my-auto" style="font-size: 1rem;">Cicilan</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto" style="font-size: 1rem;">Jumlah cicilan</h4>
                                <h4 class="text-right font-weight-semibold my-auto" style="font-size: 1rem;">3 kali</h4>
                            </div>
                            <div class="divider"></div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto" style="font-size: 1rem;">Total Pembayaran</h4>
                                <h4 class="text-primary font-weight-semibold my-auto text-right" style="font-size: 1rem;">Rp 2,500,000</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto" style="font-size: 1rem;">Pembayaran per cicilan</h4>
                                <h4 class="text-primary font-weight-bold text-right">Rp 833,333</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto" style="font-size: 1rem;">Tanggal jatuh tempo</h4>
                                <h4 class="text-primary font-weight-semibold my-auto text-right" style="font-size: 1rem;">16 Februari 2024</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: 'InvestmentDetailInvestor',
    data() {
        return {
            
        }
    }
}
</script>