<head>

<title>Add Recipe</title>

<script type="text/javascript" src="scripts/javascript.js"></script>

<script type="text/javascript">



window.onload = function() {
	$("newLine").onclick = addIngredient;
	$("delete").onclick = removeLine(this.rowIndex);
	//$("submitList").onclick = submitRecipe;
}

</script>

</head>
<body>

<div>
	<form>
		Please input your recipe below:
		<br>
		<table>
			<tr><td>Recipe name:</td><td><input type="text" name="rName"></td></tr>
		</table><br>
		<table id="listIng">
			<tr><th>Quantity</th><th>Measurement Type</th><th>Name</th><th>Remove?</th></tr>
		</table><br>
		<input type="button" id="newLine" value="Add Ingredient"><br><br>
		<input type="button" id="submitList" value="Submit Recipe">
	</form>
</div>

</body>
