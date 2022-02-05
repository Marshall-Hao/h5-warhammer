import { createRouter, createWebHashHistory } from "vue-router";

import Landing from "../views/Landing";
import Terms from "../views/Terms";
import Choose from "../views/Choose";

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
  {
    path: "/choose",
    component: Choose,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
