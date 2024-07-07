import { defineStore } from "pinia";
import api from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || "",
    router: useRouter(),
  }),
  actions: {
    async login(form) {
      try {
        const res = await api.post("https://dummyjson.com/auth/login", form);
        this.token = res.data.token;
        localStorage.setItem("token", res.data.token);
        this.router.push({ name: "dashboard" });
        toast.success("Logged in");
      } catch (err) {
        console.log(err);
        toast.error("Login failed");
      } finally {
      }
    },
  },
});
