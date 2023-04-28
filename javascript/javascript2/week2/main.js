console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
//console.log(productsUl);
//functions
const resetProductUl = () => {
	productsUl.innerHTML = "";
};
function renderProducts(products) {
	resetProductUl();
	const headingTag = document.createElement("li");
	headingTag.innerHTML = `  <ul class="heading">
    <li>Product Name</li>
    <li>Price</li>
    <li>Rating</li>
    <li>Country</li>
  </ul>`;
	productsUl.appendChild(headingTag);
	products.forEach((product) => {
		const li = document.createElement("li");

		let shipsToHTML = "";
		product.shipsTo.forEach(
			(country) => (shipsToHTML += `<li>${country}</li>`)
		);

		li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
		productsUl.appendChild(li);
	});
}

//renderProducts(products);

window.onload = function (event) {
	products.sort((a, b) => b.rating - a.rating);
	renderProducts(products);
};

const productSearchTag = document.getElementById("search-input");
const maxPriceTag = document.getElementById("priceSearch");
const sortOption = document.getElementById("sortSearch");

productSearchTag.addEventListener("input", renderFilterProducts);
maxPriceTag.addEventListener("input", renderFilterProducts);
sortOption.addEventListener("change", renderFilterProducts);

function renderFilterProducts() {
	const productSearchValue = productSearchTag.value.trim();
	const maxPriceValue = parseFloat(maxPriceTag.value);
	const sortOptionValue = sortOption.value;

	const sortingExpensive = (a, b) => b.price - a.price;
	const sortingCheapest = (a, b) => a.price - b.price;

	const filteredProducts = products
		.filter((product) => {
			return (
				productSearchValue === "" ||
				product.name.toLowerCase().includes(productSearchValue)
			);
		})
		.filter((product) => {
			return (
				maxPriceValue === "" ||
				isNaN(maxPriceValue) ||
				product.price <= maxPriceValue
			);
		})
		.sort(sortOptionValue === "expensive" ? sortingExpensive : sortingCheapest);

	renderProducts(filteredProducts); // add this line to return the filtered products
}
