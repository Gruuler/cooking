<?php

if(!isset($_COOKIE['cart'])){
	$cart = array();
	$storedCart = json_encode($cart);
	setcookie('cart',$storedCart,Time()+100*60*60*24);
}

$cart = json_decode($_COOKIE['cart'], true);
$cartLength = count($cart);
echo $cartLength;

?>