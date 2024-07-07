<template>
  <div class="container my-7">
    <div class="flex  justify-between h-[45px] my-10">
      <p class="lg:text-6xl sm:text-4xl text-4xl text-primary font-bold">
        Почему NORNLIGHT?
      </p>
      <router-link
        to="/about"
        class="md:flex hidden items-center border border-primary gap-2 rounded-full px-10 hover:bg-primary hover:text-white hover:animate-pulse"
      >
        О компании
        <i class="fa-solid fa-arrow-right-long"></i>
      </router-link>
    </div>
    <div class="grid lg:grid-cols-4  grid-cols-2 gap-4">
      <CompanyItem v-for="(item, i) in company" :key="i" :data="item" />
    </div>
    <div class="flex justify-center">
      <router-link
        to="/about"
        class="flex md:hidden my-8 items-center border border-primary gap-2 py-3 rounded-full px-10 hover:bg-primary hover:text-white hover:animate-pulse"
      >
        О компании
        <i class="fa-solid fa-arrow-right-long"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import CompanyItem from "./CompanyItem.vue";

import { useCompanyStore } from "../stores/company";
import { storeToRefs } from "pinia";

const companyStore = useCompanyStore();
const { company } = storeToRefs(companyStore);
</script>
