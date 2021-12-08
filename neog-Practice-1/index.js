const inputFirst = document.querySelector("#input-first");
const inputSecond = document.querySelector("#input-second");
const output = document.querySelector(".output");
const additionButton = document.querySelector(".addition");
const subtractionButton = document.querySelector(".subtraction");
const multiplicationButton = document.querySelector(".multiplication");
const divisionButton = document.querySelector(".division");

additionButton.addEventListener("click", function () {
  let numberOne = inputFirst.value;
  let numberTwo = inputSecond.value;
  let sum = Number(numberOne) + Number(numberTwo);
  output.innerText = sum;
});

subtractionButton.addEventListener("click", function () {
    let numberOne = inputFirst.value;
    let numberTwo = inputSecond.value;
    let sub = Number(numberOne) - Number(numberTwo);
    output.innerText = sub;
  });

  multiplicationButton.addEventListener("click", function () {
    let numberOne = inputFirst.value;
    let numberTwo = inputSecond.value;
    let product = Number(numberOne) * Number(numberTwo);
    output.innerText = product;
  });
  
  divisionButton.addEventListener("click", function () {
      let numberOne = inputFirst.value;
      let numberTwo = inputSecond.value;
      let division = Number(numberOne) / Number(numberTwo);
      output.innerText = division;
    });
    
  