<template>
  <div class="formEditArt">
    <div class="formEditArt__heading">
      <router-link
        to="/Navigation-Article"
        class="formEditArt__heading__a__chevron"
      >
        <i class="fas fa-chevron-left"></i>
      </router-link>
      <p class="formEditArt__heading__titre">&Eacute;diter un article</p>
      <i class="far fa-trash-alt"></i>
    </div>

    <div class="Edit__input__div__input__nom">
      <input
        class="Edit__input__nom"
        type="text"
        placeholder="Dépose des radiateurs"
      />
      <div class="input__prixunit__titre">
        <p>Nom de l'article</p>
      </div>
    </div>

    <!-- input prix unitaire -->
    <div class="Edit__input__prixunit__container">
      <div class="Edit__input__prixunit__titre">
        <p>Prix unitaire HT</p>
      </div>

      <input class="Edit__input__prixunit" type="text" placeholder="100.00" />

      <div class="Edit__input__prixunit__€">
        <p class="symbol">{{ euro }}</p>
      </div>
    </div>

    <!-- input tva -->
    <div class="Edit__form__tva">
      <div class="Edit__input__tva__titre">
        <p>TVA en %</p>
      </div>

      <input class="Edit__input__tva" type="text" placeholder="20.00" />

      <div class="Edit__input__tva__symbol">
        <p class="symbol">{{ pourcentage }}</p>
      </div>
    </div>

    <!-- Prix total -->
    <div class="Edit__total">
      <p class="Edit___total__title">Prix total TTC</p>
      <div class="Edit__total__montant">{{ total }}</div>
    </div>

    <!-- bouton -->
    <div class="Edit___div__bouton">
      <button class="Edit__bouton">Enregistrer l'article</button>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "AjouterUnArt",

  data() {
    return {
      euro: "€",
      pourcentage: "%",
      total: "120,00 €",
    };
  },
};
</script>

<!-- STYLE -->

<style>
.formEditArt {
  position: relative;
  width: 100%;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}
/* heading */
.formEditArt__heading {
  width: 80%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.formEditArt__heading__a__chevron {
  display: none;
}

.fa-chevron-left {
  height: auto;
}
.formEditArt__heading__titre {
  font-family: "ChocolatesDemBold";
  font-size: 20px;
  text-align: left;
}
/* Imput nom */
.Edit__input__div__input__nom {
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 1px solid #d5dde5;
  border-radius: 5px;
}
.Edit__input__nom {
  width: 80%;
  font-family: "ChocolatesMedium";
  font-size: 15px;
  color: black;
}
.Edit__input__nom::-webkit-input-placeholder {
  color: black;
  opacity: 1;
}

/* input prix unitaire */
.Edit__input__prixunit__container {
  margin-top: 20px;
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 1px solid #d5dde5;
  border-radius: 5px;
}
.Edit__input__prixunit__titre {
  font-family: "ChocolatesMedium";
  font-size: 10px;
  position: absolute;
  top: -7px;
  background-color: white;
  padding: 0px 3px;
}

.Edit__input__prixunit {
  width: 90%;
  text-align: end;
}
.Edit__input__prixunit::-webkit-input-placeholder {
  color: black;
  opacity: 1;
}

.Edit__input__prixunit__€ {
  position: absolute;
  display: flex;
  right: 0px;
  top: 0px;
  width: 10%;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 0px 5px 5px 0px;
  background-color: #f5faff;
}
.signe__€ {
  height: 100%;
  margin: 0px;
}
.symbol {
  font-family: "ChocolatesMedium";
}

/* input TVA */
.Edit__form__tva {
  position: relative;
  width: 80%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 1px solid #d5dde5;
  border-radius: 5px;
}
.Edit__input__tva__titre {
  font-family: "ChocolatesMedium";
  font-size: 10px;
  position: absolute;
  top: -7px;
  background-color: white;
  padding: 0px 3px;
}
.Edit__input__tva {
  width: 90%;
  text-align: end;
}
.Edit__input__tva::-webkit-input-placeholder {
  color: black;
  opacity: 1;
}

.Edit__input__tva__symbol {
  position: absolute;
  display: flex;
  right: 0px;
  top: 0px;
  width: 10%;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 0px 5px 5px 0px;
  background-color: #f5faff;
}
.signe__€ {
  height: 100%;
  margin: 0px;
}
/* total */
.Edit__total {
  width: 80%;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "ChocolatesDemBold";
}
/* bouton */
.Edit__div__bouton {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.Edit__bouton {
  width: 150px;
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #ff916f;
  font-family: "ChocolatesMedium";
  color: white;
}

@media screen and (max-width: 768px) {
  .formEditArt {
    width: 100%;
    padding: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
  }
  .formEditArt__heading__a__chevron {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* bouton */
  .Edit__div__bouton {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  /* heading */
  .formEditArt__heading {
    width: 80%;
    margin-bottom: 40px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
