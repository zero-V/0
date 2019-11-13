// 引入vue和路由
import Vue from 'vue';
import Router from 'vue-router';
// 引入所有的页面
import Home from './views/Home';
// 商品模块
import GoodsCreate from './views/goods/Create';
import GoodsList from './views/goods/List';
import GoodsEdit from './views/goods/Edit';
// 用户模块
import UserCreate from './views/user/Create';
import UserList from './views/user/List';
import UserEdit from './views/user/Edit';
// 首页模块
import HomeAds from './views/home/Ads';
import HomeTypes from './views/home/Types';
// 默认页面
import Main from './views/Main';

// 安装
Vue.use(Router);

// 暴露接口
export default new Router({
	routes: [
		// 商品模块
		{ path: '/', component: Home, children: [
			// 商品模块
			{ path: 'goods/create', component: GoodsCreate },
			{ path: 'goods/list/:page', component: GoodsList },
			{ path: 'goods/edit/:id', component: GoodsEdit },
			// 用户模块
			{ path: 'user/create', component: UserCreate },
			{ path: 'user/list/:page', component: UserList },
			{ path: 'user/edit/:id', component: UserEdit },
			// 首页
			{ path: 'home/ads', component: HomeAds },
			{ path: 'home/types', component: HomeTypes },
			// 默认路由
			{ path: '*', component: Main },
		] }
	]
})