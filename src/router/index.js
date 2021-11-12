import { createRouter, createWebHistory } from "vue-router";
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
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});

export default router;
