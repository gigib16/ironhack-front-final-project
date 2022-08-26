import { createRouter, createWebHistory } from "vue-router";
// import store from "./store/task.js";

import NotFound from "./pages/NotFound";

// Authentication Package
import LoginPage from "./pages/Authentication/LoginPage";
import RegisterPage from "./pages/Authentication/RegisterPage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import TheHeader from '@/components/TheHeader'

const router = createRouter({
  history: createWebHistory(),
  routes: [

    // Authentication Page
    {
      path: "/",
      components: {
        default: LoginPage,
      },
      meta: { authorizationPage: true },
    },
    {
      path: "/signup",
      components: {
        default: RegisterPage,
      },
      meta: { authorizationPage: true },
    },
    {
      path: "/dashboard",
      meta: { authenticatedPage: true, isAuthenticad: true },
      components: {
        header: TheHeader,
        default: DashboardPage,
      },
    },
    {
      name: "404",
      path: "/404",
      components: { default: NotFound },
    }, // our-domain.com/membership => UsersList
    { path: "/:notFound(.*)", redirect: "/404" }, // our-domain.com/membership => UsersList
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  },
});

// router.beforeEach(function (to, _, next) {
//
//   return next();
// });

export default router;
