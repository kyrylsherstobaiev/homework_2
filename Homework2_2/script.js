"use strict";

//*calculate Factorial 

function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		let factNum = 1;
		for (let i = 1; i <= n; i++) {
			factNum *= i;
		}
		return factNum;
	}
}

function checkNumber(n) {
	while (isNaN(n) || n < 0) {
		n = +prompt("Att: Enter value positive value include ZERO :", "");
	}
	return n;
}

let a = +prompt("Enter a:", "");
a = checkNumber(a);
let b = +prompt("Enter b:", "");
b = checkNumber(b);

console.log(`Value a: ${a}, Value b: ${b}`);

if (a < b) {
	let h = +prompt("Enter Loop Step:", "");

	while (isNaN(h) || h <= 0 || h > b) {
		h = +prompt("Att: Enter positive value more than ZERO , bigger than `a` and smaller than `b`:", "");
	}
	console.log(`Step h: ${h}`);

	let sum = 0;
	for (let i = a; i <= b; i += h) {
		console.log(`${i}!`, factorial(i));
		sum += factorial(i);
	}
	console.log(`Total sum: ${sum}`);
} else {
	console.log(`Wrong values:${b}>=${a}`);
}

