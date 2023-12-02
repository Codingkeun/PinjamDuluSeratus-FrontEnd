<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="page">
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>