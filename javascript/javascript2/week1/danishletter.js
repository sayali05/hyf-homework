//Code For Find and count the Danish letters
const danishString = "Jeg har en blå bil";

const danishString2 = "Blå grød med røde bær";

function getCountOfDanishLetters(text) {
	const textArray = text.split("");
	const danishLetters = { total: 0, æ: 0, ø: 0, å: 0 };

	for (let i = 0; i < textArray.length; i++) {
		let character = text.charAt(i);
		if (text[i] === "å") {
			danishLetters.å += 1;
			danishLetters.total += 1;
		} else if (text[i] === "ø") {
			danishLetters.ø += 1;
			danishLetters.total += 1;
		} else if (text[i] === "æ") {
			danishLetters.æ += 1;
			danishLetters.total += 1;
		}
	}
	//to delete the letters which is having 0 count
	for (const item in danishLetters) {
		if (danishLetters[item] === 0) {
			delete danishLetters[item];
		}
	}
	return danishLetters;
}
console.log(getCountOfDanishLetters(danishString)); // returns {total: 1, å: 1}
console.log(getCountOfDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}
//End of Code For Find and count the Danish letters
