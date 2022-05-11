import { createRouter, createWebHashHistory } from "vue-router";
import storage from "good-storage";

const Landing = () =>
  import("../views/Landing" /*webpackChunkName: "landing" */);

const Terms = () => import("../views/Terms" /*webpackChunkName: "terms" */);

const Choose = () => import("../views/Choose" /*webpackChunkName: "choose" */);

const Questions = () =>
  import("../views/Questions" /*webpackChunkName: "question" */);

const FourkQuestion = () =>
  import("../views/fourkQuestion" /*webpackChunkName: "40kq" */);

const AosQuestion = () =>
  import("../views/aosQuestion" /*webpackChunkName: "aosq" */);

const RevealFaction = () =>
  import("../views/RevealFaction" /*webpackChunkName: "reveal" */);

const Share = () => import("../views/Share" /*webpackChunkName: "share" */);

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
      const id = to.params.id;
      const currentQuiz = storage.session.get("__currentquiz__");
      if (!currentQuiz || id > 7 || to.matched.length < 2) {
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
    beforeEnter: (to, from, next) => {
      const id = to.params.id;
      console.log(id);
      const currentQuiz = storage.session.get("__currentquiz__");
      if (!currentQuiz || id > 7) {
        next({
          path: "/landing",
        });
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next({
      path: "/landing",
    });
  } else {
    next();
  }
});

export default router;
