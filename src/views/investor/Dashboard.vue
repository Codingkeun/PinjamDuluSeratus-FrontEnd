<template>
    <main class="loan-area" style="padding-inline: calc(15% / 2); margin-block: 100px;">
        <h1 class="font-weight-semibold mt-5">Statistik Investasi Anda</h1>

        <ul class="nav nav-tabs mt-4">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Total Saldo yang Dipinjamkan</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Total Tips yang Didapatkan</a>
            </li>
        </ul>

        <div class="mt-5">
            <div class="row justify-content-between w-100 mx-auto" style="column-gap: 1rem; row-gap: 1rem;">
                <div class="row d-flex align-items-center ml-0" style="column-gap: 3rem; row-gap: 1rem;">
                    <div>
                        <h3 class="par-1em">Total Pinjaman</h3>
                        <h3 class="font-weight-semibold par-1-5em" id="dashboard_investmentAmountTotal">Rp {{ $toCurrency(1870000) }}</h3>
                    </div>
                    <div>
                        <h3 class="par-1em">Periode</h3>
                        <div class="d-flex align-items-center">
                            <select id="dashboard_investmentMonthsPeriod" class="form-select bg-white font-weight-semibold border-0 pl-0 py-0 w-100 par-1-5em" required>
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

        <div class="table-responsive" style="margin-top: 100px;">
            <h1 class="font-weight-semibold mb-4">Daftar Piutang Aktif</h1>
            <table id="activeReceivableTable" class="table table-striped sortable mb-0">
                <div class="d-flex justify-content-end">
                    <div class="mb-3 text-muted" v-if="paginationLoanActive.total">Menampilkan {{paginationLoanActive.total}} data</div>
                </div>
                <thead>
                    <tr>
                        <th class="no-sort">Peminjam</th>
                        <th>Jumlah Pinjaman</th>
                        <th>Nomor HP</th>
                        <th>Jurusan</th>
                        <th>Kelas</th>
                        <th>Status</th>
                        <th data-defaultsign='no-sort'></th>
                    </tr>
                </thead>
                <tbody id="receivableTableData">
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Andrea</div>
                            <div class="par-0-8em">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 2,000,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 222</td>
                        <td class="receivableTableTable_lendersStatus">Belum Lunas</td>
                        <td>
                            <router-link to="/investment/detail/:id" type="button" class="receivableTable_detailLoan btn btn-primary" aria-label="Detail Peminjaman">Detail</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Jane Smith</div>
                            <div class="par-0-8em">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 7,000,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 221</td>
                        <td class="receivableTableTable_lendersStatus">Belum Lunas</td>
                        <td>
                            <router-link to="/investment/detail/:id" type="button" class="receivableTable_detailLoan btn btn-primary" aria-label="Detail Peminjaman">Detail</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Ahmad Abdullah</div>
                            <div class="par-0-8em">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 5,000,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 220</td>
                        <td class="receivableTableTable_lendersStatus">Belum Lunas</td>
                        <td>
                            <router-link to="/investment/detail/:id" type="button" class="receivableTable_detailLoan btn btn-primary" aria-label="Detail Peminjaman">Detail</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Maria Gonzalez</div>
                            <div class="par-0-8em">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 8,750,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 219</td>
                        <td class="receivableTableTable_lendersStatus">Belum Lunas</td>
                        <td>
                            <router-link to="/investment/detail/:id" type="button" class="receivableTable_detailLoan btn btn-primary" aria-label="Detail Peminjaman">Detail</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-center">
                    <paginationLoanActive></paginationLoanActive>
            </div>
        </div>

        <div class="table-responsive mt-6" style="margin-top: 100px;">
            <h1 class="font-weight-semibold mb-4">Daftar Piutang Lunas</h1>
            <table id="paidOffReceivableTable" class="table table-striped sortable mb-0">
                <thead>
                    <tr>
                        <th class="no-sort">Peminjam</th>
                        <th>Jumlah Pinjaman</th>
                        <th>Nomor HP</th>
                        <th>Jurusan</th>
                        <th>Kelas</th>
                        <th>Status</th>
                        <th data-defaultsign='no-sort'></th>
                    </tr>
                </thead>
                <tbody id="receivableTableData">
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Andrea</div>
                            <div class="par-0-8em">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 2,000,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 222</td>
                        <td class="receivableTableTable_lendersStatus">Lunas</td>
                        <td>
                            <router-link to="/investment/detail/:id" type="button" class="receivableTable_detailLoan btn btn-primary" aria-label="Detail Peminjaman">Detail</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Jane Smith</div>
                            <div class="par-0-8em">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 7,000,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 221</td>
                        <td class="receivableTableTable_lendersStatus">Lunas</td>
                        <td>
                            <router-link to="/investment/detail/:id" type="button" class="receivableTable_detailLoan btn btn-primary" aria-label="Detail Peminjaman">Detail</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Ahmad Abdullah</div>
                            <div class="par-0-8em">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 5,000,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 220</td>
                        <td class="receivableTableTable_lendersStatus">Lunas</td>
                        <td>
                            <router-link to="/investment/detail/:id" type="button" class="receivableTable_detailLoan btn btn-primary" aria-label="Detail Peminjaman">Detail</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Maria Gonzalez</div>
                            <div class="par-0-8em">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 8,750,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 219</td>
                        <td class="receivableTableTable_lendersStatus">Lunas</td>
                        <td>
                            <router-link to="/investment/detail/:id" type="button" class="receivableTable_detailLoan btn btn-primary" aria-label="Detail Peminjaman">Detail</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-center">
                <Pagination></Pagination>
            </div>
        </div>
    </main>
</template>
<script>
import Line from '@/components/chart/Line.vue';

export default {
    name: 'DashboardInvestor',
    data() {
        return {
            listLoanActive: [],
            listLoanActivePaid: [],
            paginationLoanActive: {
                prev: false,
                next: false,
                page: 1,
                limit: 5,
                total: 0
            },
            paginationLoanActivePaid: {
                prev: false,
                next: false,
                page: 1,
                limit: 5,
                total: 0
            },
            statistic: {
                datasets: [100000, 200000, 150000, 50000, 500000, 120000, 0, 0, 200000, 0, 400000, 150000]
            },
        }
    },
    components: {
        'line-chart': Line
    },
    mounted() {
        // this.fetchData()
    },
    methods: {
        fetchData() {
            this.listLoanActive = []
            ApiCore.find(`${apiEnpoint.INVESMENT}/piutang-aktif`, this.$route.params.id)
                    .then((result) => {
                        if (result.status)
                            this.listLoanActive = result.data
                    })
                    .catch((error) => {
                        this.$toast.error(error.message)
                    })
        },
    }
}
</script>