// A assinatura da invocação desta função deverá ser
// some([1, 2, 3], item => item > 2) - Retorna true
// some([1, 2, 3], item => item > 0) - Retorna true

// Minha tentativa

// const arrayQualquer = [1,0.5,2, 4, 1]

// function some(p1, p2){
//     return p2(p1)
// }

// const retorno = some(arrayQualquer, arrayQualquer => {
//                     let boo = false
//                     arrayQualquer.forEach(element => {
//                     if(element > 2){
//                         boo = true
//                         return
//                     }
//                     });
//                     return boo
//                 })

// console.log(retorno)

// A do professor

// Primeiro ele cria a invocação do método:

// console.log(some([1,2,3], item => item > 2))
// depois desenvolve a função some

const arrayQualquer = [1,0.5,2, 1]

const some = (array , func ) => {
    for(let i = 0; i < array.length; i++){
        if(func(array[i])){
            return true
        }
    }
    return false
}

console.log(some(arrayQualquer, item => item > 2))

// Detalhe, o argumento da some, func, é uma palavra rservada
// do java script, ela permite a formulação da invocação da some
// como requerido pelo professor, não vi nada sobre isso anteriormente

// Então quando fazemos:

// const some = (array , func ) => {

// }

// Declaramos que vai ser possível, na invocação de uma função
// usar uma arraw function no segundo argumento:

// console.log(some(arrayQualquer, item => item > 2))