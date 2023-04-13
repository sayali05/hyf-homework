// Doubling of number

let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers = numbers
	.filter((number) => number % 2 !== 0)
	.map((oddNum) => oddNum * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]
