let ratingOutput = document.querySelector("#ratingOutput");
let rating = document.querySelector("#rating");

console.log(ratingOutput);

function weather() {
	const input = rating.value;
	let output = " ";
	if (input >= 8 && input <= 10) {
		output = "super";
	} else if (input <= 7 && input >= 6) {
		output = "good";
	} else if (input <= 6 && input >= 3) {
		output = "okay";
		console.log(output);
	} else {
		output = "bad";
	}
	ratingOutput.innerHTML = output;
}
