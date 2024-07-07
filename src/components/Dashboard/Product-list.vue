<template>
  <h2 class="text-primary text-2xl font-medium py-2 pb-5">Manage product</h2>
  <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-2">
    <div v-if="isLoading">
      <Loader />
    </div>
    <ProductCard v-for="(item, i) in products" :key="i" :data="item" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ProductCard from "./product-item.vue";
import Loader from "../Loader.vue";
import api from "@/api";

const products = ref();
const isLoading = ref(false);

const fetchProducts = () => {
  isLoading.value = true;
  api
    .get("/products")
    .then((res) => {
      products.value = res.data;
    })
    .catch((err) => alert(err))
    .finally(() => (isLoading.value = false));
};

onMounted(() => {
  fetchProducts();
});
</script>
