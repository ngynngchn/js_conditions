/* Aufgabenstellung


Schreibe eine Funktion, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten. Wenn die Zahl größer als 27 ist, multipliziere die Differenz mit 2. Lass dir das Ergebnis in der Konsole ausgeben.

Teste die Nummern: 35, 74, 123.

Assets:
if
else  */

function diff(num) {
	let difference = num - 27;
	if (num > 27) {
		console.log(difference * 2);
	}
}

diff(35);
diff(74);
diff(123);
