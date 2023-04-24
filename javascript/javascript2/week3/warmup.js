//1.Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(function () {
	console.log("Called after 2.5 seconds after the script is loaded");
}, 2500);

//2.Create a function that takes 2 parameters: delay and stringToLog.
//Calling this function should log out the stringToLog after delay seconds.
//Call the function you have created with some different arguments.

function stringToLogFunction(delay, stringToLog) {
	setTimeout(function () {
		console.log(stringToLog);
	}, delay * 1000);
}
stringToLogFunction(5, "This string logged after 5 seconds");
stringToLogFunction(3, "This string logged after 3 seconds");

//3.Create a button in html. When clicking this button,
// use the function you created in the previous task to log out the text:
//Called after 5 seconds 5 seconds after the button is clicked.

const buttonTag = document.getElementById("button");
buttonTag.addEventListener("click", () => {
	stringToLogFunction(
		5,
		"Called after 5 seconds 5 seconds after the button is clicked."
	);
});

//4.Create two functions and assign them to two different variables.
//One function logs out Earth, the other function logs out Saturn.
//Now create a new third function that has one parameter: planetLogFunction.
//The only thing the third function should do is call the provided parameter function.
//Try call the third function once with the Earth function and once with the Saturn function.

const earthLogger = () => console.log("Earth");

const saturnLogger = () => console.log("Santurn");

const planetLogFunction = (planetLogFunction) => {
	planetLogFunction();
};
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5.Create a function called runAfterDelay. It has two parameters: delay and callback.
//When called the function should wait delay seconds and then call the provided callback function.
//Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
	setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function () {
	console.log("should be logged after 4 seconds");
});
runAfterDelay(2, function () {
	console.log("should be logged after 2 seconds");
});

//Check if we have double clicked on the page. A double click is defined by two clicks
//within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
let clicks = 0;
document.addEventListener("click", doubleClickFunction);
function doubleClickFunction() {
	clicks++;
	if (clicks === 1) {
		setTimeout(() => {
			clicks = 0;
		}, 500);
	} else {
		console.log("Double Click!");
	}
}

//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
//logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it
//should call the logFunnyJoke function that should log out a funny joke. And vice versa.

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
	if (shouldTellFunnyJoke) {
		logFunnyJoke();
	} else if (!shouldTellFunnyJoke) {
		logBadJoke();
	}
};
const logFunnyJoke = () => {
	console.log(" Why do JavaScripters wear glasses? Because they don't C#");
};
const logBadJoke = () => {
	console.log(
		"Don't trust JavaScript programmers. All they do is promises but they never callback."
	);
};
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
