
// <!-- IDIOMA ESCOLHIDO NO ENIGMA 1 -->
let idioma = localStorage.getItem("idioma");
if (!idioma) {
idioma = "pt";
}
// <!-- NOME DA ABA DE ACORDO COM O IDIOMA -->
if (idioma === "pt") {
document.title =
"F = G * m1*m2/d2";
} else {
document.title =
"F = G * m1*m2/d2";
}
// <!-- APLICAR IDIOMA -->
document.querySelectorAll("[data-pt]").forEach(function(elemento) {
elemento.innerHTML =
elemento.getAttribute("data-" + idioma);
});
// <!-- ALTERAR PLACEHOLDER -->
let input = document.getElementById("resposta");
input.placeholder =
input.getAttribute("data-" + idioma + "-placeholder");
// <!-- DEFINIR IDIOMA DA PÁGINA -->
document.documentElement.lang =
idioma === "pt" ? "pt-br" : "en";
// <!-- VERIFICAR SE AS FASES ANTERIORES FORAM CONCLUÍDAS -->
if (
localStorage.getItem("Enigma1") !== "resolvido" ||
localStorage.getItem("Enigma2") !== "resolvido" ||
localStorage.getItem("Enigma3") !== "resolvido" ||
localStorage.getItem("Enigma4") !== "resolvido" ||
localStorage.getItem("Enigma5") !== "resolvido" ||
localStorage.getItem("Enigma6") !== "resolvido"
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
if (resposta === "gravidade" || resposta === "gravity") {
localStorage.setItem("Enigma7", "resolvido");
window.location.href = "Enigma8.html";
// <!-- PRIMEIRA DICA -->
} else if (resposta === "newton") {
if (idioma === "pt") {
document.getElementById("resultado").innerHTML =
"Está no caminho.";
} else {
document.getElementById("resultado").innerHTML =
"You're on the right path.";
}
// <!-- SEGUNDA DICA -->
} else if (resposta === "maca" || resposta === "apple") {
if (idioma === "pt") {
document.getElementById("resultado").innerHTML =
"Sério?";
} else {
document.getElementById("resultado").innerHTML =
"Seriously?";
}
// <!-- RESPOSTA ERRADA -->
} else {
if (idioma === "pt") {
document.getElementById("resultado").innerHTML =
"Deformação do espaço-tempo.";
} else {
document.getElementById("resultado").innerHTML =
"Spacetime distortion.";
}
}
}
// <!-- ENTER -->
function teclaEnter(event) {
if (event.key === "Enter") {
verificar();
}
}