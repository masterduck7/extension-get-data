const getData = async () => {
	try {
		const res = await fetch("https://zenquotes.io/api/random");
		const data = await res.json();
		const quote = data[0]["q"];

		if (quote.includes("Too many requests")) {
			return "No quote to show. Please try in a few minutes";
		}
		return quote;
	} catch (error) {
		return "No quote to show";
	}
};

document.addEventListener("DOMContentLoaded", function () {
	var getData = document.getElementById("getData");

	getData.addEventListener("click", async function () {
		await getData().then((response) => {
			console.log(response);
		});
	});
});
