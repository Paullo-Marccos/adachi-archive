const conexaoEncerrada = localStorage.getItem("conexaoEncerrada") === "true";

        if (conexaoEncerrada) {
            document.body.innerHTML = "";
            document.body.style.backgroundColor = "black";
            document.documentElement.style.backgroundColor = "black";
        } else {
            if (
                localStorage.getItem("Enigma1") !== "resolvido" ||
                localStorage.getItem("Enigma2") !== "resolvido" ||
                localStorage.getItem("Enigma3") !== "resolvido" ||
                localStorage.getItem("Enigma4") !== "resolvido" ||
                localStorage.getItem("Enigma5") !== "resolvido" ||
                localStorage.getItem("Enigma6") !== "resolvido" ||
                localStorage.getItem("Enigma7") !== "resolvido" ||
                localStorage.getItem("Enigma8") !== "resolvido" ||
                localStorage.getItem("Enigma9") !== "resolvido" ||
                localStorage.getItem("Enigma10") !== "resolvido"
            ) {
                window.location.href = "Enigma1.html";
            }

            // 2. BOTÃO SIM //

            document.getElementById("continuar").onclick = function() {
                const idiomaAtual = localStorage.getItem("idioma") || "pt";
                const mensagensTransicaoPT = [
                    "Então você decidiu continuar.",
                    "Muito bem.",
                    "Tudo o que veio antes serviu apenas para verificar se você chegaria até aqui.",
                    "A partir deste ponto, as regras deixam de ser tão claras.",
                    "Os próximos testes não foram feitos para serem simplesmente resolvidos.",
                    "Foram feitos para serem compreendidos.",
                    "Preste atenção.",
                    "Observe o que não deveria estar ali.",
                    "E, principalmente, não confie em tudo que lhe for mostrado.",
                    "Você pediu para continuar.",
                    "Agora, a escala muda.",
                    "Esteja preparado.",
                    "A.D.A.C.H.I"
                ];
                const mensagensTransicaoEN = [
                    "So you have chosen to continue.",
                    "Very well.",
                    "Everything that came before was only meant to determine whether you would make it this far.",
                    "From this point onward, the rules become less clear.",
                    "The next trials were not made to be simply solved.",
                    "They were made to be understood.",
                    "Pay attention.",
                    "Notice what should not be there.",
                    "And above all, do not trust everything you are shown.",
                    "You asked to continue.",
                    "Now, the scale changes.",
                    "Be prepared.",
                    "A.D.A.C.H.I"
                ];
                const mensagensTransicao = idiomaAtual === "en"
                    ? mensagensTransicaoEN
                    : mensagensTransicaoPT;
                mostrarSequenciaDeTransicao(mensagensTransicao);
            };

            function mostrarSequenciaDeTransicao(mensagens) {
                document.body.innerHTML = `
                    <div id="encerramento">
                        <div id="texto-encerramento"></div>
                    </div>
                `;

                const texto = document.getElementById("texto-encerramento");
                const TEMPO_VISIVEL = 2200;
                const TEMPO_FADE = 600;

                function mostrarFrase(index) {
                    if (index >= mensagens.length) {
                        iniciarLoadingDoSim();
                        return;
                    }

                    texto.style.opacity = 0;
                    setTimeout(function() {
                        texto.innerText = mensagens[index];
                        texto.style.opacity = 1;
                        setTimeout(function() {
                            mostrarFrase(index + 1);
                        }, TEMPO_VISIVEL);
                    }, TEMPO_FADE);
                }

                mostrarFrase(0);
            }

            function iniciarLoadingDoSim() {
                document.body.innerHTML = `
                    <div id="loading">
                        <div id="texto-loading">Estabelecendo conexão...</div>
                        <div class="barra"><div id="progresso"></div></div>
                        <div id="porcentagem">0%</div>
                    </div>
                `;

                let progresso = 0;
                const mensagens = [
                    "Estabelecendo conexão...",
                    "Verificando acesso...",
                    "Localizando destino...",
                    "Preparando conexão...",
                    "Acesso autorizado.",
                    "Prosseguindo..."
                ];
                let mensagemAtual = 0;

                const intervalo = setInterval(function() {
                    progresso += 1;
                    document.getElementById("progresso").style.width = progresso + "%";
                    document.getElementById("porcentagem").innerText = progresso + "%";

                    if (progresso % 20 === 0 && mensagemAtual < mensagens.length - 1) {
                        mensagemAtual++;
                        document.getElementById("texto-loading").innerText = mensagens[mensagemAtual];
                    }

                    if (progresso >= 100) {
                        clearInterval(intervalo);
                        setTimeout(function() {
                            window.location.href = "Enigma11.html";
                        }, 800);
                    }
                }, 50);
            }

            // BOTÃO NÃO //
            document.getElementById("botaoNao").onclick = function() {
                const idiomaAtual = localStorage.getItem("idioma") || "pt";
                const mensagensPT = [
                    "Então você escolheu sair.", "Interessante.",
                    "Nós já sabíamos que você faria isso.",
                    "Sua decisão foi registrada antes mesmo de você tomá-la.",
                    "Não tente voltar.", "Não há nada aqui para você agora.",
                    "Você deixou rastros demais.", "E alguém já está seguindo eles.",
                    "Talvez você nunca tenha estado sozinho.",
                    "Talvez nunca tenha sido você quem estava observando.",
                    "Agora, fique em silêncio.", "Não olhe para trás.",
                    "Não há motivo para continuar.",
                    "A.D.A.C.H.I"
                ];
                const mensagensEN = [
                    "So you chose to leave.", "Interesting.",
                    "We already knew you would do this.",
                    "Your decision was recorded before you even made it.",
                    "Do not try to come back.", "There is nothing here for you now.",
                    "You left too many traces.", "And someone is already following them.",
                    "Perhaps you were never alone.",
                    "Perhaps you were never the one watching.",
                    "Now, remain silent.", "Do not look behind you.",
                    "There is no reason to continue.",
                    "A.D.A.C.H.I"
                ];
                const textoEncerrando = idiomaAtual === "en"
                    ? "Closing connection..."
                    : "Encerrando conexão...";
                const mensagens = idiomaAtual === "en" ? mensagensEN : mensagensPT;

                document.body.innerHTML = "";
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";

                const encerramento = document.createElement("div");
                encerramento.id = "encerramento";
                encerramento.innerHTML = `
                    <div id="texto-encerramento"></div>
                    <div id="barra-encerramento"><div id="progresso-encerramento"></div></div>
                    <div id="porcentagem-encerramento">0%</div>
                `;
                document.body.appendChild(encerramento);

                const texto = document.getElementById("texto-encerramento");
                const barra = document.getElementById("barra-encerramento");
                const progresso = document.getElementById("progresso-encerramento");
                const porcentagem = document.getElementById("porcentagem-encerramento");
                const TEMPO_VISIVEL = 2200;
                const TEMPO_FADE = 600;

                function mostrarFrase(index) {
                    if (index >= mensagens.length) {
                        iniciarLoading();
                        return;
                    }
                    texto.style.opacity = 0;
                    setTimeout(function() {
                        texto.innerText = mensagens[index];
                        texto.style.opacity = 1;
                        setTimeout(function() { mostrarFrase(index + 1); }, TEMPO_VISIVEL);
                    }, TEMPO_FADE);
                }

                function iniciarLoading() {
                    texto.style.opacity = 0;
                    setTimeout(function() {
                        texto.innerText = textoEncerrando;
                        texto.style.opacity = 1;
                        barra.style.display = "block";
                        porcentagem.style.display = "block";
                        let progressoAtual = 0;
                        const intervalo = setInterval(function() {
                            progressoAtual++;
                            progresso.style.width = progressoAtual + "%";
                            porcentagem.innerText = progressoAtual + "%";
                            if (progressoAtual >= 100) {
                                clearInterval(intervalo);
                                setTimeout(function() {
                                    localStorage.setItem("conexaoEncerrada", "true");
                                    document.body.innerHTML = "";
                                    document.body.style.backgroundColor = "black";
                                    document.documentElement.style.backgroundColor = "black";
                                }, 1000);
                            }
                        }, 50);
                    }, TEMPO_FADE);
                }

                mostrarFrase(0);
            };

            let idioma = localStorage.getItem("idioma");
            if (!idioma) {
                idioma = "pt";
            }
            document.getElementById("portugues").style.display = idioma === "pt" ? "block" : "none";
            document.getElementById("ingles").style.display = idioma === "en" ? "block" : "none";
            document.querySelectorAll("[data-pt]").forEach(function(elemento) {
                elemento.innerHTML = elemento.getAttribute("data-" + idioma);
            });
            document.documentElement.lang = idioma === "pt" ? "pt-br" : "en";
        }