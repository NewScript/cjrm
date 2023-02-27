const funcoes = [

    function(){ return 'Ola'},

    function(){
        return 'Meu'
    },

    ()=>'Mundo'
]

let frase = ''

for(let i = 0; i < funcoes.length; i++){
    frase += `${funcoes[i]()} `
}

console.log(frase)

// -------------------------------------------


const drobo1 = (number = 0) => {
    return 2 * number
}

const drobo2 = number => {
    return 2 * number
}
// Na versão acima não é possível
// atribuição de parâmetro default

let number =0
const drobo3 = () => {
    return 2 * number
}

const drobo4 = number => 2 * number

//const drobo5 = number => if(2===2)console.log('Dois')
// Desta forma não pode retornar uma expressão

// Achei uma exceção
const drobo5 = () => 3 > 4 ? 'sim':'não'

console.log(drobo5())

//-------------------------------------------------

const myFunc = callback => {
    const value = 77
    callback( value )
}

myFunc( number => console.log(number) )

//------------------------------------------------

const socialNetworks = [ 'youtube', 'twitter', 'instagram', 'facebook']

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(`${index} - ${socialNetwork} - ${array}`)
}

socialNetworks.forEach( logArrayInfo )

//------------------------------------------------

const ul = document.querySelector(`[data-js="ul"]`)

const socialNetworks2 = [ 'youtube', 'twitter', 'instagram', 'facebook']

let HTMLTemplate = ''

socialNetworks2.forEach(socialNetwork => {
    HTMLTemplate +=`<li style="color: deepink;"> ${socialNetwork} </li>`
})

ul.innerHTML = HTMLTemplate