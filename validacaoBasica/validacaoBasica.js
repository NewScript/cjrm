const form = document.querySelector('.sigup-form')
const feedBack = document.querySelector('#feedBack')
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const userName = event.target.userName.value
    const userNameRegex = /^[a-zA-Z]{6,12}$/
    const isAValidUserName = userNameRegex.test(userName)
    if(isAValidUserName){
        feedBack.textContent = 'Usuário válido'
        return
    }
    feedBack.textContent = 'Usuário deve conter entre 6 e 12' + 
    'caracteres e deve conter apenas letras'
})

