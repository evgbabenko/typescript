/* var s1:string='<a href=""/>';
var userName: string = 'GGGGG';
var s2:string = `My name is ${userName}`;
console.log(s2);
console.log(s2.length);
console.log(s2.charAt(0));
console.log(s2.indexOf('n')); */
var n1 = 20;
console.log(n1);
var n2 = 3.14;
console.log(n2);
var s1 = 'Success is the best revenge';
console.log(s1);
var dayOfWeeks;
(function (dayOfWeeks) {
    dayOfWeeks[dayOfWeeks["Sunday"] = 0] = "Sunday";
    dayOfWeeks[dayOfWeeks["Monday"] = 1] = "Monday";
    dayOfWeeks[dayOfWeeks["Tuesday"] = 2] = "Tuesday";
    dayOfWeeks[dayOfWeeks["Wednesday"] = 3] = "Wednesday";
    dayOfWeeks[dayOfWeeks["Thursday"] = 4] = "Thursday";
    dayOfWeeks[dayOfWeeks["Friday"] = 5] = "Friday";
    dayOfWeeks[dayOfWeeks["Saturday"] = 6] = "Saturday";
})(dayOfWeeks || (dayOfWeeks = {}));
console.log(dayOfWeeks);
