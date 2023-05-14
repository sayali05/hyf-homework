const startBtnTag = document.getElementById("start-btn");
const restartBtnTag = document.getElementById("restart-btn");
const durationInputTag = document.getElementById("set-time");
const sCountInputTag = document.getElementById("s-count");
const lCountInputTag = document.getElementById("l-count");
const infoTag = document.getElementById("info");
const confettiElementsTag = document.getElementsByClassName("confetti-canvas");

let sCount = 0;
let lCount = 0;
function countOfKeyPress(e) {
	const key = e.key.toLowerCase();
	if (key === "s") {
		sCount++;
		sCountInputTag.innerHTML = sCount;
	} else if (key === "l") {
		lCount++;
		lCountInputTag.innerHTML = lCount;
	} else {
		infoTag.innerHTML = "Please enter right key";
	}
}
function startGame() {
	let time = durationInputTag.value;
	if (time === "") {
		infoTag.innerHTML = "Please enter time to start game";
	} else {
		infoTag.innerHTML =
			"Game started now and Time limit is set for " + time + " seconds";

		const timeLimit = time * 1000;

		let countdowntime = setInterval(countdown, 1000);
		function countdown() {
			document.getElementById("game-countdown").innerHTML =
				"Time Left : " + time + " seconds";
			time--;

			if (time < 0) {
				clearInterval(countdowntime);
				document.getElementById("game-countdown").innerHTML = "Game Over";
				endGame();
			}
		}

		document.addEventListener("keypress", countOfKeyPress);
	}
}

function endGame() {
	document.removeEventListener("keypress", countOfKeyPress);
	if (sCount > lCount) {
		infoTag.innerHTML = "WINNER : S-key user";
		let confettiSettings = { target: "S-canvas" };
		let confetti = new ConfettiGenerator(confettiSettings);
		confetti.render();
	} else if (sCount < lCount) {
		infoTag.innerHTML = "WINNER: L-key user ";
		let confettiSettings = { target: "L-canvas" };
		let confetti = new ConfettiGenerator(confettiSettings);
		confetti.render();
	} else if (sCount === 0 && lCount === 0) {
		infoTag.innerHTML = "No key presses...!Try again";
	} else {
		infoTag.innerHTML = "Its a Draw..!";
	}
}
function restartGame() {
	document.location.href = "";
}

startBtnTag.addEventListener("click", startGame);
restartBtnTag.addEventListener("click", restartGame);
