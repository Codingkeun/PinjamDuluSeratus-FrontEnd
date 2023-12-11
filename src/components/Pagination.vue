<template>
    <nav class="mt-5 align-self-center">
        <ul class="custom-pagination d-flex p-0" style="gap: 1rem;">
            <button type="button" class="btn btn-secondary text_white custom-pagination-backward d-flex justify-content-center" 
            :class="{ disabled: !prev }"
            :disabled="!prev"
            @click="fetch('prev')">
                <span class="material-symbols-rounded">
                    keyboard_arrow_left
                </span>
            </button>
            <div class="bg-secondary d-flex align-items-center justify-content-center">
                <div class="custom-pagination-page-item text-primary font-weight-semibold">{{ page }}</div>
            </div>
            <button type="button" class="btn btn-primary text_white custom-pagination-forward d-flex justify-content-center"
            :class="{ disabled: !next }"
            :disabled="!next"
            @click="fetch('next')">
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
        params: {
            type: Object
        },
        prev: {
            type: Boolean,
            default: false
        },
        next: {
            type: Boolean,
            default: false
        },
        page: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            currentPage: 1
        }
    },
    watch: {
        currentPage(value) {
            this.currentPage = value
        },
    },
    updated() {
        this.currentPage = this.page
    },
    methods: {
        fetch(type=null) {
            if (type == 'next')
                this.currentPage += 1
            else
                this.currentPage -= 1
            
            this.$emit('fetchData', this.currentPage);
        }
    },
};
</script>