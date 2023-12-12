<template>
    <main class="mt-5 mb-5 lendee-payment-section">
        <div class="d-flex justify-content-between align-items-center flex-wrap mt-5" style="gap: 2rem;">
            <h1 class="font-weight-semibold">Pembayaran Dana Pinjaman</h1>
            <button type="button" class="btn bg-white text-primary font-weight-semibold d-flex align-items-center" style="height: 44px; border: 2px solid var(--primary);" onclick="window.location.href = '#uploadProofOfPaymentSection'">
                <span>Upload Bukti Pembayaran</span>
                <span class="material-symbols-rounded ml-2">
                    arrow_downward
                </span>
            </button>
        </div>
        <div class="lendee-payment-detail">
            <div class="mt-5">
                <h2 class="text-center pt-2 par-1-em">Pembayaran Cicilan Pertama</h2>
                <h3 class="text-center font-weight-bold text-primary">Rp 833,333</h3>
            </div>
            <div class="mt-5">
                <h2 class="text-center par-1-em">Pilih metode pembayaran</h2>
                <div class="d-flex card-horizontal-scroll" style="gap: 2rem; padding-inline: calc(15% / 2);">
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;">
                        <input type="radio" name="paymentMethod" id="lendeePaymentMethod_bca" required>
                        <label for="lendeePaymentMethod_bca" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/BCA.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="lendeePaymentMethod_bni" required>
                        <label for="lendeePaymentMethod_bni" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/BNI.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="lendeePaymentMethod_bniSyarih" required>
                        <label for="lendeePaymentMethod_bniSyarih" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/BNI_Syariah.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="lendeePaymentMethod_bri" required>
                        <label for="lendeePaymentMethod_bri" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/BRI.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="lendeePaymentMethod_mandiri" required>
                        <label for="lendeePaymentMethod_mandiri" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/Mandiri.svg" alt="" class="p-1">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="lendeePaymentMethod_visa" required>
                        <label for="lendeePaymentMethod_visa" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/VISA.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="lendeePaymentMethod_masterCard" required>
                        <label for="lendeePaymentMethod_masterCard" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/MasterCard.svg" alt="" class="">
                        </label>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <h2 class="text-center par-1-em">Informasi Pembayaran</h2>
                <div class="mt-4 mb-5 row justify-content-between w-100 mx-auto">
                    <div class="bg-light rounded-20 d-flex flex-column justify-content-center col-sm-12 col-md-12 col-lg-6" style="height: 14rem; gap: .4rem">
                        <h2 class="text-center par-1-em">Total Pembayaran</h2>
                        <h1 class="text-center font-weight-bold text-primary">Rp 833,333</h1>
                        <div class="d-flex p-3 rounded-10 bg-white justify-content-center mx-auto" style="gap: 1rem; width: fit-content;">
                            <h2 class="my-auto par-1-em">Sisa Waktu</h2>
                            <h3 class="text-danger my-auto font-weight-bold par-1-em" id="lendee_loanPaymentDueDateTimer">23:00:59</h3>
                        </div>
                    </div>
                    <div class="bg-secondary rounded-20 d-flex flex-column justify-content-center col-sm-12 col-md-12 col-lg-6" style="height: 14rem; gap: 1rem;">
                        <h2 class="text-center par-1-em">Nomor Rekening</h2>
                        <h1 class="text-center font-weight-bold text-primary">12345678</h1>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" class="btn bg-white font-weight-semibold text-primary w-100" style="border: 2px solid var(--primary);" onclick="window.location.href = 'peminjam_pembayaran_detail-pinjaman.html'">Batal Bayar</button>
            </div>
        </div>
        <form class="mt-5" id="uploadProofOfPaymentSection">
            <h2 class="text-center mb-3 pt-2 par-1-em">Upload Bukti Pembayaran</h2>
            <div class="rounded-5 d-flex justify-content-center align-items-center py-5 w-100" style="border: 2px dashed var(--primary);">
                <div class="btn bg-secondary text-primary position-relative">
                    <input id="uploadProofOfPaymentButton" type="file" class="custom-file-input position-absolute" required>
                    <label for="uploadProofOfPaymentButton" class="d-flex justify-content-center align-items-center" style="cursor: pointer;">
                        <span class="font-weight-medium">Upload</span>
                        <span class="material-symbols-rounded ml-2">
                            publish
                        </span>
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary font-weight-semibold w-100 mt-5" style="border: 2px solid var(--primary);">Kirim Bukti Pembayaran</button>
        </form>
    </main>
</template>
<script>
export default {
    name: 'LoanInformationPayment',
    data() {
        return {
            
        }
    }
}
</script>