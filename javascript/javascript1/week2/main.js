//Flight booking fullname function
function getFullname(firstname, surname, gender, useFormalName) {
	if (gender === "male" && useFormalName === true) {
		return "Your client full name is Lord " + firstname + " " + surname;
	} else if (gender === "female" && useFormalName === true) {
		return "Your client full name is Queen " + firstname + " " + surname;
	} else if (gender === "" && useFormalName === true) {
		return "Your client full name is " + firstname + " " + surname;
	} else {
		return "Please provide valid information";
	}
}
console.log(getFullname("Joy", "Kumar", "male", true));
console.log(getFullname("Riya", "Kumari", "female", true));
console.log(getFullname("Oscar", "Roy", "", true));
console.log(getFullname("", "", "", false));

//End of Flight booking fullname function

//Event application
function getEventWeekday(days) {
	const weekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const todaysDate = new Date();
	let today = todaysDate.getDay();
	//console.log("Today is the " + weekdays[day]);

	let eventDate = (today + days) % 7;
	let eventweekday = weekdays[eventDate];
	console.log(
		`Today is ${weekdays[day]} and the event is in ${days} days. Therefore the event will be held on a ${eventweekday}.`
	);
}

console.log(getEventWeekday(14));

//End of Event application

//Weather wear
function getClothsBasedOnTempreture(tempreture) {
	if (tempreture <= 10) {
		return "winter jackets with thermal set";
	} else if (tempreture > 10 && tempreture <= 25) {
		return "woolen jackets";
	} else if (tempreture > 25 && tempreture <= 40) {
		return "shorts and a t-shirt";
	} else {
		return "cotton  cloths";
	}
}
const clothesToWear = getClothsBasedOnTempreture(18);
console.log(clothesToWear);
//End of Weather wear

//Student manager
const class07Students = [];
function addStudentToClass(studentName) {
	// You write code here

	if (class07Students.length >= 6 && studentName !== "Queen") {
		console.log("Cannot add more students to class 07");
	} else if (class07Students.includes(studentName)) {
		console.log(`Student ${studentName} is already in the class`);
	} else if (studentName === " ") {
		console.log("Enter Name");
	} else if (studentName === "Queen") {
		class07Students.push(studentName);
	} else if (class07Students.length <= 6) {
		class07Students.push(studentName);
	}
}
addStudentToClass("Sayali");
addStudentToClass("Sameema");
addStudentToClass("Sameema");
addStudentToClass(" ");
addStudentToClass("Remya");
addStudentToClass("Upasana");
addStudentToClass("Marie");
addStudentToClass("Arav");
addStudentToClass("Arash");
addStudentToClass("Queen");

function getNumberOfStudents() {
	// You write code here
	return class07Students.length;
}
console.log("Total " + getNumberOfStudents() + " of students in the class");
console.log(class07Students);

//End of Student manager

//Candy helper
const candyPrice = {
	Sweet: 0.5,
	Chocolate: 0.7,
	Toffee: 1.1,
	Chewing_gum: 0.03,
};
const boughtCandyPrices = [];
function addCandy(candyType, weight) {
	switch (candyType) {
		case "Sweet":
			boughtCandyPrices.push(weight * 0.5);
			break;
		case "Chocolate":
			boughtCandyPrices.push(weight * 0.7);
			break;
		case "Toffee":
			boughtCandyPrices.push(weight * 1.1);
			break;
		case "Chewing_gum":
			boughtCandyPrices.push(weight * 0.03);
			break;
	}
}
const amountToSpend = Math.floor(Math.random() * 100);
let totalAmountRemaining = 0;

function canBuyMoreCandy() {
	for (let i = 0; i < boughtCandyPrices.length; i++) {
		totalAmountRemaining = totalAmountRemaining + boughtCandyPrices[i];
	}

	if (totalAmountRemaining > amountToSpend) {
		return "You can buy more, so please do!";
	} else {
		return "Enough candy for you!";
	}
}
addCandy("Sweet", 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices
addCandy("Chocolate", 30);
addCandy("Toffee", 40);
addCandy("Chewing_gum", 50);

console.log(canBuyMoreCandy());
//End of Candy helper
