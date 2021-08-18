<template>
  <div class="pagesArt__container">
    <router-link to="/NavArt">
    <i class="fas fa-chevron-left"></i>
    </router-link>
    <AjouterUnArt/>
  </div>
</template>


<!-- SCRIPT -->
<script>

import AjouterUnArt from "../components/AjouterUnArt.vue";

export default {
  name: "AjoutArtView",
  components: {
    AjouterUnArt
  },
};
</script>

<!-- STYLE -->
<style>
@font-face {
  font-family:"ChocolatesDemBold";
  src:local("tt_chocolates_demibold"), 
  url(~@/assets/Fonts/tt_chocolates_demibold.otf) format('opentype');
}
@font-face {
  font-family:"ChocolatesExBold";
  src:local("tt_chocolates_extrabold"),
  url(~@/assets/Fonts/tt_chocolates_extrabold.otf) format('opentype');
}
@font-face {
  font-family:"ChocolatesMedium";
  src:local("tt_chocolates_medium"),
  url(~@/assets/Fonts/tt_chocolates_medium.otf) format('opentype');
}

.pagesArt__container{
  position: relative;
  top:0px;
  right: 0px;
  left:0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  background-color: #F5FAFF;
  
}
a{
  text-decoration: none;
}
</style>
