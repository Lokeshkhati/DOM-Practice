var objectOne = {
  name: "Ram",
  age: "Treta",
  power: 2500,
};
var objectTwo = {
  name: "Krishna",
  age: "Dwapar",
  power: 2350,
};

function morePower(objectOne, objectTwo) {
  if (Number(objectOne.power) > Number(objectTwo.power)) {
    return `${objectOne.name} has more power`;
  } else {
    return `${objectTwo.name} has more power`;
  }
}

console.log(morePower(objectOne, objectTwo));
