var $ = function(x) {
	return document.getElementById(x);
}

var addIngrediant = function() {
	var table = $('listIng');
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = "test";
}