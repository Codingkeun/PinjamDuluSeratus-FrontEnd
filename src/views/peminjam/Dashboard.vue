<template>
<main class="loan-area mt-5 mb-5" style="padding-inline: calc(15% / 2);">
    <h1 class="font-weight-semibold mt-5">Statistik Pinjaman Anda</h1>

    <div class="mt-5">
        <div class="row justify-content-between w-100 mx-auto" style="column-gap: 1rem; row-gap: 1rem;">
            <div class="row d-flex align-items-center ml-0" style="column-gap: 3rem; row-gap: 1rem;">
                <div>
                    <h3 style="font-size: 1rem;">Total Pinjaman</h3>
                    <h3 class="font-weight-semibold" style="font-size: 1.5rem;" id="dashboard_loanAmountTotal">Rp 5,000,000</h3>
                </div>
                <div>
                    <h3 style="font-size: 1rem;">Periode</h3>
                    <div class="d-flex align-items-center">
                        <select id="dashboard_loanMonthsPeriod" class="form-select bg-white font-weight-semibold border-0 pl-0 py-0 w-100" style="font-size: 1.5rem;" required>
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
        <h1 class="font-weight-semibold mb-4">Daftar Pinjaman Aktif</h1>
        <table id="loanTable" class="table table-striped sortable">
            <thead>
                <tr>
                    <th class="no-sort">Investor</th>
                    <th>Jumlah Pinjaman</th>
                    <th>Tanggal Jatuh Tempo</th>
                    <th>Total Pembayaran</th>
                    <th>Status</th>
                    <th data-defaultsign='no-sort'></th>
                </tr>
            </thead>
            <tbody id="loanTableData">
                <tr>
                    <td class="loanTable_investorName">John Doe</td>
                    <td class="loanTable_loanAmount">Rp 2,000,000</td>
                    <td class="loanTable_dueDate" data-dateformat="DD MMM YYYY">15 November 2023</td>
                    <td class="loanTable_totalPayment">Rp 2,250,000</td>
                    <td class="loanTable_statusLoan">Lunas</td>
                    <td>
                        <button type="button" class="btn btn-primary loanTable_detailLoan" onclick="window.location.href = 'peminjam_pembayaran_detail-pinjaman.html'">Detail</button>
                    </td>
                </tr>
                <tr>
                    <td class="loanTable_investorName">Jane Smith</td>
                    <td class="loanTable_loanAmount">Rp 7,000,000</td>
                    <td class="loanTable_dueDate" data-dateformat="DD MMM YYYY">2 April 2023</td>
                    <td class="loanTable_totalPayment">Rp 7,750,000</td>
                    <td class="loanTable_statusLoan">Lunas</td>
                    <td>
                        <button type="button" class="btn btn-primary loanTable_detailLoan">Detail</button>
                    </td>
                </tr>
                <tr>
                    <td class="loanTable_investorName">Ahmad Abdullah</td>
                    <td class="loanTable_loanAmount">Rp 5,000,000</td>
                    <td class="loanTable_dueDate" data-dateformat="DD MMM YYYY">20 Januari 2024</td>
                    <td class="loanTable_totalPayment">Rp 6,450,000</td>
                    <td class="loanTable_statusLoan">Belum Lunas</td>
                    <td>
                        <button type="button" class="btn btn-primary loanTable_detailLoan">Detail</button>
                    </td>
                </tr>
                <tr>
                    <td class="loanTable_investorName">Maria Gonzalez</td>
                    <td class="loanTable_loanAmount">Rp 8,000,000</td>
                    <td class="loanTable_dueDate" data-dateformat="DD MMM YYYY">20 Maret 2024</td>
                    <td class="loanTable_totalPayment">Rp 8,750,000</td>
                    <td class="loanTable_statusLoan">Belum Lunas</td>
                    <td>
                        <button type="button" class="btn btn-primary loanTable_detailLoan">Detail</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</main>
</template>
<script>
export default {
    name: 'PeminjamDashboard',
    data() {
        return {
            
        }
    }
}
</script>