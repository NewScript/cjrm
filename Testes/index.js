const pai1 = document.querySelector('#pai1')
const pai2 = document.querySelector('#pai2')

pai1.addEventListener('click', event => {
    console.log(event.target.id)
    console.log(event.target.pai.id)
    console.log(event.target.filho1.id)
    console.log(event.target.filho2.id)
    console.log(event.target.filho3.id)
    console.log(event.target.neto.id)
})



pai2.addEventListener('click', event => {
    event.preventDefault()
    console.log(event.target.id)
    console.log(event.target.pai2)
    console.log(event.target.filho1.value)
    console.log(event.target.filho2.value)
    console.log(event.target.filho3.value)
    console.log(event.target.neto.value)
})