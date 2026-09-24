const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a tecnologia deve ser usada na saúde pública?",
        alternativas: [
            {
                texto: "Focar em consultas online e aplicativos para que qualquer pessoa consiga atendimento médico direto do celular, sem sair de casa.",
                afirmacao: "Você gosta de praticidade, inovação e facilidade no dia a dia. Valoriza o uso da tecnologia para encurtar distâncias e economizar tempo." ,
                "Você aprecia a praticidade, o avanço tecnológico e a conveniência na sua rotina. Defende que os recursos digitais devem ser usados para aproximar pessoas e otimizar tarefas."
            },
            {
                texto:  "Focar na organização dos dados, prontuários integrados e controle de estoque de remédios para o sistema interno funcionar sem erros.",
                afirmacao: "Você valoriza a ordem, a eficiência dos bastidores e a precisão. Acredita que as coisas só funcionam bem quando a gestão interna está redonda.", 
                "Você preza pela organização, pelo bom funcionamento do trabalho interno e pela exatidão. Defende que o sucesso depende de um planejamento bem estruturado por trás dos panos."
            }    
           
        ]
    },
    {
       
            enunciado: "Qual é a melhor forma de cuidar da saúde mental da população?",
            alternativas: [
                {
                    texto: "Criar grupos de conversa, atividades físicas e palestras de apoio nas escolas, bairros e ambientes de trabalho.",
                    afirmacao: "Você acredita na força do convívio, do diálogo e da empatia. Valoriza o apoio coletivo e o bem-estar social no dia a dia.", 
                    "Você confia no poder das relações humanas, da troca de ideias e de se colocar no lugar do outro. Acredita firmemente na união da comunidade e na busca pelo bem-estar de todos no cotidiano."
                },
                {
                    texto:  "Aumentar o número de psicólogos e psiquiatras nos postos para atender cada pessoa de forma individual e personalizada.",
                    afirmacao: "Você valoriza a privacidade, a atenção técnica e o acompanhamento especializado. Acredita no cuidado pontual de cada caso.", 
                    "Você dá grande valor ao sigilo, ao rigor técnico e ao auxílio por parte de especialistas. Defende que a atenção deve ser personalizada para atender às necessidades específicas de cada pessoa."
                }    
               
            ]
        },
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
}



mostraPergunta();
