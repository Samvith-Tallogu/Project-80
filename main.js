function getParagraph(inputBoxName, paragraphName) {
	var inputs = [];
	for (var i = 1; i <= 6; i++) {
		inputs.push(document.getElementById(inputBoxName + i).value);
	}
	document.getElementById(paragraphName).innerHTML = inputs.join(". ");
}