"use strict";

function checkNumber(n) {
	while (isNaN(n) || n < 0) {
		n = +prompt("Att: Enter positive \"value\" include ZERO :", "");
	}
	return n;
}

let a = +prompt("Enter \"a\":", "");
a = checkNumber(a);
let b = +prompt("Enter \"b\":", "");
b = checkNumber(b);
while (a >= b) {
	b = +prompt("\"b\" must be more than \"a\" || (\"b\" > \"a\")   Enter value \"b\" one more:", "");
}
console.log(`Value \"a\":`, a, `Value \"b\":`, b);

let h = +prompt("Enter Loop Step \"h\":", "");

while (isNaN(h) || h <= 0 || h > b) {
	h = +prompt("Att: Enter positive \"value\" more than ZERO , smaller than \"b\":", "");
}
console.log(`Step \"h\":`, h);

let sum = 0;

for (let i = a; i <= b; i += h) {
	let numFact = 1;
	for (let j = 1; j <= i; j++) {
		numFact *= j;
	}
	sum += numFact;
	console.log(`Fact ${i}!:`, numFact);
}
console.log(`Total sum:`, sum);

//**************Second method*************** */

//function factorial(n) {
//	if (n === 0) {
//		return 1;
//	} else {
//		let factNum = 1;
//		for (let i = 1; i <= n; i++) {
//			factNum *= i;
//		}
//		return factNum;
//	}
//}

//function checkNumber(n) {
//	while (isNaN(n) || n < 0) {
//		n = +prompt("Att: Enter positive \"value\" include ZERO :", "");
//	}
//	return n;
//}

//let a = +prompt("Enter \"a\":", "");
//a = checkNumber(a);
//let b = +prompt("Enter \"b\":", "");
//b = checkNumber(b);
//while (a >= b) {
//	b = +prompt("\"b\" must be more than \"a\" || (\"b\" > \"a\")   Enter value \"b\" one more:", "");
//}
//console.log(`Value \"a\": ${a}, Value \"b\": ${b}`);

//let h = +prompt("Enter Loop Step \"h\":", "");

//while (isNaN(h) || h <= 0 || h > b) {
//	h = +prompt("Att: Enter positive \"value\" more than ZERO , smaller than \"b\":", "");
//}
//console.log(`Step \"h\": ${h}`);

//let sum = 0;
//for (let i = a; i <= b; i += h) {
//	console.log(`${i}!`, factorial(i));
//	sum += factorial(i);
//}
//console.log(`Total \"sum\": ${sum}`);



