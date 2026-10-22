import {aleatorio} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

        {
            enunciado: "Qual é a medida mais urgente para melhorar o sistema de saúde pública no país?",

            alternativas: [
                {
                    texto: "Redirecionar a maior parte dos recursos para a atenção primária e prevenção (postos de saúde, campanhas de vacinação e acompanhamento familiar), evitando que as pessoas adoeçam gravemente.",
                    afirmacao: "Você prioriza a educação e o cuidado contínuo para evitar doenças e não sobrecarregar o sistema de saúde a longo prazo.", 
                    "Sua prioridade é a prevenção e a conscientização constante para impedir que as pessoas adoeçam. Com isso, busca evitar o colapso do atendimento médico no futuro."
                },
                {
                    texto:    "Concentrar os investimentos na expansão da rede hospitalar e de urgência (UTIs, leitos e exames de alta complexidade), garantindo atendimento rápido e eficiente para quem já está em situação crítica.",
               
                    afirmacao: "Você prioriza o atendimento hospitalar imediato e a infraestrutura avançada para salvar vidas em situações críticas.", 
                    "Seu foco principal está no socorro emergencial ágil e no acesso a tecnologias de ponta para garantir a sobrevivência em momentos graves."
                }    
               
            ]
        },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio (opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classlist.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
}

function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classlist.remove("mostrar");
    mostraPergunta();
}


mostraPergunta();
