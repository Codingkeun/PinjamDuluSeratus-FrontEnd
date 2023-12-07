<template>
    <nav class="mt-5 align-self-center">
        <ul class="custom-pagination d-flex p-0" style="gap: 1rem;">
            <button type="button" class="btn btn-primary text_white custom-pagination-backward d-flex justify-content-center">
                <span class="material-symbols-rounded">
                    keyboard_arrow_left
                </span>
            </button>
            <div class="bg-secondary d-flex align-items-center justify-content-center">
                <div class="custom-pagination-page-item text-primary font-weight-semibold">1</div>
            </div>
            <button type="button" class="btn btn-primary text_white custom-pagination-forward d-flex justify-content-center">
                <span class="material-symbols-rounded">
                    keyboard_arrow_right
                </span>
            </button>
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