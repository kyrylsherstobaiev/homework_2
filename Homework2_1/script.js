"use strict";

let num1 = 0;
let num2 = 1;
let NumNext;

let seqNumbers = +prompt("Enter the number of sequence except zero:");

while (isNaN(seqNumbers) || seqNumbers == 0) {
	seqNumbers = +prompt("Attn: You should enter a number except ZERO! Try again :", "");
}

if (seqNumbers >= 1) {
	let i = 1;
	while (i <= seqNumbers) {
		i++;
		console.log(num1);
		NumNext = num1 + num2;
		num1 = num2;
		num2 = NumNext;
	}
} else {
	let i = -1;
	while (i >= seqNumbers) {
		i--;
		console.log(num1);
		NumNext = num1 - num2;
		num1 = num2;
		num2 = NumNext;
	}
}


