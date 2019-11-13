// 引入path
let path = require('path');
// 配置发布
if (process.env.NODE_ENV === 'production') {
	// yarn build
	module.exports = {
		// 发布路径
		outputDir: path.join(process.cwd(), '../static/home/'),
		// 静态资源地址前面添加static/home
		publicPath: '/static/home',
		// 模板
		indexPath: path.join(process.cwd(), '../views/home.html')
	}
} else {
	// 代理配置对象
	let ProxyObject = {
		// 目标地址
		target: 'http://localhost:3000/'
	}
	// 其它指令
	// yarn serve
	module.exports = {
		// 配置服务器
		devServer: {
			// 代理
			proxy: {
				'/data/home': ProxyObject,
				// 列表页
				'/data/list': ProxyObject,
				// 商品请求
				'/data/product': ProxyObject
			}
		}
	}
}