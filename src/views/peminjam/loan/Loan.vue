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
                        <router-link to="loan/detail/1" type="button" class="btn btn-primary loanTable_detailLoan">Detail</router-link>
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
    name: 'Pinjaman',
    data() {
        return {
            
        }
    }
}
</script>