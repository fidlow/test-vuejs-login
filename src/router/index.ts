import { createRouter, createWebHistory } from "vue-router";
import SuccessPage from "@/views/SuccessPage.vue";
import Login from "@/views/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: { render: () => {} },
      meta: { title: "Main Page" }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { title: "Login Page" }
    },
    {
      path: "/success",
      name: "success",
      component: SuccessPage,
      beforeEnter(to, from, next) {
        if (from.name !== "login") {
          next({ name: "main" });
        } else next();
      },
      meta: { title: "Success Page" }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next();
});

export default router;
