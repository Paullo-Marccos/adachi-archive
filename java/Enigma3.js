// <!--PROTEÇÃO DO ENIGMA 3-->

if (
localStorage.getItem("Enigma1") !== "resolvido" ||
localStorage.getItem("Enigma2") !== "resolvido"
) {
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
"a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
} 
else {
document.title =
"a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
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
resposta === "alfabeto" ||
resposta === "alphabet"
) {
localStorage.setItem("Enigma3", "resolvido");
window.location.href = "Enigma4.html";

}

// <!--RESPOSTA QUASE CERTA-->

else if (
resposta === "letras" ||
resposta === "letters" ||
resposta === "lyrics"
) {

if (idioma === "pt") {
document.getElementById("resultado").innerHTML =
"Sim, mas não tem um nome pra elas?";
} 

else {
document.getElementById("resultado").innerHTML =
"Yeah! Don't they have a name?";
}
}

// <!--OUTRAS RESPOSTAS-->

else {
document.getElementById("resultado").innerHTML =
"26";
}
}

// <!--ENTER PARA RESPONDER-->

function teclaEnter(event) {
if (event.key === "Enter") {
verificar();
}
}