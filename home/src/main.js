import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import axios from 'axios';
import './registerServiceWorker'

Vue.config.productionTip = false

// 安装axios
Vue.prototype.$http = axios;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
