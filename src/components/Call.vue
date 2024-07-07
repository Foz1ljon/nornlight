<template>
  <div
    id="Form"
    v-if="isShowContact"
    class="fixed inset-0 bg-primary/70 z-50 flex items-center justify-center"
  >
    <div
      class="rounded-3xl bg-white w-full lg:p-8 md:p-4 px-5 lg:max-w-[800px] md:max-w-full md:px-8 mx-8 lg:h-[534px] md:h-[400px]"
    >
      <div class="flex justify-end p-4">
        <button @click="toggleContact">
          <i class="text-2xl fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="flex flex-col justify-center gap-10 lg:py-7">
        <p class="lg:text-6xl md:text-5xl text-3xl px-8 font-bold text-primary">
          Заполните, и мы перезвоним
        </p>
        <form @submit.prevent="send" class="flex flex-col gap-4 py-5">
          <input
            v-model="form.fullname"
            class="py-3 sm:px-8 px-6 border border-black outline-none rounded-full"
            type="text"
            placeholder="ФИО"
          />
          <input
            v-model="form.phone"
            class="py-3 sm:px-8 px-6 border border-black outline-none rounded-full placeholder:text-base placeholder:text-primary/50"
            type="text"
            placeholder="телефон"
          />
          <button
            class="font-base py-3 px-4 rounded-full bg-primary text-white"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContactFormStore } from "../stores/contactForm";
import { computed } from "vue";

const store = useContactFormStore();

const isShowContact = computed(() => store.isShowContact);
const form = computed(() => store.form);

const toggleContact = () => {
  store.toggleContact();
};

const send = () => {
  store.send();
};
</script>
