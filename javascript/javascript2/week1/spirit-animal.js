const getAnimalNameBtn = document.getElementById("getAnimalNameBtn");
const animalName = document.getElementById("animal-name");
const spiritAnimalList = [
	"The fullmoon wolf",
	"The Butterfly",
	"The Spider",
	"The Crow",
	"The Owl",
	"The Hummingbird",
	"The Hawk",
	"The Grasshopper",
	"The Eagle",
	"The crying butterfly",
];
function getAnimalName() {
	const nameVal = animalName.value;
	const newSpiritAnimal =
		spiritAnimalList[Math.floor(Math.random() * spiritAnimalList.length)];
	const displayNameResult = document.getElementById("displayNameResult");
	if (nameVal) {
		const output = `${nameVal} - ${newSpiritAnimal}`;
		displayNameResult.innerText = output;
	} else {
		displayNameResult.innerText = "Please Enter Name";
	}
}

const radioButtons = document.getElementsByName("select-type");

for (const radioButton of radioButtons) {
	radioButton.addEventListener("change", function () {
		const value = radioButton.value;

		/*if (value === "click") {
			getAnimalNameBtn.addEventListener("click", getAnimalName);
			animalName.removeEventListener("mousehover", getAnimalName);
			animalName.removeEventListener("keyup", getAnimalName);
		} else if (value === "hover") {
			animalName.addEventListener("mouseover", getAnimalName);
			getAnimalNameBtn.removeEventListener("click", getAnimalName);
			animalName.removeEventListener("keyup", getAnimalName);
		} else if (value === "keyup") {
			animalName.addEventListener("keyup", getAnimalName);
			animalName.removeEventListener("mouseover", getAnimalName);
			getAnimalNameBtn.removeEventListener("click", getAnimalName);
		}*/

		switch (value) {
			case "click":
				getAnimalNameBtn.addEventListener("click", getAnimalName);
				animalName.removeEventListener("mousehover", getAnimalName);
				animalName.removeEventListener("keyup", getAnimalName);
				break;
			case "hover":
				animalName.addEventListener("mouseover", getAnimalName);
				getAnimalNameBtn.removeEventListener("click", getAnimalName);
				animalName.removeEventListener("keyup", getAnimalName);
				break;
			case "keyup":
				animalName.addEventListener("keyup", getAnimalName);
				animalName.removeEventListener("mouseover", getAnimalName);
				getAnimalNameBtn.removeEventListener("click", getAnimalName);
				break;
		}
	});
}

getAnimalNameBtn.addEventListener("click", getAnimalName);
