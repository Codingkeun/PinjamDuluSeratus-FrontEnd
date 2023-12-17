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
        <!-- <div class="mb-3 text-muted" v-if="pagination.total">Menampilkan {{pagination.total}} data</div> -->
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
                <tr v-for="item in [1,2,3,4,5]">
                    <td class="topUpHistoryTable_submissionDate">2 Oktober 2023</td>
                    <td class="topUpHistoryTable_amount font-weight-semibold">Rp 200,000</td>
                    <td class="topUpHistoryTable_transactionDate">5 Oktober 2023</td>
                    <td class="topUpHistoryTable_dueDate">10 Oktober 2023</td>
                    <td class="topUpHistoryTable_bank">
                        <div class="par-1em font-weight-semibold">BCA</div>
                        <div class="par-0-8em">No Rek.<span class="receivableTable_lendersNPM"> 1019201923</span></div>
                    </td>
                    <td class="topUpHistoryTable_status">Selesai</td>
                </tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-center">
            <Pagination></Pagination>
        </div>
        <!-- <div class="d-flex justify-content-center" v-show="listLoanActive.length">
            <Pagination :page="pagination.page" :prev="pagination.prev" :next="pagination.next" v-on:fetchDataLoanActive="fetchDataLoanActive"></Pagination>
        </div> -->
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
            listTopUp: [],
            pagination: {
                prev: false,
                next: false,
                page: 1,
                limit: 5,
                total: 0
            },
        }
    },
    // async mounted() {
    //     this.fetchDataTopUp(this.pagination.page)
    // },
    // methods: {
    //     fetchDataTopUp(page) {
    //         this.listLoanActive = []
    //         ApiCore.get(`${apiEnpoint.INVESTMENT}/pinjaman-aktif`, {
    //             page: page,
    //             limit: this.pagination.limit,
    //             status: 'belum',
    //             status_approval: 'approve'
    //         }).then((result) => {
    //             if (result.status) {
    //                 this.listLoanActive = result.data
    //             }
    //             this.pagination.prev = result.pagination.prev
    //             this.pagination.next = result.pagination.next
    //             this.pagination.page = result.pagination.page
    //             this.pagination.total = result.pagination.total
    //         })
    //     },
    // }
}
</script>