import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import "virtual:windi.css";
import "virtual:windi-devtools";

createApp(App).use(createPinia().use(piniaPluginPersistedstate)).mount("#app");
