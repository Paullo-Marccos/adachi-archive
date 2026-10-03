

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
localStorage.getItem("Enigma8") !== "resolvido" ||
localStorage.getItem("Enigma9") !== "resolvido"
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
// <!-- RESPOSTA CORRETA EM HEXADECIMAL -->
let respostaHexPT =
"4a70697365696e6573736174657272614f717565656e636f6e747265696e656c616d6566657a646573656a61726e756e63617465726e61736369646f";
let respostaHexEN =
"4920686176652077616c6b65642075706f6e20746869732065617274682077686174206920666f756e6420696e206974206d616465206d652077697368204920686164206e65766572206265656e20626f726e";
let respostaHexPTBR =
"4a61207069736569206e65737361207465727261206f2071756520657520656e636f6e74726569206e656c61206d652066657a20646573656a6172206e756e636120746572206e61736369646f";
let respostaHexENUS =
"4920686176652077616c6b65642075706f6e20746869732065617274682077686174204920666f756e6420696e206974206d616465206d652077697368204920686164206e65766572206265656e20626f726e";
// <!-- RESPOSTA CORRETA -->
if (
resposta === respostaHexPT.toLowerCase() ||
resposta === respostaHexEN.toLowerCase() ||
resposta === respostaHexPTBR.toLowerCase() ||
resposta === respostaHexENUS.toLowerCase()
) {
localStorage.setItem("Enigma10", "resolvido");
window.location.href = "Enigma10a.html";
// <!-- RESPOSTA EM TEXTO -->
} else if (
resposta === "japiseinessaterraoqueeuencontreinelamefezdesejarnuncaternascido" ||
resposta === "ihavewalkeduponthisearthwhatifoundinitmademewishihadneverbeenborn"
) {
if (idioma === "pt") {
document.getElementById("resultado").innerHTML =
`0x41 0x42 0x43<br>
	Não procure significado nas palavras. Procure na base em que elas foram escritas.`;
	} else {
	document.getElementById("resultado").innerHTML =
	`0x41 0x42 0x43<br>
		Do not look for meaning in the words. Look at the base in which they were written.`;
		}
		// <!-- RESPOSTA ERRADA -->
		} else {
		if (idioma === "pt") {
		document.getElementById("resultado").innerHTML =
		"Está esperando a próxima pista? Que pena.";
		} else {
		document.getElementById("resultado").innerHTML =
		"Waiting for the next clue? What a shame.";
		}
		}
		}
		// <!-- ENTER -->
		function teclaEnter(event) {
		if (event.key === "Enter") {
		verificar();
		}
		}