console.log("Script loaded");

const products = getAvailableProducts();
//console.log(products);

function renderProducts(products) {
	const ulTag = document.createElement("ul");
	for (let product of products) {
		const liTag = document.createElement("li");
		const h3Tag = document.createElement("h3");
		const pTag = document.createElement("p");

		h3Tag.innerHTML = product.name;
		liTag.appendChild(h3Tag);
		pTag.innerHTML = `Price:${product.price}<br> Rating: ${product.rating}`;
		// Workspace manipulation
		liTag.appendChild(pTag);
		ulTag.appendChild(liTag);
	}
	// DOM manipulation
	document.body.appendChild(ulTag);
}

renderProducts(products); // This should create the ul and the li's with the individual products details
