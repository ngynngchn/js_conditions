let result = document.getElementById("result");

function calculatePoints(age, height) {
	return age * 5 + height;
}

function compare(playerOne, ageOne, heightOne, playerTwo, ageTwo, heightTwo) {
	let pOne = calculatePoints(ageOne, heightOne);
	let pTwo = calculatePoints(ageTwo, heightTwo);

	let highestPoints;
	if (pOne > pTwo) {
		highestPoints = `Der Gewinner ist ${playerOne} mit ${pOne} Punkten.`;
	} else if (pOne < pTwo) {
		highestPoints = `Der Gewinner ist ${playerTwo} mit ${pTwo} Punkten.`;
	} else {
		highestPoints = "Es steht unentschieden.";
	}
	result.innerHTML = highestPoints;
}

compare("John", 22, 170, "Meike", 168, 34);
