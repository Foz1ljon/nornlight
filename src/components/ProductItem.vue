<template>
  <div
    @click="goToDetailPage(data.id)"
    class="lg::w-[325px] w-full h-full border lg:h-[395px] flex flex-col justify-around items-center relative p-4 md:hover:shadow-md"
  >
    <button @click.stop="toggleFavorite" class="px-3 absolute top-2 right-2">
      <i :class="['fa-heart', isFavorite ? 'fa-solid' : 'fa-regular']"></i>
    </button>
    <div class="sm:w-[176px] w-[130px] sm:h-[216px] h-[160px] mt-4">
      <img :src="data.image" alt="img" />
    </div>
    <p class="lg:text-xl md:text-lg sm:text-base text-sm font-medium text-primary">
      {{ data.title }}
    </p>

    <div class="flex w-full justify-between items-center">
      <div>
        <p class="line-through text-xs text-[#9F9F9F] font-medium">
          {{ data.oldPrice }}₽
        </p>
        <p class="text-primary sm:text-xl text-lg font-bold">{{ data.newPrice }}₽</p>
      </div>

      <button
        @click.stop="addToCart"
        :class="
          isInCart ? 'bg-white border text-primary' : 'bg-primary text-white'
        "
        class="rounded-full sm:text-xl text-sm sm:px-4 px-2 sm:h-[30px] "
      >
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "../stores/productStore";

const router = useRouter();
const props = defineProps({
  data: Object,
});

const { data } = props;

const productStore = useProductStore();

const isFavorite = computed(() =>
  productStore.favorites.some((item) => item.id === data.id)
);

const isInCart = computed(() =>
  productStore.cart.some((item) => item.id === data.id)
);

const toggleFavorite = () => {
  if (isFavorite.value) {
    productStore.removeFromFavorites(data.id);
  } else {
    productStore.addToFavorites(data);
  }
};

const addToCart = () => {
  if (isInCart.value) {
    productStore.removeFromCart(data.id);
  } else {
    productStore.addToCart(data);
  }
};

const goToDetailPage = (id) => {
  router.push({ name: "detail", params: { id } });
};
</script>
