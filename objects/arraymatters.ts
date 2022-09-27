var employee ={
    id: 1,
    empName: 'John',
    salary: 2000
}

for (var item in employee){
    console.log(`${item} = ${employee[item]}`);
}

var {id, empName, salary } = employee;
console.log(`${id} ${empName} ${salary}`)

var vaccines = ['J&J','Pfizer','Sputnik'];
vaccines.push('Covaxin');
for (var i=0; i< vaccines.length; i++){
    console.log(vaccines[i]);
}
var [a,b,c,d] = vaccines;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
