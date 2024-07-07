<template>
  <div class="w-full h-screen bg-gray-400">
    <div class="container">
      <div class="md:py-[5%] sm:py-[7%] py-[30%]">
        <div
          class="mx-auto sm:w-[500px] w-full sm:h-[500px] h-full bg-slate-100 shadow-lg flex p-7 justify-center items-center gap-8 flex-col"
        >
          <p class="text-5xl font-bold text-primary">Login</p>
          <form
            @submit.prevent="Login"
            class="flex flex-col justify-center gap-3 items-center"
          >
            <label class="flex flex-col gap-3" for="username">
              <p class="text-xl font-semibold">Username</p>

              <input
                class="py-3 pl-5 sm:pr-12 pr-7 bg-slate-100 border rounded-lg"
                type="text"
                id="username"
                v-model="form.username"
                placeholder="Enter username..."
              />
            </label>

            <label class="flex flex-col gap-3" for="password">
              <p class="text-xl font-semibold">Password</p>
              <input
                class="py-3 pl-5 sm:pr-12 pr-7 bg-slate-100 border rounded-lg"
                type="password"
                id="password"
                v-model="form.password"
                placeholder="Enter password..."
              />
            </label>
            <button class="py-2 px-20 bg-slate-100 border text-2xl rounded-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from "axios";
import { reactive, ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const loader = ref(false);

const form = reactive({
  username: "emilys",
  password: "emilyspass",
});

const Login = () => {
  api
    .post("https://dummyjson.com/auth/login", form)
    .then((res) => {
      loader.value = true;
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      toast.success("Logged in");
    })
    .catch((err) => {
      toast.error(err);
    })
    .finally(() => {
      loader.value = false;
    });
};
</script>
