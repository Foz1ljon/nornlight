import { defineStore } from "pinia";
import { ref, reactive, computed, watch } from "vue";
import api from "@/api";

export const useProductStore = defineStore("productStore", () => {
  const product = ref({});
  const isLoading = ref(true);
  const cart = ref(JSON.parse(localStorage.getItem("cart")) || []);
  const favorites = ref(JSON.parse(localStorage.getItem("favorites")) || []);
  const productCounts = reactive(new Map());

  const fetchProduct = async (id) => {
    isLoading.value = true;
    try {
      const res = await api.get(`/products/${id}`);
      product.value = res.data;
      if (!productCounts.has(id)) {
        productCounts.set(id, 0); // Initialize the count for the new product
      }
    } catch (err) {
      alert(err);
    } finally {
      isLoading.value = false;
    }
  };

  const incCount = (id) => {
    if (productCounts.has(id)) {
      productCounts.set(id, productCounts.get(id) + 1);
    } else {
      productCounts.set(id, 1);
    }
  };

  const decCount = (id) => {
    if (productCounts.has(id) && productCounts.get(id) > 0) {
      productCounts.set(id, productCounts.get(id) - 1);
    }
  };

  const addToCart = (product) => {
    if (!cart.value.find((item) => item.id === product.id)) {
      cart.value.push(product);
      updateLocalStorage();
    }
  };

  const removeFromCart = (productId) => {
    cart.value = cart.value.filter((item) => item.id !== productId);
    updateLocalStorage();
  };

  const addToFavorites = (product) => {
    if (!favorites.value.find((item) => item.id === product.id)) {
      favorites.value.push(product);
      updateFavoritesLocalStorage();
    }
  };

  const removeFromFavorites = (productId) => {
    favorites.value = favorites.value.filter((item) => item.id !== productId);
    updateFavoritesLocalStorage();
  };

  const updateLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const updateFavoritesLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites.value));
  };

  // Computed property to check if the current product is in the cart
  const isCart = computed(() => {
    return cart.value.some(item => item.id === product.value.id);
  });

  // Watch for changes in cart and favorites to update local storage automatically
  watch(cart, updateLocalStorage, { deep: true });
  watch(favorites, updateFavoritesLocalStorage, { deep: true });

  return {
    isCart,
    product,
    isLoading,
    cart,
    favorites,
    productCounts,
    fetchProduct,
    incCount,
    decCount,
    addToCart,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
  };
});
