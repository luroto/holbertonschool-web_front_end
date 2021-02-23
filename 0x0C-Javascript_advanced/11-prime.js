#!/usr/bin/node
//Exercising time for executing a function in a loop

function countPrimeNumbers() {
    let primes = [2];
    for (let i = 2; i <= 100; i++ ) {
        if (i % 2 !== 0) {
            let isPrime = true;
            for (let prime  of primes) {
                if (i % prime === 0) {
                    isPrime = false;
                    break;
                };
            };
            if (isPrime) {
                primes.push(i);
            };
        };
    };
    return(primes.length);
};

let t0 = performance.now();
let i = 0;
setTimeout(() => {
    while (i < 100) {
        console.log(countPrimeNumbers());
        i++;
    };    
}, 1);
let t1 = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (t1 - t0) + " milliseconds.");