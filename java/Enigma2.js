// <!--PROTEÇÃO DO ENIGMA 2-->

if (localStorage.getItem("Enigma1") !== "resolvido") {
window.location.href = "Enigma1.html";
}

// <!--IDIOMA ESCOLHIDO NO ENIGMA 1-->

let idioma = localStorage.getItem("idioma");
if (!idioma) {
idioma = "pt";
}

// <!--NOME DA ABA DE ACORDO COM O IDIOMA-->

if (idioma === "pt") {
document.title = "céu";
} 

else {
document.title = "sky";
}

// <!--APLICAR IDIOMA-->

document.querySelectorAll("[data-pt]").forEach(function(elemento) {
elemento.innerHTML =
elemento.getAttribute("data-" + idioma);
});

// <!--ALTERAR PLACEHOLDER-->

let input = document.getElementById("resposta");
input.placeholder =
input.getAttribute("data-" + idioma + "-placeholder");

// <!--DEFINIR IDIOMA DA PÁGINA-->

document.documentElement.lang =
idioma === "pt" ? "pt-br" : "en";

// <!--VERIFICAR RESPOSTA-->

function verificar() {
let resposta = document.getElementById("resposta")
.value
.toLowerCase()
.trim()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/[-\s]/g, "")
.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

// <!--RESPOSTA CORRETA-->

if (
resposta === "constelacoes" ||
resposta === "constellations"
) {
localStorage.setItem("Enigma2", "resolvido");
window.location.href = "Enigma3.html";
}

// <!--RESPOSTA QUASE CERTA-->

else if (
resposta === "constelacao" ||
resposta === "constellation"
) {

if (idioma === "pt") {

document.getElementById("resultado").innerHTML =
"São várias.";
} 

else {
document.getElementById("resultado").innerHTML =
"There are several.";
}
}

// <!--OUTRAS RESPOSTAS-->

else {
if (idioma === "pt") {
document.getElementById("resultado").innerHTML =
"Órion, Cruzeiro do Sul, Alnitak, Alnilam e Mintaka";
} 

else {
document.getElementById("resultado").innerHTML =
"Orion, Southern Cross, Alnitak, Alnilam and Mintaka";
}
}
}

// <!--ENTER PARA RESPONDER-->

function teclaEnter(event) {
if (event.key === "Enter") {
verificar();
}
}