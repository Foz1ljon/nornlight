<template>
  <div>
    <CartDisplay />
    <OrderForm />
  </div>
</template>

<script>
import CartDisplay from "@/components/Cart.vue";
import OrderForm from "@/components/Order-Cart.vue";

export default {
  components: {
    CartDisplay,
    OrderForm,
  },
};
</script>
