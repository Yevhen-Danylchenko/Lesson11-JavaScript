const text = document.querySelector('#menu')
const button = document.querySelector('#burger')
button.addEventListener('click', ()=>{
    text.classList.toggle('hidden')
})