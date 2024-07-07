<template>
  <div
    class="w-[25%] fixed z-50 h-screen bg-primary p-4 flex flex-col gap-10 items-center"
  >
    <!--  -->
    <router-link
      to="/"
      class="font-semibold flex items-center gap-2 md:text-lg sm:text-base text-3xl text-white [&.router-link-active]:bg-gray-400"
    >
      <i class="fa-solid fa-arrow-left-long"></i>
      <p class="sm:block hidden">Admin Dashboard</p>
    </router-link>
    <!--  -->
    <div class="flex flex-col md:gap-4 gap-5">
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
        <p  class="sm:block hidden">
          Manage product
        </p>
      </router-link>
      <!--  -->

      <router-link
        class="text-white flex gap-3 items-center md:text-lg sm:text-base text-3xl font-semibold [&.router-link-active]:bg-gray-400 [&.router-link-active]:text-black py-1 px-2"
        to="/order-list"
      >
        <i class="fa-solid fa-pen-to-square"></i>
        <p class="sm:block hidden">Orders</p>
      </router-link>

      <button
        @click="logout"
        class="text-white flex gap-3 items-center md:text-lg sm:text-base text-3xl font-semibold [&.router-link-active]:bg-gray-400 [&.router-link-active]:text-black py-1 px-2"
      >
        <p><i class="fa-solid fa-right-from-bracket"></i></p>
        <p class="sm:block hidden">Logout</p>
      </button>
    </div>
  </div>
</template>

<script setup>
const logout = () => {
  localStorage.removeItem("token");
};
</script>
