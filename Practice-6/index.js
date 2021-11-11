const inputField = document.querySelector('.input-field')
const clickButton = document.querySelector('.click-btn')
const output = document.querySelector('.output')


clickButton.addEventListener('click',()=>{
    let inputFieldValue = inputField.value;
    let p = document.createElement('p')
    let text =document.createTextNode(inputFieldValue)
    p.appendChild(text)
    output.appendChild(p);
     inputField.value = "";

   
    
})
