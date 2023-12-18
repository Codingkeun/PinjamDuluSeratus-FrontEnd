<template>
<main class="mt-5 mb-5" style="padding-inline: calc(15% / 2)">
    <button type="button" @click="$router.push(`/account/investor`)" class="btn bg-white text-primary font-weight-semibold d-flex align-items-center pl-1 mb-3" style="gap: .5rem;">
        <span class="material-symbols-rounded" aria-hidden="true">
            keyboard_arrow_left
        </span>
        Kembali
    </button>
    <div class="table-responsive">
        <h1 class="font-weight-semibold mb-4">Daftar Histori Top Up</h1>
        <div class="mb-3 text-muted" v-if="pagination.total">Menampilkan {{pagination.total}} data</div>
        <table id="topUpHistoryTable" class="table table-striped sortable mb-0">
            <thead>
                <tr>
                    <th>Tanggal Pengajuan</th>
                    <th>Nominal</th>
                    <th>Tanggal Transaksi</th>
                    <th>Deadline</th>
                    <th>Bank</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody id="topUpHistoryTableData">
                <tr v-for="item in lists.data">
                    <td class="topUpHistoryTable_submissionDate">{{$changeFormatDate(item.created_at)}}</td>
                    <td class="topUpHistoryTable_amount font-weight-semibold">Rp {{$toCurrency(item.nominal)}}</td>
                    <td class="topUpHistoryTable_transactionDate">{{$changeFormatDate(item.date_payment)}}</td>
                    <td class="topUpHistoryTable_dueDate">{{$changeFormatDate(item.deadline)}}</td>
                    <td class="topUpHistoryTable_bank">
                        <div class="par-1em font-weight-semibold">{{item.bank_name}}</div>
                        <div class="par-0-8em">No Rek.<span class="receivableTable_lendersNPM"> {{item.account_number}}</span></div>
                    </td>
                    <td class="topUpHistoryTable_status">
                        <span v-if="item.status == 'success'">Selesai</span>
                        <span v-if="item.status == 'wait' && item.expired" class="text-muted">Kadaluarsa</span>
                        <router-link v-if="item.status == 'wait' && !item.expired" class="btn btn-sm btn-primary d-flex align-items-center justify-content-center" :to="`/topup-balance/confirmation/${item.id}`">Konfirmasi</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-center" v-show="lists.length">
            <Pagination :page="pagination.page" :prev="pagination.prev" :next="pagination.next" v-on:fetchData="fetchData"></Pagination>
        </div>
    </div>
</main>
</template>
<script>
import apiEnpoint from '@/services/api-endpoint'
import { ApiCore } from '@/services/core'

export default {
    name: 'HistoryTopUp',
    data() {
        return {
            lists: [],
            pagination: {
                prev: false,
                next: false,
                page: 1,
                limit: 5,
                total: 0
            },
        }
    },
    async mounted() {
        this.fetchData(this.pagination.page)
    },
    methods: {
        fetchData(page) {
            this.lists = []
            ApiCore.get(`${apiEnpoint.INVESMENT}/topup/history`, {
                page: page,
                limit: this.pagination.limit,
            }).then((result) => {
                if (result.status) {
                    this.lists = result.data
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