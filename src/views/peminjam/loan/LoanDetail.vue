<template>
<main class="mt-5 mb-5" style="padding-inline: calc(15% / 2);">
    <div class="d-flex justify-content-between align-items-center flex-wrap mt-5" style="gap: 2rem;">
        <h1 class="font-weight-semibold">Detail Pinjaman</h1>
        <router-link to="/history-payment" class="btn bg-white text-primary font-weight-semibold" style="height: 44px; border: 2px solid var(--primary);">Lihat Histori Pembayaran</router-link>
    </div>
    <div class="loan-detail-container row w-100 d-flex mx-0 justify-content-between mt-4">
        <div class="d-flex flex-column mt-4 w-100 col-sm-12 col-md-12 col-lg-6 px-0" style="gap: 3rem;">
            <section class="p-5 rounded-10 container-card-shadow">
                <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em">Informasi Data Investor</h2>
                <div class="profile-image rounded-circle bg-primary mx-auto" style="width: 5rem; height: 5rem;">
                    <img src="@/assets/images/profile/user-profile.svg" alt="" class="w-100 h-100">
                </div>
                <div class="loan-detail-investor-data d-flex flex-wrap mt-4" style="row-gap: 1rem">
                    <div class="w-50">
                        <h4 class="par-1em">Nama Investor</h4>
                        <h4 class="text-primary font-weight-semibold my-auto par-1em">John Doe</h4>
                    </div>
                    <div class="w-50">
                        <h4 class="par-1em">Email</h4>
                        <h4 class="text-primary font-weight-semibold my-auto par-1em">andrea@gmail.com</h4>
                    </div>
                    <div class="w-50">
                        <h4 class="par-1em">Nomor HP</h4>
                        <h4 class="text-primary font-weight-semibold my-auto par-1em">08123456789</h4>
                    </div>
                </div>
            </section>

            <section class="p-5 rounded-10 container-card-shadow" style="height: fit-content;">
                <div>
                    <h4 class="text-center par-1em">Tanggal jatuh tempo pembayaran pinjaman</h4>
                    <h4 class="text-primary font-weight-bold text-center mt-3">16 Februari 2024</h4>
                </div>
                <div class="d-flex p-3 rounded-10 bg-secondary justify-content-center mx-auto mt-4" style="gap: 1rem; width: fit-content;">
                    <h2 class="my-auto par-1em">Sisa Waktu</h2>
                    <h3 class="text-danger my-auto font-weight-bold par-1em" id="loanDueDateTimer">23:00:59</h3>
                </div>
            </section>
        </div>

        <div class="d-flex flex-column mt-4 w-100 col-sm-12 col-md-12 col-lg-6 px-0" style="gap: 3rem;">
            <section>
                <div class="p-5 rounded-10 container-card-shadow" style="height: fit-content;">
                    <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em">Informasi Pinjaman Anda</h2>
                    <div class="simulation-result-data d-flex flex-column" style="gap: 1.5rem">
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
                            <h4 class="my-auto par-1em">Cicilan</h4>
                            <h4 class="text-right font-weight-semibold my-auto par-1em">3 kali</h4>
                        </div>
                        <div class="divider"></div>
                        <div style="row-gap: 8px;">
                            <h4 class="my-auto par-1em">Jumlah yang harus dibayarkan</h4>
                            <h4 class="text-primary font-weight-semibold my-auto text-right par-1em">Rp 2,500,000</h4>
                        </div>
                        <div style="row-gap: 8px;">
                            <h4 class="my-auto par-1em">Pembayaran per cicilan</h4>
                            <h4 class="text-primary font-weight-bold text-right">Rp 833,333</h4>
                        </div>
                    </div>
                </div>
            </section>

            <router-link to="/loan/info-payment" type="button" class="btn btn-primary font-weight-semibold w-100">Bayar Cicilan ke-1</router-link>
        </div>
    </div>
</main>
</template>
<script>
export default {
    name: 'LoanDetail',
    data() {
        return {
            
        }
    }
}
</script>