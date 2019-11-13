// 引入express
let express = require('express');
// ejs
let ejs = require('ejs');
// 引入path
let path = require('path');
// session
let session = require('express-session');
// 解析数据
let bodyParser = require('body-parser')
// 引入配置
let { STATIC } = require('../consts');


// 接口中
module.exports = (app) => {
	// ejs插值语法的标志
	ejs.delimiter = '$';
	// 设置模板
	app.set('view engine', 'ejs')
	// 拓展名
	app.engine('.html', ejs.__express);

	// 配置session
	app.use(session({
		secret: 'icketang',
		resave: true,
		saveUninitialized: false
	}))

	// 解析请求
	app.use(bodyParser.json())

	// 静态化统一配置
	for (let key in STATIC) {
		// key就是匹配的路径：'/static/'
		// STATIC[key]就是静态化的地址：'./static/'
		app.use(key, express.static(path.join(process.cwd(), STATIC[key])))
	}

	// 静态化
	// app.use('/static/', express.static(path.join(process.cwd(), './static/')))
	// // logo静态化
	// app.use('/favicon.ico', express.static(path.join(process.cwd(), './favicon.ico')))
	// 定义模拟数据的方式（mock数据）
	// 继续添加中间件
	// app.use('/data/', (req, res, next) => {
	// 	// console.log(req.url)
	// 	// 添加后缀名
	// 	// req.url += '.json';
	// 	// req.url = req.url.replace('?', '.json?')
	// 	// 将字符串，根据？切割成数组
	// 	let arr = req.url.split('?')
	// 	// 第一个成员添加.json
	// 	arr[0] += '.json';
	// 	// 数组拼接成字符串
	// 	req.url = arr.join('?')
	// 	// console.log(req.url)
	// 	next();
	// }, express.static(path.join(process.cwd(), '/static/data/')))
	// 数据接口
	// app.get('/data/home', (req, res) => {
	// 	res.json({ msg: 'success' })
	// })
}