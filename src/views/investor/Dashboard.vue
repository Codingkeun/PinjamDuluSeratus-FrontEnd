<template>
    <main class="loan-area mt-5 mb-5" style="padding-inline: calc(15% / 2);">
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
                        <h3 style="font-size: 1rem;">Total Pinjaman</h3>
                        <h3 class="font-weight-semibold" style="font-size: 1.5rem;" id="dashboard_investmentAmountTotal">Rp 5,000,000</h3>
                    </div>
                    <div>
                        <h3 style="font-size: 1rem;">Periode</h3>
                        <div class="d-flex align-items-center">
                            <select id="dashboard_investmentMonthsPeriod" class="form-select bg-white font-weight-semibold border-0 pl-0 py-0 w-100" style="font-size: 1.5rem;" required>
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
                        <canvas id="chart-line" class="chart-canvas" style="height: 18rem;"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="table-responsive mt-5">
            <h1 class="font-weight-semibold mb-4">Daftar Piutang Aktif</h1>
            <table id="receivableTable" class="table table-striped sortable">
                <thead>
                    <tr>
                        <th class="no-sort">Peminjam</th>
                        <th>Jumlah Pinjaman</th>
                        <th>Nomor HP</th>
                        <th>Jurusan</th>
                        <th>Kelas</th>
                        <th data-defaultsign='no-sort'></th>
                    </tr>
                </thead>
                <tbody id="receivableTableData">
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Andrea</div>
                            <div style="font-size: .8rem;">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 2,000,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 222</td>
                        <td>
                            <button type="button" class="btn btn-primary receivableTable_detailLoan" onclick="window.location.href = 'investor_dashboard_detail-pinjaman.html'">Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Jane Smith</div>
                            <div style="font-size: .8rem;">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 7,000,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 221</td>
                        <td>
                            <button type="button" class="btn btn-primary receivableTable_detailLoan" onclick="window.location.href = ''">Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Ahmad Abdullah</div>
                            <div style="font-size: .8rem;">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 5,000,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 220</td>
                        <td>
                            <button type="button" class="btn btn-primary receivableTable_detailLoan" onclick="window.location.href = ''">Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="receivableTable_lendersNameAndNPM">
                            <div class="receivableTable_lendersName font-weight-semibold">Maria Gonzalez</div>
                            <div style="font-size: .8rem;">NPM <span class="receivableTable_lendersNPM">1019201923</span></div>
                        </td>
                        <td class="receivableTable_loanAmount font-weight-semibold">Rp 8,750,000</td>
                        <td class="receivableTableTable_lendersPhone">08123456789</td>
                        <td class="receivableTableTable_lendersMajor">Teknik Informatika</td>
                        <td class="receivableTableTable_lendersClass">TIF RM 219</td>
                        <td>
                            <button type="button" class="btn btn-primary receivableTable_detailLoan" onclick="window.location.href = ''">Detail</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>
<script>
export default {
    name: 'DashboardInvestor',
    data() {
        return {
            
        }
    }
}
</script>