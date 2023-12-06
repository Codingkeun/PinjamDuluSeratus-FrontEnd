<template>
    <div class="donation-nominal-area mt-4 mb-5">
        <form class="d-flex flex-column" style="gap: 3rem;" @submit.prevent="submit">
            <div class="w-100 d-flex flex-column" style="padding-inline: calc(15% / 2); gap: 1rem;">
                <label for="donationAmount" class="text-center font-weight-semibold">Masukkan jumlah donasi</label>
                <div class="input-group d-flex mx-auto">
                    <span class="input-group-text border-right-0" style="border-top-right-radius: 0; border-bottom-right-radius: 0;">Rp</span>
                    <input type="text" placeholder="Masukkan jumlah donasi" class="form-control" id="donationAmount" required>
                    <div class="amountInvalidInputMessage flex-wrap w-100" hidden>
                        <p class="text-danger font-weight-medium mb-0 par-0-8em">
                            Inputan harus berupa angka dengan minimal nominal adalah Rp 10,000
                        </p>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column w-100" style="gap: 1rem;">
                <h1 class="font-weight-semibold text-center par-1em">Pilih metode pembayaran</h1>
                <div class="d-flex card-horizontal-scroll" style="gap: 2rem; padding-inline: calc(15% / 2);">
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;">
                        <input type="radio" name="paymentMethod" id="donationPaymentMethod_bca" required>
                        <label for="donationPaymentMethod_bca" class="position-relative d-flex justify-content-center">
                            <img src="../../../assets/images/bank/BCA.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="donationPaymentMethod_bni" required>
                        <label for="donationPaymentMethod_bni" class="position-relative d-flex justify-content-center">
                            <img src="../../../assets/images/bank/BNI.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="donationPaymentMethod_bniSyarih" required>
                        <label for="donationPaymentMethod_bniSyarih" class="position-relative d-flex justify-content-center">
                            <img src="../../../assets/images/bank/BNI_Syariah.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="donationPaymentMethod_bri" required>
                        <label for="donationPaymentMethod_bri" class="position-relative d-flex justify-content-center">
                            <img src="../../../assets/images/bank/BRI.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="donationPaymentMethod_mandiri" required>
                        <label for="donationPaymentMethod_mandiri" class="position-relative d-flex justify-content-center">
                            <img src="../../../assets/images/bank/Mandiri.svg" alt="" class="p-1">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="donationPaymentMethod_visa" required>
                        <label for="donationPaymentMethod_visa" class="position-relative d-flex justify-content-center">
                            <img src="../../../assets/images/bank/VISA.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="paymentMethod" id="donationPaymentMethod_masterCard" required>
                        <label for="donationPaymentMethod_masterCard" class="position-relative d-flex justify-content-center">
                            <img src="../../../assets/images/bank/MasterCard.svg" alt="" class="">
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary font-weight-semibold w-75 mx-auto">Lanjut</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'DonationStepOne',
    data() {
        return {
            form: {}
        }
    },
    methods: {
        submit() {
            this.$emit("onHandleSubmit", {form: this.form});
        }
    }
}
</script>