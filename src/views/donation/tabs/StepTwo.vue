<template>
    <div class="donation-nominal-area mt-4 mb-5" style="padding-inline: calc(15% / 2);">
        <form class="d-flex flex-column" style="gap: 3rem;" @submit.prevent="submit">
            <h1 for="donationAmount" class="text-center font-weight-semibold m-0 par-1em">Masukkan identitas diri</h1>
            <div class="d-flex flex-column form-identity p-5 rounded-10 container-card-shadow" style="gap: 2rem; padding-inline: calc(15% / 2);">
                <div class="">
                    <label for="name">Nama</label>
                    <input type="text" id="name" class="form-control" placeholder="Masukkan nama" required>
                </div>
                <div class="">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control" placeholder="Masukkan email" required>
                </div>
                <div class="">
                    <label for="phone">Nomor HP</label>
                    <input type="text" id="phone" class="form-control" placeholder="Masukkan nomor HP" required>
                </div>
            </div>
            <div class="button-group d-flex flex-column" style="gap: 2rem;">
                <button type="button" @click="$parent.currentTabComponent = 'StepOne'" class="btn btn-primary-outline w-100 font-weight-semibold">Kembali</button>
                <button type="submit" class="btn btn-primary w-100 font-weight-semibold">Donasi</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'DonationStepTwo',
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