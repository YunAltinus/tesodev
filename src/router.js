import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/home.vue"),
  },
  {
    path: "/list",
    component: () => import("./views/list.vue"),
  },
  {
    path: "/new-record",
    component: () => import("./views/add-new-record.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
