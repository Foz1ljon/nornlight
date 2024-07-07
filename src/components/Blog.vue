<template>
  <div class="container">
    <div class="flex justify-between h-[45px] mb-8">
      <p class="lg:text-6xl sm:text-5xl text-4xl text-primary font-bold">
        Блог
      </p>
      <router-link
        to="/blog"
        :class="props.class"
        class="md:flex hidden items-center border border-primary gap-2 rounded-full px-10 hover:bg-primary hover:text-white hover:animate-pulse"
      >
        Перейти в блог
        <i class="fa-solid fa-arrow-right-long"></i>
      </router-link>
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-4">
      <BlogItem v-for="(item, i) in blogs" :key="i" :data="item" />
    </div>
    <BlogBottom :class="props.class" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../api";
import BlogItem from "./BlogItem.vue";
import BlogBottom from "./Blog-Bottom.vue";

const props = defineProps({
  limit: Number,
  class: String,
});

const blogs = ref([]);

const fetchBlogs = async () => {
  try {
    const response = await api.get("/blogs", {
      params: {
        _limit: props.limit,
      },
    });
    blogs.value = response.data;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }
};

onMounted(fetchBlogs);
</script>
