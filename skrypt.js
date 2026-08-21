/* Zastępniki brakujących zdjęć */
document.querySelectorAll(".ph img").forEach(function (img) {
  var brak = function () { img.closest(".ph").classList.add("brak"); };
  img.addEventListener("error", brak);
  if (img.complete && img.naturalWidth === 0) brak();
});

/* Tablica dnia */
var dni = document.querySelector(".dni");
if (dni) {
  var pola = document.querySelectorAll(".dania .danie");

  var wpisz = function (pole, dane) {
    var czesci = (dane || "|").split("|");
    pole.querySelector("h3").textContent = czesci[0];
    pole.querySelector("small").textContent = czesci[1] || "";
  };

  var wybierz = function (btn) {
    dni.querySelectorAll(".dzien").forEach(function (b) {
      b.setAttribute("aria-pressed", b === btn ? "true" : "false");
    });
    wpisz(pola[0], btn.dataset.zupa);
    wpisz(pola[1], btn.dataset.danie);
    wpisz(pola[2], btn.dataset.deser);
  };

  dni.querySelectorAll(".dzien").forEach(function (btn) {
    btn.addEventListener("click", function () { wybierz(btn); });
  });

  /* Kolejność przycisków: wt, śr, cz, pt, so, nd, pn.
     getDay(): 0 = niedziela, 1 = poniedziałek, 2 = wtorek... */
  var mapa = { 2: 0, 3: 1, 4: 2, 5: 3, 6: 4, 0: 5, 1: 6 };
  var dzis = dni.querySelectorAll(".dzien")[mapa[new Date().getDay()]];
  if (dzis) wybierz(dzis);
}
