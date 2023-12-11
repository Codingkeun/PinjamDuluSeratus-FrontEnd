<template>
<main class="mt-5 mb-5" style="padding-inline: calc(15% / 2);">
    <h1 class="font-weight-semibold">Pengajuan Pinjaman</h1>
    <div class="loan-inquiry d-flex flex-column mt-4" style="gap: 3rem;">
        <form class="p-5 rounded-10 container-card-shadow" onsubmit="amountInputValidation('#loanAmount', event); amountInputValidation('#tipAmount', event); numberInputValidation('#accountNumber', event)">
            <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em">Form Pengajuan</h2>
            <div class="d-flex flex-column" style="gap: 2rem;">
                <div class="">
                    <label for="loanAmount">Jumlah Pinjaman</label>
                    <div class="input-group d-flex">
                        <span class="input-group-text border-right-0" style="border-top-right-radius: 0; border-bottom-right-radius: 0;">Rp</span>
                        <input type="text" placeholder="Masukkan jumlah pinjaman" class="form-control" id="loanAmount" required>
                        <div class="amountInvalidInputMessage flex-wrap w-100" hidden>
                            <p class="text-danger font-weight-medium mb-0 par-0-8em">
                                Inputan harus berupa angka dengan minimal nominal adalah Rp 10,000
                            </p>
                        </div>
                    </div>
                </div>

                <div class="">
                    <label for="tipAmount">Tip</label>
                    <div class="input-group d-flex">
                        <span class="input-group-text border-right-0" style="border-top-right-radius: 0; border-bottom-right-radius: 0;">Rp</span>
                        <input type="text" placeholder="Masukkan jumlah tip" class="form-control" id="tipAmount" required>
                        <div class="amountInvalidInputMessage flex-wrap w-100" hidden>
                            <p class="text-danger font-weight-medium mb-0 par-0-8em">
                                Inputan harus berupa angka dengan minimal nominal adalah Rp 10,000
                            </p>
                        </div>
                    </div>
                </div>

                <div class="">
                    <label for="loanDuration">Durasi Pinjaman</label>
                    <div id="loanDuration" class="d-flex flex-wrap" style="gap: 1rem">
                        <select name="loanDuration" id="loanTextDuration" class="form-select" required>
                            <option value="">Pilih rentang:</option>
                            <option value="days">Hari</option>
                            <option value="weeks">Minggu</option>
                            <option value="months">Bulan</option>
                        </select>
                        <select name="loanDuration" id="loanNumberDuration" class="form-select form-select-lg" required>
                            <option value="">Pilih rentang:</option>
                        </select>
                    </div>
                </div>

                <div class="d-flex flex-column">
                    <h3 class="font-weight-normal par-1em">Cara pelunasan</h3>
                    <div class="form-check">
                        <input type="radio" id="installmentPayment" name="paymentMethod" value="installmentPayment" class="form-check-input" required>
                        <label for="installmentPayment" class="form-check-label ml-3">Bayar secara cicilan</label>
                        <div class="ml-3 installmentPaymentRange">
                            <label for="installmentPaymentRange">Berapa kali cicilan?</label>
                            <div class="custom-range">
                                <div class="custom-range-field">
                                    <div class="value left">0</div>
                                    <div class="w-100">
                                        <input type="range" id="installmentPaymentRange" name="installmentPaymentRange" min="0" max="12" value="0" step="1" required>
                                        <div class="custom-range-value-section">
                                            <div class="custom-range-value" id="customRangeValue">
                                                <span>5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="value right">12</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-check mt-1">
                        <input type="radio" id="fullPayment" name="paymentMethod" value="fullPayment" class="form-check-input" required>
                        <label for="installmentPayment" class="form-check-label ml-3">Bayar semuanya sekaligus</label>
                    </div>
                </div>

                <div>
                    <h3 class="font-weight-normal par-1em">Pilihan Bank</h3>
                    <div class="bank-choices-in-inquiry mt-3" style="gap: .5rem;">
                        <div class="form-check">
                            <input type="radio" id="loanInquiry_bcaPayment" name="bankChoices" value="bcaPayment" class="form-check-input" required>
                            <label for="loanInquiry_bcaPayment" class="form-check-label ml-3">
                                <img src="@/assets/images/bank/BCA.svg" alt="Bank BCA" class="w-75">
                            </label>
                        </div>
                        <div class="form-check">
                            <input type="radio" id="loanInquiry_bniPayment" name="bankChoices" value="bniPayment" class="form-check-input" required>
                            <label for="loanInquiry_bniPayment" class="form-check-label ml-3">
                                <img src="@/assets/images/bank/BNI.svg" alt="Bank BNI" class="w-75">
                            </label>
                        </div>
                        <div class="form-check mt-1">
                            <input type="radio" id="loanInquiry_bniSyariahPayment" name="bankChoices" value="bniSyariahPayment" class="form-check-input" required>
                            <label for="loanInquiry_bniSyariahPayment" class="form-check-label ml-3">
                                <img src="@/assets/images/bank/BNI_Syariah.svg" alt="Bank BNI Syariah" class="w-75">
                            </label>
                        </div>
                        <div class="form-check mt-1">
                            <input type="radio" id="loanInquiry_briPayment" name="bankChoices" value="briPayment" class="form-check-input" required>
                            <label for="loanInquiry_briPayment" class="form-check-label ml-3">
                                <img src="@/assets/images/bank/BRI.svg" alt="Bank BRI" class="w-75">
                            </label>
                        </div>
                        <div class="form-check mt-1">
                            <input type="radio" id="loanInquiry_mandiriPayment" name="bankChoices" value="mandiriPayment" class="form-check-input" required>
                            <label for="loanInquiry_mandiriPayment" class="form-check-label ml-3">
                                <img src="@/assets/images/bank/Mandiri.svg" alt="Bank Mandiri" class="w-75">
                            </label>
                        </div>
                        <div class="form-check mt-1">
                            <input type="radio" id="loanInquiry_visaPayment" name="bankChoices" value="visaPayment" class="form-check-input" required>
                            <label for="loanInquiry_visaPayment" class="form-check-label ml-3">
                                <img src="@/assets/images/bank/VISA.svg" alt="VISA" class="w-75">
                            </label>
                        </div>
                        <div class="form-check mt-1">
                            <input type="radio" id="loanInquiry_masterCardPayment" name="bankChoices" value="masterCardPayment" class="form-check-input" required>
                            <label for="loanInquiry_masterCardPayment" class="form-check-label ml-3">
                                <img src="@/assets/images/bank/MasterCard.svg" alt="MasterCard" class="w-75">
                            </label>
                        </div>
                    </div>
                </div>

                <div class="">
                    <label for="accountNumber">Nomor Rekening</label>
                    <input type="text" placeholder="Masukkan nomor rekening" class="form-control" id="accountNumber" required>
                    <div class="numberInvalidInputMessage" hidden>
                        <p class="text-danger font-weight-medium mb-0 par-0-8em">
                            Inputan harus berupa angka
                        </p>
                    </div>              
                </div>
            </div>

            <button type="submit" class="btn btn-primary font-weight-semibold w-100 mt-4">Simulasikan Pinjaman</button>
        </form>

        <section>
            <div class="p-5 rounded-10 container-card-shadow" style="height: fit-content;">
                <h2 class="font-weight-semibold m-0 text-primary mb-4 par-1-2em">Hasil Simulasi Pengajuan</h2>
                <div class="simulation-result-data d-flex flex-column" style="gap: 1.5rem">
                    <div id="simulationResult_loanAmountTotal" style="row-gap: 8px;">
                        <h4 class="my-auto par-1em" id="loanAmountTotalName">Jumlah Pinjaman</h4>
                        <h4 id="loanAmountTotalResult" class="text-right font-weight-semibold my-auto par-1em">Rp 2,000,000</h4>
                    </div>
                    <div id="simulationResult_tipAmountTotal" style="row-gap: 8px;">
                        <h4 class="my-auto par-1em" id="tipAmountTotalName">Jumlah Tip ke Investor</h4>
                        <h4 id="tipAmountTotalResult" class="text-right font-weight-semibold my-auto par-1em">Rp 500,000</h4>
                    </div>
                    <div id="simulationResult_loanDuration" style="row-gap: 8px;">
                        <h4 class="my-auto par-1em" id="loanDurationName">Durasi Pinjaman</h4>
                        <h4 id="loanDurationResult" class="text-right font-weight-semibold my-auto par-1em">90 hari</h4>
                    </div>
                    <div id="simulationResult_installmentRange" style="row-gap: 8px;">
                        <h4 class="my-auto par-1em" id="installmentRangeName">Cicilan</h4>
                        <h4 id="installmentRangeResult" class="text-right font-weight-semibold my-auto par-1em">3 kali</h4>
                    </div>
                    <div class="divider"></div>
                    <div id="simulationResult_numberOfTotalPayment" style="row-gap: 8px;">
                        <h4 class="my-auto par-1em" id="numberOfTotalPaymentName">Jumlah yang harus dibayarkan</h4>
                        <h4 id="numberOfTotalPaymentResult" class="text-primary font-weight-semibold my-auto text-right par-1em">Rp 2,500,000</h4>
                    </div>
                    <div id="simulationResult_numberOfTotalInstallment" style="row-gap: 8px;">
                        <h4 class="my-auto par-1em" id="numberOfTotalInstallmentName">Pembayaran per cicilan</h4>
                        <h4 id="numberOfTotalInstallmentResult" class="text-primary font-weight-bold text-right">Rp 833,333</h4>
                    </div>
                </div>
            </div>

            <form ref="form" class="mt-5" @submit.prevent="submit">
                <div>
                    <h4 class="text-center par-1em">Tanggal jatuh tempo pembayaran pinjaman</h4>
                    <h4 id="dueDateOfLoanResult" class="text-primary font-weight-bold text-center">16 Februari 2024</h4>
                </div>
                <div class="mt-4 d-flex flex-column" style="gap: .5rem;">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="dueDateOfLoanTerms" value="terms1" id="terms1" required>
                        <label class="form-check-label ml-3" for="terms1">Saya telah menyutujui hasil simulasi pinjaman di atas</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="dueDateOfLoanTerms" value="terms2" id="terms2" required>
                        <label class="form-check-label ml-3" for="terms2">Pengajuan pinjaman yang telah berhasil dibuat tidak bisa dibatalkan</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="dueDateOfLoanTerms" value="terms3" id="terms3" required>
                        <label class="form-check-label ml-3" for="terms3">Jika pembayaran kembali pinjaman tidak dilakukan sebelum tanggal jatuh tempo, maka profile peminjam yang bersangkutan akan diterbitkan di halaman website</label>
                    </div>
                </div>

                <button class="btn btn-primary font-weight-semibold w-100 mt-5" type="submit">Ajukan Pinjaman</button>
            </form>
        </section>
    </div>
</main>
</template>
<script>
import { string, number, date } from 'yup';
export default {
    name: 'FormLoan',
    data() {
        return {
            
        }
    },
    methods: {
        submit() {
            this.$swal
                .fire({
                    title: 'Apakah kamu yakin ?',
                    text: 'tess!',
                    icon: 'warning',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'YA',
                    confirmButtonColor: '#0059AD',
                    denyButtonText: 'TIDAK',
                })
                .then((result) => {
                });
        }
    }
}
</script>