<template>
  <div class="pagesArt__container">
    <div class="ArtComponent__container">
      <ListeArticles />
      <AjouterUnArt />
    </div>
    <NavArt class="NavArt__show" />
  </div>
</template>

<!-- SCRIPT -->
<script>
// @ is an alias to /src
import ListeArticles from "../components/ListeArticles.vue";
import AjouterUnArt from "../components/AjouterUnArt.vue";
import NavArt from "../components/NavArt.vue";

export default {
  name: "MesArticles",
  components: {
    ListeArticles,
    AjouterUnArt,
    NavArt,
  },
};
</script>

<!-- STYLE -->
<style>
.ArtComponent__container {
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  background-color: #f5faff;
}

a {
  text-decoration: none;
}

/* RESPONSIVE MOBILE TABLET */
@media screen and (max-width: 768px) {
  .ArtComponent__container {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .NavArt__show {
    display: none;
  }
}
</style>
