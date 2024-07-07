<template>
  <div class="flex flex-col">
    <SideBar />
    <div class="container my-4 ml-[25%] w-[75%]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import SideBar from "../layout/SideBar.vue";
</script>
