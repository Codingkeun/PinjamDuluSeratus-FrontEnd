<template>
    <div class="donation-payment-area mt-4 mb-5" style="padding-inline: calc(15% / 2); display: grid; gap: 3rem">
        <div class="bg-light rounded-20 d-flex flex-column justify-content-center" style="height: 14rem; gap: .4rem">
            <h2 class="text-center" style="font-size: 1rem;">Total Pembayaran</h2>
            <h1 class="text-center font-weight-bold text-primary">Rp 200,000</h1>
            <div class="d-flex p-3 rounded-10 bg-white justify-content-center mx-auto" style="gap: 1rem; width: fit-content;">
                <h2 class="my-auto" style="font-size: 1rem;">Sisa Waktu</h2>
                <vue-countdown :time="1 * 24 * 60 * 60 * 1000" v-slot="{ hours, minutes, seconds }">
                    <h3 class="text-danger my-auto font-weight-bold" style="font-size: 1rem;" id="donationDueDateTimer">{{hours}}:{{minutes}}:{{seconds}}</h3>
                </vue-countdown>

            </div>
        </div>
        <div class="bg-secondary rounded-20 d-flex flex-column justify-content-center" style="height: 14rem; gap: 1rem;">
            <h2 class="text-center" style="font-size: 1rem;">Nomor Rekening</h2>
            <h1 class="text-center font-weight-bold text-primary">12345678</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DonationStepThree',
    data() {
        return {
            form: {}
        }
    },
    methods: {
    }
}
</script>