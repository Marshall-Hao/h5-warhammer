import { createRouter, createWebHashHistory } from "vue-router";

import Landing from "../views/Landing";
import Terms from "../views/Terms";
import Choose from "../views/Choose";
import Questions from "../views/questions";
import FourkQuestion from "../views/fourkQuestion";
import AosQuestion from "../views/aosQuestion";
import RevealFaction from "../views/RevealFaction";

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
  {
    path: "/questions",
    component: Questions,
    children: [
      {
        path: "40k/:id",
        component: FourkQuestion,
      },
      {
        path: "aos/:id",
        component: AosQuestion,
      },
    ],
  },
  {
    path: "/reveal",
    component: RevealFaction,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
