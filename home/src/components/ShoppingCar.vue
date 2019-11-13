<template>
<div class="ickt-shopping-car">
	<div class="show-price">共￥{{$store.getters.price}}元</div>
	<router-link class="show-buy" tag="div" to="/payment">选好了</router-link>
</div>
</template>
<style type="text/css" lang="scss">
.ickt-shopping-car {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 50px;
	line-height: 50px;
	color: #fff;
	background: #484d54;
	display: flex;
	text-align: center;
	font-size: 20px;
	.show-price {
		flex: 1;
	}
	.show-buy {
		width: 120px;
		background: #fe2947;
	}
}
</style>