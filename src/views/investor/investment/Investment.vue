<template>

    <main class="mt-5 mb-5 w-100 d-flex flex-column" style="padding-inline: calc(15% / 2);">
        <h1 class="font-weight-semibold">Daftar Peminjam Aktif</h1>
        <div class="active-lendees-list d-flex flex-column mt-4" style="gap: 3rem">
            <div class="card p-5 rounded-10 container-card-shadow" v-for="item in [1,2,3,4,5,6,7,8]">
                <div class="card-body p-0 mb-4">
                    <h2 class="card-title font-weight-bold m-0 par-1-5em" id="activeLendeesLoanAmount">Rp 2,000,000</h2>
                    <h3 class="card-subtitle font-weight-semibold text-primary m-0 mb-4 par-1em" id="activeLendeesTipAmount">Tip Rp 500,000</h3>
                    <div class="d-flex flex-column">
                        <h3 class="card-text font-weight-semibold par-1-2em" id="activeLendeesName">Andrea</h3>
                        <h4 class="card-text par-1em"><span id="activeLendeesNPM">NPM 1019201923</span></h4>
                        <h4 class="card-text par-1em"><span id="activeLendeesPhone">08123456789</span></h4>
                    </div>
                </div>
                <button @click="$router.push('investment/detail/' + item)" class="btn btn-primary font-weight-semibold">Detail</button>
            </div>
        </div>

        <nav class="mt-5 align-self-center">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </main>
</template>
<script>
export default {
    name: 'Investment',
    data() {
        return {
            
        }
    }
}
</script>