import Vue from "vue";
import VueRouter from "vue-router";
import MesArticles from "../views/MesArticles.vue";
import EditerUnArtView from "../views/EditerUnArtView.vue";
import ListeArtView from "../views/ListeArtView.vue";
import NavArt from "../components/NavArt.vue";
import AjouterArticleView from "../views/AjouterArticleView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MesArticles",
    component: MesArticles,
  },
  {
    path: "/Editer-article",
    name: "Editer article",
    component: EditerUnArtView,
  },
  {
    path: "/Liste-des-articles",
    name: "Liste article",
    component: ListeArtView,
  },
  {
    path: "/Navigation-Article",
    name: "Navigation article",
    component: NavArt,
  },
  {
    path: "/Ajouter-Article",
    name: "Ajouter article",
    component: AjouterArticleView
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
