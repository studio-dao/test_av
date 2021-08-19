<template>
  <div class="PagesNavArt__container__resp">
    <router-link to="/Editer-article">
      <div class="PagesNavArt__container__resp__lien">
        <p class="PagesNavArt__Lien"> &Eacute;diter un article</p>
        <i class="fas fa-chevron-right"></i>
      </div>
    </router-link>

    <router-link to="/Liste-des-articles">
      <div class="PagesNavArt__container__resp__lien">
        <p class="PagesNavArt__Lien">Liste de mes articles</p>
        <i class="fas fa-chevron-right"></i>
      </div>
    </router-link>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "NavArt",
};
</script>

<!-- STYLE -->
<style>
.PagesNavArt__container__resp {
  width: 100%;
  position: relative;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  flex-direction: column;
  background-color: #f5faff;
}
.PagesNavArt__container__resp__lien {
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
}
a {
  text-decoration: none;
}
.PagesNavArt__Lien {
  font-family: "ChocolatesDemBold";
  color: black;
  text-align: left;
}
</style>
