<template>
<div class="page-login">
	<h1>请您登录</h1>
	<!-- element-ui提供了表单组件 -->
	<!-- 内容 -->
	<!-- 1 为form-item设置label -->
	<!-- 2 为form设置label-width -->
	<!-- 3 为input设置placeholder -->
	<!-- 表单校验 -->
	<!-- 1 v-model绑定数据 -->
	<!-- 2 为form设置model属性，绑定校验的数据 -->
	<!-- 3 为form-item设置prop属性，设置校验的数据属性名称 -->
	<!-- 4 为form组件设置校验规则：rules -->
	<!-- 登录 -->
	<!-- 1 绑定提交事件 -->
	<!-- 2 为form设置ref属性 -->
	<!-- 3 通过this.$refs获取表单，执行validate方法，进行校验 -->
	<!-- 4 设置password类型 -->
	<el-form label-width="100px" ref="login" :model="data" :rules="rules">
		<el-form-item label="用户名" prop="username">
			<el-input placeholder="请输入用户名" v-model="data.username"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="password">
			<el-input type="password" placeholder="请输入密码" v-model="data.password"></el-input>
		</el-form-item>
		<el-button @click="submitData" type="success">登录</el-button>
	</el-form>
</div>
</template>
<style type="text/css" lang="scss">
.page-login {
	position: absolute;
	left: 50%;
	top: 50%;
	padding: 20px;
	width: 400px;
	margin: -150px -220px;
	background: #fff;
	border-radius: 10px;
	h1 {
		font-size: 24px;
		border-bottom: 1px solid #ccc;
		text-align: center;
		padding-bottom: 10px;
	}
	.el-button {
		display: block;
		width: 100%;
	}
}
</style>
<script type="text/javascript">
// 引入校验策略算法
import { checkPassword, checkUsername } from '../tools/validator';
export default {
	// 数据
	data() {
		return {
			data: {
				username: '',
				password: ''
			},
			// 校验规则
			rules: {
				// key表示校验的字段。value数组，每一个成员代表一条校验规则
				// validator定义校验方法，trigger，定义何时校验
				username: [{ trigger: 'blur', validator: checkUsername }],
				password: [{ trigger: 'blur', validator: checkPassword }]
			}
		}
	},
	// 方法
	methods: {
		// 登录
		submitData() {
			// console.log(111, this.$refs)
			// 校验
			this.$refs.login
				.validate(valid => {
					// 登录
					this.$http
						.post('/admin/login', this.data)
						// 监听数据返回
						.then(({ data }) => console.log(data))
				})
		}
	}
}
</script>