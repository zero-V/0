<template>
<div id="app">
	<!-- <h1>app page -- {{$store.state.num}}</h1> -->
	<!-- 按钮 -->
	<!-- <el-button>hello</el-button> -->
	<!-- <el-button type="danger">hello</el-button> -->
	<Login v-if="!$store.state.username"></Login>
	<!-- 路由渲染位置 -->
	<router-view v-else></router-view>
</div>
</template>
<style type="text/css" lang="scss">
html, body {
	background: #efefef;
}
// $color: orange;
// h1 {
// 	color: $color;
// }
</style>
<script type="text/javascript">
// 引入组件
import Login from './views/Login';
// 组件
export default {
	// 注册组件
	components: { Login },
	created() {
		// console.log(this)
	}
}
</script>