const form = document.querySelector('.sigup-form')
const userNameInput = document.querySelector('#userName')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log(event.target.userName.value)
})

