/* Javascript week1 homework*/

//Start of A future age calculator
console.log("A future age calculator");
const yearOfBirth = 1990;
const yearFuture = 2040;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);
//End of future age calculator

//Start of A dog age calculator
console.log("A dog age calculator");
const dogYearOfBirth = 2000;
const dogYearFuture = 2030;
const dogYear = 50;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
	console.log(`Your dog will be ${dogYear} in ${dogYearFuture}`);
} else {
	console.log(
		`Your dog will be ${dogYearFuture - dogYearOfBirth} in ${dogYearFuture}`
	);
}
// End of A dog age calculator

// Start of Housey pricey (A house price estimator)
const peterHouse = {
	width: 8,
	depth: 10,
	height: 10,
	gardensize: 100,
	house_cost: 2500000,
};

const juliaHouse = {
	width: 5,
	depth: 11,
	height: 8,
	gardensize: 70,
	house_cost: 1000000,
};

function calculateHousePrice({ width, height, depth, gardensize }) {
	const volumeInMeters = width * height * depth;

	const housePrice = volumeInMeters * 2.5 * 1000 + gardensize * 300;
	return housePrice;
}

let peterHousePrice = calculateHousePrice(peterHouse);

let juliaHousePrice = calculateHousePrice(juliaHouse);

let peterFinalCost =
	peterHousePrice < peterHouse.house_cost
		? "Peter is paying high amount"
		: "Peter is paying low amount";

console.log(peterFinalCost);

let juliaFinalCost =
	juliaHousePrice < juliaHouse.house_cost
		? "Julia is paying high amount"
		: "Julia is paying low amount";

console.log(juliaFinalCost);
//End of Housey pricey (A house price estimator)

//Start of Ez Namey (Startup name generator) Optional
const firstWords = [
	"Awesome",
	"Renewable",
	"Pattern",
	"Genius",
	"Pavilion",
	"Gemini",
	"Commerce",
	"Genius",
	"Stack",
	"Meta",
];
const secondWords = [
	"Beyond",
	"Success",
	"Mantra",
	"Hot",
	"Smooth",
	"Reward",
	"Journal",
	"Carnival",
	"Council",
	"Discover",
];

let startupName;
const randomNumber = Math.floor(Math.random() * 10);
startupName = `${firstWords[randomNumber]} ${secondWords[randomNumber]}`;

let startupNameLength = startupName.length;

console.log(
	`The startup: ${startupName} conatins ${startupNameLength} characters`
);
// End of Ez Namey (Startup name generator) Optional
