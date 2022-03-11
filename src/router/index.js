import { createRouter, createWebHashHistory } from "vue-router";
import storage from "good-storage";

const Landing = () => import("../views/Landing");

const Terms = () => import("../views/Terms");

const Choose = () => import("../views/Choose");

const Questions = () => import("../views/questions");

const FourkQuestion = () => import("../views/fourkQuestion");

const AosQuestion = () => import("../views/aosQuestion");

const RevealFaction = () => import("../views/RevealFaction");

const Share = () => import("../views/Share");

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
    beforeEnter: (to, from, next) => {
      const currentQuiz = storage.session.get("__currentquiz__");
      if (!currentQuiz) {
        next({
          path: "/landing",
        });
      } else {
        next();
      }
    },
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
  {
    path: "/share",
    component: Share,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
