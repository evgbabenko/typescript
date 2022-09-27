var isPrime = function (n) {
    if (n < 2) {
        console.log("Entered number ".concat(n, " must be > 2."));
    }
    else if (n < 4) {
        console.log("Entered number ".concat(n, " is prime."));
    }
    else if (n % 2 === 0 || n % 3 === 0) {
        console.log("Entered number ".concat(n, " is not prime."));
    }
    else {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                console.log("Entered number ".concat(n, " is not prime."));
            }
            console.log("Entered number ".concat(n, " is prime."));
        }
    }
};
isPrime(102);
