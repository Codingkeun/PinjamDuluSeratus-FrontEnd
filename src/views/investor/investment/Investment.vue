<template>

    <main class="mt-5 mb-5 w-100 d-flex flex-column" style="padding-inline: calc(15% / 2);">
        <h1 class="font-weight-semibold">Daftar Peminjam Aktif</h1>
        <div class="d-flex justify-content-end">
            <div class="mb-3 text-muted" v-if="pagination.total">Menampilkan {{pagination.total}} data</div>
        </div>
        <div class="active-lendees-list d-flex flex-column mt-4" style="gap: 3rem" v-if="pagination.total">
            <div class="card p-5 rounded-10 container-card-shadow" v-for="item in list">
                <div class="card-body p-0 mb-4">
                    <h2 class="card-title font-weight-bold m-0 par-1-5em" id="activeLendeesLoanAmount">Rp {{ $toCurrency(item.nominal) }}</h2>
                    <h3 class="card-subtitle font-weight-semibold text-primary m-0 mb-4 par-1em" id="activeLendeesTipAmount">Tip Rp {{ $toCurrency((item.tip)) }}</h3>
                    <div class="d-flex flex-column">
                        <h3 class="card-text font-weight-semibold par-1-2em" id="activeLendeesName">{{item.peminjam_name || '-'}}</h3>
                        <h4 class="card-text par-1em"><span id="activeLendeesNPM">NPM {{item.peminjam_npm || '-'}}</span></h4>
                        <h4 class="card-text par-1em"><span id="activeLendeesPhone">{{item.peminjam_phone || '-'}}</span></h4>
                    </div>
                </div>
                <button @click="$router.push('investment/detail/' + item.id)" class="btn btn-primary font-weight-semibold">Detail</button>
            </div>
        </div>
        <div v-else class="card rounded-10 bg-light">
            <div class="card-body">
                <span class="text-center text-muted">Belum ada pengajuan pinjaman</span>
            </div>
        </div>

        <div class="d-flex justify-content-center" v-if="pagination.total">
            <Pagination :page="pagination.page" :prev="pagination.prev" :next="pagination.next" v-on:fetchData="fetchData"></Pagination>
        </div>
    </main>
</template>
<script>
import apiEnpoint from '@/services/api-endpoint'
import { ApiCore } from '@/services/core'

export default {
    name: 'Investment',
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
            ApiCore.get(`${apiEnpoint.INVESMENT}/pinjaman-aktif`, {
                page: page,
                limit: this.pagination.limit,
                status_approval: 'wait'
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