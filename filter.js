const users = [ 
    { name: 'Carlos', premium: true },
    { name: 'Elaine', premium: true },
    { name: 'Davi', premium: false },
    { name: 'Idalina', premium: false }
]

const usersPremium = users.filter( element => element.premium)

console.log(usersPremium)

const randomNumbers = [ 36, 99, 37, 63]

const numbersGreaterThan37 = randomNumbers.filter( element => element > 37)

console.log(numbersGreaterThan37)