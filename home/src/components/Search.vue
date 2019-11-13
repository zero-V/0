<template>
<div class="ickt-search">
	<input type="text" v-model="msg" :placeholder="placeholder" @keyup.enter="childSearch">
</div>
</template>
<style type="text/css" lang="scss">
// 响应式样式
.ickt-search {
	display: flex;
	padding: 10px 20px;
	background: #fff;
	input {
		flex: 1;
		font-size: 12px;
		padding: 10px 20px;
		border: none;
		outline: none;
		background: #efefef;
		color: #333;
		border-radius: 17px;
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 属性
	props: ['placeholder', 'search'],
	// 数据
	data() {
		return {
			msg: ''
		}
	},
	// 方法
	methods: {
		// 搜索
		childSearch() {
			// 将msg传递给父组件方法
			this.search(this.msg);
			// 清空
			this.msg = '';
		}
	}
}
</script>