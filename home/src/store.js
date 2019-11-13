import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// num: 100
		// 搜索词
		search: '',
		// 商品
		goods: []
	},
	// 计算属性数据
	getters: {
		// 获取商品总价
		price(state) {
			// 如果没有数据
			if (state.goods.length === 0) {
				// 总价是0
				return 0
			}
			return state.goods
				// 将商品对象数组，映射成价格数字数组
				.map(item => +item.price)
				// 对价格数字数字做累积
				.reduce((res, price) => res + price)
		}
	},
	// 同步消息
	mutations: {
		// 更新search
		updateSearch(state, value) {
			// 更新state
			state.search = value;
		},
		// 添加商品
		addGoods(state, goods) {
			// 如果价格不能转化成数字
			if (Object.is(+goods.price, NaN)) {
				// 提示用户
				alert('商品没有价格，不能购买')
				return;
			}
			// 如果购买多次，不要再购买了
			if (state.goods.find(item => item._id === goods._id)) {
				// 商品已经加入购物车； 
				return alert('商品已经购买了')
			}
			// 将商品加入购物车
			// console.log('addGoods')
			state.goods.push(goods);
		},
		// 取消商品
		deleteGoods(state, goods) {
			// console.log('deleteGoods')
			// 如果价格不能转化成数字
			if (Object.is(+goods.price, NaN)) {
				// 提示用户
				alert('商品没有价格，不能取消')
				return;
			}
			// 购物车中获取商品的索引值
			let index = state.goods.findIndex(item => item._id === goods._id)
			// 如果商品存在，可以删除
			if (index >= 0) {
				// 删除成员
				state.goods.splice(index, 1);
			}
		}
	},
	actions: {

	}
})
