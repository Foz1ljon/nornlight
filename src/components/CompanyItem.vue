<template>
  <div
    class="flex flex-col sm:gap-0 gap-3 justify-between xl:w-[310px] w-full md:h-[360px] relative border-[#D9D9D9] border py-5 md:p-4 p-2.5"
  >
    <div class="sm:w-full w-[40%]" >
      <img :src="data.img" alt="img" />
    </div>
    <div class="flex flex-col sm:gap-0  justify-center gap-3 bottom-5">
      <p class="md:text-xl sm:text-base text-sm text-primary font-bold">{{ data.title }}</p>
      <p class="text-base text-primary/50">{{ data.about }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: Object,
});

const { data } = props;
</script>
