<template>
<div class="page-list">
	<ul class="list-order">
		<li v-for="item in orders" :key="item.id" @touchend="listOrder(item.id)"><span>{{item.text}}</span></li>
	</ul>
	<!-- 商品组件 -->
	<Product v-for="(item, index) in dealList" :key="index" :data="item"></Product>
	<!-- 加载更多 -->
	<!-- 使用touchstart会出现点击穿透的问题 -->
	<div class="loader-more" @touchend="showOthers" v-show="others.length">
		<span>查看其它{{others.length}}条数据</span>
		<span class="arrow"></span>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
// 引入样式库
@import '../base.scss';
.page-list {
	.list-order {
		background: #fff;
		display: flex;
		li {
			width: (100%/4);
			border-bottom: 1px solid #ccc;
			border-right: 1px solid #ccc;
			line-height: 30px;
			height: 30px;
			text-align: center;
			span {
				font-size: 12px;
				&:after {
					@include arrow(4px);
					content: '';
					position: relative;
					top: -1px;
					left: 2px;
				}
			}
		}
	}
	.loader-more {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
		background: #fff;
		text-align: center;
		color: $navColor;
		.arrow {
			@include arrow(10px, $navColor);
			position: relative;
			left: 5px;
			&:after {
				@include arrow(10px, #fff);
				content: '';
				position: absolute;
				top: -13px;
				left: -10px;
			}
		}
	}
}
</style>
<script type="text/javascript">
// 引入组件
import Product from '../components/Product';
// 组件
export default {
	// 注册组件
	components: { Product },
	// 同步数据
	data() {
		return {
			orders: [
				{ id: 'price', text: '价格排序' },
				{ id: 'sales', text: '销量排序' },
				{ id: 'evaluate', text: '好评排序' },
				{ id: 'discount', text: '优惠排序' }
			],
			list: [],
			// 剩余的数据
			others: []
		}
	},
	// 计算属性数据
	computed: {
		// 处理list
		dealList() {
			// console.log(this.$store.state.search)
			// list过滤
			return this.list
				// .filter(item => {
				// 	// 标题中，包含store中的search
				// 	return item.title.indexOf(this.$store.state.search) >= 0
				// })
				// 省略
				// 忽略大小写
				.filter(item => item.title.toUpperCase().indexOf(
						this.$store.state.search.toUpperCase()
					) >= 0)
		}
	},
	// 方法
	methods: {
		// 获取数据
		getData() {
			let { params } = this.$route;
			// 请求数据
			this.$http
				// .get('/data/list?id=' + params.id)
				// 在配置中添加
				.get('/data/list', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 存储数据
					this.list = data.slice(0, 3);
					// 存储剩余的数据
					this.others = data.slice(3);
				})
		},
		// 显示剩余的数据
		showOthers() {
			// 将others中的数据，放在list中
			this.list = this.list.concat(this.others);
			// 清空others
			this.others = [];
			// console.log(this)
		},
		// 列表排序
		listOrder(id) {
			// 优惠就是原价减去现价
			// a的优惠 a.originPrice - a.price
			// b的优惠 b.originPrice - b.price
			// 如果是优惠排序
			if (id === 'discount') {
				return this.list.sort((a, b) => {
					// 升序
					// return (a.originPrice - a.price) - (b.originPrice - b.price)
					// 倒序
					return (b.originPrice - b.price) - (a.originPrice - a.price)
				})
			}
			// console.log(id)
			// 对list数组排序
			this.list.sort((a, b) => {
				// 根据id属性排序
				// return a[id] - b[id]
				// 倒序
				return b[id] - a[id]
			})
		}
	},
	// 路由改变
	// beforeRouteEnter(req, res, next) {
	// 	console.log('get data')
	// 	// 访问不到组件
	// 	console.log(this)
	// 	// next();
	// }
	// 监听路由变化
	watch: {
		$route() {
			this.getData();
		}
	},
	// 组件创建完成
	created() {
		// 请求数据
		this.getData();
		// console.log(this.$route)
		// 解构参数
		// let { params } = this.$route;
		// // 请求数据
		// this.$http
		// 	// .get('/data/list?id=' + params.id)
		// 	// 在配置中添加
		// 	.get('/data/list', { params })
		// 	// 监听数据返回
		// 	.then(({ data }) => {
		// 		// 存储数据
		// 		this.list = data;
		// 	})
	}
}
</script>
