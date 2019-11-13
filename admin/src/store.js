// 引入vuex vue
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

// 安装
Vue.use(Vuex);

// 暴露接口
export default new Store({
	state: {
		// num: 100
		username: ''
		// username: 'yyqh'
	}
})
