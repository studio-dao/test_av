<template>
  <div class="listeArt__container">

    <!-- heading -->
    <div class="listArt__heading">
      <router-link
        to="/Navigation-Article"
        class="listArt__heading__a__chevron"
      >
        <i class="fas fa-chevron-left"></i>
      </router-link>
      <p class="listArt__heading__titre">Mes articles</p>
      <div></div>
    </div>

    <!-- barre article -->
    <div class="listArt__ListeTab__container">
      <div :class="listeArt__Liste " v-for="art in tabArt" :key="art.id">
        <div class="listeArt__Liste__art">
          <div class="listeArt__Liste__art__nomEtChevron">
            <p class="listeArt__Liste__art__nom">
              {{ art.nom }}
            </p>
            <div class="ListeArt__Liste__div__chevron" @click="showDelete()">
              <div>
                <i id="chevron" class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>

          <!-- delete div -->
          <div
            class="listeArt__Liste__art__delete"
            v-if="ReveleDelete"
            @click="showDelete()"
          >
            <i class="far fa-trash-alt"></i>
            <p>Supprimer</p>
          </div>
        </div>

        <!-- sous barre -->
        <div class="listeArt__Liste__art__barre"></div>
      </div>
    </div>

    <!-- bouton -->
    <div class="Edit___div__bouton">
      <router-link to="/Ajouter-Article">
      <button class="Edit__bouton">Ajouter un article</button></router-link>
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
          isActive: false
        },
        {
          nom: "Dépose des murs",
          isActive: false
        },
        {
          nom: "Dépose des radiateurs",
          isActive: false
        },
        {
          nom: "Dépose des sols",
          isActive: false
        },
        {
          nom: "Remplacement sanitaires",
          isActive: false
        },
        {
          nom: "Pose meuble vasque",
          isActive: false
        },
      ],
      ReveleDelete: false,
    };
  },
  methods: {
    showDelete() {
      this.ReveleDelete = !this.ReveleDelete;
    },
  },
};
</script>

<!-- STYLE -->

<style>
.svg-inline--fa {
  height: auto;
}

.listeArt__container {
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: white;
  align-items: center;
  border-radius: 10px;
}

/* heading */
.listArt__heading__a__chevron {
  display: none;
}
.listArt__heading {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.listArt__heading__titre {
  font-family: "ChocolatesDemBold";
  margin-left: 20px;
  font-size: 30px;
  text-align: left;
}

/* tab list art */
.listArt__ListeTab__container {
  width: 100%;
  margin-bottom: 40px;
}

.listeArt__Liste__art {
  padding: 0px 0px 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.listeArt__Liste__art__nomEtChevron {
  padding: 0px 10px;
  width: 100%;
  font-family: "ChocolatesMedium";
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.listeArt__Liste__art__barre {
  width: 100%;
  height: 1.5px;
  background-color: #d5dde5;
}

.listeArt__Liste__art__nom {
  margin-left: 15px;
  padding: 7px;
}
.fa-chevron-right {
  margin-right: 15px;
  text-align: right;
}

/* delete div */
.listeArt__Liste__art__delete {
  width: 15%;
  padding: 7px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "ChocolatesMedium";
  font-size: 14px;
  color: white;
  background-color: red;
}
.fa-trash-alt {
  color: white;
  margin-bottom: 3px;
}

/* TABLETTE ET MOBILE */
@media screen and (max-width: 768px) {
  .svg-inline--fa {
    height: auto;
  }

  .listeArt__container {
    width: 100%;
    background-color: white;
    border-radius: 10px;
  }

  .listArt__heading__a__chevron {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fa-chevron-left {
    height: auto;
    margin-left: 20px;
  }

  .listeArt__heading {
    text-align: start;
    padding: 10px;
    font-size: 30px;
  }
  .listArt__heading__titre {
    font-family: "ChocolatesDemBold";
    font-size: 20px;
    text-align: left;
  }
}
</style>
