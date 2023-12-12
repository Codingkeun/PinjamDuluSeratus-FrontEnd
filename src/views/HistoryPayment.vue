<template>
<main class="mt-5 mb-5" style="padding-inline: calc(15% / 2);">
    <router-link to="/loan/detail/1" v-if="user.role == 'peminjam'" class="payment-history-back-button bg-white text-primary font-weight-semibold d-flex align-items-center p-0" style="gap: .5rem; width: fit-content">
        <span class="material-symbols-rounded">
            keyboard_arrow_left
        </span>
        Kembali
    </router-link>
    <router-link to="/dashboard/investor" v-if="user.role == 'investor'" class="payment-history-back-button bg-white text-primary font-weight-semibold d-flex align-items-center p-0" style="gap: .5rem; width: fit-content">
        <span class="material-symbols-rounded">
            keyboard_arrow_left
        </span>
        Kembali
    </router-link>
    <h1 class="font-weight-semibold mt-5">Histori Pembayaran</h1>
    <div class="table-responsive mt-5">
        <table id="lendeePaymentHistoryTable" class="table table-striped sortable">
            <thead>
                <tr>
                    <th style="width: fit-content;">Tanggal Jatuh Tempo</th>
                    <th>Jumlah Tagihan</th>
                    <th>Tanggal Pembayaran</th>
                    <th>Status</th>
                    <th data-defaultsign='no-sort'></th>
                </tr>
            </thead>
            <tbody id="lendee_paymentHistoryTable">
                <tr>
                    <td class="lendee_paymentHistory_dueDate" data-dateformat="DD MMM YYYY">20 Januari 2024</td>
                    <td class="lendee_PaymentHistory_totalPayment">Rp 2,250,000</td>
                    <td class="lendee_PaymentHistory_paymentDate">-</td>
                    <td class="lendee_PaymentHistory_paymentStatus">Belum Lunas</td>
                    <td class="lendee_paymentHistory_proofOfPaymentButton"></td>
                </tr>
                <tr>
                    <td class="lendee_paymentHistory_dueDate" data-dateformat="DD MMM YYYY">15 Februari 2024</td>
                    <td class="lendee_PaymentHistory_totalPayment">Rp 3,250,000</td>
                    <td class="lendee_PaymentHistory_paymentDate">-</td>
                    <td class="lendee_PaymentHistory_paymentStatus">Belum Lunas</td>
                    <td class="lendee_paymentHistory_proofOfPaymentButton"></td>
                </tr>
                <tr>
                    <td class="lendee_paymentHistory_dueDate" data-dateformat="DD MMM YYYY">20 Juni 2023</td>
                    <td class="lendee_PaymentHistory_totalPayment">Rp 5,250,000</td>
                    <td class="lendee_PaymentHistory_paymentDate">20 November 2023</td>
                    <td class="lendee_paymentHistory_paymentStatus">Lunas</td>
                    <td class="lendee_paymentHistory_proofOfPaymentButton">
                        <button type="button" class="btn btn-primary lendee_proofOfPaymentButton">Lihat Bukti Pembayaran</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</main>
</template>
<script>
import {useUserStore} from '@/stores/user'
export default {
    name: '',
    data() {
        return {
            
        }
    },
    setup() {
        const user = useUserStore()
        return {
            user
        }
    },
}
</script>