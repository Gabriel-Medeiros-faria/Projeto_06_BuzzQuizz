let criarTituloQuizz;
let criarImgQuizz;
let criarqtdPerguntasQuizz;
let criarqtdNiveisQuizz;
let qtdPerguntas;
let qtdNiveis;
let questions = [];

function tela3() {
    let main = document.querySelector('.main');
    main.classList.add('esconder');

    let tela3 = document.querySelector('.tela3')
    tela3.classList.remove('esconder');
}

function armazenaDadosQuizz() {
    criarTituloQuizz = document.querySelector('.tituloQuizz').value;
    criarImgQuizz = document.querySelector('.imagem1Quizz').value;
    criarqtdPerguntasQuizz = document.querySelector('.qtdPerguntas').value;
    criarqtdNiveisQuizz = document.querySelector('.qtdNiveis').value;

    qtdPerguntas = parseInt(criarqtdPerguntasQuizz);
    qtdNiveis = parseInt(criarqtdNiveisQuizz);



    // if (criarTituloQuizz.length < 20 || qtdPerguntas < 3 || qtdNiveis < 2 || isNaN(qtdPerguntas) || isNaN(qtdNiveis) || criarTituloQuizz.length > 65 || criarImgQuizz.length < 5) {
       
    if (qtdPerguntas < 3 || qtdNiveis < 2 || isNaN(qtdPerguntas) || isNaN(qtdNiveis) || criarTituloQuizz.length < 20 || criarTituloQuizz.length > 65 || criarImgQuizz === ""|| criarImgQuizz === undefined || !checkUrl(criarImgQuizz) ) {
        alert(
            `Preencha os dados corratamente: 
          O titulo deve ter mais de 20 caracteres
          A quantidade de perguntas deve ser um número >=3 e <=10;
          A quantidade de níveis deve ser um numero >= 2 ou <=5;
          A imagem deve ter formato de url`);
        return;
    }

    pagina32();
}


function pagina32() {

    const elemento = document.querySelector('.conteudoTela31');
    elemento.classList.add('esconder');

    const elemento1 = document.querySelector('.conteudoTela32');
    elemento1.classList.remove('esconder');

    for (let i = 0; i < criarqtdPerguntasQuizz; i++) {
        elemento1.innerHTML += `
        <div class="conteinerPergunta" data-identifier="question-form"> 
        <div class="pergTitulo pergTitulo${i}" data-identifier="expand" onclick="escondePergunta(${i})">Pergunta ${i + 1} <img class="" src="imgTela2/Vector.png" alt=""></div>

        <div class="perguntas${i} esconder">
        <div class="perguntas">
        
        <input class="criarPergunta${i}" placeholder='    Texto da pergunta' type="text">
        <input class="criarCorPergunta${i}" placeholder='    Cor de fundo da pergunta' type="text">
    </div>
    <div class="divrespostaCorreta${i}">
        <p>Resposta Correta</p>
        <input class="respostaCorreta${i}" placeholder='    Resposta Correta' type="text">
        <input class="imgRespostaCorreta${i}" placeholder='    URL da imagem' type="text">
    </div>
    <div class="divRespostasIncorretas${i}">
        <p>Respostas incorretas</p>
        <input class="respostaIncorreta${i}1" placeholder='    Resposta incorreta 1' type="text">
        <input class="imgRespostaIncorreta${i}1" placeholder='    URL da imagem 1' type="text">

        <input class="respostaIncorreta${i}2" placeholder='    Resposta incorreta 2' type="text">
        <input class="imgRespostaIncorreta${i}2" placeholder='    URL da imagem 2' type="text">

        <input class="respostaIncorreta${i}3" placeholder='    Resposta incorreta 3' type="text">
        <input class="imgRespostaIncorreta${i}3" placeholder='    URL da imagem 3' type="text">
    </div></div></div>
    `
    }

    elemento1.innerHTML += `<div class="prosseguirNiveis" onclick="armazenarDadosPerguntas()">
    Prosseguir para criar níveis
</div>`

}

function escondePergunta(parametro) {
    for (let i = 0; i < qtdPerguntas; i++) {
        let item = document.querySelector(`.perguntas${i}`);
        item.classList.add("esconder");
        let item1 = document.querySelector(`.perguntas${parametro}`);
        item1.classList.remove("esconder");
        let item2 = document.querySelector(`.pergTitulo${parametro}`);
        item2.scrollIntoView();
    }
}

let tituloPerguntas;
let corPergunta;
let tituloPerguntas1 = [];
let corPergunta1 = [];
let answers = [];
let objetoQuizz;
let contador = 0;
let ele;
let ele1;
let verificador = [];
let objt1;
let respostas;
let respostas1;
let respostas2;
let respostas3;
let imgrespostas;
let imgrespostas1;
let imgrespostas2;
let imgrespostas3;

function armazenarDadosPerguntas() {

    for (let i = 0; i < criarqtdPerguntasQuizz; i++) {

        objt1 = [];
        ele = document.querySelector(`.criarPergunta${[i]}`);
        tituloPerguntas = ele.value;
        ele1 = document.querySelector(`.criarCorPergunta${[i]}`);
        corPergunta = ele1.value;

        respostas = document.querySelector(`.respostaCorreta${i}`).value;
        respostas1 = document.querySelector(`.respostaIncorreta${i}1`).value;
        respostas2 = document.querySelector(`.respostaIncorreta${i}2`).value;
        respostas3 = document.querySelector(`.respostaIncorreta${i}3`).value;


        imgrespostas = document.querySelector(`.imgRespostaCorreta${i}`).value;
        imgrespostas1 = document.querySelector(`.imgRespostaIncorreta${i}1`).value;
        imgrespostas2 = document.querySelector(`.imgRespostaIncorreta${i}2`).value;
        imgrespostas3 = document.querySelector(`.imgRespostaIncorreta${i}3`).value;

        checkUrl(imgrespostas);
        checkUrl(imgrespostas1);

       /*  imgrespostas !== null && imgrespostas !== undefined && imgrespostas !== "" &&
        imgrespostas1 !== null && imgrespostas1 !== undefined && imgrespostas1 !== "" && */

        if (tituloPerguntas.length > 20 && corPergunta.length === 7 && corPergunta[0] === "#") {
            tituloPerguntas1.push(tituloPerguntas);
            corPergunta1.push(corPergunta);
            if (respostas !== null && respostas !== undefined && respostas !== "" &&
                respostas1 !== null && respostas1 !== undefined && respostas1 !== "" &&
                checkUrl(imgrespostas) && checkUrl(imgrespostas1)) {

                if (respostas2 !== null && respostas2 !== undefined && respostas2 !== "" &&
                    respostas3 !== null && respostas3 !== undefined && respostas3 !== "" &&
                    checkUrl(imgrespostas2) && checkUrl(imgrespostas3))
                     /* imgrespostas2 !== null && imgrespostas2 !== undefined && imgrespostas2 !== "" &&
                imgrespostas3 !== null && imgrespostas3 !== undefined && imgrespostas3 !== "" */ {

                    objt1 = [{ text: document.querySelector(`.respostaCorreta${i}`).value, image: document.querySelector(`.imgRespostaCorreta${i}`).value, isCorrectAnswer: true },
                    { text: document.querySelector(`.respostaIncorreta${i}1`).value, image: document.querySelector(`.imgRespostaIncorreta${i}1`).value, isCorrectAnswer: false },
                    { text: document.querySelector(`.respostaIncorreta${i}2`).value, image: document.querySelector(`.imgRespostaIncorreta${i}2`).value, isCorrectAnswer: false },
                    { text: document.querySelector(`.respostaIncorreta${i}3`).value, image: document.querySelector(`.imgRespostaIncorreta${i}3`).value, isCorrectAnswer: false }];
                    console.log("puxando 4 respostas");
                } else if (respostas2 !== null && respostas2 !== undefined && respostas2 !== "" && checkUrl(imgrespostas2)
                ) {
                    objt1 = [{ text: document.querySelector(`.respostaCorreta${i}`).value, image: document.querySelector(`.imgRespostaCorreta${i}`).value, isCorrectAnswer: true },
                    { text: document.querySelector(`.respostaIncorreta${i}1`).value, image: document.querySelector(`.imgRespostaIncorreta${i}1`).value, isCorrectAnswer: false },
                    { text: document.querySelector(`.respostaIncorreta${i}2`).value, image: document.querySelector(`.imgRespostaIncorreta${i}2`).value, isCorrectAnswer: false }];
                    console.log("puxando 3 respostas");
                } else {
                    objt1 = [{ text: document.querySelector(`.respostaCorreta${i}`).value, image: document.querySelector(`.imgRespostaCorreta${i}`).value, isCorrectAnswer: true },
                    { text: document.querySelector(`.respostaIncorreta${i}1`).value, image: document.querySelector(`.imgRespostaIncorreta${i}1`).value, isCorrectAnswer: false },
                    ];
                    console.log("puxando 2 respostas");
                }

            } else {
                alert(
                    `Voce precisa preencher ao menos a resposta certa e uma resposta incorreta, 
            assim como suas respectivas imagens em formato URL!`
                );

                answers = [];
                questions = [];
                tituloPerguntas = "";
                corPergunta = "";
                tituloPerguntas1 = [];
                corPergunta1 = [];
                return;
            }


            answers.push(objt1);
            let objt = { title: tituloPerguntas1[i], color: corPergunta1[i], answers: answers[i] };
            questions.push(objt);
        } else {
            alert(`
            O titulo da pergunta deve conter mais de 20 caracteres
            Sua cor deve ser em formato hexadecimal começando por # e 
            contendo mais 6 caracteres com letras de "A" a "F" e números de 1 a 9;`
            )
            answers = [];
            questions = [];
            tituloPerguntas = "";
            corPergunta = "";
            tituloPerguntas1 = [];
            corPergunta1 = [];
            return;
        }
    }
    pagina33();

}


function pagina33() {

    const elemento = document.querySelector('.conteudoTela32');
    elemento.classList.add('esconder');

    const elemento1 = document.querySelector('.conteudoTela33');
    elemento1.classList.remove('esconder');

    for (let i = 0; i < qtdNiveis; i++) {
        elemento1.innerHTML += `
        <div class="conteinerNivel" data-identifier="level"> </div>
        <p class="nomeNivel nomeNivel${i}" onclick="escondeNivel(${i})" data-identifier="expand">Nível ${i +1} <img class="" src="imgTela2/Vector.png" alt=""></p>
         <div class="niveis${i} esconder">
        

        <input class="tituloNivel${i}" placeholder='    Título do nível' type="text">
        <input class="acertoNivel${i}" placeholder='    % de acerto minima' type="text">
        <input class="imgNivel${i}" placeholder='    URL da imagem do nível' type="text">
        <input class="descricaoNivel${i}" placeholder='    Descrição do nível' type="text">
    </div>
    `
    }

    elemento1.innerHTML += `<div class="finalizarQuizz" onclick="finalizarQuizz()">
    Finalizar Quizz
</div>`

escondeNivel();

}

function escondeNivel(parametro) {
    for (let i = 0; i < qtdNiveis; i++) {
        let item = document.querySelector(`.niveis${i}`);
        item.classList.add("esconder");
        let item1 = document.querySelector(`.niveis${parametro}`);
        item1.classList.remove("esconder");
        let item2 = document.querySelector(`.nomeNivel${parametro}`);
        item2.scrollIntoView();

    }
}

let tituloNivel;
let acertosNivel;
let imgNivel;
let descricaoNivel;
let acertosNivel2=[];
let levels = [];
function finalizarQuizz() {
    ;

    for (let i = 0; i < qtdNiveis; i++) {

        tituloNivel = document.querySelector(`.tituloNivel${i}`).value;
        imgNivel = document.querySelector(`.imgNivel${i}`).value;
        descricaoNivel = document.querySelector(`.descricaoNivel${i}`).value;
        acertosNivel = document.querySelector(`.acertoNivel${i}`).value;

        acertosNivel2.push(acertosNivel);

        if (tituloNivel.length >= 10 && !isNaN(acertosNivel) && acertosNivel >= 0 && acertosNivel <= 100 && checkUrl(imgNivel) && descricaoNivel.length > 30) {
            let objt1 = {
                title: document.querySelector(`.tituloNivel${i}`).value, image: document.querySelector(`.imgNivel${i}`).value,
                text: document.querySelector(`.descricaoNivel${i}`).value, minValue: document.querySelector(`.acertoNivel${i}`).value
            }
            levels.push(objt1);
        } else {
            alert(`
            Algo deu errado. O titulo do nível tem quer conter mais de 10 caracteres;
            % de acerto deve ser um número entre 0 e 100;
            Imagem tem que ser uma URL;
            Descrição do Nível tem que conter mais de 30 caracteres
            A % de acerto de ao menos 1 nível tem que ser igual a 0;
            `);
           
            acertosNivel2 = [];
            levels = [];
            tituloNivel = "";
            acertosNivel = "";
            imgNivel = "";
            descricaoNivel = ""
            return;
        }

    }

    objetoQuizz = { title: criarTituloQuizz, image: criarImgQuizz, questions: questions, levels: levels };
    const promessa = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', objetoQuizz);
    promessa.then(deuBom);
    promessa.catch(deuRuim);
}

let quizzCriado = [];
let quizzesUsuario=[];
let listaQuizzes123;
let listaQuizzes1234;

function deuBom(parametro) {

    const quizzUsuario = parametro;
    const quizzSerializado = JSON.stringify(quizzUsuario);

    localStorage.setItem("listaQuizzes", quizzSerializado);

    listaQuizzes123 = localStorage.getItem("listaQuizzes");
    quizzesUsuario.push(JSON.parse(listaQuizzes123)) ;


    console.log('deu Bom!!')
    console.log('o ID do quizz é:' + parametro.data.id)
    quizzCriado = parametro.data;
    console.log('quizz criado é: ' + quizzCriado)
    alert("Parabéns, seu quizz foi enviado com sucesso para o servidor!! 'o ID do quizz é:" + parametro.data.id);
    pagina34();
}


function pagina34() {
    const elemento = document.querySelector('.conteudoTela33');
    elemento.classList.add('esconder');

    const elemento1 = document.querySelector('.conteudoTela34');
    elemento1.classList.remove('esconder');


}

function deuRuim(parametro) {
    console.log('deu ruim!!')
    console.log(parametro);
    alert(`Algo deru errado, o servidor não aceitou seu objeto,
     por favor tente novamente se atentando aos avisos`)
}
function reloadPage() {
    location.reload();
}

function checkUrl(string) {
    try {
     let url = new URL(string)
     console.log("Valid URL!")
     return true;
   } catch(err) {
       console.log("Invalid URL!")
       return false;
   }
 }

//......................................................................................................
let quizzes;
let objetoCompleto;

function obterQuizzesServidor() {
    let promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    promessa.then(renderizarQuizzes)
}
obterQuizzesServidor()

function renderizarQuizzes(resposta) {
    quizzes = resposta.data

    objetoCompleto = resposta



    let item = document.querySelector('ul');

    for (i = 0; i < quizzes.length; i++) {

        item.innerHTML += `<li onclick="segundaTela(${i})">
        <div class="tela-preta"></div>
        <div class="card-quizz" data-identifier="quizz-card">
            <img src="${quizzes[i].image}">
            <div class="texto-imagem">
            ${quizzes[i].title} 
            </div>
        </div>
    </li>`

    }
}

function embaralhar() {
    return Math.random() - 0.5;
}

let quizzClicado;

function segundaTela(parametro) {

let cabeca = document.querySelector('.cabeca');
cabeca.scrollIntoView();

    let item = document.querySelector(".main");
    item.classList.add("esconder");
    let item2 = document.querySelector(".tela2");
    item2.classList.remove("esconder");

    quizzClicado = quizzes[parametro];

    if (parametro === 123) {
        quizzClicado = [];
        quizzClicado = quizzCriado;
    }
  

    item2.innerHTML += `
    <div class="titleQuiz">
    <p> ${quizzClicado.title}</p>

    <div class="escura"></div>
    <div class="imagemQuizz" style="background-image:url('${quizzClicado.image}');   background-size: cover"></div>
    
    </div>
    
    `

    let perguntas = quizzClicado.questions;
    let respostas123 = perguntas.answers;
    

    for (let i = 0; i< perguntas.length; i++) {
        quizzClicado.questions[i].answers.sort(embaralhar);
        item2.innerHTML += `
        <div class="pergunta${i}" data-identifier="question">
            <div class="perguntaTitulo" style="background-color: ${perguntas[i].color}">
                <p> ${perguntas[i].title}</p>
            </div>
        </div>
        `     
        for (let j=0; j < quizzClicado.questions[i].answers.length; j++ ){
            let item3 = document.querySelector(`.pergunta${i}`);
            item3.innerHTML += `
            <div class="perg${i} perg${i}resp${j} perguntaResposta ${perguntas[i].answers[j].isCorrectAnswer}" data-identifier="answer" onclick="verificarResposta('.perg${i}resp${j}' , '.perg${i}', '.pergunta${i+1}')"> 
            <img src="${perguntas[i].answers[j].image}" alt="">
            <p>${perguntas[i].answers[j].text} </p>
            </div>
            `
        }
    }
}

let respSelecionada;
let todasAsRespostas;
let acertos = 0;
let erros = 0;

function verificarResposta(resposta, pergunta, proxperg) {
    console.log(resposta);
    console.log(pergunta);
    respSelecionada = document.querySelector(`${resposta}`);
    todasAsRespostas = document.querySelectorAll(`${pergunta}`);
    setTimeout(scroll, 2000, proxperg);
    
    for (let i = 0; i < todasAsRespostas.length; i++) {
        todasAsRespostas[i].classList.add("palida");
        respSelecionada.classList.remove("palida");
    }
    if (respSelecionada.classList.contains("true")) {
        console.log ('resposta correta');
        respSelecionada.classList.add('certo');
        acertos++;
    } else {
        console.log ("respsta incorreta");
        respSelecionada.classList.add('errado');
        erros++;
    }
    respSelecionada.parentElement.innerHTML += `
    <div class="invisivel"></div>
    `
    let jogadas = acertos + erros;
    if (jogadas === quizzClicado.questions.length) {
        let item10 = acertos/jogadas;
        if (acertos === 0) {
            porcentagemAcertos = 0;
        }
        else {
            porcentagemAcertos = item10*100;
        }
        
        setTimeout(fimdeQuizz, 2000);
    }
    
}
function scroll (parametro) {
    let item = document.querySelector(`${parametro}`);
    item.scrollIntoView();
    
}

let porcAcerto = [];
let porcentagemAcertos;
let porcentagemAcertos1;
let nivelAlcancado;

function fimdeQuizz() {
    Number(porcentagemAcertos);
    porcentagemAcertos1 = Number(porcentagemAcertos.toFixed(0));
    for (let i = 0; i < quizzClicado.levels.length; i++) {
        porcAcerto.push (quizzClicado.levels[i].minValue);
        porcAcerto.sort(function(a, b){return a-b});


        if (porcentagemAcertos1 >= porcAcerto[i]) {
            nivelAlcancado = i;
        }

    }

    let item2 = document.querySelector(".tela2");
    item2.innerHTML += `
    <div class="nivelFinal" data-identifier="quizz-result">
        <div class="tituloNivel">${quizzClicado.levels[nivelAlcancado].title} </div>
        <div class="nivelItems">
            <img src="${quizzClicado.levels[nivelAlcancado].image}" alt="">
            <div class="nivelTexto">${quizzClicado.levels[nivelAlcancado].text} </div>
        </div>
    </div>

    <div class="botoesFinal">
        <div class="reiniciarQuizz" onclick="resetQuizz()"> Reiniciar Quizz </div>
        <div class="voltarHome" onclick="reloadPage()"> Voltar para o início </div>
    </div>
    `
   
    scrollDown();
}

function resetQuizz() {
    let item = document.querySelector('.cabeca');
    item.scrollIntoView();
    for (let i = 0; i < todasAsRespostas.length; i++) {
        todasAsRespostas[i].classList.remove("palida");
    }
    let item1 = document.querySelectorAll('.certo');
    let item2 = document.querySelectorAll('.errado');
    for (let i=0; i <item1.length; i++) {
        item1[i].classList.remove('certo');
    }
    for (let i=0; i <item2.length; i++) {
        item2[i].classList.remove('errado');
    }
    let item3 = document.querySelectorAll('.invisivel');
    for (let i = 0; i < item3.length; i++) {
        item3[i].remove();
    }
    let item4 = document.querySelectorAll('.palida');
    for (let i = 0; i < item4.length; i++) {
        item4[i].classList.remove('palida');
    }

    let item5 = document.querySelector('.nivelFinal');
    let item6 = document.querySelector('.botoesFinal');
    item5.remove();
    item6.remove();
    porcAcerto = [];
    porcentagemAcertos = 0;
    porcentagemAcertos1 = 0;
    nivelAlcancado = 0;
    respSelecionada;
    todasAsRespostas = [];
    acertos = 0;
    erros = 0;

}

function scrollDown() {
    let item1 = document.querySelector(".nivelFinal");
    item1.scrollIntoView();
}