// 页面路由中间件
let express = require('express');
// 引入路由实现的方法
let home = require('./home');
// 引入后台管理系统页面方法
let admin = require('./admin');
// 路由实例化对象
let router = new express.Router();

// 配置路由规则
// router.get('/', home)
// // 暴露接口
// module.exports = router;

// 合并一句话
module.exports = router
	// 首页路由
	.get('/', home)
	// 后台管理系统页面路由
	.get('/admin', admin)