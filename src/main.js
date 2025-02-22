import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);

app.mount("#app");
