const div = document.querySelector('div')
const btn = document.querySelector("button");
// div.remove() -> Apaga o elemento

const pa = document.querySelectorAll('p');

pa.forEach(paragraph => {
    paragraph.addEventListener('click', event=>{
        const clickedElement = event.target
        console.log(clickedElement.innerText + ' foi deletado')
        clickedElement.remove()
    })
});

// btn.addEventListener('click', ()=>{
//     // div.innerHTML += '<p>novo item</p>'
//     const pa = document.createElement('p')
//     div.append('Elemento criado no fim da div.')
//     div.prepend('Elemento criado no inicio da div')
// })

//-------------------------------------

// div está lá em cima

const pes = Array.from(div.children)

//console.log({div: div, pes: pes})
//console.log({div, pes})  //Short sintax

const insertVideoClass = pe => {
    pe.classList.add('video')
}

pes.forEach(insertVideoClass)

console.log(div)
console.log(pes)

// btn esta la em cima

const body = document.body

function apagarTodosOsElementosDoBody(){
    body.innerText = ''
}

btn.addEventListener('click', apagarTodosOsElementosDoBody)