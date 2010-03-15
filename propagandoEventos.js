const body = document.body
const div = document.querySelector('div')
const pes = document.querySelectorAll('p')
const button = document.querySelector('button')


body.addEventListener('click', (e)=>{
    // e.stopPropagation()
    // console.log('Clicou no body')
})

div.addEventListener('click', (e)=>{
    // e.stopPropagation()
    const clickedElement = e.target
    console.log(clickedElement)
    if(clickedElement.tagName === 'P'){
        clickedElement.remove()
    }
    
})

// pes.forEach(pe=>{
//     pe.addEventListener('click', (e)=>{
//         e.stopPropagation()
//         console.log('Clicou no p = ' + e.target.innerText)
//     })
// })

button.addEventListener('click', () => {
    let newP = document.createElement('p')
    newP.innerText = 'Item: '+ Math.round(Math.random()*10)
    div.append(newP)
})