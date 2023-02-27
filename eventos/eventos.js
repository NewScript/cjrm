const btn = document.querySelector("button");

// Este código não funcionou até eu colocar o defer
// <script defer src="./eventos.js"></script>

btn.addEventListener('click', ()=>{
    console.log('O buttom falou');
})

const pa = document.querySelectorAll('p');

// pa.forEach(paragraph => {
//     paragraph.addEventListener('click', ()=>{
//         console.log('clicou em um p',paragraph);
//     })
// });

// paragraph.target retorna <p>texto</p>
// paragraph também retorna <p>texto</p>

pa.forEach(paragraph => {
    paragraph.addEventListener('click', event=>{
        const clickedElement = event.target
        clickedElement.style.textDecoration = 'line-through'
    })
});

pa.forEach(paragraph => {
    paragraph.addEventListener("dblclick", event=>{
        const clickedElement = event.target
        clickedElement.style.textDecoration = 'none'
    })
});