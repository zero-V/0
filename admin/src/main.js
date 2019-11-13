// 引入vue
import Vue from 'vue';
// 引入axios
import axios from 'axios';
// 引入UI框架
import ElementUI from 'element-ui';
// 引入App
import App from './App';
// 引入store
import store from './store';
// 引入路由
import router from './router';
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'

// 安装axios
Vue.prototype.$http = axios;
// 安装ui
Vue.use(ElementUI);

// vue实例化对象
new Vue({
	// 注册store
	store,
	// 注册路由
	router,
	// 渲染
	render: h => h(App)
// 上树
}).$mount('#app')