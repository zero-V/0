<template>
<div class="ickt-product">
	<router-link tag="div" :to="'/detail/' + data._id" class="product-inner">
		<img :src="'static/img/list/' + data.img" alt="">
		<div class="product-content">
			<h3>{{data.title}}</h3>
			<p>
				<span class="price">{{data.price}}元</span>
				<span class="origin-price">门市价:{{data.originPrice}}元</span>
				<span class="sales">销量{{data.sales}}</span>
			</p>
		</div>
	</router-link>
</div>
</template>
<style type="text/css" lang="scss">
// 引入配置
@import '../base.scss';
.ickt-product {
	background: #fff;
	.product-inner {
		margin: 0 10px;
		padding: 10px 0;
		border-bottom: 1px solid #ccc;
		display: flex;
		img {
			width: 100px;
			height: 60.5px;
		}
		.product-content {
			flex: 1;
			margin-left: 10px;
			h3 {
				font-size: 14px;
				height: 44px;
			}
			p {
				font-size: 12px;
			}
			.price {
				color: $navColor;
				margin-right: 8px;
			}
			.sales {
				float: right;
			}
		}
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 接收数据
	props: ['data'],
	// created() {
	// 	console.log(this.data)
	// }
}
</script>