
        /* =========================
           INTRODUÇÃO
        ========================= */

        window.addEventListener("load", function () {
            /*
               Último bloco (A.D.A.C.H.I) começa em 11.8s e dura 1.2s.
               Termina em ~13s.

               - 13s → termina toda a introdução
               - +3s de espera → 16s começa o fade out
               - Fade out dura 3s → 19s some completamente
			   - lembrando que voce pode colocar o valor que quiser ok?
            */

            setTimeout(function () {
                setTimeout(function () {
                    document.getElementById("intro").style.opacity = "0";
                    document.getElementById("conteudo").style.opacity = "1";

                    setTimeout(function () {
                        document.getElementById("intro").style.display = "none";
                    }, 3000);
                }, 3000);
            }, 13500);
        });

        /* =========================
           O IDIOMA SALVO
        ========================= */

        let idiomaSalvo = localStorage.getItem("idioma");

        if (idiomaSalvo) {
            mudarIdioma(idiomaSalvo);
        } else {
            mudarIdioma("pt");
        }

        /* =========================
           ALTERAR IDIOMA
        ========================= */

        function mudarIdioma(idioma) {
            document.querySelectorAll("[data-pt]").forEach(function (elemento) {
                elemento.innerHTML = elemento.getAttribute("data-" + idioma);
            });

            if (idioma === "pt") {
                document.getElementById("portugues").style.display = "block";
                document.getElementById("ingles").style.display = "none";
            } else {
                document.getElementById("portugues").style.display = "none";
                document.getElementById("ingles").style.display = "block";
            }

            let input = document.getElementById("resposta");
            input.placeholder = input.getAttribute("data-" + idioma + "-placeholder");

            document.documentElement.lang = idioma === "pt" ? "pt-br" : "en";

            localStorage.setItem("idioma", idioma);
        }

        /* =========================
           VERIFICAR RESPOSTA
        ========================= */

        function verificar() {
            let resposta = document.getElementById("resposta")
                .value
                .toLowerCase()
                .trim()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[-\s]/g, "")
                .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

            if (resposta === "arcoiris" || resposta === "rainbow") {
                localStorage.setItem("Enigma1", "resolvido");
                window.location.href = "../html/Enigma2.html";
            } else {
                let idiomaAtual = localStorage.getItem("idioma");

                if (idiomaAtual === "pt") {
                    document.getElementById("resultado").innerHTML =
                        "Você realmente achou que encontraria alguma coisa no fim? Que adorável";
                } else {
                    document.getElementById("resultado").innerHTML =
                        "You really thought you'd find something at the end? How adorable.";
                }
            }
        }

        /* =========================
           ENTER PARA RESPONDER
        ========================= */

        function teclaEnter(event) {
            if (event.key === "Enter") {
                verificar();
            }
        }