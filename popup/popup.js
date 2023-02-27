const btn = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

function showPopup(){
    popup.style.display = 'block'
}

btn.addEventListener('click', showPopup)

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    // event.target.classList lista apenas a class popup porque
    // o restante está dentro de popup. Usando a sintaxe de colchetes
    // somado com a propagação de eventos, a cada clique em popup
    // e nos elementos internos, retorna o class name deles
    console.log(classNameOfClickedElement)
    const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
    // Lista de classes dos elementos que receberão o evento de click
    const shouldClosePopup = classNames.some( className => {
        return className === classNameOfClickedElement
    })
    // .some passa por todos os elementos do array, neste caso o array classNames,
    // se encontrar um elemento que satisfaça a condição formulada na arrow function
    // .some retorna true e não continua a verificação
    // a arrow function verifica se algum elemento de classNames é um dos elementos
    // que pode ser retornado por classNameOfClickedElement
    if(shouldClosePopup){
        popup.style.display = 'none'
    }
}) 