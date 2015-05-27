<?php

if(!isset($_COOKIE['cart'])) {

	$cart = array();
	setcookie('cart',json_encode($cart),Time()+60*60*24);

}else{

	$cart = json_decode($_COOKIE['cart'], true);

}

$cartLength = count($cart);

?>