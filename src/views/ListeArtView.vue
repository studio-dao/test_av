<template>
  <div class="pagesArt__container">
    <ListeArticles />
  </div>
</template>

<!-- SCRIPT -->
<script>
// @ is an alias to /src
import ListeArticles from "../components/ListeArticles.vue";

export default {
  name: "ListeArtView",
  components: {
    ListeArticles,
  },
};
</script>

<!-- STYLE -->
<style>
@font-face {
  font-family: "ChocolatesDemBold";
  src: local("tt_chocolates_demibold"),
    url(~@/assets/Fonts/tt_chocolates_demibold.otf) format("opentype");
}
@font-face {
  font-family: "ChocolatesExBold";
  src: local("tt_chocolates_extrabold"),
    url(~@/assets/Fonts/tt_chocolates_extrabold.otf) format("opentype");
}
@font-face {
  font-family: "ChocolatesMedium";
  src: local("tt_chocolates_medium"),
    url(~@/assets/Fonts/tt_chocolates_medium.otf) format("opentype");
}

.pagesArt__container {
  position: relative;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  width: 100%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  background-color: #f5faff;
}
a {
  text-decoration: none;
  color: black;
}
</style>
