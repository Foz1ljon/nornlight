<template>
  <div class="container">
    <div class="flex justify-between h-[45px] my-10">
      <p class="lg:text-6xl sm:text-4xl text-3xl text-primary my-2  font-bold">Популярные товары</p>
      <router-link
        to="/products"
        :class="props.data"
        class="md:flex hidden items-center border border-primary gap-2 rounded-full px-10 md:hover:bg-primary md:hover:text-white md:hover:animate-pulse"
      >
        Все товары
        <i class="fa-solid fa-arrow-right-long"></i>
      </router-link>
    </div>

    <div class="flex justify-center" v-if="isLoading"><Loader /></div>
    <div v-if="!isLoading" class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2  my-4 gap-2">
      <ProductItem
        v-for="(item, i) in products"
        :key="i"
        :data="item"
        @add-to-cart="addToCart"
        @add-to-favorites="addToFavorites"
      />
    </div>
    <div class="flex justify-center">
      <router-link
        to="/products"
        :class="props.data"
        class="flex md:hidden items-center border my-3 border-primary gap-2 py-2 rounded-full px-10 md:hover:bg-primary md:hover:text-white md:hover:animate-pulse"
      >
        Все товары
        <i class="fa-solid fa-arrow-right-long"></i>
      </router-link>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../api";
import ProductItem from "./ProductItem.vue";
import Loader from "./Loader.vue";
import { useProductStore } from "../stores/productStore";

const products = ref([]);
const isLoading = ref(false);
const productStore = useProductStore();

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

const addToCart = (product) => {
  productStore.addToCart(product);
};

const addToFavorites = (product) => {
  productStore.addToFavorites(product);
};

const props = defineProps({
  data: {
    type: String,
    default: "",
  },
});

onMounted(() => {
  fetchProducts();
});
</script>
