import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/app/pages/App.vue";
// import AddCard from "@/app/pages/AddCard.vue";
// import Fruit from "@/app/pages/Fruit.vue";
import Welcome from "@/app/pages/Welcome.vue";
// import Account from "@/app/pages/Account.vue";
// import Register from "@/app/pages/auth/Register.vue";
// import ForgotPassword from "@/app/pages/auth/ForgotPassword.vue";
// import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/app/pages/auth/Login.vue"),
      meta: {
        disableIfLoggedIn: true,
      }
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "@/app/pages/auth/Register.vue"
      ),
    meta: {
      disableIfLoggedIn: true,
    },
  },
  {
    path: "/password-reset",
    name: "ForgotPassword",
    component: () =>
      import(
        /* webpackChunkName: "login" */ "@/app/pages/auth/ForgotPassword.vue"
      ),
    meta: {
      disableIfLoggedIn: true,
    },
  },
  {
    path: "/app",
    name: "App",
    component: App,
    meta: { requiresAuth: true },
  },
  {
    path: "/add-card",
    name: "AddCard",
    component: () =>
      import(/* webpackChunkName: "add-card" */ "@/app/pages/AddCard.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/fruit",
    name: "Fruit",
    component: () =>
      import(/* webpackChunkName: "fruit" */ "@/app/pages/Fruit.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "account" */ "@/app/pages/Account.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "account" */ "@/app/pages/error/NotFound.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  let access_token = localStorage.getItem("access_token");
  if (to.matched.some((record) => record.meta.disableIfLoggedIn)) {
    if (access_token != null) {
      next({ name: "App" });
      return;
    }
    next();
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (access_token != null) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
