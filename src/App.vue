<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
#app {
  width: 100vw;
  height: 100vw;
}

input {
  border: none;
}

p {
  margin: 0px;
}
</style>
