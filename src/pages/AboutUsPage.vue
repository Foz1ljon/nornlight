<template>
  <div class="container pb-10">
    <div class="flex gap-5 md:justify-between md:flex-row flex-col">
      <Left />
      <Right />
    </div>
    <Slider />
  </div>
</template>

<script setup>
import Left from "../components/aboutus-component/Left.vue";
import Right from "../components/aboutus-component/Right.vue";
import Slider from "../components/Slider.vue";
</script>
