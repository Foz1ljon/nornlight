<template>
  <h2 class="text-primary text-2xl font-medium py-2 pb-5">Create product</h2>

  <form @submit.prevent="add(product)" class="flex flex-col gap-3">
    <label for="title">
      <p>Product title</p>
      <input
        class="py-2 border md:px-6 px-2 bg-primary/50 placeholder:text-primary"
        type="text"
        id="title"
        v-model="product.title"
        placeholder="Enter title..."
      />
    </label>
    <label for="url">
      <p>Product image url</p>
      <input
        class="py-2 border md:px-6 px-2 bg-primary/50 placeholder:text-primary"
        type="text"
        id="url"
        v-model="product.image"
        placeholder="Enter image url..."
      />
    </label>

    <label for="oldPrice">
      <p>Product old price</p>
      <input
        class="py-2 border md:px-6 px-2 bg-primary/50 placeholder:text-primary"
        type="number"
        id="oldPrice"
        v-model="product.oldPrice"
        placeholder="Enter old price..."
      />
    </label>

    <label for="newPrice">
      <p>Product new price</p>
      <input
        class="py-2 border md:px-6 px-2 bg-primary/50 placeholder:text-primary"
        type="number"
        id="newPrice"
        v-model="product.newPrice"
        placeholder="Enter new price..."
      />
    </label>

    <button
      class="flex items-center justify-center gap-4 py-2 px-6  md:w-[260px] w-[210px] bg-blue-500 text-white font-semibold"
    >
      <i class="fa-solid fa-floppy-disk"></i>
      <p>Save</p>
    </button>
  </form>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useProductStore } from "@/stores/productsStore";
import { onMounted, reactive } from "vue";



const productsStore = useProductStore();

const product = reactive({
  title: "",
  image: "/images/image.png",
  oldPrice: 0,
  newPrice: 0,
});

const add = (product) => {
  if (
    !product.title ||
    !product.image ||
    !product.oldPrice ||
    !product.newPrice
  )
    productsStore.addProduct(product);
};

const router = useRouter();
</script>
