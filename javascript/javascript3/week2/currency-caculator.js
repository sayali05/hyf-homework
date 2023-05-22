const amountTag = document.getElementById("amount");
const fromTag = document.getElementById("from");
const toTag = document.getElementById("to");
const resultTag = document.getElementById("result");
const btnTag = document.getElementById("converted-amount");

btnTag.addEventListener("click", convertCurrency);

let exchangeRates = {};
let fromCurrency = "EUR";
let toCurrency = "DKK";

async function getDataAndConvertFromApi() {
	try {
		const response = await fetch("https://open.er-api.com/v6/latest/USD");
		const data = await response.json();
		exchangeRates = data.rates;

		const currencies = Object.keys(exchangeRates);

		const fromOptionVal = document.createElement("option");
		fromOptionVal.text = "EUR";
		fromOptionVal.value = "EUR";
		fromTag.appendChild(fromOptionVal);

		const toOptionVal = document.createElement("option");
		toOptionVal.text = "DKK";
		toOptionVal.value = "DKK";
		toTag.appendChild(toOptionVal);

		currencies.forEach((currency) => {
			const option1 = document.createElement("option");
			option1.text = currency;
			fromTag.add(option1);

			const option2 = document.createElement("option");
			option2.text = currency;
			toTag.add(option2);
		});
	} catch {
		console.error();
	}
}

function convertCurrency() {
	const amountVal = amountTag.value;
	fromCurrency = fromTag.value;
	toCurrency = toTag.value;
	const fromCurrencyRate = exchangeRates[fromCurrency];
	const toCurrencyRate = exchangeRates[toCurrency];

	const convertedValue = (amountVal / fromCurrencyRate) * toCurrencyRate;

	document.getElementById(
		"result"
	).innerHTML = `${amountVal} ${fromCurrency} is ${convertedValue.toFixed(
		2
	)} ${toCurrency}`;
}
getDataAndConvertFromApi();
