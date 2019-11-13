import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import List from './views/List'
import Detail from './views/Detail'
import Payment from './views/Payment'

Vue.use(Router)

// 实例化
export default new Router({
	// 路由规则
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		// 列表页
		{ path: '/list/:id', component: List },
		// 详情页
		{ path: '/detail/:id', component: Detail },
		// 付款
		{ path: '/payment', component: Payment }
	]
})
