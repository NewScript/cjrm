const hour = 456

const isMorning = hour >=6 && hour <= 11
// Entre 6 e 11

const isAfternoon = hour >=12 && hour <= 17
// Entre 12 e 18

if(isMorning){
    console.log('Bom dia')
}else if(isAfternoon){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}


// O else, 'boa noite' será executado sempre
// que não estiver entre isMorning e isAfternoon
// isso significa, 23 -97 4400 210 etc