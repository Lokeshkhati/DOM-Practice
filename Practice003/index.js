const inputText = document.querySelector(".input-text");
const inputPassword = document.querySelector(".input-password");
const outputDiv = document.querySelector(".output");
const checkButton = document.querySelector(".check-btn");

checkButton.addEventListener("click", () => {
    let passwordValue = inputPassword.value;
    let textValue = inputText.value;
    if (passwordValue.includes(textValue)) {
      outputDiv.textContent = "Name and Password can not be same";
    } else {
      outputDiv.textContent = "Success";
    }
});
