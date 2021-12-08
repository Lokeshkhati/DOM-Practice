const inputText = document.querySelector(".input-text");
const increaseButton = document.querySelector(".increase-btn");
const decreaseButton = document.querySelector(".decrease-btn");
const output = document.querySelector(".output");

let counter = 16;
increaseButton.addEventListener("click", function () {
  counter = counter + 2;
  output.innerText = inputText.value;

  output.style.fontSize = `${counter}px`;
});

decreaseButton.addEventListener("click", function () {
  counter = counter - 2;
  output.innerText = inputText.value;

  output.style.fontSize = `${counter}px`;
});
