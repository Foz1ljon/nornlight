<!-- src/components/NotFound.vue -->
<template>
  <div class="container text-center py-10">
    <h1 class="text-4xl font-bold text-red-600">404</h1>
    <p class="text-xl font-medium">Page Not Found</p>
    <router-link to="/" class="text-blue-500 underline mt-4 inline-block">
      Go back to Home
    </router-link>
  </div>
</template>

<script setup>
// No additional script needed for this simple component
</script>

<style scoped></style>
