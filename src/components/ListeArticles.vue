<template>
  <div class="listeArt__container">
    <div class="listeArt__heading">Mes articles</div>

    <div class="listeArt__Liste" v-for="art in tabArt" :key="art.id">
      <div class="listeArt__Liste__art">
        <p class="listeArt__Liste__art__nom">{{ art.nom }}</p>
        <i class="fas fa-chevron-right"></i>
      </div>
      <div class="listeArt__Liste__art__barre"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ListeArticles",

  data() {
    return {
      tabArt: [
        {
          nom: "Achat de matériel",
        },
        {
          nom: "Dépose des murs",
        },
        {
          nom: "Dépose des radiateurs",
        },
        {
          nom: "Dépose des sols",
        },
        {
          nom: "Remplacement sanitaires",
        },
        {
          nom: "Pose meuble vasque",
        },
      ],
    };
  },
};
</script>

<!-- STYLE -->

<style>
.svg-inline--fa {
  height: auto;
}

.listeArt__container {
  width: 60%;
  background-color: white;
  border-radius: 10px;
}

.listeArt__heading {
  font-family: "ChocolatesDemBold";
  text-align: start;
  padding: 10px;
  font-size: 30px;
}

.listeArt__Liste__art {
  padding: 10px;
  display: flex;
  font-family: "ChocolatesMedium";
  font-size: 14px;
  flex-direction: row;
  justify-content: space-between;
}

.listeArt__Liste__art__barre {
  width: 100%;
  height: 1.5px;
  background-color: #d5dde5;
}
</style>
