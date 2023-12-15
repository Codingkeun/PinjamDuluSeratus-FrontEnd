<template>
    <main class="mt-5 mb-5" style="padding-inline: calc(15% / 2);">

        <!-- Investasi Aktif > Detail Pinjaman <with providing funds button> -->
        <div id="beforeProvidingLoans">
            <h1 class="font-weight-semibold mt-5">Detail Pinjaman</h1>
            <form class="loan-detail-container lender-role w-100 mx-0 mt-4">
                <section class="p-5 rounded-10 container-card-shadow w-100" style="height: fit-content;">
                    <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em">Informasi Data Peminjam</h2>
                    <div class="profile-image rounded-circle bg-primary mx-auto" style="width: 5rem; height: 5rem;">
                        <img src="@/assets/images/profile/user-profile.svg" alt="" class="w-100 h-100">
                    </div>
                    <div class="loan-detail-lendee-data d-flex flex-wrap mt-4" style="row-gap: 1rem">
                        <div class="w-50">
                            <h4 class="par-1em">Nama Peminjam</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">Andrea</h4>
                        </div>
                        <div class="w-50">
                            <h4 class="par-1em">Email</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">andrea@gmail.com</h4>
                        </div>
                        <div class="w-50">
                            <h4 class="par-1em">Nomor HP</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">08123456789</h4>
                        </div>
                        <div class="w-50">
                            <h4 class="par-1em">NPM</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">1019201923</h4>
                        </div>
                        <div class="w-50">
                            <h4 class="par-1em">Jurusan</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">Teknik Informatika</h4>
                        </div>
                        <div class="w-50">
                            <h4 class="par-1em">Kelas</h4>
                            <h4 class="text-primary font-weight-semibold my-auto par-1em">TIF RM 222</h4>
                        </div>
                    </div>
                </section>

                <section class="form-check">
                    <input class="form-check-input" type="checkbox" name="terms" id="providingLoanFunds_terms" required>
                    <label class="form-check-label ml-3" for="providingLoanFunds_terms">Form pemberian dana pinjaman yang telah berhasil dibuat tidak bisa dibatalkan</label>
                </section>

                <section class="d-flex flex-column w-100 px-0" style="gap: 3rem;">
                    <div class="p-5 rounded-10 container-card-shadow" style="height: fit-content;">
                        <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em">Informasi Pinjaman</h2>
                        <div class="loan-information-data d-flex flex-column" style="gap: 1.5rem">
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Jumlah Pinjaman</h4>
                                <h4 class="text-right font-weight-semibold my-auto par-1em">Rp 2,000,000</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Jumlah Tip ke Investor</h4>
                                <h4 class="text-right font-weight-semibold my-auto par-1em">Rp 500,000</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Durasi Pinjaman</h4>
                                <h4 class="text-right font-weight-semibold my-auto par-1em">90 hari</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Cara pembayaran</h4>
                                <h4 class="text-right font-weight-semibold my-auto par-1em">Cicilan</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Jumlah cicilan</h4>
                                <h4 class="text-right font-weight-semibold my-auto par-1em">3 kali</h4>
                            </div>
                            <div class="divider"></div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Total pembayaran</h4>
                                <h4 class="text-primary font-weight-semibold my-auto text-right par-1em">Rp 2,500,000</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Pembayaran per cicilan</h4>
                                <h4 class="text-primary font-weight-bold text-right my-auto">Rp 833,333</h4>
                            </div>
                            <div style="row-gap: 8px;">
                                <h4 class="my-auto par-1em">Tanggal jatuh tempo</h4>
                                <h4 class="text-primary font-weight-semibold my-auto text-right par-1em">18 Februari 2024</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <button class="btn btn-primary w-100 font-weight-semibold mx-auto" id="provideLoanFundsButton" type="submit">Berikan Dana Pinjaman</button>
            </form>
        </div>

        <!-- Dashboard > Detail Pinjaman <with view history button> -->
        <div id="afterProvidingLoans">
            <div class="d-flex justify-content-between align-items-center flex-wrap mt-5" style="gap: 2rem;">
                <h1 class="font-weight-semibold">Detail Pinjaman</h1>
                <button @click="$router.push('/history-payment')" class="btn btn-border bg-white text-primary font-weight-semibold" style="height: 44px; border: 2px solid var(--primary);">Lihat Histori Pembayaran</button>
            </div>

            <div class="loan-detail-container row w-100 d-flex mx-0 justify-content-between mt-4">
                <div class="d-flex flex-column mt-4 w-100 col-sm-12 col-md-12 col-lg-6 px-0" style="gap: 3rem;">
                    <section class="p-5 rounded-10 container-card-shadow">
                        <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em">Informasi Data Peminjam</h2>
                        <div class="profile-image rounded-circle bg-primary mx-auto" style="width: 5rem; height: 5rem;">
                            <img src="@/assets/images/profile/user-profile.svg" alt="" class="w-100 h-100">
                        </div>
                        <div class="loan-detail-lendee-data d-flex flex-wrap mt-4" style="row-gap: 1rem">
                            <div class="w-50">
                                <h4 class="par-1em">Nama Investor</h4>
                                <h4 class="text-primary font-weight-semibold my-auto par-1em">Andrea</h4>
                            </div>
                            <div class="w-50">
                                <h4 class="par-1em">Email</h4>
                                <h4 class="text-primary font-weight-semibold my-auto par-1em">andrea@gmail.com</h4>
                            </div>
                            <div class="w-50">
                                <h4 class="par-1em">Nomor HP</h4>
                                <h4 class="text-primary font-weight-semibold my-auto par-1em">08123456789</h4>
                            </div>
                            <div class="w-50">
                                <h4 class="par-1em">NPM</h4>
                                <h4 class="text-primary font-weight-semibold my-auto par-1em">1019201923</h4>
                            </div>
                            <div class="w-50">
                                <h4 class="par-1em">Jurusan</h4>
                                <h4 class="text-primary font-weight-semibold my-auto par-1em">Teknik Informatika</h4>
                            </div>
                            <div class="w-50">
                                <h4 class="par-1em">Kelas</h4>
                                <h4 class="text-primary font-weight-semibold my-auto par-1em">TIF RM 222</h4>
                            </div>
                        </div>
                    </section>

                    <div class="w-100 opacity-75">
                        <div class="bg-primary" style="border-radius: 1.2rem; height: 4rem;">
                            <img class="w-100" src="@/assets/images/background/wave-background.svg" alt="">
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-column mt-4 w-100 col-sm-12 col-md-12 col-lg-6 px-0" style="gap: 3rem;">
                    <section>
                        <div class="p-5 rounded-10 container-card-shadow" style="height: fit-content;">
                            <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em">Informasi Pinjaman</h2>
                            <div class="loan-information-data d-flex flex-column" style="gap: 1.5rem">
                                <div style="row-gap: 8px;">
                                    <h4 class="my-auto par-1em">Jumlah Pinjaman</h4>
                                    <h4 class="text-right font-weight-semibold my-auto par-1em">Rp 2,000,000</h4>
                                </div>
                                <div style="row-gap: 8px;">
                                    <h4 class="my-auto par-1em">Jumlah Tip ke Investor</h4>
                                    <h4 class="text-right font-weight-semibold my-auto par-1em">Rp 500,000</h4>
                                </div>
                                <div style="row-gap: 8px;">
                                    <h4 class="my-auto par-1em">Durasi Pinjaman</h4>
                                    <h4 class="text-right font-weight-semibold my-auto par-1em">90 hari</h4>
                                </div>
                                <div style="row-gap: 8px;">
                                    <h4 class="my-auto par-1em">Cara pembayaran</h4>
                                    <h4 class="text-right font-weight-semibold my-auto par-1em">Cicilan</h4>
                                </div>
                                <div style="row-gap: 8px;">
                                    <h4 class="my-auto par-1em">Jumlah cicilan</h4>
                                    <h4 class="text-right font-weight-semibold my-auto par-1em">3 kali</h4>
                                </div>
                                <div class="divider"></div>
                                <div style="row-gap: 8px;">
                                    <h4 class="my-auto par-1em">Total Pembayaran</h4>
                                    <h4 class="text-primary font-weight-semibold my-auto text-right par-1em">Rp 2,500,000</h4>
                                </div>
                                <div style="row-gap: 8px;">
                                    <h4 class="my-auto par-1em">Pembayaran per cicilan</h4>
                                    <h4 class="text-primary font-weight-bold text-right">Rp 833,333</h4>
                                </div>
                                <div style="row-gap: 8px;">
                                    <h4 class="my-auto par-1em">Tanggal jatuh tempo</h4>
                                    <h4 class="text-primary font-weight-semibold my-auto text-right par-1em">16 Februari 2024</h4>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
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