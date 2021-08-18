<template>
  <div class="pagesArt__container">
    <EditerUnArt />
  </div>
</template>

<!-- SCRIPT -->
<script>
import EditerUnArt from "../components/EditerUnArt.vue";

export default {
  name: "EditArtView",
  components: {
    EditerUnArt,
  },
};
</script>

<!-- STYLE -->
<style>
.pagesArt__container {
  position: relative;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  width: 100%;
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

/* TABLET ET MOBILE */
@media screen and (max-width: 768px) {
  .pagesArt__container {
    position: relative;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
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

}
</style>
