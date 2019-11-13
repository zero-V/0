// 前端异步请求路由中间件
let express = require('express');
// 引入home
let home = require('./home');

// 定义路由实例化对象
let router = new express.Router();
// 暴露接口
module.exports = router
	// 获取首页的数据
	.get('/data/home', home)