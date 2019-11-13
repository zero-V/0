// 页面路由
let page = require('../page');
// 前端路由
let data = require('../data');
// 后台路由
let admin = require('../admin');
// 统一安装路由
module.exports = (app) => {
	// 安装三类路由中间件
	app.use(page)
	app.use(data)
	app.use(admin)
}