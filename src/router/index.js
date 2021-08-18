import Vue from "vue";
import VueRouter from "vue-router";
import MesArticles from "../views/MesArticles.vue";
import AjouterUnArtView from "../views/AjouterUnArtView.vue";
import ListeArtView from "../views/ListeArtView.vue";
import NavArt from "../components/NavArt.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MesArticles",
    component: MesArticles,
  },
  {
    path: "/Ajout-article",
    name: "Ajout article",
    component: AjouterUnArtView,
  },
  {
    path: "/Liste-des-articles",
    name: "Liste article",
    component: ListeArtView,
  },
  {
    path: "/NavArt",
    name: "Navigation article",
    component: NavArt,
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
