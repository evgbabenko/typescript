var num = parseInt(prompt('Enter number:'));
var i = 1;
for (i; i <= num; i++) {
    if (i % 5 === 0)
        continue;
    console.log(i);
}
i = 0;
while (i < num) {
    i++;
    if (i % 5 === 0) {
        continue;
    }
    ;
    console.log(i);
}
