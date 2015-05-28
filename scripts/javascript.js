var $ = function(x) {
	return document.getElementById(x);
}

var addIngredient = function() {
	var table = $("listIng");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	
	cell4.innerHTML = "<input type='button' id='remove' value='Remove'>";
}

var submitRecipe = function() {

}

var removeLine = function(t) {
	$('listIng').deleteRow(t);
}