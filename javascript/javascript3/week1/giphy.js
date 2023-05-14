const btnTag = document.getElementById("giphy-btn");

btnTag.addEventListener("click", async (e) => {
	e.preventDefault();
	const searchTag = document.getElementById("search-giphy").value;
	const countTag = document.getElementById("giphy-cnt").value || 1;
	searchGiphy(searchTag, countTag);
});

const searchGiphy = async (searchTag, countTag) => {
	try {
		const apiKey = "0rqNIUMI9hABlpoZATrFAPcA23I5gYI5";
		const urlGiphy = await fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${countTag}&q=${searchTag}`
		);
		const response = await urlGiphy.json();
		const data = response.data;
		//	console.log(data);
		displayGiphyFunction(data);
	} catch {
		console.log("error");
	}
};

const displayGiphyFunction = async (data) => {
	const displayGif = document.getElementById("display-gif");
	displayGif.innerHTML = "";
	data.forEach((gif) => {
		const imgTag = document.createElement("img");
		imgTag.src = gif.images.fixed_height.url;
		displayGif.appendChild(imgTag);
	});
};
