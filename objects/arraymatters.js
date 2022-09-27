var employee = {
    id: 1,
    empName: 'John',
    salary: 2000
};
for (var item in employee) {
    console.log("".concat(item, " = ").concat(employee[item]));
}
var id = employee.id, empName = employee.empName, salary = employee.salary;
console.log("".concat(id, " ").concat(empName, " ").concat(salary));
var vaccines = ['J&J', 'Pfizer', 'Sputnik'];
vaccines.push('Covaxin');
for (var i = 0; i < vaccines.length; i++) {
    console.log(vaccines[i]);
}
var a = vaccines[0], b = vaccines[1], c = vaccines[2], d = vaccines[3];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
