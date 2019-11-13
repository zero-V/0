<template>
<div id="app">
	<Header title="爱创课堂团购网" :clickTitle="clickTitle">
		<span slot="left" class="arrow" @touchend="$router.go(-1)"></span>
		<span slot="right">登录</span>
	</Header>
	<Search v-show="$route.path.indexOf('/detail/') != 0 && $route.path !== '/payment'" placeholder="请输入搜索关键字" :search="search"></Search>
	<router-view/>
</div>
</template>
<style type="text/css">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, body {
	background: #efefef;
}
</style>
<script type="text/javascript">
// 引入组件
import Header from './components/Header';
import Search from './components/Search';
// 组件
export default {
	// 注册组件
	components: { Search, Header },
	// 方法
	methods: {
		// 搜索时候执行的方法
		search(value) {
			// console.log(arguments)
			// 组件之间共享数据
			this.$store.commit('updateSearch', value)
		},
		// 点击标题
		clickTitle() {
			this.$router.push('/')
		}
	}
}
</script>