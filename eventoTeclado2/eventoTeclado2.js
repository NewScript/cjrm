const userName = document.querySelector('#userName')

// userName.addEventListener('keyup', event => {
//     const inputValue = event.target.value
//     const userNameRegex = /^[a-zA-Z]{6,}$/

//     const paragraph = document.createElement('p')

//     if(!userNameRegex.test(inputValue)){
//         paragraph.textContent = 'Nome inválido'
//         // Este código captura o evento para descbrir qual objeto
//         // esta chamando e criar o p - paragraph após ele - afterend
//         event.target.insertAdjacentElement('afterend', paragraph)
//         return // Para não continuar o código, evitando o else
//     }
//     paragraph.textContent = 'Nome Válido'
//     event.target.insertAdjacentElement('afterend', paragraph)

// })


// SOLUÇÃO PARA EVITAR A CRIAÇÃO DE NOVOS PARÁGRAFOS 01

// userName.addEventListener('keyup', event => {
//     const inputValue = event.target.value
//     const userNameRegex = /^[a-zA-Z]{6,}$/

//     const paragraph = document.createElement('p')

//     // Criando um atributo para identificar o paragrafo, como
//     // um id, não sei a diferenca
//     paragraph.setAttribute('data-feedback', 'userName-feedback')

//     // setando o paragrafo com o atributo criado, observe a sintaxe
//     // do ponteiro com = [ ] ' ' e " "
//     const feedbackParagraph = document.querySelector(
//         '[data-feedback="userName-feedback"]'
//     )
    
//     // Se feedbackParagraph retornar null ( falsy ) vale como um
//     // true, o paragraph existe, então removemos ele
//     if(feedbackParagraph){
//         feedbackParagraph.remove()
//     }

//     if(!userNameRegex.test(inputValue)){
//         paragraph.textContent = 'Nome inválido'
//         event.target.insertAdjacentElement('afterend', paragraph)
//         return
//     }
//     paragraph.textContent = 'Nome Válido'
//     event.target.insertAdjacentElement('afterend', paragraph)

// })

// SOLUÇÃO PARA EVITAR A CRIAÇÃO DE NOVOS PARÁGRAFOS 02

// // Colocar o paragraph fora do addEventListener
// const paragraphFeedback = document.createElement('p')

// // Outro paragrafo para não dar bug com o de cima
// const paragraphSubmit = document.createElement('p')

// // Criando um atributo para  servir como flag caso depois
// // de apertado o botão submit o paragraph criado com ele
// // possa  sumir
// paragraphSubmit.setAttribute('stanbay','on')

// // Retirada do regex do addListener abaixo para ser usada
// // em outros lugares
// const userNameRegex = /^[a-zA-Z]{6,}$/

// // Em um dado momento, o evento keyup e o submit do form criará
// // um bug onde a mensagem exibiba quando o form enviado, com enter
// // ou clicando no botão fique piscando. Para resolver mudamos o
// // evento keyup do input para o evento input onde o enter não
// // interfere

// userName.addEventListener('input', event => {
//     const inputValue = event.target.value
    
//     // Verificando se o paragraph do submit existe, retorna
//     // null se não existir e o paragraph se existir
//     const paragraphSubmitExists = document.querySelector('[stanbay="on"]')
//     if(paragraphSubmitExists){
//         paragraphSubmit.remove()
//     }

//     if(!userNameRegex.test(inputValue)){
//         paragraphFeedback.textContent = 'Nome inválido'
//         // abaixo não usaremos paragraphFeedback.classList.add porque
//         // isso acumularia as classes na tag
//         paragraphFeedback.setAttribute('class', 'error')
//         event.target.insertAdjacentElement('afterend', paragraphFeedback)
//         return
//     }
//     paragraphFeedback.textContent = 'Nome Válido'
//     paragraphFeedback.setAttribute('class', 'success')
//     event.target.insertAdjacentElement('afterend', paragraphFeedback)

// })

// const form = document.querySelector('form')
// const btn = document.querySelector('button')

// form.addEventListener('submit', event => {
//     event.preventDefault()
//     const inputValue = userName.value
//     if(!userNameRegex.test(inputValue)){
//         paragraphSubmit.textContent = 'Corrija nome inválido'
//         // abaixo não usaremos paragraphSubmit.classList.add porque
//         // isso acumularia as classes na tag
//         paragraphSubmit.setAttribute('class', 'error')
//         btn.insertAdjacentElement('afterend', paragraphSubmit)
//         return
//     }
//     paragraphSubmit.textContent = 'Nome Válido'
//     paragraphSubmit.setAttribute('class', 'success')
//     btn.insertAdjacentElement('afterend', paragraphSubmit)
// })

//------------------------------------------

const paragraphSubmit = document.createElement('p')
const paragraphFeedback = document.createElement('p')
const form = document.querySelector('form')
const btn = document.querySelector('button')

paragraphSubmit.setAttribute('stanbay','on')

const insertParagraphIntoDOM = paragraphInfo =>{
    const { paragraph, text, className, previusSibining } = paragraphInfo
    paragraph.textContent = text
    paragraph.setAttribute('class', className)
    previusSibining.insertAdjacentElement('afterend', paragraph)
}

// Os objeto abaixo são usados na função acima

const invalidFeedBackInfo = {
    paragraph: paragraphFeedback, 
    text: 'Nome inválido',
    className: 'error',
    previusSibining: userName // O elemento base para definir o local
                              // do paragrafo paragraphFeedback
}

const validFeedBackInfo = {
    paragraph: paragraphFeedback, 
    text: 'Nome válido',
    className: 'success',
    previusSibining: userName
}

const invalidSubmitInfo = {
    paragraph: paragraphSubmit, 
    text: 'Corrija nome inválido',
    className: 'error',
    previusSibining: btn // O elemento base para definir o local
                         // do paragrafo paragraphSubmit
}

const validSubmitInfo = {
    paragraph: paragraphSubmit, 
    text: 'Nome válido enviado',
    className: 'success',
    previusSibining: btn
}

const userNameRegex = /^[a-zA-Z]{6,}$/

function removeSubmitParagraph(){
    const paragraphSubmitExists = document.querySelector('[stanbay="on"]')
    if(paragraphSubmitExists){
        paragraphSubmit.remove()
    }
}

// As funções que definem o fluxo da aplicação

userName.addEventListener('input', event => {
    const inputValue = event.target.value
    removeSubmitParagraph()
    if(!userNameRegex.test(inputValue)){
        insertParagraphIntoDOM(invalidFeedBackInfo)
        return
    }
    insertParagraphIntoDOM(validFeedBackInfo)
})


form.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = userName.value

    if(!userNameRegex.test(inputValue)){
        insertParagraphIntoDOM(invalidSubmitInfo)
        return
    }
    insertParagraphIntoDOM(validSubmitInfo)
})