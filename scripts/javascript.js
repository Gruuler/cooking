var $ = function(x) {
	return document.getElementById(x);
}

var addIngredient = function() {
	var measurement = { 
		Teaspoon:1,
		Tablespoon:2,
		Cups:3,
		Gallon:4,
		Pint:5,
		Units:6
	}

	var table = $("listIng");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var num = 1;

	var options="<select>";
	for(var name in measurement){
		options += "<option name='"+measurement[name]+"'>"+name+"</option>"
	}
	options += "</select>";
	
	cell1.innerHTML = "<input type='text' name='ingQuantity'>"
	cell2.innerHTML = options;
	cell3.innerHTML = "<input type='text' name='ingName"+num+"' autocomplete='on'>";
	cell4.innerHTML = "<input type='button' value='Remove' onclick='removeLine(this)'>";
}

var submitRecipe = function() {

}

var removeLine = function(dCell) {
	var row = dCell.parentNode.parentNode.rowIndex;
	$('listIng').deleteRow(row);
}

var findIngredient = function() {
	//var ingrText = text;

}

var findRecipe = function() {
	$('takenName').innerHTML = "It worked.";
}