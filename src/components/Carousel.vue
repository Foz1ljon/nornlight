<template>
  <div class="px-6">
    <div class="xl:w-full  bg-second rounded-3xl">
      <div class="md:container">
        <swiper :pagination="true" :modules="modules" class="w-full h-full ">
          <swiper-slide v-for="(item, i) in 8" :key="i">
            <div class="flex justify-between py-3 sm:flex-row flex-col-reverse sm:gap-10 sm:h-[450px] h-screen">
              <p
                class="font-bold flex flex-col gap-7 text-cgrey xl:text-6xl md:text-5xl sm:text-4xl text-3xl w-full my-10 sm:w-[44%] line-clamp-none leading-tight px-2"
              >
                Скидка 15% <br class="lg:block hidden"/> на все подвесные светильники до
                <b class="btn">5 февраля</b>
              </p>
              <div class="mx-auto">
                <img
                  class="lg:w-[400px] md:w-[400px] sm:w-[250px] w-[300px]"
                  src="/images/lamp.png"
                  alt="lamp"
                />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const modules = [Pagination];
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
}
</style>
