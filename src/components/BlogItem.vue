<template>
  <div
    class="xl:w-[416px] w-full lg:h-[456px] border-b-2 rounded-md flex flex-col md:gap-4 shadow-sm hover:shadow-2xl"
  >
    <div><img class="rounded-md" :src="data.img" alt="" /></div>
    <div class="flex flex-col justify-between gap-3 p-4">
      <div class="flex w-full justify-between">
        <p class="md:text-xl text-lg font-bold text-primary">{{ data.title }}</p>
        <router-link class="text-xl" to="/">
          <i class="fa-solid fa-arrow-trend-up"></i
        ></router-link>
      </div>
      <p class="md:text-sm text-xs font-medium text-primary">{{ data.date }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});

const { data } = props;
</script>
