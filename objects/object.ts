var student = {
    fisrtName: 'John',
    lastName: 'Barley',
    score: 90
};

console.log(student.fisrtName);
console.log(student.score);

for (var item in student) {
    console.log(item);
    console.log(student[item]);
}

var { fisrtName, lastName } = student;