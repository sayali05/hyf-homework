import env from "../env.json" assert { type: "json" };

const signupBtnTag = document.getElementById("signupbtn");
const emailTag = document.getElementById("email");
const pswTag = document.getElementById("psw");

const registerNewUser = async (data) => {
	const link = `https://crudcrud.com/api/${env.crudApiKey}/users`;
	try {
		const response = await fetch(link, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const json = await response.json();
		//console.log(json);
	} catch {
		console.error();
	}
};

signupBtnTag.addEventListener("click", async (e) => {
	e.preventDefault();

	if (emailTag.value && pswTag.value) {
		const data = {
			email: emailTag.value,
			psw: pswTag.value,
		};
		//console.log(data);
		await registerNewUser(data);
		window.location.href = "../index.html"; // go back to the main index page after the signUp form
	}
});
