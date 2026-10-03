// <!-- IDIOMA ESCOLHIDO NO ENIGMA 1 -->

let idioma = localStorage.getItem("idioma");

if (!idioma) {
idioma = "pt";
}


// <!-- NOME DA ABA DE ACORDO COM O IDIOMA -->

if (idioma === "pt") {

document.title = "Selene, Éos";

} else {

document.title = "Selene, Eos";

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
localStorage.getItem("Enigma6") !== "resolvido" ||
localStorage.getItem("Enigma7") !== "resolvido"
) {

window.location.href = "Enigma1.html";

}


			
function verificar() {

    let resposta = document.getElementById("resposta")
        .value
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[-\s]/g, "");


    

    if (
        resposta === "gashelio" ||
        resposta === "heliumgas"
    ) {

        localStorage.setItem("Enigma8", "resolvido");

        window.location.href = "Enigma9.html";


  

    } else if (
        resposta === "periodica" ||
        resposta === "periodic"
    ) {

        if (idioma === "pt") {

            document.getElementById("resultado").innerHTML =
                "Está no caminho.";

        } else {

            document.getElementById("resultado").innerHTML =
                "You are on the right path.";
        }


    
    } else if (
        resposta === "tabelaperiodica" ||
        resposta === "periodictable"
    ) {

        if (idioma === "pt") {

            document.getElementById("resultado").innerHTML =
                "Está no caminho.";

        } else {

            document.getElementById("resultado").innerHTML =
                "You are on the right path.";
        }


   

    } else if (
        resposta === "helio" ||
        resposta === "helios"
    ) {

        if (idioma === "pt") {

            document.getElementById("resultado").innerHTML =
                "O Deus Hélio?";

        } else {

            document.getElementById("resultado").innerHTML =
                "The god Helios?";
        }


 

    } else {

        if (idioma === "pt") {

            document.getElementById("resultado").innerHTML =
                "Ne, Ar, Xe...";

        } else {

            document.getElementById("resultado").innerHTML =
                "Ne, Ar, Xe...";
        }
    }
}



			// <!-- ENTER -->

			function teclaEnter(event) {

			if (event.key === "Enter") {

			verificar();

			}

			}