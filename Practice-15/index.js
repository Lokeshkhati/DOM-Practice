const text = document.querySelector(".text");

const counterOutput = document.querySelector(".counter-output");
let counter = 100;
counterOutput.innerText = counter;
text.addEventListener("input", () => {
 
  counter--;
  counterOutput.innerText = counter;
});
