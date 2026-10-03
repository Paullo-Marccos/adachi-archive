function mudarIdioma(idioma) {
                const elPt = document.getElementById("portugues");
                const elEn = document.getElementById("ingles");

                if (idioma === "en") {
                    if (elPt) elPt.style.display = "none";
                    if (elEn) elEn.style.display = "block";
                    document.title = "Soon..";
                    document.documentElement.lang = "en";
                } else {
                    if (elPt) elPt.style.display = "block";
                    if (elEn) elEn.style.display = "none";
                    document.title = "Em breve...";
                    document.documentElement.lang = "pt-br";
                }

                
                document.querySelectorAll("[data-pt]").forEach(function(elemento) {
                    let texto = elemento.getAttribute("data-" + idioma);
                    if (texto) {
                        elemento.innerHTML = texto;
                    }
                });

                localStorage.setItem("idioma", idioma);
            }

           
            let idiomaSalvo = localStorage.getItem("idioma") || "pt";
            mudarIdioma(idiomaSalvo);

        
            let enigmasResolvidos = true;
            for (let i = 1; i <= 10; i++) {
                if (localStorage.getItem("Enigma" + i) !== "resolvido") {
                    enigmasResolvidos = false;
                    break;
                }
            }

            if (!enigmasResolvidos) {
                window.location.href = "Enigma1.html";
            }