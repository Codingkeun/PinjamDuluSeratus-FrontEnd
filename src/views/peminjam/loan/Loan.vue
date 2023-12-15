<template>
<main class="loan-area mt-5 mb-5" style="padding-inline: calc(15% / 2);">
    <div class="d-flex justify-content-between align-items-center flex-wrap mt-5" style="gap: 2rem;">
        <h1 class="font-weight-semibold">Pinjaman</h1>
        <button @click="$router.push('/loan/form')" class="btn btn-primary font-weight-semibold" style="height: 44px;">Buat Pengajuan Pinjaman</button>
    </div>
    <div class="table-responsive mt-5">
        <div class="d-flex justify-content-end">
            <div class="mb-3 text-muted" v-if="pagination.total">Menampilkan {{pagination.total}} data</div>
        </div>
        <table id="loanTable" class="table table-striped sortable">
            <thead>
                <tr>
                    <th class="no-sort">Investor</th>
                    <th>Jumlah Pinjaman</th>
                    <th>Tanggal Jatuh Tempo</th>
                    <th>Total Pembayaran</th>
                    <th colspan=2>Status</th>
                </tr>
            </thead>
            <tbody id="loanTableData" v-if="list.length">
                <tr v-for="item in list">
                    <td class="loanTable_investorName">{{item.investor_name || '-'}}</td>
                    <td class="loanTable_loanAmount">Rp {{ $toCurrency(item.nominal) }}</td>
                    <td class="loanTable_dueDate">{{ $changeFormatDate(item.deadline) }}</td>
                    <td class="loanTable_totalPayment">Rp {{ $toCurrency((item.nominal + item.tip)) }}</td>
                    <td class="loanTable_statusLoan">
                        <span v-if="item.status_approval == 'wait'" class="text-muted">Menunggu Approval Investor</span>
                        <span v-if="item.instalment_status == 'belum' && item.status_approval == 'approve'">Belum Lunas</span>
                        <span v-if="item.instalment_status == 'lunas' && item.status_approval == 'approve'">Lunas</span>
                    </td>
                    <td>
                        <button type="button" @click="$router.push(`loan/detail/${item.id}`)" aria-label="Detail Pinjaman" class="btn loanTable_detailLoan" :class="{'btn-primary': item.status_approval == 'approve', 'btn-light border': item.status_approval == 'wait'}">Detail</button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr><td colspan="6" class="text-center text-muted">Belum ada riwayat pinjaman</td></tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-center" v-show="list.length">
            <Pagination :page="pagination.page" :prev="pagination.prev" :next="pagination.next" v-on:fetchData="fetchData"></Pagination>
        </div>
    </div>
</main>
</template>
<script>
import apiEnpoint from '@/services/api-endpoint'
import { ApiCore } from '@/services/core'

export default {
    name: 'Pinjaman',
    data() {
        return {
            list: [],
            pagination: {
                prev: false,
                next: false,
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
            ApiCore.get(`${apiEnpoint.LOAN}/pinjaman-aktif`, {
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