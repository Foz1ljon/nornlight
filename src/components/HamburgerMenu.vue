<template>
 
</template>

<script setup>
import { useContactFormStore } from "../stores/contactForm";
import { useProductStore } from "../stores/productStore";
import { computed, ref } from "vue";

const shows = ref(false);

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
];

const props = defineProps({
  show: Boolean,
});
</script>
