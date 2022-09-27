var student = {
    name: 'John',
    score: 90
};
console.log(student.name);
console.log(student.score);
for (var item in student) {
    console.log(item);
    console.log(student[item]);
}
var {name, scrore} = student;