<template>
<div class="page-home">
	<!-- 分类按钮 -->
	<ul class="type-list">
		<router-link v-for="item in types" :key="item.id" tag="li" :to="'/list/' + item.id">
			<img :src="'static/img/icon/' + item.img" alt="">
			<p>{{item.text}}</p>
		</router-link>
	</ul>
	<!-- 广告 -->
	<ul class="ad-list">
		<router-link v-for="(item, index) in ad" :key="index" tag="li" :to="'/detail/' + item._id">
			<h3 :class="'color-' + index">{{item.title}}</h3>
			<p>{{item.description}}</p>
			<img :src="'static/img/ad/' + item.url" alt="">
		</router-link>
	</ul>
	<!-- 商品列表 -->
	<div class="product-list">
		<h2 class="product-list-title">猜你喜欢</h2>
		<Product v-for="(item, index) in list" :key="index" :data="item"></Product>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.page-home {
	.type-list {
		display: flex;
		flex-wrap: wrap;
		background: #fff;
		padding: 10px 0 5px;
		li {
			width: (100%/5);
			text-align: center;
			padding-bottom: 10px;
			img {
				width: 60%;
			}
			p {
				font-size: 14px;
			}
		}
	}
	.ad-list {
		display: flex;
		margin-top: 10px;
		background: #fff;
		li {
			width: (100%/3);
			flex: 1;
			padding: 15px 0;
			border-right: 1px solid #ccc;
			text-align: center;
			&:last-child {
				border-right: none;
			}
			h3 {
				font-size: 16px;
			}
			p {
				padding: 8px 0 10px;
				font-size: 12px;
			}
			img {
				width: 60%;
			}
			// 循环变量
			$i: 0;
			// 枚举循环
			@each $color in red, green, purple {
				.color-#{$i} {
					color: $color;
				}
				// 改变循环变量
				$i: $i + 1;
			} 
			// .color-0 {
			// 	color: red;
			// }
			// .color-1 {
			// 	color: green;
			// }
			// .color-2 {
			// 	color: purple;
			// }
		}
	}
	// 商品列表
	.product-list {
		margin-top: 10px;
		background: #fff;
		.product-list-title {
			margin: 0 10px;
			font-size: 20px;
			font-weight: normal;
			padding: 15px 0 10px;
			border-bottom: 1px solid #ccc;
		}
	}
}
</style>
<script type="text/javascript">
// 引入组件
import Product from '../components/Product'
export default {
	// 注册组件
	components: { Product },
	// 同步数据
	data() {
		return {
			types: [
				{ id: '1', img: '01.png', text: '美食' },
				{ id: '2', img: '02.png', text: '电影' },
				{ id: '3', img: '03.png', text: '酒店' },
				{ id: '4', img: '04.png', text: '休闲' },
				{ id: '5', img: '05.png', text: '外卖' },
				{ id: '6', img: '06.png', text: 'KTV' },
				{ id: '7', img: '07.png', text: '周边游' },
   { id: '8', img: '08.png', text: '丽人' },
				{ id: '9', img: '09.png', text: '小吃' },
				{ id: '10', img: '10.png', text: '火车票' }
			],
			// 初始化数据
			ad: [],
			list: []
		}
	},
	// 获取数据
	created() {
		// 获取数据
		this.$http
			// .get('/data/home.json')
			// 按照接口文档写地址
			.get('/data/home')
			// 监听数据返回
			.then(({ data }) => {
				this.list = data.list;
				this.ad = data.ad;
				// console.log(this)
			})
		// console.log(this)
	}
	// name: 'home',
	// components: {
	//   HelloWorld
	// }
	// created() {
	// 	console.log(this)
	// }
}
</script>
