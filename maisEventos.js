const paragraph = document.querySelector(".copy-me")

// console.log(paragraph)

paragraph.addEventListener('copy', ()=>{
    console.log("Algo copiado sem autorização")
})

const div = document.querySelector('.box')

div.addEventListener('mousemove', event => {
    div.textContent = `Movendo o mouse X: ${event.offsetX} Y: ${event.offsetY}`
})

document.addEventListener('wheel', event => {
    div.textContent = `Movendo o pagina X: ${event.pageX} Y: ${event.pageY}`

})