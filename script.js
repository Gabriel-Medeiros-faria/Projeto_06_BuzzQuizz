let quizzes
let objetoCompleto

function obterQuizzesServidor(){
    let promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    promessa.then(renderizarQuizzes)
}
obterQuizzesServidor()

function renderizarQuizzes(resposta){
    console.log(resposta.data)
    quizzes = resposta.data

    objetoCompleto = resposta



    let item = document.querySelector('ul')

    for(i=0;i<quizzes.length;i++){

        item.innerHTML+= `<li onclick="segundaTela(this)">
        <div class="tela-preta"></div>
        <div class="card-quizz">
            <img src="${quizzes[i].image}">
            <div class="texto-imagem">
            ${quizzes[i].title} 
            </div>
        </div>
    </li>`

    }
}

function segundaTela(){


    objetoCompleto  //essa variável está com o objeto completinho para você usar e também ja está no onclick, quando clicar em algum quizz, vai executar essa função.
    console.log(objetoCompleto)


}