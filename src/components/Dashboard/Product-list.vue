<template>
  <h2 class="text-primary text-2xl font-medium py-2 pb-5">Manage product</h2>
  <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-2">
    <div v-if="productStore.isLoading">
      <Loader />
    </div>
    <ProductCard
      v-for="(item, i) in productStore.products"
      :key="i"
      :data="item"
    />
  </div>
</template>

<script setup>
import { onMounted, onBeforeMount } from "vue";
import { useProductStore } from "@/stores/productsStore";
import ProductCard from "./product-item.vue";
import Loader from "../Loader.vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>
