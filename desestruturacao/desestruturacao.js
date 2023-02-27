const people = [
    { name: 'Carlos', idade: 49, sexo: 'm' },
    { name: 'Elaine', idade: 43, sexo: 'm' },
    { name: 'Davi', idade: 8, sexo: 'm' }
]

const isNomeElaine = people.some(({name}) => name === 'Elaine')

// console.log(isNomeElaine)

if(isNomeElaine){
    console.log('Elaine pertence ao grupo')
}

//-------

const h2 = document.querySelector('h2')

const showCoordinates = ( { offsetX, offsetY } ) => {
    h2.textContent = `Eixo X: ${offsetX} | EixoY: ${offsetY}`
}

document.addEventListener('mousemove', showCoordinates)