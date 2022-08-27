import { createRouter, createWebHistory } from "vue-router";
import pinia from "@/store/store.js";
import {useUserStore} from "@/store/user";
const userStore = useUserStore(pinia)

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
});

router.beforeEach(function (to, _, next) {
  const isAuthenticated = userStore.userData;
  if(to.meta.authorizationPage && !!isAuthenticated) {
    return next('/dashboard')
  }
  if(to.meta.authenticatedPage && !isAuthenticated) {
    return next('/')
  }
  return next();
});

export default router;
