if (localStorage.getItem("Enigma1") !== "resolvido" ||
localStorage.getItem("Enigma2") !== "resolvido" ||
localStorage.getItem("Enigma3") !== "resolvido"
){
window.location.href = "Enigma1.html";
}

// <!--IDIOMA ESCOLHIDO NO ENIGMA 1-->

let idioma = localStorage.getItem("idioma");
if (!idioma) {
idioma = "pt";
}

// <!--NOME DA ABA DE ACORDO COM O IDIOMA-->

if (idioma === "pt") {
document.title =
"Só existem dois caminhos.";
}
else {
document.title =
"There are only two paths.";
}

// <!--APLICAR IDIOMA-->

document.querySelectorAll("[data-pt]").forEach(function(elemento) {
elemento.innerHTML =
elemento.getAttribute("data-" + idioma);
});
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
resposta === "cuidado" ||
resposta === "careful"
) {localStorage.setItem("Enigma4", "resolvido");
window.location.href = "Enigma5.html";
}
else if (
resposta === "binario" ||
resposta === "binary"
) {
if (idioma === "pt") {
document.getElementById("resultado").innerHTML =
"Sim, é isso!";
} else {
document.getElementById("resultado").innerHTML =
"Yes, that's it!";
}
}
else {
if (idioma === "pt") {
document.getElementById("resultado").innerHTML =
"Sem dica dessa vez!";
} else {
document.getElementById("resultado").innerHTML =
"No hints this time!";
}
}
} function teclaEnter(event) {
if (event.key === "Enter") {
verificar();
}
}