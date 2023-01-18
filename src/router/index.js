import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const WhitepaperView = () => import("../views/WhitepaperView.vue");
const DashboardView = () => import("../views/DashboardView.vue");
const ComingSoonView = () => import("../views/ComingSoonView.vue");

const scrollBehavior = (to) => {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: "smooth",
    };
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/whitepaper",
      name: "whitepaper",
      component: WhitepaperView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: {
        layout: "dashboard",
      },
      component: DashboardView,
    },
    {
      path: "/staking",
      name: "staking",
      meta: {
        layout: "dashboard",
      },
      component: ComingSoonView,
    },
    {
      path: "/swap",
      name: "swap",
      meta: {
        layout: "dashboard",
      },
      component: ComingSoonView,
    },
    {
      path: "/marketplace",
      name: "marketplace",
      meta: {
        layout: "dashboard",
      },
      component: ComingSoonView,
    },
    {
      path: "/Chart",
      name: "chart",
      meta: {
        layout: "dashboard",
      },
      component: ComingSoonView,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
  scrollBehavior,
});

export default router;
