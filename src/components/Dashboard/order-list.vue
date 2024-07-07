<template>
  <div class="container">
    <h2 class="text-primary text-2xl font-medium py-2 pb-5">Orders list</h2>

    <div v-if="isEmpty" class="text-center text-lg py-5">
      No orders available.
    </div>
    <div v-else class="grid grid-cols-1 gap-4">
      <div class="bg-white shadow-md rounded-lg p-4">
        <p class="text-lg font-semibold">Customer Information</p>
        <div class="mt-2">
          <p>
            <span class="font-semibold">Name:</span> {{ orders.customer.name }}
          </p>
          <p>
            <span class="font-semibold">Phone:</span>
            {{ orders.customer.phone }}
          </p>
          <p>
            <span class="font-semibold">Email:</span>
            {{ orders.customer.email }}
          </p>
          <p>
            <span class="font-semibold">Address:</span>
            {{ orders.customer.address }}
          </p>
          <p>
            <span class="font-semibold">Comment:</span>
            {{ orders.customer.comment }}
          </p>
        </div>
      </div>

      <div
        v-for="(item, index) in orders.cart"
        :key="index"
        class="bg-white shadow-md rounded-lg p-4"
      >
        <p class="text-lg font-semibold">Order #{{ index + 1 }}</p>
        <div class="mt-2">
          <p><span class="font-semibold">Title:</span> {{ item?.title }}</p>
          <p>
            <span class="font-semibold">Old Price:</span> {{ item?.oldPrice }}
          </p>
          <p>
            <span class="font-semibold">New Price:</span> {{ item?.newPrice }}
          </p>
          <p><span class="font-semibold">Color:</span> {{ item?.color }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";

const orders = ref({
  cart: [],
  customer: {},
});

const isEmpty = computed(() => {
  return (
    orders.value.cart.length === 0 &&
    Object.keys(orders.value.customer).length === 0
  );
});

onMounted(() => {
  const storedOrders = JSON.parse(localStorage.getItem("orders")) || {
    cart: [],
    customer: {},
  };
  orders.value = storedOrders;
});
</script>
