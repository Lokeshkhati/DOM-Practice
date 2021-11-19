const inputField =document.querySelector('.input-field')
const errorMessage = document.querySelector('.error-msg')

inputField.addEventListener('keyup',()=>{
    
    if(inputField.value.length>10){
        errorMessage.textContent ='success'
    }
    else{
        errorMessage.textContent ='error'
    }
})