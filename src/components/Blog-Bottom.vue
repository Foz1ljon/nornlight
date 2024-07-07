<template>
  <div class="container">
    <div
      class="grid lg:grid-cols-2 grid-cols-1 md:my-5 my-3 md:mt-16"
      :class="props.class"
    >
      <p
        class=" xl:text-6xl lg:text-5xl sm:text-5xl text-4xl py-2 font-bold text-primary lg:w-7"
      >
        Производство светильников
      </p>
      <div class="flex flex-col md:gap-7 gap-4 md:h-[390px]">
        <p
          class="xl:w-[640px]  w-full xl:text-xl lg:text-lg md:text-base text-sm text-primary font-medium"
          v-for="(item, i) in data"
          :key="i"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  class: {
    type: String,
    default: "",
  },
});

const data = [
  `Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для
освещения вашего дома или офиса. У нас вы найдете разнообразные модели
светильников, от современных и стильных до классических и элегантных. Мы
предлагаем качественные и надежные светильники от лучших производителей, которые
подарят вам комфорт и уют.`,
  `Покупая светильники в нашем интернет-магазине, вы
получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей
России, чтобы каждый клиент мог насладиться прекрасным светом и удобством
покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и
света с NORNLIGHT!`,
];
</script>
