import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home"
      }
    },
    {
      path: "/account-information",
      name: "account-information",
      component: () => import("@/views/AccountInformation.vue"),
      meta: {
        title: "Account Information"
      }
    },
    {
      path: "/contributors-and-supporters",
      name: "Contributors and supporters",
      component: () => import("@/views/Contributors.vue"),
      meta: {
        title: "Contributors and supporters"
      }
    },
    {
      path: "/banned-accounts",
      name: "Banned Accounts",
      component: () => import("@/views/BannedAccounts.vue"),
      meta: {
        title: "Banned Accounts"
      }
    },
    {
      path: "/contact-us",
      name: "Contact",
      component: () => import("@/views/ContactUs.vue"),
      meta: {
        title: "Contact Us"
      }
    },
    {
      path: "/faq",
      name: "FAQ",
      component: () => import("@/views/FAQ.vue"),
      meta: {
        title: "FAQ"
      }
    },
    {
      path: "/form",
      name: "Form",
      component: () => import("@/views/BotSubmit.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      name: "bad-not-found",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | Bot Detector` : "Bot Detector";
  next();
})

export default router;
