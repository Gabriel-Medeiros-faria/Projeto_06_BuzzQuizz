function obterQuizzesServidor(){
    let promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    promessa.then(renderizarQuizzes)
}
obterQuizzesServidor()

function renderizarQuizzes(resposta){
    console.log(resposta.data)
    const quizzes = resposta.data


    let item = document.querySelector('ul')

    for(i=0;i<quizzes.length;i++){

        item.innerHTML+= `<li>
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