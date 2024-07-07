import { defineStore } from "pinia";
import api from "@/api";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    product: {},
    isLoading: false,
    isLoad: false,
    isload: false,
    load: false,
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true;
      try {
        const res = await api.get("/products");
        this.products = res.data;
      } catch (err) {
        toast.error(`Error fetching products: ${err.message}`);
      } finally {
        this.isLoading = false;
      }
    },

    async deleteProduct(id) {
      this.isLoad = true;
      try {
        await api.delete(`/products/${id}`);
        this.products = this.products.filter((product) => product.id !== id); // Optimistically update the state
        toast.success("Successfully deleted");
      } catch (err) {
        toast.error(`Failed to delete product: ${err.message}`);
      } finally {
        this.isLoad = false;
      }
    },

    async fetchById(id) {
      this.isload = true;
      try {
        const res = await api.get(`/products/${id}`);
        this.product = res.data;
      } catch (err) {
        toast.error(`Error fetching product by ID: ${err.message}`);
      } finally {
        this.isload = false;
      }
    },

    async updateById(id, product) {
      this.load = true;
      try {
        await api.put(`/products/${id}`, product);
        toast.success("Successfuly update!");
      } catch (err) {
        toast.error(`Error ${err}`);
      } finally {
        this.load = false;
      }
    },

    async addProduct(product) {
      try {
        await api.post("/products", product);
        toast.success("Successfuly create!");
      } catch (error) {
        toast.error(`Error ${err}`);
      }
    },
  },
});
