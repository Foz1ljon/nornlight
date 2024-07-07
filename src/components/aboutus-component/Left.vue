<template>
  <div class="flex flex-col gap-4">
    <p class="lg:text-6xl sm:text-3xl text-xl font-bold text-primary">О компании</p>
    <div
      v-for="(item, i) in card"
      :key="i"
      class="bg-second xl:w-[530px] lg:w-[400px] md:w-[350px] md:h-[253px] sm:h-[190px] h-44 p-5 flex flex-col justify-between rounded-lg"
    >
      <p class="md:text-6xl text-5xl font-bold text-primary" >{{ item.count }}+</p>
      <p class="font-medium sm:text-2xl text-xl text-primary">{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup>
const card = [
  {
    count: 170,
    name: "Товаров",
  },
  {
    count: 1000,
    name: "Довольных покупателей",
  },
  {
    count: 170,
    name: "Товаров",
  },
];
</script>
