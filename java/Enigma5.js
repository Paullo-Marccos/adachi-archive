

// <!-- VERIFICAR SE PASSOU PELOS ENIGMAS ANTERIORES -->

if (

localStorage.getItem("Enigma1") !== "resolvido" ||
localStorage.getItem("Enigma2") !== "resolvido" ||
localStorage.getItem("Enigma3") !== "resolvido" ||
localStorage.getItem("Enigma4") !== "resolvido"

) {

window.location.href = "Enigma1.html";

}

// <!-- RECUPERAR IDIOMA SALVO -->

let idioma = localStorage.getItem("idioma");
if (!idioma) {

idioma = "pt";

}


// <!-- APLICAR IDIOMA -->

mudarIdioma(idioma);


// <!-- FUNÇÃO PARA MUDAR O IDIOMA -->

function mudarIdioma(idiomaEscolhido) {

idioma = idiomaEscolhido;

document.querySelectorAll("[data-pt]").forEach(function(elemento) {

elemento.innerHTML =
elemento.getAttribute("data-" + idioma);

});


// <!-- ALTERAR PLACEHOLDER -->

let input = document.getElementById("resposta");

input.placeholder =
input.getAttribute("data-" + idioma + "-placeholder");


// <!-- ALTERAR IDIOMA DO HTML -->

document.documentElement.lang =
idioma === "pt" ? "pt-br" : "en";


// <!-- ALTERAR TÍTULO DA ABA -->

if (idioma === "pt") {

document.title = "Nietzsche";

} else {

document.title = "Nietzsche";

}


// <!-- SALVAR IDIOMA -->

localStorage.setItem("idioma", idioma);

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

if (resposta === "10110") {

localStorage.setItem("Enigma5", "resolvido");

window.location.href = "Enigma6.html";


// <!-- PRIMEIRA PISTA -->

} else if (resposta === "1844") {

if (idioma === "pt") {

document.getElementById("resultado").innerHTML =
"Tá, mas e a dica no meio da tela?";

} else {

document.getElementById("resultado").innerHTML =
"Okay, but what about the clue in the middle of the screen?";

}


// <!-- SEGUNDA PISTA -->

} else if (resposta === "iviiiiviv") {

if (idioma === "pt") {

document.getElementById("resultado").innerHTML =
"Calma, eu não colocaria algo tão complicado assim. Já tentou pensar em algo mais simples?";

} else {

document.getElementById("resultado").innerHTML =
"Calm down, I wouldn't put something that complicated here. Have you tried thinking of something simpler?";

}


// <!-- TERCEIRA PISTA -->

} else if (resposta === "mdcccxliv") {

if (idioma === "pt") {

document.getElementById("resultado").innerHTML =
"De certa forma está certo, mas em que século o Nikola Tesla desenvolveu a corrente alternada?";

} else {

document.getElementById("resultado").innerHTML =
"In a way, that's correct, but in which century did Nikola Tesla develop alternating current?";

}


// <!-- QUARTA PISTA -->

} else if (resposta === "xix") {

if (idioma === "pt") {

document.getElementById("resultado").innerHTML =
"XIX = ";

} else {

document.getElementById("resultado").innerHTML =
"XIX = ";

}


// <!-- QUALQUER OUTRA RESPOSTA -->

} else {

if (idioma === "pt") {

document.getElementById("resultado").innerHTML =
"Acredito nos jovens à procura de caminhos novos abrindo espaços largos na vida. Creio na superação das incertezas deste fim de século.";

} else {

document.getElementById("resultado").innerHTML =
"I believe in young people searching for new paths, opening wide spaces in life. I believe in overcoming the uncertainties of this end of the century.";

}

}

}


// <!-- ENTER PARA RESPONDER -->

function teclaEnter(event) {

if (event.key === "Enter") {

verificar();
}
}