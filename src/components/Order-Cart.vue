<template>
  <form @submit.prevent="submitOrder">
    <div class="w-full bg-[#F2F2F2] my-8 p-3 rounded-lg">
      <div class="flex flex-col gap-5">
        <div class="flex py-10 p-5 gap-8 flex-col items-start">
          <div class="flex justify-around gap-20">
            <input
              type="text"
              class="py-2 pl-8 pr-24 rounded-3xl border-2 border-primary bg-[#F2F2F2] outline-none"
              placeholder="ФИО"
              v-model="name"
            />
            <input
              type="text"
              class="py-2 pl-8 pr-24 rounded-3xl border-2 border-primary bg-[#F2F2F2] outline-none"
              placeholder="телефон"
              v-model="phone"
            />
            <input
              type="email"
              class="py-2 pl-8 pr-24 rounded-3xl border-2 border-primary bg-[#F2F2F2] outline-none"
              placeholder="Электронная почта"
              v-model="email"
            />
          </div>

          <div class="flex flex-col gap-6 items-start">
            <p class="text-3xl text-primary font-bold">Доставка</p>
            <input
              class="py-2 pl-8 pr-24 rounded-3xl border-2 border-primary bg-[#F2F2F2] outline-none"
              type="text"
              placeholder="Адрес доставки"
              v-model="address"
            />
            <textarea
              class="h-[20vh] pl-8 pr-24 rounded-3xl border-2 border-primary bg-[#F2F2F2] outline-none"
              placeholder="Комментарий"
              v-model="comment"
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-[#F2F2F2] my-8 p-6 py-10 rounded-lg">
      <div class="flex flex-col gap-6">
        <p class="text-3xl text-primary font-bold">Оплата</p>

        <div class="flex gap-6">
          <p class="text-base text-primary/50 font-semibold">
            Товары.............................................12 300₽
          </p>
          <p class="text-base text-primary/50 font-semibold">
            Доставка..............................................580₽
          </p>
        </div>

        <div class="flex flex-col gap-5">
          <p class="text-3xl text-primary font-bold">12 800₽</p>

          <div class="flex gap-4">
            <button
              type="submit"
              class="py-2.5 px-36 rounded-full bg-primary text-white"
            >
              Купить
            </button>
            <p class="flex items-center gap-2 text-xs text-primary/50">
              <button
                @click="isAgree = !isAgree"
                type="button"
                :class="
                  isAgree
                    ? 'bg-primary border border-primary text-white'
                    : 'border border-primary'
                "
                class="p-1.5 px-2 rounded-full"
              >
                <i class="fa-solid fa-check"></i>
              </button>
              Я согласен на обработку моих персональных данных
            </p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { toast } from "vue3-toastify";
import { useProductStore } from "../stores/productStore";

const isAgree = ref(false);
const productStore = useProductStore();

// Refs for form inputs

const name = ref("John Doe");
const phone = ref("901234567");
const email = ref("john@mail.ru");
const address = ref("Toshkent Chilonzor 9");
const comment = ref(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cumque!"
);

const submitOrder = () => {
  if (productStore.cart.length == 0) {
    return toast.warning("Cart is Empty");
  }
  if (!name.value.trim()) {
    return toast.warning("Введите ФИО!");
  }
  if (!phone.value.trim()) {
    return toast.warning("Введите номер телефона!");
  }
  if (!validatePhone(phone.value.trim())) {
    return toast.warning("Неправильный формат номера телефона!");
  }
  if (!email.value.trim()) {
    return toast.warning("Введите адрес электронной почты!");
  }
  if (!validateEmail(email.value.trim())) {
    return toast.warning("Неправильный формат адреса электронной почты!");
  }

  const order = {
    cart: productStore.cart,
    customer: {
      name: name.value,
      phone: phone.value,
      email: email.value,
      address: address.value,
      comment: comment.value,
    },
  };

  localStorage.setItem("orders", JSON.stringify(order));
  toast.success("Заказ успешно оформлен!");
  localStorage.removeItem("cart");
};

// Function to validate phone number format
function validatePhone(phone) {
  // Simplified validation: checks if the phone number consists only of digits
  return /^\d+$/.test(phone);
}

// Function to validate email format
function validateEmail(email) {
  // Basic email validation using a regular expression
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
</script>

<style scoped>
/* Add your styles here */
</style>
