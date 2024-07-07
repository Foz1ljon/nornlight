<template>
  <div
    class="lg:w-[300px] w-full h-full border lg:h-[395px] flex flex-col justify-around items-center relative p-4 md:hover:shadow-md"
  >
    <div class="sm:w-[176px] w-[130px] sm:h-[216px] h-[160px] mt-4">
      <img :src="data.image" alt="img" />
    </div>
    <p
      class="lg:text-xl md:text-lg sm:text-base text-sm font-medium text-primary"
    >
      {{ data.title }}
    </p>

    <div class="flex w-full justify-between items-center">
      <div>
        <p class="line-through text-xs text-[#9F9F9F] font-medium">
          {{ data.oldPrice }}₽
        </p>
        <p class="text-primary sm:text-xl text-lg font-bold">
          {{ data.newPrice }}₽
        </p>
      </div>

      <div class="flex relative items-center gap-3">
        <router-link
          class="text-center bg-white text-primary px-3 py-0.5 border rounded-xl"
          :to="`/update-product/${data.id}`"
        >
          <i class="fa-solid fa-file-pen"></i>
        </router-link>
        <button
          @click="remove(data.id)"
          class="text-center bg-primary text-white px-3 py-0.5 rounded-xl"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
        <div
          v-if="productStore.isLoad"
          class="absolute -top-[600%] right-[100%]"
        >
          <Loader />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loader from "../Loader.vue";
import { useProductStore } from "@/stores/productsStore";
import { defineProps } from "vue";

const productStore = useProductStore();
const { deleteProduct, isLoad } = productStore;

const remove = (id) => {
  productStore.deleteProduct(id);
};

const props = defineProps({
  data: Object,
});

const { data } = props;
</script>
