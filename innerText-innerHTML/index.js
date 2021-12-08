const textButton = document.querySelector('.text-btn')
const htmlButton =document.querySelector('.html-btn')
const output = document.querySelector('.output')

let message =' <h1>Hey this is lokes </h1>'

textButton.addEventListener('click',()=>{
output.innerText = message

})


htmlButton.addEventListener('click',()=>{
    output.innerHTML = message
    
    })