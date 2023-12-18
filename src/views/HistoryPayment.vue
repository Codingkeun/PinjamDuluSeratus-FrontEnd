<template>
<main class="mt-5 mb-5" style="padding-inline: calc(15% / 2);">
    <router-link :to="`/loan/detail/` + $route.params.id" v-if="$store.state.user?.role == 'peminjam'" class="payment-history-back-button bg-white text-primary font-weight-semibold d-flex align-items-center p-0" style="gap: .5rem; width: fit-content">
        <span class="material-symbols-rounded">
            keyboard_arrow_left
        </span>
        Kembali
    </router-link>
    <router-link :to="`/investment/detail/${$route.params.id}`" v-if="$store.state.user?.role == 'investor'" class="payment-history-back-button bg-white text-primary font-weight-semibold d-flex align-items-center p-0" style="gap: .5rem; width: fit-content">
        <span class="material-symbols-rounded">
            keyboard_arrow_left
        </span>
        Kembali
    </router-link>
    <h1 class="font-weight-semibold mt-5">Histori Pembayaran</h1>
    <div class="table-responsive mt-5">
        <div class="d-flex justify-content-end">
            <div class="mb-3 text-muted" v-if="pagination.total">Menampilkan {{pagination.total}} data</div>
        </div>
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
            <tbody v-if="list.length">
                <tr v-for="item in list">
                    <td class="lendee_paymentHistory_dueDate">{{ $changeFormatDate(item.date, 'DD MMMM YYYY') }}</td>
                    <td class="lendee_PaymentHistory_totalPayment">Rp {{ $toCurrency(item.nominal) }}</td>
                    <td class="lendee_PaymentHistory_paymentDate">{{ $changeFormatDate(item.date_payment) }}</td>
                    <td class="lendee_paymentHistory_paymentStatus">
                        <span v-if="item.status == 'belum'">Belum Lunas</span>
                        <span v-else>Lunas</span>
                    </td>
                    <td class="lendee_paymentHistory_proofOfPaymentButton">
                        <a :href="item.attachment" class="btn btn-primary lendee_proofOfPaymentButton" v-if="item.date_payment && item.attachment" target="_blank">Lihat Bukti Pembayaran</a>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr><td colspan="4" class="text-center text-muted">Belum ada riwayat pembayaran</td></tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-center" v-show="list.length">
            <Pagination :page="pagination.page" :prev="pagination.prev" :next="pagination.next" v-on:fetchData="fetchData"></Pagination>
        </div>
    </div>
</main>
</template>
<script>
import { ApiCore } from '@/services/core';
import apiEnpoint from '@/services/api-endpoint';

export default {
    name: 'HistoryPayment',
    data() {
        return {
            list: [],
            pagination: {
                prev: false,
                next: true,
                page: 1,
                limit: 5,
                total: 0
            },
        }
    },
    mounted() {
        this.fetchData(this.pagination.page)
    },
    methods: {
        fetchData(page) {
            this.list = []
            ApiCore.get(`${apiEnpoint.LOAN}/riwayat`, {
                pinjaman_id: this.$route.params.id,
                page: page,
                limit: this.pagination.limit,
            }).then((result) => {
                if (result.status) {
                    this.list = result.data
                }
                this.pagination.prev = result.pagination.prev
                this.pagination.next = result.pagination.next
                this.pagination.page = result.pagination.page
                this.pagination.total = result.pagination.total
            })
        },
    }
}
</script>