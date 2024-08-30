import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CartPage from "@/views/CartPage.vue";
import AuthPage from "@/views/AuthPage.vue";

const routes = [
  { path: "/", component: HomePage, meta: { requiresAuth: true } },

  { path: "/cart", component: CartPage, meta: { requiresAuth: true } },

  {
    path: "/auth",
    component: AuthPage,
    meta: { guestOnly: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next("/auth");
  } else if (
    to.matched.some((record) => record.meta.guestOnly) &&
    isAuthenticated
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
