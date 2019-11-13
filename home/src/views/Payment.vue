<template>
<div class="page-payment">
	<div class="price-part">
		<span class="price-title">商品总价</span>
		<span class="price-num">￥{{$store.getters.price}}</span>
	</div>
	<div class="btns">
		<span class="btn-cancel" @touchend="$router.go(-1)">取消购买</span>
		<span class="btn-buy" @touchend="buyGoods">购买商品</span>
	</div>
	<h2 class="list-title">已购商品</h2>
	<Product v-for="(item, index) in $store.state.goods" :key="index" :data="item"></Product>
</div>
</template>
<style type="text/css" lang="scss">
.page-payment {
	.price-part {
		background: #fff;
		padding: 30px 20px 20px;
		font-size: 18px;
		.price-num {
			color: #f30;
			font-size: 32px;
		}
	}
	.btns {
		text-align: center;
		background: #fff;
		padding: 10px;
		span {
			font-size: 12px;
			padding: 6px 12px;
			border-radius: 3px;
			color: #fff;
			margin: 0 5px;
			&.btn-cancel {
				background: #ccc;
			}
			&.btn-buy {
				background: #f30;
			}
		}
	}
	.list-title {
		background: #fff;
		font-size: 20px;
		font-weight: normal;
		padding: 20px;
	}
}
</style>
<script type="text/javascript">
// 引入组件
import Product from '../components/Product';
// 定义组件
export default {
	// 注册组件
	components: { Product },
	// 方法
	methods: {
		// 购买商品
		buyGoods() {
			// 发送请求
			this.$http
				.post('/data/buy', { ids: this.$store.state.goods.map(item => item._id) })
				// 监听数据返回
				.then(({ data }) => {
					// console.log(data)
				})
		}
	}
}
</script>
