//Voice assistant
let personName = "";
let todoList = [];

function getReply(command) {
	var options = {
		// weekday: "long",
		year: "numeric",
		month: "long",
		//day: "numeric",
	};
	var today = new Date();
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
		//console.log("name=" + personName);
		response = `Nice to meet you ${personName}`;
	} else if (text.includes("hello my name is") && personName != "") {
		response = `${personName} Hi again!`;
	} else if (text.includes("what") && text.includes("name")) {
		response = `Your name is ${personName}`;
	} else if (text.includes("add fishing to my todo")) {
		todoList.push("fishing");
		response = `${todoList[0]} added to your todo`;
	} else if (text.includes("add singing in the shower to my todo")) {
		todoList.push("singing in the shower");
		response = `${todoList[1]} added to your todo`;
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
		let current_time = Date.parse(new Date());
		let deadline = new Date(current_time + timeInMinutes * 60 * 1000);

		function time_remaining(endtime) {
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			return {
				total: t,
				minutes: minutes,
				seconds: seconds,
			};
		}
		function run_clock(endtime) {
			function update_clock() {
				let t = time_remaining(endtime);
				let clock = t.minutes + " : minutes " + t.seconds + " : seconds";

				if (t.total <= 0) {
					clearInterval(timeinterval);
					console.log("Timer done");
				}

				response = `Timer set for ${clock}`;
				console.log(clock);
			}
			update_clock(); // run function once at first to avoid delay
			let timeinterval = setInterval(update_clock, 1000);
		}
		run_clock(deadline);
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
function getCount(input) {
	var vowelsCount = 0;
	var inputLetters = input.split("");

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
//Square of number

function squareDigits(num) {
	let ret = [];
	//Array.from(object, mapFunction, thisValue)
	let numberArr = Array.from(String(num));
	//console.log(numberArr);
	for (var i = 0, len = numberArr.length; i < len; i++) {
		ret.push(numberArr[i] * numberArr[i]);
	}
	console.log(`squareDigits(${num}) should equal ${ret.join("")}`);
	return parseInt(ret.join(""));
}
squareDigits(3212);
squareDigits(2112);
squareDigits(0);

function highAndLow(numbers) {
	let numbersArr = numbers.split(" ");
	let result =
		Math.max.apply(null, numbersArr) + " " + Math.min.apply(null, numbersArr);
	console.log(result);
	return result;
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
