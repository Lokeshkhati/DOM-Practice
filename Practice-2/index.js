const inputField = document.querySelector(".input-field");
const outputField = document.querySelector(".output-field")
const btnLarge = document.querySelector(".btn-large");
const btnSmall = document.querySelector(".btn-small");

let font = 16;
btnLarge.addEventListener("click", function () {
    font+=2
  let inputFieldValue = inputField.value;
  outputField.textContent =inputFieldValue
  outputField.style.fontSize=`${font}px`
 
});
btnSmall.addEventListener("click", function () {
    font-=2
    let inputFieldValue = inputField.value;
    outputField.textContent =inputFieldValue
    outputField.style.fontSize=`${font}px`
  });
  
