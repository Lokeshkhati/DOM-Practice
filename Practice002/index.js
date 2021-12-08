const inputText = document.querySelector(".input-text");
const logButton = document.querySelector(".log-btn");
const warnButton = document.querySelector(".warn-btn");
const errorButton = document.querySelector(".error-btn");
const outputDiv = document.querySelector(".output");

logButton.addEventListener("click", () => {
  outputDiv.textContent = inputText.value;

  outputDiv.style.color = "black";
});
warnButton.addEventListener("click", () => {
  outputDiv.textContent = inputText.value;

  outputDiv.style.color = "yellow";
});
errorButton.addEventListener("click", () => {
  outputDiv.textContent = inputText.value;

  outputDiv.style.color = "red";
});
