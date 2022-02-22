import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./assets/scss/index.scss";
import "animate.css";
import { TroisJSVuePlugin } from "troisjs";

createApp(App).use(store).use(router).use(TroisJSVuePlugin).mount("#app");
