//5.Create a button with the text called "Log location".
//When this button is clicked the location (latitude, longitude) of the user should be logged out
//using this browser api

const buttonTag = document.getElementById("button");
const pTag = document.getElementById("result");

buttonTag.addEventListener("click", () => {
	navigator.geolocation.getCurrentPosition(success, error);
});
function success(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;

	pTag.innerHTML = `This is the latitude: ${latitude}. <br> This is the longitude: ${longitude}.`;
}

function error(err) {
	console.log(error);
}
