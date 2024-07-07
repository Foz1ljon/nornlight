<template>
  <div
    v-if="productStore.isLoading"
    class="py-[300px] flex justify-center items-center"
  >
    <Loader />
  </div>

  <div v-if="!productStore.isLoading" class="container mb-10">
    <div class="flex md:justify-between md:flex-row flex-col items-center">
      <div
        class="border xl:w-[600px] lg:w-[450px] w-full gap-6 flex justify-center items-center"
      >
        <img
          class="lg:w-[80%] w-full md:h-[500px]"
          :src="productStore.product.image"
          alt="prod"
        />
      </div>
      <div class="flex flex-col gap-5 xl:w-[595px] lg:w-[500px] w-full">
        <p class="font-medium text-primary lg:text-[40px] md:text-3xl">
          {{ productStore.product.title }}
        </p>

        <div class="flex justify-between items-center w-full">
          <div class="flex flex-col gap-3">
            <p class="text-sm text-[#B3B3B3] font-normal">
              {{ productStore.product.manufacturer }}
            </p>
            <p class="text-sm text-[#B3B3B3] font-normal">Артикул : 7655-188</p>
            <p class="text-base text-[#4D932C] font-normal">В наличии</p>
          </div>
          <div class="flex lg:gap-4 md:gap-2">
            <a href="#">
              <p
                class="bg-[#E5E5E5] px-3 py-1 rounded-full text-white hover:bg-black"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </p>
            </a>
            <a href="#">
              <p
                class="bg-[#E5E5E5] px-2.5 py-1 rounded-full text-white hover:bg-black"
              >
                <i class="fa-brands fa-vk"></i>
              </p>
            </a>
            <a href="#">
              <p
                class="bg-[#E5E5E5] px-2 py-1 rounded-full text-white hover:bg-black"
              >
                <i class="fa-brands fa-telegram"></i>
              </p>
            </a>
            <a href="#">
              <p
                class="bg-[#E5E5E5] px-2.5 py-1 rounded-full text-white hover:bg-black"
              >
                <i class="fa-brands fa-whatsapp"></i>
              </p>
            </a>
            <a href="#">
              <p
                class="bg-[#E5E5E5] px-2 py-1 rounded-full text-white hover:bg-black"
              >
                <i class="fa-brands fa-youtube"></i>
              </p>
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-8">
          <div class="flex items-end gap-3">
            <p
              class="lg:text-6xl md:text-5xl text-4xl font-normal text-[#101010]"
            >
              {{ productStore.product.newPrice }} ₽
            </p>
            <p
              class="md:text-lg text-base font-medium text-[#B3B3B3] line-through"
            >
              {{ productStore.product.oldPrice }} ₽
            </p>
          </div>

          <p class="md:text-base text-sm font-normal text-[#4C4C4C]">
            Профессиональный гоночный хардтейл для кросс-кантри уровня
            Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных
            хардтейлов для кросс-кантри.
          </p>

          <div class="flex gap-3">
            <div class="flex items-center rounded-md gap-5 border px-6 py-3">
              <button
                @click="decCount(productStore.product.id)"
                class="text-base font-medium"
              >
                -
              </button>
              <p class="text-base font-medium">{{ productCount }}</p>
              <button
                @click="incCount(productStore.product.id)"
                class="text-base font-medium"
              >
                +
              </button>
            </div>
            <button
              @click.stop="addToCart"
              class="bg-primary text-white py-2 px-5 rounded-md hover:animate-pulse"
            >
              В корзину
            </button>
            <button
              @click.stop="toggleFavorite"
              class="bg-[#F8F8F8] text-black text-2xl py-3 px-4 rounded-md hover:animate-pulse"
            >
              <i
                :class="['fa-heart', isFavorite ? 'fa-solid' : 'fa-regular']"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <p class="lg:text-6xl sm:text-5xl mt-14 text-3xl font-bold text-primary">
      Характеристика
    </p>

    <div class="flex flex-col gap-1 my-5">
      <div
        v-for="(item, i) in detail"
        :key="i"
        :class="i % 2 == 0 ? 'bg-[#F8F8F8]' : 'bg-white'"
        class="flex justify-between py-4 px-2"
      >
        <p class="md:text-base text-sm">{{ item.name }}</p>
        <p class="md:w-[606px] w-full md:text-base text-sm text-end">
          {{ item.xar }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/productStore";
import { computed, onMounted } from "vue";
import Loader from "../components/Loader.vue";

const detail = [
  { name: "Цвет", xar: "Жёлтый" },
  { name: "Год", xar: "2016" },
  { name: "Диаметр колеса", xar: "27.5" },
  { name: "Материал рамы", xar: "Карбон" },
  { name: "Размер", xar: "L" },
  { name: "Страна", xar: "Швейцария" },
  { name: "Производитель", xar: "Scott" },
  {
    name: "Покрышки",
    xar: "Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound",
  },
  {
    name: "Рама",
    xar: "Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL",
  },
  {
    name: "Подседельный Штырь",
    xar: "Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm",
  },
  { name: "Седло", xar: "Ritchey WCS Streem V3 Titanium rails" },
  {
    name: "Вилка",
    xar: `Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm`,
  },
];

const route = useRoute();
const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProduct(route.params.id);
});

const isFavorite = computed(() =>
  productStore.favorites.some((item) => item.id === productStore.product.id)
);

const toggleFavorite = () => {
  if (isFavorite.value) {
    productStore.removeFromFavorites(productStore.product.id);
  } else {
    productStore.addToFavorites(productStore.product);
  }
};

const addToCart = () => {
  productStore.addToCart(productStore.product);
};

const productCount = computed(
  () => productStore.productCounts.get(productStore.product.id) || 0
);

const incCount = (productId) => {
  productStore.incCount(productId);
};

const decCount = (productId) => {
  productStore.decCount(productId);
};

const { product } = productStore;
</script>
