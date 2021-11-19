const inputField = document.querySelector(".input-field");
const button = document.querySelector(".btn");
const outputMessage = document.querySelector(".output-message");

button.addEventListener("click", () => {
  let firstNumber = 3;
  let secondNumber = 7;
  let thirdNumber = 9;
  let inputFieldValue = inputField.value;

  if( 
    inputFieldValue % firstNumber === 0 && inputFieldValue % secondNumber === 0 && inputFieldValue % thirdNumber === 0
  ) {
    outputMessage.textContent = `divisible by ${firstNumber} and ${secondNumber} and ${thirdNumber}`;
  }
 else if( 
    inputFieldValue % firstNumber === 0 && inputFieldValue % thirdNumber === 0
  ) {
    outputMessage.textContent = `divisible by ${firstNumber} and ${thirdNumber}`;
  }
 else if( 
    inputFieldValue % firstNumber === 0 && inputFieldValue % secondNumber=== 0
  ) {
    outputMessage.textContent = `divisible by ${firstNumber} and ${secondNumber}`;
  }
  else if (inputFieldValue % firstNumber === 0) {
    outputMessage.textContent = `divisible by ${firstNumber}`;
  } else if (inputFieldValue % secondNumber === 0) {
    outputMessage.textContent = `divisible by ${secondNumber}`;
  } 
  
    else {
    outputMessage.textContent = 'out of range';
  }
});

