

var infoAboutRam = {
  name: "Ram ",
  age: "Treta",
  power: 2500,
};
var infoAboutKrishna = {
  name: "Krishna",
  age: "Dwapar",
  power: 2325,
};

function morePower(infoAboutRam, infoAboutKrishna) {
  var ramNamePower = infoAboutRam.name.length * 35;
  var krishnaNamePower = infoAboutKrishna.name.length * 35;
  var totalPowerOfRam = infoAboutRam.power+ramNamePower;
  var totalPowerofKrishna = infoAboutKrishna.power+krishnaNamePower;

  if (totalPowerOfRam > totalPowerofKrishna) {
    return `${infoAboutRam.name} has more power`;
  } else {
    return `${infoAboutKrishna.name} has more power`;
  }
}

console.log(morePower(infoAboutRam, infoAboutKrishna));
