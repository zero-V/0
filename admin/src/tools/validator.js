// 暴露接口
export function checkUsername(filed, value, cb) {
	// console.log(arg)
	// 要校验值
	if (value === '') {
		// 提示错误
		return cb(new Error('用户名不能为空'))
	}
	// 用户名是4-8位
	if (!/^\w{4,8}$/.test(value)) {
		// 提示错误
		return cb(new Error('用户名是4-8位的'))
	}
	// 校验成功必须要执行cb
	cb();
}
// 校验密码
export function checkPassword(filed, value, cb) {
	// 要校验值
	if (value === '') {
		// 提示错误
		return cb(new Error('密码不能为空'))
	}
	// 密码必须包含字母和数字
	if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
		// 提示错误
		return cb(new Error('密码必须包含字母和数字'))
	}
	// 校验成功必须要执行cb
	cb();
}