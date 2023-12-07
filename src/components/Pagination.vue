<template>
    <nav class="mt-5 align-self-center">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'Pagination',
    props: {
        page: {
            type: Number,
            default: 1
        }
    },
    data() {

    }
}
</script>