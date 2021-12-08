const inputText = document.querySelector('.input-text')
const inputPassword = document.querySelector('.input-password')
const checkButton = document.querySelector('.check-btn')
const outputDiv = document.querySelector('.output')

checkButton.addEventListener('click',()=>{
   if(inputPassword.value.includes(inputText.value))
   {
       outputDiv.textContent = "both field can not be same"
   }
  else{
    outputDiv.textContent = "both "
  }
})