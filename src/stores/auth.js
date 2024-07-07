import { defineStore } from "pinia";
import api from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || "",
  }),
  actions: {
    async login(form) {
      try {
        const res = await api.post("https://dummyjson.com/auth/login", form);
        this.token = res.data.token;
        localStorage.setItem("token", res.data.token);
        toast.success("Logged in");
        setTimeout(window.location.reload(), 6000);
      } catch (err) {
        toast.error(err.response?.data?.message || "Login failed");
      } finally {
      }
    },
  },
});
