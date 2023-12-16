<template>
    <main class="mt-5 mb-5">
        <button @click="$router.push(`/account/investor`)" class="btn bg-white text-primary font-weight-semibold d-flex align-items-center pl-1 mb-3" style="gap: .5rem; margin-left: calc(15% / 2)">
            <span class="material-symbols-rounded">
                keyboard_arrow_left
            </span>
            Kembali
        </button>
        <form class="mb-5 w-100 d-flex flex-column" style="gap: 3rem;" @submit.prevent="onSubmit($event)">
            <h1 class="font-weight-semibold" style="padding-inline: calc(15% / 2);">Top Up Saldo</h1>
            <div class="d-flex flex-column" style="gap: 1rem;">
                <h2 class="text-center font-weight-semibold par-1-2em">Pilih nominal top up</h2>
                <div class="amountInputByRadioElement d-flex card-horizontal-scroll" style="gap: 2rem; padding-inline: calc(15% / 2);" @click="cardOnClick($event)">
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;">
                        <input type="radio" name="topUpAmount" id="topUp30Thousand" required>
                        <label for="topUp30Thousand" class="position-relative d-flex justify-content-center font-weight-semibold par-1-2em" style="transform: translateY(50%);">
                            Rp 30,000
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;">
                        <input type="radio" name="topUpAmount" id="topUp50Thousand" required>
                        <label for="topUp50Thousand" class="position-relative d-flex justify-content-center font-weight-semibold par-1-2em" style="transform: translateY(50%);">
                            Rp 50,000
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;">
                        <input type="radio" name="topUpAmount" id="topUp100Thousand" required>
                        <label for="topUp100Thousand" class="position-relative d-flex justify-content-center font-weight-semibold par-1-2em" style="transform: translateY(50%);">
                            Rp 100,000
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;">
                        <input type="radio" name="topUpAmount" id="topUp200Thousand" required>
                        <label for="topUp200Thousand" class="position-relative d-flex justify-content-center font-weight-semibold par-1-2em" style="transform: translateY(50%);">
                            Rp 200,000
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;">
                        <input type="radio" name="topUpAmount" id="topUp300Thousand" required>
                        <label for="topUp300Thousand" class="position-relative d-flex justify-content-center font-weight-semibold par-1-2em" style="transform: translateY(50%);">
                            Rp 300,000
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;">
                        <input type="radio" name="topUpAmount" id="topUp500Thousand" required>
                        <label for="topUp500Thousand" class="position-relative d-flex justify-content-center font-weight-semibold par-1-2em" style="transform: translateY(50%);">
                            Rp 500,000
                        </label>
                    </div>
                </div>
                <div class="d-flex justify-content-between" style="padding-inline: calc(15% / 2); gap: 2rem;">
                    <div class="divider my-auto"></div>
                    <div>atau</div>
                    <div class="divider my-auto"></div>
                </div>
                <div class="input-group w-50 mx-auto d-flex" @click="inputOnClick($event)" >
                    <span class="input-group-text border-right-0" style="border-top-right-radius: 0; border-bottom-right-radius: 0;">Rp</span>
                    <input type="text" placeholder="Masukkan nominal top-up" class="form-control" id="topUpWrittenAmount" required disabled>
                    <div class="amountInvalidInputMessage flex-wrap w-100" hidden>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column" style="gap: 1rem;">
                <h2 class="text-center font-weight-semibold par-1-2em">Pilih metode pembayaran</h2>
                <div class="d-flex card-horizontal-scroll" style="gap: 2rem; padding-inline: calc(15% / 2);">
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem;">
                        <input type="radio" name="topUpPaymentMethod" id="topUpPaymentMethod_bca" required>
                        <label for="topUpPaymentMethod_bca" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/BCA.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="topUpPaymentMethod" id="topUpPaymentMethod_bni" required>
                        <label for="topUpPaymentMethod_bni" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/BNI.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="topUpPaymentMethod" id="topUpPaymentMethod_bniSyarih" required>
                        <label for="topUpPaymentMethod_bniSyarih" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/BNI_Syariah.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="topUpPaymentMethod" id="topUpPaymentMethod_bri" required>
                        <label for="topUpPaymentMethod_bri" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/BRI.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="topUpPaymentMethod" id="topUpPaymentMethod_mandiri" required>
                        <label for="topUpPaymentMethod_mandiri" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/Mandiri.svg" alt="" class="p-1">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="topUpPaymentMethod" id="topUpPaymentMethod_visa" required>
                        <label for="topUpPaymentMethod_visa" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/VISA.svg" alt="" class="p-3">
                        </label>
                    </div>
                    <div class="item-card-shadow rounded-10 px-3 py-2" style="min-width: 15rem; min-height: 8rem">
                        <input type="radio" name="topUpPaymentMethod" id="topUpPaymentMethod_masterCard" required>
                        <label for="topUpPaymentMethod_masterCard" class="position-relative d-flex justify-content-center">
                            <img src="@/assets/images/bank/MasterCard.svg" alt="" class="">
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary font-weight-semibold w-75 mx-auto">Lanjut</button>
        </form>
    </main>
</template>
<script>
import { topUpAmountCardOnClick, inputTopUpAmountElementOnClick } from '../../assets/js/top-up-input-amount-switch';
export default {
    name: 'TopUpBalance',
    data() {
        return {
            
        }
    },
    methods: {
        cardOnClick(event) {
            if (event) {
                topUpAmountCardOnClick();
            }
        },
        inputOnClick(event) {
            if (event) {
                inputTopUpAmountElementOnClick();
            }
        }
    }
}
</script>