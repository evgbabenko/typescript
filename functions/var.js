var math = parseInt(prompt('Enter Math Grade'));
var physics = parseInt(prompt('Enter Physics Grade'));
var chemestry = parseInt(prompt('Enter Chemestry Grade'));
function calculator(math, physics, chemestry) {
    if (math === void 0) { math = 0; }
    if (physics === void 0) { physics = 0; }
    if (chemestry === void 0) { chemestry = 0; }
    var average = (math + physics + chemestry) / 3;
    if (average < 70) {
        console.log('C Grade');
    }
    else if (average > 70 && average < 90) {
        console.log('B Grade');
    }
    else if (average > 90) {
        console.log('A Grade');
    }
    else {
        console.log('Somethin go wrong');
    }
}
calculator(math, physics, chemestry);
