// 7) Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

const inputField = document.querySelector(".input-field");
const output = document.querySelector(".output");
const firstButton = document.querySelector(".first-btn");
const secondButton = document.querySelector(".second-btn");
const thirdButton = document.querySelector(".third-btn");

firstButton.addEventListener("click", function () {
    let inputFieldValue =inputField.value; 
  output.textContent = inputFieldValue
  output.innerHTML= `<h1>${inputFieldValue}</h1>`
});

secondButton.addEventListener("click", function () {
    let inputFieldValue =inputField.value; 
  output.textContent = inputFieldValue
  output.innerHTML= `<h2>${inputFieldValue}</h2>`
});
thirdButton.addEventListener("click", function () {
    let inputFieldValue =inputField.value; 
  output.textContent = inputFieldValue
  output.innerHTML= `<h3>${inputFieldValue}</h3>`
});