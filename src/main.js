import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootswatch/dist/lumen/bootstrap.min.css";

//Vue.config.productionTip = false;

import "@/css/style.css";

createApp(App)
  .use(BootstrapVue)
  .use(store)
  .use(router)
  .mount("#app");
