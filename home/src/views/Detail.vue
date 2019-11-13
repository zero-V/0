<template>
<div class="page-detail">
	<div class="image-part">
		<img :src="'img/item/' + data.img" alt="">
		<h1>{{data.title}}</h1>
		<p>{{data.description}}</p>
	</div>
	<div class="price-part">
		<span class="price"><strong>{{data.price}}</strong>元</span>
		<span class="origin-price">门市价:{{data.originPrice}}元</span>
		<span :class="{
			buy: true,
			'has-buy': data.hasBuy
		}" @click="buyItem">{{data.hasBuy ? '取消购买' : '立即购买'}}</span>
	</div>
	<ul class="sales-part">
		<li>支持立即退货</li>
		<li>支持随时退货</li>
		<li>销量{{data.sales}}</li>
	</ul>
	<div class="store-part module">
		<div class="module-header">店家信息</div>
		<div class="module-body">
			<p>{{data.storeName}}</p>
			<p>{{data.storeAddress}}</p>
		</div>
		<div class="module-footer">查看{{data.storeNum}}家分店</div>
	</div>
	<div class="notice-part module">
		<div class="module-header">购买须知</div>
		<div class="module-body" v-html="data.content"></div>
	</div>
	<shopping-car></shopping-car>
</div>
</template>
<style type="text/css" lang="scss">
@import '../base.scss';
.page-detail {
	padding-bottom: 50px;
	.image-part {
		position: relative;
		h1, p {
			position: absolute;
			left: 10px;
			bottom: 15px;
			color: #fff;
		}
		h1 {
			bottom: 40px;
			font-size: 24px;
		}
		img {
			width: 100%;
		}
	}
	.price-part {
		height: 50px;
		background: #fff;
		padding: 0 10px;
		border-bottom: 1px solid #ccc;
		.price {
			color: $navColor;
			font-size: 16px;
			strong {
				font-size: 40px;
				font-weight: normal;
				line-height: 50px;
			}
		}
		.origin-price {
			font-size: 16px;
			margin-left: 8px;
		}
		.buy {
			float: right;
			color: #fff;
			background: #f30;
			border-radius: 2px;
			padding: 6px 12px;
			font-size: 12px;
			margin-top: 11px;
			&.has-buy {
				color: #333;
				background: #eee;
			}
		}
	}
	.sales-part {
		display: flex;
		flex-wrap: wrap;
		background: #fff;
		padding: 10px 0;
		li {
			width: 50%;
			color: yellowgreen;
			text-indent: 10px;
			line-height: 30px;
			&:last-child {
				color: #000;
			}
		}
	}
	.module {
		margin-top: 10px;
		background: #fff;
		padding: 10px;
		.module-header {
			font-size: 24px;
			border-bottom: 1px solid #ccc;
			padding: 5px 0 10px;
		}
		.module-body {
			padding: 15px 0;
			line-height: 30px;
			font-size: 16px;
			h3 {
				color: #f30;
				padding: 10px 0 5px;
			}
		}
		.module-footer {
			color: skyblue;
			font-size: 16px;
			padding: 8px 2px;
			border-top: 1px solid #ccc;
		}
	}
}
</style>
<script type="text/javascript">
// 引入组件
import ShoppingCar from "../components/ShoppingCar";
export default {
	// 注册组件
	components: { ShoppingCar },
	// 数据
	data() {
		return {
			data: {}
		}
	},
	// 方法
	methods: {
		// 获取数据
		getData() {
			// 获取动态路由参数
			let { params } = this.$route;
			// 发送请求
			this.$http
				.get('/data/product', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果数据在store中，将hasBuy设置成true
					if (this.$store.state.goods.find(item => item._id === data._id)) {
						// 添加属性
						// 在存储数据之前，添加的属性，是不会丢失的。
						data.hasBuy = true;
					}
					// 更新数据
					this.data = data;
				})
		},
		// 购买商品
		buyItem() {
			// 发送消息
			this.$store.commit(this.data.hasBuy ? 'deleteGoods' : 'addGoods', this.data)
			// 添加属性
			// this.data.hasBuy = !this.data.hasBuy;
			// 避免数据丢失
			this.$set(this.data, 'hasBuy', !this.data.hasBuy)
			// console.log(this.data)
			// console.log(this.$store.state.goods)
		}
	},
	// 组件创建完成
	created() {
		// 更新数据
		this.getData();
	},
	// 监听路由变化
	watch: {
		// 路由改变
		$route() {
			// 更新数据
			this.getData();
		}
	}
}
</script>
