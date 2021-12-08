var marks = [20, 40, 30, 144, 166];

function averageMarks(marks) {
  var num = 0;
  for (var i = 0; i < marks.length; i++) {
    num += marks[i];
  }
  var avgMarks = num / marks.length;
  return avgMarks;
}
console.log(averageMarks(marks));

function highestMarks(marks) {
  var highest = 0;
  for (var i = 0; i<marks.length; i++) {
  if(marks[i]>highest){
    highest =marks[i]
  }
  }
  return highest
}

console.log(highestMarks(marks));
