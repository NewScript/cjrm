const numbers = [1, 2, 3]

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult)

const phaseScore = [
    { name: 'Carlos', score: 337 },
    { name: 'Davi', score: 234 },
    { name: 'Elaine', score: 491 },
    { name: 'Idalina', score: 135 },
    { name: 'Carlos', score: 137 },
    { name: 'Carlos', score: 359 },
]

const carlosScore = phaseScore.reduce((accumulator, phaseScore) => {
    if(phaseScore.name == 'Carlos'){
        accumulator += phaseScore.score
    }
    return accumulator
}, 0)

console.log(`Carlos tem ${carlosScore} pontos`)