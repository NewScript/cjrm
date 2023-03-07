const form = document.querySelector('.sigup-form')
// const userName = documet.querySelector('#userName')
const feedBack = document.querySelector('#feedBack')

const testUserName = userName => /^[a-zA-Z]{6,12}$/.test(userName) //<<<

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const userName = event.target.userName.value
    const isAValidUserName = testUserName(userName) //<<<
    if(isAValidUserName){
        feedBack.textContent = 'Usuário válido'
        return
    }
    feedBack.textContent = 'Usuário deve conter entre 6 e 12' + 
    'caracteres e deve conter apenas letras'
})

form.userName.addEventListener('keyup', event => {
    // Ou userName.addEventListener...
    // keyup -> Quando libera uma tecla pressionada
    const isAValidUserName = testUserName(event.target.value) //<<<
    if(isAValidUserName){
        form.userName.setAttribute('class', 'success')
        console.log('Usuário válido')
        return
    }
    form.userName.setAttribute('class', 'error')
    console.log('Usuário inválido')
})


