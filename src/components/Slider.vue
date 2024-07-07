<template>
  <div class="container my-16 mb-[10%]">
    <div class="flex items-center justify-between my-10">
      <p class="lg:text-6xl md:text-5xl sm:text-4xl text-xl text-primary font-bold">
        Только проверенные бренды
      </p>
      <div class="sm:flex hidden gap-5 items-center h-[20px]">
        <button
          class="border border-primary py-0.5 px-5 rounded-full md:hover:bg-primary md:hover:text-white md:hover:animate-pulse"
          @click="prevSlide"
        >
          <i class="fa-solid fa-arrow-left-long"></i>
        </button>
        <button
          class="border border-primary py-0.5 px-5 rounded-full md:hover:bg-primary md:hover:text-white md:hover:animate-pulse"
          @click="nextSlide"
        >
          <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>

    <div class="w-full overflow-hidden">
      <div
        class="flex duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="flex-shrink-0 w-full flex justify-center gap-4"
        >
          <div v-for="(image, index) in slide" :key="index" class="flex">
            <img :src="image" alt="Brand image" class="w-[310px]" />
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentSlide = ref(0);
const images = [
  "/brands/brand.svg",
  "/brands/brand1.svg",
  "/brands/brand2.svg",
  "/brands/brand.svg",

  "/brands/brand.svg",
  "/brands/brand1.svg",
  "/brands/brand2.svg",
  "/brands/brand.svg",

  "/brands/brand.svg",
  "/brands/brand1.svg",
  "/brands/brand2.svg",
  "/brands/brand.svg",

  "/brands/brand.svg",
  "/brands/brand1.svg",
  "/brands/brand2.svg",
  "/brands/brand.svg",

  "/brands/brand.svg",
  "/brands/brand1.svg",
  "/brands/brand2.svg",
  "/brands/brand.svg",
];

const slidesToShow = 4; // Number of images to show per slide
const slides = [];
for (let i = 0; i < images.length; i += slidesToShow) {
  slides.push(images.slice(i, i + slidesToShow));
}
const totalSlides = slides.length;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};

onMounted(() => {
  const interval = setInterval(nextSlide, 2000); // Change slide every 1 second
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<style scoped>
/* Scoped styles if needed */
</style>
