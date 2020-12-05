import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
//import 'bootswatch/dist/[theme]/bootstrap.min.css';

//Vue.config.productionTip = false;

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");