export const perguntas = [
    {
        enunciado:
            "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter. Ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",

        alternativas: [
            {
                texto: "Isso é assustador!",

                afirmacao: [
                    "No início ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
                ],

                proxima: 1
            },

            {
                texto: "Isso é maravilhoso!",

                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que IA pode ajudar em tarefas da sua vida."
                ],

                proxima: 2
            }
        ]
    },

    {
        enunciado:
            "Depois de conhecer melhor a Inteligência Artificial, você percebe que ela pode estar presente em praticamente todas as áreas da sociedade. Como você reage?",

        alternativas: [
            {
                texto: "Quero entender os riscos.",

                afirmacao: [
                    "Começou a pesquisar sobre segurança e privacidade.",
                    "Percebeu que novas tecnologias também podem trazer novos problemas."
                ],

                proxima: 2
            },

            {
                texto: "Quero aprender a usar IA.",

                afirmacao: [
                    "Começou a explorar ferramentas de Inteligência Artificial.",
                    "Percebeu que a IA poderia ajudar em várias atividades."
                ],

                proxima: 2
            }
        ]
    },

    {
        enunciado:
            "Em 2049, a Inteligência Artificial transformou profundamente a sociedade. Qual caminho você decide seguir?",

        alternativas: [
            {
                texto: "Segurança da Informação",

                afirmacao: [
                    "Decidiu trabalhar para tornar os sistemas de IA mais seguros.",
                    "Passou a estudar maneiras de proteger dados e pessoas."
                ]
            },

            {
                texto: "Game Designer",

                afirmacao: [
                    "Começou a criar experiências interativas usando IA.",
                    "Usou a tecnologia para desenvolver novos tipos de jogos."
                ]
            },

            {
                texto: "Ciência da Computação",

                afirmacao: [
                    "Decidiu estudar profundamente como a Inteligência Artificial funciona.",
                    "Passou a desenvolver novas tecnologias para o futuro."
                ]
            }
        ]
    }
];

js/script.js
import { aleatorio, nome } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let historiaFinal = "";

function substituiNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(
            /você/gi,
            nome
        );
    }
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.innerHTML = "";

    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");

        botaoAlternativa.textContent = alternativa.texto;

        botaoAlternativa.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);

    historiaFinal += afirmacao + " ";

    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.innerHTML = "";

    caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";

    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";

    telaInicial.style.display = "none";

    caixaResultado.classList.remove("mostrar");

    substituiNome();
    mostraPergunta();
}

botaoIniciar.addEventListener("click", iniciaJogo);

botaoJogarNovamente.addEventListener("click", jogaNovamente);