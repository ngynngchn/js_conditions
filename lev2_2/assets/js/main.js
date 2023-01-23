let concernInput = document.querySelector("#concern");
let effectInput = document.querySelector("#effect");
let aqiValue = document.querySelector("#aqi");
let aqi = document.querySelector("#air-quality");

console.log(aqi.value);

function checkAirQuality() {
	let aqiInput = aqi.value;
	let aqiConcern, aqiEffect;
	console.log(aqiInput);
	if (aqiInput <= 50) {
		aqiConcern = "Good";
		aqiEffect = "Little or no risk";
		document.body.style.backgroundColor = "green";
	} else if (aqiInput > 50 && aqiInput <= 100) {
		aqiConcern = "Moderate";
		aqiEffect = "Acceptable quality";
		document.body.style.backgroundColor = "yellow";
	} else if (aqiInput > 100 && aqiInput <= 150) {
		aqiConcern = " Unhealthy for sensitive groups ";
		aqiEffect = "Generable publics not likely affected";
		document.body.style.backgroundColor = "orange";
	}
	aqiValue.innerHTML = aqiInput;
	concernInput.innerHTML = aqiConcern;
	effectInput.innerHTML = aqiEffect;
}

checkAirQuality();
