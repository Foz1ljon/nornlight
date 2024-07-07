<template>
  <div class="bg-second w-full">
    <div
      class="container flex lg:justify-start md:justify-center md:flex-row flex-col xl:gap-32 lg:gap-28 md:gap-12 py-10"
    >
      <div class="flex flex-col gap-8">
        <!-- //part1 -->
        <div class="lg:ml-4 mb-2 flex items-center gap-1">
          <img src="/icons/logo.svg" alt="logo" />
          <p class="text-3xl font-normal text-primary">NORNLIGHT</p>
        </div>
        <!-- //part number -->
        <p class="lg:text-2xl md:text-lg mb-2 font-semibold text-primary">
          8 (800) 890-46-56
        </p>

        <!-- //part payment -->
        <router-link to="/">
          <img width="222" src="/images/payment.png" alt="payment"
        /></router-link>

        <!--  -->
        <router-link class="text-base font-semibold text-primary/50" to="/">
          Политика конфидециальности
        </router-link>
        <!--  -->
        <router-link class="text-base font-semibold text-primary/50" to="/">
          Пользовательское соглашение
        </router-link>
        <!--  -->
        <div class="flex md:gap-2 gap-4 mb-7  md:items-center">
          <router-link v-for="(item, i) in 3" :key="i" to="/">
            <p class=" py-2 px-3 border text-primary rounded-full border-primary font-semibold hover:bg-primary hover:text-white "  >VK</p>
          </router-link>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <p class="text-2xl font-bold text-primary">Покупателям</p>
        <router-link
          class="text-primary/50 text-base font-semibold mb-2"
          v-for="(item, i) in menu1"
          :key="i"
          :to="item.url"
        >
          {{ item.name }}
        </router-link>
      </div>

      <div class="flex flex-col gap-5">
        <p class="text-2xl font-bold text-primary">Товары</p>
        <router-link
          class="text-primary/50 text-base font-semibold"
          v-for="(item, i) in menu2"
          :key="i"
          :to="item.url"
        >
          {{ item.name }}
        </router-link>
      </div>
      <div class="flex flex-col lg:my-auto md:my-0 gap-5">
        <router-link
          class="text-primary/50 text-base font-semibold"
          v-for="(item, i) in menu3"
          :key="i"
          :to="item.url"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const menu1 = [
  { name: "О компании", url: "/about" },
  { name: "Доставка и оплата", url: "/shopping" },
  { name: "Возврат", url: "/return" },
  { name: "Гарантии", url: "/garant" },
  { name: "Контакты", url: "/contacts" },
  { name: "Блог", url: "/blog" },
];
const menu2 = [
  { name: "Люстры", url: "/products" },
  { name: "Светильники", url: "/products" },
  { name: "Бра", url: "/products" },
  { name: "Торшеры", url: "/products" },
  { name: "Комплектуюшие", url: "/products" },
  { name: "Настольные лампы", url: "/products" },
];

const menu3 = [
  { name: "Споты", url: "/" },
  { name: "Трековые светильники", url: "/products" },
  { name: "Уличные светильники", url: "/products" },
  { name: "Технические светильники", url: "/products" },
  { name: "Светодиодные ленты", url: "/products" },
];
</script>
