const inputField = document.querySelector(".input-field");
const checkButton = document.querySelector(".check-btn");
const outputDiv = document.querySelector(".output");
const togglePassword = document.querySelector(".toggle");

var addFlag = false;

togglePassword.addEventListener("click", function () {
  addFlag = !addFlag;
  if (addFlag) {
    togglePassword.textContent = "Hide";
  } else {
    togglePassword.textContent = "Show";
  }
  showHidePassword();
});

function showHidePassword() {
  if (inputField.type === "password") {
    inputField.type = "text";
  } else {
    inputField.type = "password";
  }
}

checkButton.disabled = true;
inputField.addEventListener("keyup", passwordValidator);

function passwordValidator() {
  if (inputField.value.length >= 10) {
    inputField.style.backgroundColor = "green";
    outputDiv.textContent = "Success";
    checkButton.disabled = false;
  } else {
    inputField.style.backgroundColor = "red";
    outputDiv.textContent = "Error";
    checkButton.disabled = true;
  }
}
