const inputField = document.querySelector(".input-field");
const outputField = document.querySelector(".output-field");
const btnRed = document.querySelector(".btn-red");
const btnGreen = document.querySelector(".btn-green");
const btnBlue = document.querySelector(".btn-blue");

btnRed.addEventListener("click", () => {
  let inputFieldValue = inputField.value;
  outputField.textContent = inputFieldValue;
  outputField.style.color = "red";
});

btnGreen.addEventListener("click", () => {
  let inputFieldValue = inputField.value;
  outputField.textContent = inputFieldValue;
  outputField.style.color = "green";
});
btnBlue.addEventListener("click", () => {
  let inputFieldValue = inputField.value;
  outputField.textContent = inputFieldValue;
  outputField.style.color = "blue";
});
