//Create your own json file

const jsonData = async () => {
	const pets = await fetch("pets.json");
	const petList = await pets.json();
	console.log(petList);
};
jsonData();

//Find a cool api

// This API gives the data key have an array that contain objects that have
//different types of values , number a string another object and Booleans

const getCartoon = async () => {
	const cartoon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
	const cartoonList = await cartoon.json();
	console.log(cartoonList);
};
getCartoon();
