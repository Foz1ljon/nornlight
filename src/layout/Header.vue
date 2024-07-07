<template>
  <div>
    <!-- Hamburger Menu -->

    <div
      v-if="show"
      class="fixed flex flex-col gap-5 w-full h-screen bg-white z-50 p-3"
    >
      <div class="flex justify-between border-b-2 py-2">
        <button @click="show = !show" class="text-base">
          <i class="text-2xl fa-solid fa-xmark"></i>
        </button>
        <div class="flex items-center gap-2">
          <router-link
            to="/favourites"
            @click="show = !show"
            class="flex items-center justify-center"
          >
            <img src="/icons/saved.svg" alt="save-msg" />
          </router-link>
          <button class="flex items-center justify-center">
            <img src="/icons/comparison.svg" alt="comparison" />
          </button>
          <router-link
            to="/cart"
            @click="show = !show"
            class="flex items-center justify-center"
          >
            <div class="relative">
              <img src="/icons/cart.svg" alt="cart-msg" />
              <div
                :class="cart.length == 0 ? 'hidden' : ''"
                class="absolute -top-1.5 -right-1 bg-red-500 text-white text-[10px] px-[4px] py-[2px] rounded-full"
              >
                {{ cart.length }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="flex flex-col gap-3 py-3">
        <router-link
          @click="show = !show"
          class="text-2xl border-b-2 text-center font-semibold text-primary/50 [&.router-link-active]:text-primary"
          v-for="(item, i) in menu"
          :key="i"
          :to="item.url"
        >
          {{ item.name }}
        </router-link>
      </div>
      <div class="flex justify-center">
        <router-link
          @click="show = !show"
          to="/catalog"
          class="flex justify-center gap-2 w-[300px] rounded-full bg-primary text-white items-center text-base py-2 px-5 [&.router-link-active]:bg-gray-600 md:[&.router-link-active]:animate-pulse"
        >
          <img src="/icons/menu.svg" alt="menu" />
          <p class="text-center">Каталог</p>
        </router-link>
      </div>
      <div class="flex flex-col items-center gap-3">
        <p class="text-xl font-semibold text-primary/50">8 (800) 890-46-56</p>
        <button
          @click="toggleContact"
          class="text-xl font-semibold text-primary/50"
        >
          Заказать звонок
        </button>
      </div>
    </div>

    <!-- Hamburger Menu -->

    <div class="fixed bg-white w-full mx-auto z-20 shadow-xl h-[145px]">
      <div class="container md:static relative">
        <div class="md:flex hidden md:justify-between py-3">
          <div class="flex lg:gap-3 md:gap-2">
            <router-link
              class="lg:text-base md:text-sm font-semibold text-primary/50 [&.router-link-active]:text-primary"
              v-for="(item, i) in menu"
              :key="i"
              :to="item.url"
            >
              {{ item.name }}
            </router-link>
          </div>
          <div class="flex gap-3">
            <p class="lg:text-base md:text-sm font-semibold text-primary/50">
              8 (800) 890-46-56
            </p>
            <button
              @click="toggleContact"
              class="lg:text-base md:text-sm font-semibold text-primary/50"
            >
              Заказать звонок
            </button>
          </div>
        </div>
        <div class="flex justify-between items-center my-4 py-2">
          <div class="flex gap-3">
            <button @click="show = !show" class="md:hidden block text-3xl">
              <i class="fa-solid fa-bars"></i>
            </button>
            <router-link to="/" class="flex items-center gap-2">
              <img src="/icons/logo.svg" alt="logo" />
              <p
                class="lg:text-3xl md:text-2xl text-[22px] font-normal text-primary"
              >
                NORNLIGHT
              </p>
            </router-link>
          </div>
          <div class="flex items-center gap-2">
            <router-link
              to="/catalog"
              class="md:flex hidden gap-2 rounded-full bg-primary text-white items-center text-base py-2 lg:px-5 md:px-2 [&.router-link-active]:bg-gray-600 [&.router-link-active]:animate-pulse"
            >
              <img class="lg:w-full w-[80%]" src="/icons/menu.svg" alt="menu" />
              <p class="">Каталог</p>
            </router-link>
            <div
              class="md:relative md:block hidden md:bottom-auto md:left-auto bottom-[-100%] left-6"
            >
              <input
                class="border md:py-2 py-3 px-5 md:w-full lg:w-[390px] xl:w-[626px] w-full rounded-full"
                type="text"
                placeholder="Поиск по товарам"
              />
            </div>
          </div>

          <div class="flex gap-5 items-center justify-center lg:gap-5 md:gap-3">
            <router-link
              to="/favourites"
              class="flex flex-col gap-1 items-center"
            >
              <img src="/icons/saved.svg" alt="save-msg" />
              <p class="md:text-xs lg:text-base text-base md:block hidden">
                Избранное
              </p>
            </router-link>
            <button
              class="md:flex hidden flex-col gap-1 items-center justify-center"
            >
              <img src="/icons/comparison.svg" alt="comparison" />
              <p class="md:text-xs lg:text-base">Сравнение</p>
            </button>
            <router-link
              to="/cart"
              class="flex flex-col items-center justify-center"
            >
              <div class="relative">
                <img src="/icons/cart.svg" alt="cart-msg" />
                <div
                  :class="cart.length == 0 ? 'hidden' : ''"
                  class="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full"
                >
                  {{ cart.length }}
                </div>
              </div>
              <p class="md:text-xs lg:text-base text-base md:block hidden">
                Корзина
              </p>
            </router-link>
          </div>
        </div>
        <div class="md:hidden">
          <input
            class="border md:py-2 py-3 px-5 md:w-full lg:w-[390px] xl:w-[626px] w-full rounded-full"
            type="text"
            placeholder="Поиск по товарам"
          />
        </div>
      </div>
    </div>

    <ContactForm :isShowContact="isShowContact" />
  </div>
</template>

<script setup>
import { useContactFormStore } from "../stores/contactForm";
import { useProductStore } from "../stores/productStore";
import { computed, ref } from "vue";
import ContactForm from "@/components/Call.vue";

const show = ref(false);
const productStore = useProductStore();

const cart = computed(() => productStore.cart);

const store = useContactFormStore();

const isShowContact = computed(() => store.isShowContact);
const toggleContact = () => {
  store.toggleContact();
};

const menu = [
  { name: "О компании", url: "/about" },
  { name: "Доставка и оплата", url: "/shopping" },
  { name: "Возврат", url: "/return" },
  { name: "Гарантии", url: "/garant" },
  { name: "Контакты", url: "/contacts" },
  { name: "Блог", url: "/blog" },
  { name: "Admin", url: "/dashboard" },
];
</script>
