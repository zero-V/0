<template>
<div class="ickt-header">
	<div class="header-left">
		<slot name="left"></slot>
	</div>
	<h1 @touchend="clickH1">{{title}}</h1>
	<div class="header-right">
		<slot name="right"></slot>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
@import '../base.scss';
.ickt-header {
	display: flex;
	background: $navColor;
	color: #fff;
	text-align: center;
	height: 50px;
	line-height: 50px;
	h1 {
		flex: 1;
		font-size: 24px;
		text-indent: -0.5em;
	}
	.header-left,
	.header-right {
		width: 60px;
		font-size: 16px;
	}
	.arrow {
		// 使用混合
		@include arrow(10px, #fff, right);
		position: relative;
		top: -5px;
		left: -8px;
		&:after {
			@include arrow(10px, $navColor, right);
			content: '';
			position: absolute;
			top: -10px;
			left: -7px;
		}
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 接收属性数据
	// props: ['title']
	props: {
		title: {
			default: '',
			type: String
		},
		clickTitle: {
			default: () => {}
		}
	},
	// 方法
	methods: {
		clickH1() {
			// 执行父组件传递的方法
			this.clickTitle()
		}
	}
}
</script>