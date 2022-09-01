let criarTituloQuizz;
let criarImgQuizz;
let criarqtdPerguntasQuizz;
let criarqtdNiveisQuizz;
let qtdPerguntas;
let qtdNiveis;
let questions = [];

function armazenaDadosQuizz() {
    criarTituloQuizz = document.querySelector('.tituloQuizz').value;
    criarImgQuizz = document.querySelector('.imagemQuizz').value;
    criarqtdPerguntasQuizz = document.querySelector('.qtdPerguntas').value;
    criarqtdNiveisQuizz = document.querySelector('.qtdNiveis').value;
    console.log(criarTituloQuizz, criarImgQuizz, criarqtdNiveisQuizz, criarqtdPerguntasQuizz);

    qtdPerguntas = parseInt(criarqtdPerguntasQuizz);
    qtdNiveis = parseInt(criarqtdNiveisQuizz);



    console.log(criarTituloQuizz.length, qtdPerguntas, qtdNiveis);
    if (criarTituloQuizz.length < 20 || qtdPerguntas < 3 || qtdNiveis < 2 ||  isNaN(qtdPerguntas) || isNaN(qtdNiveis) || criarTituloQuizz.length >65) {
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
         <div class="perguntas">
        <p>Pergunta ${i}</p>
        <input class="criarPergunta${i}" placeholder='    Texto da pergunta' type="text">
        <input class="criarCorPergunta${i}" placeholder='    Cor de fundo da pergunta' type="text">
    </div>
    <div class="respostaCorreta">
        <p>Resposta Correta</p>
        <input class="respostaCorreta${i}" placeholder='    Resposta Correta' type="text">
        <input class="imgRespostaCorreta${i}" placeholder='    URL da imagem' type="text">
    </div>
    <div class="respostasIncorretas">
        <p>Respostas incorretas</p>
        <input class="respostaIncorreta${i}1" placeholder='    Resposta incorreta 1' type="text">
        <input class="imgRespostaIncorreta${i}1" placeholder='    URL da imagem 1' type="text">

        <input class="respostaIncorreta${i}2" placeholder='    Resposta incorreta 2' type="text">
        <input class="imgRespostaIncorreta${i}2" placeholder='    URL da imagem 2' type="text">

        <input class="respostaIncorreta${i}3" placeholder='    Resposta incorreta 3' type="text">
        <input class="imgRespostaIncorreta${i}3" placeholder='    URL da imagem 3' type="text">
    </div>
    `
    }

    elemento1.innerHTML += `<div class="prosseguirNiveis" onclick="armazenarDadosPerguntas()">
    Prosseguir para criar níveis
</div>`

}

let tituloPerguntas = [];
let corPergunta = [];
let answers = [];
let objetoQuizz;
let respostas;
let respostas1;
let respostas2;
let respostas3;

function armazenarDadosPerguntas() {
    for (let i = 0; i < criarqtdPerguntasQuizz; i++) {


        let ele = document.querySelector(`.criarPergunta${[i]}`);
        tituloPerguntas.push(ele.value);
        let ele1 = document.querySelector(`.criarCorPergunta${[i]}`);
        corPergunta.push(ele1.value);

        respostas = document.querySelector(`.respostaCorreta${i}`).value;
        respostas1 = document.querySelector(`.respostaIncorreta${i}1`).value;   
        respostas2 = document.querySelector(`.respostaIncorreta${i}2`).value;
        respostas3 = document.querySelector(`.respostaIncorreta${i}3`).value;  

        console.log(respostas);
        console.log(respostas1);
        console.log(respostas2);
        console.log(respostas3);

        /* if (tituloPerguntas[i].length < 20 || corPergunta[i].length !== 7 || respostas === '' || respostas === null || respostas1 === '' || respostas1 === null) {
            alert(`Preencha os dados corretamente:
            O titulo da pergunta deve conter mais de 20 caracteres;
            A cor de fundo deve começar em "#", seguida de 6 caracteres hexadecimais, ou seja, números ou letras de A a F
            Textos das respostas: não pode estar vazio;
            URL das imagens de resposta: deve ter formato de URL;
            É obrigatória a inserção da resposta correta e de pelo menos 1 resposta errada. Portanto, é permitido existirem perguntas com só 2 ou 3 respostas em vez de 4.
            `)

            corPergunta = [];
            return;
        } */


        let objt1 = [{ text: document.querySelector(`.respostaCorreta${i}`).value, image: document.querySelector(`.imgRespostaCorreta${i}`).value, isCorrectAnswer: true },
        { text: document.querySelector(`.respostaIncorreta${i}1`).value, image: document.querySelector(`.imgRespostaIncorreta${i}1`).value, isCorrectAnswer: false },
        { text: document.querySelector(`.respostaIncorreta${i}2`).value, image: document.querySelector(`.imgRespostaIncorreta${i}2`).value, isCorrectAnswer: false },
        { text: document.querySelector(`.respostaIncorreta${i}3`).value, image: document.querySelector(`.imgRespostaIncorreta${i}3`).value, isCorrectAnswer: false }


        ];



        answers.push(objt1);
        console.log(answers)
        let objt = { title: tituloPerguntas[i], color: corPergunta[i], answers: answers[i] };
        questions.push(objt);
        console.log(questions)


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
         <div class="níveis">
        <p>Nível ${i}</p>

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

}

let levels = [];
function finalizarQuizz() {

    for (let i = 0; i < qtdNiveis; i++) {
        let objt1 = { title: document.querySelector(`.tituloNivel${i}`).value, image: document.querySelector(`.imgNivel${i}`).value, text: document.querySelector(`.descricaoNivel${i}`).value, minValue: document.querySelector(`.acertoNivel${i}`).value }
        levels.push(objt1);
    }
    console.log(levels);

    objetoQuizz = {title: criarTituloQuizz, image: criarImgQuizz, questions: questions, levels: levels};
    console.log(objetoQuizz);
    const promessa = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', objetoQuizz);
    promessa.then(deuBom);
    promessa.catch(deuRuim);
}
function deuBom(parametro) {
    console.log('deu Bom!!')
    console.log(parametro);
    console.log('o ID do quizz é:' + parametro.data.id)
}

function deuRuim(parametro) {
    console.log('deu ruim!!')
    console.log(parametro);
}
function reloadPage() {
    location.reload();
}

