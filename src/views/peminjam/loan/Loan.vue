<template>
<main class="loan-area mt-5 mb-5" style="padding-inline: calc(15% / 2);">
    <div class="d-flex justify-content-between align-items-center flex-wrap mt-5" style="gap: 2rem;">
        <h1 class="font-weight-semibold">Pinjaman</h1>
        <router-link to="/loan/form" class="btn btn-primary font-weight-semibold" style="height: 44px;">Buat Pengajuan Pinjaman</router-link>
    </div>
    <div class="table-responsive mt-5">
        <table id="loanTable" class="table table-striped sortable">
            <thead>
                <tr>
                    <th class="no-sort">Investor</th>
                    <th>Jumlah Pinjaman</th>
                    <th>Tanggal Jatuh Tempo</th>
                    <th>Total Pembayaran</th>
                    <th>Status</th>
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
                    </td>
                    <td>
                        <router-link :to="`loan/detail/${item.id}`" type="button" class="btn btn-primary loanTable_detailLoan">Detail</router-link>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr><td colspan="6" class="text-center text-muted">Belum ada riwayat pinjaman</td></tr>
            </tbody>
        </table>
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
                limit: 15,
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