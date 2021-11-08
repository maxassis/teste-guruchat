import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Read from "../views/Read.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/read",
    name: "Reade",
    component: Read,
  },

  // {
  //   path: "/read",
  //   name: "Read",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Read.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
