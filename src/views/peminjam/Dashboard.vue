<template>
<main class="loan-area mt-5 mb-5" style="padding-inline: calc(15% / 2);">
    <h1 class="font-weight-semibold mt-5">Statistik Pinjaman Anda</h1>

    <div class="mt-5">
        <div class="row justify-content-between w-100 mx-auto" style="column-gap: 1rem; row-gap: 1rem;">
            <div class="row d-flex align-items-center ml-0" style="column-gap: 3rem; row-gap: 1rem;">
                <div>
                    <h3 class="par-1em">Total Pinjaman</h3>
                    <h3 class="font-weight-semibold par-1-5em" id="dashboard_loanAmountTotal">Rp 5,000,000</h3>
                </div>
                <div>
                    <h3 class="par-1em">Periode</h3>
                    <div class="d-flex align-items-center">
                        <select id="dashboard_loanMonthsPeriod" class="form-select bg-white font-weight-semibold border-0 pl-0 py-0 w-100 par-1-5em" required>
                            <option value="januaryToMarch">Januari-Maret 2023</option>
                            <option value="aprilToJune">April-Juni 2023</option>
                            <option value="julyToSeptember">Juli-September 2023</option>
                            <option value="octoberToDecember">Oktober-Desember 2023</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="card z-index-2 h-100 mt-4">
            <div class="card-body p-1">
                <div class="chart">
                    <line-chart :datasets="statistic.datasets"></line-chart>
                </div>
            </div>
        </div>
    </div>

    <div class="table-responsive mt-5">
        <h1 class="font-weight-semibold mb-4">Daftar Pinjaman Aktif</h1>
        <div class="mb-3 text-muted" v-if="pagination.total">Menampilkan {{pagination.total}} data</div>
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
            <tbody id="loanTableData" v-if="listLoanActive.length">
                <tr v-for="item in listLoanActive">
                    <td class="loanTable_investorName">{{item.investor_name || '-'}}</td>
                    <td class="loanTable_loanAmount">Rp {{ $toCurrency(item.nominal) }}</td>
                    <td class="loanTable_dueDate">{{ $changeFormatDate(item.deadline) }}</td>
                    <td class="loanTable_totalPayment">Rp {{ $toCurrency((item.nominal + item.tip)) }}</td>
                    <td class="loanTable_statusLoan">
                        <span v-if="item.status_approval == 'wait'" class="text-muted">Menunggu Approval Investor</span>
                        <span v-if="item.instalment_status == 'belum' && item.status_approval == 'approve'">Belum Lunas</span>
                    </td>
                    <td>
                        <button type="button" @click="$router.push(`/loan/detail/${item.id}`)" class="btn loanTable_detailLoan" :class="{'btn-primary': item.status_approval == 'approve', 'btn-light border': item.status_approval == 'wait'}" aria-label="Detail Pinjaman">Detail</button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr><td colspan="6" class="text-center text-muted">Belum ada riwayat pinjaman</td></tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-center" v-show="listLoanActive.length">
            <Pagination :page="pagination.page" :prev="pagination.prev" :next="pagination.next" v-on:fetchDataLoanActive="fetchDataLoanActive"></Pagination>
        </div>
    </div>
</main>
</template>
<script>
import apiEnpoint from '@/services/api-endpoint'
import { ApiCore } from '@/services/core'

import Line from '@/components/chart/Line.vue';
export default {
    name: 'PeminjamDashboard',
    data() {
        return {
            statistic: {
                datasets: [100000, 200000, 150000, 50000, 500000, 120000, 0, 0, 200000, 0, 400000, 150000]
            },
            listLoanActive: [],
            pagination: {
                prev: false,
                next: false,
                page: 1,
                limit: 5,
                total: 0
            },
        }
    },
    components: {
        'line-chart': Line
    },
    async mounted() {
        this.fetchDataStatistic()
        this.fetchDataLoanActive(this.pagination.page)
    },
    methods: {
        async fetchDataStatistic() {
            ApiCore.get(`${apiEnpoint.LOAN}/dashboard/statistic`, {
                status: 'belum',
                status_approval: 'approve'
            }, false).then((result) => {
                if (result.status) {
                    this.statistic.datasets = result.data.statistic_loan_month.map((data) => parseInt(data))
                }
            })
        },
        fetchDataLoanActive(page) {
            this.listLoanActive = []
            ApiCore.get(`${apiEnpoint.LOAN}/pinjaman-aktif`, {
                page: page,
                limit: this.pagination.limit,
                status: 'belum',
                status_approval: 'approve'
            }).then((result) => {
                if (result.status) {
                    this.listLoanActive = result.data
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