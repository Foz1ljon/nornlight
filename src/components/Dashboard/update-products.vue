<template>
  <h2 class="text-primary text-2xl font-medium py-2 pb-5">Update product</h2>

  <div v-if="productsStore.isload"><Loader /></div>
  <form
    v-if="!productsStore.isload"
    @submit.prevent="update(id, productsStore.product)"
    class="flex flex-col gap-3"
  >
    <label for="title">
      <p>Product title</p>
      <input
        class="py-2 border md:px-6 bg-primary/50 placeholder:text-primary"
        type="text"
        id="title"
        v-model="productsStore.product.title"
        placeholder="Enter title..."
      />
    </label>
    <label for="url">
      <p>Product image url</p>
      <input
        class="py-2 border md:px-6 bg-primary/50 placeholder:text-primary"
        type="text"
        id="url"
        v-model="productsStore.product.image"
        placeholder="Enter image url..."
      />
    </label>

    <label for="oldPrice">
      <p>Product old price</p>
      <input
        class="py-2 border md:px-6 bg-primary/50 placeholder:text-primary"
        type="number"
        id="oldPrice"
        v-model="productsStore.product.oldPrice"
        placeholder="Enter old price..."
      />
    </label>

    <label for="newPrice">
      <p>Product new price</p>
      <input
        class="py-2 border md:px-6 bg-primary/50 placeholder:text-primary"
        type="number"
        id="newPrice"
        v-model="productsStore.product.newPrice"
        placeholder="Enter new price..."
      />
    </label>

    <button
      class="flex items-center justify-center gap-4 py-2 px-6 w-[200px] bg-primary/50"
    >
      <i class="fa-solid fa-floppy-disk"></i>
      <p>Save</p>
    </button>
  </form>
</template>

<script setup>
import Loader from "../Loader.vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "@/stores/productsStore";

const id = useRoute().params.id;
const router = useRouter();
const productsStore = useProductStore();

const update = (id, product) => {
  productsStore.updateById(id, product);
  router.push({ name: "dashboard" });
};

onMounted(() => {
  productsStore.fetchById(useRoute().params.id);
});
</script>
