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
    path: "/add-new-record",
    component: () => import("./views/add-new-record.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
