<template>
  <Header />
  <div class="pt-[180px] ">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script setup>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
</script>
