var students = [
  {
    roll: "1",
    name: "Rohan Singh",
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },

  {
    roll: "2",
    name: "Ritvik Patel",
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },

  {
    roll: "3",
    name: "Neha Maurya",
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },

  {
    roll: "4",
    name: "Mohit Verma",
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },

  {
    roll: "5",
    name: "Karan Trivedi",
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
];

for (let i = 0; i < students.length; i++) {
  var userName = students[i].name;
  var rollNo = students[i].roll;
  var mathsMarks = students[i].maths;
  var scienceMarks = students[i].science;
  var englishMarks = students[i].english;
  var computerMarks = students[i].computer;
  // console.log(userName, mathsMarks,scienceMarks,computerMarks)
  var totalMarks = mathsMarks + scienceMarks + englishMarks + computerMarks;

  console.log(`Roll ${rollNo} : ${totalMarks}`)
}
