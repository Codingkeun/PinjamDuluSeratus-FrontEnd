<template>
<main class="mt-5 mb-5" style="padding-inline: calc(15% / 2)">
    <button type="button" @click="$router.push(`/topup-balance`)" class="btn bg-white text-primary font-weight-semibold d-flex align-items-center pl-1 mb-3" style="gap: .5rem;">
        <span class="material-symbols-rounded" aria-hidden="true">
            keyboard_arrow_left
        </span>
        Kembali
    </button>
    <div class="d-flex justify-content-between align-items-center flex-wrap mt-5" style="gap: 2rem;">
        <h1 class="font-weight-semibold">Detail Pembayaran Top-Up</h1>
        <button type="button" @click="handleLinkToUploadReceiptOnClick" class="btn bg-white text-primary font-weight-semibold d-flex align-items-center" style="height: 44px; border: 2px solid var(--primary);">
            <span>Upload Bukti Pembayaran</span>
            <span class="material-symbols-rounded ml-2" aria-hidden="true">
                arrow_downward
            </span>
        </button>
    </div>
    <div class="mt-5 top-up-detail">
        <div class="mt-4 mb-5 row justify-content-between w-100 mx-auto">
            <div class="bg-light rounded-20 d-flex flex-column justify-content-center col-sm-12 col-md-12 col-lg-6" style="height: 14rem; gap: .4rem;">
                <h1 class="text-center font-weight-bold text-primary">Rp 200,000</h1>
                <div class="d-flex p-3 rounded-10 bg-white mx-auto flex-wrap remaining-time" style="gap: .4rem 1rem; width: fit-content;">
                    <h2 class="my-auto par-1em">Sisa Waktu</h2>
                    <!-- <vue-countdown :transform="$transformSlotProps" :time="detail.time_remaining_in_millisecond" v-slot="{ days, hours, minutes, seconds }" v-if="detail.time_remaining_in_millisecond">
                        <h3 class="text-danger my-auto font-weight-bold par-1em" id="topUpDueDateTimer"><span v-if="days">{{ days }} hari, </span>{{hours}}:{{minutes}}:{{seconds}}</h3>
                    </vue-countdown> -->
                </div>
            </div>
            <div class="bg-secondary rounded-20 d-flex flex-column justify-content-center col-sm-12 col-md-12 col-lg-6" style="height: 14rem; gap: 1rem;">
                <h2 class="text-center par-1em">Nomor Rekening</h2>
                <h1 class="text-center font-weight-bold text-primary">102223434</h1>
            </div>
        </div>
    </div>
    <form class="d-block mt-5" id="uploadtopUpReceiptSection">
        <div ref="uploadContent">
            <div id="topUpPaymentDateForm" class="w-100 d-flex flex-column">
                <label for="topUpPaymentDate" class="form-label text-center">Masukkan Tanggal Pembayaran</label>
                <input type="date" class="form-control" id="topUpPaymentDate" required>
            </div>
        </div>
        <div class="mt-5">
        <h2 class="text-center mb-3 par-1em">Upload Bukti Pembayaran</h2>
            <div class="rounded-5 d-flex justify-content-center align-items-center py-5 w-100" style="border: 2px dashed var(--primary);">
                <input id="uploadtopUpReceipt" type="file" name="attachment_file" class="d-none" />
                <div class="btn bg-secondary text-primary position-relative d-flex align-items-center" v-if="!attachment_preview">
                    <label for="uploadtopUpReceipt" class="pb-0 mb-0 d-flex align-items-center">
                        <span class="font-weight-medium">Upload</span>
                        <span class="material-symbols-rounded ml-2" aria-hidden="true">
                            download
                        </span>
                    </label>
                </div>
                <div class="d-flex" style="gap: 10px" v-else>
                    <div class="btn bg-primary position-relative">
                        <a :href="attachment_preview" target="_blank" class="text-white">Lihat File</a>
                    </div>
                    <button type="button" @click="resetFile" class="btn bg-secondary position-relative">Hapus File</button>
                </div>
            </div>
            <div class="mt-2">
                <ErrorMessage name="attachment_file" :class="'text-danger'" />
            </div>
        </div>
        <button type="submit" class="btn btn-primary font-weight-semibold w-100 mt-5" style="border: 2px solid var(--primary);">Kirim Bukti Pembayaran</button>
    </form>
</main>
</template>
<script>
export default {
    name: "TransferConfirmation",
    data() {
        return {

        }
    },
    methods: {
        handleLinkToUploadReceiptOnClick() {
            this.$refs.uploadContent.scrollIntoView({ behavior: "smooth" });
        },
    }
}
</script>