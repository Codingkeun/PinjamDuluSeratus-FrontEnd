<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="page">
    <NavBar v-if="$route.meta.navbar"></NavBar>
    <router-view></router-view>
    <Footer v-if="$route.meta.footer"></Footer>
  </div>
</template>