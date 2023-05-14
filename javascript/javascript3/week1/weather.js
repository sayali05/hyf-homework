const cityName = document.getElementById("city-name");
const btnTag = document.getElementById("weather");
const locationBtnTag = document.getElementById("get-location");

async function getWeatherDataFromCity(cityNameTag) {
	try {
		const city = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityNameTag}&units=metric&appid=da2a364bd4ecf1f22effba1f91a381d9`
		);

		const cityData = await city.json();
		//console.log(cityData);
		return cityData;
	} catch {
		console.error();
	}
}

btnTag.addEventListener("click", async (e) => {
	e.preventDefault();

	try {
		const geoCityLocation = await getWeatherDataFromCity(cityName.value);
		//console.log(geoCityLocation);
		const result = await getWeatherInfo(
			geoCityLocation.coord.lat,
			geoCityLocation.coord.lon
		);
		console.log(result);
		displayWeatherResult(result);
		localStorage.setItem(`${result.name}`, result.name);
	} catch (err) {
		//error.innerText = "Please enter a valid city Name";
		console.log("its this error " + err);
	}
});

const getWeatherInfo = async (lat, lon) => {
	try {
		const weather = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da2a364bd4ecf1f22effba1f91a381d9&units=metric`
		);
		const data = await weather.json();
		return data;
	} catch {
		console.log("error1");
	}
};

const getCurrentLocationWeather = async (position) => {
	try {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		const result = await getWeatherInfo(latitude, longitude);
		console.log(result);
		displayWeatherResult(result);
	} catch {
		console.log("error2");
	}
};

locationBtnTag.addEventListener("click", () => {
	navigator.geolocation.getCurrentPosition(getCurrentLocationWeather);
});
const displayWeatherResult = (data) => {
	console.log(data);
	const cityName = document.getElementById("city");
	const icon = document.getElementById("icon");
	const tempreture = document.getElementById("tempreture");
	const description = document.getElementById("description");
	const windSpeed = document.getElementById("wind-speed");
	const cloudiness = document.getElementById("cloud");
	const feelsLike = document.getElementById("feels-like");
	const sunrise = document.getElementById("sunrise");
	const sunset = document.getElementById("sunset");

	cityName.innerText = data.name;
	icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
	icon.alt = `${data.weather[0].description}`;
	tempreture.innerText = `${data.main.temp.toFixed(0)}°C`;
	//description.innerText = data.weather[0].description;
	windSpeed.innerText = `Wind speed: ${data.wind.speed} m/s`;
	feelsLike.innerText = `Feels Like: ${data.main.feels_like.toFixed(0)} °C`;
	cloudiness.innerText = `Cloudiness: ${data.clouds.all}%`;
	sunrise.innerText = `Sunrise: ${new Date(
		data.sys.sunrise * 1000
	).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
	})}`;
	sunset.innerText = `Sunset: ${new Date(
		data.sys.sunset * 1000
	).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
	})}`;
};
