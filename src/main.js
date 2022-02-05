import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./assets/scss/index.scss";
import "animate.css";

createApp(App).use(store).use(router).mount("#app");
