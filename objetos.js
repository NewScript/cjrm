let user = {
    name: 'João',
    idade: 48,
    preferecncias: ['cha','café', 'cevada'],
    exibir: ()=>console.log(user.name)
}

console.log(user)

console.log(user.name)

console.log(user.preferecncias[2])

user.sexo = 'm'

console.log(user)

user.exibir();

console.log(user['idade'])

let show = {
    exibir: function(){
        console.log(user.name)
    }
}

show.exibir()

show.cabelo = ()=>console.log('preto')

show.cabelo()

//------------------------------------------------

const letra = ['a','b','c','d']

console.log(letra.includes('a'))
console.log(letra.includes('f'))

console.log(['a','b','c','d'].includes('a'))
console.log(['a','b','c','d'].includes('f'))

//------------------------------------------------

const getTypeDefinition = type => {
    const obj = {
        null: 'Seta, explicitamente, uma variável sem valor',
        undefined: 'Representa um valor não-setado (não atribuido)',
        object: 'Arrays, Datas, Objetos literais, Funções, etc'
    }
    return obj[type]
}

console.log(getTypeDefinition('null'))
console.log(getTypeDefinition('undefined'))
console.log(getTypeDefinition('object'))


//-------------------------------

let message = 'ola mundo'

for(let i = 0;i < 5; i++){
    message += `
    - ${message}`
}

console.log(message)

//---------------------------------


if(true){
    var dragon = 'Balerion'
    console.log('Dentro do if: ',dragon);
}

console.log('Fora do if: ',dragon);