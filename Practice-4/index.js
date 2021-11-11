const incrementButton = document.querySelector(".btn-increment");
const decrementButton = document.querySelector(".btn-decrement");
const result = document.querySelector(".result");

let counter = 0;
result.textContent=counter

incrementButton.addEventListener("click", () => {
  counter++;
  result.textContent = counter;
});

decrementButton.addEventListener("click", () => {
  if (counter >0) {
    counter--;
    result.textContent = counter;
  }
});
