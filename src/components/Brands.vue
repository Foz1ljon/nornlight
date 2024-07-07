<template>
  <div class="container my-4">
    <div class="flex justify-between h-[45px] my-10">
      <p class="text-[40px] text-primary font-bold">
        Только проверенные бренды
      </p>
      <router-link
        to="/catalog"
        class="flex items-center border border-primary gap-2 rounded-full px-10 hover:bg-primary hover:text-white hover:animate-pulse"
      >
        Весь каталог
        <i class="fa-solid fa-arrow-right-long"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const img = [
  { img: "/brands/brand.svg" },
  { img: "/brands/brand.svg" },
  { img: "/brands/brand.svg" },
  { img: "/brands/brand.svg" },
  { img: "/brands/brand.svg" },
];
</script>
