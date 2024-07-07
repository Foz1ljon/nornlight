<template>
  <div class="">
    <Catalog routerhidden="hidden" />

    <div v-for="(item, i) in 3" :key="i" class="md:block hidden">
      <Catalog hidden="hidden" />
    </div>
    <Slider />
    <Blog />
  </div>
</template>

<script setup>
import Slider from "../components/Slider.vue";
import Catalog from "../components/Catalog.vue";
import Blog from "../components/Blog.vue";
</script>
