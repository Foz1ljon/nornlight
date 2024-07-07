<template>
    <div class="container">
      <p class="lg:text-6xl md:text-5xl text-5xl font-bold text-primary relative w-[266px]">
        Корзина
        <b class="absolute -top-2 right-1 py-1 px-3 bg-red-500 text-sm text-white font-semibold rounded-full"
           :class="cart.length === 0 ? 'hidden' : ''">
          {{ cart.length }}
        </b>
      </p>
  
      <div v-if="cart.length > 0" class="w-full bg-[#F2F2F2] my-8 rounded-lg">
        <div class="md:flex hidden lg:gap-[16%] md:gap-[10%] sm:gap-[10%] gap-[7%] px-8 p-6">
          <p class="text-base font-medium text-primary px-5">Фото</p>
          <p class="text-base font-medium text-primary">Товары</p>
          <p class="text-base font-medium text-primary">Описание</p>
          <p class="text-base font-medium text-primary">Артикул</p>
          <p class="text-base font-medium text-primary">Количество</p>
        </div>
  
        <div class="flex justify-center py-7" :class="cart.length !== 0 ? 'hidden' : ''">
          <router-link class="md:text-2xl text-xl text-primary font-medium bg-gray-300 px-3 py-2 rounded-md"
                       to="/products">
            добавить товар +
          </router-link>
        </div>
  
        <div v-for="(item, i) in cart" :key="i" class="flex md:flex-row flex-col items-center gap-[4%] p-4 border-t-2">
          <div class="md:w-[80px] w-[80%]">
            <img :src="item.image" alt="img"/>
          </div>
          <div class="flex flex-col justify-between">
            <p class="text-base">{{ item.title }}</p>
            <p>{{ item.newPrice }} ₽</p>
          </div>
          <div class="md:w-[250px] w-full">
            <p class="text-base">{{ item.tires }}</p>
          </div>
          <div>
            <p class="text-base">RAD-COMBO-50/XXX/230/XXX/XXX <br/>/S4/XS</p>
          </div>
          <div class="flex gap-8 items-center">
            <div class="flex gap-2 items-center">
              <button @click="incCount(item.id)" class="text-2xl p-3">+</button>
              <p class="border rounded-md p-2">
                {{ productCount(item.id) }}
              </p>
              <button @click="decCount(item.id)" class="text-2xl p-3">-</button>
            </div>
            <button @click="removeFromCart(item.id)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
  
      <div v-else class="flex justify-center items-center h-96">
        <router-link class="md:text-2xl text-xl text-primary font-medium bg-gray-300 px-3 py-2 rounded-md"
                     to="/products">
          добавить товар +
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useProductStore } from "@/stores/productStore";
  
  const productStore = useProductStore();
  
  // Get the cart items from the store
  const cart = computed(() => productStore.cart);
  
  const removeFromCart = (productId) => {
    productStore.removeFromCart(productId);
  };
  
  const incCount = (productId) => {
    productStore.incCount(productId);
  };
  
  const decCount = (productId) => {
    productStore.decCount(productId);
  };
  
  const productCount = (productId) => {
    return productStore.productCounts.get(productId) || 0;
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  