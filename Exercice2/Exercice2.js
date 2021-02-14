document
  .getElementById("homme")
  .addEventListener("click", echangerAccompagnateur);
document
  .getElementById("femme")
  .addEventListener("click", echangerAccompagnateur);
var isMasculin = false;
function echangerAccompagnateur(e) {
  if (e.target.value == "H") {
    isMasculin = true;
    document.getElementById("accoumpagnateur").style.display = "none";
  } else {
    isMasculin = false;
    document.getElementById("accoumpagnateur").style.display = "block";
  }
}
function controleLanne() {
  var anne = document.getElementById("anneeDernierAcco").value;
  if (new Date().getFullYear() - parseInt(anne) >= 10) {
    return true;
  } else return false;
}
document.getElementById("inscrire").onclick = function () {
  if (controleLanne() == false) {
    alert(
      "l’année de dernier pèlerinage et l’année actuelle doit être supérieure ou égale à 10 ans"
    );
    return;
  }
  var tr = document.createElement("tr");
  tr.innerHTML = `
              <td >${document.getElementById("cin").value}</td>
              <td >${document.getElementById("nom").value}</td>
              <td >${document.getElementById("prenom").value}</td>
              <td >${document.getElementById("anneeDernierAcco").value}</td>
              <td >${
                document.querySelector('input[name="sexe"]:checked').value
              }</td>
              <td >${
                isMasculin
                  ? ""
                  : document.getElementById("accoumpagnateurCin").value
              }</td>
              <td >${
                isMasculin ? "" : document.getElementById("lienFAmilail").value
              }</td>
              <td >${document.getElementById("sangGroup").value}</td>
              <td >${document.getElementById("maladies").value}</td>
  `;
  document.getElementById("insritsTable").appendChild(tr);
};
