import env from "./env.json" assert { type: "json" };
//console.dir(env);

// function to get screenshot
const getScreenShot = async (weblink) => {
	let screenWidth = screen.width;
	let screenHeight = screen.height;

	// Log the screen size to the console
	//console.log("Screen size: " + screenWidth + " x " + screenHeight);
	const url = `https://${env.baseURL}/screenshot?url=${weblink}&width=${screenWidth}&height=${screenHeight}`;

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": env.apiToken,
			"X-RapidAPI-Host": env.baseURL,
		},
	};
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result.screenshotUrl;
		//console.log("url=" + result.screenshotUrl);
	} catch (error) {
		console.error(error);
	}
};

const inputTag = document.getElementById("input-url");
const viewbtnTag = document.getElementById("view-screenshot");
const savebtnTag = document.getElementById("save-screenshot");
const displayDivtag = document.getElementById("display-screenshot");
const loginbtnTag = document.getElementById("login");
const signubtnTag = document.getElementById("signup");
const userdata = document.getElementById("userdata");
const username = document.getElementById("username");
const password = document.getElementById("password");
let userId;
let urlLink;

// function to display the screenshot
viewbtnTag.addEventListener("click", async (e) => {
	e.preventDefault();
	displayDivtag.innerHTML = "";

	if (inputTag.value) {
		const imageTag = document.createElement("img");

		imageTag.src = await getScreenShot(inputTag.value);

		imageTag.style.width = "60%";
		imageTag.style.height = "60%";

		urlLink = imageTag.src;
		displayDivtag.appendChild(imageTag);
	} else {
		alert("Please provide link for screenshot");
	}
});

// function to save the screenshot
savebtnTag.addEventListener("click", async (e) => {
	e.preventDefault();
	if (userId) {
		displayDivtag.innerHTML = "";
		//inputTag.value = "";

		// const imageTag = document.createElement("img");

		// imageTag.src = await getScreenShot(inputTag.value);

		// imageTag.style.width = "60%";
		// imageTag.style.height = "60%";

		// urlLink = imageTag.src;
		// displayDivtag.appendChild(imageTag);

		await saveScreenShot(userId);
	} else {
		alert("Please login/signup to save screenshot");
	}
});

const saveScreenShot = async (userId) => {
	const url = `https://crudcrud.com/api/${env.crudApiKey}/screenshot`;
	const data = { thisUser: userId, saved: await urlLink };
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const json = await response.json();

		userdata.innerHTML = "";
		getUserScreenshots();
	} catch (error) {
		console.log(error);
	}
};

const getUsersList = async () => {
	try {
		const users = await fetch(
			`https://crudcrud.com/api/${env.crudApiKey}/users`
		);
		const usersData = await users.json();
		return usersData;
	} catch (err) {
		console.log(err);
	}
};

signubtnTag.addEventListener("click", async (e) => {
	e.preventDefault();
	window.location.href = "/signup/signup.html";
});

loginbtnTag.addEventListener("click", async (e) => {
	e.preventDefault();
	userdata.innerHTML = "";
	const users = await getUsersList();

	if (username.value && password.value) {
		// check that user is valide when login
		const validUser = await users.find((user) => {
			if (user.email === username.value && user.psw === password.value) {
				userId = user._id;
				// get all the user login previous screenshots
				getUserScreenshots();
				loginbtnTag.innerText = `welcome ${user.email}`;
			}
		});
		if (!userId) {
			alert("please SignUp, User not found");
		}
	} else {
		alert("please fill up the Form");
	}
});

const getUserScreenshots = async () => {
	try {
		const users = await fetch(
			`https://crudcrud.com/api/${env.crudApiKey}/screenshot`
		);
		const usersData = await users.json();
		const urls = await usersData.filter((item) => item.thisUser === userId);
		// display all this user images
		//console.log(urls);
		displayResults(urls);
	} catch (err) {
		console.log(err);
	}
};

const displayResults = async (array) => {
	array.forEach((item) => {
		const divItem = document.createElement("div");
		divItem.classList.add("item");
		const img = document.createElement("img");
		img.src = item.saved;
		img.style.width = "50%";
		img.style.height = "50%";
		divItem.setAttribute("id", item._id); // give the parent of the image the same id of the crudcrud id
		const deleteButton = document.createElement("button");
		deleteButton.setAttribute("id", item._id);
		deleteButton.classList.add("delete");
		deleteButton.innerText = "X";
		divItem.appendChild(img);
		divItem.appendChild(deleteButton);
		userdata.appendChild(divItem);
	});
};

const deleteScreenShot = async (id) => {
	const url = `https://crudcrud.com/api/${env.crudApiKey}/screenshot/${id}`;
	console.log(url);
	try {
		const response = await fetch(url, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await response.json();
	} catch (error) {
		console.log(error);
	}
};

const deleteButtons = document.getElementsByClassName(".delete");

deleteButtons.forEach((button) =>
	button.addEventListener("click", async (event) => {
		console.log("IN");
		const imgElement = event.target.parentElement;
		imgElement.style.display = "none";
		const imgId = imgElement.id;
		console.log(imgId);
		await deleteScreenShot(imgId); // specific image id added to remove it from the api data
	})
);
