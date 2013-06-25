#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var ulimit = 100;

var num_primes = 0
for (var i = 1; num_primes <=ulimit; i++) {
    if (checkPrime (i)) {
	fs.appendFileSync(outfile, i);
	console.log ("Wrote: " + i + " as prime.");
	num_primes++;
	if (num_primes != ulimit) {fs.appendFileSync(out file, ",");}
    }
}
 
// console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

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
