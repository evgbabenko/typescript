var studentScores = new Map([['Kohn', 90], ['bob', 80], ['mat', 50]]);
console.log(studentScores.get('Kohn'));
studentScores.set('log', 100);
console.log(studentScores.size);
studentScores["delete"]('log');
console.log(studentScores.keys());
for (var _i = 0, _a = Array.from(studentScores.keys()); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
    console.log(studentScores.get(key));
}
console.log(studentScores.entries());
