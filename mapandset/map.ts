let studentScores = new Map([['Kohn', 90],['bob',80],['mat',50]]);

console.log(studentScores.get('Kohn'));
studentScores.set('log', 100);
console.log(studentScores.size);
studentScores.delete('log');
console.log(studentScores.keys());
for (let key of Array.from(studentScores.keys())){
    console.log(key);
    console.log(studentScores.get(key))
}
console.log(studentScores.entries());