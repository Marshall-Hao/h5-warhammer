import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./assets/scss/index.scss";
import "animate.css";
import { VueCookieNext } from "vue-cookie-next";
import { TroisJSVuePlugin } from "troisjs";
import VueLuckyCanvas from "@lucky-canvas/vue";

createApp(App)
  .use(store)
  .use(router)
  .use(VueLuckyCanvas)
  .use(VueCookieNext)
  .mount("#app");

VueCookieNext.config({ expire: "7d" });

if (process.env.NODE_ENV === "production") console.log = () => {};
