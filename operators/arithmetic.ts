var num: number = parseInt(prompt('Enter number:'));
var i: number = 1;

for (i; i <= num; i++) {
    if (i % 5 === 0) continue;
    console.log(i)
}


i = 0;
while (i < num) {
    i++;
    if (i % 5 === 0) { continue };
    console.log(i)
}