const btn = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

function showPopup(){
    popup.style.display = 'block'
}

btn.addEventListener('click', showPopup)

