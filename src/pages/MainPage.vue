<template>
  <Carousel />
  <Catalog />
  <Company />
  <Product />
  <Slider />
  <Blog :limit="3" />
</template>

<script setup>
import Carousel from "../components/Carousel.vue";
import Catalog from "../components/Catalog.vue";
import Company from "../components/Company.vue";
import Product from "../components/Products.vue";
import Blog from "../components/Blog.vue";
import Slider from "../components/Slider.vue";
</script>
