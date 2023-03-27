//Voice assistant
let personName = "";
let todoList = [];

function getReply(command) {
	const options = {
		// weekday: "long",
		year: "numeric",
		month: "long",
	};
	const today = new Date();
	const date = today.getDate();

	const myFormattedDate =
		date + ". of " + today.toLocaleDateString("en-US", options);

	let text = command.toLowerCase();
	let response = null;

	if (
		text.includes("hello") &&
		text.includes("my") &&
		text.includes("name") &&
		personName === ""
	) {
		personName = text.split(" ").pop();

		response = `Nice to meet you ${personName}`;
	} else if (text.includes("hello my name is") && personName != "") {
		response = `${personName} Hi again!`;
	} else if (text.includes("what") && text.includes("name")) {
		response = `Your name is ${personName}`;
	} else if (text.includes("add")) {
		const toDoName = command.substring(4, command.indexOf(" to my todo"));
		todoList.push(toDoName);
		response = `${toDoName} added to your todo`;
	} else if (text.includes("remove fishing from my todo")) {
		const removedItem = todoList.splice(todoList.indexOf("fishing"), 1);
		response = `Removed ${removedItem} from your todo`;
	} else if (text.includes("what is on my todo?")) {
		response = `You have ${todoList.length} task in list to do  ${todoList}`;
	} else if (text.includes("what day is it today?")) {
		response = `Today is ${myFormattedDate}`;
	} else if (text.includes("what is")) {
		const breakString = text.replace("what is", "");
		let result = eval(breakString);
		response = `${breakString} = ${result}`;
	} else if (text.includes("set a timer for 1 minutes")) {
		const timeInMinutes = text.replace(/\D/g, "");

		setTimeout(() => {
			console.log(`Timer done`);
		}, timeInMinutes * 60 * 1000);
		return `Timer set for ${timeInMinutes} minutes`;
	} else {
		return `Sorry, I don't understand that command`;
	}
	return response;
}

console.log(getReply("Hello my name is Sayali")); // "Nice to meet you Sayali"
console.log(getReply("Hello my name is Sayali")); // "Sayali Hi again"
console.log(getReply("What is my name?")); // "Your name is Sayali"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("what is 4 - 1"));
console.log(getReply("what is 4 / 2"));
console.log(getReply("Set a timer for 1 minutes"));

//Complete these Katas in codewars:
// code for getting count of vowels
function getCount(input) {
	let vowelsCount = 0;
	const inputLetters = input.split("");

	const vowels = ["a", "e", "i", "o", "u"];

	vowels.forEach(function (vowel) {
		inputLetters.forEach(function (inpLetter) {
			if (inpLetter === vowel) {
				vowelsCount++;
			}
		});
	});

	return vowelsCount;
}
// End of code for getting count of vowels

//Code For Square of number
function squareDigits(num) {
	let ret = [];
	//Array.from(object, mapFunction, thisValue)
	let numberArr = Array.from(String(num));
	//console.log(numberArr);
	for (let i = 0, len = numberArr.length; i < len; i++) {
		ret.push(numberArr[i] * numberArr[i]);
	}
	console.log(`squareDigits(${num}) should equal ${ret.join("")}`);
	return parseInt(ret.join(""));
}
squareDigits(3212);
squareDigits(2112);
squareDigits(0);
//End of  Code For Square of number

// Code for Finding higher to lower values
function highAndLow(numbers) {
	let numbersArr = numbers.split(" ");
	let result =
		Math.max.apply(null, numbersArr) + " " + Math.min.apply(null, numbersArr);
	console.log(result);
	return result;
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
//End of Code for Finding higher to lower values
