<template>
  <div class="container py-2">
    <div :class="hidden" class="flex  items-center justify-between my-10">
      <p class="lg:text-6xl sm:text-5xl text-4xl text-primary font-bold">Каталог</p>
      <router-link
        to="/catalog"
        :class="routerhidden"
        class="md:flex hidden items-center border border-primary gap-4 h-[50px] rounded-full px-10 hover:bg-primary hover:text-white hover:animate-pulse"
      >
        Весь каталог
        <i class="fa-solid fa-arrow-right-long"></i>
      </router-link>
    </div>
    <swiper
      :class="'block'"
      :slides-per-view="slidesPerView"
      space-between="20"
      class="w-full h-full"
    >
      <swiper-slide
        class="grid grid-cols-2 gap-3"
        v-for="(item, i) in catalog"
        :key="i"
      >
        <CatalogItem :data="item" />
      </swiper-slide>
    </swiper>

    <div class="flex justify-center my-4">
      <router-link
      to="/catalog"
      :class="routerhidden"
      class="flex md:hidden items-center border border-primary gap-2 rounded-full py-2 my-3 px-10 hover:bg-primary hover:text-white hover:animate-pulse"
    >
      Весь каталог
      <i class="fa-solid fa-arrow-right-long"></i>
    </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCatalogStore } from "../stores/catalog";
import { storeToRefs } from "pinia";
import CatalogItem from "./CatalogItem.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const props = defineProps({
  hidden: {
    type: String,
    default: "",
  },
  routerhidden: {
    type: String,
    default: "",
  },
});

const catalogStore = useCatalogStore();
const { catalog } = storeToRefs(catalogStore);

// Determine slides per view based on screen size
const slidesPerView = ref(1);
if (window.innerWidth >= 768) {
  slidesPerView.value = 3;
} else if (window.innerWidth >= 576) {
  slidesPerView.value = 2;
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    slidesPerView.value = 3;
  } else if (window.innerWidth >= 576) {
    slidesPerView.value = 2;
  } else {
    slidesPerView.value = 1;
  }
});
</script>

<style>
.mySwiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
