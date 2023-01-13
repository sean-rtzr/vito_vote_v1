import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "./assets/scss/_default.scss";

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
