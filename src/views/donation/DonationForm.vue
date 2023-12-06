<template>
    <div class="d-block">
        <div class="d-flex justify-content-center mt-5">
            <ul class="list-unstyled d-flex justify-content-center align-item-center" style="gap: 2rem">
                <li class="d-flex flex-column" @click="changeTab('StepOne')">
                    <div class="breadcrumb-custom-container">
                        <span class="rounded-circle border border-primary breadcrumb-custom" style="width: 3rem; height: 3rem; border-width: 3px !important;"></span>
                        <span class="checkmark" :class="{'checkmark-checked': statusTab[0]}"></span>
                    </div>
                    <p class="mt-5 pt-2 text-center par-0-8em">Isi nominal dan metode</p>
                </li>
                <li class="d-flex flex-column" @click="changeTab('StepTwo')">
                    <div class="breadcrumb-custom-container">
                        <span class="rounded-circle border border-primary breadcrumb-custom" style="width: 3rem; height: 3rem; border-width: 3px !important;"></span>
                        <span class="checkmark" :class="{'checkmark-checked': statusTab[1]}"></span>
                    </div>
                    <p class="mt-5 pt-2 text-center par-0-8em">Isi identitas diri</p>
                </li>
                <li class="d-flex flex-column" @click="changeTab('StepThree')">
                    <div class="breadcrumb-custom-container">
                        <span class="rounded-circle border border-primary breadcrumb-custom" style="width: 3rem; height: 3rem; border-width: 3px !important;"></span>
                        <span class="checkmark" :class="{'checkmark-checked': statusTab[2]}"></span>
                    </div>
                    <p class="mt-5 pt-2 text-center par-0-8em">Informasi pembayaran</p>
                </li>
            </ul>
            <div class="bg-primary position-absolute breadcrumb-line" style="height: 2px; width: clamp(15rem, calc(1vw + 20rem), 25rem); top: 17.8rem; z-index: -1;"></div>
        </div>
        <component :tmpForm="form" v-on:onHandleSubmit="onHandleSubmit" :is="currentTabComponent"></component>
    </div>
</template>
<script>
import StepOne from './tabs/StepOne.vue';
import StepTwo from './tabs/StepTwo.vue';
import StepThree from './tabs/StepThree.vue';
export default {
    name: 'DonationForm',
    data() {
        return {
            currentTabComponent: 'StepOne',
            form: {},
            statusTab: [1,0,0]
        }
    },
    components: {StepOne, StepTwo, StepThree},
    methods: {
        onHandleSubmit(data) {
            this.form = data

            if (this.currentTabComponent == 'StepOne') {
                this.statusTab[1] = 1
                this.changeTab('StepTwo')
            } else if (this.currentTabComponent == 'StepTwo') {
                this.statusTab[2] = 1
                this.changeTab('StepThree')
            }
        },
        changeTab(tab) {
            let isAllow = false
            if (tab == 'StepOne' && this.statusTab[0]) isAllow = true
            if (tab == 'StepTwo' && this.statusTab[1]) isAllow = true
            if (tab == 'StepThree' && this.statusTab[2]) isAllow = true

            if (isAllow) this.currentTabComponent = tab
        }

    }
}
</script>