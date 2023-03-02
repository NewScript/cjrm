const btn = document.querySelector('button')
const userNameInput = document.querySelector('#userName')
const expressaoRegex = document.querySelector('#expressaoRegex')
const result = document.querySelector('#result')

btn.addEventListener('click', ()=>{
    const pattern = eval(expressaoRegex.value)
    result.value = pattern.test(userNameInput.value)
})
