import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import vuetify from "./plugins/vuetify";
import Vue3Lottie from "@reslear/vue3-lottie";
import { loadFonts } from "./plugins/webfontloader";
import "./assets/scss/_default.scss";
import store from './store'

loadFonts();

createApp(App).use(store).use(vuetify).use(router).use(Vue3Lottie).mount("#app");
