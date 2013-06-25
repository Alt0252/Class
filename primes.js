#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";

var num_primes = 0
for (var i = 1; num_primes <=5; i++) {
    if (checkPrime (i)) {
	fs.writeFileSync(outfile, i + ",");
	console.log ("Wrote: " + i + " as prime.\n");
    }
}
 
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

function checkPrime (num) {
    if (num < 2) return false; 

    var last = parseInt(Math.sqrt(num)); //the square root of num determines the test set  

    //check if evenly divisible up to the square root.
    for (var i = 2; i <= last; i++) {
        if (num % i == 0) {
            return false; //factor found
        }
    }

    return true; // no factor found.  Number is prime
}
