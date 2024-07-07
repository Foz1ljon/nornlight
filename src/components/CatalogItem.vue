<template>
  <div
    class="xl:w-[420px] w-full h-[210px] bg-second flex justify-between p-4 rounded-lg"
  >
    <div class="flex flex-col justify-between md:gap-0 gap-5 p-4">
      <p class="md:w-5 w-full md:text-xl font-medium text-cgrey/90">
        {{ data.title }}
      </p>
      <p
        class="flex w-full items-center gap-1 md:text-sm text-xs font-medium text-cgrey/90"
      >
        {{ `От ${data.price}₽`
        }}<svg
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 6H14M14 6L9 11M14 6L9 1" stroke="#454545" />
        </svg>
      </p>
    </div>
    <div class="md:w-[150px] w-[100px] flex items-center">
      <img :src="data.img" :alt="data.img" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});

const { data } = props;
</script>
