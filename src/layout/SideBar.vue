<template>
  <div
    class="w-[25%] fixed z-50 h-screen bg-primary p-4 flex flex-col gap-10 items-center"
  >
    <!--  -->
    <router-link
      to="/"
      class="font-semibold flex items-center gap-2 md:text-[25px] text-white [&.router-link-active]:bg-gray-400"
    >
      <i class="fa-solid fa-arrow-left-long"></i>
      <p class="sm:block hidden">Admin Dashboard</p>
    </router-link>
    <!--  -->
    <div class="flex flex-col md:gap-4 gap-16">
      <router-link
        class="text-white flex gap-3 items-center md:text-lg sm:text-base text-3xl font-semibold [&.router-link-active]:bg-gray-400 [&.router-link-active]:text-black py-1 px-2"
        to="/create-product"
      >
        <i class="fa-solid fa-square-plus"></i>
        <p class="sm:block hidden">Create product</p>
      </router-link>
      <router-link
        class="text-white flex gap-3 items-center md:text-lg sm:text-base text-3xl font-semibold [&.router-link-active]:bg-gray-400 [&.router-link-active]:text-black py-1 px-2"
        to="/product-list"
      >
        <i class="fa-solid fa-pen-to-square"></i>
        <p v-tooltip.top="'Manage your products'" class="sm:block hidden">
          Manage product
        </p>
      </router-link>
      <!--  -->
      <router-link
        class="text-white flex gap-3 items-center md:text-lg sm:text-base text-3xl font-semibold [&.router-link-active]:bg-gray-400 [&.router-link-active]:text-black py-1 px-2"
        to="/create-category"
      >
        <i class="fa-solid fa-square-plus"></i>
        <p v-tooltip.top="'Create a new category'" class="sm:block hidden">
          Create category
        </p>
      </router-link>
      <!--  -->
      <router-link
        class="text-white flex gap-3 items-center md:text-lg sm:text-base text-3xl font-semibold [&.router-link-active]:bg-gray-400 [&.router-link-active]:text-black py-1 px-2"
        to="/categories-list"
      >
        <i class="fa-solid fa-pen-to-square"></i>
        <p v-tooltip.top="'Manage your categories'" class="sm:block hidden">
          Manage category
        </p>
      </router-link>
      <!--  -->
      <router-link
        class="text-white flex gap-3 items-center md:text-lg sm:text-base text-3xl font-semibold [&.router-link-active]:bg-gray-400 [&.router-link-active]:text-black py-1 px-2"
        to="/order-list"
      >
        <i class="fa-solid fa-pen-to-square"></i>
        <p v-tooltip.top="'View your orders'" class="sm:block hidden">Orders</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// No script content needed for tooltips to work
</script>
