const inputPassword = document.querySelector(".input-password");
const checkButton = document.querySelector(".check-btn");
const outputDiv = document.querySelector(".output");

checkButton.disabled=true;
checkButton.addEventListener("click", () => {
  var passwordValue = inputPassword.value;

  if (passwordValue.length < 10) {
    outputDiv.textContent = "Error";
  } else {
    outputDiv.textContent = "Success";
  }
});

inputPassword.addEventListener("keyup", () => {
    var passwordValue = inputPassword.value;
  
    if (passwordValue.length > 10) {
      checkButton.disabled = false;
    } else {
      checkButton.disabled = true;
    }
    
  });
  