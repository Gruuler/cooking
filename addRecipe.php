<head>

<title>Add Recipe</title>

<script type="rel/stylesheet" src="scripts/javascript.js"></script>

<script type="rel/stylesheet">

window.onload = function() {
	$('addIngredient').onclick = addIngredient;
	$('submitList').onclick = submitRecipe
}

</script>

</head>
<body>

<div>
	<form>
		Please input your recipe below:
		<br>
		<table id="listIng">
			<tr><td>Recipe name:</td><td><input type="text" name="rName"></td></tr>
		</table>
		<button class="button" id="addIngredient">Add Ingredient</button><br>
		<button class="button" id="submitList">Submit Recipe</button>
	</form>
</div>

</body>
