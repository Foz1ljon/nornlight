import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Details from "../pages/DetailsPage.vue";
import AllProducts from "../pages/ProductsPage.vue";
import Aboutus from "../pages/AboutUsPage.vue";
import ShopPayment from "../pages/ShopPaymentPage.vue";
import Return from "../pages/ReturnPage.vue";
import Garant from "../pages/GarantPage.vue";
import Contacts from "../pages/ContactsPage.vue";
import Blog from "../pages/BlogPage.vue";
import Basket from "../pages/CartPage.vue";
import Favourites from "../pages/FavouritesPage.vue";
import Catalog from "../pages/CatalogPage.vue";
import NotFound from "../pages/NotFound.vue";
import Dashboard from "../views/Dashboard.vue";
import MainPage from "../pages/MainPage.vue";
import CreateProducts from "@/components/Dashboard/create-products.vue";
import ProductList from "../components/Dashboard/Product-list.vue";
import UpdateProducts from "@/components/Dashboard/update-products.vue";
import Order from "@/components/Dashboard/order-list.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "/product-list",
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/create-product",
        name: "create-product",
        component: CreateProducts,
      },
      {
        path: "/update-product/:id",
        name: "update-product",
        component: UpdateProducts,
      },
      {
        path: "/product-list",
        name: "product-list",
        component: ProductList,
      },
      {
        path: "/order-list",
        name: "orders",
        component: Order,
      },
    ],
  },
  {
    path: "/",
    name: "main-app",
    component: Main,
    children: [
      {
        path: "/",
        name: "main",
        component: MainPage,
      },
      { path: "/products", name: "all-products", component: AllProducts },
      { path: "/products/:id", name: "detail", component: Details },
      { path: "/about", name: "about-us", component: Aboutus },
      { path: "/shopping", name: "shop&pay", component: ShopPayment },
      { path: "/return", name: "return", component: Return },
      { path: "/garant", name: "garant", component: Garant },
      { path: "/contacts", name: "contacts", component: Contacts },
      { path: "/blog", name: "blog", component: Blog },
      { path: "/cart", name: "basket", component: Basket },
      { path: "/favourites", name: "favourites", component: Favourites },
      { path: "/catalog", name: "catalog", component: Catalog },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add a global navigation guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next({ name: "login" });
    } else {
      next();
    }
  } else if (to.name === "login" && token) {
    next({ name: "dashboard" });
  } else {
    next();
  }
});

export default router;
