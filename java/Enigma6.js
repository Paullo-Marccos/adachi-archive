// <!-- IDIOMA ESCOLHIDO NO LOCALSTORAGE -->

let idioma = localStorage.getItem("idioma");
if (!idioma) {
idioma = "pt";
}
// <!-- NOME DA ABA DE ACORDO COM O IDIOMA -->
if (idioma === "pt") {
document.title = "Ouça";
} else {
document.title = "Listen";
}
// <!-- APLICAR IDIOMA -->
mudarIdioma(idioma);
function mudarIdioma(idioma) {
// <!-- ALTERAR TODOS OS TEXTOS -->
document.querySelectorAll("[data-pt]").forEach(function(elemento) {
elemento.innerHTML =
elemento.getAttribute("data-" + idioma);
});
// <!-- ALTERAR PLACEHOLDER -->
let input = document.getElementById("resposta");
input.placeholder =
input.getAttribute("data-" + idioma + "-placeholder");
// <!-- ALTERAR IDIOMA DA PÁGINA -->
document.documentElement.lang =
idioma === "pt" ? "pt-br" : "en";
// <!-- SALVAR IDIOMA -->
localStorage.setItem("idioma", idioma);
}
// <!-- VERIFICAR SE AS FASES ANTERIORES FORAM CONCLUÍDAS -->
if (
localStorage.getItem("Enigma1") !== "resolvido" ||
localStorage.getItem("Enigma2") !== "resolvido" ||
localStorage.getItem("Enigma3") !== "resolvido" ||
localStorage.getItem("Enigma4") !== "resolvido" ||
localStorage.getItem("Enigma5") !== "resolvido"
) {
window.location.href = "Enigma1.html";
}
// <!-- VERIFICAR RESPOSTA -->
function verificar() {
let resposta = document.getElementById("resposta")
.value
.toLowerCase()
.trim()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/[-\s]/g, "")
.replace(/\s+/g, "");
// <!-- RESPOSTA CORRETA -->
if (resposta === "ghaeslio") {
localStorage.setItem("Enigma6", "resolvido");
window.location.href = "Enigma7.html";
// <!-- PRIMEIRA DICA -->
} else if (resposta === "morse") {
if (idioma === "pt") {
document.getElementById("resultado").innerHTML =
"É isso mesmo.";
} else {
document.getElementById("resultado").innerHTML =
"That's right.";
}
// <!-- SEGUNDA DICA -->
} else if (resposta === "codigomorse") {
if (idioma === "pt") {
document.getElementById("resultado").innerHTML =
"Sim, é código Morse mesmo.";
} else {
document.getElementById("resultado").innerHTML =
"Yes, it is Morse code.";
}
// <!-- RESPOSTA ERRADA -->
} else {
document.getElementById("resultado").innerHTML =
".-";
}
}
// <!-- ENTER -->
function teclaEnter(event) {
if (event.key === "Enter") {
verificar();
}
}