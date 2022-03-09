import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import Content from "../views/Content.vue";

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
    props: { absoluteView: true },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    props: { absoluteView: true },
  },
  {
    path: "/content",
    name: "content",
    component: Content,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
