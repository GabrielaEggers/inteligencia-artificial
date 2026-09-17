// ==========================================
// NOMES
// ==========================================

const nomes = [
    "Fernanda",
    "Giuliana",
    "Maria Eduarda",
    "Marcelo",
    "Amanda",
    "Gustavo",
    "Gabriel"
];

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

const nome = aleatorio(nomes);

// ==========================================
// PERGUNTAS
// ==========================================

const perguntas = [
    {
        enunciado:
            "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que IA pode ajudar em tarefas da sua vida."
                ]
            }
        ]
    },
    {
        enunciado:
            "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto:
                    "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: [
                    "Você percebe que a IA pode ser uma ferramenta útil para pesquisar e aprender, mas decide verificar as informações.",
                    "Você utiliza a IA como apoio para encontrar informações, mas procura conferir se os dados estão corretos."
                ]
            },
            {
                texto:
                    "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Você prefere realizar a pesquisa utilizando diferentes fontes e seus próprios conhecimentos.",
                    "Você decide pesquisar em diferentes lugares e utilizar também seus próprios conhecimentos para elaborar o trabalho."
                ]
            }
        ]
    },
    {
        enunciado:
            "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto:
                    "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Você acredita que a IA pode transformar o mercado de trabalho e também criar novas oportunidades.",
                    "Você entende que a tecnologia pode modificar profissões e criar novas formas de trabalho."
                ]
            },
            {
                texto:
                    "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Você se preocupa com os impactos da automação e acredita que os trabalhadores precisam ser protegidos.",
                    "Você considera importante discutir como a automação pode afetar os trabalhadores e suas oportunidades."
                ]
            }
        ]
    },
    {
        enunciado:
            "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto:
                    "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: [
                    "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
                    "Ainda acha que os meios de desenho tradicionais são mais eficazes para a criatividade, por isso vem estimulando pessoas em suas redes sociais a fazer pintura em aquarela."
                ]
            },
            {
                texto:
                    "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: [
                    "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!",
                    "Compartilhou artes em redes sociais como forma de ensinar como se comunicar através da arte.",
                    "Percebeu que muitas pessoas têm dificuldade em expressar suas ideias desenhando e acha que a IA é capaz de empoderar essas pessoas a tirarem ideias do papel."
                ]
            }
        ]
    },
    {
        enunciado:
            "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto:
                    "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: [
                    "Você considera que utilizar o texto inteiro da IA pode ser uma forma válida de contribuir para o trabalho.",
                    "Você entende que escrever comandos para a IA também pode ser considerado uma forma de participação no trabalho."
                ]
            },
            {
                texto:
                    "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: [
                    "Você entende que a IA pode ajudar, mas acredita que é essencial revisar as informações e acrescentar as perspectivas do grupo.",
                    "Você decide revisar o conteúdo produzido pela IA e acrescentar as ideias e conhecimentos dos integrantes do grupo."
                ]
            }
        ]
    }
];

// ==========================================
// ELEMENTOS
// ==========================================

const botoesIniciar = document.querySelectorAll(".iniciar-btn");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const jogo = document.querySelector(".jogo");
const indicadorPagina = document.getElementById("indicador-pagina");

// ==========================================
// VARIÁVEIS DE ESTADO
// ==========================================

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// ==========================================
// NOME
// ==========================================

function substituiNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/gi, nome);
    }
}

// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    if (indicadorPagina) {
        indicadorPagina.textContent = `0${atual + 1} / 05`;
    }

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

// ==========================================
// ALTERNATIVAS
// ==========================================

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    }
}

// ==========================================
// RESPOSTA
// ==========================================

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

// ==========================================
// RESULTADO
// ==========================================

function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049, ${nome}...`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

    caixaResultado.classList.add("mostrar");
    caixaResultado.scrollIntoView({ behavior: "smooth" });
}

// ==========================================
// INICIAR E REINICIAR JOGO
// ==========================================

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";

    caixaResultado.classList.remove("mostrar");
    
    jogo.scrollIntoView({ behavior: "smooth" });

    mostraPergunta();
}

// ==========================================
// EVENTOS E INICIALIZAÇÃO
// ==========================================

botoesIniciar.forEach(botao => {
    botao.addEventListener("click", iniciaJogo);
});

if (botaoJogarNovamente) {
    botaoJogarNovamente.addEventListener("click", iniciaJogo);
}

substituiNome();