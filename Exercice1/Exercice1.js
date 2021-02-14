var nom = document.getElementById("nom");
var addresse = document.getElementById("adresse");
var numeroCarte = document.getElementById("numeroCartInput");

document.getElementById("carteBancaireRadio").onclick = echanger;
document.getElementById("chequeRadio").onclick = echanger;
function echanger(e) {
  if (e.target.value == "cheque") {
    numeroCarte.disabled = true;
  } else {
    numeroCarte.disabled = false;
  }
}
var montant = document.getElementById("montant");
var pizza_1 = document.getElementById("pizza_1");
var pizza_2 = document.getElementById("pizza_2");
var pizza_3 = document.getElementById("pizza_3");
var pizza_4 = document.getElementById("pizza_4");
function calculerMontant() {
  montant.value = 0;
  var isNombre = /^\d+$/;
  if (isNombre.test(pizza_1.value))
    montant.value = parseInt(montant.value) + parseInt(pizza_1.value) * 80;
  if (isNombre.test(pizza_2.value))
    montant.value = parseInt(montant.value) + parseInt(pizza_2.value) * 75;
  if (isNombre.test(pizza_3.value))
    montant.value = parseInt(montant.value) + parseInt(pizza_3.value) * 100;
  if (isNombre.test(pizza_4.value))
    montant.value = parseInt(montant.value) + parseInt(pizza_4.value) * 120;
}
document.getElementById("envoyer").onclick = (e) => {
  var inputs = document.querySelectorAll("input[required]");
  for (var i = 0; i < inputs.length - 1; i++) {
    if (inputs[i].validity.valueMissing) {
      e.preventDefault();
      alert("if faut remplir tous les champs");
      return;
    }
  }
  alert("termine");
};
