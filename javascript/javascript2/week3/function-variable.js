//Create an array with 3 items. All items should be functions.
//Iterate through the array and call all the functions.

function arrOne() {
	console.log("First Function");
}
function arrTwo() {
	console.log("Second Function");
}
function arrThree() {
	console.log("Third Function");
}

const arrayList = [arrOne, arrTwo, arrThree];

arrayList.forEach((item) => item());

//Create a function as a const and try creating a function normally. Call both functions.

const testFunction = () => {
	console.log("const function");
};
testFunction();

//Function declaration
function standardFunction() {
	console.log("Standard Function");
}
standardFunction();

//Create an object that has a key whose value is a function. Try calling this function.
const characters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let result = " ";
const obj = { code: generateString(5) };

function generateString(length) {
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * 100));
	}
	return result;
}
console.log(`Your code is ${obj.code}`);
