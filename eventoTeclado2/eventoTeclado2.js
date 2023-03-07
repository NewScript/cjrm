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

// Colocar o paragraph fora do addEventListener

const paragraph = document.createElement('p')

userName.addEventListener('keyup', event => {
    const inputValue = event.target.value
    const userNameRegex = /^[a-zA-Z]{6,}$/

    if(!userNameRegex.test(inputValue)){
        paragraph.textContent = 'Nome inválido'
        event.target.insertAdjacentElement('afterend', paragraph)
        return
    }
    paragraph.textContent = 'Nome Válido'
    event.target.insertAdjacentElement('afterend', paragraph)

})