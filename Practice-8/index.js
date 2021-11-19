const inputField = document.querySelector('.input-field')
const button = document.querySelector('.btn')
const output = document.querySelector('.output')

button.addEventListener('click',()=>{

    let inputFieldValue = inputField.value;
    output.textContent = inputFieldValue;

    if(inputFieldValue%2===0){
        output.style.color="green"
    }
    else{
        output.style.color="red"
    }
})

