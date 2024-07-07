import { defineStore } from "pinia";
import api from "@/api"; // Assuming this is your API module
import { toast } from "vue3-toastify"; // Assuming you're using a toast notification library
import "vue3-toastify/dist/index.css"; // Assuming this is the CSS for the toast library

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
        // Make API request to fetch products
        const res = await api.get("/products");
        this.products = res.data;
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        this.isLoading = false;
      }
    },

    async deleteProduct(id) {
      this.isLoad = true;
      try {
        await api.delete(`/products/${id}`); // Assuming api.delete() deletes a product
        this.products = this.products.filter((product) => product.id !== id); // Optimistically update products list
        toast.success("Successfully deleted"); // Notify user of success
      } catch (err) {
        toast.error(`Failed to delete product: ${err.message}`); // Notify user of error
      } finally {
        this.isLoad = false; // Ensure isLoad is reset regardless of success or failure
      }
    },

    async fetchById(id) {
      this.isload = true;
      try {
        const res = await api.get(`/products/${id}`); // Assuming api.get() fetches a product by ID
        this.product = res.data; // Update product state with fetched data
      } catch (err) {
        toast.error(`Error fetching product by ID: ${err.message}`); // Notify user of error
      } finally {
        this.isload = false; // Ensure isload is reset regardless of success or failure
      }
    },

    async updateById(id, product) {
      this.load = true;
      try {
        await api.put(`/products/${id}`, product); // Assuming api.put() updates a product
        toast.success("Successfully updated"); // Notify user of success
      } catch (err) {
        toast.error(`Error updating product: ${err.message}`); // Notify user of error
      } finally {
        this.load = false; // Ensure load is reset regardless of success or failure
      }
    },

    async addProduct(product) {
      try {
        await api.post("/products", product); // Assuming api.post() adds a new product
        toast.success("Successfully created"); // Notify user of success
      } catch (err) {
        toast.error(`Error adding product: ${err.message}`); // Notify user of error
      }
    },
  },
});
