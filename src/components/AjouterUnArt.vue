<template>
  <div class="formAjoutArt">
    <p class="formAjoutArt__heading">Ajouter un article</p>

    <div class="input__div__input__nom">
      <input class="input__nom" type="text" placeholder="Nom de l'article" />
    </div>

    <!-- input prix unitaire -->
    <div class="input__prixunit__container">
      <div class="input__prixunit__titre">
        <p>Prix unitaire HT</p>
      </div>

      <input class="input__prixunit" type="text" placeholder="50.00" />

      <div class="input__prixunit__€">
        <p>{{ euro }}</p>
      </div>
    </div>

    <!-- input tva -->
    <div class="formAjoutArt__tva">
      <div class="input__tva__titre">
        <p>TVA en %</p>
      </div>

      <input class="input__tva" type="text" placeholder="20.00" />

      <div class="input__tva__symbol">
        <p>{{ pourcentage }}</p>
      </div>
    </div>

    <!-- Prix total -->
    <div class="formAjoutArt__total">
      <p class="formAjoutArt__total__title">Prix total TTC</p>
      <div class="formAjoutArt__total__montant">{{ total }}</div>
    </div>

    <!-- bouton -->
    <div class="formAjoutArt__div__bouton">
      <button class="formAjoutArt__bouton">Enregistrer l'article</button>
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
      total: "0,00€",
    };
  },
};
</script>

<!-- STYLE -->

<style>
input {
  border: none;
}
p {
  margin: 0px;
}
.formAjoutArt {
  width: 30%;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
/* heading */
.formAjoutArt__heading {
  width: 80%;
  margin-bottom: 20px;
  font-family: "ChocolatesExBold";
  font-size: 30px;
  text-align: left;
}
/* Imput nom */
.input__div__input__nom {
  width: 80%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 1px solid #d5dde5;
  border-radius: 5px;
}
.input__nom {
  font-family: "ChocolateMedium";
  font-size: 15px;
}
.input__nom::-webkit-input-placeholder {
  color: black;
  opacity: 0.3;
  text-align: start;
}

/* input prix unitaire */
.input__prixunit__container {
  margin-top: 20px;
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 1px solid #d5dde5;
  border-radius: 5px;
}
.input__prixunit__titre {
  font-family: "ChocolateMedium";
  font-size: 10px;
}

.input__prixunit__titre {
  position: absolute;
  top: -7px;
  background-color: white;
  padding: 0px 3px;
}
.input__prixunit {
  width: 90%;
  text-align: end;
}
.input__prixunit::-webkit-input-placeholder {
  color: black;
  opacity: 0.3;
  text-align: end;
}

.input__prixunit__€ {
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

/* input TVA */
.formAjoutArt__tva {
  margin-top: 20px;
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 1px solid #d5dde5;
  border-radius: 5px;
}
.input__tva__titre {
  font-family: "ChocolateMedium";
  font-size: 10px;
}

.input__tva__titre {
  position: absolute;
  top: -7px;
  background-color: white;
  padding: 0px 3px;
}
.input__tva {
  width: 90%;
  text-align: end;
}
.input__tva::-webkit-input-placeholder {
  color: black;
  opacity: 0.3;
  text-align: end;
}

.input__tva__symbol {
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
.formAjoutArt__total {
  width: 80%;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* bouton */
.formAjoutArt__div__bouton {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.formAjoutArt__bouton {
  width: 150px;
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #ff916f;
  opacity: 0.5;
  font-family: "ChocolateMedium";
  color: white;
}
</style>
