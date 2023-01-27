// Exibindo pontuações de um jogo
// Pontuação mínima, 0, não deve ser exibida
// Pontuação máxima atingida, não deve ser
// exibido scores posteriores a pontuação
// mmáxima

const scores = [50,25,0,30,100,20,10]
let scoresShow = []

console.log('Pontuações: ', scores.toString())

for( let i = 0; i < scores.length; i++){

    // Pontuação mínima
    if( scores[i] === 0){
        console.log('Você atingiu a pontuação máxima');
        continue
    };

    // Pontuação máxima
    if(scores[i] === 100){
        break
    }

    // Coninuando loop - Pontuação
    scoresShow.push(scores[i])
}

console.log('Pontuações exibidas: ', scoresShow.toString())

