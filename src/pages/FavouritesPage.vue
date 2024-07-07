<template>
  <div class="container">
    <p
      class="lg:text-6xl md:text-5xl text-2xl font-bold text-primary py-4 md:w-[605px] w-full relative"
    >
      Избранные товары

      <b
        class="absolute top-2 md:right-2 right-0 py-1 px-4 bg-red-500 text-sm text-white font-semibold rounded-full"
        :class="favorites.length == 0 ? 'hidden' : ''"
      >
        {{ favorites.length }}
      </b>
    </p>

    <div v-if="favorites.length === 0" class="text-center md:my-10 my-5">
      <router-link
        class="md:text-2xl text-xl text-primary font-medium bg-gray-300 px-3 py-2 rounded-md"
        to="/products"
      >
      добавить товар +
      </router-link>
    </div>
    <div v-else class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2">
      <ProductItem
        v-for="(item, index) in favorites"
        :key="index"
        :data="item"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProductStore } from "../stores/productStore";
import ProductItem from "../components/ProductItem.vue";

const productStore = useProductStore();

// Get the favorites from the store
const favorites = computed(() => productStore.favorites);
</script>

<style scoped>
/* Add your styles here */
</style>
