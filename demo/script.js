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
  
    if (infoAboutRam.power > infoAboutKrishna.power && ramNamePower > krishnaNamePower) {
      return `${infoAboutRam.name} has more power`;
    } else {
      return `${infoAboutKrishna.name} has more power`;
    }
  }
  
  console.log(morePower(infoAboutRam, infoAboutKrishna));