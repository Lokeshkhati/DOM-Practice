const button = document.querySelector('.btn')
const output = document.querySelector('.output')

let counter = 0
output.textContent = counter;
button.addEventListener("click", () => {
    counter++;
    output.textContent = counter;
 
  });