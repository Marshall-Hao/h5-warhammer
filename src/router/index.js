import { createRouter, createWebHashHistory } from "vue-router";

import Landing from "../views/Landing";
import Terms from "../views/Terms";

const routes = [
  {
    path: "/",
    redirect: "/landing",
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/terms",
    component: Terms,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
