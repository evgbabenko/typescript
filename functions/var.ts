var math: number = parseInt(prompt('Enter Math Grade'));
var physics: number = parseInt(prompt('Enter Physics Grade'));
var chemestry: number = parseInt(prompt('Enter Chemestry Grade'));

function calculator(math: number = 0, physics: number = 0, chemestry: number = 0) {
    var average: number = (math + physics + chemestry) / 3;
    if (average < 70) {
        console.log('C Grade');
    } else if (average > 70 && average < 90) {
        console.log('B Grade')
    } else if (average > 90) {
        console.log('A Grade')
    }
    else {
        console.log('Somethin go wrong');
    }
}

calculator(math, physics, chemestry);