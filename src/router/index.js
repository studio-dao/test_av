import Vue from "vue";
import VueRouter from "vue-router";
import MesArticles from "../views/MesArticles.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MesArticles",
    component: MesArticles,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
