var objectOne = {
    name:'Ram',
    age:25,
    yuga:'Treta'
}

var objectTwo = {
    name:'Krishna',
    age:31,
    yuga:'Dwapar'
}

function biggerrAge(objectOne,objectTwo){
    if(objectOne.age>objectTwo.age){
        return objectOne.name
    }
    else
    {
        return objectTwo.name
    }
}

console.log(biggerrAge(objectOne,objectTwo));