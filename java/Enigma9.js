

// <!-- IDIOMA ESCOLHIDO -->
let idioma = localStorage.getItem("idioma");
if (!idioma) {
idioma = "pt";
}
// <!-- APLICAR IDIOMA NOS TEXTOS -->
document.querySelectorAll("[data-pt]").forEach(function(elemento) {
elemento.innerHTML =
elemento.getAttribute("data-" + idioma);
});
// <!-- ALTERAR PLACEHOLDER -->
let input = document.getElementById("resposta");
input.placeholder =
input.getAttribute("data-" + idioma + "-placeholder");
// <!-- ALTERAR TEXTO DO BOTÃO -->
let botao = document.getElementById("botao");
botao.innerHTML =
botao.getAttribute("data-" + idioma);
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
localStorage.getItem("Enigma6") !== "resolvido" ||
localStorage.getItem("Enigma7") !== "resolvido" ||
localStorage.getItem("Enigma8") !== "resolvido"
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
.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
// <!-- RESPOSTA CORRETA EM PORTUGUÊS -->
let respostaCorretaPT =
"naopodeportantoumprincipeprudentenemdeveguardarapalavradadaquandotalobservancialhesejaprejudicial";
// <!-- RESPOSTA CORRETA EM INGLÊS esse deu trabalho -->
let respostaCorretaEN =
"thereforeaprudentprincecanneithernorshouldkeephiswordwhenkeepingitwouldbeharmfultohim";
// <!-- VERIFICAR AS DUAS RESPOSTAS -->
if (
resposta === respostaCorretaPT ||
resposta === respostaCorretaEN
) {
localStorage.setItem("Enigma9", "resolvido");
window.location.href = "Enigma10.html";
}
// <!-- RESPOSTA ERRADA -->
else {
if (idioma === "pt") {
document.getElementById("resultado").innerHTML =
"Cuidado com os Idos de Março.";
}
else {
document.getElementById("resultado").innerHTML =
"Beware the Ides of March.";
}
}
}
// <!-- ENTER -->
function teclaEnter(event) {
if (event.key === "Enter") {
verificar();
}
}